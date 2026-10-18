/* ============================= CORRIENTES =============================
   Sección «Corrientes» (datos/corrientes.js). Arriba, el río: cada corriente es una franja en su
   época (misma escala que el mapa de Constelaciones, mapaX) y las curvas unen cada una con las
   corrientes de las que nace (`de`). Debajo, las tarjetas y el juego «¿Qué corriente habla?».
   Dentro de cada corriente: resumen, ideas clave, autores con ficha (enlazados), otros autores,
   relaciones y el ejercicio «¿Cuál no es de esta corriente?». Nada de esto se guarda en el progreso. */
let corrActual = null;
let corrFiltro = "todas";
let corrJuego = null;     // {rondas:[{c, tesis, opciones}], i, aciertos, respondida}
let corrIntrusa = null;   // {id, items:[{t, de}], respondida}

const CORR_EPOCAS = [
  ["todas","Todas"],
  ["antigua","Antigüedad", c=>c.desde < 400],
  ["medieval","Edad Media", c=>c.desde >= 400 && c.desde < 1450],
  ["moderna","Modernidad", c=>c.desde >= 1450 && c.desde < 1800],
  ["contemporanea","Siglos XIX a XXI", c=>c.desde >= 1800]];
function corrientes(){ return typeof CORRIENTES !== "undefined" ? CORRIENTES : []; }
function corrienteById(id){ return corrientes().find(c=>c.id===id); }
function corrClr(c){ return LEVELS[c.trad] ? LEVELS[c.trad].clr : "me"; }
function corrVars(c){ const k = corrClr(c); return `--tclr:var(--${k});--tsoft:var(--${k}-soft);`; }
function corrientesDeFicha(id){ return corrientes().filter(c=>c.autores.some(a=>a.mod===id)); }
function corrLink(id){ const c = corrienteById(id); return c ? `<button class="corrchip" style="${corrVars(c)}" onclick="abrirCorriente('${c.id}')">${escapeHtml(c.nombre)}</button>` : ""; }
function irACorriente(id){ showView("corrientes"); abrirCorriente(id); }

