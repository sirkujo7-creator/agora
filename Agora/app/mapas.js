/* ============================= MAPAS =============================
   Sección «Mapas» (datos/mapas.js sobre el mapa base de datos/mapa-base.js). Una línea de tiempo
   (deslizador de -650 a 2000, con marcas de épocas y hechos) mueve todo el mapa: los territorios de esa
   época, los filósofos vivos ese año, sus viajes y las guerras o hechos que marcaron el pensamiento.
   Dos capas: el SVG dibuja la geometría (tierra, territorios, viajes) con trazos que no engordan al
   acercar, y encima una capa HTML pone puntos y nombres a tamaño fijo en pantalla (en el iPhone el
   texto SVG escalado se veía cortado). Se acerca y se mueve como un mapa de teléfono. Debajo, cuatro
   desplegables explican lo que se ve: territorios, filósofos, guerras y hechos, viajes.
   Nada de esto se guarda en el progreso. */
/* Nombres en el mapa de las fichas de varios autores (el resto, el nombre de la ficha). */
const MAPA_CORTOS = {tales:"Tales y los milesios", estoicos:"Estoicos", hobbeslocke:"Hobbes y Locke", pascalmontaigne:"Montaigne y Pascal",
  mencioxunzi:"Mencio y Xunzi", marx:"Marx y Engels", frankfurt:"Escuela de Frankfurt"};
const MAPA_MIN = -650, MAPA_MAX = 2000, MAPA_KX = 0.88;
let mapaAnio = -550, mapaRegion = "medit", mapaPlay = null;
/* Vista acercada o desplazada por la persona (null = la caja de la región); mapaUltima = la que se ve. */
let mapaVista = null, mapaUltima = null, mapaCuadro = null;
/* Capas que se prenden y se apagan; los filósofos ya muertos, apagados al empezar para no llenar el mapa. */
let mapaCapas = {poderes:true, filos:true, muertos:false, viajes:true, hechos:true, centros:true, rutas:false};
/* «Seguir a un filósofo»: id de la ficha cuyo recorrido de vida se dibuja (MAPA_RECORRIDOS). */
let mapaSeguir = null;
const MAPA_CAPAS = [["poderes","Territorios"],["filos","Filósofos vivos"],["muertos","Ya fallecidos"],["viajes","Viajes"],["hechos","Guerras y hechos"],["centros","Centros del saber"],["rutas","Rutas de las ideas"]];

/* Regiones: cajas en grados [lon0, lat0, lon1, lat1] (oeste, norte, este, sur). La caja entera
   siempre entra en el marco (en el celular el marco es más alto que ancho); desde ahí se acerca. */
const MAPA_REGIONES = [
  ["mundo","Mundo",[-170,78,180,-56]],
  ["medit","Mediterráneo",[-10,47,45,24]],
  ["europa","Europa",[-25,71,60,34]],
  ["oriente","Oriente Medio",[20,45,75,10]],
  ["asia","Asia",[60,55,148,-10]],
  ["america","Américas",[-170,72,-30,-56]],
  ["africa","África",[-20,38,55,-36]]];

function mapaDatos(){
  return {
    lugares: typeof MAPA_LUGARES !== "undefined" ? MAPA_LUGARES : {},
    viajes: typeof MAPA_VIAJES !== "undefined" ? MAPA_VIAJES : [],
    eventos: typeof MAPA_EVENTOS !== "undefined" ? MAPA_EVENTOS : [],
    epocas: typeof MAPA_EPOCAS !== "undefined" ? MAPA_EPOCAS : [],
    bios: typeof MAPA_BIOS !== "undefined" ? MAPA_BIOS : {},
    centros: typeof MAPA_CENTROS !== "undefined" ? MAPA_CENTROS : [],
    rutas: typeof MAPA_RUTAS !== "undefined" ? MAPA_RUTAS : [],
    recorridos: typeof MAPA_RECORRIDOS !== "undefined" ? MAPA_RECORRIDOS : {}};
}
function mapaP(lon, lat){ return [lon*MAPA_KX, -lat]; }
function mapaPts(arr){ return arr.map(([lon,lat])=>mapaP(lon,lat).map(n=>n.toFixed(2)).join(",")).join(" "); }
function mapaAnioTxt(a){ return a < 0 ? `${-a} a.C.` : `${a}`; }
function mapaEpoca(a){ const E = mapaDatos().epocas; return E.find(e=>a >= e.desde && a < e.hasta) || E[E.length-1]; }
function mapaVivos(a){
  const L = mapaDatos().lugares;
  return MODULES.filter(m=>L[m.id] && L[m.id].nace <= a && (L[m.id].muere == null || a <= L[m.id].muere));
}
function mapaPasados(a){
  const L = mapaDatos().lugares;
  return MODULES.filter(m=>L[m.id] && L[m.id].muere != null && L[m.id].muere < a);
}
/* Eventos visibles: los de la época actual. */
function mapaEventos(a){
  const e = mapaEpoca(a); if(!e) return [];
  return mapaDatos().eventos.filter(v=>v.anio >= e.desde && v.anio < e.hasta).sort((x,y)=>x.anio-y.anio);
}
/* Viajes visibles: los de filósofos vivos, cerca del año en que los hicieron. */
function mapaViajesVisibles(a){
  const vivos = new Set(mapaVivos(a).map(m=>m.id));
  return mapaDatos().viajes.filter(v=>vivos.has(v.mod) && a >= v.anio - 5 && a <= v.anio + 20);
}
/* Centros del saber activos ese año; rutas en curso (se dibujan hasta la etapa que ya ocurrió). */
function mapaCentros(a){ return mapaDatos().centros.filter(c=>c.desde <= a && (c.hasta == null || a <= c.hasta)); }
function mapaRutas(a){ return mapaDatos().rutas.filter(r=>r.desde <= a && a <= r.hasta + 60); }
function mapaEtapasHasta(r, a){ return r.etapas.filter(t=>t.anio <= a); }
function mapaRatio(){ const s = $("#mapaSvg"); return s && s.clientWidth && s.clientHeight ? s.clientWidth / s.clientHeight : 16/9; }
function mapaCaja(ratio){
  const r = (MAPA_REGIONES.find(r=>r[0]===mapaRegion) || MAPA_REGIONES[0])[2];
  const [x0,y0] = mapaP(r[0], r[1]), [x1,y1] = mapaP(r[2], r[3]);
  let w = x1-x0, h = y1-y0, x = x0, y = y0;
  if(w/h > ratio){ const nh = w/ratio; y -= (nh-h)/2; h = nh; } else { const nw = h*ratio; x -= (nw-w)/2; w = nw; }
  return {x, y, w, h};
}
/* --- Fronteras históricas (datos/fronteras/<año>.js, historical-basemaps, GPL-3.0): la división política
   completa de cada época. Se cargan cuando hacen falta; mientras tanto se ven los poderes de MAPA_EPOCAS. --- */
