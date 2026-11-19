// Genera datos/fronteras/<año>.json desde los world_*.geojson de historical-basemaps (GPL-3.0). Ver datos/fronteras/LEEME.md.
// Convierte world_<fecha>.geojson (historical-basemaps, GPL-3.0) en fronteras proyectadas y simplificadas.
const fs=require("fs"), D=process.argv[2], OUT=process.argv[3];
const KX=0.88, P=([lo,la])=>[lo*KX,-la];
const enDet=(x,y)=>x>-12*KX&&x<75*KX&&y>-62&&y<-20;
function dp(pts,tol){ if(pts.length<3) return pts; let mx=0,ix=0; const [a,b]=[pts[0],pts[pts.length-1]];
  const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1e-9;
  for(let i=1;i<pts.length-1;i++){ const d=Math.abs(dy*pts[i][0]-dx*pts[i][1]+b[0]*a[1]-b[1]*a[0])/L; if(d>mx){mx=d;ix=i;} }
  if(mx<=tol) return [a,b]; return dp(pts.slice(0,ix+1),tol).slice(0,-1).concat(dp(pts.slice(ix),tol)); }
const area=r=>{let s=0;for(let i=0;i<r.length;i++){const[a,b]=r[i],[c,d]=r[(i+1)%r.length];s+=a*d-c*b;}return Math.abs(s/2);};
function dentro(pt,r){let c=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const[xi,yi]=r[i],[xj,yj]=r[j];if((yi>pt[1])!==(yj>pt[1])&&pt[0]<(xj-xi)*(pt[1]-yi)/(yj-yi)+xi)c=!c;}return c;}
function distBorde(pt,r){let m=1e9;for(let i=0;i<r.length;i++){const a=r[i],b=r[(i+1)%r.length],dx=b[0]-a[0],dy=b[1]-a[1];const t=Math.max(0,Math.min(1,((pt[0]-a[0])*dx+(pt[1]-a[1])*dy)/(dx*dx+dy*dy||1)));m=Math.min(m,Math.hypot(pt[0]-a[0]-t*dx,pt[1]-a[1]-t*dy));}return m;}
function etiqueta(r){ const xs=r.map(p=>p[0]),ys=r.map(p=>p[1]);const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
  let best=null,bd=-1;for(let i=1;i<16;i++)for(let j=1;j<16;j++){const p=[x0+(x1-x0)*i/16,y0+(y1-y0)*j/16];if(!dentro(p,r))continue;const d=distBorde(p,r);if(d>bd){bd=d;best=p;}}
  return best||[(x0+x1)/2,(y0+y1)/2]; }
const nombres={};
for(const f of fs.readdirSync(D).filter(f=>/^world_.*\.geojson$/.test(f))){
  const key=f.replace("world_","").replace(".geojson",""), anio=key.startsWith("bc")?-+key.slice(2):+key;
  const g=JSON.parse(fs.readFileSync(D+"/"+f)); const ent={};
  for(const ft of g.features){ const n=ft.properties.NAME; if(!n||!ft.geometry) continue;
    const polys=ft.geometry.type==="Polygon"?[ft.geometry.coordinates]:ft.geometry.type==="MultiPolygon"?ft.geometry.coordinates:[];
    const e=ent[n]||(ent[n]={n,prec:ft.properties.BORDERPRECISION||1,rings:[]});
    for(const p of polys){ let r=p[0]; if(r.some((c,i)=>i&&Math.abs(c[0]-r[i-1][0])>180)) r=r.map(([lo,la])=>[lo<-150?lo+360:lo,la]);
      if(Math.max(...r.map(c=>c[1]))<-58) continue;
      let q=r.map(P); const det=q.some(([x,y])=>enDet(x,y)); const a=area(q); if(a<(det?0.03:0.4)) continue;
      { const t=det?0.08:0.25, m=Math.floor(q.length/2); q=dp(q.slice(0,m+1),t).slice(0,-1).concat(dp(q.slice(m),t)); } if(q.length<4) continue; e.rings.push(q); } }
  const lista=Object.values(ent).filter(e=>e.rings.length).map(e=>{ const big=e.rings.reduce((m,r)=>area(r)>area(m)?r:m); const [lx,ly]=etiqueta(big);
    nombres[e.n]=(nombres[e.n]||0)+1;
    return [e.n,+lx.toFixed(1),+ly.toFixed(1),+e.rings.reduce((s,r)=>s+area(r),0).toFixed(1),e.prec,e.rings.map(r=>"M"+r.map(([x,y])=>x.toFixed(1)+","+y.toFixed(1)).join("L")+"Z").join("")]; });
  fs.writeFileSync(`${OUT}/${anio}.json`,JSON.stringify(lista));
  process.stdout.write(`${anio}:${lista.length}:${(JSON.stringify(lista).length/1e3).toFixed(0)}k `);
}
fs.writeFileSync(OUT+"/nombres.json",JSON.stringify(Object.keys(nombres).sort()));
console.log("\nnombres únicos:",Object.keys(nombres).length);
