// Uso (desde Agora/): node complementos.js <id> → todos los datos complementarios de una ficha, en el formato JSON que hay que entregar
const vm=require("vm"),fs=require("fs");const html=fs.readFileSync("index.html","utf8");
let c="";for(const m of html.matchAll(/<script src="(datos[^"]+)"/g))c+=fs.readFileSync(m[1],"utf8")+"\n";
const x={};vm.createContext(x);vm.runInContext(c+";globalThis.D={TERMINOS,CLAVES,VIDAS,DIAGRAMAS,TEXTOS,EXAMEN_FINAL,EPOCA}",x);
const id=process.argv[2],D=x.D,E=D.EXAMEN_FINAL;
console.log(JSON.stringify({monograma:"(ver MONOGRAMA en app/agora.js)",epoca:D.EPOCA[id],terminos:D.TERMINOS[id],claves:D.CLAVES[id],vida:D.VIDAS[id],diagramas:D.DIAGRAMAS[id],textos:D.TEXTOS[id]||[],
 examen:{seleccion:E.seleccion.filter(q=>q.fichas.includes(id)),vf:E.vf.filter(q=>q.fichas.includes(id)),emparejar:E.emparejar.filter(q=>q.mod===id)}},null,1));
