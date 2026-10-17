# Encargo: una ficha nueva completa para Ágora

Ágora es una app de estudio de filosofía en español (working dir /home/user/agora/Agora). La usa Juan,
docente de filosofía en Ibagué (Colombia), con estudiantes de 16 a 20 años.

## Leé primero
1. /home/user/agora/Agora/CLAUDE.md completo: forma de una ficha, «Nivel esperado», «Criterios de contenido»
   (precisión, no inventar posiciones ni citas; controversias con sobriedad, sin suavizar ni regodearse) y
   la descripción de cada complemento (términos, claves, vida, diagramas, textos).
2. Una ficha modelo completa: /home/user/agora/Agora/datos/modulos/europea/arendt.js (y si querés otra,
   datos/modulos/europea/platon.js). Imitá su estructura, extensión, densidad y tono: voseo rioplatense
   cuando se habla al estudiante («Explicá…», «¿Qué harías?»), registro expositivo en los conceptos.
3. Sus complementos, en el formato exacto que vas a entregar:
   `node herramientas/fichas/complementos.js arendt`
4. Para no repetir y para conectar con fichas existentes: `node herramientas/fichas/ficha.js <ids>`
   (la lista de fichas existentes sale de: `grep -o 'modulos/[a-z]*/[a-z]*' index.html`).

## Qué entregar
A) El archivo de la ficha, en la ruta indicada abajo: `MODULES.push({...});` + `LECTURAS.<id> = {...};`, con
   todo lo de la ficha modelo: id, trad, nombre, fechas («c. 624–546 a.C. · Mileto»), escuela, icon (un emoji),
   profundizada:true, tesis, ~9 conceptos y 5 obras con párrafos sustanciales (como la modelo), conexion (HTML
   corto que conecte con 1-2 fichas existentes y diga qué no confundir), dialogo escrito a mano (8-12 líneas,
   con objeciones fuertes), 3 actividades, 5 preguntas de cuestionario {q, p} con respuestas modelo largas,
   cadena (3-4 niveles, ramas que enseñen algo distinto), 2 reconstruccion (argumentos reales, exactamente un
   distractor, explicación que nombre el punto débil), 1 dilema (2-3 decisiones, rúbrica de 6-7 criterios;
   situaciones concretas, puede ser contexto colombiano, sin suavizar) y LECTURAS (1 síntesis comentada con
   fuente y url + 3 preguntasLectura). Usá template literals o comillas simples/dobles con cuidado: el archivo
   tiene que ser JavaScript válido; dentro de los textos usá «» para citar.
B) Un JSON de complementos en la ruta indicada, con esta forma (la misma que imprime complementos.js):
   {"monograma": "<1-3 letras, p. ej. «Ta»>", "epoca": <año de la obra principal, negativo si es a.C.>,
    "terminos": [uno por concepto, en orden: {k, tapar} o {q}],
    "claves": [una lista de 3-4 ideas por pregunta del cuestionario, en orden],
    "vida": {lema, secciones:[4-5, la última «Por qué piensa así»], hitos:[6-9]},
    "diagramas": [2, de tipos distintos],
    "textos": [1-2 extractos literales: ver abajo],
    "examen": {"seleccion": [2], "vf": [2], "emparejar": [2 {mod:"<id>", idea}]}}
   Las preguntas de examen pueden relacionar la ficha nueva con fichas existentes (fichas:[...]); las explicaciones
   nombran las opciones por su contenido, nunca por su posición.

## Textos literales (TEXTOS)
Seguí herramientas/fichas/encargo-textos.md (red:
es.wikisource y Gutenberg; User-Agent descriptivo; una petición cada 2 s). Solo dominio público con URL, o
traducción de trabajo desde un original libre. Si no hay fuente libre alcanzable, entregá "textos": [] y decilo.

## Antes de terminar
Corré desde /home/user/agora/Agora:
`node herramientas/fichas/checkficha.js <id> <ruta-ficha> <ruta-json>`
y corregí hasta que diga OK. No toques ningún otro archivo del repo (ni index.html ni los datos compartidos: yo
los integro). Respondé "ok", y cualquier duda de contenido (hechos inciertos, pasajes interpretados).
