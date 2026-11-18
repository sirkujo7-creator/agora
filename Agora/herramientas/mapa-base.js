// Genera datos/mapa-base.js desde world-atlas (npm i world-atlas@2.0.2 topojson-client@3.1.0 en una carpeta aparte; ver encabezado de datos/mapa-base.js).
// Uso: node mapa-base.js en esa carpeta y pegar land.txt dentro de MAPA_TIERRA.
const topo=require("./node_modules/world-atlas/land-50m.json"),{feature}=require("topojson-client");
const KX=0.88, P=([lon,lat])=>[+(lon*KX).toFixed(1),+(-lat).toFixed(1)];
const geo=feature(topo,topo.objects.land);
const polys=[];for(const f of geo.features){const g=f.geometry;(g.type==="Polygon"?[g.coordinates]:g.coordinates).forEach(p=>polys.push(p));}
const area=r=>{let a=0;for(let i=0;i<r.length;i++){const[x1,y1]=r[i],[x2,y2]=r[(i+1)%r.length];a+=x1*y2-x2*y1;}return Math.abs(a/2);};
const enDet=r=>r.some(([lo,la])=>lo>-12&&lo<75&&la>20&&la<62);
let d="",n=0;
for(const p of polys){let r=p[0]; if(r.some((c,i)=>i&&Math.abs(c[0]-r[i-1][0])>180)) r=r.map(([lo,la])=>[lo<-150?lo+360:lo,la]); if(Math.max(...r.map(c=>c[1]))<-56) continue;
  const a=area(r); if(a<(enDet(r)?0.02:0.6)) continue;
  // simplify: drop points closer than tol to previous
  const tol=enDet(r)?0.12:0.35; const out=[];let last=null;
  for(const c of r){const q=P(c); if(!last||Math.hypot(q[0]-last[0],q[1]-last[1])>=tol){out.push(q);last=q;}}
  if(out.length<3) continue; n++;
  d+="M"+out.map(q=>q.join(",")).join("L")+"Z";}
require("fs").writeFileSync("land.txt",d);console.log(n,"polígonos",d.length,"bytes");
