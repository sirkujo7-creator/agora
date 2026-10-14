/* Ágora · Diagramas (pestaña «Diagramas», en Estudiar).
   Los datos están en datos/diagramas.js: DIAGRAMAS.<id> = [ {tipo, titulo, intro, nodos, ...} ].
   Tipos:
   - ciclo:      nodos [{t, d}] en círculo, con flechas de uno al siguiente (y del último al primero).
   - partes:     un `centro` y nodos [{t, d}] alrededor, unidos al centro.
   - niveles:    nodos [{t, d}] de arriba (el más alto) hacia abajo; `eje` opcional: texto del eje vertical.
   - secuencia:  nodos [{t, d}] en orden, con flechas.
   - polos:      `polos:{izq, der}` y nodos [{a, b, d}]: pares opuestos.
   - cuadrantes: exactamente 4 nodos [{t, d}]; `ejes` opcional {x:[izq, der], y:[abajo, arriba]}.
   - capas:      nodos [{t, d}] del centro hacia afuera, en círculos concéntricos.
   Cada diagrama tiene dos modos: Explorar (tocar una pieza muestra su explicación) y Completá
   (las etiquetas se tapan y hay que ubicarlas; después se comprueba). */

let diagIdx = 0, diagModo = "explorar", diagSel = null, diagComp = null;

function diagramasDe(d){ return (typeof DIAGRAMAS !== "undefined" && DIAGRAMAS[d.id]) || []; }

/* Etiquetas que se pueden tapar en un diagrama: una por nodo, o dos (a y b) en los polos. */
function diagEtiquetas(g){
  if(g.tipo === "polos") return g.nodos.flatMap((n,i)=>[{k:i+"a", t:n.a}, {k:i+"b", t:n.b}]);
  return g.nodos.map((n,i)=>({k:String(i), t:n.t}));
}

function renderDiagramas(){
  const d = currentModule, gs = diagramasDe(d);
  if(!gs.length){ $("#detBody").innerHTML = `<div class="lecnote">Esta ficha todavía no tiene diagramas.</div>`; return; }
  if(diagIdx >= gs.length) diagIdx = 0;
  diagSel = null; diagComp = null;
  if(diagModo === "completar") iniciarCompletar();
  dibujarDiagrama(true);
}
function iniciarCompletar(){
  const g = diagramasDe(currentModule)[diagIdx];
  diagComp = { puestos:{}, elegido:null, visto:false, pool: shuffle(diagEtiquetas(g).map(e=>e.k)) };
}
function cambiarDiagrama(i){ diagIdx = i; renderDiagramas(); }
function modoDiagrama(m){ diagModo = m; renderDiagramas(); }

function dibujarDiagrama(animar){
  const d = currentModule, gs = diagramasDe(d), g = gs[diagIdx];
  const etiq = Object.fromEntries(diagEtiquetas(g).map(e=>[e.k, e.t]));
  $("#detBody").innerHTML = `
    <div class="diag${animar?' anima':''}">
      ${gs.length>1?`<div class="diagelige" role="tablist">${gs.map((x,i)=>`<button class="chip ${i===diagIdx?'active':''}" aria-pressed="${i===diagIdx}" onclick="cambiarDiagrama(${i})">${escapeHtml(x.titulo)}</button>`).join("")}</div>`:''}
      <div class="diaghead">
        <div><h3 class="diagtit">${g.titulo}</h3>${g.intro?`<p class="diagintro">${g.intro}</p>`:''}</div>
        <div class="diagmodos evalrow" role="group" aria-label="Modo">
          ${[["explorar","Explorar"],["completar","Completá"]].map(([k,l])=>`<button class="chip ${diagModo===k?'active':''}" aria-pressed="${diagModo===k}" onclick="modoDiagrama('${k}')">${l}</button>`).join("")}
        </div>
      </div>
      <div class="diaglienzo tipo-${g.tipo}" id="diagLienzo">${lienzo(g)}</div>
      ${diagModo==="completar" ? panelCompletar(g, etiq) : `<div class="diaginfo" id="diagInfo" role="status" aria-live="polite">${diagSel!=null ? infoNodo(g, diagSel) : '<span class="muted">Tocá una pieza del diagrama para ver qué significa.</span>'}</div>`}
      ${g.nota?`<p class="diagnota">${g.nota}</p>`:''}
    </div>`;
}

/* Contenido de una pieza: en Explorar, la etiqueta; en Completá, el hueco (o lo que se puso). */
function pieza(g, k, texto, clase){
  if(diagModo !== "completar"){
    const sel = diagSel===k ? ' sel' : '';
    return `<button class="dnodo ${clase||''}${sel}" style="--i:${parseInt(k)||0}" onclick="tocarNodo('${k}')">${escapeHtml(texto)}</button>`;
  }
  const puesto = diagComp.puestos[k];
  const marca = diagComp.visto ? (puesto && diagEtiquetas(g).find(e=>e.k===puesto).t===texto ? ' ok' : ' no') : '';
  const contenido = puesto ? escapeHtml(diagEtiquetas(g).find(e=>e.k===puesto).t) : '<span class="dhueco">?</span>';
  return `<button class="dnodo hueco ${clase||''}${puesto?' lleno':''}${marca}" style="--i:${parseInt(k)||0}" onclick="tocarHueco('${k}')" aria-label="${puesto?'Quitar '+escapeHtml(diagEtiquetas(g).find(e=>e.k===puesto).t):'Hueco vacío'}">${contenido}</button>`;
}

