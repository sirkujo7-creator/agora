#!/usr/bin/env node
/* Ágora · pruebas en el navegador (Chromium con Playwright).
   Uso:  node pruebas/navegador.js
   Sirve la app con un servidor local (como la sirve GitHub Pages) y la recorre:
   pestañas de todas las fichas, repaso espaciado, buscador, examen final, copia y
   reinicio del progreso, constelaciones, tema, app instalable y uso sin internet.
   También la abre desde file://, como cuando se hace doble clic en index.html.
   Termina con código 1 si algo falla. */
const http = require("http"), fs = require("fs"), path = require("path"), os = require("os");
let chromium;
try { ({ chromium } = require("playwright")); }
catch (e) { ({ chromium } = require(path.join(require("child_process").execSync("npm root -g").toString().trim(), "playwright"))); }

const RAIZ = path.join(__dirname, "..");
const TIPOS = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8",
  ".json":"application/json", ".webmanifest":"application/manifest+json", ".png":"image/png", ".woff2":"font/woff2" };
const fallas = [], ok = m => console.log("✓ " + m), mal = m => { fallas.push(m); console.log("✗ " + m); };
const comprobar = (cond, m) => cond ? ok(m) : mal(m);

function servidor(){
  return new Promise(res => {
    const s = http.createServer((req, resp) => {
      let rel = decodeURIComponent(req.url.split("?")[0]); if (rel.endsWith("/")) rel += "index.html";
      const f = path.join(RAIZ, path.normalize(rel));
      if (!f.startsWith(RAIZ) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { resp.writeHead(404); return resp.end(); }
      resp.writeHead(200, { "Content-Type": TIPOS[path.extname(f)] || "application/octet-stream" });
      fs.createReadStream(f).pipe(resp);
    }).listen(0, "127.0.0.1", () => res(s));
  });
}

(async () => {
  const srv = await servidor();
  const URL_APP = `http://127.0.0.1:${srv.address().port}/index.html`;
  const b = await chromium.launch();
  const errores = [];
  const vigilar = p => { p.on("pageerror", e => errores.push(e.message)); p.on("console", m => { if (m.type() === "error") errores.push(m.text()); }); };
  const ctx = await b.newContext({ acceptDownloads: true, viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage(); vigilar(p);
  await p.goto(URL_APP);

  // 1. Tipografías locales
  await p.evaluate(() => document.fonts.ready);
  const fuentes = await p.evaluate(() => ["Instrument Serif", "Newsreader", "Bricolage Grotesque"].map(f => document.fonts.check(`16px "${f}"`)));
  comprobar(fuentes.every(Boolean), "las tres tipografías cargan desde el proyecto");

  // 2. Todas las pestañas de todas las fichas
  const vistas = await p.evaluate(() => { const tabs = DET_GRUPOS.flatMap(g => g.tabs.map(t => t[0])); let n = 0;
    for (const m of MODULES) { openModule(m.id); for (const t of tabs) { setDetTab(t); n++; } } return n; });
  const nFichas = await p.evaluate(() => MODULES.length);
  comprobar(vistas === nFichas * 13 && !errores.length, `${vistas} vistas de fichas sin errores`);

  // 3. Repaso espaciado
  await p.evaluate(() => openModule("kant", "conceptos"));
  await p.click('#detBody button:has-text("La tengo clara")');
  const caja = await p.evaluate(() => { const r = Object.values(progress.repaso)[0]; return r && r.caja === 1 && r.prox === diasDesdeHoy(1); });
  comprobar(caja, "la primera tarjeta marcada vuelve mañana");

  // 3b. Preguntas: ideas clave y revisión entre pares
  await p.evaluate(() => openModule("kant", "preguntas"));
  await p.fill("#detBody textarea.escritura >> nth=0", "La prueba de universalización detecta contradicciones en las máximas, aunque Hegel la acusó de formalismo vacío sin contenido propio.");
  await p.click('#modelo-0 button:has-text("Ver la respuesta del modelo")');
  const nClaves = await p.locator("#modelo-0 .claves input").count();
  await p.locator("#modelo-0 .claves input").nth(0).check();
  const parte = await p.evaluate(() => { const r = progress.respuestas["kant:preguntas:0"]; return r.eval === "parte" && r.claves.join() === "0"; });
  for (let j = 1; j < nClaves; j++) await p.locator("#modelo-0 .claves input").nth(j).check();
  const todo = await p.evaluate(() => progress.respuestas["kant:preguntas:0"].eval === "si");
  const guardado = await p.evaluate(() => JSON.parse(localStorage.getItem("agora-progress-v1")).respuestas["kant:preguntas:0"].claves.length);
  comprobar(nClaves >= 3 && parte && todo && guardado === nClaves && (await p.textContent("#modelo-0")).includes(`Cubriste ${nClaves} de ${nClaves}`), "las ideas clave marcadas dan la autoevaluación y se guardan");
  await p.click('button:has-text("Revisar a un compañero")');
  await p.fill(".parnombre input", "Ana Gómez");
  await p.fill('#detBody textarea[aria-label="Respuesta del compañero"] >> nth=0', "Universalizar la máxima.");
  await p.locator("#detBody .claves >> nth=0").locator("input").nth(0).check();
  await p.fill('#detBody textarea[aria-label="Comentario para el compañero"] >> nth=0', "Falta la objeción de Hegel.");
  const [dlRev] = await Promise.all([p.waitForEvent("download"), p.click('button:has-text("Bajar la revisión")')]);
  const revTxt = fs.readFileSync(await dlRev.path(), "utf8");
  const propioIntacto = await p.evaluate(() => progress.respuestas["kant:preguntas:0"].texto.startsWith("La prueba"));
  comprobar(dlRev.suggestedFilename() === "agora-kant-revision-ana-gomez.txt" && revTxt.includes("Universalizar la máxima.") && revTxt.includes("  [x] ") && revTxt.includes("Falta la objeción de Hegel.") && propioIntacto,
    "revisión entre pares: se marca, se comenta y se baja sin tocar lo propio");
  await p.click('button:has-text("Mi respuesta")');

  // 4. Buscador
  await p.keyboard.press("Escape"); await p.evaluate(() => showView("inicio")); await p.keyboard.press("/");
  await p.fill("#busqInput", "sunyata");
  comprobar((await p.textContent(".busqitem .busqtit")).includes("Śūnyatā"), "el buscador ignora tildes (sunyata → Śūnyatā)");
  await p.fill("#busqInput", "nada");
  comprobar(!(await p.textContent("#busqResultados")).includes("indeterminada"), "el buscador busca por comienzo de palabra");
  await p.press("#busqInput", "Escape");

  // 5. Examen final respondido todo bien
  await p.evaluate(() => showView("examenes")); await p.click("text=Empezar el examen");
  for (let k = 0; k < 30; k++) {
    const it = await p.evaluate(() => { const s = finalState, it = s.items[s.i];
      return { tipo: it.tipo, ok: it.tipo === "sel" ? it.q.opciones[it.q.correcta] : it.tipo === "vf" ? (it.q.verdadero ? "Verdadero" : "Falso") : null, pares: it.tipo === "emp" ? it.pares.map(x => x.mod) : null }; });
    if (it.tipo === "emp") { for (let j = 0; j < it.pares.length; j++) await p.selectOption(`.empfila:nth-child(${j + 1}) select`, it.pares[j]); }
    else await p.click(`.qcard .optbtn:has-text(${JSON.stringify(it.ok.slice(0, 40))})`);
    const fin = await p.$("text=Terminar el examen"); if (fin) { await fin.click(); break; }
    await p.click("text=Siguiente →");
  }
  comprobar((await p.textContent(".resultbig")).trim() === "100%", "examen final respondido bien: 100 %");
  await p.click('#examRunner button:has-text("Volver")');

  // 6. Constelaciones
  const consts = await p.evaluate(() => CONSTELACIONES.map(c => [c.id, c.pregunta.correcta]));
  await p.evaluate(() => showView("constelaciones"));
  let constOk = 0;
  for (const [id, c] of consts) { await p.evaluate(id => abrirConstelacion(id), id); await p.click(`#constOpts .optbtn[data-ix="${c}"]`);
    if ((await p.textContent("#constFb")).startsWith("✅")) constOk++; }
  comprobar(constOk === consts.length, `${constOk}/${consts.length} constelaciones aceptan su respuesta correcta`);

  // 7. Copia, reinicio y recuperación del progreso
  await p.evaluate(() => { progress.moduleQuiz.platon = 80; progress.respuestas["platon:preguntas:0"] = { texto: "prueba" }; saveProgress(); showView("progreso"); });
  const [dl] = await Promise.all([p.waitForEvent("download"), p.click("text=Guardar copia")]);
  const copia = path.join(os.tmpdir(), "agora-copia-prueba.json"); await dl.saveAs(copia);
  await p.fill("#confReinicio", "REINICIAR"); await p.click('button:has-text("Reiniciar todo")');
  const vacio = await p.evaluate(() => Object.keys(progress.moduleQuiz).length === 0 && Object.keys(progress.respuestas).length === 0);
  await p.setInputFiles(".progtools input[type=file]", copia); await p.waitForTimeout(300);
  const vuelto = await p.evaluate(() => progress.moduleQuiz.platon === 80 && progress.respuestas["platon:preguntas:0"].texto === "prueba");
  comprobar(vacio && vuelto, "guardar copia, reiniciar todo y recuperar la copia");

  // 8. Tema claro/oscuro recordado
  await p.click("#temaBtn"); const tema1 = await p.evaluate(() => document.documentElement.dataset.theme);
  await p.reload(); const tema2 = await p.evaluate(() => document.documentElement.dataset.theme);
  comprobar(tema1 && tema1 === tema2, `el tema elegido (${tema1}) se mantiene al recargar`);

  // 9. App instalable y sin internet
  const manifiesto = await p.evaluate(async () => (await fetch("manifest.webmanifest")).json());
  comprobar(manifiesto.icons && manifiesto.icons.length >= 2, "el manifiesto de la app instalable carga");
  await p.evaluate(() => navigator.serviceWorker.ready);
  await p.reload(); await p.evaluate(() => navigator.serviceWorker.ready);
  await ctx.setOffline(true);
  await p.reload();
  const sinRed = await p.evaluate(() => typeof MODULES !== "undefined" && MODULES.length >= 25 && document.fonts.check('16px "Instrument Serif"'));
  await ctx.setOffline(false);
  comprobar(sinRed, "sin internet, la app vuelve a abrir con todas sus fichas y sus tipografías");

  // 10. Doble clic: abierta desde file://
  const errFile = [];
  const pf = await b.newPage(); pf.on("pageerror", e => errFile.push(e.message));
  await pf.goto("file://" + path.join(RAIZ, "index.html"));
  const fichasFile = await pf.evaluate(() => MODULES.length);
  comprobar(fichasFile >= 25 && !errFile.length, "abierta desde file:// funciona sin errores");

  comprobar(!errores.length, `sin errores en la consola${errores.length ? ": " + errores.slice(0, 3).join(" | ") : ""}`);
  await b.close(); srv.close();
  console.log(fallas.length ? `\n${fallas.length} prueba(s) fallaron.` : "\n✓ Todas las pruebas pasaron.");
  process.exit(fallas.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
