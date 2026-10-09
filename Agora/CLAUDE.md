# Ágora — guía del proyecto para Claude Code

Ágora es una app de estudio de filosofía en español (voseo rioplatense en toda la interfaz y los textos). La usa Juan, docente de filosofía en Ibagué, para estudiar por su cuenta y eventualmente con estudiantes. Es HTML + CSS + JavaScript sin dependencias ni paso de compilación: se abre haciendo doble clic en `index.html`, y además se publica en GitHub Pages como app instalable que funciona sin internet.

## Estructura

```
index.html                 Marcado de la app y carga de scripts EN ORDEN
estilos/agora.css          Todo el CSS (tokens de color claro/oscuro en :root)
datos/base.js              LEVELS (tradiciones) y los contenedores vacíos MODULES = [] y LECTURAS = {}
datos/modulos/<trad>/<id>.js   Una ficha por archivo: MODULES.push({...}) + LECTURAS.<id> = {...}
datos/transversal.js       POLYSEMOUS_TERMS y CONSTELACIONES (no pertenecen a una sola ficha)
datos/examen.js            EXAMEN_FINAL: banco del examen final integrador
app/agora.js               Toda la lógica: estado, progreso, navegación, motores de ejercicios
herramientas/verificar.js  Chequeo de integridad de los datos (correrlo después de cada cambio)
herramientas/empaquetar.js Genera dist/agora.html: la app entera en un solo archivo (tipografías incluidas) para compartir (dist/ no se versiona)
fuentes/                   Tipografías .woff2 incluidas en el proyecto + fuentes.css (@font-face)
iconos/, manifest.webmanifest, sw.js   App instalable (PWA) y caché para usarla sin internet (solo por http/https)
pruebas/navegador.js       Pruebas en Chromium con Playwright: recorre toda la app, también sin internet y desde file://
package.json               Solo para las pruebas (Playwright); la app no instala nada
../.github/workflows/      pruebas.yml (corre verificar + pruebas en cada cambio) y pages.yml (publica Agora/ en GitHub Pages)
```

El orden de las fichas en la app es el orden de los `<script>` en `index.html`. Para agregar una ficha nueva: crear `datos/modulos/<trad>/<id>.js` con la misma forma que las demás y agregar su `<script>` en el lugar que corresponda.

## Reglas que no hay que romper

- **Scripts clásicos, nada de ES modules ni `fetch`**: la app se abre desde `file://`, donde los módulos y `fetch` fallan por CORS. Las variables globales (`MODULES`, `LECTURAS`, funciones de `app/agora.js`) se comparten entre los `<script>` y los `onclick` del HTML las usan.
- **Sin dependencias externas**: ni siquiera las tipografías, que están en `fuentes/`. El service worker (`sw.js`) solo se registra por http(s); desde `file://` no hace nada. Lee `index.html` y `fuentes/fuentes.css` para saber qué guardar, así que una ficha nueva queda incluida sola; cambiar `CACHE` en `sw.js` solo si hace falta forzar que se borre la caché vieja.
- **No usar `claude.use(...)` ni capacidades de artefactos de claude.ai.** Ágora dejó de ser un artefacto; se eliminaron a propósito Dialogar y Revisor (IA en vivo) porque eran poco confiables. Todo es determinista.
- **Progreso en `localStorage`**, clave `"agora-progress-v1"`, forma `{conceptDone, obraDone, examHistory, streak:{last,count}, moduleQuiz, respuestas, repaso}`. `respuestas` (lo escrito en Preguntas y Escribir: `{texto, visto?, eval?}` por `"<id>:preguntas|actividades:<i>"`) y `repaso` (repetición espaciada: `{caja:0-5, prox}` por `"<id>:conceptos|obras:<i>"`) son opcionales y se agregaron sin migrar. No cambiar la forma sin migrar; todo campo nuevo pasa por `sanitizeProgress`. `conceptDone["<id>:conceptos"]`, `repaso` y `respuestas` guardan **índices** de `conceptos`, `obras`, `cuestionario` y `actividades`: al editar una ficha, agregar al final y no reordenar, o el progreso guardado apuntará a otra tarjeta o pregunta.
- Fechas de racha y exámenes en **hora local** (no UTC).

## Cómo se recorre una ficha