/* Posiciones en un lienzo de 100 × alto, para los tipos con flechas o rayos (ciclo y partes). */
function lienzoRadial(g, conCentro){
  const n = g.nodos.length, angosto = window.innerWidth < 620;
  const W = 100, H = angosto ? 120 : 72, cx = 50, cy = H/2;
  const rx = angosto ? 30 : 34, ry = angosto ? 44 : 24;
  const giro = (angosto && conCentro && n%2===0) ? Math.PI/n : 0;   // en el celular, las piezas en diagonal para no tapar el centro
  const pts = g.nodos.map((_,i)=>{ const a = -Math.PI/2 + giro + i*2*Math.PI/n; return { x: cx + rx*Math.cos(a), y: cy + ry*Math.sin(a) }; });
  const lineas = conCentro
    ? pts.map(p=>`<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}" class="drayo"/>`).join("")
    : pts.map((p,i)=>{ const q = pts[(i+1)%n];
        const mx = (p.x+q.x)/2, my = (p.y+q.y)/2, dx = mx-cx, dy = my-cy, f = 0.22;
        const c = { x: mx + dx*f, y: my + dy*f };
        const acorta = (a,b,t)=>({ x: a.x+(b.x-a.x)*t, y: a.y+(b.y-a.y)*t });
        const s = acorta(p, c, 0.32), e = acorta(q, c, 0.32);
        return `<path d="M${s.x.toFixed(2)},${s.y.toFixed(2)} Q${c.x.toFixed(2)},${c.y.toFixed(2)} ${e.x.toFixed(2)},${e.y.toFixed(2)}" class="dflecha" marker-end="url(#dpunta)" style="--i:${i}"/>`; }).join("");
  return `<div class="dradial" style="aspect-ratio:${W}/${H};">
    <svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs><marker id="dpunta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="dpuntaf"/></marker></defs>${lineas}</svg>
    ${conCentro?`<div class="dcentro" style="left:${cx}%;top:${(cy/H*100).toFixed(2)}%;">${escapeHtml(g.centro||"")}</div>`:''}
    ${g.nodos.map((nd,i)=>`<div class="dpos" style="left:${pts[i].x.toFixed(2)}%;top:${(pts[i].y/H*100).toFixed(2)}%;">${pieza(g, String(i), nd.t)}</div>`).join("")}
  </div>`;
}

/* En pantallas angostas, cinco o más piezas en círculo se pisan: se usa una disposición vertical. */
function compacto(g){ return window.innerWidth < 620 && g.nodos.length > 4; }
function lienzo(g){
  switch(g.tipo){
    case "ciclo":  return compacto(g) ? `<div class="dsecuencia dciclov">${g.nodos.map((nd,i)=>`${i?'<span class="dflechita" aria-hidden="true">→</span>':''}${pieza(g, String(i), nd.t)}`).join("")}<span class="dvuelve">↺ y vuelve a empezar</span></div>` : lienzoRadial(g, false);
    case "partes": return compacto(g) ? `<div class="dpartesv"><div class="dcentro dcentrov">${escapeHtml(g.centro||"")}</div><div class="dpartesgrid">${g.nodos.map((nd,i)=>pieza(g, String(i), nd.t)).join("")}</div></div>` : lienzoRadial(g, true);
    case "niveles": return `<div class="dniveles">
        ${g.eje?`<div class="deje"><span>${escapeHtml(g.eje)}</span></div>`:''}
        <div class="dpila">${g.nodos.map((nd,i)=>`<div class="dnivel" style="--i:${i};--n:${g.nodos.length};">${pieza(g, String(i), nd.t)}</div>`).join("")}</div>
      </div>`;
    case "secuencia": return `<div class="dsecuencia">${g.nodos.map((nd,i)=>`${i?'<span class="dflechita" aria-hidden="true">→</span>':''}${pieza(g, String(i), nd.t)}`).join("")}</div>`;
    case "polos": return `<div class="dpolos">
        <div class="dpolohead"><span>${escapeHtml(g.polos.izq)}</span><span>${escapeHtml(g.polos.der)}</span></div>
        ${g.nodos.map((nd,i)=>`<div class="dpar" style="--i:${i}">${pieza(g, i+"a", nd.a, "izq")}<span class="dtension" aria-hidden="true"></span>${pieza(g, i+"b", nd.b, "der")}</div>`).join("")}
      </div>`;
    case "cuadrantes": return `<div class="dcuadrantes">
        ${g.ejes?`<span class="dejey arriba">${escapeHtml(g.ejes.y[1])}</span><span class="dejey abajo">${escapeHtml(g.ejes.y[0])}</span><span class="dejex izq">${escapeHtml(g.ejes.x[0])}</span><span class="dejex der">${escapeHtml(g.ejes.x[1])}</span>`:''}
        <div class="dcuad">${g.nodos.map((nd,i)=>`<div class="dcelda" style="--i:${i}">${pieza(g, String(i), nd.t)}</div>`).join("")}</div>
      </div>`;
    case "capas": { const n = g.nodos.length;
      return `<div class="dcapas" style="--n:${n};">${g.nodos.map((nd,i)=>`<div class="dcapa" style="--k:${i};--n:${n};">${pieza(g, String(i), nd.t)}</div>`).reverse().join("")}</div>`; }
  }
  return "";
}

