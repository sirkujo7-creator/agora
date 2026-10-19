/* Corrientes filosóficas: la sección «Corrientes».
   Cada corriente agrupa fichas (autores) y nombra a otros sin ficha. Forma:
   { id, nombre, periodo (texto), desde, hasta (años; hasta:null = sigue viva), trad ("europea"|"islamica"|
     "asiatica"|"americana"|"varias": da el color), pregunta (la que la mueve), lema (una frase),
     resumen (párrafos separados por línea en blanco),
     tesis:[4-5 ideas autocontenidas que NO nombran la corriente ni a sus autores: se usan en el juego
            «¿Qué corriente habla?»; tienen que ser inequívocas frente a las demás corrientes, salvo las vecinas],
     autores:[{mod:"<id de ficha>", rol}], otros:["nombres sin ficha"], conceptos:["términos clave"],
     noConfundir, hoy, de:[ids de las corrientes de las que nace], vecinas:[ids afines], rivales:[ids] }
   El orden del arreglo es el de la lista; la cinta los ordena por `desde`. */
const CORRIENTES = [
  { id:"presocraticos", nombre:"Filosofía presocrática", periodo:"s. VI – s. IV a.C.", desde:-585, hasta:-370, trad:"europea",
    pregunta:"¿De qué está hecho todo, y qué permanece cuando todo cambia?",
    lema:"Buscar el principio de las cosas en la naturaleza misma.",
    resumen:`Empieza en Mileto, un puerto griego de la costa de Asia Menor, en el siglo VI a.C.: Tales, Anaximandro y Anaxímenes se preguntan de qué está hecho todo y de dónde viene lo que nace y muere, y responden con el agua, lo ilimitado (ápeiron) y el aire. No abandonan de golpe a los dioses, pero buscan la explicación en la naturaleza (physis) y discuten entre sí con argumentos.

El nombre es moderno y algo engañoso: lo consagró la edición de fragmentos de Hermann Diels (1903), y varios «presocráticos», como Demócrito, fueron contemporáneos de Sócrates. No es una escuela sino un siglo y medio de respuestas rivales: Pitágoras ve en el número la clave del orden; Heráclito, un fuego que cambia según medida; Parménides sostiene que lo que es no puede nacer ni cambiar, y obliga a todos los que vienen después a explicar el cambio sin contradecirlo.

Las respuestas a Parménides son los cuatro elementos de Empédocles, las semillas de Anaxágoras y los átomos de Leucipo y Demócrito. De casi todos solo quedan fragmentos citados por autores posteriores, a veces siglos después, y testimonios que hay que leer con cautela.`,
    tesis:[
      "El cosmos se mantiene en equilibrio porque los contrarios se pagan unos a otros su injusticia según el orden del tiempo.",
      "Lo que es es uno, ingénito e inmóvil, como una esfera bien redonda; el nacer, el morir y el moverse son opiniones de los mortales.",
      "La armonía del mundo nace de la tensión entre opuestos, como la del arco y la lira.",
      "Los números y sus proporciones son la clave del orden del cielo y de la armonía musical.",
      "Todo lo que nace y muere viene de una única sustancia, como el agua o el aire, que permanece a través de sus transformaciones."],
    autores:[
      {mod:"tales", rol:"Tales, Anaximandro y Anaxímenes: la pregunta por el principio de todas las cosas."},
      {mod:"heraclito", rol:"El logos común, la unidad de los contrarios y el fuego que se enciende y se apaga según medida."},
      {mod:"parmenides", rol:"Los dos caminos del «es» y el «no es»: lo que es no puede nacer ni cambiar."}],
    otros:["Pitágoras","Jenófanes de Colofón","Zenón de Elea","Empédocles","Anaxágoras","Leucipo","Demócrito"],
    conceptos:["arché","physis","ápeiron","logos","ser y no ser","cuatro elementos","átomos y vacío","fragmentos y doxografía"],
    noConfundir:"No son «científicos primitivos» ni pensadores ya libres del mito: según Aristóteles, Tales pensaba que «todo está lleno de dioses». Y «presocrático» es una etiqueta cronológica de los editores modernos, no una escuela con doctrina común.",
    hoy:"La pregunta por la materia última y la discusión sobre el cambio y la permanencia siguen abiertas en la física y la metafísica; Heidegger y Nietzsche volvieron a ellos buscando un pensamiento anterior a Platón.",
    de:[], vecinas:["estoicismo"], rivales:[] },

  { id:"socratismo", nombre:"Socratismo y platonismo", periodo:"s. V a.C. – s. III d.C.", desde:-430, hasta:250, trad:"europea",
    pregunta:"¿Qué es lo bueno, y qué hace falta para saberlo de verdad y no solo creer que se lo sabe?",
    lema:"Una vida sin examen no merece ser vivida.",
    resumen:`Sócrates no escribió nada. Recorría Atenas preguntando qué es la justicia, la valentía o la piedad a quienes pasaban por sabios, y mostraba que no lo sabían. En el 399 a.C. la ciudad lo condenó a muerte por impiedad y por corromper a los jóvenes. Lo conocemos sobre todo por los diálogos de Platón y por Jenofonte, y separar al Sócrates histórico del personaje es un problema sin solución definitiva.

Platón convierte esas preguntas en un sistema. Si podemos preguntar qué es la justicia, es porque hay algo que es la justicia misma, eterno e inmutable: las Formas o Ideas, de las que las cosas sensibles son copias. Conocer es recordar lo que el alma vio antes de nacer, y la ciudad justa refleja el mismo orden que el alma justa. Hacia el 387 a.C. funda la Academia, donde estudió Aristóteles durante veinte años.

La Academia no conservó una doctrina fija: desde Arcesilao, en el siglo III a.C., se volvió escéptica, y más tarde los llamados platónicos medios (Plutarco, Alcínoo) devolvieron a Platón un perfil doctrinal y religioso que prepara el neoplatonismo. Otros discípulos de Sócrates, como Antístenes o Aristipo, tomaron caminos muy distintos.`,
    tesis:[
      "Nadie hace el mal a sabiendas: quien obra mal lo hace por ignorancia de lo que es bueno.",
      "Lo más importante no es vivir, sino vivir bien, y para eso hay que cuidar el alma examinando la propia vida en diálogo con otros.",
      "Las cosas que vemos son copias cambiantes de modelos eternos que solo la inteligencia puede captar.",
      "Aprender no es recibir algo nuevo, sino recordar lo que el alma ya sabía antes de nacer.",
      "La ciudad debería ser gobernada por quienes han conocido el bien, no por quienes desean el poder o la riqueza."],
    autores:[
      {mod:"socrates", rol:"El fundador sin libros: la pregunta, la ironía, el cuidado del alma y una muerte por fidelidad a su misión."},
      {mod:"platon", rol:"Las Formas, la anámnesis, el alma tripartita y la ciudad justa; funda la Academia."},
      {mod:"aristoteles", rol:"Crítico interno: pasa veinte años en la Academia y termina rechazando las Formas separadas."}],
    otros:["Jenofonte","Antístenes","Aristipo de Cirene","Espeusipo","Jenócrates","Plutarco de Queronea"],
    conceptos:["élenchos","ironía","mayéutica","intelectualismo moral","cuidado del alma","Formas o Ideas","anámnesis","filósofo-rey"],
    noConfundir:"«Platónico» no significa solo «amor sin sexo»: la escalera de Diotima en el Banquete parte del amor a los cuerpos. Y el Sócrates de los diálogos no es un registro taquigráfico: es en buena parte un personaje de Platón.",
    hoy:"El diálogo socrático se usa en la enseñanza, en la filosofía con niños y en la consultoría filosófica. En matemáticas se llama «platonismo» a la tesis de que los objetos matemáticos existen con independencia de nosotros.",
    de:["presocraticos"], vecinas:["neoplatonismo","aristotelismo"], rivales:["epicureismo","empirismo"] },

  { id:"aristotelismo", nombre:"Aristotelismo", periodo:"s. IV a.C. – hoy", desde:-335, hasta:null, trad:"varias",
    pregunta:"¿Qué es cada cosa, por qué es así y para qué existe?",
    lema:"Todos los seres humanos desean por naturaleza saber.",
    resumen:`Aristóteles estudió veinte años en la Academia de Platón y en el 335 a.C. fundó en Atenas su propia escuela, el Liceo; a sus seguidores se los llamó peripatéticos, por el paseo (peripatos) donde enseñaban. Su punto de partida es una crítica a su maestro: la forma de una cosa no está en un mundo aparte, sino en la cosa misma, unida a su materia. Para entender algo hay que preguntar de qué está hecho, qué es, qué lo produjo y para qué existe.

De ahí sale una enciclopedia: lógica, física, biología, metafísica, ética, política, retórica y poética. En ética, la felicidad es una actividad conforme a la virtud, y la virtud un hábito que se adquiere practicando y que busca el término medio con prudencia. El ser humano es un animal político: solo en la ciudad despliega lo que es.

Sus textos sobrevivieron por una cadena de comentaristas: griegos como Alejandro de Afrodisias, traductores y filósofos del mundo islámico como Avicena y Averroes, y escolásticos latinos como Tomás de Aquino, para quien era simplemente «el Filósofo». La física aristotélica cayó con la revolución científica del siglo XVII; su ética y su lógica, no del todo.`,
    tesis:[
      "La forma de una cosa no existe en un mundo aparte, sino en la cosa misma, unida a su materia.",
      "Para entender algo hay que saber de qué está hecho, qué es, qué lo produjo y para qué existe.",
      "La virtud es un hábito que se adquiere practicando y que consiste en un punto medio entre dos extremos.",
      "El ser humano es por naturaleza un animal que vive en la ciudad; quien no la necesita es una bestia o un dios.",
      "Todo cambio es el paso de lo que algo puede llegar a ser a lo que efectivamente es."],
    autores:[
      {mod:"maimonides", rol:"Aristotélico con límites: acepta su física sublunar y su ética del término medio, pero niega que haya demostrado la eternidad del mundo."},
      {mod:"aristoteles", rol:"El fundador: hilemorfismo, cuatro causas, acto y potencia, ética de la virtud y silogismo."},
      {mod:"avicena", rol:"Reelabora la metafísica aristotélica con la distinción entre esencia y existencia y un esquema de emanación."},
      {mod:"averroes", rol:"«El Comentador»: busca el Aristóteles auténtico y defiende la filosofía frente a Al-Ghazali."},
      {mod:"tomas", rol:"Integra a Aristóteles en la teología cristiana: el alma como forma del cuerpo, las cinco vías."}],
    otros:["Teofrasto", "Alejandro de Afrodisias", "Boecio", "Al-Farabi", "Alberto Magno", "Alasdair MacIntyre"],
    conceptos:["hilemorfismo","acto y potencia","cuatro causas","eudaimonía","término medio","phronesis","silogismo","animal político"],
    noConfundir:"El término medio no es la mediocridad ni la tibieza: la valentía es el medio entre la cobardía y la temeridad, y es una excelencia. Y su teleología no dice que la naturaleza tenga intenciones conscientes, sino que los procesos naturales tienden a un fin.",
    hoy:"La ética de las virtudes renació con Elizabeth Anscombe (1958) y Alasdair MacIntyre (Tras la virtud, 1981), y el enfoque de las capacidades de Martha Nussbaum se declara de raíz aristotélica.",
    de:["socratismo"], vecinas:["escolastica","falsafa"], rivales:["socratismo","racionalismo"] },

  { id:"epicureismo", nombre:"Epicureísmo", periodo:"s. IV a.C. – s. II d.C.", desde:-306, hasta:200, trad:"europea",
    pregunta:"¿Qué necesito de verdad para vivir feliz?",
    lema:"La muerte no es nada para nosotros.",
    resumen:`Hacia el 306 a.C. Epicuro compra una casa con huerto en las afueras de Atenas y funda allí una comunidad, el Jardín, que admitía mujeres y esclavos. La filosofía es para él una medicina del alma: sirve si cura el miedo y el sufrimiento, y no sirve si no los cura.

La felicidad es placer, pero no el del banquete ni el de la acumulación: el placer más alto es no sufrir en el cuerpo y no estar turbado en el alma. Para lograrlo hay que distinguir los deseos naturales y necesarios de los vacíos, que no tienen límite, y curar los grandes miedos con lo que la escuela resumió como «cuádruple remedio» (la fórmula nos llega por Filodemo): no hay que temer a los dioses ni a la muerte, el bien es fácil de conseguir y el dolor, fácil de soportar. La amistad es el mayor de los bienes.

La base es una física heredada de Demócrito: todo es átomos y vacío, el alma también, y con la muerte se disuelve. Los epicúreos añaden un desvío mínimo de los átomos, que Lucrecio llamará clinamen, para dejar lugar a la libertad; la palabra no aparece en los textos de Epicuro que conservamos. En Roma, Lucrecio lo expuso en el poema De la naturaleza de las cosas, cuyo redescubrimiento en 1417 lo devolvió a la cultura europea.`,
    tesis:[
      "El placer más alto no es el del banquete, sino no sufrir en el cuerpo y no estar turbado en el alma.",
      "Mientras existimos, la muerte no está; cuando ella llega, ya no existimos: por eso no hay nada que temer en ella.",
      "Unos deseos son naturales y necesarios, otros naturales pero no necesarios, y otros vacíos y sin límite; ser feliz exige saber distinguirlos.",
      "Los dioses existen, pero son felices e incorruptibles y no se ocupan de los asuntos humanos: no hay que temer su castigo.",
      "De todo lo que la sabiduría procura para la felicidad, lo más grande es la amistad."],
    autores:[
      {mod:"epicuro", rol:"El fundador: la clasificación de los deseos, los remedios contra el miedo a los dioses y a la muerte, la amistad y la física de los átomos."}],
    otros:["Metrodoro de Lámpsaco","Hermarco","Filodemo de Gádara","Lucrecio","Diógenes de Enoanda","Pierre Gassendi"],
    conceptos:["placer en reposo","aponía","clasificación de los deseos","tetrafármaco","átomos y vacío","clinamen","el Jardín","justicia como pacto"],
    noConfundir:"No es hedonismo desenfrenado: según Diógenes Laercio, Epicuro se contentaba con pan y agua y pedía un poco de queso para darse un festín. El sentido de «epicúreo» como gourmet viene de la caricatura que hicieron sus adversarios.",
    hoy:"Su manera de tratar la muerte sigue en la discusión filosófica sobre si morir es un daño. Su física fue retomada por Gassendi en el siglo XVII, y su idea de la justicia como pacto anticipa el contractualismo.",
    de:["presocraticos"], vecinas:["estoicismo","utilitarismo"], rivales:["estoicismo","socratismo"] },

  { id:"estoicismo", nombre:"Estoicismo", periodo:"s. III a.C. – s. II d.C.", desde:-300, hasta:180, trad:"europea",
    pregunta:"¿Qué depende de mí, y qué hago con lo que no depende?",
    lema:"No nos perturban las cosas, sino los juicios que hacemos sobre ellas.",
    resumen:`Nace en Atenas hacia el 300 a.C., cuando Zenón de Citio empieza a enseñar en la Stoa Poikile, el pórtico pintado que le dio nombre. Es una filosofía completa —física, lógica y ética—, pero se la recuerda por su ética: el universo está ordenado por una razón (logos) y la vida buena consiste en vivir de acuerdo con ella.

La clave es una distinción: hay cosas que dependen de nosotros (juicios, deseos, decisiones) y cosas que no (el cuerpo, la fama, la riqueza, la muerte). Solo la virtud es un bien; lo demás es «indiferente». Las pasiones no son fuerzas ciegas sino juicios equivocados, y por eso se pueden corregir.

En Roma se vuelve un arte de vivir practicado por gente muy distinta: un senador (Séneca), un esclavo liberto (Epicteto) y un emperador (Marco Aurelio). Su idea de una ley natural común a todos los seres racionales alimentó el cosmopolitismo y, siglos después, el derecho natural.`,
    tesis:[
      "Solo la virtud es un bien; la salud, la riqueza y la fama son indiferentes.",
      "Las pasiones son juicios equivocados del alma, y por eso pueden corregirse con la razón.",
      "Vivir bien es vivir de acuerdo con la naturaleza, que está ordenada por una razón común a todo.",
      "Todo ser racional es ciudadano del mundo antes que de una ciudad.",
      "Hay que distinguir con cuidado lo que depende de nosotros de lo que no, y poner el esfuerzo solo en lo primero."],
    autores:[
      {mod:"estoicos", rol:"Séneca, Epicteto y Marco Aurelio: el estoicismo romano como arte de vivir."},
      {mod:"spinoza", rol:"Afín moderno, no estoico: entender la necesidad libera de las pasiones, aunque critica a los estoicos por creer que la voluntad puede dominar por completo los afectos."}],
    otros:["Zenón de Citio","Cleantes","Crisipo","Panecio","Posidonio","Musonio Rufo"],
    conceptos:["logos","virtud","indiferentes","apatheia","dicotomía del control","cosmopolitismo","examen de conciencia"],
    noConfundir:"El estoico no es alguien frío que reprime lo que siente: busca no ser arrastrado por juicios falsos. Y no es resignación pasiva: Marco Aurelio gobernó un imperio y Séneca escribió contra la ira.",
    hoy:"La terapia cognitivo-conductual reconoce su deuda con Epicteto (Albert Ellis, Aaron Beck). Hay un «estoicismo moderno» popular, a veces reducido a autoayuda para el rendimiento.",
    de:["socratismo"], vecinas:[], rivales:["epicureismo"] },

  { id:"escepticismo", nombre:"Escepticismo", periodo:"s. IV a.C. – s. III d.C.; renace en el s. XVI", desde:-320, hasta:null, trad:"europea",
    pregunta:"¿Puedo saber algo con certeza, y cómo vivo si no puedo?",
    lema:"Suspender el juicio y seguir viviendo.",
    resumen:`El escepticismo antiguo tiene dos ramas. La primera viene de Pirrón de Elis, que acompañó a Alejandro hasta la India y no dejó nada escrito; la segunda, de la propia Academia de Platón, que con Arcesilao y Carnéades se dedicó a mostrar que ninguna representación garantiza su verdad, sobre todo contra los estoicos. Del pirronismo tardío conservamos la exposición sistemática de Sexto Empírico, un médico del siglo II o III d.C.

El método es oponer a cada argumento otro de igual fuerza. Como no se puede decidir entre ellos, se suspende el juicio, y entonces llega, sin buscarla, la tranquilidad. El escéptico no niega que la miel le parezca dulce: duda de que podamos decir cómo es en sí misma. Y vive siguiendo las apariencias, las costumbres y las necesidades del cuerpo.

Los textos de Sexto se tradujeron al latín en el siglo XVI y desataron una crisis: Montaigne preguntó «¿Qué sé yo?», Descartes radicalizó la duda para vencerla y Hume defendió un escepticismo «mitigado». Fuera de esta línea hay afines que llegan a la duda por otras vías: Zhuangzi con su perspectivismo y Al-Ghazali con su crisis personal, de la que dice haber salido por una luz divina y no por argumentos.`,
    tesis:[
      "A todo argumento se le puede oponer otro de igual fuerza; por eso lo sensato es no afirmar ni negar.",
      "Cuando se deja de afirmar cómo son las cosas en sí mismas, la tranquilidad llega sola, como la sombra sigue al cuerpo.",
      "Toda prueba necesita un criterio y todo criterio necesita una prueba: así se cae en un círculo o en una regresión sin fin.",
      "La misma miel parece dulce al sano y amarga al enfermo: podemos decir cómo nos aparecen las cosas, no cómo son.",
      "Quien no sabe nada con certeza puede vivir igual, guiado por las apariencias, las leyes y costumbres de su tierra y las necesidades del cuerpo."],
    autores:[
      {mod:"hume", rol:"Heredero moderno: defiende un escepticismo «mitigado» y rechaza el pirrónico por invivible."},
      {mod:"descartes", rol:"Crítico: lleva la duda al extremo para encontrar algo que resista a ella."},
      {mod:"agustin", rol:"Crítico: escribe Contra los académicos y, en La ciudad de Dios, responde a la duda con «si me engaño, existo»."},
      {mod:"ghazali", rol:"Afín: atraviesa una crisis escéptica, pero no es escéptico: dice salir de ella por una luz divina."},
      {mod:"zhuangzi", rol:"Afín sin contacto con los griegos: no hay un lugar neutral desde el cual arbitrar entre perspectivas."}],
    otros:["Pirrón de Elis","Timón de Fliunte","Arcesilao","Carnéades","Enesidemo","Sexto Empírico","Michel de Montaigne","Pierre Bayle"],
    conceptos:["suspensión del juicio","equipolencia","tropos","fenómeno","criterio de verdad","regresión al infinito","escepticismo académico y pirrónico","escepticismo mitigado"],
    noConfundir:"El escéptico antiguo no afirma que «nada puede conocerse»: eso sería una afirmación más, y Sexto se la reprocha a los académicos. Tampoco es lo mismo que el relativismo, que sí afirma que cada opinión es verdadera para quien la sostiene.",
    hoy:"El desafío escéptico (¿cómo sé que no sueño o que no soy un cerebro en una cubeta?) sigue siendo un problema central de la epistemología, y el escepticismo metódico inspira la actitud crítica de la ciencia.",
    de:["socratismo","presocraticos"], vecinas:["empirismo"], rivales:["estoicismo","racionalismo"] },

  { id:"neoplatonismo", nombre:"Neoplatonismo", periodo:"s. III – s. VI (con larga herencia)", desde:244, hasta:529, trad:"varias",
    pregunta:"¿De dónde procede todo, y cómo vuelve el alma a su origen?",
    lema:"Todo procede de lo Uno y todo desea volver a él.",
    resumen:`El nombre es moderno: Plotino y sus sucesores se consideraban simplemente platónicos. Plotino, nacido en Egipto hacia el 205 y formado en Alejandría con Amonio Saccas, enseñó en Roma desde el 244. Su discípulo Porfirio ordenó sus escritos en seis grupos de nueve tratados, las Enéadas, y contó en su biografía que el maestro alcanzó la unión con el principio supremo cuatro veces mientras él estuvo a su lado.

En el origen está lo Uno, absolutamente simple, más allá del ser y del pensamiento. De él procede, sin que él disminuya, como la luz del sol, una Inteligencia que contiene las Formas; de ella, el Alma, que anima el mundo; y en el último escalón, la materia, donde la luz se agota. Por eso el mal no es una sustancia sino carencia. El alma puede hacer el camino inverso: purificarse, volverse hacia adentro y unirse con lo Uno.

Porfirio, Jámblico y Proclo continúan la escuela, hasta que en el 529 una ley de Justiniano prohíbe enseñar a los paganos y la de Atenas se extingue (cómo y cuándo cerró exactamente se discute). Su herencia es enorme y atraviesa religiones: Agustín leyó «libros de los platónicos» antes de su conversión, el pensamiento árabe recibió una paráfrasis de Plotino atribuida a Aristóteles, y la mística cristiana se nutrió del Pseudo Dionisio.`,
    tesis:[
      "Todo procede de un principio único que se desborda como la luz del sol sin disminuir: primero una inteligencia, luego un alma y, al final, la materia.",
      "El mal no es una sustancia, sino carencia: es el último escalón, donde la luz del principio se agota.",
      "El alma que se aparta de lo corporal y se vuelve hacia adentro puede unirse, por instantes, con el principio del que todo procede.",
      "Todo lo que procede de un principio desea volver a él, y esa vuelta es contemplación.",
      "La belleza de los cuerpos es un reflejo que invita a subir hacia una belleza que no tiene cuerpo."],
    autores:[
      {mod:"platon", rol:"La fuente: las Formas, la Idea del Bien «más allá del ser» y el ascenso del Banquete."},
      {mod:"agustin", rol:"Heredero cristiano: lee a los platónicos antes de su conversión; el mal como privación y la búsqueda interior."},
      {mod:"avicena", rol:"Heredero en la falsafa: la cadena de intelectos que emanan del Necesario, dentro de un marco aristotélico."}],
    otros:["Plotino","Porfirio","Jámblico","Proclo","Hipatia de Alejandría","Pseudo Dionisio Areopagita","Maestro Eckhart","Marsilio Ficino"],
    conceptos:["lo Uno","Inteligencia (nous)","Alma del mundo","emanación","conversión o retorno","mal como privación","unión mística","teología negativa"],
    noConfundir:"La emanación no es una creación libre en el tiempo: lo Uno produce por sobreabundancia, sin decidirlo. Por eso los teólogos cristianos y musulmanes que lo heredaron tuvieron que corregirlo: Agustín toma de él mucho pero no la idea de que el mundo brota necesariamente, y Al-Ghazali atacó a los filósofos, como Avicena, que conservaron una emanación necesaria y eterna.",
    hoy:"Vive en la teología negativa y en el estudio de la mística comparada. Historiadores como Pierre Hadot lo leyeron como un ejercicio espiritual, no solo como un sistema.",
    de:["socratismo","aristotelismo"], vecinas:["socratismo","falsafa", "mistica"], rivales:["estoicismo","epicureismo"] },

  { id:"iusnaturalismo", nombre:"Derecho natural", periodo:"s. III a.C. – hoy", desde:-300, hasta:null, trad:"europea",
    pregunta:"¿Hay algo justo antes de que lo diga una ley, y vale contra la ley?",
    lema:"Una ley injusta no es ley, sino corrupción de la ley.",
    resumen:`La idea de que hay una justicia anterior a las leyes escritas es antigua: Antígona entierra a su hermano invocando leyes no escritas frente al decreto de Creonte, y los estoicos hablan de una ley de la razón común a todos los seres racionales, que Cicerón describe como la recta razón conforme a la naturaleza. Tomás de Aquino le da forma sistemática: la ley natural es la participación de la criatura racional en la ley eterna, y una ley humana que la contradice ya no es ley, sino corrupción de la ley.

En el siglo XVI la conquista de América la pone a prueba. En Salamanca, Francisco de Vitoria sostiene que los pueblos indios eran verdaderos dueños de sus tierras y sus gobiernos, y que ni la infidelidad ni el pecado les quitaban ese dominio, aunque admitió otros títulos que, según él, podían justificar la intervención española. Las Casas lleva el argumento ante la Corona y en la Junta de Valladolid (1550–1551) discute contra Sepúlveda, que invocaba la servidumbre natural de Aristóteles para justificar la guerra contra los indios. Grocio sostiene después que el derecho natural valdría aunque, por imposible, Dios no existiera, y Locke lo convierte en derechos de cada individuo —vida, libertad, bienes— que el gobierno existe para proteger.

Desde el siglo XVIII recibe críticas duras: Hume advierte que de cómo son las cosas no se deduce cómo deben ser, Bentham llama a los derechos naturales disparates en zancos y el positivismo jurídico separa el derecho válido del derecho justo. Después del nazismo vuelve con fuerza: Radbruch sostiene que la ley extremadamente injusta no es derecho, y la Declaración Universal de 1948 presenta los derechos humanos como algo que se reconoce, no que se concede.`,
    tesis:[
      "Hay una ley que no escribió ningún legislador y que obliga a todos; la norma humana que la contradice no es verdadera ley.",
      "Todo ser humano, por el solo hecho de serlo, tiene derechos que ningún gobierno le concede y que ninguno puede quitarle.",
      "Ningún pueblo pierde el dominio de sus tierras ni el derecho a gobernarse por no compartir la fe de quien llega a conquistarlo.",
      "Lo justo no depende solo de lo que mande quien tiene el poder: la razón puede descubrirlo examinando qué exige la naturaleza humana.",
      "El gobierno que ataca la vida, la libertad y los bienes de los gobernados pierde su legitimidad, y el pueblo puede resistirlo."],
    autores:[
      {mod:"estoicos", rol:"Precursores: una ley de la razón común a todos los seres racionales."},
      {mod:"aristoteles", rol:"Precursor: distingue lo justo por naturaleza de lo justo por convención."},
      {mod:"tomas", rol:"La formulación clásica: ley eterna, natural y humana; la ley injusta no es ley."},
      {mod:"lascasas", rol:"Lleva el derecho natural a la conquista: los pueblos indios tienen dominio legítimo y nadie puede someterlos."},
      {mod:"hobbeslocke", rol:"Locke funda en la ley natural los derechos a la vida, la libertad y los bienes; Hobbes la reduce a preceptos de la razón para conservarse."}],
    otros:["Cicerón","Francisco de Vitoria","Domingo de Soto","Francisco Suárez","Hugo Grocio","Samuel Pufendorf","John Finnis"],
    conceptos:["ley natural","ley eterna","recta razón","derechos naturales","dominio","derecho de gentes","derecho de resistencia","dignidad humana"],
    noConfundir:"«Natural» no significa lo que de hecho pasa en la naturaleza ni lo que hacen los animales, sino lo que la razón descubre como debido entre seres humanos. Y no es lo mismo que el contractualismo: para el derecho natural los derechos existen antes de cualquier pacto, que solo puede protegerlos.",
    hoy:"Vive en el lenguaje de los derechos humanos y en la «nueva teoría de la ley natural» de John Finnis. Sigue abierta la discusión sobre si los derechos humanos necesitan un fundamento natural o basta con un acuerdo entre los Estados.",
    de:["estoicismo","aristotelismo"], vecinas:["escolastica","contractualismo","estoicismo"], rivales:["utilitarismo"] },

  { id:"republicanismo", nombre:"Republicanismo", periodo:"de la Roma republicana a hoy (renovado desde los años setenta del s. XX)", desde:-150, hasta:null, trad:"europea",
    pregunta:"¿Basta con que nadie me impida actuar para ser libre, o solo soy libre si nadie tiene el poder de interferir en mi vida a su arbitrio?",
    lema:"Ser libre es no vivir a merced de nadie.",
    resumen:`No es una escuela con fundador, sino una tradición reconstruida por historiadores del siglo XX (Hans Baron, J. G. A. Pocock, Quentin Skinner), que va de la Roma republicana a las revoluciones del siglo XVIII. Parte de una definición de Cicerón: la república es «cosa del pueblo», no propiedad de quien gobierna. Maquiavelo, en los Discursos sobre Tito Livio, sostiene que Roma fue libre gracias al conflicto entre la plebe y el senado; Harrington, Montesquieu y Rousseau piensan la libertad política para los Estados modernos, y Madison defiende en El federalista una república representativa con poderes que se frenan.

Lo que la une es una idea de libertad. Ser libre no es solo que nadie me impida hacer lo que quiero, sino no depender de la voluntad arbitraria de otro: el esclavo de un amo bondadoso no es libre, aunque nunca lo castiguen. Por eso una ley que los ciudadanos controlan no es enemiga de la libertad, y por eso la libertad exige ciudadanos atentos a lo común, contrapesos y un temor constante a la corrupción. Hobbes la atacó en el Leviatán: el ciudadano de Lucca, escribió, no es más libre que el súbdito de Constantinopla.

Hay dos acentos. Para una línea que se remonta a Aristóteles y pasa por Arendt, participar en lo público es parte de una vida plenamente humana; para la que Skinner llama «neorromana» y Philip Pettit convirtió en teoría desde 1997, la participación es sobre todo un resguardo contra la dominación. Los rótulos «humanismo cívico» y «neorrepublicanismo» son de los estudiosos actuales: Cicerón y Maquiavelo hablaban de la república y del vivir libre, no de un «ismo».`,
    tesis:[
      "Un esclavo cuyo amo es bondadoso y nunca lo castiga sigue sin ser libre: vive a merced de una voluntad ajena que puede cambiar en cualquier momento.",
      "La ley no le quita libertad al ciudadano si él y sus iguales pueden discutirla y controlarla: lo que se la quita es depender del capricho de otro.",
      "Cuando los ciudadanos se desentienden de lo común y solo atienden sus asuntos privados, el poder queda en manos de unos pocos y la libertad se pierde sin que nadie la haya abolido.",
      "Los tumultos entre los poderosos y el pueblo no arruinan una ciudad: bien encauzados por las leyes, son lo que la mantiene libre.",
      "Ningún poder, tampoco el de la mayoría, debe quedar sin contrapesos que permitan a cualquier ciudadano impugnar sus decisiones."],
    autores:[
      {mod:"aristoteles", rol:"Precursor según la historiografía posterior: el ser humano como animal político, el ciudadano como el que participa en deliberar y juzgar, y el elogio de un régimen mixto."},
      {mod:"maquiavelo", rol:"El de los Discursos sobre Tito Livio más que el de El príncipe: el conflicto entre los grandes y el pueblo hizo libre a Roma. Pocock lo puso en el centro de su «momento maquiavélico»."},
      {mod:"rousseau", rol:"Llama república a todo Estado regido por leyes: libertad como obediencia a la ley que uno mismo se da y la dependencia personal como el gran mal. Pettit lo ubica en una variante distinta de la suya."},
      {mod:"arendt", rol:"La versión participativa: la libertad pública de actuar juntos y los consejos de las revoluciones (Sobre la revolución, 1963). No usó el rótulo; la ubican así sus intérpretes."}],
    otros:["Polibio","Cicerón","James Harrington","Montesquieu","James Madison","J. G. A. Pocock","Quentin Skinner","Philip Pettit"],
    conceptos:["res publica (cosa del pueblo)","libertad como no dominación","vivir libre","gobierno mixto","virtud cívica","corrupción","imperio de la ley","conflicto civil"],
    noConfundir:"No tiene que ver con los partidos que hoy se llaman republicanos, ni consiste solo en oponerse a los reyes: lo decisivo es que nadie gobierne de modo arbitrario, y Montesquieu llegó a describir a Inglaterra como una república escondida bajo la forma de una monarquía. Tampoco es democracia directa: Madison defendía la república representativa justamente frente a ella.",
    hoy:"Pettit evaluó en 2007, a pedido del propio presidente, el gobierno de José Luis Rodríguez Zapatero, que lo había invocado como inspiración (Examen a Zapatero, 2008). Desde esta idea de libertad se discute la dominación en el trabajo y en la familia (Elizabeth Anderson, Gobierno privado, 2017) y la renta básica.",
    de:["aristotelismo"], vecinas:["contractualismo","ilustracion"], rivales:["utilitarismo"] },
  { id:"escolastica", nombre:"Escolástica", periodo:"s. XI – s. XVII", desde:1070, hasta:1620, trad:"europea",
    pregunta:"¿Cómo se entiende con la razón lo que se cree por fe?",
    lema:"La fe que busca entender.",
    resumen:`El nombre viene de las escuelas medievales: primero las de los monasterios y las catedrales, y desde el siglo XIII las universidades de París y Oxford. Su programa lo resume Anselmo de Canterbury: la fe que busca entender. No se trata de reemplazar la fe por la razón, sino de pensar con todo el rigor posible lo que se cree. Su método es inconfundible: la cuestión disputada, que presenta primero las objeciones contra la propia tesis, luego las autoridades, después la respuesta y por último la réplica a cada objeción.

Entre los siglos XII y XIII llegan las traducciones latinas de Aristóteles, muchas desde el árabe y acompañadas por los comentarios de Avicena y Averroes. La recepción es conflictiva: Alberto Magno y Tomás de Aquino integran a «el Filósofo» en una síntesis entre fe y razón, Buenaventura se mantiene más cerca de Agustín, y en 1277 el obispo de París condena más de doscientas tesis de inspiración filosófica. Toda la época está atravesada por la querella de los universales: si «hombre» o «animal» nombran cosas reales, conceptos o solo palabras.

En el siglo XIV, Duns Escoto y sobre todo Ockham ponen el acento en la libertad de Dios y en los individuos, y la síntesis se resquebraja: la razón ya no puede demostrar tanto de lo que se cree. Los humanistas y los modernos la ridiculizaron como verbalismo, pero siguió viva en la llamada segunda escolástica de Salamanca y Coimbra, la que Descartes estudió en el colegio jesuita de La Flèche.`,
    tesis:[
      "Para resolver una cuestión hay que exponer primero las mejores objeciones contra la propia respuesta y, después de responder, contestar cada una.",
      "La gracia no destruye la naturaleza, sino que la perfecciona.",
      "La teología puede organizarse como una ciencia que deduce conclusiones a partir de los artículos de la fe, como de sus principios.",
      "La razón puede demostrar que Dios existe partiendo del movimiento, las causas o el orden del mundo, aunque no pueda demostrar la Trinidad.",
      "Los géneros y las especies no existen separados de los individuos, pero tampoco son meras palabras: el entendimiento los abstrae de lo que los individuos tienen en común."],
    autores:[
      {mod:"agustin", rol:"Precursor: la autoridad teológica de la que parte toda la Edad Media latina."},
      {mod:"anselmo", rol:"Considerado padre de la escolástica: la fe que busca entender y el argumento ontológico."},
      {mod:"tomas", rol:"La gran síntesis entre Aristóteles y la fe cristiana."},
      {mod:"ockham", rol:"Crítico interno: nominalismo, navaja y separación entre fe y razón."},
      {mod:"aristoteles", rol:"No es escolástico: es «el Filósofo», la autoridad cuya recepción define la escolástica madura."}],
    otros:["Boecio","Juan Escoto Eriúgena","Pedro Abelardo","Pedro Lombardo","Alberto Magno","Buenaventura","Juan Duns Escoto","Francisco Suárez"],
    conceptos:["cuestión disputada","autoridad","fe y razón","querella de los universales","nominalismo","esencia y existencia","analogía del ser","potencia absoluta y ordenada"],
    noConfundir:"No es una discusión estéril sobre cuántos ángeles caben en la cabeza de un alfiler: esa imagen es una caricatura posterior que no aparece en los textos medievales. Y no es lo mismo que el tomismo: Tomás es una voz entre muchas, y Escoto y Ockham lo discutieron a fondo.",
    hoy:"Sigue viva en el neotomismo, impulsado por la encíclica Aeterni Patris (1879), y en la filosofía analítica, que redescubrió la lógica y la semántica medievales.",
    de:["aristotelismo","neoplatonismo","falsafa"], vecinas:["falsafa","iusnaturalismo","aristotelismo", "mistica"], rivales:["racionalismo","empirismo"] },

  { id:"mistica", nombre:"Mística cristiana medieval", periodo:"c. 500 – s. XVI", desde:500, hasta:1591, trad:"europea",
    pregunta:"¿Puede conocerse a Dios si está más allá de todo concepto, y qué clase de conocimiento sería ese?",
    lema:"Buscar a Dios más allá de lo que se puede pensar y decir de él.",
    resumen:`No es una escuela, sino una corriente de experiencia y de escritura que atraviesa la Edad Media cristiana. Su fuente es un autor sirio de hacia el año 500 que firmó como Dionisio Areopagita, el ateniense convertido por Pablo (por eso hoy se lo llama Pseudo-Dionisio). Su Teología mística, muy cercana a Proclo, enseña que de Dios se dice con más verdad lo que no es que lo que es. Bernardo de Claraval lee el Cantar de los Cantares como el amor entre el alma y Dios; las beguinas Hadewijch y Margarita Porete escriben en lengua vulgar, y Porete muere en la hoguera en París (1310); el Maestro Eckhart habla del nacimiento de Dios en el fondo del alma, y en 1329, poco después de su muerte, una bula papal condena proposiciones suyas. Juan de la Cruz, ya en el siglo XVI, da su forma más rigurosa a la noche del alma.

La palabra es un problema. En la Edad Media «místico» era un adjetivo (teología mística, sentido místico de la Escritura); el sustantivo «la mística», como un saber aparte, se forma en los siglos XVI y XVII, como mostró Michel de Certeau. Hildegarda se presentaba como profetisa, y se discute si conviene llamarla mística.

¿Es filosofía? No en el sentido de argumentos que cualquiera aceptaría con la sola razón: estos autores hablan desde la fe y desde una práctica de oración. Lo es en otro sentido: plantean problemas filosóficos de primer orden —los límites del lenguaje ante lo absoluto, si el amor conoce donde el entendimiento no llega, qué queda del yo cuando renuncia a su voluntad—, a veces con herramientas escolásticas (Eckhart escribió también obras latinas de escuela), y entienden el saber como un ejercicio que transforma a quien lo practica.`,
    tesis:[
      "De lo divino se dice con más verdad lo que no es que lo que es: como Moisés al entrar en la nube del Sinaí, el alma lo encuentra en una tiniebla que está más allá de todo conocer.",
      "El amor llega adonde el entendimiento no llega: a Dios se lo puede amar, pero no abarcar con el pensamiento.",
      "Pobre de verdad es quien no quiere nada, no sabe nada y no tiene nada, ni siquiera la voluntad de cumplir la voluntad de Dios.",
      "La relación del alma con Dios se dice mejor con el lenguaje de los amantes que con el de las disputas: el alma es la esposa que busca al amado.",
      "Para unirse a Dios el alma tiene que atravesar un despojo en el que se apagan los gustos de los sentidos y hasta los consuelos de la oración, y esa oscuridad no es abandono sino purificación."],
    autores:[
      {mod:"agustin", rol:"Antecedente: la vuelta a la interioridad para subir a lo que está por encima del alma, la visión compartida con su madre en Ostia (Confesiones IX) y la distinción entre visión corporal, imaginativa e intelectual, que los medievales usarán para juzgar las experiencias."},
      {mod:"hildegarda", rol:"Visionaria del siglo XII, incluida a menudo entre los místicos medievales, aunque se presentaba como profetisa y sus visiones muestran el orden de la creación más que una unión del alma con Dios."}],
    otros:["Pseudo Dionisio Areopagita","Bernardo de Claraval","Buenaventura","Hadewijch","Maestro Eckhart","Margarita Porete","Juliana de Norwich","Juan de la Cruz"],
    conceptos:["teología negativa (apofática)","tiniebla divina","contemplación","fondo del alma","desasimiento","nacimiento de Dios en el alma","aniquilación del alma","noche oscura"],
    noConfundir:"Mística no es sinónimo de visiones extraordinarias ni de irracionalismo: Eckhart fue maestro de teología en París, y Juan de la Cruz pedía no apoyarse en visiones ni revelaciones, sino en la fe desnuda. Tampoco fue una espiritualidad sin conflictos con la Iglesia: Porete murió en la hoguera y Eckhart fue condenado.",
    hoy:"William James le dedicó dos lecciones de Las variedades de la experiencia religiosa (1902), y la filosofía de la religión sigue discutiendo si hay una experiencia común a todas las tradiciones. Heidegger tomó de Eckhart la palabra Gelassenheit, y la Escuela de Kioto lo comparó con el budismo zen.",
    de:["neoplatonismo"], vecinas:["neoplatonismo","escolastica"], rivales:[] },
  { id:"falsafa", nombre:"Filosofía islámica clásica", periodo:"s. IX – s. XII", desde:830, hasta:1200, trad:"islamica",
    pregunta:"¿Puede la filosofía de los griegos convivir con la verdad revelada?",
    lema:"La verdad no contradice a la verdad.",
    resumen:`Falsafa es la palabra griega philosophia adaptada al árabe, y nombra la filosofía que nace del gran movimiento de traducción de Bagdad entre los siglos VIII y X, impulsado por los califas abasíes. Traductores, muchos de ellos cristianos siríacos como Hunayn ibn Ishaq, vierten al árabe a Aristóteles, a Galeno y a los neoplatónicos; una paráfrasis de Plotino circula incluso como «Teología de Aristóteles». Al-Kindi, «el filósofo de los árabes», defiende aceptar la verdad venga de donde venga, y al-Farabi, «el segundo maestro» después de Aristóteles, piensa la ciudad virtuosa.

Avicena construye el sistema más influyente: distingue lo que una cosa es del hecho de que exista, demuestra un Necesario por sí del que emana una cadena de intelectos y argumenta, con el hombre volante, que el alma se conoce sin el cuerpo. Al-Ghazali, teólogo y después sufí, responde con La incoherencia de los filósofos: acusa de incredulidad tres tesis (el mundo eterno, un Dios que no conoce los particulares como tales y la negación de la resurrección de los cuerpos) y niega que la conexión entre causa y efecto sea necesaria. Averroes, desde Córdoba, le contesta con La incoherencia de la incoherencia y sostiene que la propia Ley revelada ordena filosofar.

Traducidos al latín, Avicena y Averroes, «el Comentador», transforman la escolástica. En el Occidente islámico la falsafa aristotélica pierde fuerza después de Averroes, pero en Persia la filosofía continúa, cada vez más unida a la mística. En el siglo XIV, Ibn Jaldún rechaza la metafísica de los filósofos y aplica su rigor a la historia y la sociedad.`,
    tesis:[
      "La Ley revelada ordena reflexionar sobre los seres, y por eso estudiar a los filósofos antiguos, aunque fueran de otra religión, es un deber para quien es capaz.",
      "Del Uno absolutamente simple solo puede salir directamente una cosa; la multiplicidad del mundo procede por una cadena de intelectos y esferas celestes.",
      "Alguien creado de golpe en el aire, sin ver ni tocar nada, ni siquiera su propio cuerpo, sabría igualmente que existe.",
      "No todos asienten de la misma manera: a unos los convence la demostración, a otros la dialéctica y a la mayoría la retórica, y el texto revelado les habla a todos.",
      "Todo lo que existe es necesario por sí o posible por sí y necesario por otro, y la cadena de lo posible exige un ser necesario por sí mismo."],
    autores:[
      {mod:"maimonides", rol:"Filósofo judío de lengua árabe formado en la falsafa: lee a Aristóteles con al-Farabi y Avicena, critica el kalam y armoniza la Ley con la demostración."},
      {mod:"avicena", rol:"El sistema más influyente: esencia y existencia, el Necesario por sí, el hombre volante."},
      {mod:"averroes", rol:"El gran comentarista de Aristóteles y defensor de la filosofía ante la Ley revelada."},
      {mod:"ghazali", rol:"Crítico decisivo: refuta a los filósofos con sus propias armas, aunque conserva la lógica."},
      {mod:"ibnjaldun", rol:"En su estela: rechaza la metafísica de los filósofos, pero estudia con rigor demostrativo la sociedad y la historia."}],
    otros:["al-Kindi", "al-Farabi", "Abu Bakr al-Razi", "Ibn Bajja (Avempace)", "Ibn Tufayl", "Suhrawardi", "Mulla Sadra"],
    conceptos:["falsafa","movimiento de traducción","esencia y existencia","necesario y posible","emanación","intelecto agente","eternidad del mundo","interpretación (ta'wil)"],
    noConfundir:"No es todo el pensamiento islámico: la teología (kalam) y el sufismo son tradiciones distintas, a veces aliadas y a veces rivales de la falsafa. Y la idea de que Al-Ghazali mató la filosofía en el islam hoy la discuten muchos historiadores, que señalan su continuidad en Persia y en Oriente.",
    hoy:"La filosofía de raíz aviceniana se sigue enseñando en Irán, y Averroes funciona como símbolo de un islam racionalista, por ejemplo en la obra del marroquí Mohammed Abed al-Jabri.",
    de:["aristotelismo","neoplatonismo"], vecinas:["neoplatonismo","aristotelismo","escolastica"], rivales:[] },

  { id:"confucianismo", nombre:"Confucianismo", periodo:"s. VI a.C. – hoy", desde:-500, hasta:null, trad:"asiatica",
    pregunta:"¿Cómo se forma una persona buena y cómo se ordena una sociedad justa?",
    lema:"Que el gobernante sea gobernante, el súbdito súbdito, el padre padre y el hijo hijo.",
    resumen:`Confucio (Kong Fuzi, según la tradición 551–479 a.C.) vive en una China fragmentada por las guerras entre Estados. Se presentaba como un transmisor y no como un creador: quería recuperar los ritos y la sabiduría de los antiguos reyes de la dinastía Zhou. Sus discípulos recogieron sus dichos en las Analectas, donde aparece su ideal: la persona noble (junzi), que cultiva la humanidad (ren), respeta los ritos (li) y empieza su formación por la piedad filial.

Sus herederos discuten la naturaleza humana. Mencio sostiene que es buena en germen, como muestran los brotes de compasión que todos tienen; Xunzi, que es mala, y que la bondad es un artificio que se logra con los ritos, el estudio y el maestro. Bajo la dinastía Han el confucianismo se vuelve doctrina oficial del Estado, y durante siglos los exámenes para ser funcionario se hicieron sobre sus clásicos, hasta que fueron abolidos en 1905.

Frente al prestigio del budismo y el taoísmo, el neoconfucianismo de la dinastía Song le da una metafísica: Zhu Xi enseña que todo está hecho de principio (li) y energía vital (qi), y que hay que investigar las cosas para conocer el principio. Siglos después, Wang Yangming responde que el principio no está afuera sino en la propia mente, que todos tenemos un conocimiento innato del bien y que conocer y actuar son una sola cosa. Esta tradición moldeó también a Corea, Japón y Vietnam.`,
    tesis:[
      "Si se gobierna con leyes y castigos, el pueblo evita el delito pero no siente vergüenza; si se gobierna con el ejemplo y los ritos, siente vergüenza y se corrige.",
      "El respeto y el cuidado hacia los padres y los hermanos mayores son la raíz de la humanidad, el primer lugar donde se aprende a ser bueno.",
      "Para ordenar un Estado hay que empezar por usar bien los nombres: que cada uno cumpla de verdad el papel que su nombre indica.",
      "Cualquiera que ve a un niño a punto de caer en un pozo siente alarma y compasión: esa reacción muestra que la bondad está en germen en todos.",
      "Aprender sin pensar es inútil; pensar sin aprender es peligroso: la persona se forma estudiando a los antiguos toda la vida."],
    autores:[
      {mod:"mozi", rol:"Primer crítico decisivo: el cuidado imparcial y la crítica de los ritos costosos, contra los que Mencio y Xunzi afinan sus doctrinas."},
      {mod:"confucio", rol:"El maestro: humanidad, ritos, piedad filial y la persona noble."},
      {mod:"mencioxunzi", rol:"Los dos grandes herederos clásicos: la naturaleza humana buena en germen o mala y corregible."},
      {mod:"wangyangming", rol:"Neoconfucianismo: el principio está en la mente; conocer y actuar son uno."}],
    otros:["Zengzi", "Dong Zhongshu", "Han Yu", "Zhou Dunyi", "Zhu Xi", "Lu Xiangshan", "Mou Zongsan", "Tu Weiming"],
    conceptos:["ren (humanidad)","li (ritos)","junzi (persona noble)","piedad filial","rectificación de los nombres","mandato del Cielo","principio y energía (li y qi)","conocimiento innato del bien"],
    noConfundir:"Los ritos no son formalismo vacío ni simple obediencia: Confucio dice que sin humanidad no sirven de nada, y Mencio justifica deponer al tirano. Tampoco es una religión con dioses e iglesia, aunque se haya practicado un culto a Confucio y a los antepasados.",
    hoy:"Fue atacado como lastre feudal en el Movimiento del Cuatro de Mayo (1919) y en la campaña «Criticar a Lin Biao, criticar a Confucio» (1973–1974); hoy el Estado chino lo reivindica. El «nuevo confucianismo» discute si es compatible con la democracia y los derechos humanos.",
    de:[], vecinas:["taoismo"], rivales:["taoismo", "moismo"] },

  { id:"moismo", nombre:"Moísmo", periodo:"s. V – s. III a.C.", desde:-430, hasta:-210, trad:"asiatica",
    pregunta:"¿Debemos cuidar de todos por igual, o es justo querer más a los nuestros?",
    lema:"Promover lo que beneficia al mundo y eliminar lo que lo daña.",
    resumen:`Mozi (Mo Di) enseñó en China a fines del siglo V a.C., en los comienzos del período de los Reinos Combatientes, y su escuela fue la primera que discutió de frente con los seguidores de Confucio. Sus discípulos no eran solo lectores: formaban una comunidad disciplinada bajo un jefe (juzi), vivían con austeridad y se ofrecían como expertos en defender ciudades sitiadas. Durante dos siglos, ellos y los confucianos fueron las escuelas más conocidas; el nombre de «escuela de Mo» (mojia) lo fijaron los historiadores de la dinastía Han, pero ya Mencio y Han Feizi hablan de los seguidores de Mo como un grupo.

Su medida de lo correcto es el beneficio del mundo: lo que da al pueblo comida, abrigo, descanso y orden. Desde ahí ataca el amor graduado de los confucianos, que empieza por la familia y se debilita con la distancia: los males nacen de preferir lo propio, y el remedio es cuidar de todos sin distinción. Condena la guerra de agresión, los funerales lujosos y la música de las cortes, y sostiene que el Cielo tiene voluntad y quiere que los seres humanos se beneficien unos a otros. Mencio le respondió que cuidar de todos por igual era no reconocer al propio padre.

Los moístas tardíos (s. IV–III a.C.) escribieron los Cánones, definiciones y discusiones sobre el lenguaje, el razonamiento, la geometría, la óptica y la mecánica: lo más parecido a una lógica en la China antigua. Tras la unificación imperial (221 a.C.) la escuela se extingue, y sus textos, mal conservados, fueron rescatados por filólogos del siglo XIX y pensadores del XX.`,
    tesis:[
      "Hay que mirar el Estado ajeno como el propio, la familia ajena como la propia y a la persona ajena como a uno mismo: los males del mundo nacen de preferir lo propio.",
      "Si robar un cerdo es un crimen y matar a un inocente es peor, invadir un Estado vecino es el mayor de los crímenes, aunque los gobernantes lo llamen justo.",
      "Los funerales suntuosos, los lutos de tres años y la música de las cortes son un derroche que le quita al pueblo comida, abrigo y descanso.",
      "Una doctrina se juzga con tres pruebas: si concuerda con lo que hicieron los sabios reyes antiguos, si la confirma lo que la gente común ve y oye, y si aplicada al gobierno beneficia al pueblo.",
      "Creer que la riqueza y la pobreza, el orden y el desorden están fijados por el destino es dañino: vuelve perezosos a los de abajo y descuidados a los gobernantes."],
    autores:[
      {mod:"mozi", rol:"El fundador: cuidado imparcial, beneficio de todos, contra la guerra de agresión y el lujo, la voluntad del Cielo y las tres pruebas de una doctrina."}],
    otros:["Qin Guli","Meng Sheng","Fu Tun","los autores anónimos de los Cánones moístas","Sun Yirang","Liang Qichao","Hu Shi"],
    conceptos:["jian ai (cuidado imparcial)","li (beneficio)","fei gong (contra la agresión)","tres pruebas","voluntad del Cielo","elevar a los capaces","contra el destino","disputación (bian)"],
    noConfundir:"Se lo llama a veces «utilitarismo chino», pero con cuidado: el beneficio se mide en riqueza, población y orden del pueblo, no en placer, y se apoya en la voluntad del Cielo. Tampoco es un pacifismo absoluto: condenaba la guerra de agresión, pero enseñaba a defenderse de ella.",
    hoy:"La ética comparada lo discute como una de las primeras éticas que juzgan las acciones por sus consecuencias, y sus Cánones interesan a la historia de la lógica y de la ciencia. En 2016 China llamó Micius, el nombre latinizado de Mozi, a su primer satélite de comunicación cuántica, en homenaje a sus observaciones de óptica.",
    de:[], vecinas:["utilitarismo"], rivales:["confucianismo"] },
  { id:"taoismo", nombre:"Taoísmo", periodo:"s. IV a.C. – hoy", desde:-400, hasta:null, trad:"asiatica",
    pregunta:"¿Cómo se vive en armonía con el curso espontáneo de las cosas?",
    lema:"Actuar sin forzar, y nada queda sin hacer.",
    resumen:`Dao significa «camino». El texto fundador, el Daodejing, se atribuye a Laozi, a quien la tradición presenta como un sabio mayor que Confucio. Los historiadores dudan de que haya existido como autor único: el libro parece haberse compuesto y reunido a lo largo del tiempo, y su versión más antigua conocida, parcial, está en las tablillas de bambú de Guodian, de hacia el 300 a.C. El segundo clásico es el Zhuangzi, que lleva el nombre de un pensador del siglo IV a.C.

El Daodejing habla de un origen de todas las cosas que no puede nombrarse, y propone imitar su modo de obrar: el wu wei, actuar sin forzar, dejando que las cosas sigan su curso espontáneo (ziran). Valora lo vacío, lo blando, lo humilde y lo femenino, y critica la cultura de virtudes, ritos y ambiciones que promovían los confucianos. El Zhuangzi agrega humor, parábolas y una desconfianza radical hacia los puntos de vista fijos: el sueño de la mariposa, el cocinero que corta un buey sin gastar el cuchillo, el sabio que canta golpeando un cuenco cuando muere su esposa.

Desde el siglo II d.C. se forma también un taoísmo religioso, con comunidades organizadas, Laozi divinizado y prácticas de longevidad y alquimia. En el siglo III, comentaristas como Wang Bi y Guo Xiang releen los clásicos filosóficamente, y el vocabulario taoísta pasa al budismo chino. Taoísmo, confucianismo y budismo convivieron durante siglos como las «tres enseñanzas».`,
    tesis:[
      "Lo que origina todas las cosas no cabe en palabras: en cuanto se lo nombra y se lo define, se lo pierde.",
      "Lo blando y débil vence a lo duro y fuerte, como el agua, que no lucha con nada y sin embargo desgasta la piedra.",
      "El mejor gobernante casi no se nota: cuando la obra está hecha, el pueblo dice que todo sucedió por sí mismo.",
      "Cuando se pierde la espontaneidad aparecen la benevolencia y la justicia: predicar virtudes y ritos es señal de que ya se perdió lo esencial.",
      "El cocinero que corta siguiendo las junturas naturales, sin forzar, no gasta el cuchillo: así se vive sin desgastarse."],
    autores:[
      {mod:"laozi", rol:"El Daodejing: el origen innombrable, actuar sin forzar, la fuerza de lo débil."},
      {mod:"zhuangzi", rol:"Humor, parábolas y crítica de los puntos de vista fijos."}],
    otros:["Liezi","Wang Bi","Guo Xiang","Zhang Daoling","Ge Hong"],
    conceptos:["dao","de (virtud, potencia)","wu wei","ziran (espontaneidad)","yin y yang","madera sin tallar","sueño de la mariposa"],
    noConfundir:"No actuar sin forzar no es quedarse quieto ni ser perezoso: es obrar como el agua, sin violentar las cosas. Y la separación entre un taoísmo filosófico y uno religioso, muy usada en Occidente, hoy la matizan los especialistas: en China nunca estuvieron tan separados.",
    hoy:"El taoísmo religioso sigue vivo en China y Taiwán, y el Daodejing es uno de los libros más traducidos del mundo; Ursula K. Le Guin publicó su propia versión. Se lo invoca en la ecología y en el arte de los jardines, a veces de forma muy libre.",
    de:[], vecinas:["budismo","confucianismo"], rivales:["confucianismo"] },

  { id:"budismo", nombre:"Budismo", periodo:"s. V a.C. – hoy", desde:-450, hasta:null, trad:"asiatica",
    pregunta:"¿De dónde viene el sufrimiento y cómo se sale de él?",
    lema:"Todo lo compuesto es impermanente.",
    resumen:`Siddhartha Gautama vivió en el norte de la India hacia el siglo V a.C. (las fechas se discuten). Según la tradición, dejó una vida de príncipe, probó durante años el ascetismo extremo y lo abandonó; sentado en meditación alcanzó el despertar, y por eso se lo llama Buda, «el despierto». Su enseñanza se resume en las cuatro nobles verdades: la vida está marcada por el sufrimiento, el sufrimiento nace del deseo que se aferra, puede cesar, y hay un camino para que cese, un camino medio entre el placer y la mortificación.

En el centro están tres ideas: todo es impermanente, nada surge por sí mismo sino en dependencia de otras cosas, y no hay un yo permanente detrás del flujo de sensaciones y pensamientos. Con los siglos el budismo se divide en escuelas. En el siglo II d.C., Nagarjuna lleva al extremo la dependencia: todo está vacío de esencia propia, incluso el vacío, y hay que distinguir la verdad convencional de la última. El budismo pasa a China, donde se cruza con el taoísmo y da origen al Chan, y de ahí a Japón como Zen; en el siglo XIII Dōgen sostiene que sentarse en meditación no es un medio para iluminarse, sino la iluminación misma.

En el siglo XX, Nishida Kitarō y la Escuela de Kioto ponen esa herencia en diálogo con la filosofía occidental: la experiencia pura, el lugar de la nada absoluta. Sus textos de los años de guerra, y su relación con el nacionalismo japonés, siguen discutiéndose.`,
    tesis:[
      "Toda vida está atravesada por la insatisfacción, que nace del deseo que se aferra; si cesa el aferrarse, cesa el sufrimiento.",
      "No hay un yo permanente detrás de los pensamientos, las sensaciones y el cuerpo, y creer que lo hay es la raíz del sufrimiento.",
      "Nada existe por sí mismo: todo surge en dependencia de otras cosas, y por eso todo carece de una esencia propia.",
      "Ni la vida de placeres ni la mortificación del cuerpo llevan a la liberación: hay un camino medio entre ambas.",
      "Sentarse en meditación no es un medio para alcanzar la iluminación: practicar ya es la iluminación misma."],
    autores:[
      {mod:"buda", rol:"El fundador: las cuatro nobles verdades, el no-yo y el camino medio."},
      {mod:"nagarjuna", rol:"La vacuidad: nada tiene esencia propia; las dos verdades."},
      {mod:"dogen", rol:"El Zen Sōtō: la práctica de sentarse es ya la iluminación."},
      {mod:"nishida", rol:"Heredero moderno: la Escuela de Kioto lleva el Zen al diálogo con la filosofía occidental."}],
    otros:["Asanga","Vasubandhu","Buddhaghosa","Dignāga","Huineng","Linji","Nishitani Keiji"],
    conceptos:["cuatro nobles verdades","sufrimiento (dukkha)","no-yo (anatman)","impermanencia","originación dependiente","vacuidad","nirvana","camino medio"],
    noConfundir:"El nirvana no es la nada ni el suicidio de la conciencia, sino la extinción del aferramiento que produce sufrimiento. Y no es lo mismo que el vedanta: el budismo niega un yo permanente que el vedanta pone en el centro.",
    hoy:"Es una de las grandes religiones del mundo y una filosofía muy viva; en 1956 Ambedkar se convirtió con cientos de miles de dalits como protesta contra las castas. La meditación de atención plena (mindfulness) es su versión secularizada, a veces separada por completo de su ética.",
    de:[], vecinas:["vedanta","taoismo"], rivales:["vedanta"] },

  { id:"vedanta", nombre:"Vedanta", periodo:"s. VIII a.C. (Upanishads) – hoy", desde:-700, hasta:null, trad:"asiatica",
    pregunta:"¿Qué soy yo en el fondo, y qué relación tengo con el fondo de todo lo real?",
    lema:"Eso eres tú.",
    resumen:`Vedanta significa «fin del Veda»: el nombre se refiere a las Upanishads, los textos que cierran la literatura védica y que preguntan por el principio de todo (Brahman) y por el sí mismo más íntimo (atman). Con la Bhagavad Gita y los Brahma Sutras, compuestos siglos después, forman la base de una de las seis escuelas ortodoxas de la filosofía india, que se definen por aceptar la autoridad del Veda.

Su intérprete más influyente es Shankara, en el siglo VIII d.C., que sistematiza el advaita, la no dualidad, ya esbozado por Gaudapada: el atman y el Brahman son idénticos, y la multiplicidad del mundo es apariencia (maya), producida por la ignorancia, que superpone a lo real lo que no es, como cuando en la penumbra se toma una cuerda por una serpiente. Shankara distingue dos niveles de verdad: en el convencional, el mundo, los dioses y los ritos funcionan; en el último, solo hay una conciencia sin segundo. La liberación no se alcanza con obras sino con el conocimiento que disuelve la ignorancia, y es posible en esta vida. Sus rivales lo acusaron de ser un budista encubierto.

Pero el vedanta no es solo advaita. Ramanuja, en los siglos XI y XII, defiende una no dualidad matizada en la que las almas y el mundo son reales como cuerpo de un Dios personal, y Madhva, en el XIII, una dualidad estricta entre Dios y las almas. En el siglo XIX, Vivekananda presentó el advaita en el Parlamento de las Religiones de Chicago (1893) como la esencia del hinduismo, y así llegó a Occidente.`,
    tesis:[
      "El fondo último de uno mismo y el fondo último de todo lo real no son dos cosas, sino una sola.",
      "El mundo múltiple que percibimos no es una nada, pero tampoco es real en sentido último: es como la cuerda que en la penumbra se toma por una serpiente.",
      "Lo que nos ata no es ante todo el mal obrar, sino la ignorancia que confunde lo que somos con el cuerpo y la mente.",
      "La liberación no se produce con acciones ni con ritos, sino con un conocimiento que disuelve la ignorancia, y puede alcanzarse en esta vida.",
      "Hay un sí mismo que es puro testigo: una conciencia que no cambia y que está presente en la vigilia, en el sueño con imágenes y en el sueño profundo."],
    autores:[
      {mod:"shankara", rol:"El advaita: no dualidad entre el sí mismo y lo absoluto; el mundo como apariencia."}],
    otros:["Badarayana","Gaudapada","Ramanuja","Madhva","Ramakrishna","Vivekananda","Sarvepalli Radhakrishnan"],
    conceptos:["Brahman","atman","advaita (no dualidad)","maya","ignorancia (avidya)","superposición","dos niveles de verdad","liberación (moksha)"],
    noConfundir:"No dice que el mundo sea un sueño sin consecuencias: en el nivel convencional es real y obliga. Y no es lo mismo que el budismo: el vedanta afirma un sí mismo permanente que el budismo niega.",
    hoy:"Desde Vivekananda es la imagen filosófica del hinduismo más difundida fuera de la India, y está en el trasfondo de buena parte del yoga occidental. Schopenhauer leyó las Upanishads y Schrödinger se declaró cercano al vedanta.",
    de:[], vecinas:["budismo","neoplatonismo"], rivales:["budismo"] },

  { id:"racionalismo", nombre:"Racionalismo", periodo:"s. XVII – mediados del s. XVIII", desde:1637, hasta:1750, trad:"europea",
    pregunta:"¿Puede la razón, sola, alcanzar verdades ciertas sobre el mundo?",
    lema:"Pienso, luego existo.",
    resumen:`Se suele fechar su arranque en 1637, cuando Descartes publica el Discurso del método. Después de un siglo de guerras de religión, de la crisis de la ciencia aristotélica y del regreso del escepticismo antiguo, la pregunta era urgente: ¿hay algo de lo que se pueda estar absolutamente seguro? La respuesta racionalista es que sí, y que esa certeza no viene de los sentidos, que engañan, sino de la razón.

El modelo es la matemática. Así como la geometría deduce teoremas a partir de unas pocas definiciones y axiomas evidentes, la filosofía debería partir de principios que la mente reconoce por sí misma y deducir desde ahí todo lo demás: Dios, el alma, la estructura de la materia. Por eso los racionalistas defienden que hay ideas o principios innatos, que la mente no saca de la experiencia, y desconfían de lo que solo se conoce por los sentidos.

No es una escuela con maestro y discípulos, sino un aire de familia entre sistemas muy distintos y a menudo enfrentados: el dualismo de Descartes, la sustancia única de Spinoza, las mónadas de Leibniz. La etiqueta, y su oposición en bloque al empirismo, la puso sobre todo la historiografía posterior a Kant, que vio en ambos dos mitades de un problema que él quería resolver.`,
    tesis:[
      "Hay verdades que la mente conoce por sí sola, sin sacarlas de la experiencia, y son las más firmes de todas.",
      "Los sentidos engañan a menudo: solo es verdadero lo que el entendimiento ve con una evidencia que no deja lugar a la duda.",
      "La filosofía debe proceder como la geometría: partir de principios evidentes y deducir de ellos, paso a paso, todo lo demás.",
      "Nada sucede sin una razón suficiente por la que sea así y no de otro modo.",
      "Lo que es la materia no lo dicen los colores ni los sabores, sino lo que de ella se puede pensar con exactitud matemática."],
    autores:[
      {mod:"descartes", rol:"Punto de partida según la historiografía posterior (no usó la etiqueta): la duda metódica, el cogito y las dos sustancias."},
      {mod:"spinoza", rol:"Ubicado aquí por la historiografía posterior: la ética demostrada al modo geométrico y una sola sustancia, Dios o la Naturaleza."}],
    otros:["Gottfried Wilhelm Leibniz","Nicolas Malebranche","Antoine Arnauld","Isabel de Bohemia","Christian Wolff"],
    conceptos:["duda metódica","cogito","ideas innatas","sustancia","método geométrico","principio de razón suficiente","mónada","armonía preestablecida"],
    noConfundir:"No es lo mismo que «ser racional» o confiar en la ciencia: los empiristas también eran racionales. La diferencia está en de dónde sale el conocimiento más firme: de la razón sola o de la experiencia.",
    hoy:"La discusión sobre lo innato sigue viva: Noam Chomsky defendió que la capacidad para el lenguaje es innata y llamó a su programa, en un libro de 1966, «lingüística cartesiana». El problema mente-cuerpo que dejó Descartes sigue organizando la filosofía de la mente.",
    de:["escolastica","escepticismo"], vecinas:["socratismo","idealismo"], rivales:["empirismo"] },

  { id:"empirismo", nombre:"Empirismo", periodo:"s. XVII – s. XVIII", desde:1690, hasta:1776, trad:"europea",
    pregunta:"¿De dónde vienen nuestras ideas, y hasta dónde llega lo que podemos saber?",
    lema:"Todo lo que la mente piensa le llegó antes por la experiencia.",
    resumen:`Su texto fundacional es el Ensayo sobre el entendimiento humano de Locke (1690), aunque Francis Bacon ya había pedido, a comienzos del siglo XVII, una ciencia que observara la naturaleza en vez de repetir a las autoridades. La idea central es sencilla y tuvo consecuencias enormes: la mente no trae ideas innatas al nacer, solo facultades; todo lo que piensa lo ha recibido, directa o indirectamente, de la experiencia.

El programa es examinar el entendimiento antes de usarlo: si todas las ideas vienen de los sentidos, se puede rastrear el origen de cada una y descubrir cuáles tienen contenido y cuáles son palabras vacías. Locke lo aplicó con prudencia; Berkeley lo llevó a negar que exista una materia independiente de toda percepción; Hume lo llevó hasta el final y encontró que ni la conexión necesaria entre causa y efecto, ni la inducción, ni un yo permanente se dejan justificar por la experiencia. Lo que sostiene esas creencias es la costumbre.

Es una corriente sobre todo británica y unida a la nueva ciencia experimental de Newton y Boyle. Ninguno de ellos se llamó a sí mismo «empirista»: la oposición entre empiristas y racionalistas la fijaron Kant y los manuales del s. XIX, y es en parte una simplificación. Pero el debate fue real: Leibniz respondió a Locke, punto por punto, en sus Nuevos ensayos.`,
    tesis:[
      "Nadie nace sabiendo nada: no hay ideas que la mente traiga consigo antes de toda experiencia.",
      "Toda idea, por abstracta que parezca, se puede rastrear hasta alguna sensación; la que no se deja rastrear no significa nada.",
      "Ver muchas veces que una cosa sigue a otra no prueba que deba seguirla: la necesidad la pone el hábito, no el mundo.",
      "El conocimiento crece observando casos y generalizando con cautela, no deduciendo desde principios que nadie ha comprobado.",
      "Antes de discutir sobre Dios, el alma o el infinito, hay que averiguar de dónde le vienen sus ideas al entendimiento y hasta dónde llega."],
    autores:[
      {mod:"hobbeslocke", rol:"Locke: la mente como papel en blanco y el origen de las ideas en la experiencia."},
      {mod:"hume", rol:"Lleva el principio hasta el final: la conexión causal, la inducción y el yo no se justifican por la experiencia, sino por la costumbre y la imaginación. No usó la etiqueta de «empirista»."},
      {mod:"mill", rol:"Heredero en el s. XIX: hasta las verdades matemáticas serían generalizaciones de la experiencia."}],
    otros:["Francis Bacon","George Berkeley","Pierre Gassendi","Étienne Bonnot de Condillac"],
    conceptos:["experiencia","tabula rasa","ideas simples y complejas","cualidades primarias y secundarias","impresiones e ideas","inducción","causalidad y costumbre"],
    noConfundir:"No es lo mismo que «empírico» en el sentido de hacer las cosas a ojo, sin método: es una teoría sobre el origen y los límites del conocimiento. Y no es escepticismo sin más, aunque en Hume termine en un escepticismo moderado.",
    hoy:"El empirismo lógico del Círculo de Viena lo renovó en el s. XX y Quine lo sometió a crítica en «Dos dogmas del empirismo» (1951). La ciencia cognitiva sigue discutiendo cuánto de la mente es aprendido y cuánto innato.",
    de:["escolastica"], vecinas:["escepticismo","positivismo"], rivales:["racionalismo"] },

  { id:"contractualismo", nombre:"Contractualismo", periodo:"s. XVII – hoy", desde:1651, hasta:null, trad:"europea",
    pregunta:"¿Por qué debería obedecer a un poder que no elegí?",
    lema:"El poder legítimo nace del acuerdo de quienes le obedecen.",
    resumen:`La pregunta de fondo es qué hace legítimo a un poder. Durante siglos se respondió con la voluntad de Dios, la tradición o la naturaleza; desde Hobbes, cuyo Leviatán aparece en 1651, al final de las guerras civiles inglesas, la respuesta moderna es otra: un poder es legítimo si puede entenderse como resultado de un acuerdo entre personas libres e iguales.

El recurso típico es un experimento mental. Se imagina un estado de naturaleza sin gobierno y se pregunta qué pactarían seres razonables para salir de él. Las respuestas difieren mucho: para Hobbes, un soberano absoluto que garantice la paz; para Locke, un gobierno limitado que proteja la vida, la libertad y la propiedad, y al que se puede resistir si traiciona su encargo; para Rousseau, una comunidad en la que cada uno, obedeciendo la ley que todos se dan, solo se obedece a sí mismo. Kant aclara que ese contrato no es un hecho histórico sino una idea de la razón que sirve para juzgar las leyes.

En 1971 John Rawls lo revivió con su Teoría de la justicia: los principios justos son los que elegiríamos tras un velo de ignorancia, sin saber qué lugar ocuparíamos en la sociedad. También tiene críticas fuertes: Carole Pateman y Charles Mills sostuvieron que el contrato clásico excluía de hecho a las mujeres y a los pueblos no blancos.`,
    tesis:[
      "Imaginar a los seres humanos sin ningún gobierno es la mejor manera de entender para qué sirve el poder y cuándo es legítimo.",
      "Ningún poder político es legítimo si no puede pensarse como acordado por quienes le obedecen.",
      "Las reglas justas son las que elegiríamos sin saber qué lugar ocuparíamos en la sociedad.",
      "Somos libres cuando obedecemos una ley que nos hemos dado nosotros mismos junto con todos los demás.",
      "Una acción está mal si la prohíben principios que nadie podría rechazar razonablemente."],
    autores:[
      {mod:"maquiavelo", rol:"Precursor indirecto: piensa el poder sin fundarlo en Dios ni en la naturaleza y desde la desconfianza hacia los hombres; Hobbes parte de ese realismo, aunque Maquiavelo no habla de pacto ni de estado de naturaleza."},
      {mod:"hobbeslocke", rol:"Hobbes, el pacto para salir de la guerra; Locke, el gobierno por consentimiento."},
      {mod:"rousseau", rol:"El pacto social y la voluntad general: obedecer la ley que uno mismo se da."},
      {mod:"kant", rol:"El contrato originario no como hecho histórico, sino como idea para juzgar las leyes."}],
    otros:["Samuel Pufendorf", "John Rawls", "Thomas Scanlon", "David Gauthier", "Carole Pateman", "Charles W. Mills"],
    conceptos:["estado de naturaleza","pacto social","consentimiento","soberanía","voluntad general","legitimidad","posición original","velo de ignorancia"],
    noConfundir:"El contrato casi nunca se presenta como un hecho que ocurrió, sino como una prueba de legitimidad; Hume ya objetó que nadie firmó nada. Y no implica una sola política: de él salieron el absolutismo de Hobbes, el liberalismo de Locke y la democracia radical de Rousseau.",
    hoy:"Rawls y Scanlon lo convirtieron en una de las grandes teorías de la justicia y de la moral del s. XX, en polémica abierta con el utilitarismo. Las críticas del «contrato sexual» (Pateman) y del «contrato racial» (Mills) siguen siendo lectura obligada.",
    de:["iusnaturalismo"], vecinas:["iusnaturalismo","ilustracion", "republicanismo"], rivales:["utilitarismo"] },

  { id:"ilustracion", nombre:"Ilustración", periodo:"fines del s. XVII – fines del s. XVIII", desde:1688, hasta:1800, trad:"europea",
    pregunta:"¿Hay alguna autoridad —la tradición, la Iglesia, el rey— que pueda quedar exenta del examen público de la razón?",
    lema:"¡Atrévete a servirte de tu propio entendimiento!",
    resumen:`Más que una doctrina es un movimiento: el de los filósofos, científicos y escritores que, entre fines del siglo XVII y la Revolución francesa, quisieron extender la razón a todos los ámbitos de la vida —la religión, la política, el derecho penal, la educación, la economía— y ponerla al alcance de todos. Kant la definió en 1784 como la salida del ser humano de su minoría de edad, de la que él mismo es culpable: no la falta de inteligencia, sino de valor para pensar sin la guía de otro.

Sus banderas fueron la tolerancia religiosa (Locke, Voltaire), la separación de poderes (Montesquieu), la abolición de la tortura y la crítica de la pena de muerte (Beccaria), la Enciclopedia de Diderot y d'Alembert como inventario del saber, y la confianza en un progreso que haría a la humanidad más libre y menos cruel. Mary Wollstonecraft y Olympe de Gouges reclamaron que esas promesas incluyeran a las mujeres. En la Nueva Granada llegó con la Expedición Botánica de Mutis y con la traducción de los Derechos del hombre por Antonio Nariño.

Tuvo críticos desde dentro, como Rousseau, que dudó de que el progreso de las ciencias mejorara a las personas. En el s. XX, Horkheimer y Adorno denunciaron que su razón podía volverse dominación, y se ha señalado que Hume y Kant escribieron jerarquías raciales que contradicen el universalismo que defendían.`,
    tesis:[
      "Hay que atreverse a pensar por cuenta propia, sin la tutela de un sacerdote, un rey o un libro.",
      "La razón y la ciencia, difundidas entre todos, harán a la humanidad más libre, más feliz y menos cruel.",
      "Ninguna autoridad, ni la del trono ni la del altar, está por encima del examen público de la razón.",
      "La tortura y las penas atroces no hacen justicia ni previenen el delito: hay que abolirlas.",
      "Para que no se abuse del poder, hace falta que el poder frene al poder."],
    autores:[
      {mod:"kant", rol:"La define en «¿Qué es la Ilustración?» (1784): salir de la minoría de edad."},
      {mod:"hume", rol:"La Ilustración escocesa: crítica de los milagros, de la superstición y de la metafísica."},
      {mod:"hobbeslocke", rol:"Locke como precursor: la tolerancia y el gobierno por consentimiento."},
      {mod:"spinoza", rol:"Precursor de la Ilustración más radical: libertad de pensar y crítica bíblica."},
      {mod:"rousseau", rol:"Hijo y crítico interno: duda de que el progreso de las ciencias nos haga mejores."}],
    otros:["Voltaire","Montesquieu","Denis Diderot","Cesare Beccaria","Mary Wollstonecraft","Condorcet","José Celestino Mutis","Antonio Nariño"],
    conceptos:["mayoría de edad","sapere aude","uso público de la razón","tolerancia","progreso","separación de poderes","derechos del hombre"],
    noConfundir:"No es una fe ingenua en que la razón lo resuelve todo: Hume puso límites severos a la razón y Rousseau dudó del progreso. Y no es solo francesa: hubo Ilustración escocesa, alemana, italiana, española e hispanoamericana.",
    hoy:"Sigue en disputa: Habermas llamó a la modernidad que ella inauguró un proyecto inacabado que hay que corregir, no abandonar; la crítica decolonial y feminista pregunta a quiénes dejó fuera su universalismo. Los derechos humanos y el Estado de derecho son en buena parte su herencia.",
    de:["racionalismo","empirismo"], vecinas:["contractualismo","positivismo", "republicanismo"], rivales:["escolastica"] },

  { id:"idealismo", nombre:"Idealismo alemán", periodo:"1781 – mediados del s. XIX", desde:1781, hasta:1854, trad:"europea",
    pregunta:"Si el mundo que conocemos lleva la marca de la mente, ¿qué es, en el fondo, lo real?",
    lema:"Lo verdadero es el todo.",
    resumen:`Su punto de partida es la Crítica de la razón pura de Kant (1781). Kant quiso cerrar la disputa entre racionalistas y empiristas con una revolución copernicana: no conocemos las cosas tal como son en sí mismas, sino tal como aparecen organizadas por las formas de nuestra sensibilidad y nuestro entendimiento. La mente no copia el mundo: contribuye a constituirlo. Pero Kant dejó en pie una cosa en sí incognoscible, y sus sucesores la vieron como un cabo suelto.

Fichte, desde 1794, convirtió esa contribución de la mente en el principio de todo: el yo es una actividad que se pone a sí misma y, al hacerlo, se opone un mundo en el que actuar libremente. Schelling respondió que la naturaleza no puede ser un mero obstáculo para el yo, sino el espíritu visible, y buscó la identidad de naturaleza y espíritu. Hegel, desde la Fenomenología del espíritu (1807), integró ambos en un sistema en que la realidad entera, la historia, el arte, la religión y la filosofía son el despliegue de un espíritu que llega a conocerse a sí mismo a través de sus propias contradicciones.

Sus herederos y críticos inmediatos —Marx, Kierkegaard, Schopenhauer— definieron buena parte del s. XIX. Su ambición universal tiene una sombra que conviene no omitir: Hegel declaró que África no pertenecía a la historia universal, una muestra del eurocentrismo del sistema.`,
    tesis:[
      "No es el conocimiento el que se ajusta a los objetos, sino los objetos los que se ajustan a nuestra manera de conocerlos.",
      "El yo no es una cosa entre las cosas, sino una actividad que se pone a sí misma y, al hacerlo, se opone un mundo.",
      "La naturaleza es el espíritu visible, y el espíritu es la naturaleza invisible.",
      "Lo verdadero no es una tesis suelta sino el todo, al que solo se llega al final de un recorrido en que cada figura se contradice y se supera conservándose.",
      "La historia universal es el progreso en la conciencia de la libertad."],
    autores:[
      {mod:"kant", rol:"El punto de partida: el giro que él comparó con el de Copérnico y el idealismo trascendental. En sentido estricto, el «idealismo alemán» son sus sucesores, que quisieron ir más allá de él."},
      {mod:"hegel", rol:"La culminación: el sistema del espíritu que se conoce a sí mismo en la historia."},
      {mod:"marx", rol:"Crítico y heredero: conserva la dialéctica hegeliana y la pone sobre bases materiales."},
      {mod:"kierkegaard", rol:"Crítico decisivo: el individuo que existe no cabe en el sistema."}],
    otros:["Johann Gottlieb Fichte","Friedrich Schelling","Friedrich Hölderlin","Karl Leonhard Reinhold","Friedrich Heinrich Jacobi","Arthur Schopenhauer"],
    conceptos:["revolución copernicana","cosa en sí","idealismo trascendental","yo absoluto","filosofía de la naturaleza","dialéctica","espíritu","Aufhebung"],
    noConfundir:"«Idealismo» aquí no significa tener ideales ni que el mundo sea un sueño: Kant se declaraba realista respecto de la experiencia, y el espíritu de Hegel no es una mente privada. Tampoco es el inmaterialismo de Berkeley, que Kant rechazó.",
    hoy:"Hegel volvió a la filosofía analítica con Robert Brandom y John McDowell, y la teoría del reconocimiento de Axel Honneth parte de él. Kant sigue en el centro de la ética, la epistemología y la teoría política.",
    de:["racionalismo","empirismo","ilustracion"], vecinas:["marxismo"], rivales:["existencialismo","positivismo"] },

  { id:"utilitarismo", nombre:"Utilitarismo", periodo:"fines del s. XVIII – hoy", desde:1789, hasta:null, trad:"europea",
    pregunta:"¿Qué hace correcta a una acción o a una ley: la regla que cumple o el bienestar y el sufrimiento que produce en todos los afectados?",
    lema:"La mayor felicidad para el mayor número.",
    resumen:`Su formulación sistemática está en la Introducción a los principios de la moral y la legislación de Jeremy Bentham (1789), aunque la fórmula de la mayor felicidad para el mayor número ya aparece en Hutcheson y en Beccaria. La idea es que la naturaleza puso a los seres humanos bajo dos amos, el placer y el dolor, y que la única medida razonable de lo correcto es la suma de bienestar que produce una acción, una ley o una institución.

Es una ética de las consecuencias e imparcial: no importan las intenciones ni las reglas por sí mismas, y el bienestar de cada uno cuenta lo mismo que el de cualquier otro. Bentham la pensó como herramienta de reforma: contra las penas crueles, contra los privilegios, a favor de considerar a los animales, y contra los derechos naturales, que le parecían un disparate. John Stuart Mill la corrigió introduciendo la calidad de los placeres y la unió a una defensa de la libertad individual; Henry Sidgwick le dio su forma académica más rigurosa.

Sus críticos la acusan de permitir sacrificar a unos pocos por el bien de la mayoría: Rawls le reprochó no tomar en serio la distinción entre personas. Bentham también diseñó el panóptico, una cárcel de vigilancia permanente que Michel Foucault convirtió en símbolo del poder disciplinario.`,
    tesis:[
      "Una acción es buena o mala según sus consecuencias para el bienestar de todos los afectados, no según la intención ni la regla que sigue.",
      "Al sumar placeres y dolores, cada uno cuenta como uno y nadie como más de uno.",
      "La pregunta moral sobre los animales no es si pueden razonar o hablar, sino si pueden sufrir.",
      "No hay derechos naturales anteriores a la ley: lo que hay que preguntar es qué leyes producen más bienestar.",
      "Si con el mismo dinero se puede evitar mucho más sufrimiento lejos que cerca, la distancia no es una excusa moral."],
    autores:[
      {mod:"mill", rol:"La calidad de los placeres y la unión de la utilidad con la libertad individual."},
      {mod:"hume", rol:"Precursor: la utilidad como una de las fuentes de nuestra aprobación moral."}],
    otros:["Jeremy Bentham","Francis Hutcheson","Harriet Taylor Mill","Henry Sidgwick","R. M. Hare","Peter Singer"],
    conceptos:["principio de utilidad","consecuencialismo","placer y dolor","cálculo felicífico","imparcialidad","calidad de los placeres","utilitarismo de actos y de reglas","panóptico"],
    noConfundir:"No es «utilitario» en el sentido de egoísta o interesado: exige contar el bienestar de todos por igual, y suele ser muy exigente. Tampoco es el hedonismo epicúreo, que busca la tranquilidad propia y no la suma de la felicidad general.",
    hoy:"Está detrás del análisis costo-beneficio en políticas públicas, de debates de bioética sobre cómo repartir recursos escasos, de la ética animal de Peter Singer y del llamado altruismo eficaz, también muy discutido.",
    de:["empirismo","ilustracion"], vecinas:["epicureismo", "moismo"], rivales:["contractualismo","iusnaturalismo", "republicanismo"] },

  { id:"positivismo", nombre:"Positivismo", periodo:"1830 – c. 1920", desde:1830, hasta:1920, trad:"varias",
    pregunta:"¿Puede la ciencia, y solo ella, decirnos cómo es el mundo y cómo organizar la sociedad?",
    lema:"Orden y progreso.",
    resumen:`Lo funda Auguste Comte con su Curso de filosofía positiva (1830-1842). Según su ley de los tres estados, el pensamiento humano pasa por una etapa teológica, que explica todo por dioses; una metafísica, que recurre a entidades abstractas; y una positiva, que renuncia a buscar causas últimas y se limita a descubrir las leyes que relacionan los hechos observables. La última ciencia en llegar a ese estado sería la que estudia la sociedad, a la que Comte dio el nombre de sociología.

John Stuart Mill difundió el método positivo en Inglaterra y fue durante años interlocutor de Comte, pero rechazó su giro final: una religión de la Humanidad con sacerdocio y calendario propios, y un orden social en que veía amenazada la libertad individual. Junto con el evolucionismo de Herbert Spencer, el positivismo se volvió la filosofía de la confianza en la ciencia del siglo XIX.

En América Latina fue ideología de Estado. El lema de la bandera de Brasil, «Ordem e Progresso», viene de Comte; en México, Gabino Barreda reformó la educación según su programa, y bajo Porfirio Díaz el grupo de los «científicos» justificó con él un régimen autoritario de modernización económica que dejó por fuera a las mayorías indígenas y campesinas. Hacia 1909, el Ateneo de la Juventud —Antonio Caso, José Vasconcelos, Alfonso Reyes, Pedro Henríquez Ureña— encabezó la reacción. Leopoldo Zea estudió esa historia para preguntar qué hace una idea europea cuando se usa aquí.`,
    tesis:[
      "La humanidad pasa por tres etapas en su modo de explicar el mundo: primero recurre a dioses, después a entidades abstractas y al final solo a leyes comprobadas.",
      "Hay que renunciar a preguntar por las causas últimas y las esencias, y contentarse con descubrir las leyes que relacionan los fenómenos observables.",
      "La sociedad puede estudiarse con los mismos métodos que la física, y de ese saber saldrá la manera correcta de gobernarla.",
      "Sin orden no hay progreso posible, y el progreso no es más que el desarrollo del orden.",
      "Un país atrasado se moderniza educando a sus élites en la ciencia y administrando el Estado con criterios técnicos, no con disputas políticas."],
    autores:[
      {mod:"mill", rol:"Difunde el método positivo en Inglaterra, pero rechaza la religión de la Humanidad."},
      {mod:"vasconcelos", rol:"Crítico desde el Ateneo de la Juventud: contra el positivismo porfiriano, la estética y el espíritu."},
      {mod:"zea", rol:"Su gran historiador: El positivismo en México (1943) y lo que la idea hizo en América."}],
    otros:["Auguste Comte","Herbert Spencer","Émile Littré","Gabino Barreda","Justo Sierra","José Ingenieros"],
    conceptos:["ley de los tres estados","ciencia positiva","física social","sociología","orden y progreso","religión de la Humanidad","los científicos"],
    noConfundir:"No es el positivismo lógico del Círculo de Viena, un movimiento del s. XX que pertenece a la filosofía analítica, aunque comparte la desconfianza ante la metafísica. Tampoco es el positivismo jurídico de Kelsen y Hart, ni tiene que ver con ser «positivo» en el sentido de optimista.",
    hoy:"La bandera de Brasil conserva el lema y en Brasil todavía se conservan templos de la religión positivista. El ideal de gobernar con técnicos en lugar de con política sigue vivo en los debates sobre la tecnocracia.",
    de:["empirismo","ilustracion"], vecinas:["empirismo","analitica"], rivales:["idealismo","liberacion"] },

  { id:"marxismo", nombre:"Marxismo", periodo:"s. XIX – hoy", desde:1844, hasta:null, trad:"varias",
    pregunta:"¿Cuánto de la historia y de las ideas de una sociedad se explica por cómo produce su vida material y quién se apropia de lo producido, y cómo puede transformarse eso?",
    lema:"Los filósofos no han hecho más que interpretar de diversos modos el mundo; de lo que se trata es de transformarlo.",
    resumen:`Nace con Karl Marx y Friedrich Engels a mediados del siglo XIX, entre los Manuscritos de 1844, el Manifiesto comunista (1848) y El capital (1867). Toma de Hegel la dialéctica, pero le da la vuelta: no son las ideas las que mueven la historia, sino la manera en que una sociedad produce sus medios de vida y las relaciones de clase que de ahí resultan. El nombre «marxismo» no es de Marx: lo pusieron seguidores y adversarios, y según Engels, ante ciertos «marxistas» franceses, Marx llegó a decir que él no lo era.

En el capitalismo el trabajo se vuelve mercancía: el obrero produce más valor del que recibe como salario (la plusvalía) y queda enajenado de lo que hace. El derecho, la religión y la moral dominantes tienden a presentar ese orden como natural; a eso se le llama ideología. Por eso la filosofía no puede quedarse en interpretar: tiene que volverse praxis.

En el siglo XX se ramifica: Lenin y la revolución rusa, Gramsci y la hegemonía, la Escuela de Frankfurt. También hubo regímenes que se dijeron marxistas y fueron dictaduras, como el estalinismo, criticadas incluso por muchos marxistas. En América Latina, Mariátegui pidió un socialismo que no fuera «calco y copia» y lo pensó desde el problema de la tierra y las comunidades indígenas; en Colombia, Fals Borda y Zuleta lo leyeron con libertad, y Freire lo cruzó con el cristianismo en su pedagogía.`,
    tesis:[
      "No es la conciencia de las personas la que determina su vida social, sino su vida social la que determina su conciencia.",
      "La historia de las sociedades ha sido, hasta hoy, la historia de luchas entre clases con intereses opuestos.",
      "El salario esconde que el trabajador produce más valor del que recibe, y de esa diferencia vive el dueño de los medios de producción.",
      "Las ideas dominantes de cada época son las ideas de la clase que domina económicamente.",
      "Una teoría revolucionaria importada no sirve como receta: hay que recrearla desde la realidad propia, empezando por quién es dueño de la tierra."],
    autores:[
      {mod:"fanon", rol:"Heterodoxo: «estira» el análisis marxista en la situación colonial, con el campesinado como fuerza revolucionaria y la crítica a la burguesía nacional."},
      {mod:"foucault", rol:"Crítico cercano: militó brevemente en el Partido Comunista y comparte la historia de las prácticas, pero rechaza el poder como propiedad de una clase y la ideología como conciencia falsa."},
      {mod:"hegel", rol:"Precursor: la dialéctica y la historia como proceso, que Marx pone sobre bases materiales."},
      {mod:"marx", rol:"Con Engels: materialismo histórico, plusvalía, ideología y praxis."},
      {mod:"mariategui", rol:"El marxismo latinoamericano como «creación heroica»: tierra, indio y socialismo."},
      {mod:"falsborda", rol:"Sociología comprometida e investigación-acción, con fuerte influencia marxista."},
      {mod:"zuleta", rol:"Lector heterodoxo de Marx, que lo cruzó con Freud y Nietzsche."},
      {mod:"freire", rol:"En diálogo: toma la praxis y la opresión, pero desde una pedagogía también cristiana."}],
    otros:["Friedrich Engels", "Rosa Luxemburgo", "Antonio Gramsci", "Georg Lukács", "Theodor W. Adorno", "Louis Althusser", "Lenin"],
    conceptos:["materialismo histórico","lucha de clases","plusvalía","enajenación","ideología","praxis","base y superestructura","hegemonía"],
    noConfundir:"Marxismo no es lo mismo que los regímenes que usaron su nombre: es sobre todo un método de análisis de la sociedad, y muchos de sus críticos más duros del estalinismo fueron marxistas. Tampoco es un determinismo económico simple: el propio Engels advirtió contra esa lectura.",
    hoy:"Sigue vivo en la sociología, la historia económica y los estudios sobre desigualdad y trabajo, y en debates sobre ecología y capitalismo. En América Latina alimentó la filosofía de la liberación y la educación popular.",
    de:["idealismo","ilustracion"], vecinas:["liberacion", "anticolonialismo", "estructuralismo"], rivales:["idealismo","contractualismo"] },

  { id:"existencialismo", nombre:"Existencialismo", periodo:"décadas de 1940 a 1970 (precursores en el s. XIX)", desde:1943, hasta:1980, trad:"europea",
    pregunta:"¿Hay algo que defina quién soy antes de que elija, o me hago con lo que hago con mi libertad?",
    lema:"La existencia precede a la esencia.",
    resumen:`La palabra es del siglo XX. «Existencialismo» empieza a circular en París a mediados de los años cuarenta (se suele atribuir a Gabriel Marcel), para nombrar la filosofía de Sartre, que primero desconfió del rótulo y en 1945 lo asumió en su conferencia «El existencialismo es un humanismo»; Beauvoir también lo aceptó. Antes, en Alemania, Karl Jaspers había hablado de «filosofía de la existencia».

Kierkegaard y Nietzsche nunca usaron el término, que no existía: los convirtió en precursores la historiografía posterior (Jaspers los presentó juntos en 1935; Walter Kaufmann los incluyó en su antología de 1956, que empieza con Dostoievski). Lo que se toma de Kierkegaard es la idea de que la verdad que importa no es la del sistema, sino la del individuo que tiene que elegir y hacerse cargo de su elección; de Nietzsche, la muerte de Dios y la tarea de crear valores. Pero Kierkegaard escribe desde la fe cristiana, y Nietzsche desconfía de la idea misma de un sujeto libre que elige: ninguno de los dos suscribiría sin más las tesis de Sartre.

La idea central, en la versión de Sartre, es que el ser humano no tiene una naturaleza fija que lo defina antes de vivir: primero existe y después se hace con lo que elige. De ahí la angustia (no hay excusa ni guion), la responsabilidad (al elegir, se elige también una imagen de lo humano) y la «mala fe», el intento de esconderse de la propia libertad detrás de un rol o una supuesta naturaleza.

No es una escuela homogénea, y varios de los que suelen incluirse rechazaron la etiqueta. Camus dijo expresamente que no era existencialista; Marcel, que representaba la vertiente cristiana, también terminó por rechazarla; y Heidegger, de quien todos toman vocabulario, se separó de Sartre en la Carta sobre el humanismo (1946): su pregunta era por el ser, no por el ser humano.`,
    tesis:[
      "No hay una naturaleza humana dada de antemano: cada persona se hace con lo que elige.",
      "La angustia no es una enfermedad sino la conciencia de que somos libres y no tenemos excusas.",
      "Hacerse pasar por una cosa determinada para no tener que elegir es engañarse a uno mismo.",
      "La verdad que importa es la que se vive en primera persona, no la que encaja en un sistema.",
      "Al elegir para mí, propongo también una imagen de lo que debe ser un ser humano."],
    autores:[
      {mod:"fanon", rol:"En diálogo crítico, sin asumir el rótulo: toma de Sartre la mirada y la situación, pero muestra que la mirada racial no es recíproca y le discute «Orfeo negro»."},
      {mod:"kierkegaard", rol:"Precursor según la historiografía posterior; no usó el término, que es del s. XX. Pensó el individuo que existe, la angustia y la elección frente al sistema hegeliano, desde la fe cristiana."},
      {mod:"nietzsche", rol:"Precursor según la historiografía posterior (Jaspers, Kaufmann); no usó el término. Se lo vincula por la muerte de Dios y la creación de valores, aunque su crítica del sujeto libre lo aleja de Sartre."},
      {mod:"heidegger", rol:"Su análisis de la existencia en Ser y tiempo (1927) da el vocabulario (angustia, autenticidad, ser-para-la-muerte), pero rechazó la etiqueta y se separó de Sartre en la Carta sobre el humanismo."},
      {mod:"sartre", rol:"La formulación clásica, y el que asumió el nombre: existencia, libertad, mala fe y compromiso."},
      {mod:"beauvoir", rol:"Aceptó el nombre: la moral de la ambigüedad y la libertad situada, que llevará a El segundo sexo."}],
    otros:["Albert Camus", "Gabriel Marcel", "Karl Jaspers", "Miguel de Unamuno"],
    conceptos:["existencia","angustia","libertad","mala fe","proyecto","situación","absurdo","compromiso"],
    noConfundir:"No es una escuela del s. XIX: Kierkegaard y Nietzsche son precursores puestos ahí después, y Heidegger y Camus rechazaron el rótulo. No es pesimismo ni gusto por la desesperación: Sartre lo presentó como «un humanismo». Y no es lo mismo que el nihilismo: en su versión atea parte de que no hay valores dados, pero sostiene que somos responsables de crearlos.",
    hoy:"Vive en la ética de la autenticidad, en la psicoterapia existencial (Viktor Frankl, Irvin Yalom) y en el feminismo y el pensamiento anticolonial que heredaron la idea de libertad situada.",
    de:["fenomenologia"], vecinas:["fenomenologia","nihilismo"], rivales:["marxismo", "estructuralismo"] },

  { id:"nihilismo", nombre:"Nihilismo", periodo:"s. XIX – hoy", desde:1862, hasta:null, trad:"varias",
    pregunta:"¿Qué pasa cuando los valores por los que se vivía dejan de valer?",
    lema:"Los valores supremos se desvalorizan.",
    resumen:`Más que una doctrina, el nihilismo es sobre todo un diagnóstico, una palabra para nombrar una crisis, y casi siempre la usan quienes quieren superarlo. En filosofía la usó Jacobi en 1799 para acusar al idealismo de Fichte de disolver toda realidad en el yo. Se populariza con la novela Padres e hijos (1862) de Turguéniev, cuyo personaje Bazárov se declara nihilista: no se inclina ante ningún principio, por venerado que sea. Algunos jóvenes radicales rusos de esos años, como Písarev, asumieron el nombre: querían barrer la autoridad, la religión, el arte y la tradición en nombre de las ciencias naturales.

Nietzsche le da su sentido filosófico más influyente, sobre todo en apuntes de la década de 1880 que no publicó: con la «muerte de Dios», los valores supremos de Occidente se desvalorizan y nada ocupa su lugar. Distingue un nihilismo pasivo, el cansancio de quien ya no quiere nada, y uno activo, que destruye lo caduco para abrir espacio a nuevos valores. Para él, el nihilismo no empieza con el ateísmo: ya estaba en la moral que despreciaba esta vida en nombre de otra. No lo celebra ni se limita a describirlo desde afuera: en uno de esos apuntes se presenta como alguien que lo vivió hasta el final para dejarlo atrás.

Heidegger lee incluso la respuesta de Nietzsche como la culminación del nihilismo: la metafísica occidental olvidó el ser, y ese olvido termina en la técnica moderna, que convierte todo, incluso al ser humano, en recurso disponible. Desde Japón, la Escuela de Kioto responde con otra idea de la nada, inspirada en el budismo: no la falta de sentido, sino el lugar desde donde las cosas aparecen. Nishitani Keiji, discípulo de Nishida que también estudió con Heidegger, sostiene que atravesar el nihilismo hasta esa nada es superarlo. La escuela carga con su propia controversia por su cercanía al nacionalismo japonés durante la guerra.`,
    tesis:[
      "Los valores más altos pierden su fuerza y nada ocupa su lugar: ese es el acontecimiento central de la época.",
      "Ningún principio merece respeto por ser venerado: el arte, la religión y las costumbres heredadas hay que negarlos y barrerlos, y lo que se construya después no es asunto nuestro.",
      "Hay un vacío que se padece con cansancio y otro que se empuja con fuerza para destruir lo caduco y crear valores nuevos.",
      "La época que trata todo, incluso a las personas, como un recurso disponible para ser explotado es la culminación de un largo olvido.",
      "La nada no es la falta de sentido sino el lugar donde las cosas aparecen; atravesarla hasta el fondo es la salida."],
    autores:[
      {mod:"nietzsche", rol:"El diagnóstico clásico, sobre todo en apuntes póstumos: la muerte de Dios, el nihilismo pasivo y el activo, y la tarea de superarlo."},
      {mod:"heidegger", rol:"Lee el nihilismo como destino de la metafísica occidental, que culmina en la técnica; incluye a Nietzsche en él."},
      {mod:"nishida", rol:"Su nada absoluta es la base sobre la que su discípulo Nishitani piensa la superación del nihilismo."},
      {mod:"west", rol:"Crítico: el nihilismo como amenaza vivida en las comunidades negras de EE. UU."}],
    otros:["Iván Turguéniev","Dmitri Písarev","Fiódor Dostoievski","Friedrich Heinrich Jacobi","Nishitani Keiji","Ernst Jünger"],
    conceptos:["muerte de Dios","nihilismo pasivo","nihilismo activo","transmutación de los valores","Gestell","nada absoluta","vacuidad"],
    noConfundir:"No es tanto una doctrina como un diagnóstico, casi siempre para superarlo; los pocos que se llamaron nihilistas, como los radicales rusos de 1860, usaban la palabra para una crítica sin concesiones, no para decir que nada importa. Tampoco es lo mismo que el existencialismo ni que el pesimismo: Nietzsche lo describe como un tránsito, y la nada de Kioto no es negativa.",
    hoy:"La palabra circula para nombrar la apatía, el cinismo o la sensación de que nada importa, a veces sin el rigor del diagnóstico original. El debate sobre la técnica de Heidegger sigue en la filosofía de la tecnología.",
    de:["idealismo","positivismo"], vecinas:["existencialismo","fenomenologia","budismo", "estructuralismo"], rivales:["socratismo"] },

  { id:"fenomenologia", nombre:"Fenomenología y hermenéutica", periodo:"s. XX – hoy", desde:1900, hasta:null, trad:"europea",
    pregunta:"¿Cómo se nos da el mundo antes de que lo expliquemos, y cómo comprendemos lo que nos llega?",
    lema:"¡A las cosas mismas!",
    resumen:`La fenomenología empieza con las Investigaciones lógicas de Edmund Husserl (1900-1901). Su consigna es volver «a las cosas mismas»: antes de explicar el mundo con teorías, describir con rigor cómo aparece en la experiencia. Más tarde (Ideas, 1913) propone para eso suspender la creencia ingenua en el mundo y atender a la conciencia, que siempre es conciencia de algo.

Heidegger, su asistente y luego su sucesor en Friburgo, desplaza la pregunta: no partimos de una conciencia que mira objetos, sino de un existente que ya está en el mundo, ocupado con cosas que le importan, y que siempre comprende desde una situación. De esta tradición beben el existencialismo de Sartre y Beauvoir, la teoría política de Arendt y la hermenéutica, el arte de interpretar. Gadamer (Verdad y método, 1960) sostiene que comprender es un diálogo en el que ponemos en juego nuestros prejuicios, y Ricoeur une la interpretación de textos con la pregunta por la identidad y el relato. María Zambrano, formada con Ortega, dialoga con esta tradición desde su razón poética.

La corriente tiene una sombra que no se puede omitir: Heidegger se afilió al partido nazi en 1933 como rector de Friburgo, y sus Cuadernos negros, publicados desde 2014, muestran pasajes antisemitas. Cómo pesa eso en su obra sigue en discusión.`,
    tesis:[
      "Toda conciencia es conciencia de algo: no hay un pensar vacío que después se asome al mundo.",
      "Para describir lo que aparece hay que suspender la creencia ingenua en el mundo y atender a cómo se nos da.",
      "Antes de conocer las cosas como objetos ya estamos entre ellas, usándolas y preocupados por lo que nos importa.",
      "Comprender siempre parte de prejuicios heredados; no se trata de eliminarlos, sino de ponerlos a prueba en el diálogo con lo que se interpreta.",
      "Un texto, una vez escrito, se separa de la intención de su autor y abre un mundo que el lector puede habitar."],
    autores:[
      {mod:"fanon", rol:"Describe en primera persona la experiencia vivida del cuerpo racializado, con el esquema corporal de Merleau-Ponty."},
      {mod:"foucault", rol:"Crítico: formado en ella, la combatió como filosofía del sujeto fundador del sentido y opuso a la conciencia el análisis de los discursos y las prácticas."},
      {mod:"levinas", rol:"Formado con Husserl y Heidegger, lleva la fenomenología hacia una ética del rostro y discute la primacía de la ontología."},
      {mod:"heidegger", rol:"Del análisis de la existencia a la hermenéutica; su compromiso nazi de 1933 es parte de su historia."},
      {mod:"arendt", rol:"Formada con Heidegger y Jaspers, piensa la acción, la pluralidad y el juicio."},
      {mod:"sartre", rol:"Lleva la fenomenología a una filosofía de la libertad y la conciencia."},
      {mod:"beauvoir", rol:"La experiencia vivida y la situación como método para pensar a las mujeres."},
      {mod:"zambrano", rol:"En diálogo: la razón poética frente a la razón que solo define y domina."}],
    otros:["Edmund Husserl", "Hans-Georg Gadamer", "Paul Ricoeur", "Maurice Merleau-Ponty", "Edith Stein", "José Ortega y Gasset"],
    conceptos:["intencionalidad","epojé","fenómeno","ser-en-el-mundo","mundo de la vida","círculo hermenéutico","fusión de horizontes","prejuicio"],
    noConfundir:"La fenomenología no estudia fenómenos en el sentido de cosas raras, sino el modo en que cualquier cosa aparece. Y la hermenéutica no es un método para encontrar la única interpretación correcta, ni tampoco la idea de que cualquier interpretación vale.",
    hoy:"Vive en la psicología y la psiquiatría fenomenológicas, en las ciencias cognitivas de la cognición corporizada y en la teoría de la interpretación en derecho, historia y teología.",
    de:["racionalismo","idealismo"], vecinas:["existencialismo","nihilismo"], rivales:["positivismo","analitica", "estructuralismo"] },

  { id:"estructuralismo", nombre:"Estructuralismo y posestructuralismo", periodo:"1916 – fines del s. XX (auge en Francia, 1955–1980)", desde:1916, hasta:2000, trad:"europea",
    pregunta:"¿Somos nosotros quienes damos sentido al lenguaje y a la cultura, o son sistemas que nadie eligió los que nos dan forma y hablan a través de nosotros?",
    lema:"El sentido no está en las cosas ni en la conciencia, sino en las diferencias de un sistema.",
    resumen:`Su base es el Curso de lingüística general de Ferdinand de Saussure, publicado en 1916, tres años después de su muerte, por discípulos que lo reconstruyeron con apuntes de clase. Saussure propone estudiar la lengua como un sistema en un momento dado, no como una historia de palabras: un signo vale por su diferencia con los demás, y el lazo entre el significante (la imagen acústica) y el significado (el concepto) es arbitrario. Saussure habla sobre todo de «sistema»; «estructura» y «estructuralismo» se imponen después, con lingüistas como Roman Jakobson.

En los años cincuenta y sesenta el método sale de la lingüística y se vuelve una moda intelectual francesa. Claude Lévi-Strauss, que conoció a Jakobson en Nueva York durante la guerra, analiza el parentesco y los mitos como sistemas de oposiciones; Jacques Lacan relee a Freud y sostiene que el inconsciente está estructurado como un lenguaje; Roland Barthes estudia la moda y la publicidad como signos, y Louis Althusser lee a Marx contra el humanismo. Su blanco común es el sujeto que da sentido, de la fenomenología y del existencialismo: Lévi-Strauss polemizó con Sartre en El pensamiento salvaje (1962).

«Posestructuralismo» es una etiqueta posterior, sobre todo de las universidades de EE. UU., para quienes desarmaron ese programa desde dentro: Jacques Derrida, que en un congreso en Baltimore en 1966 mostró que toda estructura supone un centro que ella misma no puede justificar; Gilles Deleuze, que pensó la diferencia sin subordinarla a la identidad; Michel Foucault, que historió las condiciones en que algo cuenta como verdad. Ninguno se llamó así, y Foucault rechazó que lo llamaran estructuralista; Lévi-Strauss y Barthes, en cambio, sí usaron ese nombre en los sesenta.`,
    tesis:[
      "Una palabra no significa por sí sola, sino por su diferencia con las demás palabras de la lengua; y el lazo entre un sonido y un concepto es arbitrario.",
      "Los mitos de pueblos muy distantes pueden compararse porque combinan, según reglas que nadie eligió conscientemente, unos pocos pares de opuestos, como crudo y cocido o naturaleza y cultura.",
      "El sujeto no es el origen del sentido: la lengua, el inconsciente y las instituciones hablan a través de él antes de que él hable.",
      "Hay que dejar de preguntar qué quiso decir el autor: el autor es una figura reciente, y un texto es un tejido de citas que cobra sentido en quien lo lee.",
      "Las oposiciones con que piensa la tradición occidental —habla y escritura, presencia y ausencia, naturaleza y cultura— nunca son neutrales: una ocupa el lugar privilegiado, y una lectura atenta muestra que no se sostiene sin la otra."],
    autores:[
      {mod:"nietzsche", rol:"Antecedente reivindicado, sin relación con la lingüística: Deleuze le dedica Nietzsche y la filosofía (1962), Foucault toma de él la genealogía y Derrida lo lee en Espolones (1978)."},
      {mod:"heidegger", rol:"Antecedente para Derrida: la deconstrucción retoma y transforma la «destrucción» de la historia de la metafísica que Heidegger anunció en Ser y tiempo."},
      {mod:"foucault", rol:"Leído como estructuralista por Las palabras y las cosas (1966) y como posestructuralista después: rechazó la primera etiqueta y no usó la segunda. Arqueología de los saberes, genealogía del poder, muerte del hombre."}],
    otros:["Ferdinand de Saussure","Roman Jakobson","Claude Lévi-Strauss","Jacques Lacan","Roland Barthes","Louis Althusser","Gilles Deleuze","Jacques Derrida"],
    conceptos:["significante y significado","lengua y habla","sincronía y diacronía","oposición binaria","descentramiento del sujeto","muerte del autor","deconstrucción","différance"],
    noConfundir:"No es lo mismo que el posmodernismo, otra etiqueta de otros (la difundió Lyotard en 1979), ni la tesis de que cualquier interpretación vale: Derrida reclamaba leer con un rigor extremo. Y «estructura» no es aquí un armazón fijo, sino un sistema de relaciones en el que cada elemento vale por su posición.",
    hoy:"Sigue en la teoría literaria, el psicoanálisis, los estudios de género (Judith Butler parte de Foucault, Derrida y Lacan) y la teoría poscolonial. En 1996 el físico Alan Sokal logró publicar un artículo paródico en una revista académica, y después criticó con Jean Bricmont el uso de la matemática en Lacan, Deleuze y otros: la polémica sobre su rigor sigue abierta.",
    de:["fenomenologia","marxismo"], vecinas:["marxismo","nihilismo"], rivales:["existencialismo","fenomenologia"] },
  { id:"analitica", nombre:"Filosofía analítica", periodo:"fines del s. XIX – hoy", desde:1879, hasta:null, trad:"europea",
    pregunta:"¿Qué queremos decir exactamente cuando decimos algo?",
    lema:"Los límites de mi lenguaje significan los límites de mi mundo.",
    resumen:`Nace entre fines del siglo XIX y comienzos del XX con Gottlob Frege, Bertrand Russell, G. E. Moore y Ludwig Wittgenstein. Frege construye una lógica nueva y distingue entre el sentido de una expresión y aquello a lo que se refiere; Russell muestra que la forma gramatical de una oración puede esconder su forma lógica. La filosofía se vuelve análisis: aclarar conceptos y argumentos con la ayuda de la lógica.

Wittgenstein la atraviesa dos veces. En el Tractatus (1921) el lenguaje es una figura de los hechos y lo que no se puede decir hay que callarlo; en las Investigaciones filosóficas (1953) abandona esa imagen: el significado está en el uso, en los «juegos de lenguaje». El Círculo de Viena (Schlick, Carnap, Neurath) radicaliza la primera etapa: un enunciado que no puede verificarse ni es verdadero por pura lógica carece de sentido, y con eso descarta buena parte de la metafísica.

Con el tiempo dejó de ser una doctrina para volverse un estilo: claridad, argumentos explícitos, atención al lenguaje y a la ciencia. Desde dentro, Quine atacó sus dogmas y Richard Rorty, formado en ella, sostuvo en La filosofía y el espejo de la naturaleza (1979) que su búsqueda de fundamentos era una ilusión.`,
    tesis:[
      "Muchos problemas filosóficos nacen de malentender la lógica de nuestro lenguaje, y se disuelven cuando se la aclara.",
      "Dos expresiones pueden referirse al mismo objeto y tener, sin embargo, sentidos distintos, como «el lucero de la mañana» y «el lucero de la tarde».",
      "Un enunciado que no puede verificarse por la experiencia ni es verdadero por pura lógica no es falso: carece de sentido.",
      "El significado de una palabra no es una cosa a la que nombra, sino el uso que tiene en una forma de vida.",
      "La filosofía no es una doctrina sino una actividad de aclaración, que avanza con definiciones precisas y argumentos explícitos."],
    autores:[
      {mod:"wittgenstein", rol:"Las dos etapas: el Tractatus y los juegos de lenguaje. El Círculo de Viena se inspiró en el Tractatus, pero él tomó distancia de esa lectura."},
      {mod:"rorty", rol:"Crítico desde dentro: formado en ella, denunció su ilusión de fundamentos."},
      {mod:"falacias", rol:"Ficha de método: el análisis de argumentos que esta corriente volvió hábito."}],
    otros:["Gottlob Frege","Bertrand Russell","G. E. Moore","Moritz Schlick","Rudolf Carnap","Otto Neurath","W. V. O. Quine","J. L. Austin"],
    conceptos:["análisis lógico","sentido y referencia","forma lógica","verificacionismo","juegos de lenguaje","significado como uso","giro lingüístico"],
    noConfundir:"No es lo mismo que el positivismo de Comte, aunque el Círculo de Viena se llamó «positivismo lógico». Y la oposición con la filosofía «continental» es más geográfica e institucional que de fondo: hay muchos puentes.",
    hoy:"Es el estilo dominante en las universidades de habla inglesa y fuerte en América Latina (filosofía de la mente, del lenguaje, lógica, ética aplicada). La lógica que impulsó está en la base de la informática teórica y de la semántica formal.",
    de:["empirismo","positivismo"], vecinas:["positivismo","pragmatismo"], rivales:["idealismo","fenomenologia"] },

  { id:"pragmatismo", nombre:"Pragmatismo", periodo:"fines del s. XIX – hoy", desde:1878, hasta:null, trad:"americana",
    pregunta:"Si una idea es verdadera, ¿qué diferencia concreta hace eso en la experiencia de alguien, y qué significa una idea que no hace ninguna?",
    lema:"Por sus frutos los conoceréis, no por sus raíces.",
    resumen:`Se la suele considerar el aporte más original de Estados Unidos a la filosofía. Nace en las discusiones del Club Metafísico de Cambridge (Massachusetts) en la década de 1870, y Charles S. Peirce le da su regla en 1878: para aclarar una idea hay que preguntarse qué efectos prácticos concebibles tendría. William James la populariza desde 1898 y la convierte en una teoría de la verdad: una idea es verdadera si funciona, si nos guía bien en la experiencia. Peirce, molesto con esa versión, rebautizó la suya «pragmaticismo».

John Dewey la lleva a la educación y a la política. Pensar es resolver problemas: la indagación empieza cuando una situación nos desconcierta y termina cuando la acción vuelve a fluir. Contra la «teoría del espectador», el conocimiento no copia el mundo sino que lo transforma. La democracia es una forma de vida, y la escuela, el lugar donde se aprende haciendo.

Tras un eclipse frente a la filosofía analítica, Richard Rorty la revive en los años ochenta: abandonar la búsqueda de fundamentos y poner la solidaridad en lugar de la objetividad. Cornel West la cruza con la tradición profética afroamericana y la crítica social, y reconstruye su historia en La evasión americana de la filosofía (1989).`,
    tesis:[
      "Para aclarar una idea hay que preguntarse qué efectos prácticos concebibles tendría que fuera verdadera.",
      "Una creencia es verdadera en la medida en que funciona: nos guía bien y nos lleva con éxito de una experiencia a otra.",
      "Pensar es resolver problemas: la indagación empieza ante una situación que desconcierta y termina cuando la acción vuelve a fluir.",
      "Ninguna creencia está a salvo de revisión; el conocimiento lo construye una comunidad que corrige sus errores.",
      "El conocimiento no es un espejo que copia el mundo desde afuera, sino una herramienta para transformarlo."],
    autores:[
      {mod:"peirce", rol:"El fundador: la máxima pragmática, el falibilismo y la comunidad de investigadores."},
      {mod:"james", rol:"Lo populariza: la verdad como lo que funciona y la voluntad de creer."},
      {mod:"dewey", rol:"El instrumentalismo, la educación progresiva y la democracia como forma de vida."},
      {mod:"rorty", rol:"El neopragmatismo: sin fundamentos, solidaridad en lugar de objetividad."},
      {mod:"west", rol:"El pragmatismo profético: la tradición vuelta crítica social."}],
    otros:["George Herbert Mead","Jane Addams","Chauncey Wright","W. E. B. Du Bois","Hilary Putnam","Susan Haack","Robert Brandom"],
    conceptos:["máxima pragmática","falibilismo","indagación","instrumentalismo","comunidad de investigadores","experiencia","crecimiento","antifundacionalismo"],
    noConfundir:"No es ser «práctico» en el sentido de oportunista o de buscar solo lo útil para uno: es una teoría sobre el significado y la verdad. Y no es una escuela unánime: Peirce, James y Dewey discrepaban en cosas importantes.",
    hoy:"Inspira la pedagogía activa y por proyectos, la teoría democrática deliberativa y parte de la filosofía de la ciencia. Hay un neopragmatismo analítico (Putnam, Brandom) y un pragmatismo crítico ligado a la raza y la democracia.",
    de:["empirismo","idealismo"], vecinas:["analitica","utilitarismo"], rivales:["racionalismo"] },

  { id:"liberacion", nombre:"Pensamiento latinoamericano y filosofía de la liberación", periodo:"s. XIX – hoy (antecedentes en el s. XVI)", desde:1891, hasta:null, trad:"americana",
    pregunta:"¿Hay una filosofía propia de nuestra América, y qué cambia en el pensamiento cuando se lo hace desde los excluidos y no desde el centro?",
    lema:"Injértese en nuestras repúblicas el mundo; pero el tronco ha de ser el de nuestras repúblicas.",
    resumen:`Tiene un antecedente en el siglo XVI: Bartolomé de las Casas, que denunció la conquista y defendió que los pueblos indígenas eran plenamente humanos. En 1891 José Martí escribe «Nuestra América»: hay que gobernar conociendo los elementos del propio país, y no con libros importados. En el siglo XX, José Vasconcelos exalta el mestizaje en La raza cósmica (1925), con un lenguaje eugenésico que hoy se critica; Mariátegui piensa un socialismo desde el problema indígena, y Leopoldo Zea pregunta si existe una filosofía americana y responde que sí, si parte de nuestra circunstancia.

En los años setenta nace la filosofía de la liberación en sentido estricto, con Enrique Dussel en Argentina y luego en México. Su punto de partida es la víctima, el excluido que queda fuera del sistema, y su tesis histórica es que la modernidad tiene una cara oculta: la conquista y la colonización de América.

La corriente tiene parientes cercanos en la pedagogía y las ciencias sociales: Paulo Freire y la educación como práctica de la libertad, Orlando Fals Borda y la investigación-acción participativa, Estanislao Zuleta y su crítica de los ideales que no toleran el conflicto. No es una escuela unificada: hay vertientes cristianas, marxistas, populistas y decoloniales, con polémicas fuertes entre ellas.`,
    tesis:[
      "Pensar desde aquí no es copiar sistemas ajenos, sino partir de nuestra propia circunstancia histórica, sin renunciar a dialogar con ellos.",
      "La modernidad tiene una cara oculta: la conquista y la colonización de los pueblos que quedaron por fuera de su relato.",
      "El pobre, el excluido y la víctima no son un tema más del pensamiento ético: son su punto de partida.",
      "Nadie educa a nadie y nadie se educa solo: las personas se educan entre sí, con el mundo como mediador.",
      "Quien investiga no estudia a una comunidad como objeto: investiga con ella y le devuelve lo que se sabe para que transforme su realidad."],
    autores:[
      {mod:"fanon", rol:"Pariente cercano y fuente: no es latinoamericano, pero Freire, Dussel y el pensamiento decolonial lo leyeron como punto de partida para pensar desde la herida colonial."},
      {mod:"levinas", rol:"Precursor decisivo: Dussel toma de él la exterioridad y el rostro que interpela, y les da domicilio histórico."},
      {mod:"lascasas", rol:"Antecedente del siglo XVI: la defensa de la humanidad de los indígenas."},
      {mod:"marti", rol:"«Nuestra América»: el gobierno y el pensamiento desde lo propio."},
      {mod:"vasconcelos", rol:"El mestizaje como valor, con un lenguaje eugenésico que hoy se critica."},
      {mod:"mariategui", rol:"Un socialismo indoamericano pensado desde la tierra y las comunidades."},
      {mod:"zea", rol:"La filosofía americana como filosofía sin más, y contra el colonialismo mental."},
      {mod:"freire", rol:"La pedagogía del oprimido y la concientización."},
      {mod:"dussel", rol:"La filosofía de la liberación en sentido estricto: exterioridad, víctima, transmodernidad."},
      {mod:"falsborda", rol:"La investigación-acción participativa y la ciencia propia."},
      {mod:"zuleta", rol:"En diálogo: el elogio de la dificultad y la crítica del sectarismo en Colombia."}],
    otros:["Andrés Bello", "Francisco Miró Quesada", "Augusto Salazar Bondy", "Arturo Andrés Roig", "Rodolfo Kusch", "Gustavo Gutiérrez", "Aníbal Quijano"],
    conceptos:["Nuestra América","mestizaje","colonialismo mental","exterioridad","víctima","concientización","investigación-acción participativa","transmodernidad"],
    noConfundir:"No es rechazar la filosofía europea: sus autores la leen a fondo y discuten con ella. Y no es lo mismo que la teología de la liberación, aunque nacen en la misma época y comparten la opción por los pobres.",
    hoy:"Sigue en el pensamiento decolonial (Quijano, Mignolo), en la educación popular y en la investigación participativa que se practica en universidades y organizaciones sociales colombianas.",
    de:["iusnaturalismo","marxismo","fenomenologia"], vecinas:["marxismo","feminismo", "anticolonialismo"], rivales:["positivismo"] },

  { id:"anticolonialismo", nombre:"Pensamiento anticolonial y poscolonial", periodo:"desde comienzos del s. XX (teoría poscolonial desde 1978)", desde:1909, hasta:null, trad:"varias",
    pregunta:"¿Qué le hace la dominación de un pueblo sobre otro a la manera en que el dominado se piensa a sí mismo, y cómo se recupera una voz propia?",
    lema:"Descolonizar no es solo cambiar de bandera: es cambiar la mirada.",
    resumen:`Reúne a pensadores muy distintos que se preguntaron qué hace la dominación colonial a quienes la sufren y cómo se sale de ella. En la India, Gandhi propone en Hind Swaraj (1909) una independencia que no copie la civilización del ocupante y una lucha sin violencia; B. R. Ambedkar, jurista nacido intocable, le responde que no hay liberación mientras subsista el sistema de castas. En el Caribe francés, Aimé Césaire, poeta de la negritud, sostiene en el Discurso sobre el colonialismo (1950) que la colonización convierte a las personas en cosas; su alumno Frantz Fanon analiza desde la psiquiatría cómo el racismo se mete en el cuerpo y en la conciencia, y se suma a la guerra de independencia de Argelia.

Con Orientalismo (1978), de Edward Said, nace en las universidades de habla inglesa la llamada teoría poscolonial: estudia cómo los saberes, la literatura y las imágenes europeas fabricaron al «otro» que se gobernaba. Gayatri Spivak, traductora de Derrida, pregunta si el subalterno puede hablar cuando otros hablan por él; Homi Bhabha piensa la hibridez y la imitación ambivalente. «Poscolonial» no quiere decir que el colonialismo haya terminado: nombra lo que sigue operando después de las independencias.

No es una escuela ni una doctrina. Gandhi defendía la no violencia y Fanon pensó la violencia como parte de la descolonización; Ambedkar desconfiaba del nacionalismo que Gandhi encarnaba. Lo que comparten es una sospecha: que el universalismo europeo —la civilización, el progreso, el humanismo— sirvió también para justificar la conquista, y que hay que pensarlo de nuevo desde quienes la sufrieron.`,
    tesis:[
      "La dominación de un pueblo sobre otro no se sostiene solo con armas: necesita que el dominado termine viéndose con los ojos de su amo y sintiéndose inferior en su propia piel.",
      "Los saberes que pintaron a los pueblos de Oriente como inmóviles, sensuales e incapaces de gobernarse no fueron un error inocente: formaron parte del aparato con que se los gobernó.",
      "Expulsar al gobernante extranjero no basta si se conservan su civilización y su Estado: sería quedarse con el mismo dominio y cambiar solo de dominador.",
      "Lo que escandalizó a Europa del nazismo no fue tanto el crimen contra el ser humano como que aplicara en Europa los métodos que hasta entonces reservaba para los pueblos de África y Asia.",
      "Cuando los poderosos hablan en nombre de los más oprimidos de un país sometido, aunque sea para salvarlos, estos pueden seguir sin ser escuchados."],
    autores:[
      {mod:"marti", rol:"Precursor desde Cuba: «Nuestra América» (1891) pide gobernar desde lo propio y advierte contra el imperialismo de EE. UU.; murió en la guerra de independencia contra España (1895)."},
      {mod:"gandhi", rol:"La independencia como autogobierno (swaraj) y la lucha sin violencia (satyagraha); también sus límites: defendió durante décadas el varna frente a Ambedkar."},
      {mod:"fanon", rol:"La alienación racial vivida en primera persona, la descolonización como ruptura y la crítica de la burguesía nacional que solo quiere ocupar el lugar del colono."}],
    otros:["Aimé Césaire","B. R. Ambedkar","Amílcar Cabral","Edward Said","Gayatri Chakravorty Spivak","Homi K. Bhabha","Ranajit Guha","Ngũgĩ wa Thiong'o"],
    conceptos:["satyagraha","swaraj","negritud","cosificación","descolonización","orientalismo","subalterno","hibridez"],
    noConfundir:"Anticolonial, poscolonial y decolonial no son sinónimos: el primero nombra las luchas y los textos de las independencias; el segundo, una teoría académica de los años ochenta, escrita sobre todo en inglés; el tercero, una corriente latinoamericana (Aníbal Quijano, Walter Mignolo) que habla de «colonialidad del poder» y se distingue de la poscolonial. Y no es un rechazo de todo lo europeo: Fanon cierra Los condenados de la tierra llamando a crear un hombre nuevo, no a imitar ni a destruir a Europa.",
    hoy:"Inspira los debates sobre la restitución de objetos de los museos europeos, sobre programas de estudio que solo enseñan autores europeos y sobre las estatuas de conquistadores y esclavistas, como la campaña Rhodes Must Fall (Ciudad del Cabo, 2015). Tiene críticos también en la izquierda: Vivek Chibber le reprocha haber cambiado el análisis del capitalismo por el de la cultura.",
    de:["marxismo","existencialismo","estructuralismo"], vecinas:["liberacion","marxismo"], rivales:[] },
  { id:"feminismo", nombre:"Feminismo", periodo:"fines del s. XVIII – hoy (precursoras antes)", desde:1792, hasta:null, trad:"varias",
    pregunta:"¿Por qué la diferencia entre los sexos se convirtió en subordinación, y cuánto de lo que se llama «femenino» es naturaleza y cuánto construcción social?",
    lema:"No se nace mujer: se llega a serlo.",
    resumen:`Tiene precursoras: Sor Juana Inés de la Cruz defendió en 1691 el derecho de las mujeres a estudiar. Como movimiento filosófico nace con la Ilustración: Mary Wollstonecraft, en Vindicación de los derechos de la mujer (1792), sostiene que la supuesta inferioridad femenina es producto de la educación. John Stuart Mill y Harriet Taylor, con quien pensó y escribió, extienden el principio liberal de igualdad: La sujeción de las mujeres (1869), que Mill publicó después de la muerte de Taylor y atribuyó en buena parte a sus ideas, denuncia el matrimonio como una forma legal de servidumbre. Ni Sor Juana, ni Wollstonecraft, ni Mill usaron la palabra «feminismo», que se difunde recién a fines del s. XIX.

Simone de Beauvoir, en El segundo sexo (1949), muestra que la mujer ha sido definida como lo Otro del varón, que se toma como medida de lo humano: lo femenino no es un destino natural sino una situación. Se suele hablar de «olas»: el sufragio (primera), «lo personal es político» (segunda, desde los sesenta), la diversidad (tercera) y la movilización masiva y en redes (cuarta, con Ni Una Menos desde 2015). La metáfora misma se discute por centrarse en el mundo anglosajón.

Los debates internos son fuertes. Las feministas negras (Combahee River Collective, bell hooks, Angela Davis) acusaron al feminismo blanco de ignorar la raza y la clase; de ahí la interseccionalidad, término que Kimberlé Crenshaw propuso en 1989. En América Latina hubo feminismos populares, comunitarios y decoloniales que cuestionan al feminismo del Norte. Hay desacuerdos sin resolver sobre igualdad y diferencia, prostitución, y sobre la categoría de sexo y la inclusión de las mujeres trans.`,
    tesis:[
      "Las diferencias de carácter entre hombres y mujeres son, en gran parte, producto de la educación y no de la naturaleza.",
      "La humanidad se ha pensado tomando al varón como medida, y a la mujer como lo otro, lo que se define por relación a él.",
      "Lo que pasa en la casa, en la pareja y en el reparto de las tareas domésticas también es un asunto de poder.",
      "La opresión de una mujer negra y pobre no se entiende sumando por separado racismo, sexismo y clase: se entrecruzan.",
      "Negarle a la mitad de la humanidad la educación y los derechos civiles contradice el principio de igual libertad que dice defender la sociedad moderna."],
    autores:[
      {mod:"hildegarda", rol:"Antecedente discutido: recuperada por la historiografía feminista por su autoridad de mujer en la Iglesia del siglo XII, aunque aceptaba la subordinación femenina."},
      {mod:"sorjuana", rol:"Precursora: el derecho de las mujeres al saber, en la Nueva España del siglo XVII."},
      {mod:"mill", rol:"La sujeción de las mujeres, pensada junto con Harriet Taylor."},
      {mod:"beauvoir", rol:"El segundo sexo (1949): la mujer como lo Otro y lo femenino como situación. Ella misma recién se declaró feminista en los años setenta."}],
    otros:["Mary Wollstonecraft", "Harriet Taylor Mill", "Olympe de Gouges", "bell hooks", "Angela Davis", "Audre Lorde", "Julieta Kirkwood", "María Lugones"],
    conceptos:["patriarcado","género","lo Otro","lo personal es político","interseccionalidad","olas del feminismo","igualdad y diferencia","sororidad"],
    noConfundir:"No es la idea de que las mujeres son superiores ni un simple espejo del machismo: su reclamo de partida es la igualdad. Y no es uno solo: liberal, radical, marxista, negro, comunitario y decolonial discrepan en diagnósticos y soluciones.",
    hoy:"Está en el derecho (violencia de género, paridad, aborto), en la economía del cuidado y en la crítica de los sesgos de la ciencia. En América Latina, la marea verde y Ni Una Menos son movilizaciones masivas.",
    de:["ilustracion"], vecinas:["existencialismo","liberacion","marxismo"], rivales:["aristotelismo","contractualismo"] }
];