Las pestañas van en tres grupos (`DET_GRUPOS` en `app/agora.js`): **Estudiar** (Panorama con tesis, conexión y ruta sugerida · Conceptos · Obras · Lecturas · Diálogo), **Practicar** (Repaso mixto · Emparejar · Cuestionario final) y **Pensar** (Preguntas · Razonamiento · Argumentos · Dilema · Escribir).
- `cuestionario:[{q,p}]` se muestra en **Preguntas**: se escribe primero, después se ve la respuesta del modelo y se autoevalúa.
- `actividades` se desarrollan en **Escribir**, que guarda el texto, permite bajarlo en `.txt` y tiene la ruleta.
- Los enunciados que se arman con definiciones pasan por `pista()` / `enmascarar()`, que tapa las palabras del propio título y recorta el texto. Así la respuesta no aparece en la pregunta.
- Tarjetas con repetición espaciada (cajas de Leitner: 1, 3, 7, 14 y 30 días). Las tarjetas vencidas de todas las fichas aparecen en **Repaso de hoy**, en el Inicio.

## Identidad visual

- **Tipografías** (Google Fonts): Instrument Serif para títulos (tiene un solo peso: nunca `font-weight` de negrita en títulos), Newsreader para leer y Bricolage Grotesque para la interfaz (`--font-ui`; `--font-mono` apunta a la misma).
- **Color**: papel cálido y tinta oscura; cada tradición tiene su color (`--eu`, `--asia`, `--am`, `--me` y sus `-soft`), usado como acento: cabeceras, monogramas, puntos de avance y letra capital. Nunca como relleno saturado ni con bordes negros gruesos.
- **Patrones** por tradición (`.pat-eu`, `.pat-asia`, `.pat-am`, `.pat-me`): textura suave en las cabeceras de tradición y en el encabezado de cada ficha.
- **Monogramas** (`MONOGRAMA` en `app/agora.js`) en lugar de emojis para identificar fichas. Una ficha nueva necesita su entrada.
- **Tema claro/oscuro**: sigue al sistema hasta que se toca el botón ☾/☀; la elección se guarda en `localStorage["agora-tema"]`, aparte del progreso.
- **Inicio**: portada, Repaso de hoy, Tu recorrido (`fraccionFicha`), insignias (`INSIGNIAS`) y una tarjeta por tradición con sus fichas y su estado (nueva, empezada o completa).

## Forma de una ficha

```
{ id, trad:"europea"|"asiatica"|"americana"|"metodo", nombre, fechas, escuela, icon, profundizada:true,
  tesis, obras:[{t,d}], conceptos:[{t,d}], conexion (HTML corto),
  dialogo:{titulo, lineas:[{quien, texto, nota?}]},
  actividades:[{t,d}], cuestionario:[{q,p}],
  // ejercicios avanzados (opcionales; sin ellos la pestaña muestra "todavía no disponible"):
  cadena:{ titulo, intro, inicio:"n1", nodos:{ n1:{ pregunta, opciones:[ {texto, va:"n2a"} | {texto, final:{tipo:"bien"|"revisar", texto}} ] } } },
  reconstruccion:[ { titulo, consigna, piezas:[{id, texto, tipo:"premisa"|"conclusion"|"distractor"}], ordenCorrecto:[ids], explicacion } ],
  dilemas:[ { titulo, intro, pasos:[ {id, situacion, opciones:[{texto, consecuencia, va:"<id de paso>"|null}]} ], rubrica:[...] } ] }

LECTURAS.<id> = { lecturas:[{titulo, fuente, url, extracto (template literal, párrafos), comentario}],
                  preguntasLectura:[{q, opciones:[...], r:"<texto exacto de la opción correcta>", why}] }

CONSTELACIONES: [{ id, tema, nucleo, entradas:[{mod:"<id>", postura}], pregunta:{enunciado, opciones, correcta:<índice>, explicacion} }]

EXAMEN_FINAL = { seleccion:[{fichas:[ids], situacion, pregunta, opciones:[4], correcta:<índice>, explicacion}],
                 vf:[{fichas, afirmacion, verdadero:true|false, explicacion}],
                 emparejar:[{mod:"<id>", idea}] }
```

El examen final saca 12 preguntas de selección, 8 de verdadero o falso y 6 ideas para emparejar (de autores distintos y al menos tres tradiciones). Las opciones se mezclan, así que las explicaciones de constelaciones y del examen nombran cada opción por su contenido, nunca por su posición; `verificar.js` lo controla. El resultado va a `examHistory` con `trad:"final"`.

