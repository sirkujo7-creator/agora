#!/usr/bin/env node
/* Ágora · verificación de datos.
   Uso:  node herramientas/verificar.js
   Carga los scripts en el mismo orden que index.html (sin navegador) y revisa:
   - que cada archivo tenga JavaScript válido,
   - que no haya ids de ficha repetidos y que cada ficha tenga sus lecturas,
   - la forma básica de cada ficha (conceptos, obras, cuestionario, diálogo),
   - los ejercicios avanzados: cadena (enlaces y nodos alcanzables),
     reconstruccion (exactamente un distractor, ordenCorrecto válido) y dilemas,
   - que las Constelaciones apunten a fichas existentes.
   Sale con código 1 si encuentra errores. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);

const errores = [], avisos = [];
const err = m => errores.push(m), aviso = m => avisos.push(m);

// Solo los datos: todo menos app/agora.js (que necesita el DOM).
const datos = scripts.filter(s => !s.startsWith("app/"));
let codigo = "";
for (const s of datos) {
  const f = path.join(RAIZ, s);
  if (!fs.existsSync(f)) { err(`index.html carga ${s}, pero el archivo no existe`); continue; }
  const src = fs.readFileSync(f, "utf8");
  try { new vm.Script(src, { filename: s }); } catch (e) { err(`${s}: ${e.message}`); }
  codigo += src + "\n";
}
// Archivos de fichas que existen pero index.html no carga.
const dirMod = path.join(RAIZ, "datos", "modulos");
for (const trad of fs.readdirSync(dirMod)) for (const f of fs.readdirSync(path.join(dirMod, trad))) {
  const rel = `datos/modulos/${trad}/${f}`;
  if (f.endsWith(".js") && !scripts.includes(rel)) aviso(`${rel} existe pero index.html no lo carga`);
}
if (errores.length) fin();

const ctx = {}; vm.createContext(ctx);
vm.runInContext(codigo + "\n;globalThis.__d = {LEVELS, MODULES, LECTURAS, CONSTELACIONES, EXAMEN_FINAL: typeof EXAMEN_FINAL==='undefined' ? null : EXAMEN_FINAL};", ctx);
const { LEVELS, MODULES, LECTURAS, CONSTELACIONES, EXAMEN_FINAL } = ctx.__d;

const ids = new Set();
for (const m of MODULES) {
  const q = `ficha "${m.id}"`;
  if (ids.has(m.id)) err(`${q}: id repetido`); ids.add(m.id);
  if (!LEVELS[m.trad]) err(`${q}: tradición desconocida "${m.trad}"`);
  for (const k of ["nombre", "tesis", "icon"]) if (!m[k]) err(`${q}: falta "${k}"`);
  for (const k of ["conceptos", "obras"]) {
    if (!Array.isArray(m[k]) || !m[k].length) { err(`${q}: falta "${k}"`); continue; }
    m[k].forEach((x, i) => { if (!x.t || !x.d) err(`${q}: ${k}[${i}] sin t/d`); });
  }
  if (!m.dialogo || !Array.isArray(m.dialogo.lineas)) aviso(`${q}: sin diálogo escrito (usa el automático)`);
  if (!LECTURAS[m.id]) aviso(`${q}: sin lecturas`);
  else (LECTURAS[m.id].preguntasLectura || []).forEach((p, i) => {
    // `r` es el texto de la respuesta correcta y tiene que estar entre las opciones.
    if (!Array.isArray(p.opciones) || !p.opciones.includes(p.r)) err(`${q}: preguntasLectura[${i}]: la respuesta "r" no está entre las opciones`);
  });

  // cadena
  if (m.cadena) {
    const c = m.cadena, nodos = c.nodos || {};
    if (!nodos[c.inicio]) err(`${q}: cadena.inicio "${c.inicio}" no existe`);
    const vistos = new Set(), pila = [c.inicio];
    while (pila.length) {
      const id = pila.pop(); if (vistos.has(id) || !nodos[id]) continue; vistos.add(id);
      (nodos[id].opciones || []).forEach((o, i) => {
        if (o.final) return;
        if (!o.va) err(`${q}: cadena.${id}.opciones[${i}] sin "va" ni "final"`);
        else if (!nodos[o.va]) err(`${q}: cadena.${id} → "${o.va}" no existe`);
        else pila.push(o.va);
      });
    }
    Object.keys(nodos).forEach(id => { if (!vistos.has(id)) aviso(`${q}: cadena.${id} no se alcanza desde el inicio`); });
  }
  // reconstruccion
  (m.reconstruccion || []).forEach((r, i) => {
    const piezas = new Map((r.piezas || []).map(p => [p.id, p]));
    const nd = (r.piezas || []).filter(p => p.tipo === "distractor").length;
    if (nd !== 1) err(`${q}: reconstruccion[${i}] tiene ${nd} distractores (debe ser 1)`);
    (r.ordenCorrecto || []).forEach(id => {
      if (!piezas.has(id)) err(`${q}: reconstruccion[${i}].ordenCorrecto usa "${id}", que no existe`);
      else if (piezas.get(id).tipo === "distractor") err(`${q}: reconstruccion[${i}] pone el distractor en el orden correcto`);
    });
    if (!r.explicacion) err(`${q}: reconstruccion[${i}] sin explicación`);
  });
  // dilemas
  (m.dilemas || []).forEach((d, i) => {
    const pasos = new Set((d.pasos || []).map(p => p.id));
    (d.pasos || []).forEach(p => (p.opciones || []).forEach((o, j) => {
      if (o.va && !pasos.has(o.va)) err(`${q}: dilemas[${i}].${p.id}.opciones[${j}] → "${o.va}" no existe`);
    }));
    if (!Array.isArray(d.rubrica) || !d.rubrica.length) err(`${q}: dilemas[${i}] sin rúbrica`);
  });
}
for (const c of CONSTELACIONES) (c.entradas || []).forEach(e => {
  if (!ids.has(e.mod)) err(`constelación "${c.id}": la ficha "${e.mod}" no existe`);
});
// Las opciones se muestran mezcladas: las explicaciones no pueden nombrar opciones por su posición.
const ORDINAL = /\b[Ll]a (primera|segunda|tercera|cuarta) (es|opción)\b/;
for (const c of CONSTELACIONES) if (c.pregunta && ORDINAL.test(c.pregunta.explicacion || "")) err(`constelación "${c.id}": la explicación nombra opciones por su posición`);

// Examen final integrador
if (!EXAMEN_FINAL) aviso("no hay banco de examen final (datos/examen.js)");
else {
  const E = EXAMEN_FINAL, q = (t, i) => `examen final, ${t}[${i}]`;
  const fichasOk = (x, t, i) => (x.fichas || []).forEach(f => { if (!ids.has(f)) err(`${q(t, i)}: la ficha "${f}" no existe`); });
  (E.seleccion || []).forEach((x, i) => {
    if (!x.situacion || !x.pregunta || !x.explicacion) err(`${q("seleccion", i)}: falta situación, pregunta o explicación`);
    if (!Array.isArray(x.opciones) || x.opciones.length !== 4) err(`${q("seleccion", i)}: tiene que tener exactamente 4 opciones`);
    else if (!Number.isInteger(x.correcta) || x.correcta < 0 || x.correcta > 3) err(`${q("seleccion", i)}: "correcta" fuera de rango`);
    if (ORDINAL.test(x.explicacion || "")) err(`${q("seleccion", i)}: la explicación nombra opciones por su posición`);
    fichasOk(x, "seleccion", i);
  });
  (E.vf || []).forEach((x, i) => {
    if (!x.afirmacion || typeof x.verdadero !== "boolean" || !x.explicacion) err(`${q("vf", i)}: falta afirmación, "verdadero" (true/false) o explicación`);
    fichasOk(x, "vf", i);
  });
  const mods = new Set();
  (E.emparejar || []).forEach((x, i) => {
    if (!ids.has(x.mod)) err(`${q("emparejar", i)}: la ficha "${x.mod}" no existe`);
    if (!x.idea) err(`${q("emparejar", i)}: falta la idea`);
    mods.add(x.mod);
  });
  if (mods.size < 8) err(`examen final: el emparejamiento necesita ideas de al menos 8 fichas distintas (hay ${mods.size})`);
  for (const t of ["europea", "asiatica", "americana"]) if (![...mods].some(m => (MODULES.find(x => x.id === m) || {}).trad === t)) err(`examen final: el emparejamiento no tiene ideas de la tradición ${t}`);
  if ((E.seleccion || []).length < 12 || (E.vf || []).length < 8) err("examen final: el banco necesita al menos 12 preguntas de selección y 8 de verdadero o falso");
  const sinCubrir = MODULES.filter(m => ![...(E.seleccion || []), ...(E.vf || [])].some(x => (x.fichas || []).includes(m.id))).map(m => m.id);
  if (sinCubrir.length) aviso(`examen final: fichas sin preguntas en el banco: ${sinCubrir.join(", ")}`);
}
Object.keys(LECTURAS).forEach(k => { if (!ids.has(k)) aviso(`LECTURAS.${k} no corresponde a ninguna ficha`); });

const conEj = MODULES.filter(m => m.cadena && (m.reconstruccion || []).length && (m.dilemas || []).length).map(m => m.id);
console.log(`Fichas: ${MODULES.length} · con los 3 ejercicios avanzados: ${conEj.length}`);
console.log(`Pendientes de ejercicios avanzados: ${MODULES.filter(m => !conEj.includes(m.id)).map(m => m.id).join(", ") || "ninguna"}`);
console.log(`Constelaciones: ${CONSTELACIONES.length}`);
if (EXAMEN_FINAL) console.log(`Examen final: ${EXAMEN_FINAL.seleccion.length} de selección · ${EXAMEN_FINAL.vf.length} de verdadero o falso · ${EXAMEN_FINAL.emparejar.length} ideas para emparejar`);
fin();

function fin() {
  avisos.forEach(a => console.log("⚠ " + a));
  errores.forEach(e => console.log("✗ " + e));
  console.log(errores.length ? `\n${errores.length} error(es).` : "\n✓ Sin errores.");
  process.exit(errores.length ? 1 : 0);
}