const MAPA_FRONT_ANIOS = [-700,-500,-400,-323,-300,-200,-100,-1,100,200,300,400,500,600,700,800,900,1000,1100,1200,1279,1300,1400,1492,1500,1530,1600,1650,1700,1715,1783,1800,1815,1880,1900,1914,1920,1938,1945,1960,1994,2000];
const MAPA_FRONTERAS = {}, mapaFrontPedidas = {};
function mapaFronterasCargadas(a, lista){ MAPA_FRONTERAS[a] = lista; if($("#mapaSvg") && mapaFrontAnio(mapaAnio) === a) dibujarMapa(); }
function mapaFrontAnio(a){ let r = MAPA_FRONT_ANIOS[0]; for(const x of MAPA_FRONT_ANIOS) if(x <= a) r = x; return r; }
function mapaCargarFronteras(a){
  if(MAPA_FRONTERAS[a] || mapaFrontPedidas[a]) return;
  mapaFrontPedidas[a] = true;
  const sc = document.createElement("script"); sc.src = `datos/fronteras/${a}.js`;
  sc.onerror = ()=>{ mapaFrontPedidas[a] = false; };
  document.head.appendChild(sc);
}
function mapaNomEs(n){ const t = typeof MAPA_NOMBRES_ES !== "undefined" && MAPA_NOMBRES_ES[n]; return t ? t[0] : n; }
function mapaEsPueblo(n){ const t = typeof MAPA_NOMBRES_ES !== "undefined" && MAPA_NOMBRES_ES[n]; return t ? t[1] === "p" : false; }
/* Color estable por nombre: el mismo Estado conserva su color a lo largo de las épocas. */
const MAPA_PALETA = ["#B4532E","#3E5C9A","#2F8467","#B08A2E","#7A4E9C","#9C3D5A","#4E8A9C","#8A6A3E","#5E7A2E","#A0567A"];
function mapaColorDe(n){ let h = 0; for(const ch of n) h = (h*31 + ch.charCodeAt(0)) >>> 0; return MAPA_PALETA[h % MAPA_PALETA.length]; }
function mapaColor(i){ return ["#B4532E","#3E5C9A","#2F8467","#B08A2E","#7A4E9C","#9C3D5A"][i % 6]; }
function mapaCorto(n){ return n.replace(/\s*\(.*?\)\s*/g," ").trim(); }
function mapaNombre(m){ return MAPA_CORTOS[m.id] || m.nombre.replace(/\s*\(.*\)/,""); }
function mapaClr(m){ return LEVELS[m.trad] ? LEVELS[m.trad].clr : "me"; }

