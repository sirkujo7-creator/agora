/* Ágora · tarjetas de concepto (Conceptos y Repaso de hoy).
   TERMINOS.<id>[i] corresponde a conceptos[i] de la ficha:
   - {k, tapar}: el concepto tiene un nombre para recordar. El frente muestra las primeras
     oraciones con k (y cada expresión de «tapar») reemplazado por un único hueco.
   - {q}: el título es un tema descriptivo. El frente hace la pregunta q.
   Al dar vuelta la tarjeta se ve el título y la explicación completa. Mismo orden que
   conceptos: al agregar un concepto, agregar su entrada al final. */
const TERMINOS = {
  tales: [
    {k:"arché", tapar:["principio"]},
    {k:"physis", tapar:["naturaleza"]},
    {k:"ápeiron", tapar:["ilimitado","indeterminado","Anaximandro"]},
    {k:"contrarios", tapar:["opuestos"]},
    {k:"rarefacción", tapar:["condensación","enrarecido","condensado"]},
    {k:"hilozoísmo", tapar:[]},
    {k:"logos", tapar:["mito"]},
    {k:"doxografía", tapar:["doxógrafos"]}
  ],
  heraclito: [
    {k:"logos", tapar:[]},
    {k:"común", tapar:["comunes"]},
    {k:"unidad de los contrarios", tapar:["opuestos","contrarios"]},
    {k:"armonía", tapar:[]},
    {k:"fuego", tapar:[]},
    {k:"pólemos", tapar:["guerra"]},
    {k:"medida", tapar:["desmesura"]},
    {k:"devenir", tapar:[]},
    {k:"alma", tapar:["almas"]}
  ],
  parmenides: [
    {k:"estí", tapar:["esti"]},
    {q:"¿Por qué la diosa declara impracticable el camino del «no es», y qué maneras habituales de hablar quedan cerradas con él?"},
    {k:"noein", tapar:[]},
    {k:"alétheia", tapar:["verdad"]},
    {k:"doxa", tapar:["opinión"]},
    {k:"sēmata", tapar:["signos","señales","señal"]},
    {k:"krisis", tapar:["decisión","juicio","juzgar"]},
    {q:"¿Qué principio usa Parménides para negar que lo que es haya nacido, y por qué lo conservaron incluso quienes rechazaron su conclusión?"},
    {k:"reducción al absurdo", tapar:["absurdo"]}
  ],
  socrates: [
    {k:"problema socrático", tapar:[]},
    {k:"sabiduría humana", tapar:[]},
    {k:"élenchos", tapar:["refutación"]},
    {k:"aporía", tapar:[]},
    {k:"ironía", tapar:["eironeia","ironizando"]},
    {k:"mayéutica", tapar:[]},
    {k:"daimonion", tapar:[]},
    {k:"intelectualismo moral", tapar:[]},
    {k:"cuidado del alma", tapar:[]}
  ],
  platon: [
    {k:"Formas", tapar:["Forma","Ideas"]},
    {k:"doxa", tapar:["episteme"]},
    {k:"anámnesis", tapar:["reminiscencia"]},
    {k:"alma tripartita", tapar:["tres partes"]},
    {k:"justicia", tapar:["justa","justo"]},
    {k:"Idea del Bien", tapar:["Bien"]},
    {k:"dialéctica", tapar:["dialéctico"]},
    {k:"Eros", tapar:["amor"]},
    {k:"filósofo-rey", tapar:["filósofos gobiernen"]}
  ],
  aristoteles: [
    {k:"hilemorfismo", tapar:[]},
    {k:"acto y potencia", tapar:["acto","potencia"]},
    {k:"causa", tapar:["causas"]},
    {k:"eudaimonía", tapar:["felicidad"]},
    {k:"término medio", tapar:["medio"]},
    {k:"héxis", tapar:["hábito"]},
    {k:"phrónesis", tapar:["prudencia","sabiduría práctica","prudente"]},
    {k:"silogismo", tapar:[]},
    {k:"zoon politikon", tapar:["animal político"]}
  ],
  epicuro: [
    {k:"ataraxia", tapar:["aponía"]},
    {k:"catastemático", tapar:["catastemáticos"]},
    {k:"deseos vacíos", tapar:["vacíos","vanos"]},
    {k:"tetrafármaco", tapar:["remedio cuádruple"]},
    {k:"phrónesis", tapar:["prudencia"]},
    {k:"átomos", tapar:["átomo","vacío"]},
    {k:"clinamen", tapar:["desvío","desvían"]},
    {k:"pacto", tapar:["acuerdo"]},
    {k:"amistad", tapar:["amigos","amigo"]}
  ],
  estoicos: [
    {q:"¿Qué cosas dependen de nosotros según Epicteto, cuáles no, y por qué la distinción no invita a la pasividad?"},
    {k:"asentimiento", tapar:["asentir","asiento"]},
    {k:"logos", tapar:[]},
    {k:"destino", tapar:["heimarméne","hados"]},
    {k:"virtud", tapar:[]},
    {k:"indiferentes", tapar:["adiáphora"]},
    {k:"apátheia", tapar:["ausencia de pasiones"]},
    {k:"oikeíosis", tapar:["apropiación"]},
    {q:"¿En qué consiste la premeditación de los males y por qué no es un ejercicio morboso?"}
  ],
  agustin: [
    {k:"interioridad", tapar:[]},
    {q:"¿Qué responde Agustín al escéptico que le objeta que quizá se engaña?"},
    {k:"iluminación", tapar:["maestro interior"]},
    {k:"privación", tapar:[]},
    {k:"libre albedrío", tapar:["albedrío"]},
    {k:"gracia", tapar:[]},
    {k:"distensión del alma", tapar:[]},
    {k:"orden del amor", tapar:[]},
    {k:"dos ciudades", tapar:[]}
  ],
  anselmo: [
    {k:"fides quaerens intellectum", tapar:["fe que busca entender","creo para entender"]},
    {k:"razones necesarias", tapar:[]},
    {k:"aliquid quo nihil maius cogitari possit", tapar:["algo mayor que lo cual nada puede pensarse","aquello mayor que lo cual nada puede pensarse"]},
    {k:"argumento ontológico", tapar:[]},
    {k:"existencia necesaria", tapar:[]},
    {k:"isla perdida", tapar:[]},
    {k:"satisfacción", tapar:[]},
    {k:"rectitud", tapar:["recto"]},
    {k:"libertad del albedrío", tapar:["libertad"]}
  ],
  hildegarda: [
    {k:"umbra viventis luminis", tapar:["sombra de la luz viviente","luz viviente"]},
    {k:"hombre interior", tapar:[]},
    {k:"viriditas", tapar:["verdor"]},
    {k:"huevo cósmico", tapar:["huevo"]},
    {k:"microcosmos", tapar:["mundo pequeño"]},
    {k:"symphonia", tapar:["sinfonía"]},
    {k:"autoridad profética", tapar:["profética"]},
    {k:"teología monástica", tapar:[]}
  ],
  tomas: [
    {q:"¿Cómo articula Tomás la fe y la razón, y qué hace cuando una conclusión filosófica parece contradecir la fe?"},
    {k:"cinco vías", tapar:["vías"]},
    {q:"¿Qué distingue Tomás en las criaturas, y por qué solo en Dios coinciden las dos cosas?"},
    {k:"creación", tapar:["crear","creado"]},
    {k:"analogía", tapar:[]},
    {k:"ley eterna", tapar:[]},
    {k:"ley natural", tapar:[]},
    {k:"forma del cuerpo", tapar:[]},
    {k:"abstracción", tapar:[]}
  ],
  ockham: [
    {k:"nominalismo", tapar:["nominalista","nominalistas"]},
    {q:"¿En qué sentido es universal un concepto para Ockham, si en sí mismo es tan singular como cualquier cosa?"},
    {k:"lenguaje mental", tapar:["oratio mentalis"]},
    {k:"suposición", tapar:[]},
    {k:"principio de economía", tapar:["navaja"]},
    {k:"conocimiento intuitivo", tapar:["intuitivo","intuición","intuitiva"]},
    {k:"potencia absoluta", tapar:["potencia ordenada"]},
    {q:"¿Depende el bien moral solo de la voluntad de Dios para Ockham, o tiene un papel la recta razón?"},
    {k:"uso de hecho", tapar:["usus facti"]}
  ],
  maquiavelo: [
    {k:"verità effettuale", tapar:["verdad efectiva","La verdad efectiva"]},
    {k:"virtù", tapar:["Virtù","virtud"]},
    {k:"fortuna", tapar:["La fortuna"]},
    {k:"ocasión", tapar:["occasione","La ocasión"]},
    {k:"necesidad", tapar:["necessità","La necesidad"]},
    {k:"humor", tapar:["humores"]},
    {k:"armas propias", tapar:[]},
    {q:"¿Qué forma de gobierno combina principado, aristocracia y gobierno popular para que cada parte vigile a las otras?"},
    {k:"principios", tapar:["origen"]}
  ],
  pascalmontaigne: [
    {k:"ensayo", tapar:["essai","ensayar"]},
    {k:"suspensión", tapar:["suspenden el juicio"]},
    {k:"costumbre", tapar:[]},
    {k:"barbarie", tapar:["bárbaros"]},
    {q:"¿Qué dos rasgos opuestos ve Pascal en el ser humano, unidos en la imagen de la caña que piensa?"},
    {k:"diversión", tapar:["divertissement"]},
    {q:"¿Qué dos maneras de razonar distingue Pascal según el tipo de principios con que trabajan?"},
    {k:"corazón", tapar:[]},
    {k:"apostar", tapar:[]}
  ],
  bacon: [
    {k:"ídolos", tapar:["idola","eidola"]},
    {k:"tribu", tapar:[]},
    {k:"caverna", tapar:[]},
    {k:"foro", tapar:["forum","mercado"]},
    {k:"teatro", tapar:[]},
    {k:"anticipación de la naturaleza", tapar:["anticipación"]},
    {k:"exclusión", tapar:["descarta"]},
    {k:"forma", tapar:["formas"]},
    {k:"imperio humano", tapar:["dominio"]}
  ],
  descartes: [
    {q:"¿Cómo se llama el procedimiento de tratar provisoriamente como falso todo lo que admita la menor razón de duda, para encontrar un fundamento firme?"},
    {k:"genio maligno", tapar:["hiperbólicas"]},
    {k:"cogito", tapar:["pienso, luego soy","yo soy, yo existo"]},
    {q:"¿Qué criterio de verdad extrae Descartes de la primera certeza, y cómo lo definen los Principios?"},
    {k:"innatas", tapar:["Innata"]},
    {k:"res cogitans", tapar:["Cosa que piensa"]},
    {k:"res extensa", tapar:[]},
    {q:"¿Cómo explica Descartes que una decisión mueva un brazo y una herida duela, si mente y cuerpo son sustancias distintas?"},
    {k:"generosidad", tapar:[]}
  ],
  hobbeslocke: [
    {k:"estado de naturaleza", tapar:[]},
    {q:"¿Qué condición describe Hobbes en el capítulo XIII del Leviatán, cuando falta un poder común que contenga a todos?"},
    {k:"ley de naturaleza", tapar:["ley natural"]},
    {k:"pacto", tapar:[]},
    {k:"soberano", tapar:[]},
    {k:"consentimiento", tapar:[]},
    {k:"propiedad", tapar:[]},
    {k:"tolerancia", tapar:[]},
    {k:"tabula rasa", tapar:["papel en blanco"]}
  ],
  spinoza: [
    {k:"sustancia", tapar:["sustancias"]},
    {k:"Atributo", tapar:["atributo","atributos"]},
    {k:"Modo", tapar:["modos"]},
    {k:"Deus sive Natura", tapar:["Dios, o sea, la Naturaleza"]},
    {k:"conatus", tapar:["esfuerzo"]},
    {k:"afecto", tapar:["Un afecto","afectos","afección"]},
    {k:"servidumbre", tapar:[]},
    {k:"idea adecuada", tapar:["adecuada","inadecuadas"]},
    {k:"amor intelectual de Dios", tapar:["amor intelectual"]}
  ],
  leibniz: [
    {k:"mónada", tapar:["Mónada","monás"]},
    {k:"percepción", tapar:["Percibir","apercepción"]},
    {k:"armonía preestablecida", tapar:[]},
    {k:"razón suficiente", tapar:[]},
    {q:"¿Qué principio niega que existan en la naturaleza dos seres perfectamente iguales?"},
    {q:"¿Cómo llama Leibniz al carácter de una verdad que puede ser cierta de antemano aunque su opuesto sea posible?"},
    {q:"¿Qué sostiene Leibniz sobre el mundo que existe, comparado con todos los que Dios podía crear?"},
    {k:"Teodicea", tapar:["theós","díke"]},
    {k:"característica universal", tapar:["alfabeto de los pensamientos humanos"]}
  ],
  hume: [
    {k:"impresiones", tapar:["impresión","principio de copia"]},
    {k:"cuestiones de hecho", tapar:["horquilla de Hume"]},
    {k:"conexión necesaria", tapar:[]},
    {k:"costumbre", tapar:["hábito"]},
    {k:"inducción", tapar:[]},
    {k:"haz o colección de percepciones", tapar:[]},
    {k:"pasiones", tapar:["pasión"]},
    {q:"¿Qué observa Hume sobre el paso de las proposiciones con «es» a las que dicen «debe», y por qué importa?"},
    {k:"simpatía", tapar:["simpatizamos"]}
  ],
  rousseau: [
    {k:"estado de naturaleza", tapar:["El estado de naturaleza","naturaleza"]},
    {k:"piedad", tapar:["La piedad"]},
    {k:"amor propio", tapar:["El amor propio"]},
    {k:"perfectibilidad", tapar:[]},
    {q:"¿Qué acto, según Rousseau, consiste en la enajenación total de cada asociado a la comunidad y hace nacer al pueblo como cuerpo colectivo?"},
    {k:"voluntad general", tapar:["generales"]},
    {k:"libertad moral", tapar:["moral"]},
    {k:"educación negativa", tapar:["negativa"]},
    {q:"¿Qué profesión de fe propone Rousseau al final del Contrato social, cuyos artículos fija el soberano como sentimientos de sociabilidad?"}
  ],
  kant: [
    {q:"¿Qué cambio propone Kant cuando invita a suponer que los objetos se rigen por nuestro modo de conocer, y no al revés?"},
    {k:"juicio sintético a priori", tapar:["sintético","a priori"]},
    {k:"intuición pura", tapar:["Intuir"]},
    {k:"categorías", tapar:["conceptos puros del entendimiento"]},
    {q:"¿Cómo distingue Kant la cosa tal como se nos aparece de la cosa considerada con independencia de nuestro modo de conocerla?"},
    {k:"buena voluntad", tapar:[]},
    {k:"imperativo categórico", tapar:["categórico"]},
    {k:"dignidad", tapar:[]},
    {k:"autonomía", tapar:["autónoma"]}
  ],
  hegel: [
    {k:"dialéctica", tapar:["dialéctico"]},
    {k:"Aufhebung", tapar:["aufheben"]},
    {k:"negación determinada", tapar:[]},
    {k:"reconocimiento", tapar:["reconoce","Anerkennung"]},
    {k:"espíritu", tapar:["Geist"]},
    {k:"eticidad", tapar:["Sittlichkeit"]},
    {k:"sociedad civil", tapar:["bürgerliche Gesellschaft"]},
    {q:"¿Cómo llama Hegel al modo en que la historia realiza un fin racional a través de pasiones individuales que no lo buscan?"},
    {k:"efectividad", tapar:["efectivamente","Wirklichkeit"]}
  ],
  schopenhauer: [
    {k:"representación", tapar:["Vorstellung"]},
    {k:"razón suficiente", tapar:["principio de razón"]},
    {k:"voluntad", tapar:["querer","Wille"]},
    {k:"principio de individuación", tapar:["principium individuationis"]},
    {k:"sufrimiento", tapar:["sufrir"]},
    {k:"contemplación estética", tapar:["contemplación","contemplar"]},
    {k:"carácter", tapar:["caracteres"]},
    {k:"compasión", tapar:["Mitleid","compadecer"]},
    {k:"negación de la voluntad", tapar:["negación","negar"]}
  ],
  kierkegaard: [
    {k:"individuo", tapar:["individuos","den Enkelte"]},
    {q:"¿Qué nombre reciben las tres maneras de vivir que describe Kierkegaard, y por qué no son etapas de una maduración?"},
    {k:"angustia", tapar:["angustiarse"]},
    {k:"desesperación", tapar:["desesperado","desesperar"]},
    {k:"salto", tapar:["saltar","saltos"]},
    {k:"subjetividad", tapar:["subjetiva","subjetivo"]},
    {k:"suspensión teleológica", tapar:["suspensión","teleológica"]},
    {k:"comunicación indirecta", tapar:["comunicación","seudónimos"]},
    {q:"¿Cómo llama Kierkegaard a una sociedad en la que todos son cristianos por nacimiento, y por qué dice que allí nadie lo es?"}
  ],
  marx: [
    {k:"modo de producción", tapar:["modos de producción","Un modo"]},
    {q:"¿Con qué imagen arquitectónica resume Marx, en el prólogo de 1859, la relación entre la economía y el derecho, la política y las ideas?"},
    {q:"¿Qué enfrentamiento, según el Manifiesto, recorre la historia de todas las sociedades hasta hoy, y cómo se define una clase?"},
    {k:"enajenación", tapar:["alienación","enajenacion"]},
    {k:"ideología", tapar:["ideologia"]},
    {k:"fetiche", tapar:["fetichismo","fetichista"]},
    {k:"plusvalía", tapar:["plusvalia"]},
    {k:"praxis", tapar:["práctica"]},
    {k:"dictadura del proletariado", tapar:["dictadura"]}
  ],
  mill: [
    {k:"mayor felicidad", tapar:[]},
    {k:"placeres superiores", tapar:["mayor calidad"]},
    {q:"¿Cómo explica Mill que la justicia parezca valer por sí misma, más fuerte que cualquier cálculo de utilidad?"},
    {k:"daño", tapar:["dañe"]},
    {k:"soberano", tapar:[]},
    {k:"dogma muerto", tapar:["prejuicio"]},
    {k:"mayoría", tapar:["parte más numerosa"]},
    {k:"individualidad", tapar:[]},
    {k:"artificial", tapar:["antinatural"]}
  ],
  nietzsche: [
    {q:"¿Qué anuncia el loco de La gaya ciencia con su linterna, y por qué no es una prueba de ateísmo?"},
    {k:"nihilismo", tapar:["nihilista","nihilistas"]},
    {k:"genealogía", tapar:["genealogia","La genealogía de la moral"]},
    {k:"ressentiment", tapar:["resentimiento","rencor"]},
    {k:"mala conciencia", tapar:[]},
    {k:"voluntad de poder", tapar:["La voluntad de poder"]},
    {k:"eterno retorno", tapar:[]},
    {k:"Übermensch", tapar:["Ubermensch","superhombre","suprahombre"]},
    {k:"Perspectivismo", tapar:["perspectiva"]}
  ],
  husserl: [
    {k:"psicologismo", tapar:[]},
    {k:"intencionalidad", tapar:[]},
    {k:"nóema", tapar:["nóesis"]},
    {k:"actitud natural", tapar:[]},
    {k:"Epojé", tapar:["entre paréntesis"]},
    {k:"variación eidética", tapar:["eidos"]},
    {k:"retención", tapar:["protención"]},
    {k:"empatía", tapar:["Einfühlung"]},
    {k:"mundo de la vida", tapar:[]}
  ],
  heidegger: [
    {k:"Dasein", tapar:["ser-ahí"]},
    {k:"ser-en-el-mundo", tapar:[]},
    {k:"diferencia ontológica", tapar:["olvido del ser"]},
    {k:"a la mano", tapar:["Zuhandenheit"]},
    {q:"¿Cómo llama Heidegger al sujeto anónimo de la vida cotidiana, ese cualquiera que no es nadie y que habla en el «se» de se dice y se hace?"},
    {k:"angustia", tapar:["Angst"]},
    {q:"¿Cómo llama Heidegger a la relación del Dasein con su muerte entendida como su posibilidad más propia, que atraviesa toda la existencia?"},
    {k:"Cuidado", tapar:["Sorge"]},
    {k:"Gestell", tapar:["imposición","estructura de emplazamiento","dispositivo"]}
  ],
  wittgenstein: [
    {k:"figura", tapar:["Bild"]},
    {q:"¿Qué distinción del Tractatus separa lo que una proposición presenta como hecho de lo que solo se hace visible en ella?"},
    {k:"juego de lenguaje", tapar:["juegos","juego"]},
    {k:"uso", tapar:[]},
    {k:"parecidos", tapar:["familia"]},
    {k:"forma de vida", tapar:["manera de vivir"]},
    {k:"seguir", tapar:["seguirla","sigue"]},
    {k:"lenguaje privado", tapar:["privadamente"]},
    {k:"gramática", tapar:[]}
  ],
  ortega: [
    {k:"circunstancia", tapar:["circum-stantia"]},
    {q:"¿Cómo llama Ortega a la vida de cada uno, en tanto raíz en la que toda otra realidad tiene que aparecer?"},
    {k:"quehacer", tapar:["faena"]},
    {k:"razón vital", tapar:["raciovitalismo","Ni vitalismo ni racionalismo"]},
    {k:"perspectiva", tapar:["punto de vista"]},
    {k:"razón histórica", tapar:["Historia como sistema"]},
    {k:"generación", tapar:["generaciones"]},
    {k:"creencias", tapar:["Ideas y creencias","creencia"]},
    {k:"hombre-masa", tapar:["La rebelión de las masas","masa"]}
  ],
  zambrano: [
    {k:"razón poética", tapar:["poesía"]},
    {q:"¿Qué forma de pensar, cuyo modelo es san Agustín, propone Zambrano frente al sistema como método para las verdades de la propia vida?"},
    {k:"sagrado", tapar:[]},
    {k:"persona", tapar:["personas"]},
    {k:"historia sacrificial", tapar:[]}
  ],
  arendt: [
    {k:"totalitarismo", tapar:[]},
    {k:"derecho a tener derechos", tapar:[]},
    {k:"vida activa", tapar:["vita activa"]},
    {k:"natalidad", tapar:["nacimiento","haber nacido"]},
    {k:"pluralidad", tapar:[]},
    {q:"¿Qué expresión usó Arendt para decir que crímenes monstruosos pueden cometerse sin que su autor sea un monstruo?"},
    {k:"Pensar", tapar:["pensar","piensa"]},
    {k:"juicio", tapar:["Juzgar","juzgar","juzga"]},
    {k:"poder", tapar:[]}
  ],
  sartre: [
    {q:"¿Qué quiere decir Sartre con que en el ser humano la existencia va antes que la esencia, a diferencia de un objeto fabricado?"},
    {k:"libertad", tapar:["libre"]},
    {k:"angustia", tapar:[]},
    {k:"mala fe", tapar:[]},
    {q:"¿Qué distingue el ser de las cosas del ser de la conciencia en El ser y la nada?"},
    {k:"mirada", tapar:["mira","mirón"]},
    {q:"¿Qué relación hay, según Sartre, entre la situación en que vivimos y lo que nos proponemos?"},
    {k:"compromiso", tapar:[]},
    {k:"práctico-inerte", tapar:[]}
  ],
  frankfurt: [
    {k:"teoría crítica", tapar:[]},
    {q:"¿Qué relación entre el pensamiento antiguo y la razón moderna ilustra la imagen de Ulises atado al mástil?"},
    {k:"razón instrumental", tapar:["instrumental"]},
    {k:"industria cultural", tapar:[]},
    {k:"no idéntico", tapar:[]},
    {k:"aura", tapar:[]},
    {k:"a contrapelo", tapar:[]},
    {k:"pensamiento unidimensional", tapar:["unidimensional"]},
    {k:"acción comunicativa", tapar:[]}
  ],
  beauvoir: [
    {k:"lo Otro", tapar:["inesencial"]},
    {k:"llegar a ser", tapar:[]},
    {k:"situación", tapar:["situacion"]},
    {k:"trascendencia", tapar:["inmanencia","trascender"]},
    {q:"¿Cómo llama Beauvoir a la aceptación, por parte de muchas mujeres, de un lugar subordinado que les trae ventajas?"},
    {k:"ambigüedad", tapar:["ambiguedad","ambiguo"]},
    {q:"¿Cómo se llama la actitud de quien trata un valor como absoluto, independiente de toda libertad que lo elija?"},
    {k:"eterno femenino", tapar:["esencia de «la mujer»"]},
    {k:"reciprocidad", tapar:["recíproco","recíproca","reciproca"]}
  ],
  levinas: [
    {k:"Mismo", tapar:[]},
    {k:"totalidad", tapar:["Totalidad"]},
    {k:"infinito", tapar:["infinita"]},
    {k:"rostro", tapar:["rostros"]},
    {q:"¿Cómo llama Levinas al existir anónimo, sin nadie que exista, que se vive en el insomnio y en el horror?"},
    {k:"responsabilidad", tapar:["respondo","responder"]},
    {k:"sustitución", tapar:["sustitucion"]},
    {k:"tercero", tapar:[]},
    {q:"¿Qué distinción usa Levinas para separar el acto de dirigirse a alguien del contenido que se afirma?"}
  ],
  foucault: [
    {k:"episteme", tapar:[]},
    {k:"genealogía", tapar:["La genealogía","genealogia"]},
    {k:"poder-saber", tapar:["poder y saber se implican"]},
    {q:"¿Qué forma de poder trabaja sobre cada cuerpo con la fila, el horario, la vigilancia y el examen para hacerlo a la vez más útil y más obediente?"},
    {k:"panoptismo", tapar:["Panóptico","panoptico"]},
    {k:"biopoder", tapar:["biopolítica","biopolitica"]},
    {k:"gubernamentalidad", tapar:["arte de gobernar"]},
    {k:"cuidado de sí", tapar:["epimeleia heautou","cuidado de si"]},
    {k:"parresía", tapar:["parresia"]}
  ],
  avicena: [
    {k:"hombre volante", tapar:["volante"]},
    {q:"¿Qué distinción permite decir que saber qué es algo no basta para saber si existe?"},
    {q:"¿Cómo llama Avicena a lo que, considerado solo en su esencia, puede existir o no existir?"},
    {k:"Ser necesario", tapar:["necesario","Necesario","wajib al-wujud"]},
    {k:"Emanación", tapar:["emanación","fayd"]},
    {k:"intelecto agente", tapar:["dador de las formas"]},
    {k:"estimativa", tapar:["wahm"]},
    {k:"intuición", tapar:["hads"]}
  ],
  ghazali: [
    {k:"Taqlid", tapar:["taqlid","autoridad"]},
    {k:"Yaqin", tapar:["certeza","cierto"]},
    {k:"Kalam", tapar:["kalam","teología racional"]},
    {k:"Falsafa", tapar:["falsafa","filosofía de tradición griega"]},
    {q:"¿Cómo responde Al-Ghazali al argumento de que una causa eterna tiene que producir un mundo eterno?"},
    {k:"costumbre", tapar:["'ada","ocasionalismo"]},
    {q:"¿Qué tesis de los filósofos declaró Al-Ghazali incredulidad, y qué límites puso a esa acusación?"},
    {k:"Dhawq", tapar:["gusto"]},
    {k:"Qalb", tapar:["corazón"]}
  ],
  averroes: [
    {k:"i'tibar", tapar:["I'tibar"]},
    {k:"demostración", tapar:["Burhan","demostraciones","demostrar"]},
    {k:"Ta'wil", tapar:["interpretación","interpreta","interpretan","interpretaciones"]},
    {q:"¿Qué principio afirma que la Ley revelada y la demostración no pueden contradecirse?"},
    {k:"Tasdiq", tapar:["asienten","asiente","asentimiento"]},
    {k:"causalidad", tapar:["causas","causa"]},
    {q:"¿Qué tesis sostenía que el movimiento y el tiempo no empezaron, aunque el mundo dependa de Dios?"},
    {k:"intelecto material", tapar:["intelecto común","intelecto personal","intelecto"]}
  ],
  maimonides: [
    {k:"perplejidad", tapar:["perplejo","perplejos"]},
    {k:"homónimas", tapar:["homónimos","homonimas"]},
    {k:"atributos negativos", tapar:["negaciones"]},
    {k:"Kalam", tapar:["kalam","mutakallimun"]},
    {q:"¿Qué puede demostrar la razón sobre el origen del mundo, según la Guía, y qué tesis prefiere Maimónides?"},
    {k:"profecía", tapar:["profeta","profetas","profecia"]},
    {k:"providencia", tapar:[]},
    {q:"¿Qué responde Maimónides a quienes creen que los mandamientos sin razón aparente son los más divinos?"},
    {k:"contradicciones", tapar:["contradicción"]}
  ],
  ibnjaldun: [
    {k:"ʿUmrān", tapar:["ʿumrān","umran","ʿilm al-ʿumrān"]},
    {q:"¿Qué regla propone para juzgar un relato histórico antes de examinar a quien lo transmite?"},
    {k:"badawa", tapar:["hadara"]},
    {k:"ʿasabiyya", tapar:["asabiyya"]},
    {k:"Mulk", tapar:["mulk","realeza"]},
    {k:"daʿwa", tapar:["dawa","prédica"]},
    {q:"¿Cuántas generaciones suele durar una dinastía, y qué le pasa a cada una?"},
    {k:"kasb", tapar:["rizq"]},
    {k:"ẓulm", tapar:["zulm","injusticia"]}
  ],
  confucio: [
    {k:"rén", tapar:["ren","humanidad","benevolencia"]},
    {q:"¿Qué concepto designa las formas rituales y de cortesía que dan cauce al respeto entre las personas?"},
    {k:"xiào", tapar:["xiao","piedad filial","filial"]},
    {k:"jūnzǐ", tapar:["junzi","hijo de señor"]},
    {k:"zhèngmíng", tapar:["zhengming","rectificación de los nombres","rectificaría los nombres"]},
    {q:"¿Qué fuerza, según Confucio, hace que el gobernante sea como la estrella polar, y qué efecto tiene sobre el pueblo comparada con los castigos?"},
    {k:"yì", tapar:["yi","rectitud"]},
    {k:"shù", tapar:["shu","reciprocidad"]},
    {k:"tiān", tapar:["tian","Cielo","tiānmìng"]}
  ],
  mozi: [
    {k:"jiān ài", tapar:["jian ai","cuidado imparcial","amor universal","jiān","bié"]},
    {q:"¿Qué medida de lo correcto propone Mozi frente a la rectitud confuciana, y con qué bienes concretos la define?"},
    {k:"tres pruebas", tapar:["sān biǎo"]},
    {q:"¿Cómo argumenta Mozi contra la guerra de conquista, y qué guerras sí acepta?"},
    {k:"voluntad del Cielo", tapar:["tiān","zhì"]}
  ],
  laozi: [
    {k:"Dao", tapar:["dao"]},
    {q:"¿Qué nombre recibe la potencia o eficacia que tiene algo cuando es lo que es, y que el libro distingue en superior e inferior?"},
    {k:"Wú wéi", tapar:["wú wéi","Wu wei","wu wei","no acción"]},
    {k:"Ziran", tapar:["ziran","así por sí mismo","por sí sola"]},
    {q:"¿Qué par de términos ilustra el capítulo 11 con la rueda, la vasija y la casa?"},
    {q:"¿Qué imagen de la madera nombra la simplicidad que conserva todas sus posibilidades?"},
    {k:"Fan", tapar:["volver","vuelven"]},
    {k:"Rou", tapar:["blando"]},
    {k:"Shengren", tapar:["sabio"]}
  ],
  mencioxunzi: [
    {k:"Xìng", tapar:["xìng","xing","naturaleza"]},
    {k:"duān", tapar:["duan","brote","cuatro"]},
    {k:"extensión", tapar:["tuī","tui","extension"]},
    {k:"mandato del Cielo", tapar:["tiānmìng","tianming","mandato"]},
    {k:"Wěi", tapar:["wěi","wei","artificio"]},
    {q:"¿Qué concepto designa los ritos y normas que, según Xunzi, crearon los sabios para dar forma a los deseos?"},
    {k:"Fēn", tapar:["distinciones","fēn","fen"]},
    {k:"Tiān", tapar:["Cielo","cielo","tiān","tian"]}
  ],
  zhuangzi: [
    {k:"Qiwu", tapar:["igualar o poner al mismo nivel","igualación"]},
    {q:"¿Qué par de palabras usaban las escuelas para afirmar y negar, y Zhuangzi muestra que dependen del hablante, como «esto» y «aquello»?"},
    {k:"Daoshu", tapar:["eje o el gozne del Dao","eje"]},
    {k:"Wuhua", tapar:["transformación de las cosas","transformación"]},
    {k:"Xiaoyao", tapar:["Xiaoyaoyou","andar sin rumbo"]},
    {k:"Wuyong", tapar:["inútil","utilidad de lo inútil"]},
    {k:"Xinzhai", tapar:["ayuno del corazón","ayuno"]},
    {k:"Zuowang", tapar:["sentarse y olvidar","se sienta y olvida"]},
    {k:"Hundun", tapar:["indiferenciado"]}
  ],
  buda: [
    {k:"dukkha", tapar:[]},
    {k:"taṇhā", tapar:["sed"]},
    {k:"anicca", tapar:["impermanencia","impermanente"]},
    {k:"anattā", tapar:["no-yo"]},
    {k:"agregados", tapar:["khandha"]},
    {k:"origen dependiente", tapar:["paṭicca samuppāda"]},
    {k:"camino medio", tapar:[]},
    {k:"karma", tapar:["kamma"]},
    {k:"nirvana", tapar:["nibbāna"]}
  ],
  nagarjuna: [
    {k:"Śūnyatā", tapar:["vacuidad","Sunyata","sunyata","vacía","vacío"]},
    {k:"Svabhāva", tapar:["svabhava","Svabhava","naturaleza propia","ser propio"]},
    {k:"Pratītyasamutpāda", tapar:["Pratityasamutpada","pratityasamutpada","originación dependiente"]},
    {k:"Madhyamaka", tapar:["madhyamaka","escuela del medio","madhyamika"]},
    {q:"¿Qué distinción permite decir a la vez que las cosas funcionan y que están vacías?"},
    {k:"catuṣkoṭi", tapar:["catuskoti","cuatro posiciones"]},
    {k:"Prasaṅga", tapar:["prasanga","Prasanga","prāsaṅgika","prasangika","reducción al absurdo","consecuencia"]},
    {k:"Prapañca", tapar:["prapanca","Prapanca","proliferación"]},
    {q:"¿Qué relación sostiene Nagarjuna entre el ciclo del sufrimiento y su extinción?"}
  ],
  shankara: [
    {k:"Brahman", tapar:["brahman"]},
    {k:"atman", tapar:["Atman","ātman"]},
    {k:"Adhyasa", tapar:["adhyasa","superposición","superponemos"]},
    {k:"Avidya", tapar:["avidya","ignorancia"]},
    {k:"Maya", tapar:["maya"]},
    {q:"¿Con qué distinción separa Shankara el punto de vista en que valen el karma y los deberes del punto de vista en que solo hay Brahman?"},
    {q:"¿Con qué fórmula de las Upanishads se niega toda determinación de Brahman para señalar lo que no puede objetivarse?"},
    {k:"Jnana", tapar:["jnana","conocimiento","conociendo"]},
    {k:"Jivanmukti", tapar:["jivanmukti","liberación en vida","liberado"]}
  ],
  dogen: [
    {k:"Shikantaza", tapar:["solamente sentarse","shikan","solamente"]},
    {k:"hishiryō", tapar:["hishiryo","Hishiryō","no-pensamiento","más allá del pensar"]},
    {k:"Shushō-ittō", tapar:["Shusho-itto","shusho-itto","una sola cosa"]},
    {k:"Busshō", tapar:["Bussho","bussho","naturaleza de Buda"]},
    {k:"Genjōkōan", tapar:["Genjokoan","genjokoan","Genjō"]},
    {k:"Shinjin datsuraku", tapar:["datsuraku","dejar caer cuerpo y mente"]},
    {q:"¿Qué nombre le da Dōgen a la tesis de que el tiempo es existencia y toda existencia es tiempo?"},
    {k:"Gyōji", tapar:["Gyoji","gyoji","práctica continua"]}
  ],
  gandhi: [
    {k:"satyagraha", tapar:["satya","agraha","firmeza en la verdad"]},
    {k:"ahimsa", tapar:["no dañar"]},
    {k:"swaraj", tapar:["swadeshi","autogobierno"]},
    {q:"¿Qué relación hay, según Gandhi, entre la forma de luchar y lo que se consigue?"},
    {q:"¿Por qué, para Gandhi, un pueblo puede desarmar un gobierno sin usar armas?"}
  ],
  nishida: [
    {k:"experiencia pura", tapar:["Junsui keiken"]},
    {k:"autoconciencia", tapar:["Jikaku"]},
    {k:"basho", tapar:["Basho","lugar"]},
    {q:"¿Cómo se llama el giro con que Nishida, en lugar de buscar el sujeto último del juicio, busca lo universal que abarca a todo sujeto?"},
    {k:"nada absoluta", tapar:["Zettai mu"]},
    {k:"identidad absolutamente contradictoria", tapar:["La identidad absolutamente contradictoria","zettai mujunteki jiko dōitsu"]},
    {k:"acción-intuición", tapar:["Kōiteki chokkan"]},
    {k:"correspondencia inversa", tapar:["Gyakutaiō"]}
  ],
  wangyangming: [
    {k:"liángzhī", tapar:["liangzhi","conocimiento bueno o innato"]},
    {k:"Zhīxíng héyī", tapar:["zhixing heyi","la unidad de conocimiento y acción"]},
    {q:"¿Qué fórmula, retomada de Lu Xiangshan, sostiene que el orden de la conducta no está en las cosas sino en la mente-corazón?"},
    {k:"Géwù", tapar:["gewu","rectificar los asuntos"]},
    {q:"¿Cómo se llama el movimiento de la mente hacia un asunto, donde para Wang aparecen el bien y el mal?"},
    {k:"Sīyù", tapar:["siyu","el deseo egoísta"]},
    {q:"¿Qué fórmula de sus últimos años resumía, según Wang, todo lo que había enseñado?"},
    {q:"¿Qué expresión dice que el ser humano forma una continuidad con el cielo, la tierra y todas las cosas?"},
    {q:"¿Qué expresión pide cultivarse en medio de las tareas reales y no solo en la quietud?"}
  ],
  lascasas: [
    {k:"encomienda", tapar:["encomiendas","encomendero","encomenderos"]},
    {q:"¿Qué sostiene Las Casas sobre la definición de hombre cuando la aplica a todos los pueblos?"},
    {k:"bárbaro", tapar:["bárbaros","barbaro","barbaros"]},
    {k:"servidumbre natural", tapar:["servidumbre"]},
    {q:"¿Cuál es, según Las Casas, el único método legítimo para proponer la fe a un pueblo, y por qué?"},
    {k:"restitución", tapar:["restitucion","devolviendo","devolvieran","devolver"]}
  ],
  sorjuana: [
    {k:"inclinación", tapar:["inclinacion"]},
    {q:"¿Cómo responde Sor Juana a la frase de san Pablo que manda callar a las mujeres?"},
    {k:"escala", tapar:["escalones"]},
    {q:"¿Qué aprendió Sor Juana cuando le prohibieron leer?"},
    {q:"¿De qué dos maneras intenta conocer el alma en el Primero sueño?"},
    {k:"doble moral", tapar:["misma medida"]}
  ],
  peirce: [
    {q:"¿Qué regla propuso Peirce en 1878 para aclarar el significado de un concepto?"},
    {q:"¿Cuáles son los dos estados entre los que se mueve la investigación según Peirce?"},
    {k:"falibilismo", tapar:["falibilista","falible"]},
    {q:"¿Quién llegaría a la verdad, según Peirce, al final de la investigación?"},
    {k:"abducción", tapar:["abductiva","abductivo"]},
    {k:"semiosis", tapar:["semiótica"]},
    {q:"¿Cuáles son las tres categorías con las que Peirce describe todo lo que aparece en la experiencia?"},
    {q:"¿Qué posición medieval sobre los generales retomó Peirce contra el nominalismo?"},
    {q:"¿Con qué dos doctrinas sostuvo Peirce que el azar y la continuidad son reales?"}
  ],
  james: [
    {k:"método pragmático", tapar:["pragmatismo"]},
    {q:"¿Cómo se vuelve verdadera una idea, según James?"},
    {k:"corriente", tapar:["río"]},
    {k:"hábito", tapar:[]},
    {k:"emoción", tapar:[]},
    {k:"opción genuina", tapar:["genuina"]},
    {k:"empirismo radical", tapar:["empirismo"]},
    {k:"pluralismo", tapar:["plural"]}
  ],
  dewey: [
    {k:"instrumentalismo", tapar:["instrumentos","instrumento"]},
    {k:"situación indeterminada", tapar:["indeterminada"]},
    {k:"hábito", tapar:["hábitos","habituales"]},
    {k:"aserción garantizada", tapar:["garantizado","garantía","garantizada"]},
    {k:"experiencia", tapar:["experiencias","Experiencia y educación"]},
    {k:"teoría del espectador", tapar:["espectador"]},
    {k:"crecimiento", tapar:["crecer","crece"]},
    {q:"¿Qué es la democracia para Dewey, además de una forma de gobierno, y con qué dos criterios se la juzga?"},
    {k:"público", tapar:["públicos"]}
  ],
  marti: [
    {k:"nuestra América", tapar:[]},
    {k:"creador", tapar:[]},
    {k:"falsa erudición", tapar:["erudición"]},
    {k:"injerto", tapar:["tronco"]},
    {k:"razas de librería", tapar:["librería"]},
    {k:"vecino formidable", tapar:["vecino"]}
  ],
  vasconcelos: [
    {k:"raza cósmica", tapar:["quinta","cósmica"]},
    {k:"mestizaje", tapar:["mezcla"]},
    {q:"¿En qué tres períodos divide Vasconcelos la historia humana, y cuál considera todavía por venir?"},
    {k:"ley del gusto", tapar:["gusto"]},
    {k:"monismo estético", tapar:["Monismo","monismo","estético"]}
  ],
  mariategui: [
    {k:"creación heroica", tapar:["calco y copia"]},
    {q:"¿Dónde ubica Mariátegui la raíz de la cuestión indígena, y por qué fracasan las soluciones que no la tocan?"},
    {k:"gamonalismo", tapar:["Gamonal","gamonal"]},
    {k:"socialismo práctico", tapar:[]},
    {k:"mito", tapar:["mitos"]},
    {q:"¿Qué sobrevive de la colonia en la sierra peruana, según el esquema económico de Mariátegui?"}
  ],
  zea: [
    {k:"circunstancia", tapar:["circunstancias"]},
    {k:"filosofía sin más", tapar:["sin adjetivo","pura y simplemente filosofía"]},
    {q:"¿Qué distingue Zea entre adoptar una doctrina extranjera por su prestigio y usarla para un problema propio?"},
    {q:"¿Cómo describe Zea la manera en que cada generación latinoamericana trató su propio pasado, y qué propone en su lugar?"},
    {k:"conciencia", tapar:[]}
  ],
  fanon: [
    {k:"esquema histórico-racial", tapar:["histórico-racial","historico-racial"]},
    {k:"epidermización", tapar:["epidermizacion","piel"]},
    {k:"sociogenia", tapar:["social e histórico"]},
    {q:"¿Qué nombre recibe la promesa colonial de igualdad para quien adopte la lengua y las maneras de la metrópoli, que Fanon describe como una máscara blanca?"},
    {k:"reconocimiento", tapar:["reconocida","reconocido"]},
    {q:"¿Qué movimiento de Césaire, Senghor y Damas reivindicó la cultura negra, y Fanon aceptó como momento necesario pero no como meta?"},
    {k:"descolonización", tapar:["descolonizacion"]},
    {k:"burguesía", tapar:["burguesia"]},
    {k:"hombre nuevo", tapar:["humanismo"]}
  ],
  kusch: [
    {q:"¿Con qué par de verbos del castellano nombra Kusch dos actitudes ante la vida?"},
    {k:"hedor", tapar:[]},
    {k:"fagocitación", tapar:["Fagocitar"]},
    {k:"estar siendo", tapar:["gerundio"]},
    {k:"seminal", tapar:["germine"]},
    {q:"¿Cómo llama Kusch a la idea de que todo pensamiento nace de un suelo?"}
  ],
  salazarbondy: [
    {k:"autenticidad", tapar:["auténtica","auténtico","inautenticidad","inauténtica"]},
    {k:"filosofía imitativa", tapar:["imitación","imitativa","imitar"]},
    {k:"mistificación", tapar:["mistificado","mistificada"]},
    {k:"cultura de la dominación", tapar:["dominación","dominada","dominador"]},
    {q:"¿Cómo puede volverse auténtica, según Salazar Bondy, una filosofía hecha en medio de la dependencia?"}
  ],
  freire: [
    {k:"educación bancaria", tapar:["bancaria","bancario","banco","depositar"]},
    {k:"educación problematizadora", tapar:["problematizadora","problemas"]},
    {k:"diálogo", tapar:["antidialógica","conversa"]},
    {k:"dualidad", tapar:[]},
    {q:"¿Cómo llama Freire al paso de una conciencia que vive la realidad como destino a una que busca sus causas y actúa?"},
    {k:"praxis", tapar:[]},
    {k:"palabras generadoras", tapar:["generadoras"]},
    {k:"inédito viable", tapar:[]},
    {k:"lectura del mundo", tapar:["lectura de la palabra"]}
  ],
  rawls: [
    {q:"¿Cómo llamó Rawls a su teoría, según la cual los principios son justos porque se acordarían en una situación inicial equitativa?"},
    {q:"¿Cómo se llama la situación imaginaria en la que unas partes eligen los principios de justicia detrás de un velo de ignorancia?"},
    {q:"¿Qué nombre recibe la regla según la cual las libertades básicas iguales no se pueden cambiar por más riqueza, ni siquiera para los más pobres?"},
    {q:"¿Qué exigencia pide que quienes tienen el mismo talento y la misma disposición a usarlo tengan las mismas perspectivas, vengan de la familia que vengan?"},
    {k:"principio de diferencia", tapar:[]},
    {k:"bienes primarios", tapar:[]},
    {k:"equilibrio reflexivo", tapar:[]},
    {k:"consenso entrecruzado", tapar:[]},
    {k:"razón pública", tapar:["razones públicas"]}
  ],
  dussel: [
    {k:"Totalidad", tapar:["totalidades"]},
    {k:"exterioridad", tapar:["exterior","exteriores"]},
    {k:"analéctico", tapar:["analéctica"]},
    {k:"mito de la modernidad", tapar:[]},
    {k:"transmodernidad", tapar:[]},
    {k:"principio material", tapar:[]},
    {k:"víctimas", tapar:["víctima","victimación"]},
    {k:"fetichismo del poder", tapar:["fetichismo"]}
  ],
  falsborda: [
    {k:"investigación-acción participativa", tapar:["IAP","investigación participativa"]},
    {q:"¿Qué relación entre investigador y comunidad propone Fals Borda en lugar de la de sujeto y objeto?"},
    {k:"ciencia propia", tapar:["propia"]},
    {k:"sentipensante", tapar:[]},
    {k:"devolución sistemática", tapar:["devolución","devolver"]},
    {k:"cultura anfibia", tapar:["anfibia","anfibio","anfibios"]}
  ],
  zuleta: [
    {k:"dificultad", tapar:["dificultades","difícil"]},
    {k:"idealización", tapar:["idealizar","idealiza","idealizacion"]},
    {k:"conflicto", tapar:["conflictos"]},
    {k:"fiesta", tapar:[]},
    {k:"deseo de saber", tapar:[]}
  ],
  rorty: [
    {k:"espejo", tapar:["espejos"]},
    {k:"antifundacionalismo", tapar:["fundamento","fundamentos"]},
    {k:"justificación", tapar:["justificar","justificada","justificarse"]},
    {k:"edificante", tapar:["edificación"]},
    {k:"contingencia", tapar:["Contingente","contingente"]},
    {k:"vocabulario final", tapar:["léxico último"]},
    {k:"ironista", tapar:["ironistas","ironía"]},
    {k:"solidaridad", tapar:["solidario","solidarios"]},
    {k:"etnocentrismo", tapar:["etnocéntrico","etnocéntricos"]}
  ],
  west: [
    {k:"pragmatismo profético", tapar:["pragmatista","pragmatismo","profético"]},
    {q:"¿Cómo llama West a la maniobra con que los pragmatistas, desde Emerson, esquivaron el problema de fundamentar el conocimiento para ocuparse de la democracia?"},
    {k:"mirada normativa", tapar:["mirada","normativa"]},
    {k:"nihilismo", tapar:["nihilista"]},
    {k:"esperanza trágica", tapar:["esperanza","tragicómica"]}
  ],
  wiredu: [
    {q:"¿Cómo llamó Wiredu al examen crítico, hecho a través de la traducción a la propia lengua, de las categorías heredadas de la colonia?"},
    {q:"¿Qué componentes tiene la persona según los akan, y por qué Wiredu negó que allí hubiera un dualismo de mente y cuerpo?"},
    {q:"¿Qué forma de gobierno propuso Wiredu, inspirada en los consejos asante, en la que la minoría acepta la decisión sin abandonar su opinión?"},
    {q:"¿Cómo llamó Hountondji a la reconstrucción de la filosofía implícita de un pueblo entero, y qué pensaba Wiredu de esa crítica?"},
    {k:"ubuntu", tapar:["Ubuntu"]},
    {k:"imparcialidad compasiva", tapar:["imparcialidad","compasiva"]}
  ],
  falacias: [
    {k:"ad hominem", tapar:[]},
    {k:"hombre de paja", tapar:[]},
    {k:"falsa dicotomía", tapar:[]},
    {k:"pendiente resbaladiza", tapar:[]},
    {k:"apelación a la autoridad", tapar:[]},
    {k:"petición de principio", tapar:[]},
    {k:"falacia genética", tapar:[]},
    {q:"¿Qué error comete quien infiere causalidad de la mera coincidencia, y qué dos versiones latinas distingue la tradición?"},
    {k:"generalización apresurada", tapar:[]},
    {k:"falacia del francotirador", tapar:["francotirador"]},
    {k:"apelación a la naturaleza", tapar:["natural"]},
    {k:"falacia del punto medio", tapar:["punto medio","término medio"]},
    {k:"apelación a la ignorancia", tapar:[]},
    {k:"falacia de la falacia", tapar:["argumentum ad logicam"]}
  ],
};
