/* Ágora · diagramas de cada ficha (pestaña «Diagramas», en Estudiar).
   DIAGRAMAS.<id> = [ {tipo, titulo, intro, nodos, ...} ]; los tipos y sus campos están descritos
   al principio de app/diagramas.js. Las etiquetas (t, o a/b en los polos) son cortas y distintas
   dentro de cada diagrama, porque en «Completá» el estudiante las ubica en su lugar. */
const DIAGRAMAS = {
  tales: [
    {tipo:"partes", titulo:"Tres respuestas a la pregunta por el principio", intro:"La misma pregunta —de qué está hecho todo y de dónde viene— recibió en Mileto tres respuestas, y cada una corrigió a la anterior.", centro:"Arché: ¿de dónde viene todo?", nota:"Presentar a los tres como maestro y discípulos viene de la tradición antigua, de Teofrasto a Diógenes Laercio; los vínculos personales no están documentados con certeza.",
     nodos:[
      {t:"Agua (Tales)", d:"Según Aristóteles, Tales puso el agua como principio y sostuvo que la tierra descansa sobre ella; sus razones, conjeturadas por Aristóteles, son que el alimento y las semillas son húmedos."},
      {t:"Ápeiron (Anaximandro)", d:"Lo ilimitado e indeterminado: el principio de los opuestos no puede ser uno de ellos, porque si fuera ilimitado habría destruido a su contrario."},
      {t:"Aire (Anaxímenes)", d:"Un principio determinado que se transforma por condensación y rarefacción: enrarecido es fuego; condensado, viento, nube, agua, tierra y piedras."}]},
    {tipo:"capas", titulo:"Cómo nos llegan los milesios", intro:"Del núcleo más seguro a la capa más legendaria: lo que sabemos de Tales, Anaximandro y Anaxímenes pasa por muchas manos.", nota:"La división es una simplificación: un mismo autor, como Diógenes Laercio, transmite en la misma página datos de cronógrafos, opiniones y leyendas.",
     nodos:[
      {t:"Fragmentos: palabras propias", d:"Lo que se cree dicho por el autor mismo. De Tales, nada seguro; de Anaximandro, una frase sobre la injusticia y el orden del tiempo; de Anaxímenes, quizás ninguna."},
      {t:"Testimonios: Aristóteles y Teofrasto", d:"Informes del siglo IV a.C., dos siglos después de los milesios, hechos por lectores con una teoría propia, como la de las cuatro causas."},
      {t:"Doxografía tardía", d:"Resúmenes copiados y abreviados durante siglos, de Aecio a Simplicio, que dependen sobre todo de la obra perdida de Teofrasto."},
      {t:"Anécdotas y leyenda", d:"El eclipse, el pozo, las prensas de aceite, el trípode de los Siete Sabios: historias ejemplares sobre el sabio, que crecieron con el tiempo."}]}
  ],
  heraclito: [
    {tipo:"ciclo", titulo:"Las transformaciones del fuego", intro:"DK 30, 31, 60 y 90: el fuego siempre vivo se convierte en mar y en tierra, y vuelve a ser fuego, según medidas.", nota:"El orden del ciclo y el regreso del mar al fuego son una reconstrucción a partir de los fragmentos y de Diógenes Laercio (IX 9); Heráclito no lo expone como esquema.",
     nodos:[
      {t:"Fuego siempre vivo", d:"El mundo no lo hizo ningún dios ni ningún hombre: siempre fue, es y será fuego siempre vivo, que se enciende y se apaga según medidas (DK 30)."},
      {t:"Mar", d:"La primera transformación del fuego es el mar (DK 31): es el camino hacia abajo."},
      {t:"Tierra y torbellino", d:"La mitad del mar se vuelve tierra, y la otra mitad, torbellino ardiente (DK 31)."},
      {t:"La tierra se licúa en mar", d:"La tierra vuelve a ser mar y se mide en la misma proporción que tenía antes: el cambio conserva la medida (DK 31)."},
      {t:"Del mar al fuego", d:"Es el camino hacia arriba: el camino hacia arriba y hacia abajo es uno y el mismo (DK 60). Todo se cambia por fuego como las mercancías por oro (DK 90)."}]},
    {tipo:"secuencia", titulo:"Del río de Heráclito al «todo fluye»", intro:"Cómo un fragmento sobre los ríos se convirtió, a través de sus lectores, en la fórmula más famosa de la filosofía antigua.", nota:"La fórmula panta rhei no figura en ningún fragmento conservado. Qué versión del río es la original sigue en discusión.",
     nodos:[
      {t:"Heráclito: aguas distintas, mismos ríos", d:"DK 12, conservado por Ario Dídimo: sobre los que entran en los mismos ríos fluyen aguas distintas y distintas. El río es el mismo; lo que cambia es el agua."},
      {t:"Platón: todo se mueve, nada permanece", d:"En el Cratilo (402a), Sócrates resume a Heráclito con esa fórmula y la ilustra con el río en que no se puede entrar dos veces."},
      {t:"Crátilo: ni una sola vez", d:"Según Aristóteles (Metafísica IV), este seguidor de Heráclito llevó la tesis al extremo, terminó por no decir nada y solo movía el dedo."},
      {t:"Plutarco: no se puede entrar dos veces", d:"La versión más citada (DK 91), del siglo I-II d.C., que muchos estudiosos consideran una paráfrasis que ya incorpora la lectura platónica."},
      {t:"Kirk: lo mismo a través del cambio", d:"G. S. Kirk (1954) y otros intérpretes defienden que Heráclito afirmaba una medida que permanece en el cambio, no un flujo sin permanencia."}]}
  ],
  parmenides: [
    {tipo:"partes", titulo:"Los signos de lo que es", intro:"Fragmento 8: las propiedades que la diosa deduce, una por una, del rechazo del «no es».", centro:"Lo que es", nota:"Agrupar así los signos es una simplificación: el poema los anuncia juntos en los primeros versos y los demuestra en un orden un poco distinto.",
     nodos:[
      {t:"Ingénito e imperecedero", d:"No nace ni muere: nacer sería salir de lo que no es, que no se puede pensar ni decir, y nada explicaría que surgiera más tarde y no antes."},
      {t:"Ahora, todo junto", d:"No fue ni será: es ahora, todo a la vez. Lo que es no tiene un pasado en que no era ni un futuro en que dejará de ser."},
      {t:"Indivisible y continuo", d:"No hay más ser en un lugar que en otro, ni huecos de no ser: todo está lleno de lo que es, y lo que es está en contacto con lo que es."},
      {t:"Inmóvil", d:"Permanece en el mismo lugar, sujeto por las cadenas del límite. Moverse sería ir hacia donde no está, es decir, hacia lo que no es."},
      {t:"Completo y limitado", d:"No le falta nada; por eso no es infinito, porque lo ilimitado sería lo incompleto. Es como una esfera bien redonda, equilibrada desde el centro."}]},
    {tipo:"polos", titulo:"Verdad y opinión", intro:"Las dos partes del discurso de la diosa: lo que enseña el razonamiento y lo que creen los mortales.", polos:{"izq":"Vía de la verdad","der":"Vía de la opinión"}, nota:"La vía de la opinión no es un simple error: la diosa la expone con detalle, y por qué lo hace sigue siendo una pregunta abierta.",
     nodos:[
      {a:"Una sola realidad", b:"Dos formas: luz y noche", d:"La verdad conoce lo que es, uno y continuo; los mortales nombraron dos formas opuestas, el fuego etéreo y la noche densa, y de su mezcla explican todo."},
      {a:"Se juzga con el razonamiento", b:"Se guía por ojos y oídos", d:"La diosa pide juzgar con el logos; los mortales, llevados por la costumbre, siguen el ojo sin meta y el oído resonante."},
      {a:"Nada nace ni perece", b:"Nacer, morir y cambiar", d:"Para la verdad, el cambio es imposible; para la opinión, el mundo nace, se mueve y cambia de color, y esos son solo nombres de los mortales."},
      {a:"Discurso digno de confianza", b:"Orden engañoso de palabras", d:"Así llama la diosa a cada parte de su enseñanza: la primera persuade porque la acompaña la verdad; la segunda tiene un orden, pero engaña."}]}
  ],
  socrates: [
    {tipo:"ciclo", titulo:"Cómo avanza un élenchos", intro:"Los diálogos tempranos de Platón: el movimiento típico de una conversación socrática en torno a la pregunta «¿qué es X?».", nota:"Es un esquema reconstruido por los intérpretes a partir de diálogos como el Laques o el Eutifrón; Sócrates no describe su método en estos pasos.",
     nodos:[
      {t:"¿Qué es X?", d:"Sócrates pide una definición de una virtud o de un valor: qué es la valentía, la piedad, la templanza. No le sirve un ejemplo: quiere lo que todos los casos tienen en común."},
      {t:"El interlocutor define", d:"El otro propone una definición y Sócrates le pide que diga lo que realmente piensa, porque lo que se examina es la persona además de la tesis."},
      {t:"Acuerdos en otras premisas", d:"Sócrates obtiene el acuerdo del interlocutor en otras afirmaciones que parecen obvias: por ejemplo, que la valentía es algo noble."},
      {t:"Contradicción", d:"Las premisas aceptadas, juntas, contradicen la definición inicial. El interlocutor descubre que no sabía lo que creía saber."},
      {t:"Aporía", d:"La conversación queda sin salida: perplejidad, a veces enojo. Para Sócrates es un progreso, porque ya no se cree saber lo que no se sabe."},
      {t:"Nueva definición", d:"Se propone otra definición, más cuidadosa, y el examen vuelve a empezar. Muchos diálogos terminan sin haber encontrado la definición buscada."}]},
    {tipo:"partes", titulo:"Las fuentes del problema socrático", intro:"Sócrates no escribió nada: lo conocemos por lo que dijeron de él otros, que lo vieron de maneras distintas.", centro:"Sócrates", nota:"Tomar los diálogos tempranos de Platón como el retrato más fiel es la solución más extendida, no un hecho establecido.",
     nodos:[
      {t:"Aristófanes, Las nubes", d:"Comedia del 423 a.C., el único testimonio escrito en vida de Sócrates: lo pinta como un sofista que estudia el cielo, niega a los dioses tradicionales y enseña a ganar con el peor argumento."},
      {t:"Jenofonte, Recuerdos", d:"Un Sócrates práctico, piadoso y convencional, que da consejos sobre la amistad y la casa. Jenofonte no estuvo en el juicio y escribió para defender su memoria."},
      {t:"Platón, diálogos tempranos", d:"Apología, Critón, Eutifrón, Laques: un Sócrates que pregunta, refuta, dice no saber y no expone una metafísica. Suele tomarse como el retrato más cercano al histórico."},
      {t:"Platón, diálogos de madurez", d:"En República, Fedón o Banquete, Sócrates expone la teoría de las Formas, la anámnesis y el alma tripartita: doctrinas que casi todos atribuyen a Platón."},
      {t:"Aristóteles, testigo indirecto", d:"Nacido después de la muerte de Sócrates, informa que buscó definiciones universales en ética, pero no separó los universales de las cosas, como hizo Platón."}]}
  ],
  platon: [
    {tipo:"niveles", titulo:"La línea dividida", intro:"República VI: los grados del ser y del conocer, de lo más alto a lo más bajo.", eje:"más realidad y más verdad",
     nodos:[
      {t:"Inteligencia (noesis)", d:"Captación directa de las Formas, sin imágenes, ascendiendo dialécticamente hasta el Bien."},
      {t:"Pensamiento (dianoia)", d:"El saber matemático: razona sobre lo inteligible pero apoyándose en figuras y partiendo de hipótesis."},
      {t:"Creencia (pistis)", d:"La opinión sobre las cosas sensibles mismas: plantas, animales, objetos fabricados."},
      {t:"Imaginación (eikasia)", d:"El grado más bajo: tomar por reales las sombras y los reflejos."}]},
    {tipo:"secuencia", titulo:"Salida y regreso de la caverna", intro:"República VII: las etapas del prisionero liberado, imagen de la educación y de su falta.",
     nodos:[
      {t:"Encadenados ante sombras", d:"Desde niños los prisioneros ven solo sombras de figuras llevadas ante un fuego y las toman por la realidad entera, sin saber de qué son sombras."},
      {t:"Liberación forzada", d:"Uno es desatado y obligado a subir; la luz le duele y prefiere lo que veía antes: nadie sale solo de la caverna."},
      {t:"Reflejos y cosas", d:"Fuera, se acostumbra por etapas: primero mira sombras y reflejos en el agua, después las cosas mismas; no hay iluminación instantánea."},
      {t:"Contemplación del sol", d:"Al final puede mirar el sol mismo, imagen de la Idea del Bien, que da verdad a lo conocido y capacidad de conocer al que conoce."},
      {t:"Retorno obligado", d:"Debe volver a bajar; torpe en la oscuridad, es ridiculizado y amenazado de muerte. Ese retorno funda el deber político del filósofo."}]}
  ],
  aristoteles: [
    {tipo:"partes", titulo:"Las cuatro causas", intro:"Explicar algo es dar sus cuatro causas.", centro:"¿Por qué existe esta estatua?",
     nodos:[
      {t:"Material", d:"De qué está hecha: el bronce."},
      {t:"Formal", d:"Qué es, su forma o esencia: la figura que la define."},
      {t:"Eficiente", d:"Qué la produjo: el escultor y su arte."},
      {t:"Final", d:"Para qué existe: el fin al que se orienta, por ejemplo honrar a alguien."}]},
    {tipo:"polos", titulo:"La virtud como término medio", intro:"Ética a Nicómaco II: cada virtud ética es un medio entre dos vicios opuestos.", polos:{"izq":"vicio por defecto","der":"vicio por exceso"}, nota:"No es una media aritmética sino un medio relativo a nosotros, que fija la prudencia en cada caso; y hay acciones, como el homicidio, que no admiten medio.",
     nodos:[
      {a:"Cobardía", b:"Temeridad", d:"Entre ambas está el valor: temer lo que se debe, cuando y como se debe, ni huir de todo peligro ni arrojarse a cualquiera."},
      {a:"Avaricia", b:"Prodigalidad", d:"Entre ambas está la generosidad: dar y gastar en la medida adecuada, ni retener lo que conviene dar ni derrochar lo propio."},
      {a:"Insensibilidad", b:"Intemperancia", d:"Entre ambas está la templanza respecto de los placeres corporales; Aristóteles nota que el defecto es raro y casi no tiene nombre."}]}
  ],
  agustin: [
    {tipo:"secuencia", titulo:"El camino de una conversión", intro:"Confesiones III-VIII: las etapas por las que pasó Agustín antes del jardín de Milán.", nota:"El orden es el del relato de las Confesiones, escrito más de diez años después; Agustín organiza su vida desde el final, y los historiadores discuten cuánto de ese relato es reconstrucción.",
     nodos:[
      {t:"El Hortensio de Cicerón", d:"A los diecinueve años, en Cartago, un libro de Cicerón le despierta el amor por la sabiduría; le falta, dice, el nombre de Cristo."},
      {t:"Nueve años de maniqueísmo", d:"Encuentra una religión que promete explicarlo todo por la razón y que hace del mal una sustancia; lo decepciona la incapacidad de sus maestros para responder."},
      {t:"La duda de los académicos", d:"Desconfiado de todo, se inclina por el escepticismo de la Academia: el sabio no debe asentir a nada."},
      {t:"Los libros de los platónicos", d:"En Milán lee a Plotino y Porfirio: aprende a entrar en sí y a pensar a Dios y al alma sin imágenes corporales, pero no encuentra el camino para llegar."},
      {t:"El jardín de Milán", d:"Ya sabe qué hacer y no puede quererlo; oye «toma y lee», abre las cartas de Pablo y la voluntad dividida se reúne. La conversión se vive como un don."}]},
    {tipo:"polos", titulo:"Las dos ciudades", intro:"La ciudad de Dios XIV, 28: dos amores fundaron dos ciudades, que en esta vida están entremezcladas.", polos:{"izq":"ciudad terrena","der":"ciudad celestial"}, nota:"No son la Iglesia y el Estado: son dos maneras de amar, que atraviesan todas las instituciones y solo se separan en el juicio final.",
     nodos:[
      {a:"Amor de sí hasta despreciar a Dios", b:"Amor de Dios hasta despreciarse", d:"Lo que funda cada ciudad no es un territorio ni una ley, sino la orientación del amor."},
      {a:"Busca la gloria de los hombres", b:"Pone su gloria en Dios", d:"Una se gloría en sí misma y en la opinión ajena; la otra tiene por mayor gloria a Dios, testigo de la conciencia."},
      {a:"Deseo de dominar", b:"Servicio mutuo por caridad", d:"En una, los príncipes y las naciones son dominados por el deseo de dominar; en la otra, los que gobiernan y los que obedecen se sirven mutuamente."},
      {a:"Hace de la paz terrena su fin", b:"Usa la paz terrena como peregrina", d:"La ciudad celestial también necesita la tranquilidad del orden, pero no pone su esperanza en ningún imperio."}]}
  ],
  tomas: [
    {tipo:"partes", titulo:"Las cinco vías", intro:"Suma teológica I, q.2, a.3: cinco caminos que van de algo observado en el mundo a su causa primera.", centro:"Existencia de Dios", nota:"Todas son pruebas a posteriori, desde los efectos. Lo que concluyen es un primer principio; que sea el Dios de la fe se discute en las cuestiones siguientes.",
     nodos:[
      {t:"Movimiento", d:"Todo lo que pasa de la potencia al acto es movido por otro, y esa serie de motores no puede ir al infinito: hay un primer motor no movido."},
      {t:"Causa eficiente", d:"Nada es causa eficiente de sí mismo, y en las causas ordenadas no se puede ir al infinito: hay una primera causa eficiente."},
      {t:"Lo posible y lo necesario", d:"Las cosas que se generan y se corrompen pueden no ser; si todo pudiera no ser, ahora no habría nada: tiene que haber algo necesario por sí mismo."},
      {t:"Grados de perfección", d:"Hay cosas más y menos buenas, verdaderas y nobles; el más y el menos suponen un máximo que es causa de esas perfecciones."},
      {t:"Gobierno del mundo", d:"Cosas sin conocimiento obran por un fin, como la flecha que va al blanco; tiene que haber una inteligencia que las ordena."}]},
    {tipo:"niveles", titulo:"Los órdenes de la ley", intro:"Suma teológica I-II, q.91-95: de la razón con que Dios gobierna el universo a las leyes de una ciudad.", eje:"cada nivel participa del anterior", nota:"Tomás agrega la ley divina, revelada en la Escritura, que no está debajo de la natural, sino que la completa para orientar al ser humano a un fin que supera la naturaleza.",
     nodos:[
      {t:"Ley eterna", d:"El plan de la razón divina que gobierna todo el universo. Nadie la conoce entera, pero todo lo creado la refleja de algún modo."},
      {t:"Ley natural", d:"La participación de la ley eterna en la criatura racional. Su primer precepto es hacer el bien y evitar el mal, y se ordena según las inclinaciones naturales."},
      {t:"Ley humana", d:"Concreta la ley natural para una comunidad, por conclusión o por determinación. Si la contradice, no es ley, sino corrupción de ley."}]}
  ],
  descartes: [
    {tipo:"secuencia", titulo:"El camino de la duda", intro:"Meditaciones I y II: de la duda a la primera certeza.",
     nodos:[
      {t:"Duda de los sentidos", d:"Los sentidos a veces engañan; no conviene fiarse de quien engañó una vez."},
      {t:"Argumento del sueño", d:"No hay señales seguras para distinguir la vigilia del sueño."},
      {t:"Genio maligno", d:"Hipótesis de un engañador poderoso que nos haría equivocar incluso en matemáticas."},
      {t:"Pienso, existo", d:"Aun si me engaña, para ser engañado tengo que existir: la primera certeza."}]},
    {tipo:"polos", titulo:"Las dos sustancias creadas", intro:"Meditaciones y Principios: cada sustancia se define por un atributo principal del que todo lo demás es modo.", polos:{"izq":"res cogitans","der":"res extensa"}, nota:"La distinción real se apoya en que cada una se concibe clara y distintamente sin la otra; el costo es explicar cómo interactúan.",
     nodos:[
      {a:"Atributo: pensamiento", b:"Atributo: extensión", d:"La mente duda, entiende, afirma, niega, quiere, imagina y siente; el cuerpo tiene longitud, anchura y profundidad."},
      {a:"Indivisible, sin lugar", b:"Infinitamente divisible", d:"La sustancia pensante no ocupa espacio ni tiene partes; la extensa puede dividirse sin término y ocupa lugar."},
      {a:"Más conocida que el cuerpo", b:"Sin fines ni interioridad", d:"La mente se conoce antes y mejor que cualquier cuerpo; la materia carece de cualidades sensibles y de finalidad, y por eso es enteramente geometrizable."}]}
  ],
  kant: [
    {tipo:"cuadrantes", titulo:"La tabla de los juicios", intro:"Crítica de la razón pura, Introducción: Kant cruza dos distinciones y localiza el conocimiento importante en una casilla nueva.", ejes:{"x":["analítico","sintético"],"y":["a posteriori","a priori"]}, nota:"Frege discutió que la aritmética sea sintética y Quine atacó de raíz la distinción analítico-sintético.",
     nodos:[
      {t:"Analítico a priori", d:"El predicado ya está contenido en el sujeto y basta analizarlo para verlo, como en todo cuerpo es extenso: necesario, pero no amplía el conocimiento."},
      {t:"Sintético a priori", d:"Amplía el conocimiento y vale con necesidad universal, como siete más cinco es doce o todo cambio tiene una causa. La Crítica pregunta cómo son posibles."},
      {t:"Analítico a posteriori", d:"Casilla vacía: si un juicio es verdadero por mero análisis de sus conceptos, no hace falta acudir a la experiencia para fundarlo."},
      {t:"Sintético a posteriori", d:"Añade algo nuevo al sujeto y depende de la experiencia: los juicios empíricos corrientes, que no valen con necesidad ni universalidad estricta."}]},
    {tipo:"partes", titulo:"Fórmulas del imperativo categórico", intro:"Fundamentación de la metafísica de las costumbres: tres formulaciones que Kant declara equivalentes en el fondo.", centro:"Imperativo categórico", nota:"A diferencia del imperativo hipotético, manda sin condición: no ordena un medio para un fin que uno podría abandonar.",
     nodos:[
      {t:"Ley universal", d:"Obrar solo según aquella máxima que pueda quererse como ley universal; la prueba es de coherencia, como la promesa falsa que, universalizada, se autodestruye."},
      {t:"Humanidad como fin en sí", d:"No usar nunca a la humanidad, en uno mismo o en otro, solo como medio: lo que tiene precio admite equivalente, lo que tiene dignidad no."},
      {t:"Reino de los fines", d:"Obrar como miembro legislador de una comunidad ideal en la que cada uno es a la vez autor y súbdito de la ley."}]}
  ],
  hegel: [
    {tipo:"secuencia", titulo:"Señorío y servidumbre", intro:"Fenomenología del espíritu, capítulo IV: cómo la autoconciencia busca reconocimiento y dónde termina la verdad del señor.", nota:"Es una figura de la conciencia, no una institución histórica, y el trabajo funciona aquí como categoría epistemológica, no económica.",
     nodos:[
      {t:"Exigencia de reconocimiento", d:"La autoconciencia no es un dato interior que se posea a solas: solo soy sujeto en cuanto soy reconocido por otro sujeto."},
      {t:"Lucha a muerte", d:"Las dos autoconciencias arriesgan la vida para mostrar que no están atadas a ella, pero la lucha debe detenerse: un muerto no reconoce a nadie."},
      {t:"Uno cede: señor y siervo", d:"Quien prefiere la vida a la libertad queda como siervo; el otro, como señor, obtiene un reconocimiento de alguien a quien él no reconoce."},
      {t:"Miedo y trabajo", d:"El miedo a la muerte vuelve fluida la fijeza del mundo del siervo, y el trabajo, apetencia reprimida, le permite verse a sí mismo en el objeto que forma."},
      {t:"Inversión", d:"La verdad de la conciencia independiente resulta ser la conciencia servil: es el siervo, no el señor, quien de hecho avanza."}]},
    {tipo:"niveles", titulo:"Los grados del Espíritu", intro:"Enciclopedia, Filosofía del espíritu: del espíritu subjetivo al absoluto y sus tres figuras.", eje:"el Espíritu se sabe a sí mismo", nota:"Es una simplificación: arte, religión y filosofía no son peldaños de contenido distinto sino tres formas de un mismo contenido.",
     nodos:[
      {t:"Filosofía", d:"Figura suprema del espíritu absoluto: dice el mismo contenido que el arte y la religión, pero en la forma del concepto, que se piensa a sí misma."},
      {t:"Religión", d:"El espíritu absoluto en la representación y el sentimiento: el mismo contenido que la filosofía, en un modo que todavía no se piensa a sí mismo."},
      {t:"Arte", d:"El espíritu absoluto en la intuición sensible; dejó de ser el modo más alto en que una época se comprende, sin que eso signifique que desaparezca."},
      {t:"Espíritu objetivo", d:"La libertad hecha mundo en el derecho, la moralidad y las instituciones de la eticidad: familia, sociedad civil y Estado."},
      {t:"Espíritu subjetivo", d:"El espíritu en el individuo: alma, conciencia y vida psicológica, todavía sin plasmarse en instituciones compartidas."}]}
  ],
  nietzsche: [
    {tipo:"secuencia", titulo:"Las tres transformaciones", intro:"Así habló Zaratustra: camello, león y niño ordenan el trabajo de transmutar los valores.", nota:"Relacionar las figuras con genealogía, crítica y creación es una lectura de conjunto, no una correspondencia que Nietzsche enuncie paso por paso.",
     nodos:[
      {t:"Camello", d:"El espíritu que carga la tradición y sus valores heredados, el peso del tú debes; corresponde a la tabla recibida que la genealogía mostrará como histórica."},
      {t:"León", d:"Dice el sagrado No y conquista libertad frente al deber heredado; pero no es capaz de crear valores nuevos: la crítica sola sigue siendo reactiva."},
      {t:"Niño", d:"Inocencia, olvido, un nuevo comienzo y un santo decir sí: solo él puede crear valores que no necesiten garante."}]},
    {tipo:"polos", titulo:"Moral de señores y moral de esclavos", intro:"Más allá del bien y del mal y Genealogía de la moral I: dos maneras opuestas de generar valores.", polos:{"izq":"moral de señores","der":"moral de esclavos"}, nota:"No son clases sociales ni recomendaciones de conducta: casi todas las morales reales mezclan ambas, y Nietzsche reconoce la fecundidad de la moral de esclavos.",
     nodos:[
      {a:"Empieza afirmándose", b:"Empieza negando al otro", d:"El noble se llama bueno a sí mismo; el esclavo empieza diciendo No a lo que está afuera, a lo otro, a lo que no es él."},
      {a:"Bueno y malo (schlecht)", b:"Malvado (böse) y bueno", d:"Para el señor, malo es lo bajo y fallido; el esclavo construye primero al malvado, que es el noble visto con miedo y odio."},
      {a:"Lo malo es derivado", b:"Lo bueno es derivado", d:"En una, lo malo es un concepto posterior y casi indiferente; en la otra, el bueno se deduce después como lo contrario del malvado: manso, humilde, paciente."},
      {a:"Reacción que se descarga", b:"Ressentiment creador", d:"Quien puede responder con actos agota su reacción; quien no puede, responde con una venganza imaginaria que se vuelve creadora de valores."}]}
  ],
  heidegger: [
    {tipo:"partes", titulo:"La muerte como posibilidad", intro:"Ser y tiempo: los rasgos con que Heidegger define la muerte como posibilidad del Dasein, no como suceso final.", centro:"Ser-para-la-muerte",
     nodos:[
      {t:"La más propia", d:"Nadie puede morir en mi lugar: es el punto exacto donde la sustitución anónima del «uno» se vuelve imposible."},
      {t:"Irrespectiva", d:"Desliga al Dasein de todas sus relaciones y roles, que dejan de poder responder por él."},
      {t:"Insuperable", d:"No puede realizarse y dejarse atrás: es la posibilidad de la imposibilidad de toda otra posibilidad."},
      {t:"Cierta", d:"Es segura en cuanto tal; la cotidianidad lo admite pero la convierte en un caso público, se muere, que le ocurre a cualquiera y a nadie."},
      {t:"Indeterminada en su cuándo", d:"Su certeza no dice cuándo llegará, de modo que amenaza en todo momento; anticiparla (Vorlaufen) es asumir el tiempo finito como propio."}]},
    {tipo:"polos", titulo:"Lo a-la-mano y lo ante-los-ojos", intro:"Ser y tiempo: dos modos de ser de los entes intramundanos, ilustrados con el martillo.", polos:{"izq":"Zuhandenheit","der":"Vorhandenheit"},
     nodos:[
      {a:"Útil en el trato", b:"Cosa meramente presente", d:"Lo a-la-mano es el útil que se maneja; lo ante-los-ojos, la cosa contemplable con propiedades que pueden describirse y medirse."},
      {a:"Desaparece en el uso", b:"Se vuelve visible al fallar", d:"Cuanto mejor se maneja el martillo, menos se lo mira; cuando está roto, falta o estorba, aparece como objeto y se ilumina el plexo entero."},
      {a:"Remite a un plexo", b:"Correlato del sujeto teórico", d:"El útil nunca está solo: remite a otros útiles y destinaciones; la cosa ante-los-ojos es lo que el conocimiento teórico tiene enfrente."},
      {a:"Modo originario", b:"Modo derivado", d:"La tradición tomó lo ante-los-ojos como el ser por excelencia; Heidegger invierte la prioridad: la teoría surge cuando el trato ocupado se interrumpe."}]}
  ],
  wittgenstein: [
    {tipo:"polos", titulo:"Las dos filosofías de Wittgenstein", intro:"Del Tractatus (1921) a las Investigaciones filosóficas (1953): qué imagen del lenguaje abandona y cuál pone en su lugar.", polos:{"izq":"Tractatus","der":"Investigaciones"}, nota:"Lo que no cambia es el diagnóstico: los problemas filosóficos son confusiones del lenguaje, no problemas empíricos ni teóricos.",
     nodos:[
      {a:"Proposición como figura", b:"Significado como uso", d:"Antes, la proposición tenía sentido por compartir forma lógica con un hecho posible; después, en muchos casos, el significado de una palabra es su uso en el lenguaje."},
      {a:"Una forma lógica oculta", b:"Juegos de lenguaje diversos", d:"Contra la idea de una forma bajo la gramática corriente, el lenguaje aparece como multiplicidad de juegos entretejidos con actividades y formas de vida."},
      {a:"Esencia común del lenguaje", b:"Semejanzas de familia", d:"Ya no se busca lo común a todo lenguaje: los conceptos se sostienen como una cuerda, por solapamiento de fibras cortas."},
      {a:"Callar lo indecible", b:"Describir usos sin teorizar", d:"El Tractatus termina mandando callar; las Investigaciones describen usos y desarman nudos gramaticales. En ambas, la filosofía no produce doctrinas."}]},
    {tipo:"secuencia", titulo:"El argumento del diario privado", intro:"Investigaciones filosóficas: por qué no puede haber un lenguaje que nombre sensaciones que solo uno mismo podría conocer.", nota:"La conclusión es gramatical, no conductista: Wittgenstein no niega que haya dolor ni vida interior.",
     nodos:[
      {t:"Anotar S en un diario", d:"Alguien decide anotar una S cada vez que tiene cierta sensación, sin poder definirla con palabras públicas."},
      {t:"¿Es la misma sensación?", d:"Al volver a anotar, hay que decidir si esta sensación es la misma que aquella que bautizó con la S."},
      {t:"Solo me parece la misma", d:"No hay ningún criterio disponible aparte de que a uno le parezca la misma: creer que se sigue la regla y seguirla coinciden."},
      {t:"Correcto pierde sentido", d:"Si lo único que distingue lo correcto es que me parezca correcto, la palabra correcto ya no hace ningún trabajo."},
      {t:"Injerto en conducta pública", d:"El lenguaje de las sensaciones se aprende injertándose en reacciones públicas como el quejido, el gesto y el consuelo, y por eso funciona."}]}
  ],
  zambrano: [
    {tipo:"polos", titulo:"La separación entre filosofía y poesía", intro:"Filosofía y poesía (1939): los rasgos que, desde Platón, separaron al filósofo del poeta.", polos:{"izq":"filosofía","der":"poesía"}, nota:"La razón poética no elige el polo de la poesía: es una razón que sigue pensando, pero sin la violencia del concepto que quiere dominar.",
     nodos:[
      {a:"La unidad del ser", b:"Lo múltiple y sensible", d:"El filósofo buscó la unidad del ser por medio del concepto; el poeta se quedó con lo múltiple, lo sensible, lo que no se deja reducir a concepto."},
      {a:"Lo que no cambia", b:"Las apariencias y las pasiones", d:"Con Platón la verdad se situó en lo que no cambia, y la poesía, atada a las apariencias y las pasiones, quedó bajo sospecha: la República expulsa a los poetas."},
      {a:"Querer poseer el todo", b:"No renunciar a nada", d:"La filosofía nace, dice Zambrano, de una violencia, de un querer poseer el todo; la poesía, de una fidelidad, de un no querer renunciar a nada de lo que aparece."},
      {a:"Dueña de la verdad", b:"Palabra sin derecho a verdad", d:"La filosofía ganó el poder y se quedó con la verdad; la poesía quedó como algo sospechoso. Esa decisión definió una cultura que valoró el dominio y despreció lo frágil."}]},
    {tipo:"partes", titulo:"Las vías de la razón poética", intro:"Los conceptos con que Zambrano despliega su propuesta de una razón que escucha, a lo largo de su obra.", centro:"Razón poética", nota:"Agrupar estos conceptos alrededor de la razón poética es una simplificación didáctica: Zambrano no los presenta como un sistema.",
     nodos:[
      {t:"Escuchar antes que dominar", d:"Frente al sujeto moderno que se apodera del mundo y lo vuelve objeto, una actitud receptiva: dejar que las cosas se muestren y atender a lo que no encaja en las categorías previas."},
      {t:"La confesión como método", d:"Frente al sistema impersonal, la palabra de alguien que parte de su propia vida y confusión y se expone ante otro; su modelo es san Agustín."},
      {t:"Claros y aurora", d:"Imágenes del conocimiento: la verdad más importante no se conquista con un método, se revela a quien está atento, como la luz que entra de pronto en un claro del bosque."},
      {t:"Lo sagrado", d:"Fondo oscuro e inagotable de la realidad, anterior a los dioses. Expulsado por la modernidad, vuelve degradado como culto a la historia, al Estado o al líder."},
      {t:"Persona, no individuo", d:"El individuo es una abstracción intercambiable; la persona, alguien concreto con intimidad e historia propia. La democracia es el orden que exige que cada uno pueda ser persona."},
      {t:"El exilio como lugar", d:"Vivido de 1939 a 1984, el exilio es para ella una condición filosófica: quien ha perdido su lugar ve la fragilidad de toda pertenencia y la verdad de los vencidos."}]}
  ],
  arendt: [
    {tipo:"partes", titulo:"Las tres actividades de la vida activa", intro:"La condición humana (1958): las tres actividades que Arendt distingue en la vida activa.", centro:"Vida activa", nota:"La crítica de Arendt es que la modernidad invirtió la jerarquía y lo convirtió todo en labor: una sociedad de trabajadores y consumidores.",
     nodos:[
      {t:"Labor", d:"Responde a la necesidad biológica: comer, limpiar, reproducir la vida. Sus productos se consumen en el mismo acto de vivir y hay que volver a empezar."},
      {t:"Trabajo", d:"Fabrica cosas que duran, como una mesa, una casa o un libro, y así construye un mundo más estable que la vida individual."},
      {t:"Acción", d:"Ocurre entre personas, sin mediación de cosas, por la palabra y el gesto; corresponde a la pluralidad, revela quién es cada uno y puede iniciar algo imprevisible."}]},
    {tipo:"polos", titulo:"Poder y violencia", intro:"Sobre la violencia (1970): dos conceptos que la tradición confundía y que Arendt presenta como opuestos.", polos:{"izq":"poder","der":"violencia"}, nota:"No son grados de lo mismo: donde uno domina por completo, el otro falta.",
     nodos:[
      {a:"Actuar concertadamente", b:"Imponerse con instrumentos", d:"El poder es la capacidad humana de actuar en concierto; la violencia es instrumental: necesita herramientas para doblegar la voluntad ajena."},
      {a:"Pertenece a un grupo", b:"Pocos contra muchos", d:"El poder nunca es de un individuo, existe mientras el grupo se mantiene unido; la violencia, en cambio, puede ser ejercida por unos pocos contra muchos."},
      {a:"Se crea entre muchos", b:"Destruye, pero no crea", d:"La violencia puede destruir el poder, pero no puede crearlo. Un gobierno que necesita cada vez más violencia está perdiendo el poder."}]}
  ],
  beauvoir: [
    {tipo:"polos", titulo:"El Sujeto y lo Otro", intro:"El segundo sexo (1949): la oposición no recíproca con que, según Beauvoir, se construyó la relación entre los sexos.", polos:{"izq":"el hombre como Sujeto","der":"la mujer como lo Otro"}, nota:"No describe una naturaleza sino una situación construida históricamente; el horizonte de Beauvoir es la reciprocidad entre dos libertades.",
     nodos:[
      {a:"Lo esencial", b:"Lo inesencial", d:"Tomando de Hegel la idea de que la conciencia se constituye oponiéndose a otra, Beauvoir muestra que el hombre se definió como lo esencial y definió a la mujer en relación con él."},
      {a:"Lo neutro que se supone", b:"Tener que declararse mujer", d:"Un hombre nunca empieza presentándose como individuo de un sexo: se da por supuesto; una mujer tiene que declarar primero que es mujer."},
      {a:"Trascendencia", b:"Inmanencia", d:"La existencia se proyecta hacia el futuro; la condición femenina ha consistido en confinar a las mujeres en la repetición y en una vida definida por los proyectos de otros."}]},
    {tipo:"secuencia", titulo:"El recorrido de El segundo sexo", intro:"Cómo avanza El segundo sexo, de los supuestos destinos de la mujer a la posibilidad de su liberación.", nota:"Es una simplificación del plan de los dos volúmenes: «Los hechos y los mitos» y «La experiencia vivida».",
     nodos:[
      {t:"Los supuestos destinos", d:"La biología, el psicoanálisis y el materialismo histórico se examinan uno a uno, y ninguno explica por qué la mujer fue constituida como lo Otro."},
      {t:"La historia", d:"Beauvoir recorre cómo, a lo largo de siglos, se construyó la situación de las mujeres, que no tienen un pasado común ni un territorio propio."},
      {t:"Los mitos", d:"La literatura, la religión y el arte pensaron a la mujer como misterio, naturaleza, madre o musa; el mito del eterno femenino permite no ver a las mujeres concretas."},
      {t:"La experiencia vivida", d:"El segundo volumen abre con «No se nace mujer: se llega a serlo» y describe cómo la niña aprende a ser mujer por la educación y los límites que recibe."},
      {t:"Hacia la liberación", d:"La liberación exige renunciar a las ventajas de la complicidad y apunta a una relación recíproca en la que cada uno reconozca al otro como libertad."}]}
  ],
  avicena: [
    {tipo:"niveles", titulo:"La emanación desde el Necesario", intro:"De lo uno procede solo uno: así explica Avicena cómo sale la multiplicidad del mundo de un principio simple.", eje:"del Uno a la multiplicidad", nota:"Avicena cuenta diez intelectos y nueve esferas; aquí los intermedios se agrupan en un solo nivel.",
     nodos:[
      {t:"El Ser necesario por sí", d:"Uno y simple, su esencia es existir. Al pensarse a sí mismo, produce eternamente un único efecto: el primer intelecto."},
      {t:"El primer intelecto", d:"Piensa al Necesario, y de ahí procede el segundo intelecto; piensa su existencia como necesaria por otro, y procede el alma de la primera esfera; piensa su ser como posible, y procede el cuerpo de esa esfera."},
      {t:"Intelectos y esferas celestes", d:"El proceso se repite en cada intelecto: cada uno produce otro intelecto, el alma y el cuerpo de una esfera, hasta la esfera de la Luna."},
      {t:"El intelecto agente (décimo)", d:"El último intelecto ya no produce otra esfera: gobierna el mundo sublunar, da las formas a la materia preparada e ilumina las almas humanas."},
      {t:"El mundo debajo de la Luna", d:"El mundo de la generación y la corrupción: los cuatro elementos, las plantas, los animales y los seres humanos, cuyas formas vienen del dador de las formas."}]},
    {tipo:"secuencia", titulo:"Los grados del intelecto humano", intro:"Cómo pasa nuestra mente de la pura capacidad al conocimiento, según el Libro del alma.", nota:"En cada paso de la potencia al acto, la forma inteligible se recibe del intelecto agente; los sentidos y la imaginación solo preparan el alma.",
     nodos:[
      {t:"Intelecto material", d:"Pura capacidad de conocer, como la del niño: nada está todavía escrito en él. Se llama material por semejanza con la materia, que puede recibir cualquier forma."},
      {t:"Intelecto en hábito", d:"Ya posee los primeros principios evidentes, como que el todo es mayor que la parte, y con ellos puede empezar a razonar."},
      {t:"Intelecto en acto", d:"Ha adquirido formas inteligibles y puede pensarlas cuando quiere, aunque no las esté pensando ahora, como quien sabe geometría y no está resolviendo un problema."},
      {t:"Intelecto adquirido", d:"Contempla efectivamente las formas inteligibles, en contacto con el intelecto agente: es la perfección del alma racional."}]}
  ],
  averroes: [
    {tipo:"niveles", titulo:"Tres clases de personas y de argumentos", intro:"Doctrina decisiva: los modos en que los seres humanos asienten a la verdad, del más riguroso al más común.", eje:"más certeza en las premisas", nota:"La jerarquía es de Averroes, pero no excluye a nadie de la verdad: la Ley habla a las tres clases, cada una con su método.",
     nodos:[
      {t:"Gente de la demostración", d:"Los pocos que asienten solo a lo que se prueba a partir de premisas ciertas: los filósofos. Solo ellos están autorizados a interpretar los pasajes que chocan con lo demostrado."},
      {t:"Gente de la dialéctica", d:"Los que se convencen con argumentos que parten de opiniones aceptadas: los teólogos del kalam. Averroes los acusa de haber sembrado dudas en la gente común."},
      {t:"Gente de la retórica", d:"La gran mayoría, que asiente por imágenes, ejemplos y exhortaciones. El sentido literal de la Ley es para ellos la verdad en la forma que pueden recibir."}]},
    {tipo:"polos", titulo:"¿Quema el fuego?", intro:"La incoherencia de la incoherencia (c. 1180), discusión sobre la causalidad: la respuesta de Averroes a La incoherencia de los filósofos de Al-Ghazali.", polos:{"izq":"Al-Ghazali","der":"Averroes"}, nota:"Al-Ghazali no niega que el mundo sea regular, sino que su regularidad sea necesaria con independencia de la voluntad de Dios.",
     nodos:[
      {a:"Solo observamos sucesión", b:"Las cosas tienen acciones propias", d:"Al-Ghazali: vemos que el algodón arde cuando lo toca el fuego, no que el fuego lo queme. Averroes: las naturalezas de las cosas se manifiestan en sus acciones."},
      {a:"Dios crea cada efecto", b:"Sin acciones propias no hay esencias", d:"Para Al-Ghazali, lo que quema al algodón es Dios. Para Averroes, si el fuego no quemara no tendría definición: no se distinguiría del agua."},
      {a:"El milagro: Dios rompe la costumbre", b:"Negar las causas es negar el intelecto", d:"Al-Ghazali quiere salvar la posibilidad de los milagros. Averroes responde que sin causas no hay ciencia, y lo que queda es sofística."}]}
  ],
  confucio: [
    {tipo:"polos", titulo:"La persona ejemplar y el hombre pequeño", intro:"Analectas: los rasgos del junzi se dan siempre por contraste con los del xiaoren, en pares.", polos:{"izq":"Jūnzǐ (persona ejemplar)","der":"Xiǎorén (hombre pequeño)"}, nota:"Ninguno de los dos es una clase social: Confucio arrebata la palabra junzi a la aristocracia y la convierte en un logro moral que se conquista con años de práctica.",
     nodos:[
      {a:"Entiende lo justo (yì)", b:"Entiende lo provechoso (lì)", d:"El junzi se orienta por lo que corresponde hacer por ser correcto; el hombre pequeño, por lo que le conviene. Es el contraste que define a ambos."},
      {a:"Busca en sí mismo", b:"Busca en los demás", d:"Ante una falla, el junzi examina su propia conducta; el hombre pequeño atribuye la responsabilidad a los otros y exige de ellos lo que no se exige a sí mismo."},
      {a:"Armoniza sin uniformarse", b:"Se uniforma sin armonizar", d:"El par más fino: distingue el acuerdo genuino entre personas distintas de la mera conformidad, que copia a los demás sin concordar de verdad con ellos."}]},
    {tipo:"secuencia", titulo:"La rectificación de los nombres", intro:"Analectas: la cadena que Confucio le expone a Zilu para explicar por qué lo primero en el gobierno es rectificar los nombres.",
     nodos:[
      {t:"Nombres incorrectos", d:"Se llama gobernante a quien no gobierna o padre a quien no actúa como padre: el nombre de una función ya no trae consigo las obligaciones que le corresponden."},
      {t:"Lenguaje sin concordancia", d:"Si los nombres no son correctos, el lenguaje deja de concordar con la realidad: lo que se dice ya no corresponde a lo que efectivamente ocurre."},
      {t:"Asuntos sin término", d:"Si el lenguaje no concuerda con la realidad, los asuntos no llegan a término: las órdenes y los acuerdos no pueden cumplirse porque no dicen lo que pretenden."},
      {t:"Ritos y música marchitos", d:"Si los asuntos no llegan a término, los ritos y la música no florecen: se pierden las formas con que la comunidad cultiva el respeto y la armonía."},
      {t:"Castigos sin blanco", d:"Si ritos y música no florecen, los castigos no dan en el blanco: la justicia penal pierde su criterio y castiga sin proporción ni acierto."},
      {t:"Pueblo sin dónde pisar", d:"Al final de la cadena, el pueblo no sabe dónde poner los pies ni las manos: el desorden que empezó siendo semántico termina siendo judicial y social."}]}
  ],
  laozi: [
    {tipo:"polos", titulo:"Los opuestos que se generan", intro:"Capítulo 2: cada término nace junto con su contrario.", polos:{"izq":"yin","der":"yang"},
     nodos:[
      {a:"Lo blando", b:"Lo duro", d:"El agua, blanda, vence a lo duro: el libro privilegia el polo débil."},
      {a:"El vacío", b:"Lo lleno", d:"Lo útil de la vasija es su hueco (capítulo 11)."},
      {a:"No actuar", b:"Actuar", d:"El wú wéi no es pasividad sino acción que no fuerza."}]},
    {tipo:"secuencia", titulo:"La cascada de la pérdida", intro:"Capítulo 38, al comienzo del De Jing: cada virtud aparece cuando se ha perdido la anterior, desde el Dao hasta el rito.", nota:"En las tiras de Guodian, más antiguas, el pasaje paralelo del capítulo 18 no nombra la benevolencia ni la rectitud: el ataque frontal al confucianismo parece haberse endurecido con el tiempo.",
     nodos:[
      {t:"El Dao", d:"El fondo indecible del que todo sale. Mientras rige no hace falta proponerse nada: la virtud superior no se propone ser virtuosa y por eso tiene virtud."},
      {t:"La virtud (dé)", d:"Perdido el Dao aparece la virtud. La virtud inferior, que no quiere perderse y se esfuerza por conservarse, según el capítulo 38 carece por eso mismo de virtud."},
      {t:"La benevolencia (rén)", d:"Perdida la virtud aparece la benevolencia, el valor confuciano central. Para el libro, que haya que predicarla es síntoma de que algo ya se perdió, como dice también el capítulo 18."},
      {t:"La rectitud (yì)", d:"Perdida la benevolencia aparece la rectitud: otro escalón de la caída, en el que lo correcto ya tiene que formularse y enseñarse en vez de darse por sí mismo."},
      {t:"El rito (lǐ)", d:"Última estación de la caída: el rito es la corteza delgada de la lealtad y el comienzo del desorden. Es la acusación que cayó sobre el confucianismo entero."}]}
  ],
  zhuangzi: [
    {tipo:"partes", titulo:"¿Desde dónde se juzga?", intro:"Capítulo 2 (Qiwulun): las preguntas por el criterio correcto, que muestran que toda afirmación se hace desde algún lugar.", centro:"¿Quién sabe el criterio correcto?", nota:"No se sigue que nada sea verdad: Zhuangzi usa la incertidumbre como terapia contra la arrogancia del que discute, no como tesis de que todo da igual.",
     nodos:[
      {t:"Hábitat", d:"El hombre que duerme en lo húmedo enferma, la anguila no. ¿Cuál de los dos sabe dónde es correcto vivir?"},
      {t:"Altura", d:"El mono se trepa a los árboles donde el hombre tiembla de miedo. Ninguno de los dos puede arbitrar desde fuera qué lugar es el seguro."},
      {t:"Gusto", d:"Los ciervos comen pasto y otros animales prefieren alimentos que los humanos rechazan. ¿Quién conoce el sabor correcto, si cada especie mide con el suyo?"},
      {t:"Belleza", d:"Los peces se hunden y los pájaros huyen ante las mujeres que los hombres celebran como las más bellas. ¿Cuál es la belleza verdadera?"}]},
    {tipo:"secuencia", titulo:"El aprendizaje del cocinero Ding", intro:"Capítulo 3 (Yangshengzhu): las etapas por las que el cocinero llegó a una destreza que sigue la veta en vez de imponer un método.",
     nodos:[
      {t:"Ve bueyes enteros", d:"Al principio el cocinero solo percibe objetos: el buey es un bloque compacto contra el que el cuchillo tiene que abrirse paso."},
      {t:"Ya no ve bueyes", d:"Después de tres años ya no ve bueyes enteros: su percepción pasó de los objetos a las articulaciones y los vacíos que hay entre ellas."},
      {t:"Trabaja con la mente", d:"Ahora trabaja con la mente y no con los ojos: se mueve por los intersticios naturales, sin tocar tendones ni huesos, y su cuchillo dura diecinueve años sin afilarse."},
      {t:"Se detiene ante el nudo", d:"Ante un nudo difícil, Ding se detiene, mira y va despacio. Esta pausa desmiente la lectura del fluir como espontaneidad sin esfuerzo ni atención."}]}
  ],
  nagarjuna: [
    {tipo:"cuadrantes", titulo:"El tetralema (catuṣkoṭi)", intro:"Las cuatro alternativas que Nagarjuna examina y rechaza para cualquier tesis sobre la naturaleza propia de algo.",
     nodos:[
      {t:"Es", d:"Afirmar que la cosa existe con naturaleza propia."},
      {t:"No es", d:"Negarla por completo: el nihilismo."},
      {t:"Es y no es", d:"Afirmar ambas a la vez."},
      {t:"Ni es ni no es", d:"Negar ambas. También se rechaza: la vacuidad no es una quinta tesis."}]},
    {tipo:"partes", titulo:"Los tres sentidos de la dependencia", intro:"Cómo lee Nagarjuna la originación dependiente (pratītyasamutpāda): toda cosa depende a la vez de tres maneras, y por eso está vacía de svabhava.", centro:"La mesa: originación dependiente", nota:"Para Nagarjuna esta dependencia y la vacuidad son una sola tesis dicha en clave positiva y negativa: solo lo que carece de naturaleza propia puede surgir, cambiar y terminar.",
     nodos:[
      {t:"Depende de causas", d:"La mesa surge de su fabricación y de condiciones previas. Es la lectura budista más antigua: una cadena temporal en la que, surgiendo esto, surge aquello."},
      {t:"Depende de partes", d:"La mesa no es nada aparte de las piezas que la componen y de su ensamblaje: no hay en ella un núcleo que sea mesa por sí mismo."},
      {t:"Depende de designación", d:"El sentido más radical: la mesa es mesa también por el concepto con que la recortamos del mundo y por el uso que le damos."}]}
  ],
  shankara: [
    {tipo:"partes", titulo:"La cuerda y la serpiente", intro:"La analogía de la superposición (adhyasa), del Brahmasutrabhashya, que funciona como modelo de todo el Advaita: qué representa cada elemento de la escena.", centro:"Adhyasa: la superposición", nota:"Es una lectura didáctica: Shankara usa la analogía de la cuerda y la serpiente, pero no la desarrolla pieza por pieza como acá.",
     nodos:[
      {t:"La cuerda", d:"Lo que está ahí todo el tiempo y no es afectado en nada por el error ni mejora con su disolución: Brahman, la única realidad."},
      {t:"La serpiente", d:"Lo superpuesto, que nunca existió ni siquiera un instante y por eso no desaparece como una cosa: el mundo múltiple y el yo individual tomados por reales."},
      {t:"La penumbra", d:"La condición que hace posible el error: avidya, la ignorancia sin comienzo que confunde al sujeto consciente con los atributos del cuerpo y del mundo."},
      {t:"El miedo", d:"El salto hacia atrás y el corazón que late son reales: el error produce efectos, como el mundo produce efectos mientras dura la ignorancia."},
      {t:"La luz", d:"El conocimiento (jnana) que revela que nunca hubo serpiente. La liberación no cambia la realidad sino la lectura: atman ya era Brahman."}]},
    {tipo:"niveles", titulo:"Los tres niveles de verdad", intro:"Los tres grados en que el Advaita ordena lo que aparece, según la regla de cancelación por un conocimiento posterior.", eje:"lo que no se cancela", nota:"Contra los idealistas budistas, Shankara insiste en que el mundo de la vigilia no se reduce al sueño privado: por eso separa con firmeza el segundo nivel del tercero.",
     nodos:[
      {t:"Paramarthika (absoluto)", d:"El nivel último: allí solo hay Brahman, sin partes ni relación, y ninguna otra afirmación sobrevive. Nada puede cancelarlo porque no hay conocimiento posterior a él."},
      {t:"Vyavaharika (práctico)", d:"El mundo compartido de las cosas, las personas, el karma y los deberes: coherente, estable e intersubjetivo mientras dura. Se cancela solo al realizar Brahman."},
      {t:"Pratibhasika (aparente)", d:"Los errores privados, como la serpiente de la cuerda, el sueño o el espejismo, que se cancelan dentro del propio nivel práctico al encender la luz o despertar."}]}
  ],
  dogen: [
    {tipo:"polos", titulo:"Práctica como medio o como realización", intro:"Cómo la unidad de práctica y realización (shushō-ittō), formulada en el Shōbōgenzō, invierte la idea instrumental de la práctica religiosa.", polos:{"izq":"Visión instrumental","der":"Shushō-ittō"},
     nodos:[
      {a:"Practicar para iluminarse", b:"Practicar es ya realizar", d:"Una iluminación producida por la práctica sería algo producido, y lo producido termina; por eso zazen no prepara nada, sino que actualiza la naturaleza de Buda."},
      {a:"Tener naturaleza de Buda", b:"Ser naturaleza de Buda", d:"Dōgen relee la frase del Sutra del Nirvana: si los seres la tienen, sería una semilla oculta que desarrollar; si la son, la práctica es expresión y no extracción."},
      {a:"El koan como acertijo", b:"El koan que se actualiza", d:"Para el Rinzai el koan es un enigma que se resuelve en la sala de entrevistas; para Dōgen, genjōkōan es la realidad presente misma manifestándose completa."},
      {a:"Cocinar antes de practicar", b:"Cocinar es la práctica", d:"El cargo de tenzo borra la jerarquía entre tareas espirituales y de mantenimiento: lavar los cuencos tampoco es un medio para un después, es la práctica entera."}]},
    {tipo:"secuencia", titulo:"Estudiarse y olvidarse a uno mismo", intro:"La secuencia del Genjōkōan, en la que cada paso invierte al anterior, del estudio del camino a ser realizado por las cosas.",
     nodos:[
      {t:"Estudiar el camino del Buda", d:"El punto de partida: el camino no se estudia como una doctrina exterior, porque estudiarlo consiste en volver la atención sobre la propia experiencia."},
      {t:"Estudiarse a uno mismo", d:"No se empieza por disolver el yo, que sería saltear el trabajo, sino por el examen más minucioso de la propia experiencia, llevado hasta el final."},
      {t:"Olvidarse de uno mismo", d:"Ese examen llevado hasta el final descubre que no hay un yo separado que examinar: cuerpo y mente se dejan caer (shinjin datsuraku)."},
      {t:"Realizado por las cosas", d:"Se invierte la dirección: uno no ilumina el mundo, es confirmado por él. Llevar el yo hacia las cosas es ilusión; que las cosas se realicen a través de uno es despertar."}]}
  ],
  nishida: [
    {tipo:"secuencia", titulo:"El itinerario de Nishida", intro:"Las cuatro etapas de su obra, de Una investigación sobre el bien (1911) a su último ensayo (1945), cada una respondiendo a un problema de la anterior.", nota:"Es una simplificación: los conceptos se superponen entre etapas, y las fechas son las de las obras donde cada uno aparece con más claridad.",
     nodos:[
      {t:"Experiencia pura (1911)", d:"Antes de que haya un yo que percibe y un mundo percibido ya hay experiencia: escuchar el sonido antes de reconocerlo como campana. La división sujeto-objeto es un producto tardío."},
      {t:"Autoconciencia (1917)", d:"Si describir la experiencia pura la destruye, hay que pensar la reflexión: jikaku como un acto que se refleja en sí sin salir de sí. El libro termina confesando su fracaso."},
      {t:"Lógica del lugar (1927)", d:"De ese fracaso nace el basho: el fundamento no es un sujeto ni una sustancia sino el campo donde algo se determina, cuyo nivel último es la nada absoluta."},
      {t:"Mundo histórico (1945)", d:"La lógica del lugar se aplica al mundo hecho de cuerpos, técnicas e instituciones: mundo e individuo se determinan mutuamente, en identidad absolutamente contradictoria."}]},
    {tipo:"polos", titulo:"Sustancia y lugar", intro:"Cómo la lógica del lugar, desde Del que actúa al que ve (1927), invierte la lógica aristotélica del sujeto y la metafísica de la sustancia.", polos:{"izq":"Metafísica de la sustancia","der":"Lógica del lugar (basho)"}, nota:"Sus críticos analíticos objetan que la maniobra trata una relación gramatical como si fuera una estructura del ser.",
     nodos:[
      {a:"Busca el sujeto último", b:"Busca el predicado último", d:"Aristóteles busca lo que siempre es sujeto y nunca predicado, la sustancia individual; Nishida, el universal predicativo, el campo que nunca puede ocupar el lugar del sujeto."},
      {a:"El fundamento es un algo", b:"El fundamento es un dónde", d:"El fundamento deja de ser una cosa entre las cosas y pasa a ser la condición, como el campo visual, que permite que algo se determine sin ser él mismo visto."},
      {a:"Fundamento como ser", b:"Fundamento como nada", d:"De Aristóteles a Heidegger, Occidente piensa el fundamento como ser; Nishida lo piensa como nada absoluta (zettai mu), traducción filosófica de la vacuidad budista."},
      {a:"Conciencia, cosa entre cosas", b:"Conciencia como campo", d:"Si la maniobra es legítima, la conciencia no es una sustancia pensante frente a otra extensa, y el problema cartesiano de su relación se disuelve."}]}
  ],
  wangyangming: [
    {tipo:"polos", titulo:"Zhu Xi y Wang Yangming", intro:"Las inversiones con que Wang, en el Chuanxilu y el Daxue Wen, se opone a la ortodoxia de Zhu Xi sobre el cultivo moral.", polos:{"izq":"Zhu Xi","der":"Wang Yangming"}, nota:"Es el contraste tal como lo plantea Wang: la caricatura es injusta con Zhu Xi, que también insistía en la reverencia interior; Wang discute sobre todo con el Zhu Xi del currículo estatal.",
     nodos:[
      {a:"El principio, en las cosas", b:"La mente es el principio", d:"Para Wang (xīn jí lǐ), si el principio de la piedad filial estuviera en el padre, desaparecería al morir él; por eso está en la mente del hijo."},
      {a:"Géwù: llegar al fondo", b:"Géwù: rectificar", d:"Zhu Xi lee investigar las cosas como agotar el principio de cada una; Wang lee gé como enderezar lo torcido, y wù como los asuntos hacia los que se dirige la intención."},
      {a:"Primero saber, luego actuar", b:"Saber y actuar son uno", d:"Contra el aprendizaje en dos etapas, Wang sostiene que quien sabe y no hace nunca supo del todo: quien huele un olor fétido ya lo detesta, sin decisión intermedia."},
      {a:"Cultivarse en la lectura", b:"Pulirse en los asuntos", d:"Quien solo alcanza la calma sentado se derrumba ante la prueba; el liángzhī se verifica en los asuntos concretos, cuando hay algo en juego."}]},
    {tipo:"secuencia", titulo:"Las cuatro sentencias", intro:"El esquema discutido en el debate del puente Tianquan, que ubica el trabajo moral en el instante en que se levanta una intención.", nota:"El orden es lógico, no una sucesión de pasos en el tiempo: las cuatro sentencias describen un único movimiento de la mente.",
     nodos:[
      {t:"La mente en sí", d:"La mente-corazón en sí misma no tiene bien ni mal. Por eso el trabajo moral no consiste en agregarle algo que falta sino en despejar lo que la obstruye."},
      {t:"El movimiento de la intención", d:"El bien y el mal aparecen cuando se mueve la intención (yì). Para Wang la intención ya es acción incipiente: quien alberga una intención mezquina ya actuó."},
      {t:"El liángzhī discierne", d:"El conocimiento innato del bien distingue lo bueno de lo malo en esa intención, como un sol que nunca se apaga aunque las nubes del egoísmo lo tapen."},
      {t:"Rectificar los asuntos", d:"Géwù en la lectura de Wang: hacer el bien y remover el mal donde nacen, sin dejar pasar el primer movimiento torcido, porque después ya hay que combatir un hábito."}]}
  ],
  sorjuana: [
    {tipo:"partes", titulo:"Defensa del saber de las mujeres", intro:"Los argumentos con que Sor Juana defiende ese derecho en la Respuesta a sor Filotea (1691).", centro:"El derecho de las mujeres al saber",
     nodos:[
      {t:"Inclinación natural", d:"El deseo de saber es una inclinación que Dios puso en el entendimiento, y no hay razón para que se ejerza en los hombres y se prohíba en las mujeres."},
      {t:"Mujeres sabias", d:"Ejemplos de la Biblia, como Débora o la reina de Saba, de la Antigüedad, como Hipatia, y de la Iglesia, como santa Paula, muestran que el saber femenino tiene precedentes."},
      {t:"San Pablo reinterpretado", d:"Que las mujeres callen en la iglesia se refiere a la predicación pública en el templo, no al estudio privado ni a la escritura: disputa el sentido del texto sin rechazarlo."},
      {t:"Escalones hacia la teología", d:"Lógica, retórica, historia o música son necesarias para entender la Escritura, de modo que los estudios profanos conducen a la teología, reina de las ciencias."},
      {t:"Si Aristóteles hubiera guisado", d:"Aun sin libros, el trompo de unas niñas o el huevo en la cocina le enseñan; la curiosidad convierte en lugar de conocimiento un espacio asignado a las mujeres."}]},
    {tipo:"secuencia", titulo:"El viaje del alma en Primero sueño", intro:"Primero sueño (1692): la noche en que el alma, libre del cuerpo dormido, intenta conocer el universo.", nota:"Es un resumen muy simplificado de un poema de casi mil versos.",
     nodos:[
      {t:"El cuerpo duerme", d:"Llega la noche y el cuerpo duerme; el poema describe su fisiología según la medicina de la época, mientras el alma queda libre para intentar conocer."},
      {t:"La mirada intuitiva", d:"El alma intenta abarcar el universo entero de una sola mirada y queda deslumbrada por la inmensidad, como el ojo que mira el sol."},
      {t:"El método discursivo", d:"Intenta entonces subir paso a paso por las categorías de los seres, como enseñaba la escolástica, y descubre que no comprende del todo ni siquiera una flor o una fuente."},
      {t:"El ejemplo de Faetón", d:"Faetón, que se atrevió a conducir el carro del sol, figura la audacia de intentarlo: el fracaso es conciencia del límite, no condena del conocimiento."},
      {t:"El despertar", d:"El cuerpo vuelve en sí, llega la luz del día y el sueño termina sin que el alma haya alcanzado el saber total que buscaba."}]}
  ],
  peirce: [
    {tipo:"ciclo", titulo:"Las tres inferencias de la investigación", intro:"Cómo avanza la investigación según Peirce: una hipótesis se propone, se desarrolla y se pone a prueba.",
     nodos:[
      {t:"Abducción", d:"Ante un hecho sorprendente, se propone una hipótesis que lo haría esperable."},
      {t:"Deducción", d:"Se derivan de la hipótesis consecuencias que se puedan observar."},
      {t:"Inducción", d:"Se ponen a prueba esas consecuencias con la experiencia; el resultado confirma, corrige o descarta la hipótesis y abre una nueva sorpresa."}]},
    {tipo:"secuencia", titulo:"Los cuatro métodos para fijar la creencia", intro:"La fijación de la creencia (1877): cada método falla donde el siguiente intenta responder, hasta llegar al científico.", nota:"El orden es el de la exposición de Peirce; su superioridad final no es que garantice acertar, sino que permite corregirse.",
     nodos:[
      {t:"Tenacidad", d:"Aferrarse a lo que uno ya cree y evitar toda información contraria. Funciona hasta que aparece alguien que cree lo opuesto y la duda vuelve."},
      {t:"Autoridad", d:"Delegar la creencia en una institución que la impone: históricamente eficaz, pero ninguna autoridad regula todas las cuestiones y siempre hay quien compara con otras épocas o pueblos."},
      {t:"Método a priori", d:"Aceptar lo que resulta agradable a la razón. Produce filosofías que oscilan como un péndulo entre modas, porque en el fondo también decide por gusto."},
      {t:"Método científico", d:"Supone cosas reales cuyos caracteres no dependen de lo que opinemos, y así deja que algo externo corrija la creencia: es el único que puede descubrir que se equivocó."}]}
  ],
  james: [
    {tipo:"secuencia", titulo:"La teoría James-Lange de la emoción", intro:"Principios de psicología (1890): el orden que James propone entre percepción, cuerpo y emoción, contra el sentido común.", nota:"La teoría fue atacada por Cannon y recuperada en parte por Damasio: no está simplemente refutada ni simplemente vigente.",
     nodos:[
      {t:"Percepción del hecho", d:"Se percibe algo excitante, por ejemplo un oso. Para el sentido común, a esto seguiría el miedo y después la reacción del cuerpo."},
      {t:"Reacción corporal", d:"El cuerpo reacciona directamente: corre, tiembla, se acelera el pulso, se contrae el estómago. No lloramos porque estamos tristes, sino que estamos tristes porque lloramos."},
      {t:"Sentir los cambios: emoción", d:"La emoción es la percepción de esos cambios corporales. Si se le quita todo contenido corporal, sostiene James, no queda más que un juicio frío e incoloro."}]},
    {tipo:"partes", titulo:"Cuándo es legítimo creer sin evidencia", intro:"La voluntad de creer (1896): las condiciones estrictas bajo las cuales James permite que factores no intelectuales inclinen la creencia.", centro:"Opción genuina", nota:"Sin estas condiciones la tesis es indefendible: el permiso es mucho más estrecho de lo que sugiere la caricatura de creer lo que conviene.",
     nodos:[
      {t:"Viva", d:"Las alternativas en juego se presentan a quien decide como posibilidades reales, que podría efectivamente llegar a creer."},
      {t:"Forzosa", d:"No hay manera de escapar a la elección: suspender el juicio también es apostar, porque por temor al error se pierde la posibilidad de una verdad."},
      {t:"De peso vital", d:"Lo que está en juego es importante, la ocasión es única o la decisión no se puede revertir, a diferencia de las elecciones triviales."},
      {t:"Indecidible intelectualmente", d:"La evidencia y el razonamiento no alcanzan a zanjar la cuestión; si alcanzaran, habría que atenerse a ellos, como pedía Clifford."}]}
  ],
  dewey: [
    {tipo:"secuencia", titulo:"El patrón de la indagación", intro:"Lógica: teoría de la investigación (1938): cómo una situación indeterminada se transforma en una situación unificada.", nota:"Es una esquematización: en Cómo pensamos Dewey describe cinco fases de la reflexión que siguen un patrón parecido.",
     nodos:[
      {t:"Situación indeterminada", d:"No una duda mental que alguien decide tener, sino una constelación objetiva de organismo y entorno que está desequilibrada, confusa o bloqueada."},
      {t:"Formulación del problema", d:"El paso más difícil: convertir la perplejidad difusa en un problema formulado, porque un problema bien planteado ya está medio resuelto y uno mal planteado condena la investigación."},
      {t:"Hipótesis", d:"Se proponen ideas que son planes de acción y no descripciones: instrumentos para reorganizar la situación."},
      {t:"Desarrollo de consecuencias", d:"Se razona sobre lo que implicaría cada hipótesis si se la pusiera en práctica, para saber qué habría que hacer y qué cabría esperar."},
      {t:"Prueba por intervención", d:"La prueba no consiste solo en mirar sino en intervenir efectivamente en la situación, y una idea falla objetivamente si la situación no se reorganiza."},
      {t:"Situación unificada", d:"El resultado no es el descubrimiento de una verdad que esperaba, sino una situación nueva, determinada en sus distinciones y relaciones, que convierte los elementos originales en un todo."}]},
    {tipo:"polos", titulo:"Espectador o participante", intro:"La búsqueda de la certeza (1929): la imagen contemplativa del conocer que Dewey critica, frente a la suya.", polos:{"izq":"teoría del espectador","der":"instrumentalismo"}, nota:"Si conocer transforma, cuesta explicar cómo averiguamos algo del mundo tal como es: fue la objeción más repetida, y Dewey respondió que hereda el supuesto en discusión.",
     nodos:[
      {a:"Contemplar desde fuera", b:"Intervenir en la situación", d:"La tradición concibió el conocer según el modelo de la visión: un sujeto situado fuera contempla un objeto ya hecho. Para Dewey, conocer es una forma de hacer."},
      {a:"Conocer es no alterar nada", b:"Conocer es operar y modificar", d:"El químico conoce una sustancia sometiéndola a operaciones que la modifican: sabe lo que la cosa hace bajo condiciones controladas, no lo que era antes."},
      {a:"La idea como copia", b:"La idea como herramienta", d:"Una idea no es un espejo de una realidad previa, como un martillo no se parece al clavo; se juzga por lo que permite hacer."},
      {a:"Lo más real, lo inmóvil", b:"Cambiar el mundo inestable", d:"Ante un mundo peligroso, la filosofía buscó refugio en un orden inmutable alcanzado por el pensamiento puro; Dewey propone, en cambio, cambiar el mundo mediante la acción."}]}
  ],
  vasconcelos: [
    {tipo:"secuencia", titulo:"Los tres estados de la humanidad", intro:"La periodización de la historia que Vasconcelos propone en La raza cósmica (1925), del pasado guerrero al porvenir estético.", nota:"La periodización se afirma más que se prueba, y un tercer estado guiado por el gusto ofrece menos garantías contra el abuso que el de las normas jurídicas.",
     nodos:[
      {t:"Estado material o guerrero", d:"Rige la fuerza bruta: las uniones entre pueblos y personas se deciden por conquista y sometimiento, no por elección."},
      {t:"Estado intelectual o político", d:"Rigen la razón, la norma jurídica y el cálculo; Vasconcelos lo identifica con la modernidad y con la hegemonía anglosajona."},
      {t:"Estado estético o espiritual", d:"Todavía por venir: las decisiones se guiarán por el gusto y el amor, y la ley del gusto sustituirá a la coerción y a la selección natural darwiniana."}]},
    {tipo:"polos", titulo:"La raza cósmica: lo que niega y lo que conserva", intro:"Las dos mitades de la tesis de La raza cósmica (1925), que un lector honesto debe poder enunciar a la vez.", polos:{"izq":"Lo que la tesis niega","der":"Lo que la tesis conserva"}, nota:"Escrita contra la pureza racial y el expansionismo anglosajón, la tesis usa el vocabulario jerárquico que combate: ninguna mitad anula ni absuelve a la otra.",
     nodos:[
      {a:"Una jerarquía fija de razas", b:"La raza como sujeto histórico", d:"Rechaza que las razas estén ordenadas de una vez para siempre, pero sigue tomando la raza como unidad real del análisis histórico."},
      {a:"Que la mezcla degenere", b:"La síntesis como mejoramiento", d:"Contra la antropología de 1925, el mestizaje no degrada; pero la quinta raza se proyecta como mejora, lo que supone tipos humanos mejores y peores."},
      {a:"Una raza destinada a dominar", b:"El vocabulario eugenésico", d:"Ninguna raza debe imponerse, y sin embargo el texto habla de selección, de eliminación de tipos inferiores y de un cruce dirigido por el gusto."}]}
  ],
  zea: [
    {tipo:"secuencia", titulo:"Hacia una filosofía sin más", intro:"El argumento de La filosofía americana como filosofía sin más (1969), de la pregunta mal planteada a la consigna final.", nota:"La división en pasos es una reconstrucción; la objeción que la ficha discute es que una desigualdad institucional no desaparece por declararla mal planteada.",
     nodos:[
      {t:"La pregunta mal planteada", d:"Preguntar si existe una filosofía latinoamericana presupone un tribunal ante el cual habría que acreditarse antes de filosofar."},
      {t:"El tribunal es histórico", d:"Ese tribunal no es una instancia neutral sino un producto de la colonia, que el colonizado interioriza y sigue administrando por su cuenta."},
      {t:"Nadie más pidió permiso", d:"Ningún griego se preguntó si había filosofía griega antes de hacerla, ni ningún alemán pidió autorización para pensar desde Königsberg: filosofaban desde su circunstancia."},
      {t:"Partir de nosotros mismos", d:"Tomar la propia situación histórica y social como punto de partida legítimo, evitando tanto el universalismo abstracto como el particularismo cerrado."},
      {t:"Lo americano por añadidura", d:"Hay que hacer pura y simplemente filosofía sobre problemas reales; lo americano aparecerá como resultado del trabajo honesto y no como propósito."}]},
    {tipo:"polos", titulo:"Zea y Dussel: tres diferencias", intro:"En qué se separa Zea de la Filosofía de la Liberación de Dussel, que se formó leyéndolo y comparte su diagnóstico de la dependencia.", polos:{"izq":"Zea","der":"Dussel"},
     nodos:[
      {a:"América como conciencia histórica", b:"La víctima, el excluido", d:"El sujeto del filosofar: para Zea, un nosotros cultural americano amplio; para Dussel, el oprimido, categoría que corta transversalmente ese nosotros y lo divide."},
      {a:"Participar en Occidente", b:"Exterioridad y transmodernidad", d:"Para Zea, América Latina es parte de Occidente y debe participar en él con voz propia; Dussel propone un exterior que no se define desde el proyecto moderno."},
      {a:"Ser reconocida filosofía sin más", b:"Sospechar del reconocimiento", d:"Zea busca la incorporación en pie de igualdad; Dussel sospecha que el reconocimiento es la trampa, porque lo otorga el mismo centro que produjo la exclusión."}]}
  ],
  dussel: [
    {tipo:"capas", titulo:"Centro y periferia", intro:"La modernidad vista desde fuera de su centro.",
     nodos:[
      {t:"Centro", d:"Europa, que desde 1492 se constituye como centro del sistema-mundo."},
      {t:"Periferia", d:"América, África y Asia, incorporadas como periferia explotada."},
      {t:"Exterioridad", d:"Lo que el sistema no logra incluir: el Otro que interpela desde fuera."}]},
    {tipo:"secuencia", titulo:"El mito de la modernidad", intro:"Los cuatro pasos del argumento que, según 1492: el encubrimiento del Otro (1992), justifica la violencia colonial como misión civilizatoria.", nota:"Dussel sostiene que el esquema no es antiguo: reaparece casi intacto en la retórica de intervenciones humanitarias y en el lenguaje del desarrollo.",
     nodos:[
      {t:"Autocomprensión superior", d:"La cultura europea se entiende a sí misma como la más desarrollada, con criterios de desarrollo que ella misma fija."},
      {t:"El deber de desarrollar", d:"De esa superioridad no deduce un derecho sino una obligación moral de desarrollar a las culturas atrasadas: la expansión se vive sinceramente como servicio."},
      {t:"La resistencia como culpa", d:"Si el bárbaro se opone al proceso civilizatorio, su resistencia se interpreta como culpa o inmadurez, y eso autoriza la fuerza como pedagogía o castigo justo."},
      {t:"Víctimas como costo inevitable", d:"Las víctimas no se niegan: se contabilizan como precio necesario del progreso. Resultado: la víctima es declarada culpable de su propia victimación."}]}
  ],
  zuleta: [
    {tipo:"polos", titulo:"Facilidad o dificultad", intro:"Los ideales de felicidad que Zuleta critica en Elogio de la dificultad (1980) y lo que propone en su lugar.", polos:{"izq":"Deseo de facilidad","der":"Elogio de la dificultad"}, nota:"El elogio de la dificultad no es una apología del sufrimiento: la dificultad bien vivida es condición de la libertad y del reconocimiento mutuo.",
     nodos:[
      {a:"Un amor sin conflictos", b:"Soportar al otro como es", d:"Deseamos un amor en el que el otro adivine nuestros deseos; Zuleta propone aceptar al otro con su diferencia, sin exigirle que coincida con la imagen."},
      {a:"Una sociedad reconciliada", b:"El conflicto tramitado", d:"Frente al ideal de una sociedad sin tensiones donde todos piensen igual, el conflicto es constitutivo del vínculo social y la paz es la capacidad de tramitarlo."},
      {a:"Un saber sin esfuerzo", b:"Leer y pensar como trabajo", d:"Frente a una verdad que no exija cambiar, leer es interpretar, dejarse cuestionar por el texto y arriesgarse a ser transformado por él."}]},
    {tipo:"secuencia", titulo:"De la idealización a la guerra", intro:"Cómo el deseo de facilidad desemboca en sectarismo y violencia, según Sobre la idealización y Sobre la guerra.", nota:"El encadenamiento en pasos es una reconstrucción didáctica; Zuleta lo expone en ensayos y conferencias distintos, no como una serie numerada.",
     nodos:[
      {t:"Ideales de felicidad", d:"Deseamos un paraíso sin dificultades: una pareja, un grupo o un partido que coincidan sin resto con lo que esperamos."},
      {t:"Idealización de los nuestros", d:"Se atribuye al propio grupo o a la pareja una perfección que no tiene, y se deja de ver la ambivalencia real de personas y grupos."},
      {t:"Satanización del otro", d:"Cuando la realidad no se parece al ideal, se busca un culpable y se lo pone afuera: la idealización tiene como reverso la satanización."},
      {t:"Pensamiento binario", d:"El mundo queda dividido en nosotros, los buenos, y ellos, los malos; para Zuleta esta estructura explica buena parte del sectarismo político colombiano."},
      {t:"La guerra como fiesta", d:"La guerra une al grupo contra un enemigo, suprime dudas y ambivalencias y da a cada uno un lugar; por eso también se la desea."}]}
  ],
  rorty: [
    {tipo:"secuencia", titulo:"La invención del espejo", intro:"Cómo se instaló la metáfora de la mente como espejo, según La filosofía y el espejo de la naturaleza (1979), y qué propone Rorty.",
     nodos:[
      {t:"Descartes: el espacio interior", d:"Crea el espacio interior al agrupar bajo un mismo rótulo el dolor de muelas y la idea de triángulo, algo que a un griego le habría parecido raro."},
      {t:"Locke: causa por justificación", d:"Convierte la imagen en psicología de las ideas y confunde la explicación causal de cómo se forman las ideas con su justificación."},
      {t:"Kant: la epistemología tribunal", d:"Sistematiza el conjunto: la epistemología fija de antemano las condiciones de todo conocimiento posible y juzga a las demás disciplinas."},
      {t:"Los problemas perennes", d:"Escepticismo, mundo exterior y relación mente-cuerpo parecen descubrimientos sobre la condición humana, pero son efecto de una manera particular de hablar."},
      {t:"Abandonar la metáfora", d:"La metáfora no se refuta, se abandona: no hace falta una teoría mejor de la representación sino dejar de hablar de representaciones."}]},
    {tipo:"polos", titulo:"Lo privado y lo público", intro:"La separación con la que Contingencia, ironía y solidaridad (1989) sostiene a la vez la ironía y el compromiso liberal.", polos:{"izq":"Privado","der":"Público"}, nota:"Rorty no afirma que las esferas nunca choquen: cuando chocan no hay teoría que resuelva, y el límite público es no hacer sufrir a otros con la autocreación.",
     nodos:[
      {a:"Autocreación irónica", b:"Solidaridad", d:"En lo privado, redescribirse e inventar un vocabulario propio; en lo público, reducir el sufrimiento, evitar la humillación y ampliar la libertad."},
      {a:"Nietzsche, Proust, Nabokov", b:"Mill, Dewey, Orwell", d:"Los héroes de cada esfera: los autores de la autocreación, admirables pero no políticos, y los de la reforma social contra la crueldad."},
      {a:"¿Cómo debo vivir?", b:"¿Qué debo a los demás?", d:"El error de casi toda la filosofía, según Rorty, fue buscar una única teoría que respondiera las dos preguntas a la vez."}]}
  ],
  west: [
    {tipo:"partes", titulo:"Las fuentes del pragmatismo profético", intro:"Las tres tradiciones que West combina en su posición propia, ya reunidas en Prophesy Deliverance! (1982).", centro:"Pragmatismo profético", nota:"La objeción es si un compromiso tan firme no se vuelve fundamento encubierto; West responde que una opción asumida no es una verdad garantizada.",
     nodos:[
      {t:"Pragmatismo", d:"Aporta el falibilismo, el antifundacionalismo y el historicismo: toda creencia es revisable y toda idea responde a una situación concreta, sin piso metafísico."},
      {t:"Tradición profética negra", d:"De la iglesia negra, el blues y el góspel: la denuncia de la injusticia desde quienes la padecen y la memoria del sufrimiento como material de pensamiento."},
      {t:"Análisis marxista de clase", d:"Aprendido en Marx, Lukács y Gramsci: la atención a la explotación y la tesis de que sin transformar las condiciones materiales la mejora moral es decorativa."}]},
    {tipo:"secuencia", titulo:"El nihilismo como amenaza vivida", intro:"De dónde viene el nihilismo y qué respuesta exige, según el primer ensayo de Race Matters (1993).", nota:"Leer el capítulo como sermón sobre la responsabilidad individual es leer lo contrario de lo que dice: el orden causal empieza por las estructuras.",
     nodos:[
      {t:"Condiciones materiales e históricas", d:"Lo primero son siglos de degradación y despojo acumulado: instituciones, vivienda, escuelas y políticas penales, no actitudes individuales."},
      {t:"La lógica del mercado", d:"Un mercado que convierte todo, incluida la propia identidad, en mercancía que se compra y se descarta agrava el daño."},
      {t:"Nihilismo vivido", d:"No la doctrina filosófica sino la experiencia de una vida sin sentido, sin esperanza y, sobre todo, sin amor: un daño anímico que es consecuencia, no causa."},
      {t:"Política de la conversión", d:"Como no desaparece solo aunque mejoren las condiciones, exige una afirmación colectiva apoyada en instituciones comunitarias reales que restaure el sentido del propio valor."}]}
  ],
  falacias: [
    {tipo:"partes", titulo:"Dónde falla una falacia", intro:"Una clasificación de estudio para ordenar las falacias del taller según el punto en que el argumento falla.", centro:"¿Por qué el argumento no sostiene?", nota:"Es una simplificación didáctica: Aristóteles divide solo entre falacias del lenguaje y fuera del lenguaje, y varias falacias caben en más de un grupo.",
     nodos:[
      {t:"Falta de relevancia", d:"Las razones no tocan lo afirmado: ad hominem, falacia genética, hombre de paja, apelación a la naturaleza y autoridad invocada fuera de su campo."},
      {t:"Evidencia insuficiente", d:"Las razones vienen al caso pero no alcanzan: generalización apresurada, correlación tomada por causa, francotirador, pendiente resbaladiza sin mecanismo y apelación a la ignorancia."},
      {t:"Presunción indebida", d:"Una premisa da por resuelto lo que está en discusión: la petición de principio, la falsa dicotomía con su lista incompleta y el punto medio que supone la verdad entre los extremos."},
      {t:"Ambigüedad del lenguaje", d:"La fuerza viene de un doble sentido del habla, lo que Aristóteles llamó falacias dependientes del lenguaje: equivocación, anfibología, composición y división."}]},
    {tipo:"secuencia", titulo:"Cómo diagnosticar un argumento", intro:"Una ruta para examinar un argumento con las herramientas y advertencias del taller, antes de ponerle cualquier etiqueta.", nota:"El orden de los pasos es una propuesta didáctica armada con las advertencias de la ficha, no un procedimiento fijado por un autor.",
     nodos:[
      {t:"Reconstruir la mejor versión", d:"Reformular premisas y conclusión hasta que quien las sostiene las reconozca como suyas: el hombre de acero, antídoto del hombre de paja."},
      {t:"¿Vienen al caso las razones?", d:"Comprobar que las razones apuntan al contenido de la tesis y no a la persona, al origen de la idea o a su carácter natural."},
      {t:"¿Alcanzan las razones?", d:"Revisar la muestra, las explicaciones alternativas de una correlación, los eslabones de una cadena causal y a quién corresponde la carga de la prueba."},
      {t:"¿Uso legítimo o abusivo?", d:"Casi ninguna forma es falaz siempre: hay que aplicar la condición exacta, como las que vuelven legítima la deferencia a un experto."},
      {t:"No concluir que es falsa", d:"Nombrar la falacia solo muestra que ese argumento no sostiene la conclusión; concluir que es falsa sería cometer la falacia de la falacia."}]}
  ],
};