function renderMapas(){
  const body = $("#mapasBody"); if(!body) return;
  const E = mapaDatos().epocas, ev = mapaDatos().eventos, pos = a=>((a - MAPA_MIN)/(MAPA_MAX - MAPA_MIN)*100).toFixed(2);
  body.innerHTML = `
    <div class="mapacontroles">
      <div class="evalrow" role="group" aria-label="Región">${MAPA_REGIONES.map(([k,l])=>`<button class="chip ${k===mapaRegion?'active':''}" aria-pressed="${k===mapaRegion}" onclick="mapaIrRegion('${k}')">${l}</button>`).join("")}</div>
      <div class="mapatiempo">
        <button class="btn sm ghost" onclick="mapaPaso(-1)" aria-label="Época anterior">◀</button>
        <div class="mapariel">
          <input type="range" id="mapaRango" min="${MAPA_MIN}" max="${MAPA_MAX}" step="5" value="${mapaAnio}" oninput="mapaMover(+this.value)" aria-label="Año">
          <div class="mapamarcas" aria-hidden="true">${E.map(e=>`<i class="mmepoca" style="left:${pos(e.desde)}%"></i>`).join("")}${ev.map(v=>`<i class="mmhecho ${v.tipo==='guerra'?'guerra':''}" style="left:${pos(v.anio)}%"></i>`).join("")}</div>
        </div>
        <button class="btn sm ghost" onclick="mapaPaso(1)" aria-label="Época siguiente">▶</button>
        <button class="btn sm" id="mapaPlayBtn" onclick="mapaReproducir()">${mapaPlay ? "❚❚ Pausa" : "▶ Recorrer"}</button>
      </div>
    </div>
    <div class="mapaseguir">
      <label>Seguir a un filósofo
        <select id="mapaSeguirSel" onchange="mapaSeguirA(this.value)"><option value="">— elegí uno —</option>${MODULES.filter(m=>mapaDatos().lugares[m.id]).slice().sort((a,b)=>mapaDatos().lugares[a.id].nace - mapaDatos().lugares[b.id].nace).map(m=>`<option value="${m.id}" ${m.id===mapaSeguir?'selected':''}>${escapeHtml(mapaNombre(m))}</option>`).join("")}</select>
      </label>
      ${mapaSeguir ? `<button class="btn sm ghost" onclick="mapaSeguirA('')">Dejar de seguir</button>` : ""}
    </div>
    <div id="mapaRecorrido"></div>
    <div class="evalrow mapacapas" role="group" aria-label="Qué mostrar">${MAPA_CAPAS.map(([k,l])=>`<button class="chip ${mapaCapas[k]?'active':''}" aria-pressed="${mapaCapas[k]}" onclick="mapaCapa('${k}')">${mapaCapas[k]?'✓ ':''}${l}</button>`).join("")}</div>
    <div class="mapaanio"><span id="mapaAnioTxt"></span> · <b id="mapaEpocaTit"></b> <span class="muted mapafrontnota" id="mapaFrontNota"></span></div>
    <div class="mapamarco" id="mapaMarco">
      <svg id="mapaSvg" class="mapasvg" preserveAspectRatio="none" aria-hidden="true"></svg>
      <div id="mapaCapaTxt" class="mapacapatxt" role="group" aria-label="Mapa histórico: pellizcá o usá + y − para acercar, arrastrá para moverte"></div>
      <div class="mapazoom"><button class="btn sm" onclick="mapaZoom(0.6)" aria-label="Acercar">+</button><button class="btn sm" onclick="mapaZoom(1/0.6)" aria-label="Alejar">−</button><button class="btn sm" onclick="mapaVista=null;mapaUbicar()" aria-label="Volver a la región" title="Volver a la región">⟲</button></div>
    </div>
    <p class="muted mapanota">Pellizcá o usá + y − para acercar; arrastrá para moverte. Tocá un punto o un rombo para ver su explicación abajo. Fronteras: <a href="https://github.com/aourednik/historical-basemaps" target="_blank" rel="noopener">historical-basemaps</a> (A. Ourednik y colaboradores, GPL-3.0).</p>
    <div id="mapaEpocaTxt" class="lecnote"></div>
    <div id="mapaPaneles" class="mapapaneles"></div>
    <details class="mapaconv"><summary>Convenciones del mapa</summary><div id="mapaConv"></div></details>`;
  mapaGestos($("#mapaMarco"));
  dibujarMapa();
}
function mapaIrRegion(k){ mapaRegion = k; mapaVista = null; renderMapas(); }
function mapaCapa(k){ mapaCapas[k] = !mapaCapas[k]; renderMapas(); }
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
    }, 160);
  }
  const b = $("#mapaPlayBtn"); if(b) b.textContent = mapaPlay ? "❚❚ Pausa" : "▶ Recorrer";
}

