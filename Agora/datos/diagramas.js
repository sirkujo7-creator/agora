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
  epicuro: [
    {tipo:"partes", titulo:"La clasificación de los deseos", intro:"Carta a Meneceo: cómo distingue Epicuro los deseos para saber cuáles satisfacer y cuáles descartar.", centro:"Deseos", nota:"La subdivisión de los necesarios (para la vida, para el cuerpo, para la felicidad) es de la Carta; los ejemplos de cada clase vienen de un comentario antiguo a las Máximas capitales y de la tradición epicúrea.",
     nodos:[
      {t:"Necesarios para la vida", d:"Naturales y necesarios: si no se satisfacen, se sufre y se muere. Comer y beber cuando hay hambre y sed. Se satisfacen con poco: pan y agua."},
      {t:"Necesarios para el bienestar del cuerpo", d:"Naturales y necesarios para que el cuerpo no sufra: abrigo, techo, descanso."},
      {t:"Necesarios para la felicidad", d:"Naturales y necesarios para la tranquilidad del alma: la amistad y la filosofía, que liberan del miedo."},
      {t:"Naturales no necesarios", d:"Varían un placer que ya tenemos, pero no suprimen ningún dolor: comer manjares en vez de pan. No son malos, pero no hay que depender de ellos."},
      {t:"Vacíos (vanos)", d:"No nacen de la naturaleza sino de opiniones falsas, y no tienen límite: riqueza sin fin, fama, poder, estatuas y coronas. Traen más turbación que placer."}]},
    {tipo:"polos", titulo:"El Jardín y el Pórtico", intro:"Epicúreos y estoicos, las dos grandes escuelas helenísticas: buscan la tranquilidad por caminos opuestos.", polos:{"izq":"epicúreos","der":"estoicos"}, nota:"Es una comparación de las doctrinas típicas de cada escuela; dentro de cada una hubo matices y cambios a lo largo de los siglos. Los estoicos tendrán su propia ficha.",
     nodos:[
      {a:"El bien es el placer", b:"El único bien es la virtud", d:"Para Epicuro, el placer como ausencia de dolor y turbación es el fin, y las virtudes son medios para alcanzarlo; para los estoicos, la virtud es el único bien y el placer es indiferente."},
      {a:"Átomos, vacío y azar", b:"Una razón divina ordena todo", d:"Los epicúreos explican el mundo por átomos que se combinan sin plan; los estoicos ven en el cosmos un logos providente que lo gobierna todo."},
      {a:"Dioses que no intervienen", b:"Providencia y destino", d:"Los dioses de Epicuro viven felices sin ocuparse de los humanos, y el desvío de los átomos rompe la necesidad; los estoicos aceptan un destino que el sabio debe querer."},
      {a:"Vivir retirado entre amigos", b:"Participar como ciudadano del mundo", d:"Epicuro aconseja apartarse de la política y vivir en comunidad de amigos; los estoicos piden que el sabio participe en la vida pública si nada se lo impide."}]}
  ],
  estoicos: [
    {tipo:"polos", titulo:"Lo que depende y lo que no depende de nosotros", intro:"Enquiridión 1: la distinción con que Epicteto abre su manual y que organiza toda la ética estoica romana.", polos:{"izq":"depende de nosotros","der":"no depende de nosotros"}, nota:"Los ejemplos de cada par son de Epicteto; la presentación en pares es una simplificación didáctica.",
     nodos:[
      {a:"El juicio y la opinión", b:"El cuerpo y la salud", d:"Puedo decidir qué pienso de lo que me pasa; no puedo decidir no enfermarme. Epicteto pone el cuerpo entre lo que no depende de nosotros."},
      {a:"El deseo y la aversión", b:"Los bienes y la riqueza", d:"Depende de mí qué deseo y qué rechazo; no depende de mí conservar lo que tengo. El que desea lo que no depende de él se condena a la frustración."},
      {a:"El impulso a actuar", b:"La reputación y los cargos", d:"Mis decisiones son obra mía; lo que otros piensen de mí y los puestos que me den, no. Lo primero es libre; lo segundo, ajeno y sujeto a impedimentos."},
      {a:"Cómo respondo a lo que pasa", b:"Lo que pasa", d:"La muerte, el exilio o la pobreza pueden llegar; lo que depende de mí es el juicio con que los recibo. No nos perturban las cosas, sino nuestros juicios sobre ellas."}]},
    {tipo:"secuencia", titulo:"Cómo nace una pasión", intro:"La psicología estoica de Crisipo y Séneca: la pasión no es una fuerza ciega, sino el resultado de un asentimiento.", nota:"La división en pasos sigue a Séneca, De ira II 1-4, y a la doctrina de Crisipo; los nombres de cada paso son de esta ficha.",
     nodos:[
      {t:"Impresión", d:"Algo se nos presenta como bueno o malo: un insulto, una amenaza, una oferta. Recibir la impresión no depende de nosotros."},
      {t:"Primer movimiento", d:"El cuerpo reacciona solo: el sobresalto, el rubor, la palidez. Séneca dice que incluso el sabio los siente, y que todavía no son pasión."},
      {t:"Asentimiento", d:"La mente da por verdadero el juicio «esto es un mal» o «esto es un bien». Aquí está nuestra libertad y nuestra responsabilidad."},
      {t:"Pasión", d:"El impulso desmesurado que sigue al asentimiento: la ira, el miedo, la aflicción o el deseo desbordado. Es un juicio equivocado hecho emoción."},
      {t:"Examen y corrección", d:"Detenerse y decirle a la impresión: «sos una impresión, y no del todo lo que parecés». Revisar el juicio es la terapia estoica."}]}
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
  anselmo: [
    {tipo:"secuencia", titulo:"El argumento del Proslogion II", intro:"Los pasos de la reducción al absurdo con la que Anselmo pasa del entendimiento a la realidad.", nota:"La división en cinco pasos es una reconstrucción didáctica; Anselmo lo expone en un solo párrafo continuo.",
     nodos:[
      {t:"El insensato entiende la fórmula", d:"Cuando oye «algo mayor que lo cual nada puede pensarse», el que niega a Dios entiende lo que oye; y lo que se entiende está en el entendimiento."},
      {t:"Existir en la realidad es mayor", d:"Lo que existe en el entendimiento y en la realidad es mayor que lo que existe solo en el entendimiento. Es la premisa que atacará Kant."},
      {t:"Supuesto: solo en el entendimiento", d:"Se supone lo contrario de lo que se quiere probar: que aquello mayor que lo cual nada puede pensarse existe solo como pensamiento."},
      {t:"Contradicción", d:"Entonces podría pensarse algo mayor: lo mismo, existiendo también en la realidad. Lo máximo pensable no sería lo máximo pensable."},
      {t:"Existe también en la realidad", d:"Como el supuesto lleva a una contradicción, se concluye que aquello mayor que lo cual nada puede pensarse existe en el entendimiento y en la realidad."}]},
    {tipo:"partes", titulo:"La verdad como rectitud", intro:"Sobre la verdad (c. 1080–1085): los ámbitos en los que Anselmo encuentra verdad, y la definición que los une.", centro:"Rectitud perceptible solo por la mente", nota:"Anselmo trata también la verdad de los sentidos y la verdad suprema, que es Dios, causa de todas las rectitudes; el diagrama agrupa las principales.",
     nodos:[
      {t:"Enunciado", d:"Es verdadero cuando significa que es lo que es: cumple lo que debe hacer al significar."},
      {t:"Pensamiento", d:"Es verdadero cuando piensa que es lo que es, y que no es lo que no es."},
      {t:"Voluntad", d:"Es verdadera cuando quiere lo que debe querer. De aquí sale la definición de la justicia: rectitud de la voluntad conservada por sí misma."},
      {t:"Acción", d:"Es verdadera cuando hace lo que debe: obrar bien es, en este sentido, hacer la verdad."},
      {t:"Esencia de las cosas", d:"Las cosas son verdaderas cuando son lo que deben ser según la verdad suprema de la que reciben el ser."}]}
  ],
  hildegarda: [
    {tipo:"capas", titulo:"El cosmos como un huevo (Scivias I, 3)", intro:"La tercera visión del primer libro del Scivias: el universo en capas, de afuera hacia el centro.", nota:"Simplificado: Hildegarda distingue más capas (el aire acuoso, el aire fuerte y blanco y el aire tenue con las nubes van aquí juntos). En el Libro de las obras divinas cambió el huevo por una rueda.",
     nodos:[
      {t:"Fuego luminoso y fuego oscuro", d:"Afuera, un fuego brillante; debajo, una piel sombría con un fuego oscuro. Allí están el sol y algunos astros, y desde allí soplan vientos."},
      {t:"Éter puro", d:"Una capa clara, debajo de los fuegos, donde Hildegarda ubica la luna y otros astros."},
      {t:"Aires: acuoso, fuerte y blanco, tenue", d:"Varias capas de aire: una cargada de humedad, otra fuerte y luminosa, y la más baja, tenue, donde se forman las nubes."},
      {t:"La tierra, esfera en el centro", d:"En el medio, una esfera de arena: la tierra, rodeada por todas las capas y alcanzada por sus vientos y sus influencias."}]},
    {tipo:"polos", titulo:"Verdor y aridez", intro:"La viriditas y su contrario: la misma oposición recorre la naturaleza, el cuerpo y el alma.", polos:{"izq":"viriditas","der":"aridez"}, nota:"La agrupación en tres ámbitos es una manera de ordenar los usos del término, no una lista de Hildegarda.",
     nodos:[
      {a:"Tierra que brota y da fruto", b:"Tierra estéril y seca", d:"En la naturaleza, la viriditas es la fuerza que hace brotar las plantas y fructificar la tierra; su ausencia es la esterilidad."},
      {a:"Cuerpo sano, humores en equilibrio", b:"Enfermedad y melancolía", d:"En el cuerpo, el verdor es la salud; la sequedad acompaña la enfermedad y la tristeza que, para Hildegarda, entraron con la caída."},
      {a:"Alma fecunda en virtudes", b:"Alma marchita por el pecado", d:"En el alma, la viriditas es la fecundidad que da fruto en obras buenas; el pecado la seca, y el Espíritu Santo la hace reverdecer."}]}
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
  ockham: [
    {tipo:"secuencia", titulo:"De la cosa singular a la palabra escrita", intro:"Suma de lógica I, 1-15: cómo se encadenan, según Ockham, el conocimiento de los singulares y los tres lenguajes.", nota:"Ockham no presenta estos pasos como una lista numerada; el orden es una reconstrucción de su explicación sobre el origen de los conceptos y la subordinación de los signos.",
     nodos:[
      {t:"Cosas singulares", d:"Fuera de la mente solo existen individuos: este hombre, esta piedra, esta blancura. No hay naturalezas comunes repartidas en ellos."},
      {t:"Conocimiento intuitivo", d:"El primer contacto con lo singular: saber de manera evidente que esta cosa existe y cómo está, aquí y ahora."},
      {t:"Concepto: signo natural", d:"La mente forma naturalmente un concepto que está en lugar de muchos individuos parecidos. Es singular en sí mismo, universal por su función."},
      {t:"Palabra hablada", d:"Signo convencional subordinado al concepto: «hombre», homo o man significan lo mismo por acuerdo de cada comunidad."},
      {t:"Palabra escrita", d:"Signo convencional subordinado a la palabra hablada; como ella, significa las cosas, no los conceptos, pero según el orden de los conceptos."}]},
    {tipo:"polos", titulo:"Realismo y nominalismo", intro:"El problema de los universales: la posición de Ockham frente al realismo de Tomás y de Escoto.", polos:{"izq":"realismo","der":"nominalismo de Ockham"}, nota:"Tomás y Escoto no defienden el mismo realismo: para Tomás la naturaleza es universal solo en la mente; Escoto le da en las cosas una unidad menor que la numérica. Ockham rechaza ambas versiones.",
     nodos:[
      {a:"Hay una naturaleza común en las cosas", b:"Fuera de la mente todo es singular", d:"El realista pone en Sócrates y Platón algo común, la humanidad; Ockham sostiene que cada uno tiene solo su ser singular."},
      {a:"El universal se funda en una realidad", b:"El universal es un signo de muchos", d:"Para Ockham, lo universal es el concepto, que está en lugar de muchos individuos parecidos; no hace falta otra entidad que lo fundamente."},
      {a:"Distinción formal en la cosa", b:"Solo distinción real o de razón", d:"Escoto distinguía en la cosa la naturaleza y lo que la individúa; Ockham considera esa distinción ininteligible fuera de la Trinidad y la corta con la navaja."}]}
  ],
  maquiavelo: [
    {tipo:"ciclo", titulo:"El ciclo de los gobiernos", intro:"Discursos, I, 2: las formas de gobierno se degeneran y se suceden en un ciclo que Maquiavelo toma del historiador griego Polibio.", nota:"El ciclo es de Polibio (Historias, libro VI) y Maquiavelo lo adopta; agrega que casi ninguna ciudad lo recorre entero, porque antes la conquista un vecino mejor ordenado. Su salida es el gobierno mixto, que combina los tres buenos, como en Esparta y en Roma.",
     nodos:[
      {t:"Principado", d:"Para defenderse, los primeros hombres eligen como jefe al más fuerte y valeroso, y después al más prudente y justo."},
      {t:"Tiranía", d:"Los herederos del principado se entregan a los excesos y se hacen odiar: el principado se vuelve tiranía."},
      {t:"Aristocracia", d:"Los más poderosos y nobles encabezan la conspiración contra el tirano y gobiernan con miras al bien común."},
      {t:"Oligarquía", d:"Sus hijos, que no conocieron la tiranía, gobiernan con avaricia y ambición, y el gobierno de los mejores se vuelve el de unos pocos."},
      {t:"Gobierno popular", d:"El pueblo derroca a los pocos y, para no volver ni a príncipe ni a oligarcas, gobierna por sí mismo."},
      {t:"Licencia", d:"Con el tiempo cada uno hace lo que quiere y se ofende a todos: la anarquía obliga a buscar otra vez un príncipe, y el ciclo recomienza."}]},
    {tipo:"polos", titulo:"El zorro y el león", intro:"El príncipe, capítulo XVIII: de las bestias, el príncipe debe imitar al zorro y al león, y saber usar las dos naturalezas.", polos:{"izq":"zorro","der":"león"}, nota:"Maquiavelo no elige uno: el que se apoya solo en el león no entiende lo que hace. Y las dos bestias vienen después de la manera propia de los hombres, que es combatir con las leyes.",
     nodos:[
      {a:"Descubre las trampas", b:"Espanta a los lobos", d:"Hay que ser zorro para conocer las trampas y león para espantar a los lobos: cada uno sirve contra un peligro distinto."},
      {a:"No puede con los lobos", b:"Cae en las trampas", d:"Cada bestia sola tiene una debilidad: el zorro no se defiende de los lobos y el león no se defiende de las trampas."},
      {a:"Simular y disimular", b:"Armas y castigo", d:"La astucia del zorro es saber parecer fiel, piadoso y humano; la fuerza del león, las armas propias y el temor al castigo."},
      {a:"Fraude según Cicerón", b:"Violencia según Cicerón", d:"Cicerón, en Sobre los deberes, condenaba el fraude del zorro y la fuerza del león como indignos del ser humano; Maquiavelo invierte la imagen."}]}
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
  hobbeslocke: [
    {tipo:"secuencia", titulo:"Del miedo al Leviatán", intro:"Leviatán, capítulos XIII a XVII: el camino que va de la igualdad natural a la creación del Estado.", nota:"Hobbes presenta este camino como un razonamiento, no como una historia de cómo nacieron los Estados reales; la división en seis pasos es didáctica.",
     nodos:[
      {t:"Igualdad natural", d:"Nadie es tan superior que no pueda ser vencido: el más débil puede matar al más fuerte con astucia o con aliados."},
      {t:"Competencia, desconfianza y gloria", d:"Las tres causas de discordia: atacar por ganancia, por seguridad anticipándose a otros y por reputación."},
      {t:"Guerra de todos contra todos", d:"Sin poder común no hay industria, ni artes, ni sociedad, ni justicia: la vida es solitaria, pobre, desagradable, brutal y breve."},
      {t:"Las leyes de naturaleza", d:"El miedo a la muerte y la razón aconsejan buscar la paz y renunciar al derecho a todo si los demás también lo hacen."},
      {t:"El pacto de cada uno con cada uno", d:"Todos autorizan a un hombre o a una asamblea a actuar en su nombre, porque los pactos sin la espada son solo palabras."},
      {t:"El soberano, dios mortal", d:"Nace el Leviatán, con poder absoluto e indivisible; solo el derecho a defender la propia vida queda fuera del pacto."}]},
    {tipo:"polos", titulo:"Hobbes y Locke frente a frente", intro:"Leviatán (1651) y Segundo tratado (1689): las mismas piezas teóricas con respuestas opuestas.", polos:{"izq":"Hobbes","der":"Locke"}, nota:"La comparación simplifica: los dos parten de la igualdad natural, y Hobbes también reconoce un derecho inalienable a defender la vida.",
     nodos:[
      {a:"Estado de naturaleza: guerra", b:"Estado de naturaleza: ley natural", d:"Para Hobbes, sin poder común no hay justicia y todos tienen derecho a todo; para Locke, la razón ya obliga a no dañar a otros."},
      {a:"Propiedad después del soberano", b:"Propiedad antes del gobierno", d:"Para Hobbes no hay mío y tuyo sin ley; para Locke la propiedad nace del trabajo y el gobierno existe para protegerla."},
      {a:"Soberano absoluto e indivisible", b:"Gobierno limitado y poderes separados", d:"Hobbes cree que dividir el poder lleva a la guerra civil; Locke, que concentrarlo deja a los súbditos indefensos frente al gobernante."},
      {a:"Sin derecho de rebelión", b:"Derecho de resistencia del pueblo", d:"Para Hobbes los súbditos son autores de los actos del soberano; para Locke, si el gobierno traiciona la confianza, se disuelve."},
      {a:"El soberano fija las doctrinas", b:"Tolerancia religiosa", d:"Hobbes da al soberano el control de lo que se enseña para evitar guerras de religión; Locke separa el Estado de la Iglesia, con exclusiones."}]}
  ],
  spinoza: [
    {tipo:"niveles", titulo:"Los tres géneros de conocimiento", intro:"Ética, parte II, proposición 40, escolio 2: tres maneras de conocer, de la más confusa a la más alta.", nota:"Spinoza ilustra los tres con un mismo problema de proporciones, resuelto de memoria, por demostración o de un golpe de vista.",
     nodos:[
      {t:"Imaginación u opinión", d:"Primer género: conocimiento por los sentidos, de oídas o por signos. Es fragmentario y confuso, y la única fuente de falsedad."},
      {t:"Razón", d:"Segundo género: conocimiento por nociones comunes, lo que todas las cosas comparten. Es adecuado y necesariamente verdadero."},
      {t:"Ciencia intuitiva", d:"Tercer género: va de la idea adecuada de un atributo de Dios a la esencia de las cosas singulares. De él nace el amor intelectual de Dios y la beatitud."}]},
    {tipo:"polos", titulo:"Servidumbre y libertad", intro:"Ética, partes IV y V: dos maneras de vivir los afectos.", polos:{"izq":"servidumbre","der":"libertad"}, nota:"No son dos clases de personas, sino dos extremos entre los que cada uno se mueve: la libertad humana es de grado.",
     nodos:[
      {a:"Padecer: causas externas", b:"Actuar: por la propia naturaleza", d:"En la servidumbre, la causa adecuada de lo que hacemos está fuera de nosotros; en la libertad, lo que hacemos se sigue de lo que comprendemos."},
      {a:"Ideas inadecuadas", b:"Ideas adecuadas", d:"Quien padece conoce de manera confusa, por la imaginación; quien es libre forma ideas claras y distintas de sus afectos y de sus causas."},
      {a:"Pasiones tristes", b:"Alegría que nace de la razón", d:"La tristeza disminuye la potencia de obrar; la alegría que nace de entender la aumenta y culmina en el amor intelectual de Dios."},
      {a:"Meditación de la muerte", b:"Meditación de la vida", d:"El hombre libre, dice la proposición 67 de la cuarta parte, en nada piensa menos que en la muerte: su sabiduría es una meditación de la vida."}]}
  ],
  hume: [
    {tipo:"secuencia", titulo:"Cómo nace la idea de causa", intro:"Investigación sobre el entendimiento humano, secciones IV, V y VII: del primer choque de las bolas de billar a la idea de conexión necesaria.", nota:"Hume no presenta estos pasos como una lista numerada: es una reconstrucción de su análisis.",
     nodos:[
      {t:"Un hecho sigue a otro", d:"En un solo caso vemos contigüidad y sucesión: una bola toca a la otra y la segunda se mueve. No vemos ninguna fuerza que las una."},
      {t:"Conjunción constante", d:"Observamos muchas veces que hechos semejantes siguen a hechos semejantes. La repetición no agrega nada a cada caso, pero cambia algo en nosotros."},
      {t:"La costumbre crea un hábito", d:"La repetición produce una propensión: ante la causa, la mente pasa por sí sola a esperar el efecto, sin ningún razonamiento."},
      {t:"Determinación sentida", d:"Esa transición de la mente es una impresión interna: nos sentimos determinados a esperar el efecto."},
      {t:"Idea de conexión necesaria", d:"De esa impresión interna, y no de los objetos, se copia la idea de necesidad que atribuimos a la relación causal."}]},
    {tipo:"polos", titulo:"La horquilla de Hume", intro:"Investigación, sección IV: los dos tipos de objetos de la razón humana.", polos:{"izq":"relaciones de ideas","der":"cuestiones de hecho"}, nota:"Kant intentará mostrar que hay un tercer tipo: los juicios sintéticos a priori.",
     nodos:[
      {a:"Se descubren solo pensando", b:"Se conocen por experiencia", d:"Las relaciones de ideas no dependen de lo que exista en el mundo; las cuestiones de hecho solo se conocen observando."},
      {a:"Su contrario es contradictorio", b:"Su contrario es concebible", d:"Que tres por cinco no sea quince es contradictorio; que el sol no salga mañana se puede concebir sin contradicción."},
      {a:"Geometría, álgebra, aritmética", b:"Causas, física, historia", d:"Las matemáticas son el ejemplo de las primeras; todo razonamiento sobre causas y efectos pertenece a las segundas."}]}
  ],
  rousseau: [
    {tipo:"secuencia", titulo:"De la cabaña a la ley de los ricos", intro:"Discurso sobre la desigualdad (1755), segunda parte: la historia conjetural de cómo la desigualdad natural se volvió desigualdad política.", nota:"Rousseau presenta esta historia como conjetural, no como un relato documentado; el orden de las etapas es suyo, pero las fechas no existen.",
     nodos:[
      {t:"Estado de naturaleza", d:"Seres humanos dispersos, guiados por el amor de sí y la piedad; las diferencias naturales existen, pero nadie depende de nadie."},
      {t:"Chozas y familias", d:"Una primera revolución: se construyen cabañas, nacen las familias y una primera forma de propiedad; aparecen la comparación y el deseo de estima."},
      {t:"La juventud del mundo", d:"Una edad intermedia entre la indolencia primitiva y el amor propio desatado, que Rousseau considera la más feliz y duradera."},
      {t:"Metalurgia y agricultura", d:"Desde que uno necesita el auxilio de otro desaparece la igualdad: el trabajo se vuelve indispensable y la tierra se reparte."},
      {t:"Guerra entre ricos y pobres", d:"La propiedad desata la rivalidad, las usurpaciones de los ricos y los robos de los pobres, hasta un estado de guerra."},
      {t:"El pacto de los ricos", d:"Los ricos proponen leyes y paz para todos; bajo apariencia de justicia, convierten la usurpación en derecho irrevocable."}]},
    {tipo:"polos", titulo:"Amor de sí y amor propio", intro:"Discurso sobre la desigualdad y Emilio: las dos formas del amor a uno mismo que Rousseau distingue.", polos:{"izq":"amor de sí","der":"amor propio"}, nota:"Lecturas recientes sostienen que el amor propio no es solo vicio: puede tomar la forma del deseo de ser reconocido como igual.",
     nodos:[
      {a:"Natural", b:"Nace en sociedad", d:"El amor de sí existe antes de toda relación; el amor propio aparece cuando los seres humanos viven juntos y se miran unos a otros."},
      {a:"Absoluto, no compara", b:"Relativo, se mide con otros", d:"El amor de sí busca el propio bien sin mirar a los demás; el amor propio se valora por comparación."},
      {a:"Se satisface con lo necesario", b:"Insaciable", d:"Cubiertas las necesidades, el amor de sí descansa; el amor propio exige que los otros nos prefieran, lo cual nunca se cumple del todo."},
      {a:"Ser", b:"Parecer", d:"Cuando lo que cuenta es la estima ajena, hay que mostrarse distinto de lo que uno es: de ahí la vanidad, la envidia y la hipocresía."}]}
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
  kierkegaard: [
    {tipo:"niveles", titulo:"Los tres estadios de la existencia", intro:"O lo uno o lo otro, Estadios en el camino de la vida y el Postscriptum: tres maneras de vivir, de la más alta a la más inmediata.", eje:"se pasa por un salto, no por necesidad", nota:"Kierkegaard no los presenta como etapas obligatorias: muchos viven toda la vida en el estadio estético. Entre ellos sitúa zonas de transición, la ironía y el humor; ordenarlos como escalera es una simplificación.",
     nodos:[
      {t:"Religioso", d:"El individuo descubre su culpa y se relaciona de manera absoluta con Dios, por encima de lo universal. Su figura extrema es Abraham, el caballero de la fe."},
      {t:"Ético", d:"Quien se elige a sí mismo asume deberes y expresa su vida en lo universal: el matrimonio, el trabajo, la palabra dada. Su figura es el juez Wilhelm."},
      {t:"Estético", d:"La vida en lo inmediato: el placer, lo interesante, las posibilidades sin compromiso. Su figura es el seductor, y su destino, el aburrimiento y la desesperación."}]},
    {tipo:"polos", titulo:"El Sistema y el individuo", intro:"El Postscriptum (1846) y Temor y temblor frente a la filosofía de Hegel y sus seguidores daneses.", polos:{"izq":"Hegel","der":"Kierkegaard"}, nota:"Es la versión de Hegel que Kierkegaard combate, en buena parte la de los hegelianos de Copenhague; los lectores de Hegel discuten si le hace justicia.",
     nodos:[
      {a:"Mediación", b:"Salto", d:"Para Hegel, cada figura pasa necesariamente a la siguiente, que la conserva y la supera; para Kierkegaard, en la existencia se pasa por una decisión que ningún argumento obliga a tomar."},
      {a:"El todo es lo verdadero", b:"La subjetividad es la verdad", d:"Hegel busca la verdad en el sistema completo; Kierkegaard sostiene que en las cuestiones de la existencia lo decisivo es cómo el individuo se apropia de ella."},
      {a:"Lo universal es lo más alto", b:"El individuo sobre lo universal", d:"Para la ética hegeliana, el individuo se realiza en las instituciones; para Temor y temblor, en la fe el individuo puede estar por encima de lo universal."},
      {a:"La fe superada por el concepto", b:"La fe como paradoja", d:"Para Hegel, la filosofía piensa en conceptos lo que la religión representa; para Kierkegaard, la fe no es una etapa que se supera, sino una tarea de toda la vida."}]}
  ],
  marx: [
    {tipo:"niveles", titulo:"Base y superestructura", intro:"Prólogo a la Contribución a la crítica de la economía política (1859): el edificio de una sociedad, de las formas de conciencia a las fuerzas productivas.", eje:"condiciona en última instancia, de abajo hacia arriba", nota:"Engels advirtió en su carta a Joseph Bloch (1890) que la determinación económica es solo «en última instancia»: los niveles superiores también actúan sobre los inferiores. La división en cuatro niveles es una simplificación didáctica del texto de 1859.",
     nodos:[
      {t:"Formas de conciencia social", d:"La religión, la moral, el arte y la filosofía: las ideas con que una época se piensa a sí misma, que corresponden a la base sin ser su simple reflejo."},
      {t:"Superestructura jurídica y política", d:"El derecho y el Estado, que regulan y garantizan las relaciones de propiedad existentes."},
      {t:"Relaciones de producción", d:"Quién es dueño de los medios de producción y quién trabaja para quién: esclavo y amo, siervo y señor, obrero y capitalista. Forman la estructura económica, la base real."},
      {t:"Fuerzas productivas", d:"Los seres humanos con sus capacidades, sus herramientas, sus técnicas y sus máquinas. Cuando crecen y chocan con las relaciones de propiedad, se abre una época de revolución social."}]},
    {tipo:"ciclo", titulo:"El circuito del capital", intro:"El capital, tomo I: el dinero que se convierte en capital al pasar por la producción y volver aumentado (D–M–D′).", nota:"Marx resume el ciclo con la fórmula D–M–D′: dinero, mercancía, más dinero. El orden en cinco pasos es una presentación didáctica de los capítulos 4 a 7.",
     nodos:[
      {t:"Dinero inicial", d:"El capitalista empieza con una suma de dinero que no quiere gastar, sino aumentar."},
      {t:"Compra de medios y fuerza de trabajo", d:"Compra máquinas y materias primas (capital constante) y fuerza de trabajo (capital variable), pagando por esta su valor: el salario."},
      {t:"Producción y plusvalía", d:"Durante la jornada, los obreros producen más valor del que cuesta su salario. Ese trabajo excedente no pagado es la plusvalía."},
      {t:"Venta de las mercancías", d:"Las mercancías producidas se venden en el mercado y el valor que contienen, incluida la plusvalía, se realiza en dinero."},
      {t:"Dinero aumentado y reinversión", d:"El capitalista recupera más dinero del que adelantó, y la competencia lo obliga a reinvertir buena parte para volver a empezar a mayor escala: es la acumulación."}]}
  ],
  mill: [
    {tipo:"partes", titulo:"Los cuatro argumentos por la libertad de expresión", intro:"Sobre la libertad (1859), capítulo II: cuatro razones para no silenciar ninguna opinión.", centro:"No silenciar opiniones", nota:"Mill los resume al final del capítulo II. El límite no está en la opinión sino en la incitación a un daño concreto, como en el ejemplo del comerciante de granos.",
     nodos:[
      {t:"Puede ser verdadera", d:"Suprimir una opinión es suponerse infalible, y ninguna autoridad lo es: las que condenaron a Sócrates y a Jesús estaban seguras de tener razón."},
      {t:"Puede tener parte de verdad", d:"La opinión dominante rara vez es toda la verdad; solo el choque con las opiniones contrarias completa lo que le falta."},
      {t:"Sin discusión, la verdad es prejuicio", d:"Aunque la opinión aceptada sea verdadera, si nadie la discute se sostiene sin comprender sus razones: quien solo conoce su lado sabe poco incluso de eso."},
      {t:"Sin discusión, el sentido muere", d:"La doctrina no discutida se vuelve un dogma muerto, una fórmula que se repite y ya no orienta la conducta ni el carácter."}]},
    {tipo:"polos", titulo:"Bentham y Mill: dos utilitarismos", intro:"El utilitarismo que Mill heredó de Bentham y el que propuso en El utilitarismo (1861).", polos:{"izq":"Bentham","der":"Mill"}, nota:"Mill no rompió con Bentham: corrigió su psicología y su idea del placer. Algunos críticos piensan que, al hacerlo, abandonó sin decirlo el hedonismo.",
     nodos:[
      {a:"Solo cantidad de placer", b:"Calidad de los placeres", d:"Bentham medía los placeres por intensidad, duración y otras dimensiones cuantitativas; Mill sostiene que unos placeres son superiores en clase, según la preferencia de los jueces competentes."},
      {a:"Un juego vale tanto como la poesía", b:"Mejor Sócrates insatisfecho", d:"Para Bentham, a igual placer, un juego infantil vale lo mismo que la poesía; para Mill, es mejor ser Sócrates insatisfecho que un tonto satisfecho."},
      {a:"Calcular las consecuencias", b:"Reglas como almanaque náutico", d:"Bentham proponía un cálculo de placeres y dolores; Mill sostiene que las reglas morales corrientes recogen la experiencia de la humanidad y sirven de guía, como el almanaque para el navegante."},
      {a:"Ser humano como calculador", b:"Ser humano capaz de progreso", d:"Mill reprocha a Bentham una visión pobre de la naturaleza humana y funda la libertad en los intereses permanentes de un ser que se desarrolla."}]}
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
  sartre: [
    {tipo:"polos", titulo:"El ser en-sí y el ser para-sí", intro:"El ser y la nada (1943): las dos regiones del ser que Sartre distingue.", polos:{"izq":"en-sí","der":"para-sí"}, nota:"El ser humano querría ser las dos cosas a la vez, libre y sólido como una cosa: es el ideal que la tradición llamó Dios. Por ser contradictorio, Sartre dice que el hombre es una pasión inútil.",
     nodos:[
      {a:"Es lo que es", b:"Es lo que no es", d:"La cosa coincide consigo misma, sin fisuras; la conciencia está siempre a distancia de sí, proyectada hacia lo que todavía no es."},
      {a:"Macizo, sin posibilidades", b:"Proyecto, posibilidad", d:"Una piedra no se pregunta nada ni puede ser otra cosa; la conciencia existe eligiendo entre posibles."},
      {a:"Pura positividad", b:"Introduce la nada", d:"En el mundo de las cosas no falta nada; la conciencia trae la ausencia, la pregunta y la negación, como cuando el café entero se organiza alrededor de que Pedro no está."}]},
    {tipo:"partes", titulo:"Las tres palabras de la libertad", intro:"El existencialismo es un humanismo (1946): cómo se vive la libertad cuando no hay Dios ni naturaleza humana.", centro:"Libertad sin excusas", nota:"Sartre insiste en que ninguna de las tres lleva al quietismo: son la condición de la acción, no una invitación a no actuar.",
     nodos:[
      {t:"Angustia", d:"La conciencia de que, al elegir, elijo una imagen del ser humano: soy legislador para toda la humanidad, sin que nadie me garantice que elijo bien."},
      {t:"Desamparo", d:"Si Dios no existe, no hay valores escritos en ningún cielo ni signos que decidan por mí; hasta el consejero lo elijo yo."},
      {t:"Desesperación", d:"Solo cuento con lo que depende de mi voluntad: actúo sin esperar que otros o la historia aseguren el resultado."}]}
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
  ghazali: [
    {tipo:"secuencia", titulo:"El camino del Munqidh", intro:"El que libra del extravío (c. 1106–1110): las etapas de la búsqueda de la certeza tal como Al-Ghazali las cuenta.", nota:"El orden es el del relato del propio Al-Ghazali, escrito años después y con intención apologética; los historiadores no lo toman como una crónica exacta.",
     nodos:[
      {t:"Las creencias heredadas", d:"Ve que los hijos de cristianos crecen cristianos y los de musulmanes, musulmanes, y decide buscar los fundamentos de la certeza."},
      {t:"La duda de los sentidos", d:"La razón corrige a la vista: la sombra que parece quieta se mueve, la estrella que parece pequeña es mayor que la Tierra."},
      {t:"La duda de la razón", d:"Quizás haya un juez superior a la razón, como la vigilia es superior al sueño. Sin primeros principios no hay prueba: dos meses de escepticismo."},
      {t:"La luz en el corazón", d:"La salida no viene de argumentos, sino de una luz que Dios pone en el pecho y que devuelve su fuerza a los primeros principios."},
      {t:"Examen de los buscadores", d:"Teólogos, filósofos y partidarios de un imán infalible: ninguno da la certeza que promete, aunque los filósofos aciertan en lógica y matemáticas."},
      {t:"El camino sufí", d:"El saber más alto se saborea (dhawq): exige renunciar a la fama y a la riqueza. Por eso deja Bagdad en 1095."}]},
    {tipo:"polos", titulo:"Al-Ghazali y Hume ante la causalidad", intro:"La discusión XVII de La incoherencia de los filósofos (1095) y la Investigación sobre el entendimiento humano de Hume (1748): un argumento parecido con fines distintos.", polos:{"izq":"Al-Ghazali","der":"Hume"}, nota:"El paralelo es estructural: no hay pruebas de que Hume haya leído a Al-Ghazali.",
     nodos:[
      {a:"El algodón arde «junto con» el fuego", b:"Solo vemos conjunción constante", d:"Los dos parten de lo mismo: la observación no capta la conexión necesaria entre causa y efecto, solo que los hechos van juntos."},
      {a:"La costumbre de Dios", b:"La costumbre de la mente", d:"Para Al-Ghazali, lo que une los hechos es Dios, que los crea juntos según su costumbre. Para Hume, es la mente, que se habitúa a pasar de uno al otro."},
      {a:"Dios crea el saber de la regularidad", b:"La naturaleza nos impone creer", d:"Al-Ghazali: Dios pone en nosotros el conocimiento de que no hará lo meramente posible. Hume: la naturaleza humana es demasiado fuerte para que la duda nos paralice."},
      {a:"Salvar el milagro", b:"Desconfiar del milagro", d:"Al-Ghazali quiere mostrar que los milagros son posibles; Hume, en cambio, sostiene que nunca es razonable creer en el testimonio de un milagro."}]}
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
  maimonides: [
    {tipo:"secuencia", titulo:"Del atributo al silencio", intro:"Guía de perplejos I, 58-59: cómo se avanza en el conocimiento de Dios negando, desde la imagen corporal hasta la alabanza silenciosa.", nota:"Maimónides no presenta estos pasos como etapas numeradas; el orden es una reconstrucción a partir de los capítulos sobre los atributos (I, 50-60).",
     nodos:[
      {t:"Imaginar a Dios con cuerpo", d:"Tomar al pie de la letra los términos bíblicos que hablan de manos, ojos o un trono. Para Maimónides es el error más grave, y hay que enseñar a todos que Dios no es cuerpo."},
      {t:"Afirmar atributos positivos", d:"Decir que Dios es sabio, poderoso o viviente como cualidades distintas. Introduce pluralidad en su unidad y lo mide con perfecciones humanas."},
      {t:"Negar con prueba", d:"Entender que «viviente» significa que no es como lo inerte, y «uno», que no hay otro como Él. Cada negación demostrada acerca más, como saber que lo que hay en la casa no es planta ni mineral."},
      {t:"Saber que no lo comprendemos", d:"El punto más alto del conocimiento humano de Dios: saber que existe y que su esencia nos supera, como el sol que los ojos débiles no pueden mirar."},
      {t:"El silencio es alabanza", d:"Como toda alabanza contiene algo que lo rebaja, lo más adecuado es callar y contemplar. Las pocas fórmulas de la oración se dicen solo porque están en la Torá y las fijaron los profetas."}]},
    {tipo:"partes", titulo:"Tres opiniones sobre el origen del mundo", intro:"Guía de perplejos II, 13-25: las posiciones que Maimónides distingue y la suya frente a ellas.", centro:"¿Cómo empezó el mundo?", nota:"La atribución a Platón es la de Maimónides, a partir de lecturas del Timeo; los intérpretes discuten si en algún pasaje Maimónides se acerca más a la opinión platónica de lo que declara.",
     nodos:[
      {t:"La Ley de Moisés: creación de la nada", d:"Dios creó el mundo, y con él el tiempo, después de la nada absoluta, por su voluntad. Es la opinión que Maimónides defiende como la más probable, aunque no demostrada."},
      {t:"Platón: forma dada a una materia eterna", d:"Dios forma el mundo a partir de una materia que existe desde siempre. Para Maimónides no es incompatible con la Ley en principio, pero no está demostrada y no la adopta."},
      {t:"Aristóteles: un mundo eterno y necesario", d:"El mundo existe desde siempre y procede de Dios por necesidad, sin voluntad que elija. Maimónides sostiene que Aristóteles no lo demostró y que esta tesis destruiría la Ley."},
      {t:"El kalam: pruebas con átomos", d:"Los teólogos defienden la creación, pero con una física de átomos y accidentes construida a medida. Maimónides comparte su conclusión y rechaza sus pruebas."}]}
  ],
  ibnjaldun: [
    {tipo:"ciclo", titulo:"Las cinco etapas de una dinastía", intro:"Muqaddima, sobre las dinastías: el recorrido de un poder desde la conquista hasta el derroche, que deja el lugar a un grupo nuevo.", nota:"Las cinco etapas son de Ibn Jaldún; que la última cierre el círculo con la llegada de otro grupo es la lectura de su teoría del ciclo, no una etapa que él numere.",
     nodos:[
      {t:"Conquista", d:"El grupo con más cohesión vence a la dinastía anterior. El gobernante comparte la gloria con los suyos y gobierna con ellos."},
      {t:"Autocracia", d:"El gobernante concentra el poder en sí mismo, aparta a sus antiguos compañeros y se apoya en clientes y servidores."},
      {t:"Ocio y prosperidad", d:"Momento de esplendor: se recauda bien, se construyen ciudades y monumentos, se disfruta de los frutos del poder."},
      {t:"Conformismo", d:"El gobernante se limita a imitar a sus predecesores, satisfecho con lo heredado, sin entender lo que lo sostuvo."},
      {t:"Derroche", d:"Se gasta en lujos y favoritos, se suben los impuestos, se pierde el apoyo y la cohesión: la dinastía queda expuesta a un grupo más fuerte."}]},
    {tipo:"polos", titulo:"Beduinos y sedentarios", intro:"Muqaddima, sobre la vida beduina y la vida urbana: dos formas de vida cuya tensión mueve la historia.", polos:{"izq":"Badawa (vida beduina)","der":"Hadara (vida sedentaria)"}, nota:"Ibn Jaldún no idealiza a ninguno de los dos polos: la vida beduina tiene la fuerza, pero la civilización, las ciencias y los oficios solo florecen en la ciudad.",
     nodos:[
      {a:"Lo necesario", b:"Lo superfluo y el refinamiento", d:"La vida beduina se ocupa de sobrevivir; la ciudad nace del excedente y busca el lujo."},
      {a:"Fuerte cohesión de grupo", b:"Cohesión debilitada", d:"En el desierto nadie sobrevive solo; en la ciudad cada uno confía en las murallas, las leyes y el gobierno."},
      {a:"Valentía y autonomía", b:"Dependencia de leyes y soldados", d:"El beduino se defiende por sí mismo; el habitante de la ciudad delega su defensa y se vuelve temeroso."},
      {a:"Pocas ciencias y oficios", b:"Ciencias, oficios y riqueza", d:"La división del trabajo y la población numerosa de la ciudad producen la civilización refinada."}]}
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
  mozi: [
    {tipo:"secuencia", titulo:"La escalera del capítulo 17", intro:"Mozi 17: cada peldaño perjudica más a otro y, por eso, es más injusto. En el último, el juicio de los señores se invierte.", nota:"El orden de los peldaños es el del texto. La inversión final es lo que el argumento denuncia: el mismo criterio dejaría de aplicarse cuando el daño es mayor.",
     nodos:[
      {t:"Robar duraznos y ciruelas del huerto", d:"Todos lo condenan y quien gobierna lo castiga: perjudica a otro para beneficiarse a sí mismo."},
      {t:"Robar perros, cerdos y gallinas", d:"Más injusto que robar fruta, porque el perjuicio a otro es mayor."},
      {t:"Llevarse caballos y bueyes del establo", d:"Todavía más injusto: cuanto más se perjudica, mayor es la falta y más grave el crimen."},
      {t:"Matar a un inocente para quitarle la ropa", d:"El peor de los casos individuales: merece una pena de muerte."},
      {t:"Atacar a otro Estado", d:"Mata a miles y despoja de todo, pero los señores lo elogian y lo llaman justo: como quien ve mucho negro y dice blanco."}]},
    {tipo:"polos", titulo:"Mozi y los confucianos", intro:"Los puntos de la disputa, pieza por pieza.", polos:{"izq":"Mozi","der":"Confucianos"}, nota:"El contraste simplifica: los dos condenaban la guerra de conquista y querían el bien del pueblo. Del lado confuciano se reúnen tesis de Confucio, Mencio y Xunzi.",
     nodos:[
      {a:"Cuidado imparcial (jiān ài)", b:"Amor graduado desde la familia", d:"Mozi pide considerar a los demás como propios; los confucianos ven en la piedad filial la raíz de la humanidad, que se extiende con la distancia."},
      {a:"Lo recto es lo que beneficia a todos", b:"La rectitud vale más que el provecho", d:"Mozi mide lo correcto por el beneficio (lì); Confucio y Mencio oponen la rectitud (yì) al provecho."},
      {a:"Funerales sobrios, volver al trabajo", b:"Funerales debidos y luto de tres años", d:"Para Mozi el luto largo empobrece y desordena; para Xunzi el rito da forma al dolor."},
      {a:"La música de corte, un derroche", b:"La música forma y une a la comunidad", d:"Mozi no niega que la música sea agradable, sino que beneficie; Xunzi dice que Mozi no conoce la forma (wén)."},
      {a:"Un Cielo con voluntad que premia", b:"Reserva sobre los espíritus y el destino", d:"Mozi acusa a los confucianos de no creer en los espíritus y de creer en el destino."}]}
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
  mencioxunzi: [
    {tipo:"partes", titulo:"Los cuatro brotes", intro:"Mencio 2A6: cada uno de los cuatro corazones que todos traen es el brote de una virtud.", centro:"El corazón (xīn) que no soporta el sufrimiento ajeno", nota:"El orden de las piezas sigue el de Mencio. «Brote» (duān) es la punta de un retoño: no es la virtud acabada, sino su comienzo, que hay que ensanchar.",
     nodos:[
      {t:"Compasión → benevolencia (rén)", d:"El sobresalto ante el niño que va a caer al pozo. Es el brote del que Mencio da el ejemplo más vívido."},
      {t:"Vergüenza y aversión → rectitud (yì)", d:"Sentir vergüenza del mal propio y aversión al ajeno: el brote del sentido de lo que corresponde hacer."},
      {t:"Ceder y apartarse → rito (lǐ)", d:"La disposición a dar paso al otro, a no tomar primero. De ella crecen las formas del respeto."},
      {t:"Distinguir lo correcto → sabiduría (zhì)", d:"El discernimiento entre lo correcto y lo incorrecto, que con el cultivo se vuelve sabiduría práctica."}]},
    {tipo:"polos", titulo:"Mencio y Xunzi", intro:"Las dos herencias de Confucio, pieza por pieza.", polos:{"izq":"Mencio","der":"Xunzi"}, nota:"El contraste simplifica: en la práctica los dos coinciden en mucho, por ejemplo en que el tirano pierde la legitimidad y en que cualquiera puede llegar a ser un sabio.",
     nodos:[
      {a:"La naturaleza humana es buena", b:"La naturaleza humana es mala", d:"Para Mencio la naturaleza es la tendencia de desarrollo; para Xunzi, lo dado sin aprender, que sin forma lleva a la disputa."},
      {a:"Cultivar brotes, como un agricultor", b:"Enderezar madera, como un artesano", d:"Las imágenes centrales: la planta que hay que proteger sin tirar de ella, y la madera torcida que necesita la prensa."},
      {a:"El rito expresa lo que ya hay adentro", b:"El rito forma lo que todavía no hay", d:"Para Mencio el rito crece del brote de la deferencia; para Xunzi es obra de los sabios, como la vasija del alfarero."},
      {a:"El Cielo, fuente moral del mandato", b:"El Cielo, curso regular de la naturaleza", d:"Mencio conserva el Cielo que ve como ve el pueblo; Xunzi lo despoja de intenciones: no premia ni castiga."},
      {a:"Despertar al rey con su compasión", b:"Asegurar el orden con ritos y leyes", d:"Mencio apela a la compasión del gobernante; Xunzi prefiere instituciones que no dependan de ella."}]}
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
  buda: [
    {tipo:"secuencia", titulo:"Las cuatro nobles verdades", intro:"Primer sermón (Saṃyutta Nikāya 56.11): cada verdad viene con una tarea.", nota:"La comparación con el diagnóstico médico (enfermedad, causa, curación, remedio) la explicitan sobre todo textos posteriores; el primer sermón da la secuencia y las tareas.",
     nodos:[
      {t:"Dukkha: comprenderlo", d:"Nacer, envejecer, enfermar, morir, estar unido a lo que no se quiere, separado de lo que se quiere: en resumen, los cinco agregados del aferramiento. Hay que comprenderlo plenamente."},
      {t:"Origen: abandonar la sed", d:"La sed (taṇhā) de placeres, de existir y de no existir, que lleva a nuevas existencias. Hay que abandonarla."},
      {t:"Cese: realizar el nirvana", d:"El desvanecimiento sin resto de esa misma sed: el nirvana. Hay que realizarlo."},
      {t:"Camino: cultivar el sendero", d:"El noble óctuple sendero, camino medio entre el placer sensual y la mortificación. Hay que cultivarlo."}]},
    {tipo:"partes", titulo:"El óctuple sendero en tres grupos", intro:"Los ocho factores del camino, agrupados como lo hace la monja Dhammadinnā en el Majjhima Nikāya (44).", centro:"Óctuple sendero", nota:"Los factores no son etapas sucesivas sino aspectos que se cultivan juntos; el orden de los grupos varía según los textos.",
     nodos:[
      {t:"Sabiduría: visión e intención", d:"Visión correcta (comprender las cuatro nobles verdades) e intención correcta (de renuncia, de no malevolencia, de no dañar)."},
      {t:"Ética: habla, acción y medio de vida", d:"Habla sin mentira, calumnia, aspereza ni charla vana; acción sin matar, robar ni conducta sexual dañina; un medio de vida que no dañe, sin comerciar armas, personas, carne, embriagantes ni venenos."},
      {t:"Mente: esfuerzo, atención y concentración", d:"Esfuerzo por abandonar los estados dañinos y cultivar los sanos; atención plena al cuerpo, las sensaciones, la mente y los fenómenos; concentración en las absorciones meditativas."}]}
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
  lascasas: [
    {tipo:"secuencia", titulo:"Del encomendero al defensor", intro:"Las etapas de la vida de Las Casas que explican su pensamiento, de colono en las islas a polemista en la corte.", nota:"La selección de etapas es de Ágora; Las Casas mismo narró su vida como una conversión, y los historiadores discuten cuánto de ese relato es reconstrucción posterior.",
     nodos:[
      {t:"Colono y encomendero (1502)", d:"Llega a La Española, busca oro y recibe indios en encomienda como cualquier otro colono; en 1513 participa como capellán en la conquista de Cuba."},
      {t:"Conversión en Cuba (1514)", d:"Un pasaje del Eclesiástico sobre la ofrenda hecha con bienes injustos le hace ver la injusticia de todo el sistema; renuncia a sus indios."},
      {t:"Procurador de los indios (1516)", d:"Cisneros lo nombra protector de los indios; propone reformas y, entre ellas, la licencia para llevar esclavos africanos, de la que se arrepentirá."},
      {t:"Fraile dominico (1522)", d:"Tras el fracaso de Cumaná entra en la Orden de Santo Domingo, estudia teología y derecho y empieza la Historia de las Indias."},
      {t:"Leyes Nuevas y obispado (1542-1547)", d:"Sus denuncias pesan en las Leyes Nuevas; como obispo de Chiapas exige restitución y choca con los encomenderos."},
      {t:"Polemista en Valladolid (1550)", d:"Refuta a Sepúlveda ante la junta de teólogos y juristas, imprime sus tratados y sigue escribiendo hasta su muerte en 1566."}]},
    {tipo:"polos", titulo:"Sepúlveda frente a Las Casas", intro:"La Controversia de Valladolid (1550-1551): las tesis enfrentadas sobre la guerra contra los indios.", polos:{"izq":"Sepúlveda","der":"Las Casas"}, nota:"Los dos argumentaban dentro de la escolástica y del cristianismo; la disputa no era sobre si evangelizar, sino sobre si era lícito hacerlo después de una guerra.",
     nodos:[
      {a:"Siervos por naturaleza", b:"Todas las naciones son hombres", d:"Sepúlveda aplica a los indios la servidumbre natural de Aristóteles; Las Casas responde que la razón es una sola en todos los pueblos y que los indios lo prueban con sus instituciones."},
      {a:"Bárbaros en sentido estricto", b:"Bárbaros solo por lengua y fe", d:"Para Sepúlveda los indios carecen de vida civil; para Las Casas son bárbaros solo porque no escriben como los europeos y porque no son cristianos, sentidos que no justifican nada."},
      {a:"Guerra para salvar inocentes", b:"La guerra mata más inocentes", d:"Sepúlveda justifica la guerra por los sacrificios humanos; Las Casas responde que la guerra causa muchas más víctimas inocentes que las que pretende salvar."},
      {a:"Someter para predicar", b:"Predicar sin armas", d:"Para Sepúlveda la conquista previa facilita la predicación; para Las Casas la fe es libre y solo puede proponerse por persuasión."}]}
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
  marti: [
    {tipo:"polos", titulo:"El gobernante importador y el creador", intro:"Las dos figuras que Nuestra América contrapone: el que gobierna con libros ajenos y el que gobierna conociendo su país.", polos:{"izq":"Gobernante importador","der":"Gobernante creador"}, nota:"Las etiquetas resumen frases del ensayo; la organización en pares es de Ágora.",
     nodos:[
      {a:"Sabe cómo se gobierna el francés", b:"Sabe con qué elementos está hecho su país", d:"El buen gobernante en América no es el que conoce los modelos extranjeros, sino el que conoce la composición real de su pueblo."},
      {a:"Leyes heredadas de otros pueblos", b:"Instituciones nacidas del país", d:"Con un decreto de Hamilton no se para al potro del llanero: las formas de gobierno tienen que acomodarse a los elementos propios."},
      {a:"Lee para copiar", b:"Lee para aplicar", d:"Martí no rechaza el libro extranjero: injerta el mundo en el tronco propio y usa lo ajeno para responder a problemas de aquí."},
      {a:"Falsa erudición", b:"Conocimiento del país", d:"No hay batalla entre civilización y barbarie, sino entre la falsa erudición y la naturaleza: conocer el país es el único modo de librarlo de tiranías."},
      {a:"Gobierna sin el hombre natural", b:"La razón de todos en las cosas de todos", d:"La república que se hizo con los campesinos e indios no puede gobernarse contra ellos ni sin ellos."}]},
    {tipo:"secuencia", titulo:"El recorrido de Nuestra América", intro:"Los pasos del ensayo de 1891, del aldeano vanidoso a la negación del odio de razas.", nota:"El ensayo avanza por imágenes y no por apartados; la división en pasos es de Ágora.",
     nodos:[
      {t:"El aldeano vanidoso", d:"Cree que el mundo es su aldea y no ve a los gigantes de siete leguas: los pueblos de América tienen que despertar y conocerse para unirse."},
      {t:"Los sietemesinos", d:"Los que no tienen fe en su tierra y se avergüenzan de la madre india: Martí los opone al orgullo de nuestras repúblicas dolorosas."},
      {t:"El gobierno ha de nacer del país", d:"La incapacidad no está en los pueblos sino en quienes los rigen con leyes ajenas; gobernante, en un pueblo nuevo, quiere decir creador."},
      {t:"La colonia continuó en la república", d:"La independencia cambió las formas pero no el espíritu; el tigre de la colonia vuelve de noche con zarpas de terciopelo."},
      {t:"Crear es la palabra de pase", d:"La generación nueva lee para aplicar y no para copiar, y empieza a preguntarse cómo somos."},
      {t:"El vecino formidable y las razas", d:"El peligro mayor es el desdén del vecino que no nos conoce; y no hay odio de razas, porque no hay razas."}]}
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
  mariategui: [
    {tipo:"partes", titulo:"Seis soluciones que no alcanzan", intro:"«El problema del indio»: las seis maneras de plantear la cuestión que Mariátegui descarta, todas alrededor de la raíz que dejan intacta.", centro:"La tierra: latifundio y servidumbre", nota:"El orden y la agrupación siguen la enumeración del propio ensayo; las razones de cada pieza están resumidas.",
     nodos:[
      {t:"Administrativa", d:"Ordenanzas y decretos de protección se acumulan desde la colonia, pero el gamonal, como antes el encomendero, sabe que la práctica es distinta."},
      {t:"Jurídica", d:"La reforma de las leyes no tiene más valor que la administrativa frente a un feudalismo intacto; sin disolver el feudo no funciona ningún derecho liberal."},
      {t:"Étnica", d:"Esperar la emancipación del cruce con inmigrantes blancos repite el viejo repertorio imperialista de razas inferiores."},
      {t:"Moral o humanitaria", d:"Confía en conmover a los opresores; la prédica humanitaria no detuvo ni suavizó la explotación colonial."},
      {t:"Educacional", d:"La escuela no puede funcionar dentro del latifundio: el gamonal tiene interés en la ignorancia del indio y el maestro queda sometido."},
      {t:"Eclesiástica", d:"Ni siquiera la autoridad de frailes como Las Casas logró más que leyes sabias que no cambiaron la suerte de los indios."}]},
    {tipo:"polos", titulo:"Mariátegui frente a Haya de la Torre", intro:"La polémica de 1928 sobre el APRA: dos maneras de pensar la lucha contra el imperialismo en América Latina.", polos:{"izq":"Haya de la Torre (APRA)","der":"Mariátegui"}, nota:"La oposición está simplificada: los dos venían del mismo movimiento y sus posiciones se fueron precisando en la polémica misma.",
     nodos:[
      {a:"Imperialismo, primera etapa del capitalismo", b:"Imperialismo y feudalidad, aliados", d:"Para Haya el capital extranjero trae el capitalismo a América Latina; para Mariátegui se apoya en la feudalidad sobreviviente y la refuerza."},
      {a:"Clases medias al frente", b:"Obreros y campesinos al frente", d:"Haya confía en las clases medias como fuerza decisiva; Mariátegui, en los obreros y en los campesinos indígenas."},
      {a:"Estado antiimperialista primero", b:"Antiimperialismo dentro del socialismo", d:"Haya propone una etapa nacional antes del socialismo; Mariátegui sostiene que el antiimperialismo solo no es programa."},
      {a:"Partido nacionalista", b:"Partido socialista de clase", d:"En 1928 Haya convierte el frente en partido con candidato propio; Mariátegui funda el Partido Socialista del Perú."}]}
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
  freire: [
    {tipo:"secuencia", titulo:"El método de las palabras generadoras", intro:"Los pasos del método de alfabetización de adultos, tal como Freire lo describe en La educación como práctica de la libertad.", nota:"Freire insistía en que no es una técnica aislable: si se aplican los pasos sin diálogo, el método se vuelve bancario.",
     nodos:[
      {t:"Investigar el universo vocabular", d:"El equipo escucha a la comunidad y registra las palabras que usa para hablar de su vida, su trabajo y sus conflictos."},
      {t:"Elegir las palabras generadoras", d:"Se seleccionan unas dieciséis o diecisiete palabras por su peso existencial y su riqueza fonética, como tijolo, ladrillo."},
      {t:"Codificar en imágenes", d:"Cada palabra se presenta en una imagen que representa una situación real de la vida de los participantes."},
      {t:"Decodificar en el círculo de cultura", d:"Coordinador y participantes discuten la situación de la imagen: qué muestra, por qué pasa, qué se puede hacer."},
      {t:"Separar en familias silábicas", d:"La palabra se divide en sílabas y cada una se despliega en su familia: ta, te, ti, to, tu."},
      {t:"Crear palabras nuevas", d:"Los participantes combinan las sílabas para formar sus propias palabras, y descubren que pueden escribir su mundo."}]},
    {tipo:"polos", titulo:"Dos concepciones de la educación", intro:"Pedagogía del oprimido, capítulo 2: la educación bancaria frente a la problematizadora.", polos:{"izq":"bancaria","der":"problematizadora"}, nota:"La oposición no es entre exponer y no exponer, sino entre dos relaciones con el saber y con los educandos.",
     nodos:[
      {a:"Depositar comunicados", b:"Plantear problemas", d:"La bancaria transfiere un saber terminado; la problematizadora presenta la realidad como algo que se puede investigar."},
      {a:"El educador sabe, el educando no", b:"Ambos aprenden y enseñan", d:"La bancaria fija los papeles; la problematizadora supera la contradicción: el educador también es educado en el diálogo."},
      {a:"Memorizar y repetir", b:"Conocer críticamente", d:"En la bancaria el educando archiva; en la problematizadora reconstruye el saber como sujeto."},
      {a:"Adaptarse al mundo", b:"Transformar el mundo", d:"La bancaria forma personas que se ajustan a lo dado; la problematizadora, personas que lo leen como histórico y modificable."}]}
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
  falsborda: [
    {tipo:"ciclo", titulo:"El ciclo de la investigación-acción participativa", intro:"Investigar, devolver, actuar y reflexionar: la investigación participativa no termina en un informe, sino que vuelve a empezar.", nota:"El orden y los nombres de las fases son una esquematización didáctica: Fals Borda describió el proceso como un ritmo entre reflexión y acción, no como una receta de pasos fijos.",
     nodos:[
      {t:"Pregunta construida con la comunidad", d:"El problema no lo define solo el investigador: se discute con la comunidad, que conoce su realidad y sabe qué necesita entender."},
      {t:"Investigación colectiva", d:"La información se recoge entre todos, combinando técnicas académicas con el saber popular, la memoria oral y la recuperación crítica de la historia."},
      {t:"Devolución sistemática", d:"Lo aprendido vuelve a la comunidad en formas que pueda comprender y discutir: cartillas, relatos, radio, teatro, reuniones."},
      {t:"Acción transformadora", d:"La comunidad usa ese conocimiento para actuar sobre su situación: organizarse, reclamar, negociar, cambiar prácticas."},
      {t:"Reflexión sobre lo hecho", d:"Se evalúa qué pasó con la acción, qué se aprendió y qué falta saber, y de ahí salen nuevas preguntas para otro ciclo."}]},
    {tipo:"polos", titulo:"Los dos canales de la Historia doble de la Costa", intro:"Historia doble de la Costa (1979–1986): cada página doble cuenta la misma historia en dos registros.", polos:{"izq":"canal A","der":"canal B"}, nota:"Los dos canales no se oponen: se complementan. La forma del libro muestra que ningún registro es completo sin el otro.",
     nodos:[
      {a:"Página izquierda: relato", b:"Página derecha: interpretación", d:"El canal A narra los hechos con personajes y episodios; el canal B desarrolla la teoría, el método y la discusión con otros autores."},
      {a:"Para la gente de la región", b:"Para los lectores académicos", d:"El canal A está pensado para que lo lean los campesinos y pescadores de los que habla; el canal B, para la comunidad científica."},
      {a:"Memoria oral y baúles familiares", b:"Fuentes, archivos y conceptos", d:"El relato se apoya en lo que contaron los mayores y en los papeles guardados por las familias; la interpretación explicita fuentes y construye conceptos como la cultura anfibia."}]}
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