/* --- El río: franjas por época, apiladas en filas sin pisarse --- */
const RIO_FILA = 34, RIO_TOPE = 34;
function rioFilas(){
  const lista = corrientes().slice().sort((a,b)=>a.desde-b.desde || a.nombre.localeCompare(b.nombre));
  const fin = [], pos = {};
  lista.forEach(c=>{
    const x0 = mapaX(c.desde), x1 = Math.max(mapaX(c.hasta==null ? 2026 : c.hasta), x0 + 14);
    // el nombre puede salir de la franja; si no cabe antes del borde, va la primera parte («Fenomenología»)
    const etiqueta = x0 + c.nombre.length*7.4 + 16 > MAPA_ANCHO - 8 ? c.nombre.split(" y ")[0] : c.nombre;
    const ocupa = Math.max(x1, x0 + etiqueta.length*7.4 + 16);
    let f = fin.findIndex(e=>x0 > e + 8);
    if(f < 0){ f = fin.length; fin.push(0); }
    fin[f] = ocupa;
    pos[c.id] = { c, x0, x1, etiqueta, y: RIO_TOPE + f*RIO_FILA };
  });
  return { pos, filas: fin.length };
}
function rioSVG(sel){
  const { pos, filas } = rioFilas();
  const alto = RIO_TOPE + filas*RIO_FILA + 34;
  const foco = sel ? corrienteById(sel) : null;
  const rel = foco ? new Set([foco.id, ...(foco.de||[]), ...(foco.vecinas||[]), ...(foco.rivales||[]),
    ...corrientes().filter(c=>(c.de||[]).includes(foco.id)).map(c=>c.id)]) : null;
  const curvas = [];
  corrientes().forEach(c=>(c.de||[]).forEach(p=>{
    const a = pos[p], b = pos[c.id]; if(!a || !b) return;
    const xa = Math.min(Math.max(b.x0, a.x0 + 6), a.x1), ya = a.y + 10, yb = b.y + 10;
    const on = foco && (foco.id===c.id || foco.id===p);
    curvas.push(`<path d="M${xa.toFixed(1)},${ya} C${xa.toFixed(1)},${((ya+yb)/2).toFixed(1)} ${b.x0.toFixed(1)},${((ya+yb)/2).toFixed(1)} ${b.x0.toFixed(1)},${yb}" class="rlinea${on?' on':''}${foco&&!on?' off':''}"/>`);
  }));
  const marcas = [[-600,"600 a.C."],[-300,"300 a.C."],[0,"0"],[500,"500"],[1000,"1000"],[1500,"1500"],[1800,"1800"],[1900,"1900"],[2000,"2000"]];
  let n = 0;
  return `<svg class="mapa rio" viewBox="0 0 ${MAPA_ANCHO} ${alto}" role="img" aria-label="Río de las corrientes filosóficas por época">
    ${marcas.map(([a,l])=>`<line x1="${mapaX(a)}" x2="${mapaX(a)}" y1="14" y2="${alto-30}" class="mtick"/><text x="${mapaX(a)}" y="${alto-10}" class="manio">${l}</text>`).join("")}
    ${curvas.join("")}
    ${Object.values(pos).sort((a,b)=>a.c.desde-b.c.desde).map(p=>{
      const c = p.c, k = corrClr(c), off = rel && !rel.has(c.id), es = foco && foco.id===c.id;
      return `<g class="rfranja${off?' off':''}${es?' sel':''}" style="--d:${(n++)*35}ms" tabindex="0" role="link" aria-label="${escapeHtml(c.nombre)}, ${escapeHtml(c.periodo)}" onclick="abrirCorriente('${c.id}')" onkeydown="if(event.key==='Enter')abrirCorriente('${c.id}')">
        <rect x="${p.x0.toFixed(1)}" y="${p.y}" width="${(p.x1-p.x0).toFixed(1)}" height="20" rx="10" style="fill:var(--${k}-soft);stroke:var(--${k})"/>
        ${c.hasta==null?`<circle cx="${(p.x1-7).toFixed(1)}" cy="${p.y+10}" r="3.5" class="rviva" style="fill:var(--${k})"/>`:""}
        <text x="${(p.x0+10).toFixed(1)}" y="${p.y+14.5}" class="rnombre" style="fill:var(--${k})">${escapeHtml(p.etiqueta)}</text></g>`;
    }).join("")}
  </svg>`;
}
/* En el celular el río se desplaza de costado: se centra en la corriente elegida. */
function centrarRio(box, id){
  const svg = box && box.querySelector("svg"); if(!svg) return;
  const g = id ? svg.querySelector(".rfranja.sel rect") : null;
  const x = g ? Number(g.getAttribute("x")) + Number(g.getAttribute("width"))/2 : MAPA_ANCHO*0.75;
  box.scrollLeft = x/MAPA_ANCHO*svg.getBoundingClientRect().width - box.clientWidth/2;
}