/* --- La geometría (SVG): cambia con la época y las capas, no con el zoom --- */
function dibujarMapa(){
  const svg = $("#mapaSvg"); if(!svg) return;
  const e = mapaEpoca(mapaAnio);
  const fa = mapaFrontAnio(mapaAnio), F = MAPA_FRONTERAS[fa];
  if(mapaCapas.poderes && !F) mapaCargarFronteras(fa);
  const poderes = !mapaCapas.poderes ? "" : F ? `<g clip-path="url(#mclip)">${F.map(([n,,,,prec,d])=>{ const pueblo = mapaEsPueblo(n);
      return `<path class="mfront ${pueblo?'pueblo':''} ${prec<2?'aprox':''}" d="${d}" style="--c:${pueblo ? 'var(--ink-faint)' : mapaColorDe(n)}" vector-effect="non-scaling-stroke"><title>${escapeHtml(mapaNomEs(n))}</title></path>`; }).join("")}</g>`
    : e ? e.poderes.map((p,i)=>
    `<polygon class="mpoder" points="${mapaPts(p.poly)}" clip-path="url(#mclip)" style="fill:${mapaColor(i)};stroke:${mapaColor(i)}" vector-effect="non-scaling-stroke"/>`).join("") : "";
  const viajes = mapaCapas.viajes ? mapaViajesVisibles(mapaAnio).map(v=>
    `<polyline class="mviaje" points="${mapaPts(v.ruta)}" vector-effect="non-scaling-stroke"/>`).join("") : "";
  const rutas = mapaCapas.rutas ? mapaRutas(mapaAnio).map(r=>{ const et = mapaEtapasHasta(r, mapaAnio);
    return et.length > 1 ? `<polyline class="mruta" points="${mapaPts(et.map(t=>[t.lon,t.lat]))}" vector-effect="non-scaling-stroke"/>` : ""; }).join("") : "";
  const rec = mapaSeguir ? (mapaDatos().recorridos[mapaSeguir]||[]).filter(t=>t.anio <= mapaAnio) : [];
  const recorrido = rec.length > 1 ? `<polyline class="mrecorrido" points="${mapaPts(rec.map(t=>[t.lon,t.lat]))}" vector-effect="non-scaling-stroke"/>` : "";
  svg.innerHTML = `<defs><clipPath id="mclip"><path d="${MAPA_TIERRA}"/></clipPath></defs>
    <rect x="-400" y="-100" width="800" height="200" class="mmar"/>
    <path d="${MAPA_TIERRA}" class="mtierra" vector-effect="non-scaling-stroke"/>${poderes}${rutas}${viajes}${recorrido}`;
  $("#mapaRecorrido").innerHTML = mapaRecorridoHTML();
  $("#mapaAnioTxt").textContent = mapaAnioTxt(mapaAnio);
  $("#mapaEpocaTit").textContent = e ? e.titulo : "";
  const nf = $("#mapaFrontNota"); if(nf) nf.textContent = mapaCapas.poderes ? (F ? `Fronteras de c. ${mapaAnioTxt(fa)}` : "Cargando las fronteras…") : "";
  $("#mapaEpocaTxt").innerHTML = e ? `<b>${mapaAnioTxt(e.desde)} – ${mapaAnioTxt(e.hasta)}</b> · ${escapeHtml(e.texto)}` : "";
  $("#mapaPaneles").innerHTML = mapaPanelesHTML(e);
  $("#mapaConv").innerHTML = mapaConvencionesHTML();
  mapaUbicar();
}

