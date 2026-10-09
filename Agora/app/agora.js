/* Ágora · lógica de la aplicación. Se carga después de todos los datos. */

/* Une cada ficha con sus lecturas. */
MODULES.forEach(m=>{ const L = LECTURAS[m.id]; if(L){ m.lecturas = L.lecturas; m.preguntasLectura = L.preguntasLectura; } });

/* ============================= STATE ============================= */
/* Forma del progreso guardado. `respuestas` y `repaso` se agregaron después: son
   opcionales, así que un progreso viejo se lee sin migrar (arrancan vacíos).
   - respuestas["<id>:preguntas:<i>" | "<id>:actividades:<i>"] = {texto, visto?, eval?, claves?}
   - repaso["<id>:conceptos:<i>" | "<id>:obras:<i>"] = {caja:0-5, prox:"AAAA-MM-DD"} */
function defaultProgress(){ return { conceptDone:{}, obraDone:{}, examHistory:[], streak:{last:null,count:0}, moduleQuiz:{}, respuestas:{}, repaso:{} }; }
let progress = defaultProgress();
let currentModule = null, currentDetTab = "panorama";
let flashIndex = 0, flashDeck = [], flashKind = "conceptos", flashTarget = "#detBody", flashGlobal = false;
let matchState = null;
let examState = null;

const STORAGE_KEY = "agora-progress-v1";

/* ============================= UTIL ============================= */
function $(sel, root){ return (root||document).querySelector(sel); }
function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function moduleById(id){ return MODULES.find(m=>m.id===id); }
function modulesByTrad(t){ return MODULES.filter(m=>m.trad===t); }
/* Fecha local (no UTC): así el "día" de la racha y la fecha de los exámenes cambian
   a medianoche en el reloj de quien estudia, no a las 19 h en Colombia. */
function localDateStr(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function todayStr(){ return localDateStr(new Date()); }
function yesterdayStr(){ return diasDesdeHoy(-1); }
function diasDesdeHoy(n){ const d = new Date(); d.setDate(d.getDate()+n); return localDateStr(d); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function getQuiz(d){ return (d.cuestionario && d.cuestionario.length) ? d.cuestionario : []; }

/* ============================= PROGRESS / LOCALSTORAGE ============================= */
/* El progreso vive en el localStorage de este navegador, bajo una sola clave.
   Se lee una única vez al arrancar (antes de que se pueda tocar nada) y se escribe de
   forma síncrona en cada cambio, así que no hace falta fusionar datos que lleguen tarde. */
let saveFailed = false;      // la última escritura falló (modo privado, almacenamiento lleno o bloqueado)
let storageCorrupt = false;  // lo guardado no se pudo leer y se empezó de cero
function isPlainObj(v){ return !!v && typeof v === "object" && !Array.isArray(v); }
function sanitizeProgress(raw){
  const p = defaultProgress();
  if(!isPlainObj(raw)) return p;
  ["conceptDone","obraDone"].forEach(k=>{
    if(!isPlainObj(raw[k])) return;
    Object.entries(raw[k]).forEach(([key,arr])=>{
      if(Array.isArray(arr)) p[k][key] = Array.from(new Set(arr.filter(n=>Number.isInteger(n) && n>=0)));
    });
  });
  if(Array.isArray(raw.examHistory)){
    p.examHistory = raw.examHistory.filter(h=>isPlainObj(h) && (LEVELS[h.trad] || h.trad==="final") && typeof h.score==="number");
  }
  if(isPlainObj(raw.moduleQuiz)){
    Object.entries(raw.moduleQuiz).forEach(([k,v])=>{ if(typeof v==="number" && isFinite(v)) p.moduleQuiz[k] = v; });
  }
  if(isPlainObj(raw.respuestas)){
    Object.entries(raw.respuestas).forEach(([k,v])=>{
      if(!isPlainObj(v)) return;
      const r = { texto: typeof v.texto==="string" ? v.texto.slice(0,20000) : "" };
      if(v.visto===true) r.visto = true;
      if(["si","parte","no"].includes(v.eval)) r.eval = v.eval;
      if(Array.isArray(v.claves)) r.claves = Array.from(new Set(v.claves.filter(n=>Number.isInteger(n) && n>=0 && n<10)));
      p.respuestas[k] = r;
    });
  }
  if(isPlainObj(raw.repaso)){
    Object.entries(raw.repaso).forEach(([k,v])=>{
      if(isPlainObj(v) && Number.isInteger(v.caja) && v.caja>=0 && v.caja<=5 && typeof v.prox==="string" && /^\d{4}-\d{2}-\d{2}$/.test(v.prox))
        p.repaso[k] = { caja:v.caja, prox:v.prox };
    });
  }
  if(isPlainObj(raw.streak)){
    p.streak.last = (typeof raw.streak.last==="string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.streak.last)) ? raw.streak.last : null;
    p.streak.count = (Number.isInteger(raw.streak.count) && raw.streak.count>0) ? raw.streak.count : 0;
  }
  return p;
}
function loadProgress(){
  let raw = null;
  try{ raw = localStorage.getItem(STORAGE_KEY); }
  catch(e){ saveFailed = true; progress = defaultProgress(); return; }
  if(raw == null){ progress = defaultProgress(); return; }
  try{ progress = sanitizeProgress(JSON.parse(raw)); }
  catch(e){
    progress = defaultProgress();
    storageCorrupt = true;
    /* Guardamos una copia de lo ilegible por si hiciera falta recuperarlo a mano. */
    try{ localStorage.setItem(STORAGE_KEY+"-corrupt-backup", raw); }catch(e2){}
  }
}
function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); saveFailed = false; }
  catch(e){ saveFailed = true; }
  renderStreak(); renderStatCards(); renderRepasoHoy(); renderLevelCards(); renderStorageNotice();
}
function renderStorageNotice(){
  const el = document.getElementById("storageNotice");
  if(!el) return;
  let msg = "";
  if(saveFailed) msg = "⚠️ Este navegador no deja guardar datos (¿modo privado o almacenamiento bloqueado?). Tu progreso vale solo mientras tengas esta página abierta.";
  else if(storageCorrupt) msg = "⚠️ El progreso guardado estaba dañado y no se pudo leer, así que empezamos de cero.";
  el.textContent = msg;
  el.classList.toggle("hidden", !msg);
}
function refreshProgressUI(){
  renderStreak(); renderStatCards(); renderRepasoHoy(); renderProgressView(); renderModuleCards(); renderExamHistory();
  const detActivo = document.getElementById("view-detalle").classList.contains("active");
  const repActivo = document.getElementById("view-repaso").classList.contains("active");
  if(flashDeck.length && ((detActivo && !flashGlobal && (currentDetTab==="conceptos" || currentDetTab==="obras")) || (repActivo && flashGlobal))) drawFlash();
}
/* Si la app está abierta en dos pestañas, la otra se entera de los cambios. */
window.addEventListener("storage", e=>{
  if(e.key !== STORAGE_KEY || e.newValue == null) return;
  try{ progress = sanitizeProgress(JSON.parse(e.newValue)); refreshProgressUI(); }catch(err){}
});
function bumpStreak(){
  const t = todayStr();
  if(progress.streak.last === t) return;
  progress.streak.count = (progress.streak.last === yesterdayStr()) ? (progress.streak.count||0)+1 : 1;
  progress.streak.last = t;
  saveProgress();
}
function renderStreak(){ $("#streakNum").textContent = progress.streak.count || 0; }

/* ============================= NAV ============================= */
const TABS = [
  {id:"inicio", label:"Inicio"},
  {id:"modulos", label:"Fichas"},
  {id:"constelaciones", label:"Constelaciones"},
  {id:"examenes", label:"Exámenes"},
  {id:"consejos", label:"Tips"},
  {id:"progreso", label:"Progreso"}
];
function renderTabs(){ $("#mainTabs").innerHTML = TABS.map(t=>`<button data-tab="${t.id}" onclick="showView('${t.id}')">${t.label}</button>`).join(""); }
function showView(id){
  /* Si el usuario se va de Exámenes con un examen en curso, cortamos el cronómetro:
     si no, seguía corriendo en segundo plano y finishExam() escribía un resultado
     fantasma en el historial sin que nadie lo viera. No se autocorrige: se cancela. */
  if(id !== "examenes" && examTimer && examState){
    clearInterval(examTimer);
    examTimer = null;
    examState = null;
    const runner = document.getElementById("examRunner");
    const intro = document.getElementById("examIntro");
    if(runner){ runner.classList.add("hidden"); runner.innerHTML = ""; }
    if(intro) intro.classList.remove("hidden");
    renderExamHistory();
  }
  /* El examen final no tiene cronómetro, pero si se sale a mitad se descarta, igual que el otro. */
  if(id !== "examenes" && finalState) cerrarExamenFinal();
  if(id === "constelaciones"){ constelActual = null; renderConstelaciones(); }
  $all(".view").forEach(v=>v.classList.remove("active"));
  const v = document.getElementById("view-"+id);
  if(v) v.classList.add("active");
  $all("#mainTabs button").forEach(b=>b.classList.toggle("active", b.dataset.tab===id));
  window.scrollTo({top:0, behavior:"instant"});
}

/* ============================= IDENTIDAD VISUAL =============================
   Monograma de cada ficha (en lugar de emojis), patrón suave por tradición y tema claro/oscuro. */
const MONOGRAMA = { platon:"Pl", aristoteles:"Ar", descartes:"De", kant:"Ka", hegel:"He", nietzsche:"Nz", heidegger:"Hd",
  wittgenstein:"Wi", confucio:"Co", laozi:"La", zhuangzi:"Zh", nagarjuna:"Na", shankara:"Sh", dogen:"Dō", nishida:"Ni",
  wangyangming:"Wy", peirce:"Pe", james:"Ja", dewey:"Dw", vasconcelos:"Va", zea:"Ze", dussel:"Du", rorty:"Ro", west:"We", falacias:"∴",
  arendt:"Ha", beauvoir:"Be", zambrano:"Za", sorjuana:"SJ", zuleta:"Zu" };
function clrDe(m){ return LEVELS[m.trad].clr; }
function varsTrad(m){ const c = clrDe(m); return `--tclr:var(--${c});--tsoft:var(--${c}-soft);`; }
function monograma(m, extra){ return `<span class="monog ${extra||''}" style="${varsTrad(m)}" aria-hidden="true">${MONOGRAMA[m.id] || m.nombre.slice(0,2)}</span>`; }
function cambiarTema(){
  const html = document.documentElement;
  const oscuro = html.dataset.theme ? html.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  html.dataset.theme = oscuro ? "light" : "dark";
  try{ localStorage.setItem("agora-tema", html.dataset.theme); }catch(e){}
  marcarTemaBtn();
}
function marcarTemaBtn(){
  const b = document.getElementById("temaBtn"); if(!b) return;
  const html = document.documentElement;
  const oscuro = html.dataset.theme ? html.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  b.textContent = oscuro ? "☀" : "☾";
  b.title = oscuro ? "Pasar al tema claro" : "Pasar al tema oscuro";
}

/* Avance de una ficha entre 0 y 1: conceptos y obras dominados, cuestionario y preguntas escritas. */
function preguntasEscritas(m){ return getQuiz(m).filter((_,i)=>palabras((progress.respuestas[m.id+":preguntas:"+i]||{}).texto)>0).length; }
function fraccionFicha(m){
  const c = (progress.conceptDone[m.id+":conceptos"]||[]).length / Math.max(1,m.conceptos.length);
  const o = (progress.obraDone[m.id+":obras"]||[]).length / Math.max(1,m.obras.length);
  const q = Math.min(100, progress.moduleQuiz[m.id]||0) / 100;
  const p = preguntasEscritas(m) / Math.max(1,getQuiz(m).length);
  return (c+o+q+p)/4;
}
function estadoFicha(m){
  const f = fraccionFicha(m);
  if(f===0) return "nueva";
  const completa = (progress.moduleQuiz[m.id]||0)>=70 && (progress.conceptDone[m.id+":conceptos"]||[]).length===m.conceptos.length && preguntasEscritas(m)===getQuiz(m).length;
  return completa ? "completa" : "empezada";
}
const INSIGNIAS = [
  { i:"🏛️", n:"Primeros pasos", c:"Terminá el cuestionario final de una ficha.", ok:()=>Object.keys(progress.moduleQuiz).length>0 },
  { i:"🌍", n:"Tres tradiciones", c:"Aprobá (70 % o más) el cuestionario de una ficha europea, una asiática y una americana.",
    ok:()=>["europea","asiatica","americana"].every(t=>modulesByTrad(t).some(m=>(progress.moduleQuiz[m.id]||0)>=70)) },
  { i:"✍️", n:"Pluma", c:"Respondé por escrito 10 preguntas.", ok:()=>MODULES.reduce((a,m)=>a+preguntasEscritas(m),0)>=10 },
  { i:"🧠", n:"Memoria larga", c:"Llevá 20 tarjetas a la caja 3 o más del repaso espaciado.", ok:()=>Object.values(progress.repaso).filter(r=>r.caja>=3).length>=20 },
  { i:"🔥", n:"Constancia", c:"Estudiá 7 días seguidos.", ok:()=>(progress.streak.count||0)>=7 },
  { i:"🎓", n:"Examen final", c:"Aprobá el examen final integrador.", ok:()=>(progress.examHistory||[]).some(h=>h.trad==="final" && h.score>=70) }
];

/* ============================= HOME ============================= */
const NUM_PALABRA = {25:"Veinticinco",26:"Veintiséis",27:"Veintisiete",28:"Veintiocho",29:"Veintinueve",30:"Treinta",31:"Treinta y una",32:"Treinta y dos",33:"Treinta y tres",34:"Treinta y cuatro",35:"Treinta y cinco"};
function renderLevelCards(){
  const port = document.getElementById("portada");
  if(port) port.innerHTML = `${NUM_PALABRA[MODULES.length] || MODULES.length} maneras de <em>pensar</em> el mundo`;
  $("#levelCards").innerHTML = Object.entries(LEVELS).map(([k,l])=>{
    const ms = modulesByTrad(k);
    if(!ms.length) return "";
    const hechas = ms.filter(m=>estadoFicha(m)!=="nueva").length;
    return `<section class="tradcard" style="--tclr:var(--${l.clr});--tsoft:var(--${l.clr}-soft);">
      <button class="tradcab pat-${l.clr}" onclick="openLevel('${k}')">
        <span class="kicker">${ms.length} ficha${ms.length===1?'':'s'} · ${hechas} empezada${hechas===1?'':'s'}</span>
        <span class="tradnom">${l.label}</span>
        <span class="traddesc">${l.desc}</span>
      </button>
      <ol class="tradlist">${ms.map(m=>{ const e = estadoFicha(m); return `
        <li><button onclick="openModule('${m.id}')"><span class="punto ${e}" title="${e==='nueva'?'Sin empezar':e==='completa'?'Completa':'Empezada'}"></span>
          <span class="tradn">${m.nombre}</span><span class="tradf">${m.fechas.split("·")[0].trim()}</span></button></li>`; }).join("")}</ol>
    </section>`;
  }).join("");
}
function openLevel(t){ showView("modulos"); setModFilter(t); }
function renderStatCards(){
  const el = $("#statCards"); if(!el) return;
  const fichas = MODULES.filter(m=>m.trad!=="metodo");
  const total = Math.round(100 * MODULES.reduce((a,m)=>a+fraccionFicha(m),0) / MODULES.length);
  const empezadas = MODULES.filter(m=>estadoFicha(m)!=="nueva").length, completas = MODULES.filter(m=>estadoFicha(m)==="completa").length;
  const ganadas = INSIGNIAS.filter(x=>x.ok()), prox = INSIGNIAS.find(x=>!x.ok());
  el.innerHTML = `
    <div class="card hoycard">
      <div class="kicker">Tu recorrido</div>
      <div class="hoynum">${total} %</div>
      <div class="recbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${total}"><i style="width:${total}%"></i></div>
      <div class="muted">${empezadas} ficha${empezadas===1?'':'s'} empezada${empezadas===1?'':'s'} · ${completas} completa${completas===1?'':'s'}</div>
    </div>
    <div class="card hoycard">
      <div class="kicker">Insignias · ${ganadas.length}/${INSIGNIAS.length}</div>
      <div class="insignias">${INSIGNIAS.map(x=>`<span class="insignia ${x.ok()?'ok':''}" title="${x.n}: ${x.c}${x.ok()?' (ganada)':''}">${x.i}</span>`).join("")}</div>
      <div class="muted">${prox?`Próxima: <b>${prox.n}</b>. ${prox.c}`:'¡Las tenés todas!'}</div>
    </div>`;
}

