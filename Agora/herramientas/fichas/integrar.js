// Uso (desde Agora/): node integrar.js <scratchpad> id1:trad:antesDe id2:trad:antesDe ...
// Integra fichas nuevas (ya escritas en datos/modulos/<trad>/<id>.js) y sus complementos nueva-<id>.json.
// "antesDe" = id de la ficha delante de la cual va su <script> en index.html (o "fin:<trad>" para el final de esa tradición).
const fs=require("fs"),vm=require("vm"),S=process.argv[2],specs=process.argv.slice(3).map(x=>x.split(":"));
const J=x=>JSON.stringify(x);
let html=fs.readFileSync("index.html","utf8");
const x={};vm.createContext(x);
let c="";for(const m of html.matchAll(/<script src="(datos[^"]+)"/g))c+=fs.readFileSync(m[1],"utf8")+"\n";
vm.runInContext(c+";globalThis.D={TERMINOS,CLAVES,VIDAS,DIAGRAMAS,TEXTOS,EXAMEN_FINAL}",x);
const D=x.D;
const cab=(f,v)=>{const s=fs.readFileSync(f,"utf8");return s.slice(0,s.indexOf("const "+v));};
for(const [id,trad,antes] of specs){
  const X=JSON.parse(fs.readFileSync(`${S}/nueva-${id}.json`,"utf8"));
  const tag=`<script src="datos/modulos/${trad}/${id}.js"></script>`;
  if(!html.includes(tag)){
    if(antes.startsWith("fin")){ const t=antes.split("/")[1]||trad; const ult=[...html.matchAll(new RegExp(`<script src="datos/modulos/${t}/[a-z]+\\.js"></script>`,"g"))].pop();
      if(ult) html=html.slice(0,ult.index+ult[0].length)+"\n"+tag+html.slice(ult.index+ult[0].length);
      else { const met=html.match(/<script src="datos\/modulos\/metodo\/[a-z]+\.js"><\/script>/); html=html.replace(met[0],tag+"\n"+met[0]); } }   // tradición nueva: antes de las fichas de método
    else { const ref=html.match(new RegExp(`<script src="datos/modulos/[a-z]+/${antes}\\.js"></script>`)); if(!ref) throw "no encuentro "+antes; html=html.replace(ref[0],tag+"\n"+ref[0]); }
  }
  D.TERMINOS[id]=X.terminos; D.CLAVES[id]=X.claves; D.VIDAS[id]=X.vida; D.DIAGRAMAS[id]=X.diagramas; if((X.textos||[]).length) D.TEXTOS[id]=X.textos;
  const E=D.EXAMEN_FINAL; const ya=q=>JSON.stringify(q);
  (X.examen.seleccion||[]).forEach(q=>{ if(!E.seleccion.some(z=>ya(z)===ya(q))) E.seleccion.push(q); });
  (X.examen.vf||[]).forEach(q=>{ if(!E.vf.some(z=>ya(z)===ya(q))) E.vf.push(q); });
  (X.examen.emparejar||[]).forEach(q=>{ if(!E.emparejar.some(z=>ya(z)===ya(q))) E.emparejar.push(q); });
  // EPOCA y MONOGRAMA
  let tv=fs.readFileSync("datos/transversal.js","utf8");
  if(!new RegExp(`[{ ,]${id}:`).test(tv.slice(tv.indexOf("const EPOCA"),tv.indexOf("};",tv.indexOf("const EPOCA")))))
    tv=tv.replace(/(const EPOCA = \{[\s\S]*?)\n\};/,(m,a)=>`${a},\n  ${id}:${X.epoca}\n};`.replace(",,",","));
  fs.writeFileSync("datos/transversal.js",tv);
  let ag=fs.readFileSync("app/agora.js","utf8");
  if(!new RegExp(`MONOGRAMA = \\{[^}]*\\b${id}:`).test(ag)) ag=ag.replace(/(const MONOGRAMA = \{[^}]*?) \};/,(m,a)=>`${a}, ${id}:${J(X.monograma)} };`);
  fs.writeFileSync("app/agora.js",ag);
}
fs.writeFileSync("index.html",html);
// orden de fichas = orden de index.html
const orden=[...html.matchAll(/datos\/modulos\/[^/]+\/([a-z]+)\.js/g)].map(m=>m[1]);
const porOrden=o=>orden.filter(id=>o[id]!==undefined);
// serializadores (mismos formatos que los archivos actuales)
fs.writeFileSync("datos/claves.js",cab("datos/claves.js","CLAVES")+"const CLAVES = {\n"+porOrden(D.CLAVES).map(id=>`  ${id}: [\n`+D.CLAVES[id].map(l=>"    ["+l.map(J).join(", ")+"]").join(",\n")+"\n  ],\n").join("")+"};\n");
fs.writeFileSync("datos/terminos.js",cab("datos/terminos.js","TERMINOS")+"const TERMINOS = {\n"+porOrden(D.TERMINOS).map(id=>`  ${id}: [\n`+D.TERMINOS[id].map(e=>e.q?`    {q:${J(e.q)}}`:`    {k:${J(e.k)}, tapar:${J(e.tapar)}}`).join(",\n")+"\n  ],\n").join("")+"};\n");
fs.writeFileSync("datos/vidas.js",cab("datos/vidas.js","VIDAS")+"const VIDAS = {\n"+porOrden(D.VIDAS).map(id=>{const v=D.VIDAS[id];return `  ${id}: {\n    lema:${J(v.lema)},\n    secciones:[\n${v.secciones.map(s=>`      {titulo:${J(s.titulo)},\n       texto:${J(s.texto)}}`).join(",\n")}\n    ],\n    hitos:[\n${v.hitos.map(h=>`      {anio:${J(h.anio)}, texto:${J(h.texto)}}`).join(",\n")}\n    ]\n  },\n`;}).join("")+"};\n");
const campos=["tipo","titulo","intro","centro","eje","polos","ejes","nota"];
fs.writeFileSync("datos/diagramas.js",cab("datos/diagramas.js","DIAGRAMAS")+"const DIAGRAMAS = {\n"+porOrden(D.DIAGRAMAS).map(id=>`  ${id}: [\n`+D.DIAGRAMAS[id].map(g=>`    {${campos.filter(k=>g[k]!==undefined).map(k=>`${k}:${J(g[k])}`).join(", ")},\n     nodos:[\n${g.nodos.map(n=>"      "+(g.tipo==="polos"?`{a:${J(n.a)}, b:${J(n.b)}, d:${J(n.d)}}`:`{t:${J(n.t)}, d:${J(n.d)}}`)).join(",\n")}]}`).join(",\n")+"\n  ],\n").join("")+"};\n");
fs.writeFileSync("datos/textos.js",cab("datos/textos.js","TEXTOS")+"const TEXTOS = {\n"+porOrden(D.TEXTOS).map(id=>`  ${id}: [\n`+D.TEXTOS[id].map(t=>`    {titulo:${J(t.titulo)}, obra:${J(t.obra)}, pasaje:${J(t.pasaje||"")},
     traduccion:${J(t.traduccion||"")},
     estado:${J(t.estado)}, url:${J(t.url||"")},
     contexto:${J(t.contexto||"")},
     texto:${J(t.texto)},
     glosas:[\n${(t.glosas||[]).map(g=>`       {frase:${J(g.frase)}, nota:${J(g.nota)}}`).join(",\n")}],
     preguntas:[\n${(t.preguntas||[]).map(p=>`       {q:${J(p.q)}, opciones:${J(p.opciones)}, r:${J(p.r)}, why:${J(p.why||"")}}`).join(",\n")}]}`).join(",\n")+"\n  ],\n").join("")+"};\n");
const E=D.EXAMEN_FINAL;
fs.writeFileSync("datos/examen.js",cab("datos/examen.js","EXAMEN_FINAL")+"const EXAMEN_FINAL = {\n seleccion:[\n"+E.seleccion.map(q=>"  "+J(q)).join(",\n")+"\n ],\n vf:[\n"+E.vf.map(q=>"  "+J(q)).join(",\n")+"\n ],\n emparejar:[\n"+E.emparejar.map(q=>"  "+J(q)).join(",\n")+"\n ]\n};\n");
console.log("integradas:",specs.map(s=>s[0]).join(", "));