/* --- La capa de nombres y marcas (HTML): se recalcula con cada movimiento o zoom --- */
function mapaUbicar(){
  const svg = $("#mapaSvg"), capa = $("#mapaCapaTxt"); if(!svg || !capa) return;
  const W = svg.clientWidth || 900, H = svg.clientHeight || 500;
  const c = mapaVista || mapaCaja(W/H); mapaUltima = c;
  svg.setAttribute("viewBox", `${c.x} ${c.y} ${c.w} ${c.h}`);
  const D = mapaDatos(), e = mapaEpoca(mapaAnio);
  const aPx = (lon, lat)=>{ const [x,y] = mapaP(lon, lat); return [(x - c.x)/c.w*W, (y - c.y)/c.h*H]; };
  const dentro = ([x,y])=>x >= 4 && x <= W - 4 && y >= 4 && y <= H - 4;
  const ocupadas = [];
  const libre = (x0, y0, x1, y1)=>{
    if(x0 < 2 || x1 > W - 2 || y0 < 2 || y1 > H - 2) return false;
    if(ocupadas.some(o=>x0 < o[2] && x1 > o[0] && y0 < o[3] && y1 > o[1])) return false;
    ocupadas.push([x0, y0, x1, y1]); return true; };
  const ancho = (t, px)=>t.length * px * 0.56;
  let html = "";
  // 1) marcas: filósofos vivos, ya fallecidos y hechos (siempre se dibujan; reservan su lugar)
  const vivos = mapaCapas.filos ? mapaVivos(mapaAnio) : [], muertos = mapaCapas.muertos ? mapaPasados(mapaAnio) : [];
  const evs = mapaCapas.hechos ? mapaEventos(mapaAnio) : [];
  muertos.forEach(m=>{ const L = D.lugares[m.id], p = aPx(L.lon, L.lat); if(!dentro(p)) return;
    html += `<button class="mpunto tenue" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px;--c:var(--${mapaClr(m)})" onclick="mapaAbrir('f-${m.id}')" aria-label="${escapeHtml(m.nombre)}" title="${escapeHtml(m.nombre)}"></button>`; });
  const filos = vivos.map(m=>{ const L = D.lugares[m.id]; return {m, p: aPx(L.lon, L.lat)}; }).filter(f=>dentro(f.p));
  filos.forEach(({m,p})=>{ ocupadas.push([p[0]-6, p[1]-6, p[0]+6, p[1]+6]);
    html += `<button class="mpunto" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px;--c:var(--${mapaClr(m)})" onclick="mapaAbrir('f-${m.id}')" aria-label="${escapeHtml(m.nombre)}" title="${escapeHtml(m.nombre)}"></button>`; });
  evs.forEach(v=>{ const p = aPx(v.lon, v.lat); if(!dentro(p)) return;
    if(filos.some(f=>Math.hypot(f.p[0]-p[0], f.p[1]-p[1]) < 14)){ p[0] -= 12; p[1] -= 12; }   // no tapar a un filósofo en el mismo lugar ocupadas.push([p[0]-7, p[1]-7, p[0]+7, p[1]+7]);
    html += `<button class="mrombo ${v.tipo==='guerra'?'guerra':''}" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px" onclick="mapaAbrir('h-${D.eventos.indexOf(v)}')" aria-label="${escapeHtml(v.titulo)}" title="${escapeHtml(v.titulo)}"></button>`; });
  if(mapaCapas.centros) mapaCentros(mapaAnio).forEach(cn=>{ const p = aPx(cn.lon, cn.lat); if(!dentro(p)) return;
    if(filos.some(f=>Math.hypot(f.p[0]-p[0], f.p[1]-p[1]) < 14)){ p[0] += 12; p[1] -= 12; }
    ocupadas.push([p[0]-7, p[1]-7, p[0]+7, p[1]+7]);
    html += `<button class="mcentro" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px" onclick="mapaAbrir('c-${D.centros.indexOf(cn)}')" aria-label="${escapeHtml(cn.nombre)}" title="${escapeHtml(cn.nombre)}"></button>`; });
  if(mapaCapas.rutas) mapaRutas(mapaAnio).forEach(r=>{ mapaEtapasHasta(r, mapaAnio).forEach(t=>{ const p = aPx(t.lon, t.lat); if(!dentro(p)) return;
    html += `<button class="metapa" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px" onclick="mapaAbrir('r-${D.rutas.indexOf(r)}')" aria-label="${escapeHtml(r.titulo + ": " + t.lugar)}" title="${escapeHtml(r.titulo + " · " + t.lugar + " (" + mapaAnioTxt(t.anio) + ")")}"></button>`; }); });
  if(mapaSeguir) (D.recorridos[mapaSeguir]||[]).forEach((t,i)=>{ if(t.anio > mapaAnio) return; const p = aPx(t.lon, t.lat); if(!dentro(p)) return;
    ocupadas.push([p[0]-10, p[1]-10, p[0]+10, p[1]+10]);
    html += `<button class="mparada" style="left:${p[0].toFixed(1)}px;top:${p[1].toFixed(1)}px" onclick="mapaIrParada(${i})" aria-label="${escapeHtml(t.lugar)}" title="${escapeHtml(t.lugar + " · " + mapaAnioTxt(t.anio))}">${i+1}</button>`; });
  // 2) nombres, por prioridad: filósofos, territorios, regiones; el que no entra no se escribe
  filos.forEach(({m,p})=>{ const t = mapaNombre(m), w = ancho(t, 13.5);
    const lados = [[p[0]+8, p[1]-9], [p[0]-8-w, p[1]-9], [p[0]-w/2, p[1]-27], [p[0]-w/2, p[1]+8]];
    const ok = lados.find(([x,y])=>libre(x, y, x+w, y+18)); if(!ok) return;
    html += `<span class="mnom filo" style="left:${ok[0].toFixed(1)}px;top:${ok[1].toFixed(1)}px" onclick="mapaAbrir('f-${m.id}')">${escapeHtml(t)}</span>`; });
  const F = MAPA_FRONTERAS[mapaFrontAnio(mapaAnio)], esc = W / c.w;
  if(mapaCapas.poderes && F) F.slice().sort((a,b)=>b[3]-a[3]).forEach(([n,lx,ly,area])=>{
    const t = mapaNomEs(n), pueblo = mapaEsPueblo(n), px = pueblo ? 12 : 13.5;
    if(!t.trim() || t.trim() === "?") return;
    // los nombres largos van en dos líneas, cortados en el espacio más cercano al medio
    let lineas = [t];
    if(t.length > 13 && t.includes(" ")){ const pal = t.split(" "); let mejor = 1, dif = 1e9;
      for(let i = 1; i < pal.length; i++){ const a = pal.slice(0,i).join(" ").length, b = pal.slice(i).join(" ").length; if(Math.abs(a-b) < dif){ dif = Math.abs(a-b); mejor = i; } }
      lineas = [pal.slice(0,mejor).join(" "), pal.slice(mejor).join(" ")]; }
    const w = Math.max(...lineas.map(l=>ancho(l, px))), alto = lineas.length * 16;
    if(Math.sqrt(area)*esc < Math.max(w*0.6, 30)) return;                      // territorio muy chico para su nombre a este zoom
    const q = [(lx - c.x)*esc, (ly - c.y)/c.h*H]; if(!dentro(q)) return;
    if(!libre(q[0]-w/2, q[1]-alto/2, q[0]+w/2, q[1]+alto/2)) return;
    html += `<span class="mnom estado ${pueblo?'pueblo':''}" style="left:${(q[0]-w/2).toFixed(1)}px;top:${(q[1]-alto/2).toFixed(1)}px;width:${w.toFixed(0)}px;--c:${pueblo ? 'var(--ink-soft)' : mapaColorDe(n)}">${lineas.map(escapeHtml).join("<br>")}</span>`; });
  if(mapaCapas.poderes && e && !F) e.poderes.forEach((pd,i)=>{
    const q = pd.etiqueta ? aPx(pd.etiqueta[0], pd.etiqueta[1]) : null; if(!q || !dentro(q)) return;
    const t = mapaCorto(pd.nombre), fecha = (pd.nombre.match(/\(([^)]*)\)/)||[])[1], w = Math.max(ancho(t, 15), fecha ? ancho(fecha, 11) : 0);
    if(!libre(q[0]-w/2, q[1]-10, q[0]+w/2, q[1]+(fecha?24:10))) return;
    html += `<span class="mnom poder" style="left:${(q[0]-w/2).toFixed(1)}px;top:${(q[1]-10).toFixed(1)}px;width:${w.toFixed(0)}px;--c:${mapaColor(i)}" onclick="mapaAbrir('t-${i}')">${escapeHtml(t)}${fecha ? `<small>${escapeHtml(fecha)}</small>` : ""}</span>`; });
  if(mapaCapas.poderes && e && !F) (e.regiones||[]).forEach(r=>{ const q = aPx(r.lon, r.lat); if(!dentro(q)) return;
    const w = ancho(r.nombre, 13); if(!libre(q[0]-w/2, q[1]-9, q[0]+w/2, q[1]+9)) return;
    html += `<span class="mnom region" style="left:${(q[0]-w/2).toFixed(1)}px;top:${(q[1]-9).toFixed(1)}px;width:${w.toFixed(0)}px">${escapeHtml(r.nombre)}</span>`; });
  capa.innerHTML = html;
}

