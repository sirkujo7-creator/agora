/* ============================= MAPAS =============================
   Sección «Mapas» (datos/mapas.js sobre el mapa base de datos/mapa-base.js). Una línea de tiempo
   (deslizador de -650 a 2000) mueve todo el mapa: los poderes de esa época con fronteras aproximadas,
   los filósofos vivos ese año (los anteriores quedan como puntos tenues), sus viajes y las guerras o
   hechos que marcaron el pensamiento. Tocar un punto abre su ficha resumida; tocar un hecho, qué pasó
   y a quién afectó. Nada de esto se guarda en el progreso. */
const MAPA_MIN = -650, MAPA_MAX = 2000, MAPA_KX = 0.88;
let mapaAnio = -550, mapaRegion = "medit", mapaElegido = null, mapaPlay = null;

/* Regiones: cajas en grados [lon0, lat0, lon1, lat1] (oeste, norte, este, sur). */
const MAPA_REGIONES = [
  ["mundo","Mundo",[-125,72,150,-45]],
  ["medit","Mediterráneo",[-11,50,52,24]],
  ["europa","Europa",[-12,62,42,34]],
  ["asia","Asia",[55,50,145,0]],
  ["america","Américas",[-125,50,-30,-45]],
  ["africa","África",[-20,38,55,-36]]];

function mapaDatos(){
  return {
    lugares: typeof MAPA_LUGARES !== "undefined" ? MAPA_LUGARES : {},
    viajes: typeof MAPA_VIAJES !== "undefined" ? MAPA_VIAJES : [],
    eventos: typeof MAPA_EVENTOS !== "undefined" ? MAPA_EVENTOS : [],
    epocas: typeof MAPA_EPOCAS !== "undefined" ? MAPA_EPOCAS : []};
}
function mapaP(lon, lat){ return [lon*MAPA_KX, -lat]; }
function mapaPts(arr){ return arr.map(([lon,lat])=>mapaP(lon,lat).map(n=>n.toFixed(2)).join(",")).join(" "); }
function mapaAnioTxt(a){ return a < 0 ? `${-a} a.C.` : `${a}`; }
function mapaEpoca(a){ const E = mapaDatos().epocas; return E.find(e=>a >= e.desde && a < e.hasta) || E[E.length-1]; }
function mapaVivos(a){
  const L = mapaDatos().lugares;
  return MODULES.filter(m=>L[m.id] && L[m.id].nace <= a && a <= L[m.id].muere);
}
function mapaPasados(a){
  const L = mapaDatos().lugares;
  return MODULES.filter(m=>L[m.id] && L[m.id].muere < a);
}
/* Eventos visibles: los de la época actual. */
function mapaEventos(a){
  const e = mapaEpoca(a); if(!e) return [];
  return mapaDatos().eventos.filter(v=>v.anio >= e.desde && v.anio < e.hasta).sort((x,y)=>x.anio-y.anio);
}
function mapaCaja(){
  const r = (MAPA_REGIONES.find(r=>r[0]===mapaRegion) || MAPA_REGIONES[0])[2];
  const [x0,y0] = mapaP(r[0], r[1]), [x1,y1] = mapaP(r[2], r[3]);
  return {x:x0, y:y0, w:x1-x0, h:y1-y0};
}
function mapaColor(i){ return ["#B4532E","#3E5C9A","#2F8467","#B08A2E","#7A4E9C","#9C3D5A"][i % 6]; }

