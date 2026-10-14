/* Ágora · diagramas de cada ficha (pestaña «Diagramas»). Forma y tipos: ver app/diagramas.js. */
const DIAGRAMAS = {
  platon: [
    {tipo:"niveles", titulo:"La línea dividida", eje:"más realidad y más verdad",
     intro:"República VI: los grados del ser y del conocer, de lo más alto a lo más bajo.",
     nodos:[
      {t:"Inteligencia (noesis)", d:"Captación directa de las Formas, sin imágenes, ascendiendo dialécticamente hasta el Bien."},
      {t:"Pensamiento (dianoia)", d:"El saber matemático: razona sobre lo inteligible pero apoyándose en figuras y partiendo de hipótesis."},
      {t:"Creencia (pistis)", d:"La opinión sobre las cosas sensibles mismas: plantas, animales, objetos fabricados."},
      {t:"Imaginación (eikasia)", d:"El grado más bajo: tomar por reales las sombras y los reflejos."}]}
  ],
  peirce: [
    {tipo:"ciclo", titulo:"Las tres inferencias de la investigación",
     intro:"Cómo avanza la investigación según Peirce: una hipótesis se propone, se desarrolla y se pone a prueba.",
     nodos:[
      {t:"Abducción", d:"Ante un hecho sorprendente, se propone una hipótesis que lo haría esperable."},
      {t:"Deducción", d:"Se derivan de la hipótesis consecuencias que se puedan observar."},
      {t:"Inducción", d:"Se ponen a prueba esas consecuencias con la experiencia; el resultado confirma, corrige o descarta la hipótesis y abre una nueva sorpresa."}]}
  ],
  aristoteles: [
    {tipo:"partes", titulo:"Las cuatro causas", centro:"¿Por qué existe esta estatua?",
     intro:"Explicar algo es dar sus cuatro causas.",
     nodos:[
      {t:"Material", d:"De qué está hecha: el bronce."},
      {t:"Formal", d:"Qué es, su forma o esencia: la figura que la define."},
      {t:"Eficiente", d:"Qué la produjo: el escultor y su arte."},
      {t:"Final", d:"Para qué existe: el fin al que se orienta, por ejemplo honrar a alguien."}]}
  ],
  laozi: [
    {tipo:"polos", titulo:"Los opuestos que se generan", polos:{izq:"yin", der:"yang"},
     intro:"Capítulo 2: cada término nace junto con su contrario.",
     nodos:[
      {a:"Lo blando", b:"Lo duro", d:"El agua, blanda, vence a lo duro: el libro privilegia el polo débil."},
      {a:"El vacío", b:"Lo lleno", d:"Lo útil de la vasija es su hueco (capítulo 11)."},
      {a:"No actuar", b:"Actuar", d:"El wú wéi no es pasividad sino acción que no fuerza."}]}
  ],
  nagarjuna: [
    {tipo:"cuadrantes", titulo:"El tetralema (catuṣkoṭi)",
     intro:"Las cuatro alternativas que Nagarjuna examina y rechaza para cualquier tesis sobre la naturaleza propia de algo.",
     nodos:[
      {t:"Es", d:"Afirmar que la cosa existe con naturaleza propia."},
      {t:"No es", d:"Negarla por completo: el nihilismo."},
      {t:"Es y no es", d:"Afirmar ambas a la vez."},
      {t:"Ni es ni no es", d:"Negar ambas. También se rechaza: la vacuidad no es una quinta tesis."}]}
  ],
  dussel: [
    {tipo:"capas", titulo:"Centro y periferia",
     intro:"La modernidad vista desde fuera de su centro.",
     nodos:[
      {t:"Centro", d:"Europa, que desde 1492 se constituye como centro del sistema-mundo."},
      {t:"Periferia", d:"América, África y Asia, incorporadas como periferia explotada."},
      {t:"Exterioridad", d:"Lo que el sistema no logra incluir: el Otro que interpela desde fuera."}]}
  ],
  descartes: [
    {tipo:"secuencia", titulo:"El camino de la duda",
     intro:"Meditaciones I y II: de la duda a la primera certeza.",
     nodos:[
      {t:"Duda de los sentidos", d:"Los sentidos a veces engañan; no conviene fiarse de quien engañó una vez."},
      {t:"Argumento del sueño", d:"No hay señales seguras para distinguir la vigilia del sueño."},
      {t:"Genio maligno", d:"Hipótesis de un engañador poderoso que nos haría equivocar incluso en matemáticas."},
      {t:"Pienso, existo", d:"Aun si me engaña, para ser engañado tengo que existir: la primera certeza."}]}
  ]
};