/* --- Desplegables: territorios, filósofos, guerras y hechos, viajes --- */
function mapaFichaLink(id){
  const m = moduleById(id); if(!m) return "";
  return `<button class="corrchip" onclick="openModule('${id}')">Abrir la ficha de ${escapeHtml(mapaNombre(m))} →</button>`;
}
function mapaPanelesHTML(e){
  const D = mapaDatos(), vivos = mapaVivos(mapaAnio), evs = mapaEventos(mapaAnio), viajes = mapaViajesVisibles(mapaAnio);
  const item = (id, titulo, cuerpo, marca="")=>`<details class="mapaitem" id="mi-${id}"><summary>${marca}<span>${titulo}</span></summary><div class="mapaitemtxt">${cuerpo}</div></details>`;
  const sec = (id, titulo, n, lista, vacio)=>`<details class="mapasec" id="ms-${id}"><summary>${titulo} <span class="muted">(${n})</span></summary>${n ? lista : `<p class="muted">${vacio}</p>`}</details>`;
  const terr = e ? e.poderes.map((p,i)=>item(`t-${i}`, escapeHtml(p.nombre), `<p>${escapeHtml(p.d || "")}</p>`, `<i class="mleysw" style="background:${mapaColor(i)}"></i>`)).join("") : "";
  const filos = vivos.map(m=>{ const L = D.lugares[m.id], bio = D.bios[m.id];
    const otros = (L.otros||[]).map(o=>`<li><b>${escapeHtml(o.lugar)}</b>: ${escapeHtml(o.nota)}</li>`).join("");
    return item(`f-${m.id}`, escapeHtml(mapaNombre(m)), `<p class="muted">${escapeHtml(m.fechas)} · pensó sobre todo en ${escapeHtml(L.lugar)}</p>${bio ? `<p>${escapeHtml(bio)}</p>` : ""}${otros ? `<ul class="mapaotros">${otros}</ul>` : ""}<div class="row">${mapaFichaLink(m.id)}</div>`, `<i class="mleypunto" style="background:var(--${mapaClr(m)})"></i>`); }).join("");
  const hechos = evs.map(v=>item(`h-${D.eventos.indexOf(v)}`, `<span class="mapaevanio">${mapaAnioTxt(v.anio)}</span> ${escapeHtml(v.titulo)}`, `<p>${escapeHtml(v.texto)}</p>${(v.fichas||[]).length ? `<div class="row">${v.fichas.map(mapaFichaLink).join("")}</div>` : ""}`, `<i class="mleyrombo ${v.tipo==='guerra'?'guerra':''}"></i>`)).join("");
  const via = viajes.map(v=>{ const m = moduleById(v.mod);
    return item(`v-${D.viajes.indexOf(v)}`, `${escapeHtml(v.titulo)}`, `<p class="muted">${mapaAnioTxt(v.anio)}${v.seguro ? "" : " · lo cuenta la tradición, no es seguro"}</p><p>${escapeHtml(v.texto)}</p><div class="row">${mapaFichaLink(v.mod)}</div>`, `<i class="mleyviajei"></i>`); }).join("");
  const cens = mapaCentros(mapaAnio), cen = cens.map(cn=>item(`c-${D.centros.indexOf(cn)}`, escapeHtml(cn.nombre), `<p class="muted">${mapaAnioTxt(cn.desde)} – ${cn.hasta == null ? "hoy" : mapaAnioTxt(cn.hasta)} · ${escapeHtml(cn.tipo)}</p><p>${escapeHtml(cn.texto)}</p>${(cn.fichas||[]).length ? `<div class="row">${cn.fichas.map(mapaFichaLink).join("")}</div>` : ""}`, `<i class="mleycentro"></i>`)).join("");
  const rus = mapaRutas(mapaAnio), ru = rus.map(r=>item(`r-${D.rutas.indexOf(r)}`, escapeHtml(r.titulo), `<p>${escapeHtml(r.texto)}</p><ol class="mapaetapas">${r.etapas.map(t=>`<li class="${t.anio <= mapaAnio ? '' : 'futura'}"><b>${escapeHtml(t.lugar)}</b> <span class="muted">(${mapaAnioTxt(t.anio)})</span>: ${escapeHtml(t.nota)}</li>`).join("")}</ol>${(r.fichas||[]).length ? `<div class="row">${r.fichas.map(mapaFichaLink).join("")}</div>` : ""}`, `<i class="mleyruta"></i>`)).join("");
  return sec("terr", "Poderes principales de esta época", e ? e.poderes.length : 0, terr, "—")
    + sec("filos", "Filósofos vivos en " + mapaAnioTxt(mapaAnio), vivos.length, filos, "Ningún filósofo con ficha vivía este año.")
    + sec("hechos", "Guerras y hechos de esta época", evs.length, hechos, "No hay hechos cargados para esta época.")
    + sec("viajes", "Viajes en torno a " + mapaAnioTxt(mapaAnio), viajes.length, via, "Nadie estaba de viaje cerca de este año.")
    + sec("centros", "Centros del saber activos", cens.length, cen, "No hay centros cargados para este año.")
    + sec("rutas", "Rutas de las ideas en curso", rus.length, ru, "Ninguna ruta en curso este año.");
}
/* Tocar algo en el mapa abre su explicación en los desplegables. */
function mapaAbrir(id){
  const it = document.getElementById("mi-" + id); if(!it) return;
  const sec = it.closest(".mapasec"); if(sec) sec.open = true;
  $all(".mapaitem.sel").forEach(x=>x.classList.remove("sel"));
  it.open = true; it.classList.add("sel");
  it.scrollIntoView({behavior:"smooth", block:"center"});
}
function mapaConvencionesHTML(){
  const trads = Object.keys(LEVELS).filter(t=>t!=="metodo").map(t=>`<span class="mleytrad"><i style="background:var(--${LEVELS[t].clr})"></i>${escapeHtml(LEVELS[t].label)}</span>`).join("");
  const conv = [
    [`<i class="mleysw" style="background:var(--accent)"></i>`, "Estado de la época (imperio, reino, califato, república…). Cada uno conserva su color a lo largo del tiempo."],
    [`<i class="mleysw borde"></i>`, "Borde punteado: frontera poco conocida o aproximada; borde continuo: mejor documentada."],
    [`<i class="mleysw" style="background:var(--ink-faint)"></i>`, "Pueblos y culturas sin Estado (agricultores, nómadas, cazadores-recolectores)."],
    [`<i class="mleyregion">Ab</i>`, "Nombre de cada Estado o pueblo tal como se lo conoce en la historia; los chicos aparecen al acercar."],
    [`<i class="mleypunto" style="background:var(--eu)"></i>`, "Filósofo vivo ese año, con el color de su tradición."],
    [`<i class="mleypunto tenue" style="background:var(--eu)"></i>`, "Filósofo que ya había muerto (capa «Ya fallecidos»)."],
    [`<i class="mleyviajei"></i>`, "Viaje que importó para su pensamiento (se ve cerca del año en que lo hizo)."],
    [`<i class="mleyrombo guerra"></i>`, "Guerra."],
    [`<i class="mleyrombo"></i>`, "Otro hecho que cambió lo que se pensaba o escribía."],
    [`<i class="mleycentro"></i>`, "Centro del saber activo ese año: escuela, biblioteca, universidad, casa de traducción."],
    [`<i class="mleyruta"></i>`, "Ruta de las ideas (capa apagada al empezar): cómo viajaron textos y escuelas; se dibuja hasta la etapa que ya ocurrió."],
    [`<i class="mparadaley">1</i>`, "Parada del recorrido de vida del filósofo que estás siguiendo."],
    [`<i class="mleymarca"></i>`, "En la línea del tiempo, las rayas marcan dónde empieza cada época y los puntos, las guerras y los hechos."]];
  return `<ul class="mleylista">${conv.map(([i,t])=>`<li>${i}<span>${t}</span></li>`).join("")}</ul><div class="mleytrads">${trads}</div>`;
}