/* ============================= MODULES ============================= */
let modFilter = "ALL";
function setModFilter(t){ modFilter = t; renderModFilterChips(); renderModuleCards(); }
function renderModFilterChips(){
  const opts = [["ALL","Todas"],["europea","Europea"],["asiatica","Asiática"],["americana","Americana"],["metodo","Método"]];
  $("#modLevelFilter").innerHTML = opts.map(([k,label])=>
    `<span class="chip ${modFilter===k?'active':''}" onclick="setModFilter('${k}')">${label}</span>`).join("");
}
function renderModuleCards(){
  const list = modFilter==="ALL" ? MODULES : modulesByTrad(modFilter);
  $("#moduleCards").innerHTML = list.map(m=>{
    const score = progress.moduleQuiz[m.id];
    const clr = LEVELS[m.trad].clr;
    const pct = Math.round(100*fraccionFicha(m));
    return `<button class="card modcard pat-${clr}-borde" style="--tclr:var(--${clr});--tsoft:var(--${clr}-soft);" onclick="openModule('${m.id}')">
      ${monograma(m)}
      <span class="modtxt"><span class="kicker">${LEVELS[m.trad].label} · ${m.fechas.split("·")[0].trim()}</span>
      <span class="modnom">${m.nombre}</span>
      <span class="meta">${m.escuela}</span></span>
      <span class="modbar" title="Avance ${pct} %"><i style="width:${pct}%"></i></span>
    </button>`;
  }).join("");
}

/* ============================= MODULE DETAIL ============================= */
/* Las pestañas de una ficha se agrupan en tres momentos, en el orden en que conviene
   recorrerlos: primero se estudia, después se practica el reconocimiento y al final
   se piensa y se escribe. Solo se muestran las pestañas del grupo activo. */
const DET_GRUPOS = [
  { id:"estudiar",  label:"1 · Estudiar",  tabs:[["panorama","Panorama"],["conceptos","Conceptos"],["obras","Obras"],["lecturas","Lecturas"],["dialogo","Diálogo"]] },
  { id:"practicar", label:"2 · Practicar", tabs:[["repaso","Repaso mixto"],["emparejar","Emparejar"],["cuestionario","Cuestionario final"]] },
  { id:"pensar",    label:"3 · Pensar",    tabs:[["preguntas","Preguntas"],["razonamiento","Razonamiento"],["argumentos","Argumentos"],["dilema","Dilema"],["actividades","Escribir"]] }
];
const DET_RENDER = {
  panorama:()=>renderPanorama(), conceptos:()=>renderFlashcards("conceptos"), obras:()=>renderFlashcards("obras"),
  lecturas:()=>renderLecturas(), dialogo:()=>renderDialogue(),
  repaso:()=>renderRepasoMixto(), emparejar:()=>renderMatching(), cuestionario:()=>renderModuleQuiz(),
  preguntas:()=>renderPreguntas(), razonamiento:()=>renderCadena(), argumentos:()=>renderReconstruccion(),
  dilema:()=>renderDilema(), actividades:()=>renderActivities()
};
function grupoDe(tab){ return DET_GRUPOS.find(g=>g.tabs.some(([k])=>k===tab)) || DET_GRUPOS[0]; }
function openModule(id, tab){
  currentModule = moduleById(id);
  currentDetTab = DET_RENDER[tab] ? tab : "panorama";
  const m = currentModule, partes = m.fechas.split("·").map(x=>x.trim());
  $("#view-detalle").setAttribute("style", varsTrad(m));
  $("#detHero").innerHTML = `<div class="dethero pat-${clrDe(m)}">${monograma(m,"grande")}
    <div><div class="kicker">${LEVELS[m.trad].label} · ${m.escuela}</div><h1>${m.nombre}</h1><div class="detmeta">${partes.join(" · ")}</div></div></div>`;
  showView("detalle");
  renderDetTab();
}
function setDetTab(k){ currentDetTab = k; renderDetTab(); }
function setDetGrupo(g){ setDetTab(DET_GRUPOS.find(x=>x.id===g).tabs[0][0]); }
function renderDetTabs(){
  const g = grupoDe(currentDetTab);
  const SUB = { estudiar:"panorama, conceptos, obras, lecturas", practicar:"repaso, emparejar, cuestionario", pensar:"preguntas, razonamiento, dilema" };
  $("#detTabs").innerHTML = `
    <div class="grouptabs" role="tablist">${DET_GRUPOS.map(x=>`<button class="${x.id===g.id?'active':''}" aria-pressed="${x.id===g.id}" onclick="setDetGrupo('${x.id}')"><b>${x.label}</b><small>${SUB[x.id]}</small></button>`).join("")}</div>
    <div class="subtabs">${g.tabs.map(([k,l])=>`<button data-dt="${k}" class="${k===currentDetTab?'active':''}" onclick="setDetTab('${k}')">${l}</button>`).join("")}</div>`;
}
function renderDetTab(){
  flashGlobal = false;
  renderDetTabs();
  DET_RENDER[currentDetTab]();
}

/* --- Panorama: tesis, conexión y la ruta sugerida con el avance en esta ficha --- */
function renderPanorama(){
  const d = currentModule;
  if(reinicioFicha && reinicioFicha !== d.id) reinicioFicha = null;
  const clr = LEVELS[d.trad].clr;
  const domC = (progress.conceptDone[d.id+":conceptos"]||[]).length;
  const domO = (progress.obraDone[d.id+":obras"]||[]).length;
  const nPreg = getQuiz(d).length;
  const resp = getQuiz(d).filter((_,i)=>palabras((progress.respuestas[d.id+":preguntas:"+i]||{}).texto)>0).length;
  const quiz = progress.moduleQuiz[d.id];
  const hoy = mazoFicha(d, "conceptos").concat(mazoFicha(d, "obras")).filter(c=>srsVence(c)).length;
  const avanzados = ["cadena","reconstruccion","dilemas"].filter(k=>d[k] && (!Array.isArray(d[k]) || d[k].length)).length;
  const paso = (n, titulo, detalle, tab, hecho)=>`
    <li class="rutapaso${hecho?' hecho':''}"><span class="rutanum">${hecho?'✓':n}</span>
      <div><button class="linkbtn" onclick="setDetTab('${tab}')">${titulo}</button><div class="rutadet">${detalle}</div></div></li>`;
  $("#detBody").innerHTML = `
    <div class="panocols">
      <div>
        <div class="kicker">Tesis central</div>
        <p class="tesis capital">${d.tesis}</p>
        <div class="paraconf"><div class="kicker">Para no confundir</div><div>${d.conexion}</div></div>
      </div>
      <aside class="margen">
        <div class="kicker">Tu ruta en esta ficha</div>
        <ol class="ruta">
          ${paso(1,"Lecturas","Fuente o comentario, con su nota de lectura.","lecturas", false)}
          ${paso(2,"Conceptos y obras",`${domC}/${d.conceptos.length} conceptos · ${domO}/${d.obras.length} obras${hoy?` · <b>${hoy} para hoy</b>`:''}`,"conceptos", domC===d.conceptos.length && domO===d.obras.length && !hoy)}
          ${paso(3,"Diálogo","Las objeciones fuertes y las respuestas.","dialogo", false)}
          ${paso(4,"Practicar",quiz!=null?`Último cuestionario: ${quiz} %`:"Repaso mixto, emparejar y cuestionario.","repaso", quiz!=null && quiz>=70)}
          ${paso(5,"Preguntas",`${resp}/${nPreg} respondidas por escrito`,"preguntas", nPreg>0 && resp===nPreg)}
          ${paso(6,"Pensar",avanzados?"Razonamiento, argumentos y dilema.":"Ejercicios todavía no disponibles.","razonamiento", false)}
        </ol>
        <button class="linkbtn reset" onclick="reiniciarFicha('${d.id}')">${reinicioFicha===d.id?'¿Seguro? Se borra lo de esta ficha (tarjetas, repasos, cuestionario y lo escrito). Tocá de nuevo para confirmar.':'Reiniciar el progreso de esta ficha'}</button>
      </aside>
    </div>`;
}

/* --- Tarjetas (Conceptos, Obras y el repaso de hoy) con repetición espaciada ---
   Sistema de cajas (Leitner): "la tengo clara" sube la tarjeta una caja y la agenda
   para dentro de 1, 3, 7, 14 o 30 días; "repasar de nuevo" la devuelve a la caja 0
   y queda para hoy. `conceptDone`/`obraDone` siguen marcando las dominadas, como antes. */
const SRS_DIAS = [0, 1, 3, 7, 14, 30];
function progKeyStore(kind){ return kind==="obras" ? progress.obraDone : progress.conceptDone; }
function srsKey(c){ return c.mod.id+":"+c.kind+":"+c.idx; }
function esDominada(c){ return (progKeyStore(c.kind)[c.mod.id+":"+c.kind]||[]).includes(c.idx); }
/* Estado de una tarjeta: null si nunca se marcó. Las dominadas de antes del repaso
   espaciado no tienen fecha: se toman como vencidas para que entren en el ciclo. */
function srsEstado(c){
  const r = progress.repaso[srsKey(c)];
  if(r) return r;
  return esDominada(c) ? { caja:1, prox:todayStr() } : null;
}
function srsVence(c){ const r = srsEstado(c); return !!r && r.prox <= todayStr(); }
function mazoFicha(mod, kind){ return (mod[kind]||[]).map((_,idx)=>({mod, kind, idx})); }
function tarjetasParaHoy(){ return MODULES.flatMap(m=>[...mazoFicha(m,"conceptos"), ...mazoFicha(m,"obras")]).filter(srsVence); }
function diasEntre(a, b){ return Math.round((new Date(b+"T12:00") - new Date(a+"T12:00"))/86400000); }
function srsEtiqueta(c){
  const r = srsEstado(c);
  if(!r) return "nueva";
  if(r.prox <= todayStr()) return "📅 toca repasarla hoy";
  const n = diasEntre(todayStr(), r.prox);
  return `✅ próximo repaso ${n===1?'mañana':'en '+n+' días'} · caja ${r.caja}/5`;
}
function renderFlashcards(kind){
  flashKind = kind;
  flashTarget = "#detBody";
  const mazo = mazoFicha(currentModule, kind);
  /* Primero las que vencen hoy, después las nuevas y al final las que todavía no tocan. */
  const vencen = mazo.filter(srsVence), nuevas = mazo.filter(c=>!srsEstado(c)), resto = mazo.filter(c=>srsEstado(c) && !srsVence(c));
  flashDeck = [...shuffle(vencen), ...shuffle(nuevas), ...shuffle(resto)];
  flashIndex = 0;
  drawFlash();
}
/* Repaso de hoy: todas las tarjetas vencidas de todas las fichas, en una sola sesión. */
function renderRepasoHoy(){
  const el = document.getElementById("repasoHoy");
  if(!el) return;
  const n = tarjetasParaHoy().length;
  el.innerHTML = n
    ? `<div class="card hoycard repasohoy"><div class="kicker">Repaso de hoy</div>
        <div class="hoytit">${n} tarjeta${n===1?' te espera':'s te esperan'}</div>
        <div class="muted">Las marcaste como claras hace un tiempo: repasarlas justo ahora es lo que las fija.</div>
        <button class="btn" onclick="startRepasoGlobal()">Empezar el repaso →</button></div>`
    : `<div class="card hoycard repasohoy"><div class="kicker">Repaso de hoy</div>
        <div class="hoytit">Nada pendiente</div>
        <div class="muted">Cuando marques una tarjeta como «la tengo clara», la app te la vuelve a mostrar al día siguiente, y después a los 3, 7, 14 y 30 días.</div></div>`;
}
function startRepasoGlobal(){
  flashGlobal = true;
  flashTarget = "#repasoBody";
  flashDeck = shuffle(tarjetasParaHoy());
  flashIndex = 0;
  showView("repaso");
  drawFlash();
}
function drawFlash(){
  const box = $(flashTarget);
  if(!flashDeck.length){
    box.innerHTML = `<div class="qcard center"><div class="resultbig">🎉</div><p>Terminaste el repaso de hoy.</p>
      <button class="btn ghost" onclick="showView('inicio')">Volver al inicio</button></div>`;
    return;
  }
  if(flashIndex >= flashDeck.length) flashIndex = 0;
  const c = flashDeck[flashIndex];
  const item = c.mod[c.kind][c.idx];
  const known = progKeyStore(c.kind)[c.mod.id+":"+c.kind] || [];
  const largo = String(item.d||"").length > 260;
  const tipo = c.kind==="obras" ? "Obra" : "Concepto";
  const contador = flashGlobal
    ? `Repaso de hoy · quedan ${flashDeck.length} · ${tipo} de ${c.mod.nombre}`
    : `${tipo} ${flashIndex+1} / ${flashDeck.length} · dominadas ${known.length}/${c.mod[c.kind].length} · para hoy ${flashDeck.filter(srsVence).length}`;
  box.innerHTML = `
    <div class="flashwrap">
      <div class="flashcounter">${contador}</div>
      <div class="flashnotice">${flashNotice || ""}${saveFailed?' · ⚠️ no se pudo guardar en este navegador':''}</div>
      <div class="flashcard"><div class="flashinner" id="flashInner" tabindex="0" role="button" aria-label="Voltear tarjeta" onclick="flipFlash()" onkeydown="flashKeydown(event)">
        <div class="flashface front">
          ${monograma(c.mod)}
          <div class="clue${largo?' long':''}">“${enmascarar(item.d, item.t)}”</div>
          <div class="hintline">${largo?'desplazá el texto si hace falta · tocá la tarjeta para ver el nombre':'tocá la tarjeta para ver el nombre'}</div>
        </div>
        <div class="flashface back">
          <div class="big">${item.t}</div>
        </div>
      </div></div>
      <div class="flashactions">
        <button class="btn ghost sm" onclick="markKnown(false)">🔁 Repasar de nuevo</button>
        <button class="btn sm" onclick="markKnown(true)">👍 La tengo clara</button>
      </div>
      <div class="flashnav">
        ${flashGlobal?'<span></span>':'<button class="iconbtn" onclick="stepFlash(-1)" aria-label="Anterior">←</button>'}
        <span class="muted" style="font-size:.8rem;">${srsEtiqueta(c)}</span>
        ${flashGlobal?'<span></span>':'<button class="iconbtn" onclick="stepFlash(1)" aria-label="Siguiente">→</button>'}
      </div>
    </div>`;
  flashNotice = "";
  const inner = $("#flashInner");
  if(inner){
    let sx=0, sy=0;
    inner.addEventListener("pointerdown", e=>{ sx=e.clientX; sy=e.clientY; flashDragged=false; });
    inner.addEventListener("pointerup", e=>{
      if(Math.abs(e.clientX-sx)>8 || Math.abs(e.clientY-sy)>8) flashDragged=true;
    });
  }
}
/* Evita que un arrastre para desplazar el texto largo (o para seleccionarlo) voltee la tarjeta. */
let flashDragged = false;
function flipFlash(){
  if(flashDragged){ flashDragged=false; return; }
  const sel = window.getSelection && String(window.getSelection());
  if(sel && sel.length>2) return;
  $("#flashInner").classList.toggle("flipped");
}
/* Misma acción que el clic, pero desde el teclado: Enter o Espacio sobre la tarjeta enfocada. */
function flashKeydown(e){
  if(e.key === "Enter" || e.key === " " || e.key === "Spacebar" || e.code === "Space"){
    e.preventDefault();
    flashDragged = false;
    const inner = $("#flashInner");
    if(inner) inner.classList.toggle("flipped");
  }
}
function stepFlash(d){ flashIndex = (flashIndex + d + flashDeck.length) % flashDeck.length; drawFlash(); }
/* Mensaje corto que explica qué acaba de hacer el botón: sin esto no se veía
   el cambio, porque la tarjeta salta a la siguiente. */
let flashNotice = "";
function markKnown(known){
  const c = flashDeck[flashIndex];
  if(!c) return;
  const antes = srsEstado(c);   // antes de tocar `conceptDone`, que también cuenta para el estado
  const store = progKeyStore(c.kind);
  const key = c.mod.id+":"+c.kind;
  const list = new Set(store[key] || []);
  if(known) list.add(c.idx); else list.delete(c.idx);
  store[key] = Array.from(list);
  const caja = known ? Math.min(5, (antes ? antes.caja : 0) + 1) : 0;
  progress.repaso[srsKey(c)] = { caja, prox: diasDesdeHoy(SRS_DIAS[caja]) };
  const nombre = c.mod[c.kind][c.idx].t;
  flashNotice = known
    ? `✅ “${nombre}”: la vas a volver a ver ${SRS_DIAS[caja]===1?'mañana':'en '+SRS_DIAS[caja]+' días'}`
    : `🔁 “${nombre}” vuelve a la lista de hoy`;
  saveProgress();
  if(flashGlobal){
    flashDeck.splice(flashIndex, 1);
    if(!known) flashDeck.push(c);   // la que no salió vuelve al final de la sesión
    drawFlash();
  } else stepFlash(1);
}