function renderMapas(){
  const body = $("#mapasBody"); if(!body) return;
  body.innerHTML = `
    <div class="mapacontroles">
      <div class="evalrow" role="group" aria-label="Región">${MAPA_REGIONES.map(([k,l])=>`<button class="chip ${k===mapaRegion?'active':''}" aria-pressed="${k===mapaRegion}" onclick="mapaIrRegion('${k}')">${l}</button>`).join("")}</div>
      <div class="mapatiempo">
        <button class="btn sm ghost" onclick="mapaPaso(-1)" aria-label="Época anterior">◀</button>
        <input type="range" id="mapaRango" min="${MAPA_MIN}" max="${MAPA_MAX}" step="5" value="${mapaAnio}" oninput="mapaMover(+this.value)" aria-label="Año">
        <button class="btn sm ghost" onclick="mapaPaso(1)" aria-label="Época siguiente">▶</button>
        <button class="btn sm" id="mapaPlayBtn" onclick="mapaReproducir()">${mapaPlay ? "❚❚ Pausa" : "▶ Recorrer"}</button>
      </div>
    </div>
    <div class="mapaanio"><span id="mapaAnioTxt"></span> · <b id="mapaEpocaTit"></b></div>
    <div class="mapamarco"><svg id="mapaSvg" class="mapasvg" role="img" aria-label="Mapa histórico"></svg></div>
    <p class="muted mapanota">Fronteras aproximadas: muestran dónde estaba el poder, no límites exactos. Los puntos tenues son filósofos que ya murieron ese año; las líneas punteadas, sus viajes.</p>
    <div id="mapaEpocaTxt" class="lecnote"></div>
    <div id="mapaSel"></div>
    <h3 class="mapah3">Guerras y hechos de esta época</h3>
    <div id="mapaEventos" class="mapaeventos"></div>`;
  dibujarMapa();
}
function mapaIrRegion(k){ mapaRegion = k; renderMapas(); }
function mapaMover(a){ mapaAnio = Math.max(MAPA_MIN, Math.min(MAPA_MAX, a)); dibujarMapa(); }
function mapaPaso(dir){
  const E = mapaDatos().epocas, e = mapaEpoca(mapaAnio), i = E.indexOf(e);
  const j = Math.max(0, Math.min(E.length-1, i + dir));
  mapaAnio = j === i && dir < 0 ? E[0].desde : E[j].desde;
  const r = $("#mapaRango"); if(r) r.value = mapaAnio;
  dibujarMapa();
}
function mapaReproducir(){
  if(mapaPlay){ clearInterval(mapaPlay); mapaPlay = null; }
  else {
    if(mapaAnio >= MAPA_MAX) mapaAnio = MAPA_MIN;
    mapaPlay = setInterval(()=>{
      if(!document.getElementById("mapaSvg") || mapaAnio >= MAPA_MAX){ clearInterval(mapaPlay); mapaPlay = null; const b = $("#mapaPlayBtn"); if(b) b.textContent = "▶ Recorrer"; return; }
      mapaMover(mapaAnio + 10); const r = $("#mapaRango"); if(r) r.value = mapaAnio;
    }, 120);
  }
  const b = $("#mapaPlayBtn"); if(b) b.textContent = mapaPlay ? "❚❚ Pausa" : "▶ Recorrer";
}

