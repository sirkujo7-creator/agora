/* Ágora · lógica de la aplicación. Se carga después de todos los datos. */

/* Une cada ficha con sus lecturas. */
MODULES.forEach(m=>{ const L = LECTURAS[m.id]; if(L){ m.lecturas = L.lecturas; m.preguntasLectura = L.preguntasLectura; } });

/* ============================= STATE ============================= */
/* Forma del progreso guardado. Es la misma que usaba la versión anterior, así que
   el resto de la app sigue leyendo y escribiendo `progress.xxx` sin cambios. */
function defaultProgress(){ return { conceptDone:{}, obraDone:{}, examHistory:[], streak:{last:null,count:0}, moduleQuiz:{} }; }
let progress = defaultProgress();
let currentModule = null, currentDetTab = "conceptos";
let flashIndex = 0, flashOrder = [], flashKind = "conceptos";
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
function yesterdayStr(){ const d = new Date(); d.setDate(d.getDate()-1); return localDateStr(d); }
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
    p.examHistory = raw.examHistory.filter(h=>isPlainObj(h) && LEVELS[h.trad] && typeof h.score==="number");
  }
  if(isPlainObj(raw.moduleQuiz)){
    Object.entries(raw.moduleQuiz).forEach(([k,v])=>{ if(typeof v==="number" && isFinite(v)) p.moduleQuiz[k] = v; });
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
  renderStreak(); renderStatCards(); renderStorageNotice();
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
  renderStreak(); renderStatCards(); renderProgressView(); renderModuleCards(); renderExamHistory();
  const detActivo = document.getElementById("view-detalle").classList.contains("active");
  if(detActivo && currentModule && (currentDetTab==="conceptos" || currentDetTab==="obras") && flashOrder.length) drawFlash();
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
  if(id === "constelaciones"){ constelActual = null; renderConstelaciones(); }
  $all(".view").forEach(v=>v.classList.remove("active"));
  const v = document.getElementById("view-"+id);
  if(v) v.classList.add("active");
  $all("#mainTabs button").forEach(b=>b.classList.toggle("active", b.dataset.tab===id));
  window.scrollTo({top:0, behavior:"instant"});
}

/* ============================= HOME ============================= */
function renderLevelCards(){
  $("#levelCards").innerHTML = Object.entries(LEVELS).map(([k,l])=>`
    <div class="card lvlcard" style="--tclr:var(--${l.clr});--tsoft:var(--${l.clr}-soft);" onclick="openLevel('${k}')">
      <span class="lvltag">${l.tag}</span>
      <h3>${l.label}</h3>
      <p>${l.desc}</p>
    </div>`).join("");
}
function openLevel(t){ showView("modulos"); setModFilter(t); }
function renderStatCards(){
  const totalModules = MODULES.length;
  const doneModules = MODULES.filter(m => (progress.moduleQuiz[m.id]||0) > 0).length;
  const scores = Object.values(progress.moduleQuiz||{});
  const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
  const conceptTotal = MODULES.reduce((a,m)=>a+m.conceptos.length,0);
  const conceptKnown = Object.values(progress.conceptDone||{}).reduce((a,arr)=>a+(arr?arr.length:0),0);
  $("#statCards").innerHTML = `
    <div class="card statbox tight"><div class="num mono">${doneModules}/${totalModules}</div><div class="lbl">fichas con cuestionario</div></div>
    <div class="card statbox tight"><div class="num mono">${avg}%</div><div class="lbl">promedio cuestionarios</div></div>
    <div class="card statbox tight"><div class="num mono">${conceptKnown}/${conceptTotal}</div><div class="lbl">conceptos dominados</div></div>
    <div class="card statbox tight"><div class="num mono">${(progress.examHistory||[]).length}</div><div class="lbl">exámenes dados</div></div>
  `;
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
    return `<div class="card modcard" style="--tclr:var(--${clr});--tsoft:var(--${clr}-soft);" onclick="openModule('${m.id}')">
      <span class="emo">${m.icon}</span>
      <h4>${m.nombre} ${m.profundizada?'<span class="badge">◆ profundizada</span>':''}</h4>
      <span class="meta">${LEVELS[m.trad].label} · ${score!=null?('cuestionario: '+score+'%'):'sin empezar'}</span>
    </div>`;
  }).join("");
}

