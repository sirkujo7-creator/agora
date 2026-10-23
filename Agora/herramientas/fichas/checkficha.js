// Uso (desde Agora/): node checkficha.js <id> <ruta-del-modulo> <ruta-json-complementos>
// Revisa una ficha nueva y sus complementos antes de integrarlos. Imprime errores o "OK".
// Con un cuarto argumento «breve», acepta una ficha breve (autores de menor peso: menos conceptos, sin ejercicios avanzados obligatorios).
const fs=require("fs"),vm=require("vm");
const [id, modPath, extraPath, modo] = process.argv.slice(2);
const REES = modo === "rees";   // reescritura de una ficha existente (encargo-reescritura.md)
const BREVE = modo === "breve" || REES;
const errs=[], e=m=>errs.push(m);
const x={};vm.createContext(x);
try{ vm.runInContext(fs.readFileSync("datos/base.js","utf8")+"\nLEVELS.islamica=LEVELS.islamica||{label:'Islámica',clr:'isl'};\n"+fs.readFileSync(modPath,"utf8")+";globalThis.M=MODULES;globalThis.L=LECTURAS",x); }
catch(er){ console.log("ERROR DE SINTAXIS: "+er.message); process.exit(1); }
const m=x.M.find(m=>m.id===id); if(!m){console.log("no hay ficha con id "+id);process.exit(1);}
for(const k of ["nombre","tesis","icon","fechas","escuela","conexion"]) if(!m[k]) e("falta "+k);
if(!x.L[id]) e("falta LECTURAS."+id); else {
  if(!(x.L[id].lecturas||[]).length) e("LECTURAS sin lecturas");
  (x.L[id].preguntasLectura||[]).forEach((p,i)=>{ if(!p.opciones||!p.opciones.includes(p.r)) e(`preguntasLectura[${i}]: r no está en opciones`); });
}
const cnt=(k,a,b)=>{const n=(m[k]||[]).length; if(n<a||n>b) e(`${k}: ${n} (se esperan ${a}-${b})`);};
if(REES){ cnt("conceptos",6,9); cnt("obras",3,5); cnt("cuestionario",4,5); }
else if(BREVE){ cnt("conceptos",5,8); cnt("obras",2,4); cnt("actividades",2,3); cnt("cuestionario",3,5); cnt("reconstruccion",0,2); cnt("dilemas",0,1); }
else { cnt("conceptos",8,10); cnt("obras",4,6); cnt("actividades",3,3); cnt("cuestionario",5,5); cnt("reconstruccion",2,2); cnt("dilemas",1,1); }
(m.conceptos||[]).concat(m.obras||[]).forEach((c,i)=>{ if(!c.t||!c.d) e("concepto/obra sin t o d: "+i); });
if(!m.dialogo||!(m.dialogo.lineas||[]).length) e("falta diálogo");
if(!m.cadena){ if(!BREVE) e("falta cadena"); } else { const c=m.cadena,n=c.nodos||{}; if(!n[c.inicio]) e("cadena.inicio no existe");
  const v=new Set(),p=[c.inicio]; while(p.length){const k=p.pop(); if(v.has(k)||!n[k]) continue; v.add(k); (n[k].opciones||[]).forEach((o,i)=>{ if(o.final) return; if(!n[o.va]) e(`cadena.${k}.opciones[${i}] → ${o.va} no existe`); else p.push(o.va); }); }
  Object.keys(n).forEach(k=>{ if(!v.has(k)) e("cadena."+k+" no se alcanza"); }); }
(m.reconstruccion||[]).forEach((r,i)=>{ const P=new Map((r.piezas||[]).map(p=>[p.id,p])); const nd=(r.piezas||[]).filter(p=>p.tipo==="distractor").length; if(nd!==1) e(`reconstruccion[${i}]: ${nd} distractores`);
  (r.ordenCorrecto||[]).forEach(k=>{ if(!P.has(k)) e(`reconstruccion[${i}]: orden usa ${k}`); else if(P.get(k).tipo==="distractor") e(`reconstruccion[${i}]: distractor en el orden`); }); if(!r.explicacion) e(`reconstruccion[${i}] sin explicación`); });