/* --- Acercar y mover, como un mapa de teléfono ---
   La geometría usa trazos que no engordan (vector-effect) y la capa de nombres se recalcula en
   cada cuadro: así el texto queda nítido a cualquier zoom y aparecen nombres al acercar. */
function mapaPonerVista(v){
  const svg = $("#mapaSvg"); if(!svg || !v) return;
  const w = Math.max(2, Math.min(420, v.w)), h = v.h * w / v.w;
  mapaVista = {x: v.x + (v.w - w)/2, y: v.y + (v.h - h)/2, w, h};
  if(!mapaCuadro) mapaCuadro = requestAnimationFrame(()=>{ mapaCuadro = null; mapaUbicar(); });
}
function mapaZoom(f, fx=0.5, fy=0.5){
  const c = mapaVista || mapaUltima; if(!c) return;
  const w = Math.max(2, Math.min(420, c.w*f)), h = c.h * w / c.w;
  mapaPonerVista({x: c.x + (c.w - w)*fx, y: c.y + (c.h - h)*fy, w, h});
}
function mapaGestos(marco){
  if(!marco) return;
  const pts = new Map(); let movio = false, ini = null;
  const rel = ev=>{ const r = marco.getBoundingClientRect(); return [(ev.clientX - r.left)/r.width, (ev.clientY - r.top)/r.height]; };
  // Safari en iPhone agranda toda la página con el pellizco: se lo impide dentro del mapa
  ["gesturestart","gesturechange","gestureend"].forEach(t=>marco.addEventListener(t, ev=>ev.preventDefault()));
  marco.addEventListener("wheel", ev=>{ ev.preventDefault(); const [fx,fy] = rel(ev); mapaZoom(Math.exp(ev.deltaY*0.0015), fx, fy); }, {passive:false});
  const empezar = ()=>{ ini = {c: {...(mapaVista || mapaUltima)}, p: [...pts.values()].map(q=>[...q])}; };
  marco.addEventListener("pointerdown", ev=>{ if(ev.target.closest(".mapazoom")) return; pts.set(ev.pointerId, [ev.clientX, ev.clientY]); movio = false; empezar(); });
  marco.addEventListener("pointermove", ev=>{
    if(!pts.has(ev.pointerId) || !ini) return;
    pts.set(ev.pointerId, [ev.clientX, ev.clientY]);
    const r = marco.getBoundingClientRect(), u = ini.c.w / r.width, P = [...pts.values()];
    if(P.length === 1 && ini.p.length === 1){
      const dx = P[0][0] - ini.p[0][0], dy = P[0][1] - ini.p[0][1];
      if(Math.hypot(dx, dy) > 6) movio = true;
      if(movio){ try{ marco.setPointerCapture(ev.pointerId); }catch(e){} mapaPonerVista({x: ini.c.x - dx*u, y: ini.c.y - dy*u, w: ini.c.w, h: ini.c.h}); }
    } else if(P.length >= 2 && ini.p.length >= 2){
      movio = true;
      const d0 = Math.hypot(ini.p[0][0]-ini.p[1][0], ini.p[0][1]-ini.p[1][1]), d1 = Math.hypot(P[0][0]-P[1][0], P[0][1]-P[1][1]);
      const f = d0 / Math.max(d1, 1), w = ini.c.w*f, h = ini.c.h*f;
      const m0 = [(ini.p[0][0]+ini.p[1][0])/2 - r.left, (ini.p[0][1]+ini.p[1][1])/2 - r.top];
      const m1 = [(P[0][0]+P[1][0])/2 - r.left, (P[0][1]+P[1][1])/2 - r.top];
      const gx = ini.c.x + m0[0]*u, gy = ini.c.y + m0[1]*u;   // el punto del mapa que estaba bajo los dedos
      mapaPonerVista({x: gx - m1[0]*(w/r.width), y: gy - m1[1]*(w/r.width), w, h});
    } else if(P.length >= 2) empezar();
  });
  const fin = ev=>{ pts.delete(ev.pointerId); if(pts.size) empezar(); else ini = null; };
  marco.addEventListener("pointerup", fin); marco.addEventListener("pointercancel", fin);
  // si fue un arrastre, el toque no abre lo que quedó debajo del dedo
  marco.addEventListener("click", ev=>{ if(movio && !ev.target.closest(".mapazoom")){ ev.stopPropagation(); ev.preventDefault(); movio = false; } }, true);
  if(!window.__mapaResize){ window.__mapaResize = true; addEventListener("resize", ()=>{ if($("#mapaSvg")) mapaUbicar(); }); }
}

