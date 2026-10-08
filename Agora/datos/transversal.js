/* Ágora · datos transversales (no pertenecen a una sola ficha). */

const POLYSEMOUS_TERMS = [
  ["Sustancia","Para Aristóteles, lo que existe por sí mismo (un caballo, una persona); para Descartes, aquello que no necesita de otra cosa para existir (mente y cuerpo, cada una)."],
  ["Forma","En Platón, una entidad eterna e independiente (la Forma de Belleza); en Aristóteles, lo que organiza la materia de una cosa concreta — nunca separada de ella."],
  ["Vacío / Nada","En Nagarjuna (śūnyatā), ausencia de esencia fija, no inexistencia; en Nishida (mu), el fondo sin forma del que emerge todo ser — tampoco simple ausencia; muy distinto de la 'nada' que angustia a Heidegger."],
  ["Naturaleza","En Laozi, el curso espontáneo de las cosas que hay que seguir (wú wéi); en Aristóteles, la esencia interna que hace que algo se comporte como se comporta."],
  ["Razón","En Kant, la facultad que impone las condiciones a priori del conocimiento; en Hegel, la estructura racional de la realidad y la historia mismas — mucho más que una facultad humana."],
  ["Experiencia","En James (empirismo radical), todo lo directamente vivido, incluidas las relaciones entre las cosas; en Nishida, un estado 'puro' anterior a la distinción sujeto-objeto."],
  ["Liberación","En el budismo (moksha/nirvana), reconocer una verdad que disuelve el sufrimiento; en Dussel, un proceso histórico-político de los pueblos oprimidos frente al sistema colonial."]
];

/* ============ CONSTELACIONES: un mismo problema, varias fichas ============
   Cada entrada referencia un módulo por id; nombre, ícono y tradición se leen de MODULES. */
const CONSTELACIONES = [
 { id:"conocimiento", tema:"¿Qué es conocer?",
   nucleo:"Maestro y discípulo coinciden en que la ciencia es de lo universal y necesario. Discrepan sobre dónde está ese universal y cómo llega a nosotros: ¿separado de las cosas y recordado, o en las cosas mismas y abstraído de la experiencia?",
   entradas:[
     {mod:"platon", postura:"Conocer es captar lo que no cambia. Las cosas sensibles fluyen y admiten a la vez propiedades contrarias —estos palos son iguales para uno y desiguales para otro—, así que de ellas solo hay opinión (doxa). El saber (episteme) tiene por objeto las Formas, que existen separadas de lo sensible, y el alma no las extrae de la experiencia: las reconoce porque ya las contempló (anámnesis). Los sentidos no son la fuente del conocimiento sino, a lo sumo, su ocasión: ver dos palos casi iguales despierta el recuerdo de la Igualdad misma. Por eso la educación es un «giro del alma» desde las sombras hacia lo inteligible, y la cima del saber es la dialéctica, que asciende sin imágenes hasta el Bien."},
     {mod:"aristoteles", postura:"Conocer también es captar la forma, pero la forma está en las cosas mismas, unida a su materia (hilemorfismo): no hay un mundo aparte donde buscarla. Por eso el conocimiento empieza por los sentidos: de muchas percepciones nace la memoria, de muchos recuerdos la experiencia, y de la experiencia el universal que funda el arte y la ciencia (Metafísica I, 1; Analíticos segundos II, 19). El intelecto no recuerda nada anterior al nacimiento: es como una tablilla en la que todavía no hay nada escrito en acto (Acerca del alma III, 4), y abstrae de lo percibido la forma que ya estaba en lo percibido. La ciencia sigue siendo de lo universal —en eso Aristóteles sigue siendo platónico—, pero ese universal se encuentra en lo particular, no por encima de él."}
   ],
   pregunta:{
     enunciado:"Un estudiante mira un triángulo dibujado a mano en el pizarrón y dice: «esto no es exactamente un triángulo». ¿Qué explicación de ese juicio daría Aristóteles?",
     opciones:[
       "Lo reconoce porque recuerda la Forma del Triángulo, que su alma contempló antes de nacer.",
       "Lo reconoce porque abstrajo la forma triangular de muchos casos percibidos; ese universal existe en las cosas, no separado de ellas.",
       "Lo reconoce porque su mente impone a lo percibido una forma a priori de la sensibilidad, el espacio.",
       "No lo reconoce en sentido estricto: solo tiene opiniones sobre sombras, y ningún razonamiento puede mejorarlas."
     ],
     correcta:1,
     explicacion:"La abstracción a partir de muchos casos percibidos, con un universal que existe en las cosas, es la vía de Aristóteles (Analíticos segundos II, 19). El recuerdo de una Forma contemplada antes de nacer es la respuesta de Platón en el Fedón, justamente la que Aristóteles rechaza. Las formas a priori de la sensibilidad son de Kant, más de dos mil años después. Y la última opción caricaturiza a Platón: para él la dialéctica sí permite salir de las sombras."
   } }
];