Nivel esperado de cada ficha: ~9 conceptos y 5 obras con párrafos sustanciales, diálogo escrito a mano, 3 actividades, 5 preguntas de cuestionario. Ejercicios avanzados: `cadena` de 3-4 niveles con al menos dos ramas que enseñen algo distinto (no "correcta vs. absurda"); 2 `reconstruccion` con argumentos reales del autor, exactamente un distractor y una explicación que nombre el punto débil; 1 `dilema` de 2-3 decisiones con rúbrica de 6-7 criterios de autoevaluación (no se califica automáticamente).

## Criterios de contenido

- Precisión textual: no inventar posiciones ni citas. Si no hay certeza de un número de pasaje, describir el pasaje en vez de inventar la referencia.
- Las controversias se tratan con sobriedad, sin limpiarlas ni regodearse: Heidegger y 1933, Nishida y la Escuela de Kioto en la guerra, el lenguaje eugenésico de Vasconcelos, el eurocentrismo de Hegel.
- Dificultad: los distractores de opción múltiple y minijuegos salen primero de la misma ficha y de autores cercanos (`distractorTiers`, `pickClosest`), pero autores de la misma escuela no se usan como distractores entre sí (`ESCUELAS` en `app/agora.js`). Una opción incorrecta tiene que ser inequívocamente incorrecta para quien sabe el tema.

## Después de cada cambio

1. `node herramientas/verificar.js` — tiene que terminar en "✓ Sin errores". También lista qué fichas faltan de ejercicios avanzados.
2. `node pruebas/navegador.js` — tiene que terminar en "✓ Todas las pruebas pasaron" (usa Playwright: `npm install` y `npx playwright install chromium` la primera vez). GitHub Actions corre las dos cosas en cada pull request.
3. Si se tocó algo visual, mirar las pestañas tocadas en el navegador (claro, oscuro y celular).
4. Si Juan quiere compartir la app como un solo archivo: `node herramientas/empaquetar.js` → `dist/agora.html`.

## Trabajo pendiente (a octubre de 2026)

1. ~~**Ejercicios avanzados**~~: hechos en todas las fichas (octubre de 2026). Al agregar una ficha nueva, incluirlos desde el principio; `verificar.js` avisa si faltan.
2. ~~**Constelaciones**~~: 9 temas (octubre de 2026): conocer, el yo, la nada, saber y hacer, la verdad, el lenguaje, quién está dentro de la historia, la muerte y quién tiene derecho a la palabra. Las opciones de la pregunta se muestran mezcladas, así que la `explicacion` nombra cada opción por su contenido, nunca por su posición («la tercera…»).
3. ~~**Examen final**~~: hecho (octubre de 2026), en Exámenes. El banco cubre todas las fichas; `verificar.js` avisa si una ficha nueva no tiene preguntas. Para ampliarlo, agregar preguntas en `datos/examen.js`.
4. **Decidido por Juan (octubre de 2026)**: los dilemas se quedan como están, sin suavizar, incluidos el de Kant («La pregunta del padre»), el de Nagarjuna (diagnóstico de TDAH), el de Nishida (1943) y los pasajes de Vasconcelos. Juan decidió que no hace falta cotejar con una edición las citas escritas de memoria.
5. ~~Buscador~~ (arriba, atajo `/`; busca por comienzo de palabra, sin tildes, en fichas, conceptos, obras, lecturas, preguntas, glosario y constelaciones) y ~~copia y reinicio del progreso~~ (en Progreso: guardar y recuperar un `.json`, reiniciar todo escribiendo REINICIAR; y reiniciar una ficha desde su Panorama): hechos en octubre de 2026.
6. ~~**Rediseño visual**~~ (octubre de 2026): estilo «biblioteca viva», elegido por Juan entre maquetas (combinación de «Biblioteca» y «Plaza viva», con el color más contenido). Ver «Identidad visual» más arriba.
7. ~~**Fichas nuevas**~~ (octubre de 2026): Hannah Arendt, Simone de Beauvoir y María Zambrano (europeas), Sor Juana Inés de la Cruz y Estanislao Zuleta (americanas). Son 30 fichas. Antes no había ninguna mujer. Las fuentes de sus lecturas son artículos de Wikipedia en español: la red del entorno de trabajo no permitía verificar otros enlaces. Al agregar una ficha: su `<script>` en `index.html`, su entrada en `MONOGRAMA`, preguntas en `datos/examen.js` y, si corresponde, en `ESCUELAS`.
8. **Devolución de lo escrito con ideas clave** (en curso).
