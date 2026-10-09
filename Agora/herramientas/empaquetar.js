#!/usr/bin/env node
/* Ágora · empaquetar en un solo archivo.
   Uso:  node herramientas/empaquetar.js
   Genera dist/agora.html: el mismo index.html con las hojas de estilo, las tipografías
   (en base64), el ícono y todos los scripts incrustados, para compartir la app como un
   único archivo. El manifiesto y el service worker no se incluyen: solo sirven cuando
   la app se publica en la web. */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
let html = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8");
const leer = rel => fs.readFileSync(path.join(RAIZ, rel), "utf8");
const MIME = { ".woff2":"font/woff2", ".png":"image/png" };
const dataUri = rel => `data:${MIME[path.extname(rel)]};base64,${fs.readFileSync(path.join(RAIZ, rel)).toString("base64")}`;

html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (_, href) => {
  if (href.startsWith("http")) return _;
  const dir = path.dirname(href);
  const css = leer(href).replace(/url\(([^)]+)\)/g, (m, u) => {
    u = u.replace(/['"]/g, "");
    return u.startsWith("data:") || u.startsWith("http") ? m : `url(${dataUri(path.join(dir, u))})`;
  });
  return `<style>\n${css}</style>`;
});
html = html.replace(/<link rel="(?:manifest|apple-touch-icon)"[^>]*>\n?/g, "");
html = html.replace(/<link rel="icon" type="image\/png" href="([^"]+)">/, (_, href) => `<link rel="icon" type="image/png" href="${dataUri(href)}">`);
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) =>
  `<script>\n${leer(src).replace(/<\/script/gi, "<\\/script")}</script>`);

fs.mkdirSync(path.join(RAIZ, "dist"), { recursive: true });
const destino = path.join(RAIZ, "dist", "agora.html");
fs.writeFileSync(destino, html);
console.log(`✓ ${path.relative(RAIZ, destino)} (${(fs.statSync(destino).size / 1024 / 1024).toFixed(2)} MB)`);