/* --- Lista --- */
function renderCorrientes(){
  const box = document.getElementById("corrBody");
  if(!box) return;
  if(corrActual) return renderCorriente();
  const ep = CORR_EPOCAS.find(e=>e[0]===corrFiltro) || CORR_EPOCAS[0];
  const lista = corrientes().filter(c=>!ep[2] || ep[2](c));
  box.innerHTML = `
    <section class="mapawrap">
      <div class="sechead" style="margin-top:0;">El río · ${corrientes().length} corrientes en el tiempo</div>
      <p class="muted mapanota">Cada franja es una corriente en su época; las curvas la unen con las corrientes de las que nace. El punto al final marca las que siguen vivas. Tocá una para abrirla.</p>
      <div class="mapascroll" id="rioBox">${rioSVG(null)}</div>
      <p class="muted mapanota mapadesliza">Deslizá el río de costado para recorrer las épocas.</p>
    </section>
    <div class="corrjuegocab">
      <div><div class="kicker">Juego</div><b>¿Qué corriente habla?</b><span class="muted"> Ocho ideas, cuatro corrientes posibles para cada una.</span></div>
      <button class="btn" onclick="empezarJuegoCorrientes()">Jugar</button>
    </div>
    <div id="corrJuego"></div>
    <div class="chiprow corrfiltro" role="group" aria-label="Filtrar por época">${CORR_EPOCAS.map(([id,l])=>`<button class="chip${id===corrFiltro?' active':''}" aria-pressed="${id===corrFiltro}" onclick="corrFiltro='${id}'; renderCorrientes();">${l}</button>`).join("")}</div>
    <div class="grid modules corrgrid">${lista.map(c=>{
      const mods = c.autores.map(a=>moduleById(a.mod)).filter(Boolean);
      return `<button class="card corrcard" style="${corrVars(c)}" onclick="abrirCorriente('${c.id}')">
        <span class="kicker">${escapeHtml(c.periodo)}</span>
        <h3>${escapeHtml(c.nombre)}</h3>
        <span class="corrlema">«${escapeHtml(c.lema)}»</span>
        <span class="corrmonos">${mods.map(m=>monograma(m)).join("")}${c.otros&&c.otros.length?`<span class="muted corrmas">+${c.otros.length}</span>`:""}</span>
      </button>`; }).join("")}</div>`;
  centrarRio(document.getElementById("rioBox"), null);
}
function abrirCorriente(id){
  corrActual = id; corrIntrusa = null;
  if(!document.getElementById("view-corrientes").classList.contains("active")) showView("corrientes");
  renderCorrientes();
  window.scrollTo({top:0, behavior:"instant"});
  enfocar("#corrFocus");
}

/* --- Una corriente --- */
function renderCorriente(){
  const box = document.getElementById("corrBody");
  const c = corrienteById(corrActual);
  if(!c){ corrActual = null; return renderCorrientes(); }
  const hijas = corrientes().filter(x=>(x.de||[]).includes(c.id)).map(x=>x.id);
  const rel = (titulo, ids)=> (ids = (ids||[]).filter(corrienteById)).length ? `<div class="corrrel"><span class="kicker">${titulo}</span><div>${ids.map(corrLink).join("")}</div></div>` : "";
  const autores = c.autores.map(a=>({a, m:moduleById(a.mod)})).filter(x=>x.m);
  box.innerHTML = `
    <button class="backlink" onclick="corrActual=null; renderCorrientes();">← Todas las corrientes</button>
    <header class="corrhero pat-${corrClr(c)}" style="${corrVars(c)}">
      <div class="kicker">${escapeHtml(c.periodo)}${LEVELS[c.trad]?' · tradición '+LEVELS[c.trad].label.toLowerCase():' · varias tradiciones'}</div>
      <h3 id="corrFocus" tabindex="-1">${escapeHtml(c.nombre)}</h3>
      <p class="corrlema grande">«${escapeHtml(c.lema)}»</p>
      <p class="corrpreg"><span class="kicker">La pregunta que la mueve</span>${escapeHtml(c.pregunta)}</p>
    </header>
    <div class="mapascroll mini" id="rioMini">${rioSVG(c.id)}</div>
    <div class="panocols corrcols" style="${corrVars(c)}">
      <div>
        <div class="corrresumen capital">${parrafos(c.resumen)}</div>
        <div class="sechead">Ideas clave</div>
        <ol class="corrtesis">${c.tesis.map((t,i)=>`<li style="--d:${i*70}ms">${escapeHtml(t)}</li>`).join("")}</ol>
      </div>
      <aside class="margen">
        <div class="kicker">Conceptos</div>
        <div class="corrconceptos">${(c.conceptos||[]).map(t=>`<span class="constpill" style="${corrVars(c)}">${escapeHtml(t)}</span>`).join("")}</div>
        ${rel("Nace de", c.de)}${rel("Da origen a", hijas)}${rel("Vecinas", c.vecinas)}${rel("Rivales", c.rivales)}
      </aside>
    </div>
    <div class="sechead">Autores con ficha y su relación con la corriente</div>
    <p class="muted corrnota">Algunos son precursores o críticos: los nombres de las corrientes suelen ser posteriores, puestos por la historiografía, y no siempre los usaron sus propios autores.</p>
    <div class="constgrid">${autores.map(({a,m})=>`
      <article class="constpost" style="${varsTrad(m)}">
        <header>${monograma(m)}<div><h4>${m.nombre}</h4><span class="lvltag mono">${LEVELS[m.trad].label} · ${m.fechas.split("·")[0].trim()}</span></div></header>
        <p>${escapeHtml(a.rol)}</p>
        <button class="btn ghost sm" onclick="openModule('${m.id}')">Abrir la ficha →</button>
      </article>`).join("")}</div>
    ${c.otros && c.otros.length ? `<div class="corrotros"><span class="kicker">Otros nombres de la corriente</span><div>${c.otros.map(n=>`<span class="corrotro">${escapeHtml(n)}</span>`).join("")}</div></div>` : ""}
    <div class="corrnotas" style="${corrVars(c)}">
      <div class="paraconf"><div class="kicker">Para no confundir</div><div>${escapeHtml(c.noConfundir)}</div></div>
      <div class="paraconf"><div class="kicker">Hoy</div><div>${escapeHtml(c.hoy)}</div></div>
    </div>
    <section class="qcard" style="margin-top:22px;" id="corrIntrusa"></section>`;
  centrarRio(document.getElementById("rioMini"), c.id);
  nuevaIntrusa();
}