function infoNodo(g, k){
  const i = parseInt(k), nd = g.nodos[i];
  const titulo = g.tipo==="polos" ? `${escapeHtml(nd.a)} ↔ ${escapeHtml(nd.b)}` : escapeHtml(nd.t);
  return `<b>${titulo}</b><p>${nd.d}</p>`;
}
function tocarNodo(k){
  diagSel = k;
  document.querySelectorAll("#diagLienzo .dnodo").forEach(b=>b.classList.remove("sel"));
  const g = diagramasDe(currentModule)[diagIdx];
  const btns = [...document.querySelectorAll("#diagLienzo .dnodo")];
  const etqs = diagEtiquetas(g).map(e=>e.k);
  const idx = g.tipo==="polos" ? etqs.indexOf(k) : parseInt(k);
  if(btns[idx]) btns[idx].classList.add("sel");
  const info = document.getElementById("diagInfo");
  if(info){ info.innerHTML = infoNodo(g, k); info.classList.remove("pulso"); void info.offsetWidth; info.classList.add("pulso"); }
}

/* --- Completá --- */
function panelCompletar(g, etiq){
  const libres = diagComp.pool.filter(k=>!Object.values(diagComp.puestos).includes(k));
  const total = diagEtiquetas(g).length;
  const bien = diagComp.visto ? diagEtiquetas(g).filter(e=>{ const p = diagComp.puestos[e.k]; return p && etiq[p]===e.t; }).length : 0;
  return `<div class="diagcomp">
    <p class="muted" style="margin:0 0 8px;font-size:.88rem;">${diagComp.visto ? '' : 'Elegí una etiqueta y después tocá el hueco donde va. Tocá un hueco lleno para vaciarlo.'}</p>
    <div class="dpool">${libres.map(k=>`<button class="dchip${diagComp.elegido===k?' sel':''}" onclick="elegirEtiqueta('${k}')">${escapeHtml(etiq[k])}</button>`).join("") || (diagComp.visto?'':'<span class="muted" style="font-size:.85rem;">Ya ubicaste todas.</span>')}</div>
    <div class="row" style="gap:8px;margin-top:10px;">
      ${diagComp.visto
        ? `<button class="btn ghost sm" onclick="iniciarCompletar(); dibujarDiagrama(false);">Volver a intentar</button><button class="btn ghost sm" onclick="modoDiagrama('explorar')">Ver las explicaciones</button>`
        : `<button class="btn sm" onclick="comprobarDiagrama()" ${Object.keys(diagComp.puestos).length<total?'disabled':''}>Comprobar</button>`}
    </div>
    ${diagComp.visto?`<div class="gfeedback show ${bien===total?'ok':'no'}" role="status">${bien===total?'✅':'🔎'} ${bien} de ${total} en su lugar.${bien<total?' Las que quedaron en rojo están mal ubicadas: volvé a intentar o mirá las explicaciones.':''}</div>`:''}
  </div>`;
}
function elegirEtiqueta(k){ if(!diagComp || diagComp.visto) return; diagComp.elegido = diagComp.elegido===k ? null : k; dibujarDiagrama(false); }
function tocarHueco(k){
  if(!diagComp || diagComp.visto) return;
  if(diagComp.puestos[k]){ delete diagComp.puestos[k]; }
  else if(diagComp.elegido){ diagComp.puestos[k] = diagComp.elegido; diagComp.elegido = null; }
  dibujarDiagrama(false);
}
function comprobarDiagrama(){ if(!diagComp) return; diagComp.visto = true; dibujarDiagrama(false); }

/* Los diagramas radiales cambian de forma entre pantalla ancha y angosta: se redibujan al cruzar el límite. */
let _diagAngosto = window.innerWidth < 620;
window.addEventListener("resize", ()=>{
  const a = window.innerWidth < 620;
  if(a !== _diagAngosto){ _diagAngosto = a; if(typeof currentDetTab!=="undefined" && currentDetTab==="diagramas" && document.getElementById("diagLienzo")) dibujarDiagrama(false); }
});