/* --- Lecturas (textos fuente + comentario) --- */
function wordCount(s){ return String(s).trim().split(/\s+/).filter(Boolean).length; }
/* Marca las fuentes que están en inglés: el extracto y el comentario siempre van en español. */
const FUENTES_EN = [/plato\.stanford\.edu/i, /zcla\.org/i];
function fuenteEnIngles(url){ return FUENTES_EN.some(re=>re.test(url||"")); }
function renderLecturas(){
  const d = currentModule;
  const clr = LEVELS[d.trad].clr;
  const lecs = d.lecturas || [];
  if(!lecs.length){
    $("#detBody").innerHTML = `<div class="lecnote">Todavía no hay lecturas cargadas para esta ficha.</div>`;
    return;
  }
  const nPreg = (d.preguntasLectura||[]).length;
  $("#detBody").innerHTML = `
    <div class="lecwrap" style="--tclr:var(--${clr});">
      <div class="lecnote">📖 ${lecs.length} ${lecs.length===1?'lectura':'lecturas'} para esta ficha.
        Los extractos son síntesis de trabajo con citas directas, pensadas para el aula; seguí siempre el enlace a la fuente para leer el texto completo.
        ${nPreg?`En el <b>Cuestionario final</b> vas a encontrar ${nPreg} pregunta${nPreg===1?'':'s'} basada${nPreg===1?'':'s'} en estas lecturas.`:''}</div>
      ${lecs.map(l=>`
        <article class="lectura">
          <header>
            <h4>${l.titulo}</h4>
            <div class="lecsrc"><span>📚 ${l.fuente}</span>${fuenteEnIngles(l.url)?`<span>·</span><span title="La fuente original está en inglés; el extracto y el comentario están traducidos y resumidos al español.">🌐 fuente en inglés</span>`:""}${l.url?`<span>·</span><a href="${l.url}" target="_blank" rel="noopener noreferrer">abrir la fuente ↗</a>`:""}</div>
          </header>
          <div class="lecmeta">~${wordCount(l.extracto)} palabras · tiempo estimado de lectura ${Math.max(1,Math.round(wordCount(l.extracto)/180))} min</div>
          <div class="lecbody">${l.extracto.split(/\n\s*\n/).map(p=>`<p>${p.trim()}</p>`).join("")}</div>
          ${l.comentario?`<div class="leccoment"><b>Para leerlo con la ficha</b>${l.comentario}</div>`:""}
        </article>`).join("")}
    </div>`;
}

/* --- Dialogue (custom or auto-built from cuestionario) --- */
function autoDialogue(d){
  const qs = getQuiz(d).slice(0,3);
  const lineas = [];
  qs.forEach(item=>{
    lineas.push({quien:"Tú", texto:item.q});
    lineas.push({quien:d.nombre, texto:item.p});
  });
  return { titulo:"Conversación a partir del cuestionario", lineas };
}
function renderDialogue(){
  const dlg = currentModule.dialogo || autoDialogue(currentModule);
  $("#detBody").innerHTML = `
    <h4 style="margin-bottom:10px;">${dlg.titulo}</h4>
    <div id="diagLines">
      ${dlg.lineas.map(l=>`
        <div class="diagline">
          <div class="who">${l.quien}</div>
          <div class="txt">
            <div>${l.texto}</div>
            ${l.nota?`<div class="dlgnote">💡 ${l.nota}</div>`:""}
          </div>
        </div>`).join("")}
    </div>`;
}

/* --- Distractores cercanos: más difíciles, pero siempre inequívocamente incorrectos ---
   En lugar de elegir distractores al azar en todo el catálogo, se ordenan los candidatos
   por parecido léxico/temático con la respuesta correcta (palabras compartidas en el
   título y en la definición) y se prefiere, por niveles: 1) otros conceptos/obras de la
   MISMA ficha, 2) de la misma tradición, 3) del resto. Cada candidato es un título real y
   distinto de la respuesta, así que sigue siendo incorrecto para quien conoce el material. */