/* ============================= MODULE DETAIL ============================= */
const DET_TABS = [["conceptos","Conceptos"],["obras","Obras"],["lecturas","Lecturas"],["dialogo","Diálogo"],["metodo","Método"],["emparejar","Emparejar"],["actividades","Actividades"],["razonamiento","Razonamiento"],["argumentos","Argumentos"],["dilema","Dilema"],["cuestionario","Cuestionario final"]];
function openModule(id){
  currentModule = moduleById(id);
  currentDetTab = "conceptos";
  $("#detTitle").textContent = currentModule.icon+"  "+currentModule.nombre;
  $("#detMeta").textContent = currentModule.fechas+" · "+currentModule.escuela;
  $("#detTabs").innerHTML = DET_TABS.map(([k,l])=>`<button data-dt="${k}" onclick="setDetTab('${k}')">${l}</button>`).join("");
  showView("detalle");
  renderDetTab();
}
function setDetTab(k){ currentDetTab = k; renderDetTab(); }
function renderDetTab(){
  $all("#detTabs button").forEach(b=>b.classList.toggle("active", b.dataset.dt===currentDetTab));
  if(currentDetTab==="conceptos") renderFlashcards("conceptos");
  else if(currentDetTab==="obras") renderFlashcards("obras");
  else if(currentDetTab==="lecturas") renderLecturas();
  else if(currentDetTab==="dialogo") renderDialogue();
  else if(currentDetTab==="metodo") renderMetodo();
  else if(currentDetTab==="emparejar") renderMatching();
  else if(currentDetTab==="actividades") renderActivities();
  else if(currentDetTab==="razonamiento") renderCadena();
  else if(currentDetTab==="argumentos") renderReconstruccion();
  else if(currentDetTab==="dilema") renderDilema();
  else if(currentDetTab==="cuestionario") renderModuleQuiz();
}

