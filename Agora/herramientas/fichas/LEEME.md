# Herramientas para fichas nuevas

Flujo usado para las fichas del paso 6 (correr todo desde `Agora/`):

1. `encargo-ficha.md` es el encargo completo para escribir una ficha (y `encargo-textos.md`, el de los textos
   de la obra). Quien escribe entrega `datos/modulos/<trad>/<id>.js` y un JSON de complementos
   (`nueva-<id>.json`: monograma, epoca, terminos, claves, vida, diagramas, textos, examen).
2. `node herramientas/fichas/ficha.js <ids>`: tesis, conceptos y obras de fichas existentes (para conectar).
   `node herramientas/fichas/complementos.js <id>`: los complementos de una ficha existente, en el formato a entregar.
3. `node herramientas/fichas/checkficha.js <id> <ruta-ficha> <ruta-json>`: revisa la ficha y su JSON; tiene que decir OK.
4. `node herramientas/fichas/integrar.js <carpeta-de-los-json> id:trad:antesDe ...`: agrega el `<script>` en
   `index.html` (antes de la ficha `antesDe`), `MONOGRAMA`, `EPOCA` y reescribe claves, términos, vidas,
   diagramas, textos y examen con la ficha nueva. Revisar después que el monograma no se repita y si va en `ESCUELAS`.
5. `node herramientas/verificar.js` y `node pruebas/navegador.js`.
