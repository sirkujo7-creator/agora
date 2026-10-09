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
   } },
 { id:"yo", tema:"¿Hay un yo?",
   nucleo:"Descartes encuentra en el yo que piensa la única certeza que resiste la duda. Desde India y Japón llegan tres maneras distintas de desarmar esa certeza: el yo no tiene naturaleza propia (Nagarjuna), lo indudable no es el yo individual sino una conciencia sin dueño (Shankara), el yo aparece después de la experiencia y no antes (Nishida).",
   entradas:[
     {mod:"descartes", postura:"Puedo dudar de los sentidos, de las matemáticas y hasta de tener cuerpo, porque un genio maligno podría engañarme. Pero si me engaña, yo existo: la proposición «yo soy, yo existo» es necesariamente verdadera cada vez que la pienso (Meditación segunda). Y lo que soy, en sentido estricto, es una cosa que piensa (res cogitans): una sustancia cuya esencia es pensar, distinta del cuerpo, y cuya existencia conozco antes y con más certeza que la de cualquier otra cosa."},
     {mod:"nagarjuna", postura:"Si el yo fuera idéntico al cuerpo, las sensaciones y los pensamientos, nacería y moriría con ellos; si fuera distinto de ellos, no podría tener ninguna de sus características (Versos fundamentales, capítulo 18). El yo es una designación que depende de esos componentes: existe convencionalmente, se lo puede nombrar y responsabilizar, pero buscado por sí mismo no se encuentra. Que haya pensamiento no prueba que haya una sustancia que piensa: prueba que hay pensar."},
     {mod:"shankara", postura:"Nadie duda de su propia existencia: nadie piensa «yo no soy». En eso Shankara coincide con Descartes, y por eso mismo saca la conclusión opuesta. Lo indudable es la conciencia testigo que está presente en toda experiencia, incluida la duda, y esa conciencia no es el yo individual con su cuerpo, su nombre y su historia: eso es superposición (adhyāsa). El atman que queda cuando se descarta todo lo demás —ni esto, ni esto— es idéntico a Brahman, y no le pertenece a nadie."},
     {mod:"nishida", postura:"El cogito ya es una reflexión, y toda reflexión llega tarde. Antes de que haya un «yo» que piensa y un «algo» pensado, hay experiencia pura: el escuchar antes de que se distingan el que escucha y la campana. No es que haya experiencia porque hay individuo, sino que hay individuo porque hay experiencia (prefacio de Una investigación sobre el bien). El yo cartesiano no es el punto de partida: es un producto de la división que la reflexión introduce."}
   ],
   pregunta:{
     enunciado:"Un estudiante dice: «Puedo dudar de todo, menos de que soy yo el que duda». ¿Cuál de estas respuestas es la de Nagarjuna?",
     opciones:[
       "Tenés razón: ese yo que duda es una sustancia pensante, distinta del cuerpo, y la conocés antes que cualquier otra cosa.",
       "Lo indudable no es tu yo individual, sino la conciencia testigo presente en toda duda, que es idéntica a Brahman.",
       "Ese «yo» es una designación que depende del cuerpo, las sensaciones y los pensamientos: existe convencionalmente, pero buscado por sí mismo no se encuentra.",
       "Antes de que digas «yo dudo» hubo un dudar que todavía no era de nadie: el yo aparece cuando reflexionás sobre la experiencia."
     ],
     correcta:2,
     explicacion:"La respuesta de Nagarjuna es la del yo como designación dependiente, real en la verdad convencional y vacío de naturaleza propia (capítulo 18 de los Versos fundamentales). La sustancia pensante distinta del cuerpo es Descartes, el punto de partida que las otras tres discuten. La conciencia testigo idéntica a Brahman es Shankara: acepta que algo es indudable, pero no es el yo individual. El dudar que todavía no era de nadie es Nishida: el yo no es lo primero, sino el resultado de la reflexión. Notá que Shankara y Nagarjuna, que suelen confundirse, llegan a lugares opuestos: uno a una conciencia sin dueño, el otro a la ausencia de cualquier sustrato."
   } },
 { id:"nada", tema:"¿Qué es la nada?",
   nucleo:"Para buena parte de la tradición europea, la nada es la simple ausencia de ser y no hay nada que pensar en ella. Cuatro fichas la toman en serio y no dicen lo mismo. El cruce entre Heidegger y la Escuela de Kioto no es solo temático: Tanabe y Nishitani, discípulos de Nishida, estudiaron con Heidegger en Friburgo.",
   entradas:[
     {mod:"laozi", postura:"Treinta rayos convergen en un cubo, pero es el vacío del centro lo que hace útil la rueda; se moldea la arcilla para hacer una vasija, pero es su hueco lo que la hace servir (Daodejing, capítulo 11). Lo que es y lo que no es se generan mutuamente (capítulo 2), y los diez mil seres nacen del ser, y el ser nace del no ser (capítulo 40). La nada no es carencia: es lo que hace lugar, la fecundidad de lo que no está lleno."},
     {mod:"heidegger", postura:"La ciencia se ocupa de lo que es «y de nada más», y en esa frase la nada aparece sin que nadie la piense. En «¿Qué es metafísica?» (1929) sostiene que la nada no se alcanza por negación lógica, sino que se revela en la angustia, cuando lo que es en su totalidad se nos escurre. «La nada misma nadea»: en ese retirarse, por primera vez aparece que hay algo. De ahí la pregunta fundamental: ¿por qué hay ente y no más bien nada? Carnap tomó la frase como ejemplo de pseudoproposición sin sentido, y la polémica sigue siendo una buena entrada al problema."},
     {mod:"nagarjuna", postura:"La vacuidad no es la nada. Decir que las cosas están vacías no es decir que no existen, sino que nada existe por sí mismo, con naturaleza propia: todo surge en dependencia. Y la vacuidad misma está vacía: no es un fundamento ni un fondo del que salgan las cosas. Quien convierte la vacuidad en una nada sustancial, en un abismo o en un origen, cae en el error que Nagarjuna llama incurable."},
     {mod:"nishida", postura:"Hay que distinguir la nada relativa, que es la ausencia de algo y se opone al ser, de la nada absoluta (zettai mu), que no se opone a nada porque no es una cosa. La nada absoluta es el último lugar (basho): aquello en lo cual todo ser se determina, sin ser a su vez algo determinado. Como el campo visual, que no aparece entre las cosas vistas y sin embargo es donde todas aparecen."}
   ],
   pregunta:{
     enunciado:"En una clase alguien dice: «La nada no es un tema: donde no hay nada, no hay nada que pensar». ¿Cuál de estas respuestas corresponde a Heidegger?",
     opciones:[
       "Es el vacío del cubo lo que hace útil la rueda: lo que no es tiene una función, y el ser nace del no ser.",
       "La nada no se alcanza negando: se revela en la angustia, cuando todo lo que es se nos escurre, y solo ahí aparece que hay algo y no nada.",
       "Decir que las cosas están vacías no es decir que no hay nada, sino que nada existe por sí mismo, ni siquiera la vacuidad.",
       "La nada absoluta no se opone al ser: es el lugar en el que todo ser se determina, como el campo visual en el que aparece lo visto."
     ],
     correcta:1,
     explicacion:"La angustia en la que todo se escurre es Heidegger, en «¿Qué es metafísica?»: la nada se manifiesta así, no en un juicio negativo. El vacío del cubo de la rueda es Laozi (capítulos 11 y 40): la nada como hueco fecundo. La vacuidad que no es nada es Nagarjuna: tampoco es un fondo. El campo visual es Nishida: la nada absoluta como lugar. Fijate en las dos parejas que más se confunden: Heidegger y Nishida, porque los dos hablan de una nada que no es simple ausencia; y Laozi y Nagarjuna, porque las traducciones ponen «vacío» para los dos, aunque en Laozi el vacío produce y en Nagarjuna no hay nada que produzca."
   } },
 { id:"saber-hacer", tema:"¿Saber es ya hacer?",
   nucleo:"¿Por qué alguien que sabe lo que tiene que hacer no lo hace? Aristóteles le dio un nombre al problema, la akrasia, y lo explicó sin negar que exista. Wang Yangming lo disuelve negando que ese saber sea genuino. Dewey y Dōgen, por caminos muy distintos, ponen en duda que conocer y actuar sean dos momentos separados.",
   entradas:[
     {mod:"aristoteles", postura:"Contra Sócrates, que sostenía que nadie obra mal a sabiendas, Aristóteles admite que existe el incontinente (akratēs): el que sabe y actúa en contra. Su solución es distinguir maneras de saber: se puede tener un conocimiento sin usarlo en el momento, como el borracho que recita versos de Empédocles sin entenderlos (Ética nicomaquea VII, 3). Y la virtud no se aprende como una teoría: se adquiere actuando, como el que se vuelve justo haciendo actos justos (libro II, 1)."},
     {mod:"wangyangming", postura:"Conocer y actuar son originalmente uno (zhīxíng héyī). Ver un hermoso color ya es amarlo; oler un mal olor ya es rechazarlo. Quien dice saber qué es la piedad filial y no la practica todavía no sabe: tiene un saber de palabras, separado de la acción por los deseos egoístas. El conocimiento es el comienzo de la acción y la acción es el cumplimiento del conocimiento."},
     {mod:"dewey", postura:"La separación entre conocer y hacer es una herencia griega que reflejaba un orden social: los libres contemplaban y los esclavos trabajaban. La ciencia experimental muestra otra cosa: se conoce interviniendo, modificando condiciones y observando consecuencias. Conocer es un modo de hacer dirigido, y por eso se aprende reconstruyendo experiencias reales, no acumulando información para un uso futuro."},
     {mod:"dogen", postura:"Práctica y realización son una sola cosa (shushō-ittō): no se practica primero para iluminarse después, como se estudia primero para aplicar después. Sentarse en zazen ya es la realización, y la práctica del principiante es la totalidad de la realización original (Bendōwa). Lo que se separa en un antes y un después —el saber que se aplica, la meta que se alcanza— es justamente el error."}
   ],
   pregunta:{
     enunciado:"Una estudiante sabe que fumar le hace daño, puede explicarlo con detalle, y sigue fumando. ¿Qué explicación daría Aristóteles?",
     opciones:[
       "En realidad no lo sabe: un saber que no mueve a actuar es todavía un saber de palabras, separado de la acción por un deseo.",
       "Lo sabe en un sentido, pero no lo tiene activo en el momento de actuar, como el borracho que recita versos sin entenderlos; y le falta el hábito que vuelve eficaz ese saber.",
       "Su saber es información desconectada de una situación problemática real: no se convirtió en un instrumento para reconstruir su propia experiencia.",
       "Dejar de fumar no es aplicar un saber que ya tiene: es una práctica que se realiza entera en cada momento en que no fuma."
     ],
     correcta:1,
     explicacion:"El borracho que recita versos es Aristóteles: admite la akrasia y la explica distinguiendo entre tener un conocimiento y usarlo (Ética nicomaquea VII, 3), y pone la virtud en el hábito. El saber de palabras separado por un deseo es Wang Yangming, que niega lo que Aristóteles admite: para él, saber y no hacer es no saber. El saber como instrumento para reconstruir la experiencia es Dewey. La práctica que se realiza entera en cada momento es una lectura de Dōgen: la práctica no aplica un saber previo. Aristóteles y Wang son el contraste más nítido: uno distingue modos de saber para explicar la akrasia; el otro distingue modos de saber para negar que sea saber."
   } },
 { id:"verdad", tema:"¿Qué hace verdadera a una creencia?",
   nucleo:"La respuesta de sentido común es que una creencia es verdadera si dice las cosas como son. Platón la formuló primero. Los pragmatistas la reemplazaron por la convergencia de la investigación (Peirce) o por la verificación en la experiencia (James), y se pelearon entre ellos. Nagarjuna, mucho antes, distinguió dos niveles de verdad sin que ninguno fuera una correspondencia con esencias.",
   entradas:[
     {mod:"platon", postura:"El discurso verdadero dice las cosas que son como son, y el falso dice cosas distintas de las que son (Sofista, 263b). Pero no todo lo que se puede decir con verdad es saber: de lo sensible, que cambia, solo hay opinión; el saber (epistēmē) tiene por objeto lo que no cambia, las Formas. La verdad no se fabrica ni se acuerda: se descubre, y se alcanza por la razón."},
     {mod:"nagarjuna", postura:"La enseñanza se apoya en dos verdades: la convencional (saṃvṛti), el mundo de los nombres, las causas y las prácticas, donde el fuego quema y la mentira es mentira; y la última (paramārtha), que es la vacuidad de todo eso. Las dos no son dos mundos, sino dos maneras de ver el mismo. Y la verdad última no es una tesis que corresponda a cómo son las cosas en sí, porque no hay un cómo son en sí."},
     {mod:"peirce", postura:"La verdad es la opinión destinada a ser aceptada al final por todos los que investigan, y lo real es lo que esa opinión representa («Cómo esclarecer nuestras ideas», 1878). No es lo que cree un individuo ni lo que conviene, sino aquello en lo que convergería una comunidad que siguiera investigando indefinidamente. Por eso es compatible con el falibilismo: ninguna creencia actual está garantizada."},
     {mod:"james", postura:"Las ideas verdaderas son las que podemos asimilar, validar, corroborar y verificar (Pragmatismo, sexta conferencia). La verdad no es una propiedad inmóvil: le sucede a una idea, que se vuelve verdadera por los acontecimientos. Lo verdadero es lo conveniente en nuestro modo de pensar, a la larga y en conjunto. Peirce, molesto con esta versión, rebautizó su propia doctrina como «pragmaticismo», un nombre, dijo, lo bastante feo como para que nadie se lo robara."}
   ],
   pregunta:{
     enunciado:"«Es verdad que la Tierra gira alrededor del Sol.» ¿Cuál de estas explicaciones de por qué es verdad corresponde a Peirce?",
     opciones:[
       "Porque dice las cosas como son, y se alcanza por la razón, no por la opinión de los sentidos.",
       "Porque se dejó verificar y nos guía bien en la experiencia: la verdad le sucedió a esa idea.",
       "Porque es la opinión en la que convergería cualquier comunidad que siguiera investigando el tiempo suficiente.",
       "Porque es verdadera en el nivel convencional; en el último, ni la Tierra ni el Sol tienen naturaleza propia."
     ],
     correcta:2,
     explicacion:"La convergencia de una comunidad que investiga es Peirce: la verdad como límite ideal de la investigación. La verificación en la experiencia es James, y la diferencia con Peirce es fina pero importante: James pone la verdad en la verificación que ocurre en la experiencia; Peirce, en una convergencia que puede no haber ocurrido todavía. Decir las cosas como son es Platón: correspondencia, y saber por la razón. Las dos verdades son Nagarjuna: la afirmación vale en la verdad convencional, pero no describe esencias."
   } },
 { id:"lenguaje", tema:"¿Las palabras copian el mundo?",
   nucleo:"Es tentador pensar que el lenguaje es una especie de espejo: cada palabra nombra una cosa, y una oración verdadera es una imagen fiel del mundo. Wittgenstein sostuvo algo así en el Tractatus y después lo abandonó. Zhuangzi, Dewey y Rorty, desde muy lejos entre sí, coinciden en que las palabras se parecen más a herramientas que a espejos, pero no por las mismas razones.",
   entradas:[
     {mod:"zhuangzi", postura:"La nasa sirve para atrapar peces: atrapado el pez, se olvida la nasa. La trampa sirve para las liebres: atrapada la liebre, se olvida la trampa. Las palabras sirven para el sentido: captado el sentido, se olvidan las palabras. «¿Dónde encontraré a alguien que haya olvidado las palabras, para poder hablar con él?» (capítulo 26). Y las distinciones del lenguaje —esto y aquello, correcto e incorrecto— dependen siempre del lugar desde el que se habla (capítulo 2)."},
     {mod:"wittgenstein", postura:"En el Tractatus, una proposición es una figura de un hecho. En las Investigaciones filosóficas lo abandona: el significado de una palabra es, en la mayoría de los casos, su uso en el lenguaje (§43). Hablar es participar en juegos de lenguaje —dar órdenes, contar, rezar, bromear— que son parte de formas de vida, y las palabras de un mismo concepto no comparten una esencia, sino parecidos de familia. Los problemas filosóficos nacen cuando el lenguaje se va de vacaciones."},
     {mod:"dewey", postura:"El lenguaje no nace para representar, sino para coordinar la acción entre personas: el significado surge en la comunicación, cuando algo se vuelve común a quienes actúan juntos (Experiencia y naturaleza, capítulo 5). Las palabras y las ideas son instrumentos para resolver situaciones problemáticas, y se evalúan por lo que permiten hacer, no por su parecido con una realidad ya hecha."},
     {mod:"rorty", postura:"Ningún vocabulario está más cerca de la realidad que otro: no hay un vocabulario propio del mundo que debamos copiar. Los vocabularios son herramientas, y se cambian cuando aparece uno que sirve mejor para nuestros propósitos, como Galileo no refutó a Aristóteles con sus propios términos, sino que propuso otros. La filosofía no debe ser el espejo de la naturaleza, sino una voz más en la conversación."}
   ],
   pregunta:{
     enunciado:"Dos personas discuten durante una hora si «libertad» significa realmente ausencia de obstáculos o capacidad de hacer cosas. ¿Qué les diría el segundo Wittgenstein?",
     opciones:[
       "Que el significado está en el uso: miren en qué juegos de lenguaje usa cada uno la palabra; probablemente no haya una esencia común, sino parecidos de familia.",
       "Que ninguna definición está más cerca de la realidad: son vocabularios distintos, y se elige por lo que cada uno permite para nuestros propósitos.",
       "Que discutir el nombre es aferrarse a la nasa: lo que importa es el sentido, y una vez captado se pueden olvidar las palabras.",
       "Que la palabra es un instrumento para la acción común: hay que ver qué problema práctico intentan resolver juntos al usarla."
     ],
     correcta:0,
     explicacion:"El significado como uso es Wittgenstein: juegos de lenguaje, parecidos de familia, en vez de una definición esencial. La elección entre vocabularios es Rorty, que comparte con Wittgenstein el rechazo del espejo, pero lo lleva a una tesis sobre la elección entre vocabularios. La nasa que se olvida es Zhuangzi. El instrumento para la acción común es Dewey: el lenguaje como instrumento de coordinación. Las cuatro rechazan que la palabra copie una esencia; la diferencia está en qué ponen en su lugar: el uso, la elección, el olvido o la acción común."
   } },
 { id:"historia", tema:"¿Quién está dentro de la historia?",
   nucleo:"Hegel escribió la versión más influyente de la historia universal, y en ella América y África quedaron afuera. Tres fichas latinoamericanas le responden de maneras incompatibles entre sí: invirtiendo la jerarquía sin abandonarla (Vasconcelos), pidiendo entrar en la historia con conciencia propia (Zea) o mostrando que esa historia se construyó negando a quienes dejó afuera (Dussel).",
   entradas:[
     {mod:"hegel", postura:"La historia universal va de Oriente a Occidente: Asia es el comienzo y Europa es, sin más, el final de la historia universal (Lecciones sobre la filosofía de la historia). América es la tierra del porvenir, y lo que acontece en ella es hasta ahora solo eco del Viejo Mundo. África, escribe, no es una parte histórica del mundo: no muestra movimiento ni desarrollo. No es un prejuicio al margen del sistema: es la consecuencia de entender la historia como el progreso de la conciencia de la libertad, medido con el modelo europeo."},
     {mod:"vasconcelos", postura:"América no es eco: es el laboratorio donde se formará la quinta raza, la raza cósmica, por la mezcla de las cuatro razas históricas, y donde empezará el período estético de la humanidad (La raza cósmica, 1925). Es una inversión explícita del racismo europeo que condenaba el mestizaje. Pero conserva su escala: en el período estético, «por extinción voluntaria, las estirpes más feas irán cediendo el paso a las más hermosas», y pone a las personas negras como ejemplo de lo que podría «redimirse» por absorción."},
     {mod:"zea", postura:"Usa el aparato de Hegel contra Hegel. América no es un territorio, sino una conciencia de su propia situación en una historia que no empezó ella. Lo que hace falta no es negar a Europa ni copiarla, sino asumir la propia historia —incluida la colonial— y filosofar desde ella: el resultado será filosofía sin más, sin adjetivo. Su reclamo es de reconocimiento: entrar en la historia universal como sujeto, no como eco."},
     {mod:"dussel", postura:"El problema no es que Europa haya dejado afuera a América: es que Europa se volvió centro al conquistarla. La modernidad no empieza en Descartes sino en 1492, y antes del «ego cogito» estuvo el «ego conquiro». La historia universal de Hegel no es una descripción equivocada, sino el mito que encubre a los pueblos que la modernidad necesitó negar. Por eso no basta con pedir entrar en esa historia: hay que pensar desde la exterioridad que ella produjo."}
   ],
   pregunta:{
     enunciado:"Hegel escribe que América es la tierra del porvenir y que lo que allí ocurre es solo eco del Viejo Mundo. ¿Cuál de estas respuestas es la de Dussel?",
     opciones:[
       "Asumamos nuestra historia y entremos en ella con conciencia propia: hace falta filosofar desde nuestra circunstancia y ser reconocidos en la historia universal.",
       "América no es eco: es el laboratorio donde se formará la raza cósmica, que superará a la civilización europea.",
       "Europa no fue un centro que después se extendió: se volvió centro al conquistar América, y su historia universal encubre a los pueblos que necesitó negar.",
       "Hegel tiene razón: la filosofía es europea por naturaleza, y en América solo puede imitarse."
     ],
     correcta:2,
     explicacion:"Europa que se vuelve centro al conquistar es Dussel: el centro se constituye por la conquista de su periferia, y la historia universal es un mito que encubre. Asumir la historia y ser reconocidos es Zea: pide entrar en la historia universal como sujeto, que es justamente lo que Dussel considera insuficiente. La raza cósmica es Vasconcelos, que invierte la jerarquía de Hegel sin abandonar la idea de razas superiores e inferiores. La filosofía europea por naturaleza no es de ninguno de los tres: es la conclusión que los tres, cada uno a su modo, rechazan."
   } },
 { id:"muerte", tema:"¿Cómo vivir sabiendo que vamos a morir?",
   nucleo:"Cuatro fichas, de tres tradiciones, enfrentan la muerte sin promesas de otra vida. Ninguna consuela en el sentido habitual. Heidegger pide asumirla como propia; Nietzsche, querer la vida entera otra vez; Zhuangzi, verla como una transformación más; Dōgen, ver cada momento completo en su propio lugar.",
   entradas:[
     {mod:"heidegger", postura:"La muerte no es un suceso que les ocurre a otros y que algún día me ocurrirá: es mi posibilidad más propia, la única que nadie puede asumir por mí. En la vida cotidiana la tapamos con el «se muere», que la convierte en algo impersonal y lejano. Anticiparla —no pensar en ella todo el tiempo, sino dejar de esconderla— me devuelve mi existencia como mía, finita y entera: es el ser-para-la-muerte de Ser y tiempo."},
     {mod:"nietzsche", postura:"El desafío no es la muerte, sino la vida. En La gaya ciencia (§341), un demonio te susurra que vas a vivir esta misma vida infinitas veces, con cada dolor y cada alegría en el mismo orden. ¿Lo maldecirías, o le dirías que nunca escuchaste nada más divino? El eterno retorno es una prueba: amor fati, querer que nada sea distinto, ni hacia adelante ni hacia atrás."},
     {mod:"zhuangzi", postura:"Cuando murió su esposa, su amigo Hui Shi lo encontró sentado, golpeando un cuenco y cantando. Zhuangzi le explicó que al principio sintió dolor como cualquiera, pero después vio que antes de nacer ella no tenía vida, ni forma, ni aliento; que en medio de lo indistinto hubo un cambio y apareció el aliento, otro cambio y apareció la forma, otro y apareció la vida; y que ahora había habido otro cambio, como el paso de las cuatro estaciones (capítulo 18). Seguir llorando, dijo, era no entender el destino."},
     {mod:"dogen", postura:"La leña no se convierte en ceniza: la leña está en su posición de leña, y la ceniza en la suya. Del mismo modo, la vida no se convierte en muerte: la vida es una posición en el tiempo y la muerte es una posición en el tiempo, como el invierno y la primavera, y no decimos que el invierno se convierte en primavera (Genjōkōan). Cada momento es completo, y no es solo el pasaje hacia el siguiente."}
   ],
   pregunta:{
     enunciado:"Una amiga perdió a su madre y te pregunta cómo se puede seguir viviendo sabiendo que todos vamos a morir. ¿Cuál de estas respuestas es la de Zhuangzi?",
     opciones:[
       "Asumiendo la muerte como tu posibilidad más propia, en lugar de esconderla en el «se muere» de todos: eso te devuelve tu vida como tuya.",
       "Preguntándote si querrías vivir esta misma vida infinitas veces, con todo su dolor, y aprendiendo a amarla así.",
       "Viendo que la vida y la muerte son transformaciones, como el paso de las estaciones: el dolor es natural, pero aferrarse a él es no entender el cambio.",
       "Viendo que la vida es una posición completa en el tiempo y la muerte es otra: la vida no se convierte en muerte, como la leña no se convierte en ceniza."
     ],
     correcta:2,
     explicacion:"Las transformaciones como estaciones son Zhuangzi y la muerte de su esposa (capítulo 18): primero el dolor, después la comprensión de la muerte como una transformación más. La leña y la ceniza son Dōgen, y es la respuesta que más se le parece: la diferencia es que Zhuangzi ve un flujo de cambios, mientras que Dōgen insiste en que cada posición —la vida, la muerte— es completa en sí misma y no un tramo de paso. Asumir la muerte como posibilidad más propia es Heidegger, el ser-para-la-muerte. Querer vivir esta vida infinitas veces es Nietzsche, el eterno retorno. Ninguna de las cuatro le promete a tu amiga volver a ver a su madre; cada una le ofrece otra manera de mirar."
   } }
];
