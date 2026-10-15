// Uso (desde Agora/): node ficha.js id1 id2 ... → tesis, conceptos y obras de cada ficha
const vm=require("vm"),fs=require("fs");const html=fs.readFileSync("index.html","utf8");
let c="";for(const m of html.matchAll(/<script src="(datos[^"]+)"/g))c+=fs.readFileSync(m[1],"utf8")+"\n";
const x={};vm.createContext(x);vm.runInContext(c+";globalThis.M=MODULES",x);
const strip=s=>String(s).replace(/<[^>]+>/g,"");
for(const id of process.argv.slice(2)){const m=x.M.find(m=>m.id===id); if(!m){console.log("NO EXISTE",id);continue;}
 console.log(`\n######## ${m.id} · ${m.nombre} · ${m.fechas}\nTESIS: ${strip(m.tesis)}\n`);
 m.conceptos.forEach(k=>console.log(`- CONCEPTO ${k.t}: ${strip(k.d)}\n`));
 m.obras.forEach(k=>console.log(`- OBRA ${k.t}: ${strip(k.d).slice(0,500)}\n`));}