/* --- Flashcards (shared by Conceptos and Obras) --- */
function progKeyStore(kind){ return kind==="obras" ? progress.obraDone : progress.conceptDone; }
function renderFlashcards(kind){
  flashKind = kind;
  const list = currentModule[kind];
  flashOrder = shuffle(list.map((_,i)=>i));
  flashIndex = 0;
  drawFlash();
}
function drawFlash(){
  const list = currentModule[flashKind];
  const store = progKeyStore(flashKind);
  const known = store[currentModule.id+":"+flashKind] || [];
  const idx = flashOrder[flashIndex];
  const item = list[idx];
  const largo = String(item.d||"").length > 260;
  $("#detBody").innerHTML = `
    <div class="flashwrap">
      <div class="flashcounter">${flashKind==="obras"?"Obra":"Concepto"} ${flashIndex+1} / ${flashOrder.length} · dominadas ${known.length}/${list.length}</div>
      <div class="flashnotice">${flashNotice || ""}${saveFailed?' · ⚠️ no se pudo guardar en este navegador':''}</div>
      <div class="flashcard"><div class="flashinner" id="flashInner" tabindex="0" role="button" aria-label="Voltear tarjeta" onclick="flipFlash()" onkeydown="flashKeydown(event)">
        <div class="flashface front">
          <div class="emo">${currentModule.icon}</div>
          <div class="clue${largo?' long':''}">“${item.d}”</div>
          <div class="hintline">${largo?'desplazá el texto si hace falta · tocá la tarjeta para ver el nombre':'tocá la tarjeta para ver el nombre'}</div>
        </div>
        <div class="flashface back">
          <div class="big">${item.t}</div>
        </div>
      </div></div>
      <div class="flashactions">
        <button class="btn ghost sm" onclick="markKnown(${idx}, false)">🔁 Repasar de nuevo</button>
        <button class="btn sm" onclick="markKnown(${idx}, true)">👍 La tengo clara</button>
      </div>
      <div class="flashnav">
        <button class="iconbtn" onclick="stepFlash(-1)">←</button>
        <span class="muted" style="font-size:.8rem;">${known.includes(idx)?'✅ dominada':'todavía no'}</span>
        <button class="iconbtn" onclick="stepFlash(1)">→</button>
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
function stepFlash(d){ flashIndex = (flashIndex + d + flashOrder.length) % flashOrder.length; drawFlash(); }
/* Mensaje corto que explica qué acaba de hacer el botón: sin esto no se veía
   que "dominadas" había cambiado, porque la tarjeta salta a la siguiente. */
let flashNotice = "";
function markKnown(idx, known){
  const store = progKeyStore(flashKind);
  const key = currentModule.id+":"+flashKind;
  const list = new Set(store[key] || []);
  const antes = list.size;
  if(known) list.add(idx); else list.delete(idx);
  store[key] = Array.from(list);
  const total = currentModule[flashKind].length;
  const nombre = currentModule[flashKind][idx] ? currentModule[flashKind][idx].t : "";
  flashNotice = known
    ? (list.size>antes ? `✅ “${nombre}” queda como dominada · ${list.size}/${total}`
                       : `✅ “${nombre}” ya estaba dominada · ${list.size}/${total}`)
    : (list.size<antes ? `🔁 “${nombre}” vuelve a la lista de repaso · ${list.size}/${total}`
                       : `🔁 “${nombre}” queda para repasar · ${list.size}/${total}`);
  saveProgress();
  stepFlash(1);
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

/* --- Método (explicación + ejercicios generados de Obras) --- */
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
    return { prompt:`¿Qué obra corresponde a: “${pool[i].d}”?`, options:shuffle([correct,...distractors]), answer:correct };
  });
}
function conceptMCQ(mod, n){
  const pool = mod.conceptos;
  const chosen = shuffle(pool.map((_,i)=>i)).slice(0, Math.min(n, pool.length));
  return chosen.map(i=>{
    const correct = pool[i].t;
    const distractors = pickClosest(pool[i], distractorTiers(mod,"conceptos",pool[i]), 3).map(x=>x.t);
    return { prompt:`¿Qué concepto corresponde a: “${pool[i].d}”?`, options:shuffle([correct,...distractors]), answer:correct };
  });
}
function renderMetodo(){
  const d = currentModule;
  const exercises = [...conceptMCQ(d,2), ...obrasMCQ(d,2)];
  $("#detBody").innerHTML = `
    <h4>${d.escuela}</h4>
    <p style="line-height:1.6;max-width:68ch;">${d.tesis}</p>
    <h4 style="margin-top:22px;">Para no confundir</h4>
    <div class="mistake">🔗 <span>${d.conexion}</span></div>
    <h4 style="margin-top:22px;">Practicá identificando conceptos y obras</h4>
    <div id="metEx">
      ${exercises.map((ex,i)=>`
        <div class="exq" id="mex${i}">
          <div class="prompt">${i+1}. ${ex.prompt}</div>
          <div class="optrow">
            ${ex.options.map(o=>`<button class="optbtn" onclick="answerMetodo(${i},'${String(o).replace(/'/g,"\\'")}',this)">${o}</button>`).join("")}
          </div>
        </div>`).join("")}
    </div>`;
  window._metEx = exercises;
}
function answerMetodo(i, chosen, btn){
  const ex = window._metEx[i];
  const box = document.getElementById("mex"+i);
  $all(".optbtn", box).forEach(b=>{
    b.disabled = true;
    if(b.textContent === ex.answer) b.classList.add("correct");
    else if(b===btn) b.classList.add("wrong");
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
  const right = shuffle([...items.map(i=>({key:i, d:pool[i].d})), ...decoys.map(x=>({key:x.key, d:x.d}))]);
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

/* --- Activities (read-only) --- */
function renderActivities(){
  const acts = currentModule.actividades && currentModule.actividades.length ? currentModule.actividades : [
    {t:"Resumir la tesis en tus propias palabras", d:`Explicá la tesis central de ${currentModule.nombre} en dos o tres frases, sin usar ninguno de los términos técnicos de "Conceptos".`},
    {t:"Buscar un caso actual", d:`Encontrá una situación o debate actual que pueda leerse a la luz de ${currentModule.nombre} — y explicá qué aportaría su perspectiva.`},
    {t:"Confrontar con la conexión propuesta", d:`Tomá la conexión con el otro pensador de esta ficha y escribí un párrafo defendiendo la postura de ${currentModule.nombre} frente a la de esa otra persona.`}
  ];
  const clr = LEVELS[currentModule.trad].clr;
  $("#detBody").innerHTML = `
    <div style="--tclr:var(--${clr});">
      <div class="sechead">Para escribir y pensar</div>
      <div class="activities">${acts.map(a=>`<div class="activity"><h4>${a.t}</h4><p>${a.d}</p></div>`).join("")}</div>
      <div class="sechead">Minijuegos · práctica rápida</div>
      <div class="games">
        <section class="game" id="gameMC"></section>
        <section class="game" id="gameTF"></section>
        <section class="game" id="gameIN"></section>
        <section class="game" id="gameWH"></section>
      </div>
    </div>`;
  initMinijuegos();
}

/* ============================= MINIJUEGOS ============================= */
/* Auto-generados desde los propios `conceptos` / `obras` / `lecturas` de cada ficha.
   Single-user: puntaje por ronda, sin equipos. */
let miniState = null;

function otherModules(mod){ return MODULES.filter(m=>m.id!==mod.id); }
function pickFrom(arr,n){ return shuffle(arr.slice()).slice(0,n); }

function initMinijuegos(){
  const d = currentModule;
  miniState = {
    mc:{ items:buildMCItems(d), i:0, ok:0 },
    tf:{ items:buildTFItems(d), i:0, ok:0 },
    intruso:{ items:buildIntrusoItems(d), i:0, ok:0 },
    wheel:{ prompts:buildWheelPrompts(d), spinning:false, turn:0 }
  };
  drawMC(); drawTF(); drawIntruso(); drawWheel();
}

/* (a) Opción múltiple: ¿quién lo dijo / qué obra es?
   Distractores cercanos: uno de la misma ficha y el resto de las fichas más parecidas
   (primero de la misma tradición). */
function buildMCItems(d){
  const items = [];
  (d.obras||[]).forEach(o=>{
    const distract = pickClosest(o, distractorTiers(d,"obras",o,{maxSame:1}), 3).map(x=>x.t);
    if(distract.length===3) items.push({ prompt:`¿A qué obra corresponde esta descripción?<br><span class="muted">“${o.d}”</span>`, options:shuffle([o.t,...distract]), answer:o.t,
      why:`“${o.t}” es de ${d.nombre}.` });
  });
  (d.conceptos||[]).forEach(c=>{
    const distract = pickClosest(c, distractorTiers(d,"conceptos",c,{maxSame:1}), 3).map(x=>x.t);
    if(distract.length===3) items.push({ prompt:`¿Qué concepto se define así?<br><span class="muted">“${c.d}”</span>`, options:shuffle([c.t,...distract]), answer:c.t,
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
function drawMC(){
  const st = miniState.mc, box = document.getElementById("gameMC");
  if(!box) return;
  if(!st.items.length){ box.innerHTML = `<h4>🎯 ¿Quién lo dijo?</h4><p class="gamesub">No hay suficiente material en esta ficha para este juego.</p>`; return; }
  if(st.i >= st.items.length){
    box.innerHTML = `<h4>🎯 ¿Quién lo dijo?<span class="gamescore">ronda terminada</span></h4>
      <p class="gamesub">Acertaste <b>${st.ok}</b> de ${st.items.length}.</p>
      <button class="btn sm" onclick="restartMC()">↺ Jugar otra ronda</button>`;
    return;
  }
  const q = st.items[st.i];
  box.innerHTML = `
    <h4>🎯 ¿Quién lo dijo?<span class="gamescore">${st.i+1}/${st.items.length} · ✅ ${st.ok}</span></h4>
    <p class="gamesub">Identificá el concepto, la obra o el autor a partir de la descripción.</p>
    <div class="tfstatement">${q.prompt}</div>
    <div class="optrow" style="margin-top:10px;" id="mcOpts">
      ${q.options.map(o=>`<button class="optbtn" onclick="answerMC(this)">${escapeHtml(o)}</button>`).join("")}
    </div>
    <div class="gfeedback" id="mcFb"></div>`;
}
function answerMC(btn){
  const st = miniState.mc, q = st.items[st.i];
  if(st.locked) return; st.locked = true;
  const chosen = btn.textContent;
  const bien = chosen === q.answer;
  if(bien) st.ok++;
  $all("#mcOpts .optbtn").forEach(b=>{
    b.disabled = true;
    if(b.textContent === q.answer) b.classList.add("correct");
    else if(b===btn) b.classList.add("wrong");
  });
  const fb = document.getElementById("mcFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = (bien?"✅ Correcto. ":"❌ La respuesta era <b>"+escapeHtml(q.answer)+"</b>. ") + (q.why||"");
  setTimeout(()=>{ st.i++; st.locked=false; drawMC(); }, bien?1200:2200);
}
function restartMC(){ miniState.mc = { items:buildMCItems(currentModule), i:0, ok:0 }; drawMC(); }

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
    items.push({ texto:`<b>${c.t}</b> se define como: “${c.d}”`, verdadero:true,
      why:`Correcto: es la definición que usa la ficha de ${d.nombre}.` });
    const t = distractorTiers(d,"conceptos",c,{modo:"def"});        // [misma ficha, misma tradición, resto]
    const tiers = (k%2===0) ? t : [t[1], t[0], t[2]];
    const falsa = pickClosest(c, tiers, 1)[0];
    if(falsa) items.push({ texto:`<b>${c.t}</b> se define como: “${falsa.d}”`, verdadero:false,
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
function drawTF(){
  const st = miniState.tf, box = document.getElementById("gameTF");
  if(!box) return;
  if(st.i >= st.items.length){
    box.innerHTML = `<h4>⚡ Verdadero o falso<span class="gamescore">ronda terminada</span></h4>
      <p class="gamesub">Acertaste <b>${st.ok}</b> de ${st.items.length}.</p>
      <button class="btn sm" onclick="restartTF()">↺ Jugar otra ronda</button>`;
    return;
  }
  const q = st.items[st.i];
  box.innerHTML = `
    <h4>⚡ Verdadero o falso<span class="gamescore">${st.i+1}/${st.items.length} · ✅ ${st.ok}</span></h4>
    <p class="gamesub">Rápido: ¿la definición corresponde al término?</p>
    <div class="tfstatement">${q.texto}</div>
    <div class="tfrow">
      <button class="btn sm" onclick="answerTF(true)">✔ Verdadero</button>
      <button class="btn ghost sm" onclick="answerTF(false)">✘ Falso</button>
    </div>
    <div class="gfeedback" id="tfFb"></div>`;
}
function answerTF(resp){
  const st = miniState.tf, q = st.items[st.i];
  if(st.locked) return; st.locked = true;
  const bien = resp === q.verdadero;
  if(bien) st.ok++;
  const fb = document.getElementById("tfFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = (bien?"✅ ":"❌ ") + q.why;
  $all("#gameTF .btn").forEach(b=>b.disabled=true);
  setTimeout(()=>{ st.i++; st.locked=false; drawTF(); }, bien?1100:2200);
}
function restartTF(){ miniState.tf = { items:buildTFItems(currentModule), i:0, ok:0 }; drawTF(); }

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
function drawIntruso(){
  const st = miniState.intruso, box = document.getElementById("gameIN");
  if(!box) return;
  if(!st.items.length){ box.innerHTML = `<h4>🕵️ El intruso</h4><p class="gamesub">Esta ficha no tiene suficientes elementos para armar rondas.</p>`; return; }
  if(st.i >= st.items.length){
    box.innerHTML = `<h4>🕵️ El intruso<span class="gamescore">ronda terminada</span></h4>
      <p class="gamesub">Acertaste <b>${st.ok}</b> de ${st.items.length}.</p>
      <button class="btn sm" onclick="restartIntruso()">↺ Jugar otra ronda</button>`;
    return;
  }
  const q = st.items[st.i];
  box.innerHTML = `
    <h4>🕵️ El intruso<span class="gamescore">${st.i+1}/${st.items.length} · ✅ ${st.ok}</span></h4>
    <p class="gamesub">Tres de estos ${q.etiqueta} están en la ficha de ${currentModule.nombre}. Encontrá el que viene de otra ficha (ojo: suele ser de un autor cercano).</p>
    <div class="intrusogrid" id="inOpts">
      ${q.opciones.map((o,ix)=>`<button class="intrusobtn" data-ix="${ix}" onclick="answerIntruso(${ix},this)">${escapeHtml(o.txt)}</button>`).join("")}
    </div>
    <div class="gfeedback" id="inFb"></div>`;
}
function answerIntruso(ix, btn){
  const st = miniState.intruso, q = st.items[st.i];
  if(st.locked) return; st.locked = true;
  const bien = q.opciones[ix].malo;
  if(bien) st.ok++;
  $all("#inOpts .intrusobtn").forEach(b=>{
    b.disabled = true;
    const o = q.opciones[Number(b.dataset.ix)];
    if(o.malo) b.classList.add("correct");
    else if(b===btn) b.classList.add("wrong");
  });
  const fb = document.getElementById("inFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = (bien?"✅ ¡Bien! ":"❌ ") + q.why;
  setTimeout(()=>{ st.i++; st.locked=false; drawIntruso(); }, bien?1300:2300);
}
function restartIntruso(){ miniState.intruso = { items:buildIntrusoItems(currentModule), i:0, ok:0 }; drawIntruso(); }

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
          <header><span class="emo" aria-hidden="true">${m.icon}</span><div><h4>${m.nombre}</h4><span class="lvltag mono">${LEVELS[m.trad].label} · ${m.escuela}</span></div></header>
          <p>${e.postura}</p>
          <button class="btn ghost sm" onclick="openModule('${m.id}')">Abrir la ficha →</button>
        </article>`; }).join("")}
    </div>
    ${q?`<div class="qcard" style="margin-top:20px;">
      <div class="sechead" style="margin-top:0;">Pregunta de comparación</div>
      <div class="prompt" style="font-size:1.05rem;margin-bottom:14px;">${q.enunciado}</div>
      <div class="optrow constopts" id="constOpts">${q.opciones.map((o,i)=>`<button class="optbtn" data-ix="${i}" onclick="responderConstelacion(${i},this)">${o}</button>`).join("")}</div>
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
  renderExamHistory();
}
function renderExamHistory(){
  const hist = progress.examHistory || [];
  if(!hist.length){ $("#examHistory").innerHTML = `<span class="muted">Todavía no diste ningún examen.</span>`; return; }
  $("#examHistory").innerHTML = hist.slice().reverse().slice(0,8).map(h=>`
    <div class="reviewrow"><span class="tag">${h.score>=70?'✅':'🔻'}</span>
    <span>${LEVELS[h.trad].label} — <b>${h.score}%</b> (${h.correct}/${h.total}) · ${h.date}</span></div>
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
    const clr = LEVELS[m.trad].clr;
    return `
      <div class="card tight" style="margin-bottom:12px;border-left:4px solid var(--${clr});">
        <div class="row"><b>${m.icon} ${m.nombre}</b><div class="spacer"></div><span class="muted mono">${LEVELS[m.trad].label}</span></div>
        <div class="row muted" style="font-size:.85rem;margin-top:6px;"><span>Conceptos: ${knownC}/${m.conceptos.length} (${pct}%)</span><div class="spacer"></div><span>Cuestionario: ${quiz!=null?quiz+'%':'—'}</span></div>
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
  `;
}

/* ============================= INIT ============================= */
function init(){
  loadProgress();   // síncrono: el progreso ya está en memoria antes del primer render
  bumpStreak();     // cuenta la visita de hoy y guarda
  renderStorageNotice();
  renderStreak();   // también cuando hoy ya se había contado y bumpStreak() no guarda
  renderTabs();
  renderLevelCards();
  renderStatCards();
  renderModFilterChips();
  renderModuleCards();
  renderExamLevelCards();
  renderConstelaciones();
  renderTips();
  renderProgressView();
  showView("inicio");
}
init();
