# Ágora — guía del proyecto para Claude Code

Ágora es una app de estudio de filosofía en español (voseo rioplatense en toda la interfaz y los textos). La usa Juan, docente de filosofía en Ibagué, para estudiar por su cuenta y eventualmente con estudiantes. Es HTML + CSS + JavaScript sin dependencias ni paso de compilación: se abre haciendo doble clic en `index.html`.

## Estructura

```
index.html                 Marcado de la app y carga de scripts EN ORDEN
estilos/agora.css          Todo el CSS (tokens de color claro/oscuro en :root)
datos/base.js              LEVELS (tradiciones) y los contenedores vacíos MODULES = [] y LECTURAS = {}
datos/modulos/<trad>/<id>.js   Una ficha por archivo: MODULES.push({...}) + LECTURAS.<id> = {...}
datos/transversal.js       POLYSEMOUS_TERMS y CONSTELACIONES (no pertenecen a una sola ficha)
app/agora.js               Toda la lógica: estado, progreso, navegación, motores de ejercicios
herramientas/verificar.js  Chequeo de integridad de los datos (correrlo después de cada cambio)
herramientas/empaquetar.js Genera dist/agora.html: la app entera en un solo archivo para compartir
```

El orden de las fichas en la app es el orden de los `<script>` en `index.html`. Para agregar una ficha nueva: crear `datos/modulos/<trad>/<id>.js` con la misma forma que las demás y agregar su `<script>` en el lugar que corresponda.

## Reglas que no hay que romper

- **Scripts clásicos, nada de ES modules ni `fetch`**: la app se abre desde `file://`, donde los módulos y `fetch` fallan por CORS. Las variables globales (`MODULES`, `LECTURAS`, funciones de `app/agora.js`) se comparten entre los `<script>` y los `onclick` del HTML las usan.
- **Sin dependencias externas** salvo las fuentes de Google Fonts (si no hay internet, caen en las serif/mono del sistema).
- **No usar `claude.use(...)` ni capacidades de artefactos de claude.ai.** Ágora dejó de ser un artefacto; se eliminaron a propósito Dialogar y Revisor (IA en vivo) porque eran poco confiables. Todo es determinista.
- **Progreso en `localStorage`**, clave `"agora-progress-v1"`, forma `{conceptDone, obraDone, examHistory, streak:{last,count}, moduleQuiz, respuestas, repaso}`. `respuestas` (lo escrito en Preguntas y Escribir: `{texto, visto?, eval?}` por `"<id>:preguntas|actividades:<i>"`) y `repaso` (repetición espaciada: `{caja:0-5, prox}` por `"<id>:conceptos|obras:<i>"`) son opcionales y se agregaron sin migrar. No cambiar la forma sin migrar; todo campo nuevo pasa por `sanitizeProgress`. `conceptDone["<id>:conceptos"]`, `repaso` y `respuestas` guardan **índices** de `conceptos`, `obras`, `cuestionario` y `actividades`: al editar una ficha, agregar al final y no reordenar, o el progreso guardado apuntará a otra tarjeta o pregunta.
- Fechas de racha y exámenes en **hora local** (no UTC).

## Cómo se recorre una ficha

Las pestañas van en tres grupos (`DET_GRUPOS` en `app/agora.js`): **Estudiar** (Panorama con tesis, conexión y ruta sugerida · Conceptos · Obras · Lecturas · Diálogo), **Practicar** (Repaso mixto · Emparejar · Cuestionario final) y **Pensar** (Preguntas · Razonamiento · Argumentos · Dilema · Escribir).
- `cuestionario:[{q,p}]` se muestra en **Preguntas**: se escribe primero, después se ve la respuesta del modelo y se autoevalúa.
- `actividades` se desarrollan en **Escribir**, que guarda el texto, permite bajarlo en `.txt` y tiene la ruleta.
- Los enunciados que se arman con definiciones pasan por `pista()` / `enmascarar()`, que tapa las palabras del propio título y recorta el texto. Así la respuesta no aparece en la pregunta.
- Tarjetas con repetición espaciada (cajas de Leitner: 1, 3, 7, 14 y 30 días). Las tarjetas vencidas de todas las fichas aparecen en **Repaso de hoy**, en el Inicio.

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
```

Nivel esperado de cada ficha: ~9 conceptos y 5 obras con párrafos sustanciales, diálogo escrito a mano, 3 actividades, 5 preguntas de cuestionario. Ejercicios avanzados: `cadena` de 3-4 niveles con al menos dos ramas que enseñen algo distinto (no "correcta vs. absurda"); 2 `reconstruccion` con argumentos reales del autor, exactamente un distractor y una explicación que nombre el punto débil; 1 `dilema` de 2-3 decisiones con rúbrica de 6-7 criterios de autoevaluación (no se califica automáticamente).

## Criterios de contenido

- Precisión textual: no inventar posiciones ni citas. Si no hay certeza de un número de pasaje, describir el pasaje en vez de inventar la referencia.
- Las controversias se tratan con sobriedad, sin limpiarlas ni regodearse: Heidegger y 1933, Nishida y la Escuela de Kioto en la guerra, el lenguaje eugenésico de Vasconcelos, el eurocentrismo de Hegel.
- Dificultad: los distractores de opción múltiple y minijuegos salen primero de la misma ficha y de autores cercanos (`distractorTiers`, `pickClosest`), pero autores de la misma escuela no se usan como distractores entre sí (`ESCUELAS` en `app/agora.js`). Una opción incorrecta tiene que ser inequívocamente incorrecta para quien sabe el tema.

## Después de cada cambio

1. `node herramientas/verificar.js` — tiene que terminar en "✓ Sin errores". También lista qué fichas faltan de ejercicios avanzados.
2. Abrir `index.html` y recorrer las pestañas tocadas (sin errores en la consola).
3. Si Juan quiere compartir la app como un solo archivo: `node herramientas/empaquetar.js` → `dist/agora.html`.

## Trabajo pendiente (a octubre de 2026)

1. **Ejercicios avanzados** (`cadena`, `reconstruccion`, `dilemas`) para las 6 fichas que faltan, en tandas chicas: Vasconcelos, Zea → Dussel, Rorty, West, Falacias. `verificar.js` muestra la lista actualizada.
2. **Constelaciones**: hoy hay un solo tema (Platón–Aristóteles, "¿Qué es conocer?"). Faltan temas que crucen tradiciones (por ejemplo Nagarjuna–Descartes, Wittgenstein–Dewey, Heidegger–Nishida, que ya aparecen como puentes en los Tips).
3. **Examen final**: un examen integrador de las 25 fichas con selección múltiple estilo Saber Pro (enunciado con situación y cuatro opciones plausibles), verdadero/falso y emparejamiento cruzado entre filósofos. Sin preguntas abiertas ni calificación por IA.
4. **Para revisar con Juan**: el dilema de Kant "La pregunta del padre" plantea el caso de un estudiante de 16 años que le cuenta a un docente que es gay, con un padre violento. Está tratado con cuidado, pero Juan tiene que decidir si lo deja, lo suaviza o lo reemplaza antes de usarlo con estudiantes.
5. Ideas sin decidir: buscador de fichas, botón de tema claro/oscuro, exportar y reiniciar el progreso completo (hoy se exporta solo lo escrito, ficha por ficha).