(m.dilemas||[]).forEach((d,i)=>{ const ps=new Set((d.pasos||[]).map(p=>p.id)); (d.pasos||[]).forEach(p=>(p.opciones||[]).forEach(o=>{ if(o.va&&!ps.has(o.va)) e(`dilema: paso ${o.va} no existe`); })); const r=(d.rubrica||[]).length; if(r<6||r>7) e(`dilema: rúbrica de ${r} (6-7)`); });
const ORD=/\b[Ll]a (primera|segunda|tercera|cuarta|última) (es|opción)\b|\b[Ll]a (primera|segunda|tercera|cuarta|última) opción\b/;
if(extraPath){ let X; try{X=JSON.parse(fs.readFileSync(extraPath,"utf8"));}catch(er){console.log("JSON inválido: "+er.message);process.exit(1);}
  if(!X.monograma||X.monograma.length>3) e("monograma (1-3 letras)");
  if(typeof X.epoca!=="number") e("epoca tiene que ser un número (año)");
  if(!Array.isArray(X.terminos)||X.terminos.length!==(m.conceptos||[]).length) e("terminos: uno por concepto");
  else X.terminos.forEach((t,i)=>{ if((typeof t.k==="string")===(typeof t.q==="string")) e(`terminos[${i}]: k o q`); if(t.k!==undefined&&!Array.isArray(t.tapar)) e(`terminos[${i}]: falta tapar`); if(t.q&&!/\?$/.test(t.q.trim())) e(`terminos[${i}]: q termina en ?`); });
  if(!Array.isArray(X.claves)||X.claves.length!==(m.cuestionario||[]).length) e("claves: una lista por pregunta");
  else X.claves.forEach((l,i)=>{ if(!Array.isArray(l)||l.length<3||l.length>4) e(`claves[${i}]: 3-4`); });
  const v=X.vida; if(!REES || v) if(!v||!v.lema||!Array.isArray(v.secciones)||v.secciones.length<4||v.secciones.at(-1).titulo!=="Por qué piensa así"||!Array.isArray(v.hitos)||v.hitos.length<6) e("vida: lema, 4-5 secciones (última «Por qué piensa así»), 6-9 hitos");
  const TIP={ciclo:[3,6],partes:[3,6],niveles:[3,6],secuencia:[3,6],polos:[2,5],cuadrantes:[4,4],capas:[2,4]};
  if(!Array.isArray(X.diagramas)||X.diagramas.length<(BREVE?1:2)||X.diagramas.length>2) e(BREVE?"diagramas: 1 o 2":"diagramas: 2"); else X.diagramas.forEach((g,i)=>{ const r=TIP[g.tipo]; if(!r){e(`diagrama ${i}: tipo ${g.tipo}`);return;} const n=(g.nodos||[]).length; if(n<r[0]||n>r[1]) e(`diagrama ${i}: ${n} piezas`);
    if(g.tipo==="partes"&&!g.centro) e(`diagrama ${i}: centro`); if(g.tipo==="polos"&&!(g.polos&&g.polos.izq&&g.polos.der)) e(`diagrama ${i}: polos`);
    const et=g.tipo==="polos"?g.nodos.flatMap(n=>[n.a,n.b]):g.nodos.map(n=>n.t); if(et.some(t=>!t||t.length>44)||new Set(et).size!==et.length||g.nodos.some(n=>!n.d)) e(`diagrama ${i}: etiquetas (distintas, ≤44) y d`); });
  (X.textos||[]).forEach((t,i)=>{ if(!t.titulo||!t.obra||!t.texto||!t.traduccion) e(`texto ${i}: campos`); if(!["dominio público","cita breve"].includes(t.estado)) e(`texto ${i}: estado`);
    if(t.estado==="dominio público"&&!/^https?:/.test(t.url||"")) e(`texto ${i}: url`); (t.glosas||[]).forEach(g=>{ if(!t.texto.includes(g.frase)) e(`texto ${i}: glosa «${g.frase}» no está en el texto`); });
    (t.preguntas||[]).forEach((p,j)=>{ if(!p.opciones||!p.opciones.includes(p.r)) e(`texto ${i} pregunta ${j}: r`); }); });
  const ex=X.examen||{}; (ex.seleccion||[]).forEach((q,i)=>{ if(!q.situacion||!q.pregunta||!q.explicacion||(q.opciones||[]).length!==4||!(q.correcta>=0&&q.correcta<=3)) e(`examen.seleccion[${i}]`); if(ORD.test(q.explicacion||"")) e(`examen.seleccion[${i}]: nombra opción por posición`); });
  (ex.vf||[]).forEach((q,i)=>{ if(!q.afirmacion||typeof q.verdadero!=="boolean"||!q.explicacion) e(`examen.vf[${i}]`); });
  (ex.emparejar||[]).forEach((q,i)=>{ if(q.mod!==id||!q.idea) e(`examen.emparejar[${i}]: mod tiene que ser ${id}`); });
  if(REES){ if(!Array.isArray(X.repaso)||X.repaso.length<8) e("repaso: 8 preguntas"); (X.repaso||[]).forEach((q,i)=>{ if(!q.pregunta||(q.opciones||[]).length!==4||!(q.correcta>=0&&q.correcta<=3)||!q.explicacion) e(`repaso[${i}]`); if(ORD.test(q.explicacion||"")) e(`repaso[${i}]: posición`); });
    if(m.cadena||m.actividades) e("rees: quitar cadena y actividades"); if(m.rev!==2) e("rees: falta rev:2"); if(!Array.isArray(m.dialogos)||!m.dialogos.length) e("rees: falta el segundo diálogo (dialogos)"); }
  if(!REES && ((ex.seleccion||[]).length<2||(ex.vf||[]).length<2||(ex.emparejar||[]).length<1)) e("examen: al menos 2 de selección, 2 V/F y 1 para emparejar");
  const txt=JSON.stringify(X)+fs.readFileSync(modPath,"utf8"); if(/[^\\]"[^"\n]*"[^:,\]\}\n]/.test("")) {}
}
console.log(errs.length? errs.map(x=>"✗ "+x).join("\n") : "OK");
