// Uso (desde Agora/): node herramientas/fichas/unir-rees.js <id> <nueva-id.json> <salida.js>
// Arma la ficha reescrita a partir de la vieja y de lo nuevo (encargo-reescritura.md), sin que nadie
// tenga que copiar a mano lo que no cambia. Del JSON toma:
//   ficha: {obras, conceptos, cuestionario, dialogos}  → reemplazan esos campos (dialogos va tras dialogo)
//   correcciones: [{buscar, poner}]                     → reemplazos exactos en la ficha (cada «buscar», una sola vez)
// Quita cadena y actividades y agrega rev:2.
const fs=require("fs"),path=require("path");
const [id, jsonPath, salida] = process.argv.slice(2);
const dir=fs.readdirSync("datos/modulos").find(t=>fs.existsSync(`datos/modulos/${t}/${id}.js`));
if(!dir){ console.log("no encuentro la ficha "+id); process.exit(1); }
let src=fs.readFileSync(`datos/modulos/${dir}/${id}.js`,"utf8");
const X=JSON.parse(fs.readFileSync(jsonPath,"utf8")), F=X.ficha||{};
for(const {buscar,poner} of (X.correcciones||[])){
  const n=src.split(buscar).length-1;
  if(n!==1){ console.log(`✗ corrección: «${buscar.slice(0,60)}…» aparece ${n} veces`); process.exit(1); }
  src=src.replace(buscar,()=>poner);
}
// serializa con claves sin comillas, como el resto de las fichas
const lit=v=>Array.isArray(v)?"["+v.map(lit).join(", ")+"]":v&&typeof v==="object"?"{"+Object.entries(v).map(([k,x])=>`${/^[a-zA-Z_]\w*$/.test(k)?k:JSON.stringify(k)}:${lit(x)}`).join(", ")+"}":JSON.stringify(v);
const lista=(nombre,arr)=>` ${nombre}:[\n${arr.map(o=>"   "+lit(o)).join(",\n")}\n ],`;
const dialogos=arr=>` dialogos:[\n${arr.map(d=>`  {titulo:${JSON.stringify(d.titulo)}, lineas:[\n${d.lineas.map(l=>"   "+lit(l)).join(",\n")}\n  ]}`).join(",\n")}\n ],`;
let L=src.split("\n");
const ini=L.findIndex(l=>/^MODULES\.push/.test(l)), finObj=L.findIndex((l,i)=>i>ini&&/^\);/.test(l));
const bloque=nombre=>{ const a=L.findIndex((l,i)=>i>ini&&i<finObj&&l.startsWith(` ${nombre}:`)); if(a<0) return null;
  let b=a+1; while(b<finObj && !/^ [a-zA-Z]+:/.test(L[b])) b++;
  if(b===finObj) b--;   // último campo: la línea que cierra el objeto queda
  return [a,b]; };
const poner=(nombre,texto,despuesDe)=>{ const r=bloque(nombre);
  if(r){ L.splice(r[0],r[1]-r[0],...(texto?texto.split("\n"):[])); return; }
  if(texto && despuesDe){ const d=bloque(despuesDe); L.splice(d[1],0,...texto.split("\n")); } };
for(const k of ["actividades","cadena"]) poner(k,null);
if(F.obras) poner("obras",lista("obras",F.obras));
if(F.conceptos) poner("conceptos",lista("conceptos",F.conceptos));
if(F.cuestionario) poner("cuestionario",lista("cuestionario",F.cuestionario));
if(F.dialogos) poner("dialogos",dialogos(F.dialogos),"dialogo");
src=L.join("\n");
if(!/\brev:\s*2\b/.test(src)) src=src.replace(`{id:"${id}",`,`{id:"${id}", rev:2,`);
fs.writeFileSync(salida,src);
console.log("armada: "+path.resolve(salida));