function dibujarMapa(){
  const svg = $("#mapaSvg"); if(!svg) return;
  const D = mapaDatos(), c = mapaCaja(), k = c.w / 900;   // k: unidades del mapa por píxel nominal
  const e = mapaEpoca(mapaAnio), vivos = mapaVivos(mapaAnio), pasados = mapaPasados(mapaAnio), evs = mapaEventos(mapaAnio);
  svg.setAttribute("viewBox", `${c.x} ${c.y} ${c.w} ${c.h}`);
  const fs = (px)=>(px*k).toFixed(2);
  const poderes = (e ? e.poderes : []).map((p,i)=>{
    const pts = p.poly.map(([lon,lat])=>mapaP(lon,lat));
    const cx = pts.reduce((s,q)=>s+q[0],0)/pts.length, cy = pts.reduce((s,q)=>s+q[1],0)/pts.length;
    return `<g class="mpoder"><polygon points="${mapaPts(p.poly)}" style="fill:${mapaColor(i)};stroke:${mapaColor(i)}" stroke-width="${fs(1.2)}"/>
      <text x="${cx.toFixed(2)}" y="${cy.toFixed(2)}" font-size="${fs(12)}" class="mpodernom" style="fill:${mapaColor(i)}">${escapeHtml(p.nombre)}</text></g>`;
  }).join("");
  const vivosIds = new Set(vivos.map(m=>m.id));
  const viajes = D.viajes.filter(v=>vivosIds.has(v.mod)).map((v,i)=>
    `<polyline class="mviaje" points="${mapaPts(v.ruta)}" stroke-width="${fs(1.6)}" stroke-dasharray="${fs(5)} ${fs(4)}" marker-end="url(#mflecha)" onclick="mapaVerViaje(${D.viajes.indexOf(v)})"><title>${escapeHtml(v.titulo)}</title></polyline>`).join("");
  const punto = (m, vivo)=>{
    const L = D.lugares[m.id], [x,y] = mapaP(L.lon, L.lat), clr = LEVELS[m.trad] ? LEVELS[m.trad].clr : "me";
    const nom = m.nombre.replace(/\s*\(.*\)/,"").split(" y ")[0];
    return `<g class="mfilo ${vivo?'':'tenue'} ${mapaElegido && mapaElegido.mod===m.id?'sel':''}" tabindex="0" role="button" aria-label="${escapeHtml(m.nombre)}" onclick="mapaVerFilo('${m.id}')" onkeydown="if(event.key==='Enter')mapaVerFilo('${m.id}')">
      <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${fs(vivo?5:3)}" style="fill:var(--${clr})"/>
      ${vivo ? `<text x="${(x+6*k).toFixed(2)}" y="${(y+4*k).toFixed(2)}" font-size="${fs(12)}">${escapeHtml(nom)}</text>` : ""}</g>`;
  };
  const eventos = evs.map(v=>{ const [x,y] = mapaP(v.lon, v.lat);
    return `<g class="mevento ${v.tipo==='guerra'?'guerra':''}" tabindex="0" role="button" aria-label="${escapeHtml(v.titulo)}" onclick="mapaVerEvento(${D.eventos.indexOf(v)})" onkeydown="if(event.key==='Enter')mapaVerEvento(${D.eventos.indexOf(v)})">
      <rect x="${(x-4*k).toFixed(2)}" y="${(y-4*k).toFixed(2)}" width="${fs(8)}" height="${fs(8)}" transform="rotate(45 ${x.toFixed(2)} ${y.toFixed(2)})"/><title>${escapeHtml(v.titulo)}</title></g>`; }).join("");
  svg.innerHTML = `<defs><marker id="mflecha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mflechap"/></marker></defs>
    <rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" class="mmar"/>
    <path d="${MAPA_TIERRA}" class="mtierra" stroke-width="${fs(0.6)}"/>
    ${poderes}${viajes}${pasados.map(m=>punto(m,false)).join("")}${eventos}${vivos.map(m=>punto(m,true)).join("")}`;
  $("#mapaAnioTxt").textContent = mapaAnioTxt(mapaAnio);
  $("#mapaEpocaTit").textContent = e ? e.titulo : "";
  $("#mapaEpocaTxt").innerHTML = e ? `<b>${mapaAnioTxt(e.desde)} – ${mapaAnioTxt(e.hasta)}.</b> ${escapeHtml(e.texto)}` : "";
  $("#mapaEventos").innerHTML = evs.length ? evs.map(v=>`<button class="mapaev ${v.tipo==='guerra'?'guerra':''}" onclick="mapaVerEvento(${D.eventos.indexOf(v)})"><span class="mapaevanio">${mapaAnioTxt(v.anio)}</span> ${escapeHtml(v.titulo)}</button>`).join("") : `<p class="muted">No hay hechos cargados para esta época.</p>`;
}

function mapaFichaLink(id){
  const m = moduleById(id); if(!m) return "";
  return `<button class="corrchip" onclick="openModule('${id}')">${escapeHtml(m.nombre)}</button>`;
}
function mapaVerFilo(id){
  const D = mapaDatos(), m = moduleById(id), L = D.lugares[id]; if(!m || !L) return;
  mapaElegido = {mod:id};
  const viajes = D.viajes.filter(v=>v.mod===id);
  $("#mapaSel").innerHTML = `<article class="activity mapacard">
    <h4>${escapeHtml(m.nombre)}</h4>
    <p class="muted">${escapeHtml(m.fechas)} · pensó sobre todo en ${escapeHtml(L.lugar)}</p>
    ${(L.otros||[]).length ? `<ul class="mapaotros">${L.otros.map(o=>`<li><b>${escapeHtml(o.lugar)}</b>: ${escapeHtml(o.nota)}</li>`).join("")}</ul>` : ""}
    ${viajes.map(v=>`<p><b>${escapeHtml(v.titulo)}</b> (${mapaAnioTxt(v.anio)}${v.seguro?"":", según la tradición"}). ${escapeHtml(v.texto)}</p>`).join("")}
    <div class="row">${mapaFichaLink(id)}</div></article>`;
  dibujarMapa();
}
function mapaVerViaje(i){ const v = mapaDatos().viajes[i]; if(v) mapaVerFilo(v.mod); }
function mapaVerEvento(i){
  const v = mapaDatos().eventos[i]; if(!v) return;
  mapaElegido = null;
  $("#mapaSel").innerHTML = `<article class="activity mapacard ${v.tipo==='guerra'?'guerra':''}">
    <h4>${escapeHtml(v.titulo)} <span class="muted">· ${mapaAnioTxt(v.anio)}</span></h4>
    <p>${escapeHtml(v.texto)}</p>
    ${(v.fichas||[]).length ? `<div class="row">${v.fichas.map(mapaFichaLink).join("")}</div>` : ""}</article>`;
  dibujarMapa();
  $("#mapaSel").scrollIntoView({behavior:"smooth", block:"nearest"});
}
