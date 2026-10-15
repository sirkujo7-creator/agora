# Encargo: textos originales (extractos literales) para Ágora

Ágora es una app de estudio de filosofía en español (working dir /home/user/agora/Agora). Leé primero
/home/user/agora/Agora/CLAUDE.md («Criterios de contenido»). Juan, el docente, pidió **lecturas extraídas
literalmente de las obras, no síntesis**. Vas a conseguir y preparar esos extractos.

Contenido de cada ficha (para elegir pasajes que dialoguen con sus conceptos):
`node herramientas/fichas/ficha.js <ids>`

## Acceso a la red (importante)
- Funcionan: es.wikisource.org (HTML y `index.php?title=<Página>&action=raw`, NO la API: está limitada),
  www.gutenberg.org (p. ej. `https://www.gutenberg.org/cache/epub/<n>/pg<n>.txt`, y la búsqueda
  `https://www.gutenberg.org/ebooks/search/?query=...`). ctext.org a veces responde 403; reintentá una vez y si no, seguí sin él.
- Usá siempre `curl -s -A "AgoraEstudio/1.0 (app educativa; https://github.com/sirkujo7-creator/agora)"` y no hagas
  más de una petición cada 2 segundos (encadená con un script de node que espere entre pedidos si hacés varias).
- Búsqueda en Wikisource: `https://es.wikisource.org/w/index.php?search=<términos>&fulltext=1&ns0=1`.

## Qué extracto vale
1. **Dominio público**: el texto del autor está en dominio público Y la traducción también. Una traducción
   española es usable si su traductor murió hace más de 80 años (antes de 1946) o es anónima y antigua
   (p. ej. Patricio de Azcárate, 1871–1875; Manuel García Morente murió en 1942). Si no sabés cuándo murió el
   traductor, NO la uses.
2. Si no hay traducción española libre, podés traducir vos al español un texto original en dominio público
   (griego/latín/alemán/inglés/chino clásico disponible en Gutenberg o ctext, o una traducción inglesa antigua
   en dominio público como la de James Legge). Marcalo como «Traducción de trabajo de Ágora a partir de …».
   Traducí con fidelidad, sin resumir ni embellecer.
3. **Copiá el texto exacto** de la fuente que descargaste (podés modernizar solo la ortografía obvia de la
   época, p. ej. «órden» → «orden», y decirlo en `traduccion`). Podés cortar con «[…]» para omitir frases, pero
   no reescribir. Nada de citas de memoria en esta categoría.
4. Extensión: 250–800 palabras por extracto, un pasaje célebre o central que se entienda solo.

## Qué entregar, por ficha: 1 o 2 extractos (2 cuando el autor lo amerita y hay buena fuente)
```
{ "titulo": "<nombre del pasaje, p. ej. «La alegoría de la caverna»>",
  "obra": "<obra>", "pasaje": "<ubicación precisa: libro, capítulo, sección o numeración estándar; si no estás seguro, describí («comienzo del libro VII»)>",
  "traduccion": "<traductor y año, o «Traducción de trabajo de Ágora a partir de …»>",
  "estado": "dominio público",
  "url": "<URL exacta de donde sale el texto>",
  "contexto": "<2–3 oraciones: dónde está el pasaje en la obra y qué pasa justo antes>",
  "texto": "<el extracto literal; párrafos separados por \n\n>",
  "glosas": [ {"frase": "<fragmento EXACTO que aparece tal cual en texto, 2–12 palabras>", "nota": "<explicación de 1–2 oraciones: término, alusión o idea>"} ],   // 4–7 glosas
  "preguntas": [ {"q": "<pregunta de comprensión del pasaje>", "opciones": ["…","…","…","…"], "r": "<texto exacto de la opción correcta>", "why": "<por qué, 1–2 oraciones>"} ]  // 2 preguntas
}
```
- Sin comillas dobles ASCII dentro de los textos (usá «»; si el original trae comillas, convertilas a «»).
- Las opciones incorrectas tienen que ser claramente incorrectas para quien leyó bien el pasaje.

Escribí JSON válido en el archivo indicado abajo: {"<id>": [extracto, ...], ...}. Si para alguna ficha no
encontrás ningún texto que cumpla las reglas, poné [] y explicá por qué. Validá con node (parsea; cada
glosa.frase aparece literalmente en texto; r está en opciones; 250–800 palabras). No modifiques archivos
del repo. Respondé "ok", la lista de fuentes usadas y cualquier duda (sobre todo de derechos o de fidelidad).
