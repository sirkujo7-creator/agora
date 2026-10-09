/* Ágora · service worker: guarda la app para usarla sin internet.
   Solo funciona cuando la app se sirve por http(s) (por ejemplo en GitHub Pages);
   abierta con doble clic desde file:// no se registra y todo sigue igual.
   Al instalarse lee index.html y fuentes/fuentes.css para saber qué guardar, así que
   no hay que mantener una lista de archivos a mano al agregar fichas.
   Estrategia: responde desde la caché y en segundo plano trae la versión nueva
   (la próxima vez que se abra, ya está actualizada). */
const CACHE = "agora-v1";
const BASE = ["./", "./index.html", "./manifest.webmanifest", "./fuentes/fuentes.css",
  "./iconos/icono-192.png", "./iconos/icono-512.png", "./iconos/favicon.png", "./iconos/apple-touch-icon.png"];

async function listaDeArchivos(){
  const extra = [];
  try{
    const html = await (await fetch("./index.html", {cache:"no-store"})).text();
    for(const m of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) extra.push("./" + m[1]);
    const css = await (await fetch("./fuentes/fuentes.css", {cache:"no-store"})).text();
    for(const m of css.matchAll(/url\(([^)]+)\)/g)) extra.push("./fuentes/" + m[1].replace(/['"]/g,""));
  }catch(e){}
  return [...new Set([...BASE, ...extra])];
}
self.addEventListener("install", ev=>{
  ev.waitUntil((async()=>{
    const cache = await caches.open(CACHE);
    await Promise.all((await listaDeArchivos()).map(u=>cache.add(u).catch(()=>{})));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", ev=>{
  ev.waitUntil((async()=>{
    for(const k of await caches.keys()) if(k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", ev=>{
  const req = ev.request;
  if(req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  ev.respondWith((async()=>{
    const cache = await caches.open(CACHE);
    const guardada = await cache.match(req, {ignoreSearch:true});
    const red = fetch(req).then(r=>{ if(r && r.ok) cache.put(req, r.clone()); return r; }).catch(()=>null);
    if(guardada){ ev.waitUntil(red); return guardada; }
    return (await red) || (req.mode==="navigate" ? cache.match("./index.html") : Response.error());
  })());
});