/* --- Ejercicio: tres ideas de la corriente y una intrusa de otra que no sea vecina --- */
function noVecinas(c){
  const cerca = new Set([c.id, ...(c.vecinas||[])]);
  return corrientes().filter(x=>!cerca.has(x.id) && !(x.vecinas||[]).includes(c.id));
}
function nuevaIntrusa(){
  const c = corrienteById(corrActual);
  const otras = noVecinas(c);
  if(!c || c.tesis.length < 3 || !otras.length) return;
  const rival = (c.rivales||[]).map(corrienteById).filter(x=>x && otras.includes(x));
  const de = shuffle(rival.length ? rival : otras)[0];
  const items = shuffle([...shuffle(c.tesis).slice(0,3).map(t=>({t, de:c.id})), {t:shuffle(de.tesis)[0], de:de.id}]);
  corrIntrusa = { id:c.id, items, respondida:false };
  drawIntrusa();
}
function drawIntrusa(){
  const box = document.getElementById("corrIntrusa");
  const st = corrIntrusa, c = st && corrienteById(st.id);
  if(!box || !c) return;
  box.innerHTML = `
    <div class="sechead" style="margin-top:0;">¿Cuál no es de esta corriente?</div>
    <p class="muted">Tres de estas ideas son de ${escapeHtml(c.nombre.toLowerCase())}. Una se coló de otra corriente: encontrala.</p>
    <div class="optrow corropts">${st.items.map((it,i)=>`<button class="optbtn" data-ix="${i}" onclick="responderIntrusa(${i})">${escapeHtml(it.t)}</button>`).join("")}</div>
    <div class="gfeedback" id="corrIntrusaFb" role="status" aria-live="polite"></div>`;
}
function responderIntrusa(i){
  const st = corrIntrusa; if(!st || st.respondida) return;
  st.respondida = true;
  const bien = st.items[i].de !== st.id;
  const intrusa = st.items.find(it=>it.de !== st.id), origen = corrienteById(intrusa.de);
  document.querySelectorAll("#corrIntrusa .optbtn").forEach((b,k)=>{
    b.disabled = true;
    if(st.items[k].de !== st.id) b.classList.add("correct");
    else if(k===i) b.classList.add("wrong");
  });
  const fb = document.getElementById("corrIntrusaFb");
  fb.className = "gfeedback show " + (bien?"ok":"no");
  fb.innerHTML = `${bien?'✅ Bien.':'❌ No es esa.'} La intrusa viene de ${corrLink(origen.id)}: «${escapeHtml(intrusa.t)}»<br>
    <button class="btn ghost sm" style="margin-top:10px;" onclick="nuevaIntrusa()">Otra ronda</button>`;
}

