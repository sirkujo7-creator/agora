/* Ágora · tarjetas de concepto (Conceptos y Repaso de hoy).
   TERMINOS.<id>[i] corresponde a conceptos[i] de la ficha:
   - {k, tapar}: el concepto tiene un nombre para recordar. El frente muestra las primeras
     oraciones con k (y cada expresión de «tapar») reemplazado por un único hueco.
   - {q}: el título es un tema descriptivo. El frente hace la pregunta q.
   Al dar vuelta la tarjeta se ve el título y la explicación completa. Mismo orden que
   conceptos: al agregar un concepto, agregar su entrada al final. */
const TERMINOS = {
  platon: [
    {k:"teoría de las Formas", tapar:["Formas","Ideas"]},
    {k:"mito de la caverna", tapar:["caverna"]},
    {k:"anámnesis", tapar:["reminiscencia"]},
    {k:"alma tripartita", tapar:["tripartita","tres partes"]},
    {k:"Idea del Bien", tapar:["Bien"]},
    {k:"línea dividida", tapar:["línea"]},
    {k:"filósofo-rey", tapar:["filósofos reinen","reyes filosofen"]},
    {k:"escalera de Diotima", tapar:["Diotima","escalera"]},
    {k:"argumento del tercer hombre", tapar:["tercer hombre"]}
  ],
  aristoteles: [
    {k:"hilemorfismo", tapar:[]},
    {k:"acto y potencia", tapar:["acto","potencia"]},
    {k:"cuatro causas", tapar:["causa"]},
    {k:"eudaimonía", tapar:[]},
    {k:"término medio", tapar:["medio"]},
    {k:"hábito", tapar:["héxis"]},
    {k:"phrónesis", tapar:["prudencia"]},
    {k:"silogismo", tapar:[]},
    {k:"zoon politikon", tapar:[]}
  ],
  descartes: [
    {k:"duda metódica", tapar:[]},
    {k:"cogito ergo sum", tapar:["cogito","yo soy, yo existo"]},
    {q:"¿Qué tres pasos de radicalidad creciente sigue la duda cartesiana y qué ficción le permite alcanzar también la matemática?"},
    {k:"claridad y distinción", tapar:["clara y distintamente","clara","distinta"]},
    {q:"¿Por qué necesita Descartes demostrar la existencia de Dios y qué objeción le hizo Arnauld?"},
    {q:"¿Cuáles son las dos sustancias creadas según Descartes y qué atributo define a cada una?"},
    {q:"¿Cuáles son las cuatro reglas del método cartesiano y qué se discute sobre su alcance?"},
    {q:"¿Cómo clasifica Descartes las ideas según su origen y qué significa que una idea sea innata?"},
    {k:"glándula pineal", tapar:["pineal"]}
  ],
  kant: [
    {k:"revolución copernicana", tapar:["Copérnico"]},
    {q:"¿Qué distingue Kant entre fenómeno y noúmeno, y qué función cumple este último?"},
    {q:"¿Qué son para Kant el espacio y el tiempo, frente a Newton y Leibniz?"},
    {k:"categorías", tapar:[]},
    {q:"¿Qué dos distinciones cruza Kant y en qué tipo de juicio ubica el conocimiento importante?"},
    {k:"unidad de apercepción", tapar:["apercepción"]},
    {k:"buena voluntad", tapar:[]},
    {k:"imperativo categórico", tapar:[]},
    {k:"autonomía", tapar:["autónoma"]}
  ],
  hegel: [
    {k:"dialéctica", tapar:["dialéctico"]},
    {k:"Aufhebung", tapar:["aufheben"]},
    {k:"dialéctica del amo y el esclavo", tapar:["señorío","servidumbre"]},
    {k:"espíritu absoluto", tapar:["espíritu"]},
    {k:"astucia de la razón", tapar:[]},
    {k:"eticidad", tapar:["Sittlichkeit"]},
    {q:"¿En qué sentido el Estado es para Hegel la realidad de la idea ética, y qué objeciones siguen en pie?"},
    {k:"búho de Minerva", tapar:[]},
    {q:"¿Qué distinción usa Hegel para corregir la lectura conservadora de su frase sobre lo racional y lo real?"}
  ],
  nietzsche: [
    {k:"muerte de Dios", tapar:["Dios ha muerto"]},
    {k:"Übermensch", tapar:["superhombre","ultrahombre"]},
    {k:"voluntad de poder", tapar:[]},
    {k:"eterno retorno", tapar:["retorno"]},
    {k:"transmutación de todos los valores", tapar:["Umwertung aller Werte","Umwertung"]},
    {q:"¿En qué se diferencian la moral de señores y la moral de esclavos según el orden de su valoración?"},
    {q:"¿Qué distingue el nihilismo pasivo del activo, y por qué ninguno de los dos es todavía la superación?"},
    {q:"¿Qué representan Apolo y Dioniso en El nacimiento de la tragedia y cómo se combinan en la tragedia griega?"},
    {q:"¿Qué son el ressentiment y la mala conciencia, y cómo funciona cada uno en la genealogía de la moral?"}
  ],
  heidegger: [
    {k:"Dasein", tapar:["Da-sein","ser-ahí"]},
    {k:"ser-en-el-mundo", tapar:["In-der-Welt-sein"]},
    {k:"diferencia ontológica", tapar:[]},
    {k:"ser-para-la-muerte", tapar:["Sein-zum-Tode"]},
    {k:"angustia", tapar:["Angst"]},
    {k:"das Man", tapar:["man","uno"]},
    {q:"¿Qué son para Heidegger comprender e interpretar, y por qué el círculo hermenéutico no es un vicio lógico?"},
    {q:"¿Qué distingue lo a-la-mano de lo ante-los-ojos y cuándo se vuelve visible el útil?"},
    {k:"Gestell", tapar:["imposición","emplazamiento","dispositivo"]}
  ],
  wittgenstein: [
    {k:"teoría figurativa", tapar:["pictórica"]},
    {q:"¿Qué significa en el Tractatus «de lo que no se puede hablar hay que callar», y qué estatuto tiene lo que se muestra?"},
    {k:"solipsismo", tapar:["solipsista"]},
    {k:"juegos de lenguaje", tapar:["juego"]},
    {q:"¿Qué sostiene Wittgenstein sobre el significado de una palabra y con qué dos salvedades?"},
    {k:"semejanzas de familia", tapar:[]},
    {k:"lenguaje privado", tapar:[]},
    {q:"¿Qué paradoja plantea Wittgenstein sobre seguir una regla y cómo la responde?"},
    {q:"¿Qué entiende Wittgenstein por gramática y cómo explica el surgimiento de los problemas filosóficos?"}
  ],
  zambrano: [
    {k:"razón poética", tapar:[]},
    {q:"¿Qué significó para Zambrano la separación platónica entre filosofía y poesía?"},
    {q:"¿Qué actitud de la razón le opone Zambrano a la razón moderna que se apodera del mundo?"},
    {k:"confesión", tapar:[]},
    {k:"lo sagrado", tapar:["sagrado"]},
    {q:"¿Qué distingue Zambrano entre persona e individuo y qué consecuencias políticas extrae?"},
    {k:"historia sacrificial", tapar:["sacrificaba","sacrificios"]},
    {k:"exilio", tapar:["exiliada","exiliado"]},
    {q:"¿Con qué imágenes piensa Zambrano la verdad que se revela en vez de conquistarse, y qué dice cada una?"}
  ],
  arendt: [
    {k:"totalitarismo", tapar:[]},
    {k:"derecho a tener derechos", tapar:[]},
    {q:"¿Cuáles son las tres actividades de la vida activa según Arendt y qué distingue a cada una?"},
    {k:"natalidad", tapar:["nacimiento"]},
    {k:"pluralidad", tapar:[]},
    {k:"banalidad del mal", tapar:[]},
    {q:"¿Qué distingue Arendt entre pensar y juzgar, y qué relación tienen con la posibilidad de evitar el mal?"},
    {q:"¿Cómo distingue Arendt el poder de la violencia y qué relación hay entre ambos?"},
    {q:"¿Qué dos fragilidades tiene la acción según Arendt y qué remedios encuentra para ellas?"}
  ],
  beauvoir: [
    {q:"¿Qué quiere decir Beauvoir con «No se nace mujer: se llega a serlo» y qué distinción posterior abrió?"},
    {k:"lo Otro", tapar:[]},
    {k:"situación", tapar:["situada"]},
    {k:"inmanencia", tapar:[]},
    {k:"mala fe", tapar:[]},
    {k:"ambigüedad", tapar:[]},
    {q:"¿Qué relación establece la ética de Beauvoir entre mi libertad y la de los otros, y qué criterio de juicio deriva?"},
    {k:"eterno femenino", tapar:[]},
    {k:"reciprocidad", tapar:["recíproca"]}
  ],
  confucio: [
    {k:"rén (humanidad)", tapar:["rén","humanidad","benevolencia"]},
    {k:"lǐ (rito)", tapar:["lǐ","rito","ritos","decoro"]},
    {k:"xiào (piedad filial)", tapar:["xiào","piedad filial","filial"]},
    {k:"jūnzǐ (persona ejemplar)", tapar:["jūnzǐ","junzi","persona ejemplar"]},
    {k:"rectificación de los nombres", tapar:["zhèngmíng","rectificar los nombres"]},
    {q:"Según Confucio, ¿con qué debe guiarse al pueblo en lugar de decretos y castigos, y qué imagen astronómica lo ilustra?"},
    {k:"yì (rectitud)", tapar:["yì","rectitud"]},
    {k:"zhì (sabiduría práctica)", tapar:["zhì","sabiduría"]},
    {k:"shù (reciprocidad)", tapar:["shù","reciprocidad"]}
  ],
  laozi: [
    {k:"Dao", tapar:["Tao","camino"]},
    {k:"wú wéi", tapar:["wu wei","no acción"]},
    {k:"ziran", tapar:["zi","ran"]},
    {q:"¿Qué elemento propone el capítulo 8 del Dao De Jing como modelo de la bondad más alta, y por qué?"},
    {k:"pǔ (tronco sin tallar)", tapar:["pǔ","tronco sin tallar"]},
    {k:"fǎn (reversión)", tapar:["fǎn","fù","reversión","retorno"]},
    {q:"¿Por qué el Dao De Jing desconfía del estudio acumulativo y de las virtudes predicadas como la benevolencia y la rectitud?"},
    {q:"¿Qué lógica sobre los pares de opuestos formula el capítulo 2 del Dao De Jing?"},
    {q:"¿Cómo describe el Dao De Jing al mejor gobernante y qué efecto atribuye a la multiplicación de prohibiciones?"}
  ],
  zhuangzi: [
    {k:"sueño de la mariposa", tapar:["mariposa"]},
    {k:"qiwu (igualación de las cosas)", tapar:["qiwu","igualación de las cosas"]},
    {q:"¿Cómo desplaza Zhuangzi el sentido del ziran heredado de Laozi, del gobernante a la vida individual?"},
    {k:"xiaoyao (vagabundeo libre)", tapar:["xiaoyao","xiaoyaoyou","vagar libre","vagabundeo libre"]},
    {k:"cocinero Ding", tapar:["Ding"]},
    {k:"utilidad de lo inútil", tapar:["inútil"]},
    {q:"¿Por qué Zhuangzi canta golpeando una vasija tras la muerte de su mujer, y cómo se lo explica a Huizi?"},
    {q:"¿Con qué preguntas cuestiona Zhuangzi la existencia de un criterio único para el saber?"},
    {q:"¿Qué le objeta Zhuangzi a la disputa entre confucianos y moístas?"}
  ],
  nagarjuna: [
    {k:"śūnyatā (vacuidad)", tapar:["śūnyatā","sunyata","vacuidad","vacía"]},
    {k:"svabhāva", tapar:["svabhava"]},
    {k:"pratītyasamutpāda (originación interdependiente)", tapar:["pratītyasamutpāda","originación dependiente","originación interdependiente"]},
    {k:"Madhyamaka", tapar:["camino medio"]},
    {k:"dos verdades", tapar:[]},
    {k:"catuṣkoṭi (tétrada)", tapar:["catuṣkoṭi","catuskoti","tétrada"]},
    {k:"prāsaṅga", tapar:["prasanga","reducción al absurdo"]},
    {q:"¿Cómo argumenta Nagarjuna, en el capítulo 2, que el movimiento no puede tener naturaleza propia?"},
    {q:"¿Qué relación establece Nagarjuna entre el nirvana y el samsara, y con qué argumento la sostiene?"},
    {k:"vacuidad de la vacuidad", tapar:["vacuidad"]}
  ],
  shankara: [
    {k:"Brahman", tapar:[]},
    {q:"¿Qué tesis sobre el sujeto constituye el corazón del Advaita, y por qué Shankara la entiende como identidad y no como unión?"},
    {k:"maya", tapar:["ilusión"]},
    {k:"avidya (ignorancia)", tapar:["avidya","ignorancia"]},
    {k:"adhyasa (superposición)", tapar:["adhyasa","superposición"]},
    {q:"¿Cuáles son los tres niveles de realidad que distingue el Advaita y qué abarca cada uno?"},
    {k:"jivanmukti (liberación en vida)", tapar:["jivanmukti","jivanmukta","liberación en vida"]},
    {k:"neti neti", tapar:["ni esto, ni esto","ni esto"]},
    {q:"Frente al camino del rito y al de la devoción, ¿qué vía considera Shankara la única liberadora, y por qué?"}
  ],
  dogen: [
    {k:"shikantaza (solo sentarse)", tapar:["shikantaza","shikan","solo sentarse"]},
    {k:"genjōkōan", tapar:["genjō","kōan"]},
    {k:"shushō-ittō (unidad de práctica y realización)", tapar:["shushō-ittō","shusho itto","unidad de práctica y realización"]},
    {k:"busshō (naturaleza de Buda)", tapar:["busshō","naturaleza de Buda"]},
    {k:"uji (ser-tiempo)", tapar:["uji","ser-tiempo"]},
    {k:"shinjin datsuraku", tapar:["datsuraku","dejar caer cuerpo y mente"]},
    {q:"¿Qué secuencia de pasos del Genjōkōan lleva desde estudiar el camino del Buda hasta ser realizado por las diez mil cosas?"},
    {q:"¿Por qué critica Dōgen la práctica que espera el despertar como un premio futuro?"},
    {q:"¿Qué jerarquía religiosa borra Dōgen con el cargo del tenzo, y cómo?"}
  ],
  nishida: [
    {k:"experiencia pura", tapar:["junsui keiken"]},
    {k:"basho (lugar)", tapar:["basho","lugar"]},
    {k:"nada absoluta", tapar:["zettai mu"]},
    {q:"¿Por qué, según Nishida, la nada absoluta no debe entenderse como una ausencia?"},
    {k:"identidad absolutamente contradictoria", tapar:["zettai mujunteki jiko dōitsu"]},
    {k:"jikaku (autoconciencia)", tapar:["jikaku","autoconciencia"]},
    {k:"lógica del predicado", tapar:["predicado"]},
    {k:"acción-intuición", tapar:["kōiteki chokkan"]},
    {k:"Escuela de Kioto", tapar:["Kioto"]}
  ],
  wangyangming: [
    {k:"liángzhī (conocimiento innato del bien)", tapar:["liángzhī","conocimiento innato"]},
    {k:"unidad de conocimiento y acción", tapar:["zhīxíng héyī"]},
    {k:"géwù (investigar las cosas)", tapar:["géwù","investigar las cosas"]},
    {k:"xīn jí lǐ (la mente es el principio)", tapar:["xīn jí lǐ","la mente es el principio"]},
    {k:"flores del acantilado", tapar:["acantilado"]},
    {q:"¿Por qué Wang Yangming considera que el método de Zhu Xi tiene consecuencias prácticas catastróficas?"},
    {k:"yì (intención)", tapar:["yì","intención","intenciones"]},
    {k:"shì shàng mó liàn (pulirse en los asuntos)", tapar:["shì shàng mó liàn","pulirse en los asuntos","se pule"]},
    {k:"wànwù yītǐ (un solo cuerpo con los diez mil seres)", tapar:["wànwù yītǐ","un solo cuerpo"]}
  ],
  sorjuana: [
    {q:"¿Qué tesis central defiende Sor Juana en la Respuesta y con qué ejemplos la sostiene?"},
    {q:"¿Cómo reinterpreta Sor Juana la frase de san Pablo que mandaba callar a las mujeres en la iglesia?"},
    {q:"¿Cómo justifica Sor Juana ante la Iglesia haber estudiado lógica, retórica, física o música?"},
    {q:"¿Qué frase célebre de la Respuesta convierte la cocina en lugar de conocimiento, y qué muestra?"},
    {q:"¿Qué dos maneras de conocer pone en escena el Primero sueño y cómo terminan?"},
    {q:"¿Qué hizo Sor Juana en 1693 y 1694, y por qué se debate el sentido de esa renuncia?"},
    {k:"doble moral", tapar:[]},
    {q:"¿Cómo aparece en la obra de Sor Juana la relación entre cuerpo, mente y género?"},
    {q:"¿Qué rasgos de la vida y la obra de Sor Juana expresan una conciencia americana?"}
  ],
  peirce: [
    {k:"máxima pragmática", tapar:["máxima"]},
    {q:"¿Qué cuatro métodos para fijar la creencia distingue Peirce y qué ventaja tiene el último?"},
    {k:"indagación", tapar:[]},
    {k:"semiótica triádica", tapar:["semiótica","triádica"]},
    {k:"falibilismo", tapar:["falibilista"]},
    {k:"comunidad de investigadores", tapar:["comunidad"]},
    {k:"realismo escolástico", tapar:["realismo"]},
    {k:"abducción", tapar:["abductiva"]},
    {k:"sinequismo y tiquismo", tapar:["sinequismo","tiquismo"]}
  ],
  james: [
    {k:"pragmatismo", tapar:["pragmaticismo"]},
    {k:"corriente de conciencia", tapar:["corriente"]},
    {k:"voluntad de creer", tapar:[]},
    {k:"empirismo radical", tapar:["empirismo"]},
    {k:"pluralismo", tapar:["universo inacabado"]},
    {k:"teoría James-Lange", tapar:["Lange"]},
    {k:"valor en efectivo", tapar:["cash value"]},
    {k:"yoes sociales", tapar:["yo social"]},
    {k:"frutos y no raíces", tapar:[]}
  ],
  dewey: [
    {k:"instrumentalismo", tapar:["instrumento"]},
    {k:"situación indeterminada", tapar:[]},
    {k:"aprender haciendo", tapar:["educación progresiva"]},
    {q:"¿Qué es la democracia para Dewey, además de una forma de gobierno, y con qué criterios se la evalúa?"},
    {k:"principio de continuidad", tapar:["continuidad","continuo"]},
    {k:"teoría del espectador", tapar:["espectador"]},
    {k:"crecimiento", tapar:["growth","creciendo"]},
    {k:"eclipse del público", tapar:["público","eclipsado"]},
    {q:"¿Qué critica Dewey del museo y cómo reconecta el arte con la experiencia cotidiana?"}
  ],
  vasconcelos: [
    {k:"raza cósmica", tapar:["quinta raza"]},
    {k:"mestizaje", tapar:["mestiza"]},
    {q:"¿Cómo periodiza Vasconcelos la historia humana y qué lugar le da a la estética frente a la razón?"},
    {q:"¿Qué le reprocha Vasconcelos al pragmatismo anglosajón y por qué esa contraposición es débil?"},
    {q:"¿Cómo tradujo Vasconcelos su filosofía en política educativa y qué objeciones recibe ese programa?"},
    {q:"¿Qué lugar le da Vasconcelos a lo indígena en la síntesis americana y qué se le critica?"},
    {k:"monismo estético", tapar:["monismo"]},
    {q:"¿Qué giro político dio Vasconcelos después de 1929 y por qué complica su legado?"},
    {q:"¿Qué lema escribió Vasconcelos para la UNAM y qué dos lecturas admite?"}
  ],
  zea: [
    {k:"filosofía sin más", tapar:["filosofía a secas","sin adjetivo"]},
    {k:"conciencia histórica", tapar:["conciencia"]},
    {k:"colonialismo mental", tapar:["dependencia intelectual"]},
    {k:"partir de nosotros mismos", tapar:[]},
    {q:"¿Cómo responde Zea al lugar que Hegel le asigna a América en la historia universal?"},
    {k:"asimilismo", tapar:["mentalidad imitativa"]},
    {q:"¿En qué coinciden y en qué difieren Zea y la Filosofía de la Liberación de Dussel?"},
    {q:"¿Qué toma y qué rechaza Zea del marxismo, de la Escuela de Frankfurt y del indigenismo?"},
    {q:"¿Qué hizo Zea institucionalmente para que la historia de las ideas latinoamericanas fuera una disciplina?"}
  ],
  dussel: [
    {k:"exterioridad", tapar:[]},
    {k:"analéctica", tapar:["ana-logos","analéctico"]},
    {k:"mito de la modernidad", tapar:[]},
    {k:"transmodernidad", tapar:[]},
    {k:"principio material", tapar:[]},
    {q:"Además del principio material, ¿qué otros dos principios exige la ética de Dussel y qué pide cada uno?"},
    {q:"¿Por qué sostiene Dussel que un sistema no puede diagnosticar desde dentro lo que produce, y quién sí puede?"},
    {q:"¿Cómo fue la polémica de Dussel con Apel y qué cambió en cada sistema?"},
    {q:"¿Qué otros autores y divisiones internas tuvo la Filosofía de la Liberación además de Dussel?"}
  ],
  zuleta: [
    {k:"elogio de la dificultad", tapar:["dificultad"]},
    {k:"idealización", tapar:["idealizar","idealiza"]},
    {k:"conflicto", tapar:[]},
    {k:"guerra como fiesta", tapar:["guerra"]},
    {q:"¿Cómo entiende Zuleta la lectura y qué le critica a la escuela al respecto?"},
    {k:"deseo de saber", tapar:[]},
    {q:"¿Cómo entiende Zuleta la democracia más allá del procedimiento electoral?"},
    {k:"maestros de la sospecha", tapar:[]},
    {q:"¿Cómo se formó Zuleta y por qué su obra es en gran parte oral?"}
  ],
  rorty: [
    {k:"espejo de la naturaleza", tapar:["espejo"]},
    {k:"antifundacionalismo", tapar:[]},
    {k:"vocabulario final", tapar:["léxico último"]},
    {k:"ironista liberal", tapar:["ironista"]},
    {q:"¿Por qué separa Rorty lo público de lo privado y qué objeción recibe esa separación?"},
    {q:"Si no hay una esencia humana común, ¿cómo se amplía la solidaridad según Rorty?"},
    {k:"neopragmatismo", tapar:["pragmatismo"]},
    {k:"izquierda cultural", tapar:[]},
    {k:"etnocentrismo", tapar:["etnocéntrico"]}
  ],
  west: [
    {k:"pragmatismo profético", tapar:["profética"]},
    {k:"nihilismo", tapar:[]},
    {q:"¿Qué dos afirmaciones sostiene West a la vez sobre el racismo y la responsabilidad, y qué reproches recibe?"},
    {k:"tradición profética", tapar:["profética"]},
    {q:"¿Qué toma West del marxismo y qué del cristianismo, y cómo maneja las tensiones entre ambos?"},
    {k:"fundamentalismo de mercado", tapar:["fundamentalismo"]},
    {q:"¿Qué le debe West a Rorty y qué le reprocha?"},
    {k:"intelectual público", tapar:["filosofía pública"]},
    {k:"esperanza trágica", tapar:["tragicómica"]}
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