const SIM_STOP = new Set(["para","como","pero","sino","desde","hasta","entre","sobre","cada","todo","toda","todos","todas","otra","otro","otros","otras","este","esta","estos","estas","aquel","aquella","porque","cuando","donde","mismo","misma","mismos","mismas","tiene","tienen","puede","pueden","hace","hacen","solo","tambien","segun","cual","cuales","quien","quienes","cosa","cosas","algo","nada","modo","vez","veces","ellos","ellas","esto","eso","aqui","alli","mucho","mucha","muchos","muchas","menos","mas","tanto","tanta","tambien","ademas","luego","entonces","asi","aunque","parte","partes","decir","dice","dicen","hacer","sera","seria","sido","esta","estan","hay","habia","todavia","siempre","nunca","obra","obras","libro","libros","concepto","texto"]);
const _simCache = new Map();
function simTokens(s){
  const k = String(s||"");
  if(_simCache.has(k)) return _simCache.get(k);
  const set = new Set();
  k.replace(/<[^>]+>/g," ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
   .split(/[^a-z0-9]+/).forEach(w=>{ if(w.length>=4 && !SIM_STOP.has(w)) set.add(w.slice(0,6)); });
  _simCache.set(k, set);
  return set;
}
function overlapCount(a,b){ let n=0; a.forEach(x=>{ if(b.has(x)) n++; }); return n; }
function simScore(target, cand){
  const tT = simTokens(target.t), cT = simTokens(cand.t);
  const tA = simTokens(target.t+" "+(target.d||"")), cA = simTokens(cand.t+" "+(cand.d||""));
  return 3*overlapCount(tT,cT) + 12*overlapCount(tA,cA)/Math.sqrt((tA.size+1)*(cA.size+1));
}
/* Los n candidatos más parecidos, con un poco de azar entre los primeros para que las rondas varíen. */
function rankPick(target, cands, n){
  if(n<=0 || !cands.length) return [];
  const ranked = cands.map(c=>({c, s:simScore(target,c)+Math.random()*0.15})).sort((a,b)=>b.s-a.s).map(x=>x.c);
  const ventana = ranked.slice(0, Math.min(ranked.length, n+2));
  return shuffle(ventana).slice(0,n);
}
/* tiers: [{items:[{t,d,de}], max?}] en orden de preferencia. Nunca repite títulos ni devuelve el correcto. */
function pickClosest(target, tiers, n){
  const used = new Set([target.t]);
  const out = [];
  for(const tier of tiers){
    if(out.length>=n) break;
    const items = Array.isArray(tier) ? tier : tier.items;
    const max = Array.isArray(tier) ? n : Math.min(n, tier.max==null?n:tier.max);
    const cands = [], vistos = new Set();
    items.forEach(x=>{ if(!used.has(x.t) && !vistos.has(x.t)){ vistos.add(x.t); cands.push(x); } });
    rankPick(target, cands, Math.min(max, n-out.length)).forEach(x=>{ used.add(x.t); out.push(x); });
  }
  return out;
}
function itemsDe(mods, kind){ return mods.flatMap(m=>(m[kind]||[]).map(x=>({t:x.t, d:x.d, de:m}))); }
/* Salvaguarda de equidad: un distractor de OTRO autor que comparte el término principal con
   la respuesta (p. ej. "Ziran" en Laozi y en Zhuangzi, "Dialéctica" en Hegel y en Platón) podría
   ser defendible como correcto. Esos candidatos se descartan. */
const TITLE_STOP = new Set("de la el y en a o u e lo los las del al que por con sin un una uno su sus se es no ni mas muy como para sobre entre ante frente capitulo capitulos libro".split(" "));
const _titCache = new Map();
function titleTokens(s){
  const k = String(s||"");
  if(_titCache.has(k)) return _titCache.get(k);
  const set = new Set();
  k.replace(/<[^>]+>/g," ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
   .split(/[^a-z0-9]+/).forEach(w=>{ if(w.length>=2 && !TITLE_STOP.has(w)){ if(w.length>4 && w.endsWith("s")) w=w.slice(0,-1); set.add(w.slice(0,6)); } });
  _titCache.set(k, set);
  return set;
}
function headOf(t){ return String(t).split(/[(:]/)[0]; }
/* --- Enunciados sin pistas ---
   Las definiciones suelen nombrar su propio término ("Svabhava significa..."), y así la
   pregunta se resolvía buscando la palabra. `enmascarar` tapa en el texto las palabras
   del título del ítem (sin acentos, singular y por raíz de 6 letras), sin tocar el HTML.
   `pista` además recorta a las primeras oraciones, para que el enunciado se pueda leer. */
function normPalabra(w){
  let n = w.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  if(n.length>4 && n.endsWith("s")) n = n.slice(0,-1);
  return n;
}
function enmascarar(texto, titulo){
  const claves = titleTokens(titulo);
  return String(texto||"").split(/(<[^>]+>)/).map(seg=> seg.startsWith("<") ? seg :
    seg.replace(/[\p{L}\p{M}]+/gu, w=>{
      const n = normPalabra(w);
      if(n.length<3) return w;
      if(n.length===3) return claves.has(n) ? "▁▁▁" : w;
      if(claves.has(n.slice(0,6))) return "▁▁▁";
      /* raíces cortas del título ("moral") también tapan sus variantes ("morales") */
      for(const c of claves) if(c.length>=4 && c.length<6 && n.startsWith(c) && n.length<=c.length+3) return "▁▁▁";
      return w;
    })).join("");
}
function palabras(s){ return String(s||"").replace(/<[^>]+>/g," ").trim().split(/\s+/).filter(Boolean).length; }
function recortar(texto, min, max){
  min = min||40; max = max||90;
  const oraciones = String(texto||"").split(/(?<=[.!?…»])\s+(?=[¿¡«“"A-ZÁÉÍÓÚÑ])/);
  let out = "";
  for(const o of oraciones){
    if(out && palabras(out+" "+o) > max) break;
    out = out ? out+" "+o : o;
    if(palabras(out) >= min) break;
  }
  if(palabras(out) > max+30){   // una sola oración larguísima: se corta por palabras, sin HTML
    out = out.replace(/<[^>]+>/g,"").split(/\s+/).slice(0,max).join(" ")+"…";
  } else if(out.length < String(texto||"").length) out += " […]";
  return out;
}
function pista(item){ return recortar(enmascarar(item.d, item.t)); }
/* ¿El candidato podría pasar por correcto? Sí si comparte un término de título con `ref.titles`,
   o si todo su término principal ya aparece en `ref.text`. */
function riesgoAmbiguo(cand, ref){
  const head = titleTokens(headOf(cand.t));
  const all = titleTokens(cand.t);
  const rt = new Set(); ref.titles.forEach(t=>titleTokens(t).forEach(x=>rt.add(x)));
  for(const x of all) if(rt.has(x)) return true;
  if(!head.size) return false;
  const txt = titleTokens(ref.text);
  for(const x of head) if(!txt.has(x)) return false;
  return true;
}
/* Fichas de una misma escuela comparten vocabulario y doctrinas (wú wéi en Laozi y Zhuangzi,
   la piedad filial en Confucio y Wang Yangming, el método pragmático en Peirce y James...).
   Entre ellas no se toman distractores: "esto no es de Zhuangzi, es de Laozi" podría ser discutible. */
const ESCUELAS = [["laozi","zhuangzi"],["confucio","wangyangming"],["nagarjuna","dogen","nishida"],["peirce","james","dewey","rorty","west"],["vasconcelos","zea","dussel"]];
function mismaEscuela(a,b){ return ESCUELAS.some(g=>g.includes(a.id) && g.includes(b.id)); }
function textoFicha(mod){ return [mod.tesis, ...(mod.conceptos||[]).map(c=>c.t+" "+c.d), ...(mod.obras||[]).map(o=>o.t+" "+o.d)].join(" "); }
/* Niveles de candidatos para un concepto/obra `item` de `mod`, en orden de preferencia:
   [misma ficha, misma tradición, resto]. Modos:
   - "mcq": se descartan candidatos de otros autores que podrían pasar por la respuesta.
   - "def": como mcq, y además dentro de la misma ficha se descartan conceptos con título
            solapado (p. ej. "Duda metódica" / "Duda hiperbólica"), para V/F sin ambigüedad.
   - "autoria": para afirmar "esto NO es de este autor": se descartan candidatos cuyo término
            aparezca en la ficha, y las fichas de Método (sus obras son de autores reales). */
function distractorTiers(mod, kind, item, opts){
  opts = opts || {};
  const modo = opts.modo || "mcq";
  const correctT = item ? item.t : null;
  let otros = MODULES.filter(m=>m.id!==mod.id && !mismaEscuela(mod,m));
  if(modo==="autoria" && mod.trad!=="metodo") otros = otros.filter(m=>m.trad!=="metodo");
  let ref;
  if(modo==="autoria") ref = { titles:[...(mod.conceptos||[]), ...(mod.obras||[])].map(x=>x.t), text:textoFicha(mod) };
  else ref = { titles: item ? [item.t] : [], text: item ? item.t+" "+item.d : "" };
  const seguro = x=>!riesgoAmbiguo(x, ref);
  let propios = (mod[kind]||[]).filter(x=>x.t!==correctT).map(x=>({t:x.t,d:x.d,de:mod}));
  if(modo==="def" && item) propios = propios.filter(x=>{ const a=titleTokens(x.t), b=titleTokens(item.t); for(const w of a) if(b.has(w)) return false; return true; });
  const tiers = [];
  if(opts.maxSame!==0) tiers.push({ items:propios, max:opts.maxSame });
  tiers.push(itemsDe(otros.filter(m=>m.trad===mod.trad), kind).filter(seguro));
  tiers.push(itemsDe(otros.filter(m=>m.trad!==mod.trad), kind).filter(seguro));
  return tiers;
}
function obrasMCQ(mod, n){
  const pool = mod.obras;
  if(pool.length < 2) return [];
  const chosen = shuffle(pool.map((_,i)=>i)).slice(0, Math.min(n, pool.length));
  return chosen.map(i=>{
    const correct = pool[i].t;
    const distractors = pickClosest(pool[i], distractorTiers(mod,"obras",pool[i]), 3).map(x=>x.t);
    return { prompt:`¿Qué obra corresponde a: “${pista(pool[i])}”?`, options:shuffle([correct,...distractors]), answer:correct };
  });
}
function conceptMCQ(mod, n){
  const pool = mod.conceptos;
  const chosen = shuffle(pool.map((_,i)=>i)).slice(0, Math.min(n, pool.length));
  return chosen.map(i=>{
    const correct = pool[i].t;
    const distractors = pickClosest(pool[i], distractorTiers(mod,"conceptos",pool[i]), 3).map(x=>x.t);
    return { prompt:`¿Qué concepto corresponde a: “${pista(pool[i])}”?`, options:shuffle([correct,...distractors]), answer:correct };
  });
}
/* --- Matching (Emparejar) ---
   Más pares por ronda (7, u 8 si la ficha tiene 10 o más conceptos) y dos definiciones
   "sobrantes" que no corresponden a ningún término de la izquierda: así la última pareja
   ya no sale sola por descarte. Las sobrantes son otros conceptos de la misma ficha (o,
   si no alcanzan, de la ficha más parecida), de modo que no hay emparejamiento ambiguo:
   su término simplemente no está en la columna izquierda. */
function renderMatching(){
  const pool = currentModule.conceptos.length>=4 ? currentModule.conceptos : currentModule.obras;
  const kind = pool===currentModule.conceptos ? "conceptos" : "obras";
  const nPairs = Math.min(pool.length>=10 ? 8 : 7, pool.length);
  const idx = shuffle(pool.map((_,i)=>i));
  const items = idx.slice(0, nPairs);
  const sobra = idx.slice(nPairs);
  const decoys = [];
  sobra.slice(0,2).forEach(i=>decoys.push({ key:-1-decoys.length, d:pool[i].d, t:pool[i].t, de:currentModule }));
  if(decoys.length < 2){
    const target = { t:items.map(i=>pool[i].t).join(" "), d:items.map(i=>pool[i].d).join(" ") };
    const tiers = distractorTiers(currentModule, kind, null, {maxSame:0, modo:"autoria"});
    pickClosest(target, tiers, 2-decoys.length).forEach(x=>{
      if(pool.some(p=>p.t===x.t)) return;
      decoys.push({ key:-1-decoys.length, d:x.d, t:x.t, de:x.de });
    });
  }
  const right = shuffle([...items.map(i=>({key:i, d:pista(pool[i])})), ...decoys.map(x=>({key:x.key, d:pista(x)}))]);
  const left = shuffle(items.slice());
  matchState = { items, matched:new Set(), selLeft:null, pool, decoys };
  const nd = decoys.length;
  $("#detBody").innerHTML = `
    <p class="muted">Emparejá cada término con su definición. ${items.length} pares${nd?` · ojo: ${nd===1?'hay una definición que no corresponde':'hay '+nd+' definiciones que no corresponden'} a ningún término de la izquierda`:''}.</p>
    <div class="matchgrid">
      <div class="matchcol" id="matchLeft">
        ${left.map(i=>`<button class="matchitem" data-i="${i}" onclick="pickMatch('left',${i},this)">${pool[i].t}</button>`).join("")}
      </div>
      <div class="matchcol" id="matchRight">
        ${right.map(r=>`<button class="matchitem" data-i="${r.key}" onclick="pickMatch('right',${r.key},this)">${r.d}</button>`).join("")}
      </div>
    </div>
    <p class="center muted" id="matchStatus" style="margin-top:16px;" aria-live="polite"></p>`;
}
function pickMatch(side, i, el){
  if(matchState.matched.has(i) && side==='left') return;
  if(side==='left'){
    $all("#matchLeft .matchitem").forEach(b=>b.classList.remove("sel"));
    el.classList.add("sel");
    matchState.selLeft = i;
  } else {
    if(matchState.selLeft==null) return;
    const leftEl = $(`#matchLeft [data-i="${matchState.selLeft}"]`);
    if(matchState.selLeft === i){
      leftEl.classList.remove("sel"); leftEl.classList.add("done"); leftEl.disabled = true;
      el.classList.add("done"); el.disabled = true;
      matchState.matched.add(i);
      matchState.selLeft = null;
      if(matchState.matched.size === matchState.items.length){
        const ds = matchState.decoys || [];
        ds.forEach(x=>{ const b = $(`#matchRight [data-i="${x.key}"]`); if(b){ b.classList.add("decoy"); b.disabled = true; } });
        $("#matchStatus").innerHTML = "¡Completado! 🎉" + (ds.length ? `<br><span style="font-size:.85rem;">Las definiciones sobrantes eran: ${ds.map(x=>`<b>${x.t}</b>${x.de && x.de.id!==currentModule.id?` (${x.de.nombre})`:''}`).join(" y ")}.</span>` : "");
      }
    } else {
      el.classList.add("shake");
      setTimeout(()=>el.classList.remove("shake"), 500);
    }
  }
}

/* --- Escribir: actividades con un cuaderno que se guarda, y la ruleta --- */
function respKey(kind, i){ return currentModule.id+":"+kind+":"+i; }
function respDe(kind, i){ return progress.respuestas[respKey(kind,i)] || {}; }
let respTimer = null;
/* Se guarda medio segundo después de dejar de escribir, para no escribir en disco a cada tecla. */
function guardarResp(kind, i, texto){
  const k = respKey(kind, i);
  progress.respuestas[k] = Object.assign({}, progress.respuestas[k], { texto: String(texto).slice(0,20000) });
  const wc = document.getElementById(`wc-${kind}-${i}`);
  if(wc){ const n = palabras(texto); wc.textContent = `${n} palabra${n===1?'':'s'} · guardando…`; }
  clearTimeout(respTimer);
  respTimer = setTimeout(()=>{
    saveProgress();
    if(wc){ const n = palabras(texto); wc.textContent = `${n} palabra${n===1?'':'s'}${saveFailed?' · ⚠️ no se pudo guardar':' · guardado'}`; }
  }, 500);
}
function cajaEscritura(kind, i, placeholder){
  const t = respDe(kind, i).texto || "";
  const n = palabras(t);
  return `<textarea class="escritura" rows="6" aria-label="${escapeHtml(placeholder)}" placeholder="${escapeHtml(placeholder)}" oninput="guardarResp('${kind}',${i},this.value)">${escapeHtml(t)}</textarea>
    <div class="wcline muted" id="wc-${kind}-${i}">${n} palabra${n===1?'':'s'}</div>`;
}
function actividadesDe(d){
  return d.actividades && d.actividades.length ? d.actividades : [
    {t:"Resumir la tesis en tus propias palabras", d:`Explicá la tesis central de ${d.nombre} en dos o tres frases, sin usar ninguno de los términos técnicos de "Conceptos".`},
    {t:"Buscar un caso actual", d:`Encontrá una situación o debate actual que pueda leerse a la luz de ${d.nombre} — y explicá qué aportaría su perspectiva.`},
    {t:"Confrontar con la conexión propuesta", d:`Tomá la conexión con el otro pensador de esta ficha y escribí un párrafo defendiendo la postura de ${d.nombre} frente a la de esa otra persona.`}
  ];
}
function renderActivities(){
  const acts = actividadesDe(currentModule);
  const clr = LEVELS[currentModule.trad].clr;
  $("#detBody").innerHTML = `
    <div style="--tclr:var(--${clr});">
      <div class="lecnote">✍️ Lo que escribas acá y en <b>Preguntas</b> se guarda en este navegador. Con el botón del final lo bajás en un archivo de texto, por ejemplo para entregarlo.</div>
      <div class="sechead">Para escribir y pensar</div>
      <div class="activities">${acts.map((a,i)=>`<div class="activity"><h4>${a.t}</h4><p>${a.d}</p>${cajaEscritura("actividades", i, "Tu desarrollo…")}</div>`).join("")}</div>
      <div class="row" style="margin-top:14px;"><button class="btn ghost sm" onclick="exportarEscritos()">⬇️ Bajar lo que escribí en esta ficha</button></div>
      <div class="sechead">Para hablar · un minuto sin mirar la ficha</div>
      <section class="game" id="gameWH"></section>
    </div>`;
  miniState = { wheel:{ prompts:buildWheelPrompts(currentModule), spinning:false, turn:0 } };
  drawWheel();
}
/* Archivo de texto con las preguntas, actividades y lo escrito en esta ficha. */
function exportarEscritos(){
  const d = currentModule;
  const bloques = [`ÁGORA · ${d.nombre}`, `Exportado el ${todayStr()}`, ""];
  getQuiz(d).forEach((q,i)=>{
    const r = respDe("preguntas", i);
    bloques.push(`PREGUNTA ${i+1}. ${q.q}`, "", (r.texto||"").trim() || "(sin responder)", "");
  });
  actividadesDe(d).forEach((a,i)=>{
    bloques.push(`ACTIVIDAD ${i+1}. ${a.t}`, a.d.replace(/<[^>]+>/g,""), "", (respDe("actividades", i).texto||"").trim() || "(sin desarrollar)", "");
  });
  const url = URL.createObjectURL(new Blob([bloques.join("\n")], {type:"text/plain;charset=utf-8"}));
  const a = document.createElement("a");
  a.href = url; a.download = `agora-${d.id}.txt`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

/* --- Preguntas: el cuestionario escrito de la ficha ---
   Primero se escribe la respuesta y recién después se ve la del modelo: el esfuerzo de
   formularla es lo que la fija. Después se marcan las ideas clave (CLAVES, en datos/claves.js)
   que aparecen en lo escrito, y de ahí sale la autoevaluación de tres niveles (sin claves,
   se elige a mano). El modo «Revisar a un compañero» usa las mismas claves sobre un texto ajeno. */
const PREG_EVAL = [["si","Tenía lo central"],["parte","En parte"],["no","Se me escapó lo central"]];
let pregAviso = {};
let pregModo = "mia";   // "mia" | "par"
/* Revisión de un compañero: vive solo en memoria (no es progreso propio) y se pierde al cambiar de ficha. */
let revPar = null;
function clavesDe(d, i){
  const c = (typeof CLAVES !== "undefined" && CLAVES[d.id]) ? CLAVES[d.id][i] : null;
  return Array.isArray(c) ? c : [];
}
/* La autoevaluación sale de cuántas ideas clave se marcaron: todas, algunas o ninguna. */
function evalDeClaves(marcadas, total){
  if(!total) return undefined;
  return marcadas >= total ? "si" : marcadas > 0 ? "parte" : "no";
}
function checklistClaves(claves, marcadas, onchange, prefijo){
  return `<ul class="claves">${claves.map((c,j)=>`<li><label><input type="checkbox" ${marcadas.includes(j)?'checked':''} onchange="${onchange}(${prefijo}${j},this.checked)"> <span>${escapeHtml(c)}</span></label></li>`).join("")}</ul>`;
}
function renderPreguntas(){
  const qs = getQuiz(currentModule);
  if(!qs.length){ sinEjercicio(); return; }
  pregAviso = {};
  if(!revPar || revPar.id !== currentModule.id) revPar = { id:currentModule.id, nombre:"", items: qs.map(()=>({texto:"", claves:[], comentario:""})) };
  const clr = LEVELS[currentModule.trad].clr;
  const toggle = `<div class="evalrow pregmodo" role="group" aria-label="Modo">
      ${[["mia","Mi respuesta"],["par","Revisar a un compañero"]].map(([k,l])=>`<button class="chip ${pregModo===k?'active':''}" aria-pressed="${pregModo===k}" onclick="cambiarModoPreg('${k}')">${l}</button>`).join("")}</div>`;
  if(pregModo === "par"){
    $("#detBody").innerHTML = `
    <div style="--tclr:var(--${clr});">
      ${toggle}
      <div class="lecnote">🤝 Pegá o copiá la respuesta de tu compañero, marcá qué ideas clave tiene y dejale un comentario. Al final bajás la revisión en un archivo para entregársela. <b>Esto no se guarda:</b> se borra al cambiar de ficha.</div>
      <label class="parnombre">Nombre del compañero <input type="text" value="${escapeHtml(revPar.nombre)}" oninput="revPar.nombre=this.value" placeholder="Opcional"></label>
      ${qs.map((q,i)=>{
        const it = revPar.items[i], cl = clavesDe(currentModule, i);
        return `<article class="activity pregcard">
          <h4>Pregunta ${i+1}</h4>
          <p class="pregq">${q.q}</p>
          <textarea class="escritura" rows="5" aria-label="Respuesta del compañero" placeholder="Respuesta del compañero…" oninput="revPar.items[${i}].texto=this.value">${escapeHtml(it.texto)}</textarea>
          <div class="modelo"><b>Respuesta del modelo</b><p>${q.p}</p></div>
          ${cl.length ? `<p class="clavesq">¿Cuáles de estas ideas clave aparecen en su respuesta?</p>${checklistClaves(cl, it.claves, "marcarClavePar", i+",")}<div class="muted clavescuenta" id="parcuenta-${i}">${cuentaClaves(it.claves.length, cl.length, "Cubrió")}</div>` : ''}
          <textarea class="escritura" rows="3" aria-label="Comentario para el compañero" placeholder="Tu comentario: qué está bien, qué falta, qué le preguntarías…" oninput="revPar.items[${i}].comentario=this.value">${escapeHtml(it.comentario)}</textarea>
        </article>`;}).join("")}
      <div class="row" style="margin-top:14px;"><button class="btn sm" onclick="exportarRevision()">⬇️ Bajar la revisión</button></div>
    </div>`;
    return;
  }
  $("#detBody").innerHTML = `
    <div style="--tclr:var(--${clr});">
      ${toggle}
      <div class="lecnote">✍️ Escribí tu respuesta antes de mirar la del modelo. La del modelo no es la única válida: usala para ver qué se te escapó y qué viste vos que ella no dice.</div>
      ${qs.map((q,i)=>`
        <article class="activity pregcard">
          <h4>Pregunta ${i+1}</h4>
          <p class="pregq">${q.q}</p>
          ${cajaEscritura("preguntas", i, "Tu respuesta…")}
          <div id="modelo-${i}"></div>
        </article>`).join("")}
    </div>`;
  qs.forEach((_,i)=>drawModelo(i));
}
function cambiarModoPreg(m){ pregModo = m; renderPreguntas(); }
function cuentaClaves(n, total, verbo){
  const ev = evalDeClaves(n, total);
  const txt = ev==="si" ? "lo central está" : ev==="parte" ? "falta algo de lo central" : "se escapó lo central";
  return `${verbo} ${n} de ${total} ideas clave · ${txt}`;
}
function drawModelo(i){
  const box = document.getElementById("modelo-"+i);
  if(!box) return;
  const r = respDe("preguntas", i);
  if(!r.visto){
    box.innerHTML = `<button class="btn sm" onclick="verModelo(${i})">Ver la respuesta del modelo</button>
      ${pregAviso[i]?`<span class="muted" style="margin-left:8px;font-size:.85rem;">Todavía escribiste poco. Tocá de nuevo para verla igual.</span>`:''}`;
    return;
  }
  const cl = clavesDe(currentModule, i);
  const modelo = `<div class="modelo"><b>Respuesta del modelo</b><p>${getQuiz(currentModule)[i].p}</p></div>`;
  if(cl.length){
    const marc = Array.isArray(r.claves) ? r.claves : [];
    box.innerHTML = `${modelo}
      <p class="clavesq">¿Cuáles de estas ideas clave aparecen en tu respuesta?</p>
      ${checklistClaves(cl, marc, "marcarClave", i+",")}
      <div class="muted clavescuenta">${Array.isArray(r.claves) ? cuentaClaves(marc.length, cl.length, "Cubriste") : "Marcá las que estén, aunque las hayas dicho con otras palabras."}</div>`;
    return;
  }
  box.innerHTML = `${modelo}
    <div class="evalrow"><span class="muted">Comparada con la tuya:</span>
      ${PREG_EVAL.map(([k,l])=>`<button class="chip ${r.eval===k?'active':''}" aria-pressed="${r.eval===k}" onclick="evaluarPregunta(${i},'${k}')">${l}</button>`).join("")}</div>`;
}
function verModelo(i){
  if(palabras(respDe("preguntas", i).texto) < 15 && !pregAviso[i]){ pregAviso[i] = true; drawModelo(i); return; }
  const k = respKey("preguntas", i);
  progress.respuestas[k] = Object.assign({texto:""}, progress.respuestas[k], { visto:true });
  saveProgress();
  drawModelo(i);
}
function evaluarPregunta(i, ev){
  const k = respKey("preguntas", i);
  progress.respuestas[k] = Object.assign({texto:""}, progress.respuestas[k], { eval:ev });
  saveProgress();
  drawModelo(i);
}
function marcarClave(i, j, on){
  const k = respKey("preguntas", i);
  const prev = Array.isArray((progress.respuestas[k]||{}).claves) ? progress.respuestas[k].claves : [];
  const claves = on ? Array.from(new Set(prev.concat(j))).sort((a,b)=>a-b) : prev.filter(x=>x!==j);
  const r = Object.assign({texto:""}, progress.respuestas[k], { claves });
  r.eval = evalDeClaves(claves.length, clavesDe(currentModule, i).length);
  progress.respuestas[k] = r;
  saveProgress();
  drawModelo(i);
}
function marcarClavePar(i, j, on){
  const it = revPar.items[i];
  it.claves = on ? Array.from(new Set(it.claves.concat(j))).sort((a,b)=>a-b) : it.claves.filter(x=>x!==j);
  const el = document.getElementById("parcuenta-"+i);
  if(el) el.textContent = cuentaClaves(it.claves.length, clavesDe(currentModule, i).length, "Cubrió");
}
function exportarRevision(){
  const d = currentModule;
  const quien = revPar.nombre.trim();
  const bloques = [`ÁGORA · ${d.nombre} · Revisión entre pares`, quien ? `Respuestas de: ${quien}` : "", `Fecha: ${todayStr()}`, ""];
  getQuiz(d).forEach((q,i)=>{
    const it = revPar.items[i], cl = clavesDe(d, i);
    bloques.push(`PREGUNTA ${i+1}. ${q.q.replace(/<[^>]+>/g,"")}`, "", "Respuesta:", it.texto.trim() || "(sin respuesta)", "");
    if(cl.length){
      bloques.push(`Ideas clave (${it.claves.length} de ${cl.length}):`);
      cl.forEach((c,j)=>bloques.push(`  [${it.claves.includes(j)?"x":" "}] ${c}`));
      bloques.push("");
    }
    if(it.comentario.trim()) bloques.push("Comentario:", it.comentario.trim(), "");
  });
  const url = URL.createObjectURL(new Blob([bloques.join("\n")], {type:"text/plain;charset=utf-8"}));
  const a = document.createElement("a");
  a.href = url; a.download = `agora-${d.id}-revision${quien?"-"+quien.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""):""}.txt`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

/* ============================= REPASO MIXTO ============================= */
/* Una sola ronda que mezcla los tres tipos de práctica de reconocimiento (identificar,
   verdadero o falso, intruso), con la explicación a la vista hasta que se pide la siguiente.
   Los generadores de cada tipo están más abajo. */
let miniState = null;
let repState = null;
function otherModules(mod){ return MODULES.filter(m=>m.id!==mod.id); }
function pickFrom(arr,n){ return shuffle(arr.slice()).slice(0,n); }
function buildRepasoItems(d){
  const mc = buildMCItems(d).slice(0,4).map(q=>({ tipo:"🎯 Identificá", prompt:q.prompt, options:q.options, answer:q.answer, why:q.why }));
  const tf = buildTFItems(d).slice(0,4).map(q=>({ tipo:"⚡ Verdadero o falso", prompt:q.texto, options:["Verdadero","Falso"], answer:q.verdadero?"Verdadero":"Falso", why:q.why }));
  const intr = buildIntrusoItems(d).slice(0,2).map(q=>({ tipo:"🕵️ El intruso",
    prompt:`Tres de ${q.etiqueta==='obras'?'estas obras':'estos conceptos'} están en la ficha de ${d.nombre}. ¿Cuál viene de otra ficha? (Suele ser de un autor cercano.)`,
    options:q.opciones.map(o=>o.txt), answer:q.opciones.find(o=>o.malo).txt, why:q.why }));
  return shuffle([...mc, ...tf, ...intr]);
}
function renderRepasoMixto(){
  repState = { items:buildRepasoItems(currentModule), i:0, ok:0, respondida:false };
  drawRepaso();
}
function drawRepaso(){
  const st = repState, box = $("#detBody");
  if(!st.items.length){ box.innerHTML = `<div class="lecnote">No hay suficiente material en esta ficha para armar un repaso.</div>`; return; }
  if(st.i >= st.items.length){
    box.innerHTML = `<div class="qcard center"><div class="resultbig">${st.ok}/${st.items.length}</div>
      <p class="muted">Este repaso no se guarda: es para practicar. El que cuenta es el <b>Cuestionario final</b>.</p>
      <button class="btn" onclick="renderRepasoMixto()">↺ Otra ronda</button>
      <button class="btn ghost" onclick="setDetTab('cuestionario')">Ir al cuestionario final</button></div>`;
    return;
  }
  const q = st.items[st.i];
  box.innerHTML = `
    <div class="qhead"><span>${q.tipo} · ${st.i+1} / ${st.items.length}</span><span>✅ ${st.ok}</span></div>
    <div class="qcard">
      <div class="prompt" style="margin-bottom:14px;">${q.prompt}</div>
      <div class="optrow" id="repOpts">${q.options.map((o,ix)=>`<button class="optbtn" data-ix="${ix}" onclick="answerRepaso(${ix})">${escapeHtml(o)}</button>`).join("")}</div>
      <div class="gfeedback" id="repFb" aria-live="polite"></div>
    </div>`;
}
function answerRepaso(ix){
  const st = repState, q = st.items[st.i];
  if(st.respondida) return;
  st.respondida = true;
  const bien = q.options[ix] === q.answer;
  if(bien) st.ok++;
  $all("#repOpts .optbtn").forEach(b=>{
    b.disabled = true;
    const o = q.options[Number(b.dataset.ix)];
    if(o === q.answer) b.classList.add("correct");
    else if(Number(b.dataset.ix) === ix) b.classList.add("wrong");
  });
  const fb = document.getElementById("repFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = (bien?"✅ ":"❌ La respuesta era <b>"+escapeHtml(q.answer)+"</b>. ") + (q.why||"") +
    `<div style="margin-top:10px;"><button class="btn sm" id="repNext" onclick="repState.i++; repState.respondida=false; drawRepaso();">Siguiente →</button></div>`;
  enfocar("#repNext");
}

/* --- Generadores de práctica (los usa el Repaso mixto) --- */

/* (a) Opción múltiple: ¿quién lo dijo / qué obra es?
   Distractores cercanos: uno de la misma ficha y el resto de las fichas más parecidas
   (primero de la misma tradición). */
function buildMCItems(d){
  const items = [];
  (d.obras||[]).forEach(o=>{
    const distract = pickClosest(o, distractorTiers(d,"obras",o,{maxSame:1}), 3).map(x=>x.t);
    if(distract.length===3) items.push({ prompt:`¿A qué obra corresponde esta descripción?<br><span class="muted">“${pista(o)}”</span>`, options:shuffle([o.t,...distract]), answer:o.t,
      why:`“${o.t}” es de ${d.nombre}.` });
  });
  (d.conceptos||[]).forEach(c=>{
    const distract = pickClosest(c, distractorTiers(d,"conceptos",c,{maxSame:1}), 3).map(x=>x.t);
    if(distract.length===3) items.push({ prompt:`¿Qué concepto se define así?<br><span class="muted">“${pista(c)}”</span>`, options:shuffle([c.t,...distract]), answer:c.t,
      why:`${c.t} pertenece a ${d.nombre} (${d.escuela}).` });
  });
  // ¿quién lo dijo?: la tesis de este autor contra las de los tres autores más cercanos
  const cand = otherModules(d).filter(m=>m.trad!=="metodo" && !mismaEscuela(d,m));
  const aItem = m=>({t:m.nombre, d:m.tesis+" "+m.escuela, de:m});
  const otros = pickClosest({t:d.nombre, d:d.tesis+" "+d.escuela},
    [cand.filter(m=>m.trad===d.trad).map(aItem), cand.filter(m=>m.trad!==d.trad).map(aItem)], 3);
  if(otros.length===3){
    items.push({ prompt:`¿De quién es esta tesis?<br><span class="muted">“${d.tesis}”</span>`,
      options:shuffle([d.nombre, ...otros.map(x=>x.t)]), answer:d.nombre,
      why:`Es la tesis central de ${d.nombre}.` });
  }
  return shuffle(items).slice(0,6);
}

/* (b) Verdadero o falso sobre definiciones de conceptos.
   Las afirmaciones falsas ya no pegan una definición cualquiera del catálogo: toman la
   definición real más parecida, alternando entre otro concepto de la MISMA ficha (hay que
   distinguir, p. ej., anámnesis de Teoría de las Formas) y el concepto más cercano de otro
   autor de la misma tradición. Las obras falsas se atribuyen tomando la obra más parecida
   de un autor cercano (nunca de la ficha de Método, cuyas obras son de autores reales). */
function buildTFItems(d){
  const items = [];
  const own = d.conceptos||[];
  own.forEach((c,k)=>{
    items.push({ texto:`<b>${c.t}</b> se define como: “${pista(c)}”`, verdadero:true,
      why:`Correcto: es la definición que usa la ficha de ${d.nombre}.` });
    const t = distractorTiers(d,"conceptos",c,{modo:"def"});        // [misma ficha, misma tradición, resto]
    const tiers = (k%2===0) ? t : [t[1], t[0], t[2]];
    const falsa = pickClosest(c, tiers, 1)[0];
    if(falsa) items.push({ texto:`<b>${c.t}</b> se define como: “${pista(falsa)}”`, verdadero:false,
      why: falsa.de.id===d.id
        ? `Falso: esa es la definición de <b>${falsa.t}</b>, otro concepto de ${d.nombre}. Vale la pena precisar qué distingue a uno del otro.`
        : `Falso: esa es la definición de <b>${falsa.t}</b> (${falsa.de.nombre}), no la de <b>${c.t}</b>.` });
  });
  pickFrom(d.obras||[], 2).forEach(o=>{
    const t = distractorTiers(d,"obras",o,{maxSame:0, modo:"autoria"});
    const ajena = pickClosest(o, t, 1)[0];
    items.push({ texto:`<b>${o.t}</b> está entre las obras de la ficha de ${d.nombre}.`, verdadero:true, why:`Correcto: ${o.d}` });
    if(ajena) items.push({ texto:`<b>${ajena.t}</b> está entre las obras de la ficha de ${d.nombre}.`, verdadero:false,
      why:`Falso: <b>${ajena.t}</b> está en la ficha de ${ajena.de.nombre}, no en la de ${d.nombre}.` });
  });
  return shuffle(items).slice(0,8);
}

/* (c) Intruso: 3 elementos de esta ficha + 1 ajeno.
   El intruso ya no es uno cualquiera: es el concepto/obra de OTRO autor más parecido a los
   tres de la ronda (primero de la misma tradición), sin repetir intrusos entre rondas. */
function buildIntrusoItems(d){
  const items = [];
  const usados = new Set();
  const mkRound = (kind, etiqueta)=>{
    const propios = d[kind]||[];
    if(propios.length < 3) return null;
    const tres = pickFrom(propios,3);
    const target = { t:tres.map(x=>x.t).join(" "), d:tres.map(x=>x.d).join(" ") };
    const tiers = distractorTiers(d, kind, null, {maxSame:0, modo:"autoria"})
      .map(tier=>tier.filter(x=>!usados.has(x.t) && !propios.some(p=>p.t===x.t)));
    const intruso = pickClosest(target, tiers, 1)[0];
    if(!intruso) return null;
    usados.add(intruso.t);
    return { etiqueta, opciones:shuffle([...tres.map(x=>({txt:x.t,malo:false})), {txt:intruso.t, malo:true, de:intruso.de.nombre}]),
             why:`<b>${escapeHtml(intruso.t)}</b> no está en la ficha de ${d.nombre}: es de la ficha de ${intruso.de.nombre}.` };
  };
  for(let k=0;k<3;k++){ const r = mkRound("conceptos","conceptos"); if(r) items.push(r); }
  for(let k=0;k<2;k++){ const r = mkRound("obras","obras"); if(r) items.push(r); }
  return shuffle(items).slice(0,4);
}

/* (d) Ruleta: consigna filosófica al azar para hablar/escribir un minuto */
function buildWheelPrompts(d){
  const p = [];
  (d.conceptos||[]).forEach(c=>p.push(`Explicá <b>${c.t}</b> en un minuto, sin leer la definición y sin usar la palabra misma.`));
  (d.obras||[]).forEach(o=>p.push(`Contá de qué trata <b>${o.t}</b> y por qué sigue importando hoy.`));
  p.push(`Refutá la tesis central de ${d.nombre} con el mejor argumento en contra que se te ocurra.`);
  p.push(`Defendé a ${d.nombre} frente a la objeción más fuerte que acabás de formular.`);
  p.push(`Poné un ejemplo cotidiano —de tu aula, de las noticias— donde el pensamiento de ${d.nombre} cambie cómo se ve la situación.`);
  if(d.lecturas && d.lecturas.length) p.push(`Resumí en tres frases la lectura «${d.lecturas[0].titulo}» y decí qué te resultó más discutible.`);
  if(d.conexion) p.push(`Explicá la conexión de esta ficha con el otro pensador y en qué punto exacto discreparían.`);
  return shuffle(p);
}
function drawWheel(){
  const box = document.getElementById("gameWH");
  if(!box) return;
  box.innerHTML = `
    <h4>🎡 La ruleta del ágora<span class="gamescore">${miniState.wheel.turn} giro${miniState.wheel.turn===1?'':'s'}</span></h4>
    <p class="gamesub">Girá y respondé en voz alta durante un minuto, sin mirar la ficha.</p>
    <div class="wheelwrap">
      <div class="wheelpin">▼</div>
      <div class="wheel" id="wheelEl"></div>
      <button class="btn sm" id="wheelBtn" onclick="spinWheel()">Girar la ruleta</button>
      <div class="wheelout" id="wheelOut"><span class="muted">Todavía no giraste.</span></div>
    </div>`;
}
function spinWheel(){
  const w = miniState.wheel;
  if(w.spinning || !w.prompts.length) return;
  w.spinning = true;
  const el = document.getElementById("wheelEl");
  const btn = document.getElementById("wheelBtn");
  const out = document.getElementById("wheelOut");
  btn.disabled = true;
  out.innerHTML = `<span class="muted">Girando…</span>`;
  w.deg = (w.deg||0) + 1080 + Math.floor(Math.random()*360);
  el.style.transform = `rotate(${w.deg}deg)`;
  setTimeout(()=>{
    const consigna = w.prompts[Math.floor(Math.random()*w.prompts.length)];
    w.turn++;
    out.innerHTML = `<b>Te tocó:</b><br>${consigna}`;
    btn.disabled = false;
    w.spinning = false;
    const sc = document.querySelector("#gameWH .gamescore");
    if(sc) sc.textContent = `${w.turn} giro${w.turn===1?'':'s'}`;
  }, 2450);
}

/* ============================= EJERCICIOS AVANZADOS =============================
   Motores reutilizables. Cada ficha puede traer (o no) los campos `cadena`,
   `reconstruccion` y `dilemas`; si falta alguno, la pestaña muestra un aviso y nada más. */
function sinEjercicio(){
  $("#detBody").innerHTML = `<div class="lecnote">Este ejercicio todavía no está disponible para esta ficha.</div>`;
}
function enfocar(sel){ const el = document.querySelector(sel); if(el) try{ el.focus({preventScroll:false}); }catch(e){} }

/* --- (1) Razonamiento encadenado: árbol socrático con ramas --- */
let cadenaState = null;
function cadenaValida(c){ return !!(c && c.nodos && c.inicio && c.nodos[c.inicio]); }
function renderCadena(){
  const c = currentModule.cadena;
  if(!cadenaValida(c)){ sinEjercicio(); return; }
  cadenaState = { camino:[], actual:c.inicio, final:null };
  drawCadena(false);
}
function drawCadena(focus){
  const c = currentModule.cadena, st = cadenaState;
  const clr = LEVELS[currentModule.trad].clr;
  const nodo = st.final ? null : c.nodos[st.actual];
  const crumbs = st.camino.map((p,k)=>`
      <li><button class="crumbbtn" onclick="cadenaVolver(${k})" title="Volver a esta pregunta y elegir de nuevo">Paso ${k+1}</button>
        <span>${p.texto}</span></li>`).join("");
  let cuerpo;
  if(st.final){
    const ok = st.final.tipo === "bien";
    cuerpo = `
      <div class="chainfinal ${ok?'ok':'rev'}" id="chainFocus" tabindex="-1">
        <div class="chaintag">${ok?'✅ Conclusión alcanzada':'🔎 Para revisar'}</div>
        <p>${st.final.texto}</p>
      </div>`;
  } else {
    cuerpo = `
      <div class="chainnode">
        <div class="chaintag">Pregunta ${st.camino.length+1}</div>
        <p class="chainq" id="chainFocus" tabindex="-1">${nodo.pregunta}</p>
        <div class="chainopts">
          ${nodo.opciones.map((o,i)=>`<button class="chainopt" onclick="cadenaElegir(${i})">${o.texto}</button>`).join("")}
        </div>
      </div>`;
  }
  $("#detBody").innerHTML = `
    <div class="advwrap" style="--tclr:var(--${clr});">
      <h4 style="margin:0 0 4px;">${c.titulo}</h4>
      ${c.intro?`<p class="muted" style="margin:0 0 14px;">${c.intro}</p>`:""}
      ${st.camino.length?`<div class="sechead" style="margin-top:4px;">Tu camino hasta acá</div><ol class="crumbs" aria-label="Camino recorrido">${crumbs}</ol>`:""}
      ${cuerpo}
      <div class="row" style="margin-top:14px;">
        ${st.camino.length?`<button class="btn ghost sm" onclick="cadenaVolver(${st.camino.length-1})">← Deshacer último paso</button>`:""}
        <button class="btn ghost sm" onclick="renderCadena(); enfocar('#chainFocus');">↺ Reiniciar</button>
      </div>
    </div>`;
  if(focus) enfocar("#chainFocus");
}
function cadenaElegir(i){
  const c = currentModule.cadena, st = cadenaState;
  if(!st || st.final) return;
  const nodo = c.nodos[st.actual];
  const op = nodo && nodo.opciones[i];
  if(!op) return;
  st.camino.push({ nodo:st.actual, texto:op.texto });
  if(op.final) st.final = op.final;
  else if(op.va && c.nodos[op.va]) st.actual = op.va;
  else st.final = { tipo:"revisar", texto:"Este camino todavía no tiene continuación." };
  drawCadena(true);
}
/* Vuelve a la pregunta del paso k (0-based) para elegir otra respuesta. */
function cadenaVolver(k){
  const st = cadenaState;
  if(!st || k<0 || k>=st.camino.length) return;
  st.actual = st.camino[k].nodo;
  st.camino = st.camino.slice(0,k);
  st.final = null;
  drawCadena(true);
}

/* --- (2) Reconstrucción de argumentos: ordenar premisas y conclusión, dejando afuera el distractor --- */
let reconState = null;
function renderReconstruccion(){
  const R = currentModule.reconstruccion;
  if(!Array.isArray(R) || !R.length){ sinEjercicio(); return; }
  reconElegir(0);
}
function reconElegir(ix){
  const R = currentModule.reconstruccion;
  const r = R[ix];
  reconState = { ix, orden:[], banco:shuffle(r.piezas.map(p=>p.id)), intentos:0, estado:null, msg:"", focus:null };
  drawRecon();
}
function reconPieza(id){ return currentModule.reconstruccion[reconState.ix].piezas.find(p=>p.id===id); }
function drawRecon(){
  const R = currentModule.reconstruccion, st = reconState, r = R[st.ix];
  const clr = LEVELS[currentModule.trad].clr;
  const cerrado = st.estado==="ok" || st.estado==="sol";
  const selector = R.length>1 ? `<div class="chiprow" role="group" aria-label="Elegí un argumento">${R.map((x,i)=>
    `<button class="chip ${i===st.ix?'active':''}" aria-pressed="${i===st.ix}" onclick="reconElegir(${i})">Argumento ${i+1}</button>`).join("")}</div>` : "";
  const banco = st.banco.filter(id=>!st.orden.includes(id));
  const nOrd = st.orden.length;
  $("#detBody").innerHTML = `
    <div class="advwrap" style="--tclr:var(--${clr});">
      ${selector}
      <h4 style="margin:0 0 4px;">${r.titulo||('Argumento '+(st.ix+1))}</h4>
      <p class="muted" style="margin:0 0 14px;">${r.consigna}</p>
      <div class="recongrid">
        <div>
          <div class="sechead" style="margin-top:0;">Piezas disponibles</div>
          <div class="reconbank">
            ${banco.length ? banco.map(id=>`<button class="reconpiece" data-rid="${id}" data-act="add" ${cerrado?'disabled':''} onclick="reconAgregar('${id}')"><span class="reconplus" aria-hidden="true">＋</span><span>${reconPieza(id).texto}</span></button>`).join("")
              : `<p class="muted" style="font-size:.85rem;">No quedan piezas: todas están en tu reconstrucción.</p>`}
          </div>
        </div>
        <div>
          <div class="sechead" style="margin-top:0;">Tu reconstrucción</div>
          ${nOrd ? `<ol class="reconlist">
            ${st.orden.map((id,k)=>`<li class="reconitem">
              <span class="reconnum mono">${k+1}</span>
              <span class="recontxt">${reconPieza(id).texto}</span>
              <span class="reconctl">
                <button class="iconbtn" data-rid="${id}" data-act="up" aria-label="Subir el paso ${k+1}" ${k===0||cerrado?'disabled':''} onclick="reconMover('${id}',-1)">↑</button>
                <button class="iconbtn" data-rid="${id}" data-act="down" aria-label="Bajar el paso ${k+1}" ${k===nOrd-1||cerrado?'disabled':''} onclick="reconMover('${id}',1)">↓</button>
                <button class="iconbtn" data-rid="${id}" data-act="del" aria-label="Quitar el paso ${k+1}" ${cerrado?'disabled':''} onclick="reconQuitar('${id}')">✕</button>
              </span></li>`).join("")}
          </ol>` : `<p class="lecnote" style="font-size:.85rem;">Tocá las piezas de la izquierda en el orden en que irían en el argumento. Después podés reordenarlas con ↑ ↓ o quitarlas con ✕.</p>`}
        </div>
      </div>
      <div class="row" style="margin-top:14px;">
        <button class="btn sm" id="reconCheck" ${!nOrd||cerrado?'disabled':''} onclick="reconComprobar()">Comprobar</button>
        <button class="btn ghost sm" onclick="reconElegir(${st.ix})">↺ Empezar de nuevo</button>
        ${cerrado?'':`<button class="btn ghost sm" onclick="reconSolucion()">Ver la solución</button>`}
      </div>
      <div class="gfeedback ${st.msg?'show':''} ${st.estado==='ok'||st.estado==='sol'?'ok':'no'}" id="reconFb" role="status" aria-live="polite">${st.msg}</div>
      ${cerrado?`<div class="leccoment" style="margin:14px 0 0;"><b>Explicación</b>${r.explicacion}</div>`:""}
    </div>`;
  if(st.focus){
    const f = st.focus; st.focus = null;
    const el = document.querySelector(`#detBody [data-rid="${f.id}"][data-act="${f.act}"]:not([disabled])`)
            || document.querySelector(`#detBody [data-rid="${f.id}"]:not([disabled])`)
            || document.querySelector(f.fallback || "#reconCheck");
    if(el) el.focus();
  }
}
function reconAgregar(id){
  const st = reconState; if(st.orden.includes(id)) return;
  st.orden.push(id); st.msg=""; st.estado=null;
  const resto = st.banco.filter(x=>!st.orden.includes(x));
  st.focus = resto.length ? { id:resto[0], act:"add" } : { id, act:"del", fallback:"#reconCheck" };
  drawRecon();
}
function reconQuitar(id){
  const st = reconState; st.orden = st.orden.filter(x=>x!==id); st.msg=""; st.estado=null;
  st.focus = { id, act:"add" }; drawRecon();
}
function reconMover(id, d){
  const st = reconState; const k = st.orden.indexOf(id), j = k+d;
  if(k<0 || j<0 || j>=st.orden.length) return;
  [st.orden[k], st.orden[j]] = [st.orden[j], st.orden[k]];
  st.msg=""; st.estado=null;
  st.focus = { id, act: d<0?"up":"down" }; drawRecon();
}
function reconComprobar(){
  const st = reconState, r = currentModule.reconstruccion[st.ix];
  const correcto = r.ordenCorrecto;
  st.intentos++;
  const intrusos = st.orden.filter(id=>!correcto.includes(id));
  if(intrusos.length){
    st.estado = "no";
    st.msg = `❌ ${intrusos.length===1?'Una de las piezas que pusiste no forma':'Hay piezas que no forman'} parte de este argumento. Preguntate cuál no se sigue de las anteriores ni conduce a la conclusión.`;
  } else if(st.orden.length < correcto.length){
    st.estado = "no";
    st.msg = `❌ Faltan pasos: el argumento completo tiene ${correcto.length} piezas y pusiste ${st.orden.length}.`;
  } else if(st.orden.every((id,k)=>id===correcto[k])){
    st.estado = "ok";
    st.msg = `✅ Reconstrucción correcta${st.intentos>1?` (en ${st.intentos} intentos)`:''}. Dejaste afuera la pieza que no pertenecía al argumento.`;
  } else {
    const bien = st.orden.filter((id,k)=>id===correcto[k]).length;
    st.estado = "no";
    st.msg = `❌ Están todas las piezas correctas, pero el orden no. ${bien} de ${correcto.length} están en su lugar. Pista: la conclusión va al final, y cada premisa retoma algo de la anterior.`;
  }
  st.focus = { fallback:"#reconFb" };
  drawRecon();
  enfocar("#reconFb");
}
function reconSolucion(){
  const st = reconState, r = currentModule.reconstruccion[st.ix];
  st.orden = r.ordenCorrecto.slice(); st.estado = "sol";
  st.msg = "Esta es la reconstrucción. La pieza que quedó en «disponibles» es la que no pertenece al argumento.";
  drawRecon(); enfocar("#reconFb");
}

/* --- (3) Dilema en varios pasos + rúbrica de autoevaluación (no se califica sola) --- */
let dilemaState = null;
function renderDilema(){
  const D = currentModule.dilemas;
  if(!Array.isArray(D) || !D.length || !D[0].pasos || !D[0].pasos.length){ sinEjercicio(); return; }
  dilemaElegirCaso(0);
}
function dilemaElegirCaso(ix){
  const D = currentModule.dilemas[ix];
  dilemaState = { ix, actual:0, hist:[], fin:false, checks:new Set() };
  drawDilema(false);
}
function dilemaPasoIdx(D, va){
  if(typeof va === "number") return (va>=0 && va<D.pasos.length) ? va : -1;
  return D.pasos.findIndex(p=>p.id===va);
}
function drawDilema(focus){
  const all = currentModule.dilemas, st = dilemaState, D = all[st.ix];
  const clr = LEVELS[currentModule.trad].clr;
  const paso = st.fin ? null : D.pasos[st.actual];
  const selector = all.length>1 ? `<div class="chiprow">${all.map((x,i)=>`<button class="chip ${i===st.ix?'active':''}" aria-pressed="${i===st.ix}" onclick="dilemaElegirCaso(${i})">Caso ${i+1}</button>`).join("")}</div>` : "";
  const hist = st.hist.map((h,k)=>`
      <li class="dilhist">
        <div class="dilsit muted">${h.situacion}</div>
        <div class="dilchoice"><b>Decidiste:</b> ${h.texto}</div>
        <div class="dilcons">${h.consecuencia}</div>
      </li>`).join("");
  const rub = D.rubrica || [];
  $("#detBody").innerHTML = `
    <div class="advwrap" style="--tclr:var(--${clr});">
      ${selector}
      <h4 style="margin:0 0 4px;">${D.titulo}</h4>
      ${D.intro?`<p class="muted" style="margin:0 0 14px;">${D.intro}</p>`:""}
      ${st.hist.length?`<ol class="dillist" aria-label="Decisiones tomadas">${hist}</ol>`:""}
      ${paso?`
        <div class="chainnode">
          <div class="chaintag">Decisión ${st.hist.length+1}</div>
          <p class="chainq" id="dilFocus" tabindex="-1">${paso.situacion}</p>
          <div class="chainopts">${paso.opciones.map((o,i)=>`<button class="chainopt" onclick="dilemaElegir(${i})">${o.texto}</button>`).join("")}</div>
        </div>`:`
        <div class="chainfinal ok" id="dilFocus" tabindex="-1">
          <div class="chaintag">Rúbrica de autoevaluación</div>
          <p style="margin:0 0 10px;">No hay una respuesta “correcta” que el sistema pueda calificar: marcá con honestidad lo que lograste. Lo que quede sin marcar es tu tarea para la próxima vuelta.</p>
          <div class="rubric">
            ${rub.map((r,i)=>`<label class="rubitem"><input type="checkbox" ${st.checks.has(i)?'checked':''} onchange="dilemaCheck(${i},this.checked)"> <span>${r}</span></label>`).join("")}
          </div>
          <p class="mono muted" id="rubCount" style="font-size:.8rem;margin:10px 0 0;" aria-live="polite">${st.checks.size} de ${rub.length} criterios marcados</p>
        </div>`}
      <div class="row" style="margin-top:14px;">
        <button class="btn ghost sm" onclick="dilemaElegirCaso(${st.ix}); enfocar('#dilFocus');">↺ Volver a empezar</button>
      </div>
    </div>`;
  if(focus) enfocar("#dilFocus");
}
function dilemaElegir(i){
  const st = dilemaState, D = currentModule.dilemas[st.ix];
  if(st.fin) return;
  const paso = D.pasos[st.actual], op = paso && paso.opciones[i];
  if(!op) return;
  st.hist.push({ situacion:paso.situacion, texto:op.texto, consecuencia:op.consecuencia||"" });
  const sig = (op.va==null) ? -1 : dilemaPasoIdx(D, op.va);
  if(sig<0) st.fin = true; else st.actual = sig;
  drawDilema(true);
}
function dilemaCheck(i, on){
  const st = dilemaState; if(on) st.checks.add(i); else st.checks.delete(i);
  const el = document.getElementById("rubCount");
  const n = (currentModule.dilemas[st.ix].rubrica||[]).length;
  if(el) el.textContent = `${st.checks.size} de ${n} criterios marcados`;
}

/* ============================= CONSTELACIONES ============================= */
/* Un mismo problema visto desde varias fichas. Las entradas solo guardan el id del módulo
   y la postura; nombre, ícono y tradición se leen de MODULES. */
let constelActual = null;
function renderConstelaciones(){
  const box = document.getElementById("constelBody");
  if(!box) return;
  const temas = CONSTELACIONES.filter(c=>c.entradas.some(e=>moduleById(e.mod)));
  if(!constelActual){
    box.innerHTML = temas.length ? `<div class="grid modules">${temas.map(c=>{
      const mods = c.entradas.map(e=>moduleById(e.mod)).filter(Boolean);
      return `<button class="card constcard" onclick="abrirConstelacion('${c.id}')">
        <span class="lvltag mono">${mods.length} fichas</span>
        <h3>${c.tema}</h3>
        <span class="constwho">${mods.map(m=>`<span class="constpill" style="--tclr:var(--${LEVELS[m.trad].clr});--tsoft:var(--${LEVELS[m.trad].clr}-soft);">${m.icon} ${m.nombre}</span>`).join("")}</span>
        ${c.nucleo?`<span class="muted" style="font-size:.88rem;line-height:1.5;">${c.nucleo}</span>`:""}
      </button>`; }).join("")}</div>` : `<div class="lecnote">Todavía no hay constelaciones cargadas.</div>`;
    return;
  }
  const c = CONSTELACIONES.find(x=>x.id===constelActual);
  if(!c){ constelActual = null; renderConstelaciones(); return; }
  const entradas = c.entradas.map(e=>({e, m:moduleById(e.mod)})).filter(x=>x.m);
  const q = c.pregunta;
  box.innerHTML = `
    <button class="backlink" onclick="constelActual=null; renderConstelaciones();">← Todas las constelaciones</button>
    <h3 style="margin:0 0 6px;" id="constFocus" tabindex="-1">${c.tema}</h3>
    ${c.nucleo?`<p class="muted" style="max-width:68ch;line-height:1.55;">${c.nucleo}</p>`:""}
    <div class="constgrid">
      ${entradas.map(({e,m})=>{ const clr = LEVELS[m.trad].clr; return `
        <article class="constpost" style="--tclr:var(--${clr});--tsoft:var(--${clr}-soft);">
          <header>${monograma(m)}<div><h4>${m.nombre}</h4><span class="lvltag mono">${LEVELS[m.trad].label} · ${m.escuela}</span></div></header>
          <p>${e.postura}</p>
          <button class="btn ghost sm" onclick="openModule('${m.id}')">Abrir la ficha →</button>
        </article>`; }).join("")}
    </div>
    ${q?`<div class="qcard" style="margin-top:20px;">
      <div class="sechead" style="margin-top:0;">Pregunta de comparación</div>
      <div class="prompt" style="font-size:1.05rem;margin-bottom:14px;">${q.enunciado}</div>
      <div class="optrow constopts" id="constOpts">${shuffle(q.opciones.map((o,i)=>({o,i}))).map(({o,i})=>`<button class="optbtn" data-ix="${i}" onclick="responderConstelacion(${i},this)">${o}</button>`).join("")}</div>
      <div class="gfeedback" id="constFb" role="status" aria-live="polite"></div>
    </div>`:""}`;
}
function abrirConstelacion(id){ constelActual = id; renderConstelaciones(); window.scrollTo({top:0, behavior:"instant"}); enfocar("#constFocus"); }
function responderConstelacion(i, btn){
  const c = CONSTELACIONES.find(x=>x.id===constelActual); if(!c) return;
  const q = c.pregunta;
  const opts = $all("#constOpts .optbtn");
  if(opts.some(b=>b.disabled)) return;
  opts.forEach(b=>{ b.disabled = true; const k = Number(b.dataset.ix); if(k===q.correcta) b.classList.add("correct"); else if(b===btn) b.classList.add("wrong"); });
  const bien = i===q.correcta;
  const fb = document.getElementById("constFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = (bien?"✅ Correcto. ":"❌ No es esa. ") + q.explicacion;
}

/* --- Module Quiz --- */
/* Preguntas de comprensión lectora, generadas desde el campo `preguntasLectura`
   de cada ficha (mismo formato de opción múltiple que el resto del cuestionario). */
function lecturaMCQ(mod, n){
  const pool = mod.preguntasLectura || [];
  if(!pool.length) return [];
  const chosen = shuffle(pool.slice()).slice(0, n==null ? pool.length : Math.min(n, pool.length));
  return chosen.map(p=>({
    prompt: `📖 ${p.q}`,
    options: shuffle(p.opciones.slice()),
    answer: p.r,
    why: p.why || "",
    esLectura: true
  }));
}
function buildQuestionSet(mods, perModule, incluirLecturas){
  let qs = [];
  mods.forEach(m=>{
    qs = qs.concat(conceptMCQ(m, perModule));
    qs = qs.concat(obrasMCQ(m, Math.max(1,perModule-1)));
    if(incluirLecturas) qs = qs.concat(lecturaMCQ(m, null));
  });
  return shuffle(qs);
}
let quizState = null;
function renderModuleQuiz(){
  quizState = { qs: buildQuestionSet([currentModule], 4, true), i:0, correct:0, answered:false };
  drawQuiz(quizState, (score)=>{
    progress.moduleQuiz[currentModule.id] = score;
    saveProgress();
    renderModuleCards();
  }, "#detBody");
}
function drawQuiz(state, onFinish, target){
  if(state.i >= state.qs.length){
    const pct = state.qs.length ? Math.round(100*state.correct/state.qs.length) : 0;
    $(target).innerHTML = `
      <div class="qcard center">
        <div class="resultbig">${pct}%</div>
        <p class="muted">${state.correct} de ${state.qs.length} correctas</p>
        <button class="btn" onclick="${target==='#detBody' ? 'renderModuleQuiz()':'null'}">Reintentar</button>
      </div>`;
    onFinish(pct);
    return;
  }
  const q = state.qs[state.i];
  $(target).innerHTML = `
    <div class="qhead"><span>Pregunta ${state.i+1} / ${state.qs.length}</span><span>✅ ${state.correct}</span></div>
    <div class="qcard">
      <div class="prompt" style="font-size:1.08rem;margin-bottom:16px;">${q.prompt}</div>
      <div class="optrow" id="qopts">
        ${q.options.map(o=>`<button class="optbtn" onclick="answerQuiz(this,'${String(o).replace(/'/g,"\\'")}')">${o}</button>`).join("")}
      </div>
      <div class="exp" id="qexp">${q.why||""}</div>
    </div>`;
  window._quizCtx = { state, onFinish, target };
}
function answerQuiz(btn, chosen){
  const {state, onFinish, target} = window._quizCtx;
  if(state.answered) return;
  state.answered = true;
  const q = state.qs[state.i];
  $all("#qopts .optbtn").forEach(b=>{
    b.disabled = true;
    if(b.textContent === String(q.answer)) b.classList.add("correct");
    else if(b===btn) b.classList.add("wrong");
  });
  if(chosen === String(q.answer)) state.correct++;
  $("#qexp").classList.add("show");
  setTimeout(()=>{ state.i++; state.answered=false; drawQuiz(state, onFinish, target); }, q.why ? 2600 : 1300);
}

/* ============================= EXAMS ============================= */
function examQuestionCount(trad){
  return modulesByTrad(trad).reduce((a,m)=> a + Math.min(2,m.conceptos.length) + Math.min(1,m.obras.length), 0);
}
function renderExamLevelCards(){
  $("#examLevelCards").innerHTML = Object.entries(LEVELS).map(([k,l])=>`
    <div class="card lvlcard" style="--tclr:var(--${l.clr});--tsoft:var(--${l.clr}-soft);" onclick="startExam('${k}')">
      <span class="lvltag">${l.tag}</span>
      <h3>Examen ${l.label}</h3>
      <p>${examQuestionCount(k)} preguntas mixtas · cronometrado.</p>
    </div>`).join("");
  renderExamFinalCard();
  renderExamHistory();
}
function renderExamHistory(){
  const hist = progress.examHistory || [];
  if(!hist.length){ $("#examHistory").innerHTML = `<span class="muted">Todavía no diste ningún examen.</span>`; return; }
  $("#examHistory").innerHTML = hist.slice().reverse().slice(0,8).map(h=>`
    <div class="reviewrow"><span class="tag">${h.score>=70?'✅':'🔻'}</span>
    <span>${h.trad==="final" ? "Examen final integrador" : LEVELS[h.trad].label} — <b>${h.score}%</b> (${h.correct}/${h.total}) · ${h.date}</span></div>
  `).join("");
}
let examTimer = null;
function startExam(trad){
  const mods = modulesByTrad(trad);
  examState = { qs: buildQuestionSet(mods, 2), i:0, correct:0, answered:false, trad, secondsLeft: 12*60 };
  document.getElementById("examIntro").classList.add("hidden");
  document.getElementById("examRunner").classList.remove("hidden");
  clearInterval(examTimer);
  examTimer = setInterval(()=>{
    examState.secondsLeft--;
    updateExamTimer();
    if(examState.secondsLeft<=0){ clearInterval(examTimer); finishExam(); }
  }, 1000);
  drawExam();
}
function updateExamTimer(){
  const el = document.getElementById("examTimer");
  if(!el) return;
  const m = Math.floor(examState.secondsLeft/60), s = examState.secondsLeft%60;
  el.textContent = m+":"+String(s).padStart(2,"0");
  el.style.color = examState.secondsLeft < 60 ? "var(--bad)" : "var(--ink-soft)";
}
function drawExam(){
  if(examState.i >= examState.qs.length){ finishExam(); return; }
  const q = examState.qs[examState.i];
  document.getElementById("examRunner").innerHTML = `
    <div class="qhead">
      <span>Pregunta ${examState.i+1} / ${examState.qs.length}</span>
      <span class="mono" id="examTimer">--:--</span>
    </div>
    <div class="qcard">
      <div class="prompt" style="font-size:1.08rem;margin-bottom:16px;">${q.prompt}</div>
      <div class="optrow" id="eopts">
        ${q.options.map(o=>`<button class="optbtn" onclick="answerExam(this,'${String(o).replace(/'/g,"\\'")}')">${o}</button>`).join("")}
      </div>
    </div>`;
  updateExamTimer();
}
function answerExam(btn, chosen){
  if(examState.answered) return;
  examState.answered = true;
  const q = examState.qs[examState.i];
  $all("#eopts .optbtn").forEach(b=>{ b.disabled = true; if(b===btn && chosen===String(q.answer)) b.classList.add("correct"); else if(b===btn) b.classList.add("wrong"); else if(b.textContent===String(q.answer)) b.classList.add("correct"); });
  q._chosen = chosen;
  if(chosen === String(q.answer)) examState.correct++;
  setTimeout(()=>{ examState.i++; examState.answered=false; drawExam(); }, 650);
}
function finishExam(){
  clearInterval(examTimer);
  const total = examState.qs.length;
  const pct = total ? Math.round(100*examState.correct/total) : 0;
  const record = { trad:examState.trad, score:pct, correct:examState.correct, total, date: todayStr() };
  progress.examHistory = (progress.examHistory||[]).concat([record]);
  saveProgress();
  const missed = examState.qs.filter(q=>q._chosen !== undefined && q._chosen !== String(q.answer));
  document.getElementById("examRunner").innerHTML = `
    <div class="qcard center">
      <div class="resultbig" style="color:${pct>=70?'var(--good)':'var(--bad)'}">${pct}%</div>
      <p class="muted">${examState.correct} de ${total} correctas · ${pct>=70?'¡Aprobado!':'A seguir practicando'}</p>
      <button class="btn ghost" onclick="backToExamIntro()">Volver</button>
    </div>
    ${missed.length? `<h4 style="margin-top:24px;">Revisá tus errores</h4>${missed.map(q=>`
      <div class="reviewrow"><span class="tag">🔻</span><span><b>${q.prompt}</b><br>Tu respuesta: ${q._chosen} · Correcta: <b>${q.answer}</b></span></div>
    `).join("")}` : ""}
  `;
}
function backToExamIntro(){
  document.getElementById("examRunner").classList.add("hidden");
  document.getElementById("examIntro").classList.remove("hidden");
  renderExamHistory();
}

/* ============================= EXAMEN FINAL INTEGRADOR =============================
   Banco en datos/examen.js. Cada intento: 12 de selección múltiple con situación (estilo
   Saber Pro), 8 de verdadero o falso y una ronda de emparejamiento de 6 ideas de autores
   distintos y de al menos tres tradiciones. Sin cronómetro y sin corrección durante el
   examen: al final se ve el puntaje por sección, cada respuesta con su explicación y las
   fichas para repasar. */
const FINAL_N = { sel:12, vf:8, emp:6 };
let finalState = null;
function examenFinalDisponible(){ return typeof EXAMEN_FINAL !== "undefined" && EXAMEN_FINAL.seleccion && EXAMEN_FINAL.seleccion.length; }
function renderExamFinalCard(){
  const el = document.getElementById("examFinalCard");
  if(!el) return;
  if(!examenFinalDisponible()){ el.innerHTML = ""; return; }
  const ult = (progress.examHistory||[]).filter(h=>h.trad==="final").slice(-1)[0];
  el.innerHTML = `
    <div class="card finalcard">
      <div>
        <span class="kicker" style="color:var(--accent)">Las ${MODULES.length} fichas</span>
        <h3>Examen final integrador</h3>
        <p class="muted">${FINAL_N.sel} preguntas de selección múltiple con situación, al estilo Saber Pro · ${FINAL_N.vf} de verdadero o falso · un emparejamiento de ${FINAL_N.emp} ideas con su autor. Sin límite de tiempo: las respuestas y las explicaciones se ven al final.${ult?` <b>Último intento: ${ult.score}%</b> (${ult.date}).`:''}</p>
      </div>
      <button class="btn" onclick="startExamenFinal()">Empezar el examen</button>
    </div>`;
}
/* Ronda de emparejamiento: una idea por tradición primero, después se completa sin repetir autor. */
function armarEmparejamiento(){
  const pool = shuffle(EXAMEN_FINAL.emparejar.filter(x=>moduleById(x.mod)));
  const elegidas = [], usados = new Set();
  ["europea","asiatica","americana"].forEach(t=>{
    const x = pool.find(p=>!usados.has(p.mod) && moduleById(p.mod).trad===t);
    if(x){ elegidas.push(x); usados.add(x.mod); }
  });
  for(const p of pool){ if(elegidas.length>=FINAL_N.emp) break; if(!usados.has(p.mod)){ elegidas.push(p); usados.add(p.mod); } }
  const extra = shuffle(pool.filter(p=>!usados.has(p.mod))).slice(0,2).map(p=>p.mod);
  const autores = [...usados, ...extra].map(moduleById).sort((a,b)=>a.nombre.localeCompare(b.nombre,"es"));
  return { tipo:"emp", pares:shuffle(elegidas), autores };
}
function startExamenFinal(){
  const sel = shuffle(EXAMEN_FINAL.seleccion).slice(0, FINAL_N.sel).map(q=>({ tipo:"sel", q, orden:shuffle(q.opciones.map((_,i)=>i)) }));
  const vf = shuffle(EXAMEN_FINAL.vf).slice(0, FINAL_N.vf).map(q=>({ tipo:"vf", q }));
  finalState = { items:[...sel, ...vf, armarEmparejamiento()], i:0, resp:{}, aviso:false, inicio:Date.now() };
  document.getElementById("examIntro").classList.add("hidden");
  document.getElementById("examRunner").classList.remove("hidden");
  drawFinal();
}
function cerrarExamenFinal(){
  finalState = null;
  const runner = document.getElementById("examRunner"), intro = document.getElementById("examIntro");
  if(runner){ runner.classList.add("hidden"); runner.innerHTML = ""; }
  if(intro) intro.classList.remove("hidden");
  renderExamFinalCard(); renderExamHistory();
}
function finalSinResponder(){
  const st = finalState;
  return st.items.reduce((n,it,k)=>{
    const r = st.resp[k];
    if(it.tipo==="emp") return n + it.pares.filter((_,j)=>!(r && r[j])).length;
    return n + (r==null ? 1 : 0);
  }, 0);
}
function drawFinal(){
  const st = finalState, it = st.items[st.i], r = st.resp[st.i];
  const seccion = it.tipo==="sel" ? "Selección múltiple" : it.tipo==="vf" ? "Verdadero o falso" : "Emparejamiento";
  let cuerpo = "";
  if(it.tipo==="sel"){
    cuerpo = `<div class="situacion">${it.q.situacion}</div>
      <div class="prompt" style="margin:14px 0;">${it.q.pregunta}</div>
      <div class="finalopts">${it.orden.map((ix,k)=>`<button class="optbtn${r===ix?' elegida':''}" aria-pressed="${r===ix}" onclick="elegirFinal(${ix})"><span class="mono">${"ABCD"[k]}.</span> ${it.q.opciones[ix]}</button>`).join("")}</div>`;
  } else if(it.tipo==="vf"){
    cuerpo = `<div class="prompt" style="margin-bottom:14px;">${it.q.afirmacion}</div>
      <div class="optrow">${[[true,"Verdadero"],[false,"Falso"]].map(([v,l])=>`<button class="optbtn${r===v?' elegida':''}" aria-pressed="${r===v}" onclick="elegirFinal(${v})">${l}</button>`).join("")}</div>`;
  } else {
    cuerpo = `<p class="muted" style="margin-top:0;">Elegí el autor de cada idea. Hay ${it.autores.length - it.pares.length} nombres de más.</p>
      <div class="emplist">${it.pares.map((p,j)=>`<label class="empfila"><span>${p.idea}</span>
        <select onchange="elegirPar(${j}, this.value)" aria-label="Autor de la idea ${j+1}"><option value="">— elegí —</option>${it.autores.map(m=>`<option value="${m.id}" ${(r&&r[j])===m.id?'selected':''}>${m.nombre}</option>`).join("")}</select></label>`).join("")}</div>`;
  }
  const ult = st.i === st.items.length-1;
  const faltan = finalSinResponder();
  document.getElementById("examRunner").innerHTML = `
    <div class="qhead"><span>${seccion} · ${st.i+1} / ${st.items.length}</span><span id="finalFaltan">sin responder: ${faltan}</span></div>
    <div class="qcard">${cuerpo}</div>
    <div class="row" style="margin-top:14px;">
      <button class="btn ghost sm" onclick="cerrarExamenFinal()">Abandonar</button>
      <div class="spacer"></div>
      ${st.i>0?`<button class="btn ghost sm" onclick="finalState.i--; drawFinal();">← Anterior</button>`:''}
      ${ult?`<button class="btn sm" onclick="terminarFinal()">Terminar el examen</button>`:`<button class="btn sm" onclick="finalState.i++; drawFinal();">Siguiente →</button>`}
    </div>
    ${st.aviso && faltan?`<p class="muted" style="margin-top:10px;">Te quedan ${faltan} respuesta${faltan===1?'':'s'} sin marcar, que cuentan como incorrectas. Tocá «Terminar» otra vez para entregar igual.</p>`:''}`;
}
function elegirFinal(v){ finalState.resp[finalState.i] = v; drawFinal(); }
function elegirPar(j, mod){
  const k = finalState.i;
  finalState.resp[k] = Object.assign({}, finalState.resp[k], { [j]: mod || undefined });
  const el = document.getElementById("finalFaltan");
  if(el) el.textContent = "sin responder: " + finalSinResponder();
}
function terminarFinal(){
  const st = finalState;
  if(finalSinResponder() && !st.aviso){ st.aviso = true; drawFinal(); return; }
  const pts = { sel:[0,0], vf:[0,0], emp:[0,0] };
  const repasar = new Set();
  const revision = st.items.map((it,k)=>{
    const r = st.resp[k];
    if(it.tipo==="emp"){
      return it.pares.map((p,j)=>{
        const ok = r && r[j]===p.mod;
        pts.emp[1]++; if(ok) pts.emp[0]++; else repasar.add(p.mod);
        const elegido = r && r[j] ? moduleById(r[j]).nombre : "sin responder";
        return `<div class="reviewrow"><span class="tag">${ok?'✅':'🔻'}</span><span>«${p.idea}»<br>${ok?`<b>${moduleById(p.mod).nombre}</b>`:`Tu respuesta: ${elegido} · Correcta: <b>${moduleById(p.mod).nombre}</b>`}</span></div>`;
      }).join("");
    }
    const ok = it.tipo==="sel" ? r===it.q.correcta : r===it.q.verdadero;
    pts[it.tipo][1]++; if(ok) pts[it.tipo][0]++; else (it.q.fichas||[]).forEach(f=>repasar.add(f));
    const tuya = r==null ? "sin responder" : it.tipo==="sel" ? it.q.opciones[r] : (r?"Verdadero":"Falso");
    const buena = it.tipo==="sel" ? it.q.opciones[it.q.correcta] : (it.q.verdadero?"Verdadero":"Falso");
    return `<div class="reviewrow"><span class="tag">${ok?'✅':'🔻'}</span><span>${it.tipo==="sel"?`<span class="muted">${it.q.situacion}</span><br><b>${it.q.pregunta}</b>`:`<b>${it.q.afirmacion}</b>`}<br>
      ${ok?`Respondiste: ${tuya}`:`Tu respuesta: ${tuya} · Correcta: <b>${buena}</b>`}<div class="muted" style="margin-top:4px;">${it.q.explicacion}</div></span></div>`;
  });
  const correct = pts.sel[0]+pts.vf[0]+pts.emp[0], total = pts.sel[1]+pts.vf[1]+pts.emp[1];
  const pct = total ? Math.round(100*correct/total) : 0;
  progress.examHistory = (progress.examHistory||[]).concat([{ trad:"final", score:pct, correct, total, date:todayStr() }]);
  saveProgress();
  const mins = Math.max(1, Math.round((Date.now()-st.inicio)/60000));
  const fichas = [...repasar].map(moduleById).filter(Boolean);
  finalState = null;
  document.getElementById("examRunner").innerHTML = `
    <div class="qcard center">
      <div class="resultbig" style="color:${pct>=70?'var(--good)':'var(--bad)'}">${pct}%</div>
      <p class="muted">${correct} de ${total} puntos · ${mins} min · ${pct>=70?'¡Aprobado!':'A seguir estudiando'}</p>
      <p class="mono" style="font-size:.85rem;">Selección ${pts.sel[0]}/${pts.sel[1]} · Verdadero o falso ${pts.vf[0]}/${pts.vf[1]} · Emparejamiento ${pts.emp[0]}/${pts.emp[1]}</p>
      <button class="btn ghost" onclick="cerrarExamenFinal()">Volver</button>
    </div>
    ${fichas.length?`<h4 style="margin-top:24px;">Fichas para repasar</h4><div class="chiprow">${fichas.map(m=>`<button class="chip" onclick="openModule('${m.id}')">${m.nombre}</button>`).join("")}</div>`:''}
    <h4 style="margin-top:20px;">Revisión de todas las respuestas</h4>
    ${revision.join("")}`;
  window.scrollTo({top:0, behavior:"instant"});
}

/* ============================= BUSCADOR =============================
   Índice construido una vez al arrancar: fichas, tesis, conceptos, obras, lecturas, términos
   del glosario y constelaciones. Se busca sin mayúsculas ni tildes (śūnyatā = sunyata), y
   todas las palabras de la consulta tienen que aparecer. Atajo: "/" abre el buscador. */
let BUSQ_INDICE = null;
function normBusq(s){ return String(s||"").replace(/<[^>]+>/g," ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(); }
const esLetra = c=>/[a-z0-9]/.test(c||"");
/* Posición de `t` en `norm` solo al comienzo de una palabra (o -1). */
function inicioPalabra(norm, t, desde){
  let p = norm.indexOf(t, desde||0);
  while(p>0 && esLetra(norm[p-1])) p = norm.indexOf(t, p+1);
  return p;
}
function textoPlano(s){ return String(s||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); }
function construirIndice(){
  const ix = [];
  /* Texto normalizado con un espacio delante de cada palabra: así " nada" coincide con el
     comienzo de una palabra y no con el medio de "determinada". */
  const pal = s=>" "+normBusq(s).replace(/[^a-z0-9]+/g," ");
  const add = (o)=>{ o.nt = pal(o.titulo); o.nx = pal(o.texto); ix.push(o); };
  MODULES.forEach(m=>{
    add({ tipo:"Ficha", mod:m, titulo:m.nombre, texto:`${m.escuela} · ${m.fechas} · ${m.tesis}`, ir:()=>openModule(m.id) });
    (m.conceptos||[]).forEach((c,i)=>add({ tipo:"Concepto", mod:m, titulo:c.t, texto:c.d, ir:()=>abrirTarjeta(m.id,"conceptos",i) }));
    (m.obras||[]).forEach((o,i)=>add({ tipo:"Obra", mod:m, titulo:o.t, texto:o.d, ir:()=>abrirTarjeta(m.id,"obras",i) }));
    (m.lecturas||[]).forEach(l=>add({ tipo:"Lectura", mod:m, titulo:l.titulo, texto:`${l.fuente} ${l.extracto}`, ir:()=>openModule(m.id,"lecturas") }));
    getQuiz(m).forEach(q=>add({ tipo:"Pregunta", mod:m, titulo:textoPlano(q.q), texto:q.p, ir:()=>openModule(m.id,"preguntas") }));
  });
  (typeof POLYSEMOUS_TERMS!=="undefined"?POLYSEMOUS_TERMS:[]).forEach(([t,d])=>add({ tipo:"Glosario", mod:null, titulo:t, texto:d, ir:()=>showView("consejos") }));
  (typeof CONSTELACIONES!=="undefined"?CONSTELACIONES:[]).forEach(c=>add({ tipo:"Constelación", mod:null, titulo:c.tema, texto:`${c.nucleo} ${c.entradas.map(e=>e.postura).join(" ")}`, ir:()=>{ showView("constelaciones"); abrirConstelacion(c.id); } }));
  BUSQ_INDICE = ix;
}
const BUSQ_PESO = { "Ficha":6, "Concepto":4, "Obra":4, "Constelación":3, "Glosario":3, "Lectura":2, "Pregunta":1 };
function buscar(q){
  const terms = normBusq(q).split(/\s+/).filter(t=>t.length>=2);
  if(!terms.length) return [];
  if(!BUSQ_INDICE) construirIndice();
  return BUSQ_INDICE.map(e=>{
    let s = 0;
    for(const t of terms){
      const enT = e.nt.includes(" "+t), enX = e.nx.includes(" "+t);
      if(!enT && !enX) return null;
      s += enT ? 10 : 1;
    }
    return { e, s: s + BUSQ_PESO[e.tipo] };
  }).filter(Boolean).sort((a,b)=>b.s-a.s).slice(0,40).map(x=>x.e);
}
/* Fragmento alrededor de la primera coincidencia, con las palabras resaltadas. */
function fragmento(e, q){
  const plano = textoPlano(e.texto), norm = normBusq(plano);
  const terms = normBusq(q).split(/\s+/).filter(t=>t.length>=2);
  let pos = -1; for(const t of terms){ const p = inicioPalabra(norm, t); if(p>=0 && (pos<0 || p<pos)) pos = p; }
  const ini = Math.max(0, pos - 60), fin = Math.min(plano.length, (pos<0?0:pos) + 140);
  let frag = (ini>0?"…":"") + plano.slice(ini, fin) + (fin<plano.length?"…":"");
  return resaltar(frag, terms);
}
function resaltar(texto, terms){
  const norm = normBusq(texto);
  const marcas = new Array(texto.length).fill(false);
  terms.forEach(t=>{ let p = inicioPalabra(norm, t); while(p>=0){ for(let k=p;k<p+t.length;k++) marcas[k]=true; p = inicioPalabra(norm, t, p+1); } });
  let out = "", abierto = false;
  for(let k=0;k<texto.length;k++){
    if(marcas[k] && !abierto){ out += "<mark>"; abierto = true; }
    if(!marcas[k] && abierto){ out += "</mark>"; abierto = false; }
    out += escapeHtml(texto[k]);
  }
  return out + (abierto?"</mark>":"");
}
let busqResultados = [];
function renderBusqueda(q){
  const box = document.getElementById("busqResultados");
  if(!box) return;
  if(normBusq(q).trim().length < 2){ box.classList.add("hidden"); box.innerHTML = ""; busqResultados = []; return; }
  busqResultados = buscar(q);
  box.classList.remove("hidden");
  if(!busqResultados.length){ box.innerHTML = `<div class="busqvacio">No hay resultados para «${escapeHtml(q)}».</div>`; return; }
  const terms = normBusq(q).split(/\s+/).filter(t=>t.length>=2);
  box.innerHTML = `<div class="busqcuenta">${busqResultados.length}${busqResultados.length===40?'+':''} resultado${busqResultados.length===1?'':'s'} · Enter abre el primero · Esc cierra</div>` +
    busqResultados.map((e,i)=>`<button class="busqitem" onclick="abrirResultado(${i})">
      <span class="busqtipo">${e.tipo}${e.mod?` · ${escapeHtml(e.mod.nombre)}`:''}</span>
      <span class="busqtit">${resaltar(textoPlano(e.titulo), terms)}</span>
      <span class="busqfrag">${fragmento(e, q)}</span></button>`).join("");
}
function abrirResultado(i){
  const e = busqResultados[i];
  if(!e) return;
  cerrarBusqueda();
  e.ir();
}
function cerrarBusqueda(){
  const inp = document.getElementById("busqInput"), box = document.getElementById("busqResultados");
  if(inp){ inp.value = ""; inp.blur(); }
  if(box){ box.classList.add("hidden"); box.innerHTML = ""; }
  busqResultados = [];
}
function busqKeydown(ev){
  if(ev.key === "Escape"){ cerrarBusqueda(); }
  else if(ev.key === "Enter"){ ev.preventDefault(); abrirResultado(0); }
}
/* Abre una ficha en Conceptos u Obras, directamente en la tarjeta buscada. */
function abrirTarjeta(id, kind, idx){
  openModule(id, kind);
  const k = flashDeck.findIndex(c=>c.idx===idx);
  if(k>=0){ flashIndex = k; drawFlash(); }
}
document.addEventListener("keydown", ev=>{
  const t = ev.target, escribiendo = t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.tagName==="SELECT" || t.isContentEditable);
  if(ev.key === "/" && !escribiendo){ ev.preventDefault(); const inp = document.getElementById("busqInput"); if(inp) inp.focus(); }
});
document.addEventListener("click", ev=>{
  const zona = document.getElementById("busqZona");
  if(zona && !zona.contains(ev.target)){ const box = document.getElementById("busqResultados"); if(box) box.classList.add("hidden"); }
});

/* ============================= COPIA Y REINICIO DEL PROGRESO =============================
   Guardar copia: baja un .json con todo el progreso (también lo escrito). Recuperar copia:
   lo vuelve a cargar, pasando por sanitizeProgress. Reiniciar: borra todo, con confirmación
   escrita. También se puede reiniciar una sola ficha desde su Panorama. */
function guardarCopia(){
  const datos = { app:"agora", version:1, fecha:new Date().toISOString(), progreso:progress };
  const url = URL.createObjectURL(new Blob([JSON.stringify(datos, null, 1)], {type:"application/json"}));
  const a = document.createElement("a");
  a.href = url; a.download = `agora-progreso-${todayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function avisoProgreso(msg, ok){
  const el = document.getElementById("progAviso");
  if(el){ el.className = "gfeedback show " + (ok?"ok":"no"); el.textContent = msg; }
}
function recuperarCopia(input){
  const f = input.files && input.files[0];
  input.value = "";
  if(!f) return;
  const lector = new FileReader();
  lector.onload = ()=>{
    let datos;
    try{ datos = JSON.parse(lector.result); }catch(e){ avisoProgreso("Ese archivo no es una copia de Ágora válida.", false); return; }
    const raw = datos && datos.app==="agora" ? datos.progreso : null;
    if(!isPlainObj(raw)){ avisoProgreso("Ese archivo no es una copia de Ágora válida.", false); return; }
    progress = sanitizeProgress(raw);
    saveProgress(); refreshProgressUI();
    avisoProgreso(`Copia recuperada${datos.fecha?` (guardada el ${datos.fecha.slice(0,10)})`:''}.`, true);
  };
  lector.readAsText(f);
}
function reiniciarTodo(){
  const inp = document.getElementById("confReinicio");
  if(!inp || inp.value.trim().toUpperCase() !== "REINICIAR"){ avisoProgreso("Para reiniciar, escribí REINICIAR en el recuadro.", false); return; }
  progress = defaultProgress();
  saveProgress(); refreshProgressUI(); renderExamFinalCard();
  avisoProgreso("Listo: el progreso quedó en cero.", true);
}
let reinicioFicha = null;
function reiniciarFicha(id){
  if(reinicioFicha !== id){ reinicioFicha = id; renderPanorama(); return; }   // primer toque: pide confirmar
  reinicioFicha = null;
  const pref = id+":";
  ["conceptDone","obraDone","respuestas","repaso"].forEach(k=>Object.keys(progress[k]).forEach(key=>{ if(key.startsWith(pref)) delete progress[k][key]; }));
  delete progress.moduleQuiz[id];
  saveProgress(); refreshProgressUI(); renderPanorama();
}

/* ============================= TIPS ============================= */
function renderTips(){
  const falaciasMod = moduleById("falacias");
  $("#ffTable").innerHTML = `<tr><th>Falacia</th><th>En pocas palabras</th></tr>` +
    falaciasMod.conceptos.map(c=>`<tr><td><b>${c.t}</b></td><td class="muted">${c.d.split(".")[0]}.</td></tr>`).join("");
  $("#pvList").innerHTML = POLYSEMOUS_TERMS.map(([term,def])=>`
    <div class="pv-item"><b>${term}</b><br><span class="muted" style="font-size:.85rem;">${def}</span></div>`).join("");
}

/* ============================= PROGRESS ============================= */
function renderProgressView(){
  const rows = MODULES.map(m=>{
    const knownC = (progress.conceptDone[m.id+":conceptos"]||[]).length;
    const pct = Math.round(100*knownC/m.conceptos.length);
    const quiz = progress.moduleQuiz[m.id];
    const nPreg = getQuiz(m).length;
    const resp = getQuiz(m).filter((_,i)=>palabras((progress.respuestas[m.id+":preguntas:"+i]||{}).texto)>0).length;
    const clr = LEVELS[m.trad].clr;
    return `
      <div class="card tight" style="margin-bottom:12px;border-left:4px solid var(--${clr});">
        <div class="row">${monograma(m,"chico")}<b>${m.nombre}</b><div class="spacer"></div><span class="muted mono">${LEVELS[m.trad].label}</span></div>
        <div class="row muted" style="font-size:.85rem;margin-top:6px;"><span>Conceptos: ${knownC}/${m.conceptos.length} (${pct}%)</span><div class="spacer"></div><span>Preguntas escritas: ${resp}/${nPreg}</span><div class="spacer"></div><span>Cuestionario: ${quiz!=null?quiz+'%':'—'}</span></div>
      </div>`;
  }).join("");
  const hist = progress.examHistory||[];
  $("#progBody").innerHTML = `
    <div class="grid stats" style="margin-bottom:24px;">
      <div class="card statbox tight"><div class="num mono">${progress.streak.count||0}</div><div class="lbl">días seguidos</div></div>
      <div class="card statbox tight"><div class="num mono">${hist.length}</div><div class="lbl">exámenes</div></div>
      <div class="card statbox tight"><div class="num mono">${hist.length? Math.round(hist.reduce((a,h)=>a+h.score,0)/hist.length)+'%':'—'}</div><div class="lbl">promedio exámenes</div></div>
    </div>
    <h3>Por ficha</h3>
    ${rows}
    <h3 style="margin-top:32px;">Copia y reinicio</h3>
    <div class="card tight progtools">
      <p class="muted">Tu progreso vive solo en este navegador. Guardá una copia para no perderlo o para llevarlo a otro computador.</p>
      <div class="row">
        <button class="btn sm" onclick="guardarCopia()">⬇️ Guardar copia</button>
        <label class="btn ghost sm" style="cursor:pointer;">⬆️ Recuperar copia<input type="file" accept=".json,application/json" class="hidden" onchange="recuperarCopia(this)"></label>
      </div>
      <div class="sechead">Reiniciar todo</div>
      <p class="muted">Borra tarjetas, repasos, cuestionarios, exámenes, racha y todo lo escrito. No se puede deshacer: guardá una copia antes.</p>
      <div class="row">
        <input id="confReinicio" class="campo" placeholder="Escribí REINICIAR" aria-label="Confirmación: escribí REINICIAR">
        <button class="btn ghost sm peligro" onclick="reiniciarTodo()">Reiniciar todo</button>
      </div>
      <div class="gfeedback" id="progAviso" role="status" aria-live="polite"></div>
    </div>
  `;
}

/* ============================= INIT ============================= */
function init(){
  loadProgress();   // síncrono: el progreso ya está en memoria antes del primer render
  bumpStreak();     // cuenta la visita de hoy y guarda
  renderStorageNotice();
  renderStreak();   // también cuando hoy ya se había contado y bumpStreak() no guarda
  renderTabs();
  marcarTemaBtn();
  renderLevelCards();
  renderStatCards();
  renderRepasoHoy();
  renderModFilterChips();
  renderModuleCards();
  renderExamLevelCards();
  renderConstelaciones();
  renderTips();
  renderProgressView();
  showView("inicio");
}
init();