/* --- Juego: ¿Qué corriente habla? --- */
function empezarJuegoCorrientes(){
  const todas = corrientes().filter(c=>c.tesis.length);
  const rondas = shuffle(todas).slice(0, 8).map(c=>{
    const malas = shuffle(noVecinas(c)).slice(0,3);
    return { c, tesis: shuffle(c.tesis)[0], opciones: shuffle([c, ...malas]) };
  });
  corrJuego = { rondas, i:0, aciertos:0, respondida:false };
  drawJuegoCorrientes();
  const box = document.getElementById("corrJuego"); if(box) box.scrollIntoView({block:"nearest"});
}
function drawJuegoCorrientes(){
  const box = document.getElementById("corrJuego");
  const st = corrJuego; if(!box || !st) return;
  if(st.i >= st.rondas.length){
    box.innerHTML = `<div class="qcard corrjuego"><div class="sechead" style="margin-top:0;">Resultado</div>
      <p class="tesis">${st.aciertos} de ${st.rondas.length}.</p>
      <p class="muted">Repasá las que fallaste: ${st.rondas.filter(r=>!r.bien).map(r=>corrLink(r.c.id)).join(" ") || "ninguna"}</p>
      <button class="btn" onclick="empezarJuegoCorrientes()">Jugar otra vez</button> <button class="btn ghost" onclick="corrJuego=null; drawJuegoCorrientes();">Cerrar</button></div>`;
    return;
  }
  if(st.i < 0){ box.innerHTML = ""; return; }
  const r = st.rondas[st.i];
  box.innerHTML = `<div class="qcard corrjuego">
    <div class="sechead" style="margin-top:0;">Idea ${st.i+1} de ${st.rondas.length} · ${st.aciertos} aciertos</div>
    <p class="prompt corrcita">«${escapeHtml(r.tesis)}»</p>
    <div class="optrow constopts">${r.opciones.map((o,k)=>`<button class="optbtn" data-ix="${k}" onclick="responderJuegoCorrientes(${k})">${escapeHtml(o.nombre)}</button>`).join("")}</div>
    <div class="gfeedback" id="corrJuegoFb" role="status" aria-live="polite"></div></div>`;
}
function responderJuegoCorrientes(k){
  const st = corrJuego; if(!st || st.respondida) return;
  const r = st.rondas[st.i];
  r.bien = r.opciones[k].id === r.c.id;
  if(r.bien) st.aciertos++;
  st.respondida = true;
  document.querySelectorAll("#corrJuego .optbtn").forEach((b,j)=>{
    b.disabled = true;
    if(r.opciones[j].id===r.c.id) b.classList.add("correct"); else if(j===k) b.classList.add("wrong");
  });
  const fb = document.getElementById("corrJuegoFb");
  fb.className = "gfeedback show " + (r.bien?"ok":"no");
  fb.innerHTML = `${r.bien?'✅ Correcto.':'❌ No es esa.'} Es ${corrLink(r.c.id)}: «${escapeHtml(r.c.lema)}»<br>
    <button class="btn sm" style="margin-top:10px;" onclick="corrJuego.i++; corrJuego.respondida=false; drawJuegoCorrientes();">${st.i+1<st.rondas.length?'Siguiente':'Ver resultado'}</button>`;
}
