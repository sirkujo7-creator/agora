#!/usr/bin/env node
/* Ágora · empaquetar en un solo archivo.
   Uso:  node herramientas/empaquetar.js
   Genera dist/agora.html: el mismo index.html con la hoja de estilos y todos los
   scripts incrustados, para compartir la app como un único archivo. */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
let html = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8");
const leer = rel => fs.readFileSync(path.join(RAIZ, rel), "utf8");

html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (_, href) =>
  href.startsWith("http") ? _ : `<style>\n${leer(href)}</style>`);
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) =>
  `<script>\n${leer(src).replace(/<\/script/gi, "<\\/script")}</script>`);

fs.mkdirSync(path.join(RAIZ, "dist"), { recursive: true });
const destino = path.join(RAIZ, "dist", "agora.html");
fs.writeFileSync(destino, html);
console.log(`✓ ${path.relative(RAIZ, destino)} (${(fs.statSync(destino).size / 1024 / 1024).toFixed(2)} MB)`);