/* --- Seguir a un filósofo: su recorrido de vida, parada por parada --- */
function mapaSeguirA(id){
  mapaSeguir = id || null;
  const R = id ? (mapaDatos().recorridos[id] || []) : [];
  if(R.length){
    mapaAnio = R[0].anio; mapaCapas.filos = true;
    // la vista abarca todas las paradas, con margen
    const pts = R.map(t=>mapaP(t.lon, t.lat)), xs = pts.map(p=>p[0]), ys = pts.map(p=>p[1]);
    const W = ($("#mapaSvg")||{}).clientWidth || 900, H = ($("#mapaSvg")||{}).clientHeight || 500, ratio = W/H;
    let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    let w = Math.max(x1-x0, 8)*1.5, h = Math.max(y1-y0, 6)*1.5, cx = (x0+x1)/2, cy = (y0+y1)/2;
    if(w/h > ratio) h = w/ratio; else w = h*ratio;
    mapaVista = {x: cx - w/2, y: cy - h/2, w, h};
  }
  renderMapas();
}
function mapaIrParada(i){
  const R = mapaDatos().recorridos[mapaSeguir] || [], t = R[i]; if(!t) return;
  mapaAnio = t.anio; const r = $("#mapaRango"); if(r) r.value = mapaAnio;
  dibujarMapa();
  const li = document.getElementById("mp-" + i); if(li) li.scrollIntoView({behavior:"smooth", block:"nearest"});
}
function mapaRecorridoHTML(){
  if(!mapaSeguir) return "";
  const m = moduleById(mapaSeguir), R = mapaDatos().recorridos[mapaSeguir] || []; if(!m) return "";
  const actual = R.reduce((k,t,i)=>t.anio <= mapaAnio ? i : k, 0);
  return `<div class="maparecorrido">
    <div class="row"><b>Recorrido de ${escapeHtml(mapaNombre(m))}</b>
      <span class="spacer"></span>
      <button class="btn sm ghost" onclick="mapaIrParada(${Math.max(0, actual-1)})" aria-label="Parada anterior">◀</button>
      <button class="btn sm ghost" onclick="mapaIrParada(${Math.min(R.length-1, actual+1)})" aria-label="Parada siguiente">▶</button></div>
    <ol>${R.map((t,i)=>`<li id="mp-${i}" class="${i===actual?'actual':''} ${t.anio > mapaAnio ? 'futura' : ''}" onclick="mapaIrParada(${i})"><span class="mparadaley">${i+1}</span><span><b>${escapeHtml(t.lugar)}</b> <span class="muted">${mapaAnioTxt(t.anio)}</span><br>${escapeHtml(t.nota)}</span></li>`).join("")}</ol>
    ${mapaFichaLink(mapaSeguir)}</div>`;
}
/* Desde «Vida y contexto» de una ficha. */
function irAlMapa(id){ showView("mapas"); mapaSeguirA(id); }
