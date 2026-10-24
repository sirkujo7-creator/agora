/* Ágora · diagramas de cada ficha (pestaña «Diagramas», en Estudiar).
   DIAGRAMAS.<id> = [ {tipo, titulo, intro, nodos, ...} ]; los tipos y sus campos están descritos
   al principio de app/diagramas.js. Las etiquetas (t, o a/b en los polos) son cortas y distintas
   dentro de cada diagrama, porque en «Completá» el estudiante las ubica en su lugar. */
const DIAGRAMAS = {
  tales: [
    {tipo:"partes", titulo:"Tres respuestas a la pregunta por el principio", intro:"La misma pregunta —de qué está hecho todo y de dónde viene— recibió en Mileto tres respuestas, y cada una corrigió a la anterior.", centro:"Arché: ¿de dónde viene todo?", nota:"Presentar a los tres como maestro y discípulos viene de la tradición antigua, de Teofrasto a Diógenes Laercio; los vínculos personales no están documentados con certeza.",
     nodos:[
      {t:"Agua (Tales)", d:"Una sustancia que se ve y se toca, húmeda, que nutre a todo y de la que nacen las semillas; sobre ella descansaría la tierra. Las razones son una conjetura de Aristóteles."},
      {t:"Ápeiron (Anaximandro)", d:"Ningún elemento, sino algo sin límites ni cualidades fijas: si el principio fuera uno de los contrarios, al ser ilimitado ya habría destruido a los demás."},
      {t:"Aire (Anaxímenes)", d:"Vuelve a un elemento determinado, pero le agrega un mecanismo de cambio: enrarecido se hace fuego; condensado, viento, nube, agua, tierra y piedra."}]}
  ],
  heraclito: [
    {tipo:"partes", titulo:"Cuatro maneras en que los contrarios son uno", intro:"Los ejemplos de Heráclito no son todos del mismo tipo: en cada uno, los opuestos están atados de una manera distinta.", centro:"Los contrarios son uno", nota:"La clasificación es de los intérpretes, no de Heráclito, que acumula los ejemplos sin ordenarlos. Distinguir así los respectos es, en parte, responder a la objeción de Aristóteles.",
     nodos:[
      {t:"Según para quién", d:"El agua del mar es la más pura y la más impura: a los peces les da vida y a los hombres los mata (DK 61)."},
      {t:"Según la dirección", d:"El camino hacia arriba y hacia abajo es uno y el mismo (DK 60): lo que cambia es el sentido en que se lo recorre."},
      {t:"Uno se convierte en el otro", d:"Lo vivo y lo muerto, lo despierto y lo dormido, lo joven y lo viejo son lo mismo: lo uno, al cambiar, es lo otro, y lo otro vuelve a ser lo uno (DK 88)."},
      {t:"Tensión simultánea", d:"Lo que difiere concuerda consigo mismo, como el arco y la lira: la cuerda y la madera tiran a la vez en sentidos opuestos, y de eso viven (DK 51)."}]}
  ],
  parmenides: [
    {tipo:"secuencia", titulo:"El recorrido del poema", intro:"El orden en que la diosa conduce al joven: del viaje a la revelación, de los dos caminos a los signos de lo que es, y de la verdad a la opinión.", nota:"El orden de los fragmentos es una reconstrucción moderna (Diels) a partir de citas dispersas; el comienzo y el paso del fragmento 8 a la opinión son seguros, la ubicación de algunos fragmentos breves se discute.",
     nodos:[
      {t:"El viaje hasta la diosa", d:"Fragmento 1: el joven llega en carro a las puertas de la Noche y del Día; una diosa lo recibe y le anuncia que aprenderá la verdad y las opiniones de los mortales."},
      {t:"Dos caminos de búsqueda", d:"Fragmento 2: solo pueden pensarse dos caminos, «que es» y «que no es»; la diosa los presenta como una alternativa sin término medio."},
      {t:"Se cierra el «no es»", d:"Fragmentos 2, 3, 6 y 7: lo que no es no se puede conocer ni decir; también se descarta el camino de los mortales de dos cabezas, y se pide juzgar con el razonamiento."},
      {t:"Los signos de lo que es", d:"Fragmento 8, primera parte: del rechazo del no ser se deduce que lo que es no nace ni perece, es continuo, inmóvil y completo, como una esfera."},
      {t:"El orden engañoso de la opinión", d:"Fragmento 8, final, y fragmentos 9 a 19: la diosa cierra el discurso verdadero y expone la cosmología de los mortales, hecha de luz y noche."}]}
  ],
  socrates: [
    {tipo:"ciclo", titulo:"Cómo avanza un élenchos", intro:"El movimiento típico de una conversación socrática en los diálogos tempranos de Platón: del atolladero final se vuelve a la pregunta inicial, con más cuidado.", nota:"Es un esquema reconstruido por los intérpretes a partir de diálogos como el Laques o el Eutifrón; Sócrates no describe su método en estos pasos.",
     nodos:[
      {t:"¿Qué es X?", d:"Sócrates pide la definición de una virtud: qué es la valentía, qué es la piedad. No le sirve un ejemplo; quiere lo que todos los casos tienen en común."},
      {t:"El interlocutor define", d:"El otro propone una definición, y Sócrates le pide que diga lo que de verdad piensa: se examina la tesis y también a quien la sostiene."},
      {t:"Acuerdos en otras premisas", d:"Sin discutir la definición de frente, Sócrates obtiene el acuerdo en afirmaciones que parecen obvias, como que la valentía es algo noble."},
      {t:"Contradicción", d:"Las premisas aceptadas, juntas, chocan con la definición inicial: el interlocutor descubre que no sabía lo que creía saber."},
      {t:"Aporía", d:"La conversación queda sin salida. Para Sócrates es un avance: quien ya no cree saber puede volver a preguntar qué es X, ahora con más cuidado."}]}
  ],
  platon: [
    {tipo:"niveles", titulo:"La línea dividida", intro:"República VI (509d-511e): cuatro modos de conocer, cada uno con su objeto, de lo más claro a lo más oscuro.", eje:"más claridad y más verdad", nota:"Platón corta una línea en dos tramos desiguales, lo inteligible y lo visible, y cada tramo en la misma proporción. Los dos modos de abajo forman la opinión (doxa); los dos de arriba, el conocimiento inteligible. Los nombres griegos son de Platón; las traducciones varían.",
     nodos:[
      {t:"Inteligencia (nóesis)", d:"Sube desde los supuestos hasta un principio que ya no es supuesto, el Bien, y razona solo con Formas, sin apoyarse en ninguna imagen: es la dialéctica."},
      {t:"Pensamiento (diánoia)", d:"Es el modo del geómetra: razona sobre lo inteligible, pero parte de supuestos que no examina y se ayuda con figuras dibujadas."},
      {t:"Creencia (pístis)", d:"Se ocupa de las cosas sensibles mismas —animales, plantas, objetos fabricados— y las toma por lo más real que hay."},
      {t:"Conjetura (eikasía)", d:"Capta solo imágenes de las cosas: sombras, y reflejos en el agua o en superficies pulidas."}]}
  ],
  aristoteles: [
    {tipo:"partes", titulo:"Las cuatro causas de una estatua", intro:"Explicar algo es responder cuatro preguntas distintas. Aristóteles usa la estatua de bronce como ejemplo, y cada causa vale también para los seres naturales.", centro:"¿Por qué existe esta estatua?", nota:"En los seres naturales, dice Aristóteles en la Física (II 7), la causa formal, la eficiente y la final a menudo coinciden: la forma del roble es lo que la semilla llega a ser y aquello hacia lo que tiende.",
     nodos:[
      {t:"Causa material", d:"Aquello de lo que está hecha y que permanece en ella: el bronce. Por sí sola no explica nada: el mismo bronce podría ser una campana."},
      {t:"Causa formal", d:"Lo que la hace ser esta estatua y no otra cosa: la figura del atleta, su definición. En un ser vivo, la forma es el alma."},
      {t:"Causa eficiente", d:"Lo que inició el cambio: el escultor, o mejor, el arte de esculpir que él posee. En la naturaleza, el padre que engendra."},
      {t:"Causa final", d:"Aquello para lo cual existe: honrar al atleta vencedor. En la naturaleza nadie lo planea: el ojo es para ver."}]}
  ],
  epicuro: [
    {tipo:"partes", titulo:"El tetrafármaco: cuatro remedios", intro:"El resumen de la doctrina en cuatro frases. Cada una cura un miedo o un error distinto, y cada una se apoya en una parte diferente del sistema.", centro:"Remedio cuádruple", nota:"La fórmula en cuatro frases se conserva en un papiro de Filodemo de Gádara (siglo I a.C.); corresponde a las cuatro primeras Máximas capitales. Asociar cada frase con una parte del sistema es una forma de ordenar la doctrina, no una división del propio Epicuro.",
     nodos:[
      {t:"El dios no es de temer", d:"Lo feliz e incorruptible no tiene preocupaciones ni se las causa a otros: los seres divinos no se enojan, no premian ni castigan, y el rayo o la peste tienen causas naturales."},
      {t:"La muerte no inspira cuidado", d:"Lo que se disuelve no siente, y lo que no siente no es nada para nosotros: el alma, hecha de átomos, se dispersa, y no queda nadie que sufra."},
      {t:"El bien es fácil de procurar", d:"Lo que la naturaleza pide tiene límite y está al alcance: pan, agua, abrigo y amigos. Lo difícil de conseguir son los deseos que nacen de opiniones falsas."},
      {t:"El mal es fácil de soportar", d:"El sufrimiento del cuerpo, si es intenso, dura poco; si dura mucho, es leve y deja lugar a placeres que lo compensan."}]}
  ],
  estoicos: [
    {tipo:"secuencia", titulo:"Cómo nace una pasión", intro:"Séneca, De la ira, libro II: la ira no estalla de golpe; pasa por momentos distintos, y solo en uno de ellos interviene nuestra decisión.", nota:"Los tres movimientos (involuntario, voluntario y el que ya no obedece a la razón) son de Séneca, De la ira II 4; la impresión que los desencadena viene de la doctrina de Crisipo. Los nombres de cada paso son de esta ficha.",
     nodos:[
      {t:"Impresión", d:"Algo se presenta como una ofensa: un comentario, un gesto, un mensaje. Recibir esa impresión no depende de nosotros."},
      {t:"Primer movimiento", d:"El cuerpo reacciona sin permiso: el sobresalto, el rubor, el calor en la cara. Es involuntario, el sabio también lo siente, y todavía no es pasión."},
      {t:"Asentimiento", d:"La mente da por verdadero el juicio «me hicieron un daño y corresponde vengarme». Es el segundo movimiento, el voluntario: aquí está nuestra responsabilidad."},
      {t:"Pasión desbocada", d:"El tercer movimiento ya no obedece: no quiere vengarse si corresponde, sino de cualquier modo. La razón quedó vencida y la ira sigue sola."}]}
  ],
  agustin: [
    {tipo:"niveles", titulo:"La subida de Del libre albedrío II", intro:"Del libre albedrío II: de lo exterior a lo interior, y de lo interior a lo superior, con una regla: lo que juzga está por encima de lo que es juzgado.", eje:"lo que juzga está por encima de lo juzgado", nota:"La escala sigue el diálogo con Evodio en el libro II de Del libre albedrío. Agustín presenta la última conclusión con cautela: esa verdad es Dios, o, si hay algo más alto que ella, eso más alto es Dios.",
     nodos:[
      {t:"Verdad inmutable", d:"Las verdades de los números y de la sabiduría son comunes a todos y no cambian; la razón no las juzga, sino que juzga según ellas. Es la cima de la prueba de que Dios existe."},
      {t:"Razón", d:"Entiende y juzga lo que está debajo de ella; es lo más alto del ser humano, pero cambia: a veces ve la verdad y a veces no, y por eso no puede ser la cima."},
      {t:"Sentido interior", d:"Percibe que los sentidos exteriores perciben y los dirige: el animal advierte que ve, y por eso busca o huye. Gobierna, pero no sabe."},
      {t:"Sentidos exteriores", d:"Vista, oído, olfato, gusto y tacto: cada uno capta su propio objeto corporal, pero ninguno percibe que percibe."},
      {t:"Cuerpos", d:"Lo que solo existe, como la piedra: es percibido y no percibe nada. Es el escalón del ser sin vida ni entendimiento."}]}
  ],
  anselmo: [
    {tipo:"partes", titulo:"La rectitud y sus formas", intro:"En los diálogos Sobre la verdad, Sobre la libertad del albedrío y La caída del diablo, Anselmo piensa el conocer y el obrar con una sola noción. Ubicá cada forma de la rectitud.", centro:"Rectitud: ser o hacer lo que se debe", nota:"La agrupación es didáctica. Anselmo distingue además la verdad del enunciado, del pensamiento, de la acción, de los sentidos y de las cosas; aquí aparecen juntas bajo «Verdad».",
     nodos:[
      {t:"Verdad", d:"La rectitud perceptible solo por la mente: un enunciado es verdadero cuando significa que es lo que es."},
      {t:"Justicia", d:"La rectitud de la voluntad conservada por sí misma: querer lo debido porque es debido, no por miedo a una sanción ni por un premio."},
      {t:"Libertad", d:"No es poder elegir entre pecar o no pecar, sino el poder de no soltar lo recto, que tienen en grado máximo quienes no pueden pecar."},
      {t:"Injusticia", d:"No es una cosa con ser propio, sino la falta de la justicia que debería haber en la voluntad: por eso el mal es una ausencia."}]}
  ],
  hildegarda: [
    {tipo:"capas", titulo:"El cosmos como un huevo (Scivias I, 3)", intro:"La tercera visión del primer libro del Scivias: el universo en capas, de afuera hacia el centro.", nota:"Simplificado: Hildegarda distingue más capas (el aire acuoso, el aire fuerte y blanco y el aire tenue con las nubes van aquí juntos). En el Libro de las obras divinas cambió el huevo por una rueda.",
     nodos:[
      {t:"Fuego luminoso y fuego oscuro", d:"Afuera, un fuego brillante; debajo, una piel sombría con un fuego oscuro. Allí están el sol y algunos astros, y desde allí soplan vientos."},
      {t:"Éter puro", d:"Una capa clara, debajo de los fuegos, donde Hildegarda ubica la luna y otros astros."},
      {t:"Aires: acuoso, fuerte y blanco, tenue", d:"Varias capas de aire: una cargada de humedad, otra fuerte y luminosa, y la más baja, tenue, donde se forman las nubes."},
      {t:"La tierra, esfera en el centro", d:"En el medio, una esfera de arena: la tierra, rodeada por todas las capas y alcanzada por sus vientos y sus influencias."}]}
  ],
  tomas: [
    {tipo:"secuencia", titulo:"Cómo está armado un artículo de la Suma", intro:"Cada artículo de la Suma teológica sigue el mismo orden, el de una disputa universitaria. El ejemplo es el artículo «¿Existe Dios?» (I, q.2, a.3).", nota:"Es la forma de la disputatio de la universidad medieval. El «en sentido contrario» no es la prueba de Tomás, sino una autoridad que apoya la otra posición; su argumento está en el «Respondo».",
     nodos:[
      {t:"La pregunta", d:"Se plantea una cuestión que se responde con sí o no: «¿Existe Dios?»."},
      {t:"Objeciones («Parece que…»)", d:"Primero hablan los argumentos contra la posición que Tomás va a defender: aquí, el problema del mal y la idea de que la naturaleza y la voluntad humana bastan para explicarlo todo."},
      {t:"En sentido contrario", d:"Se cita una autoridad a favor de la otra posición: aquí, el «Yo soy el que soy» del Éxodo."},
      {t:"Respondo", d:"El cuerpo del artículo: la solución del maestro con sus razones; aquí, las cinco vías."},
      {t:"Respuestas a las objeciones", d:"Se vuelve a cada objeción y se la resuelve una por una; a la del mal responde que Dios no permitiría ningún mal si no pudiera sacar de él un bien."}]}
  ],
  ockham: [
    {tipo:"secuencia", titulo:"De la cosa singular a la palabra escrita", intro:"Suma de lógica I, 1-15: cómo se encadenan, según Ockham, el conocimiento de los singulares y los tres lenguajes.", nota:"Ockham no presenta estos pasos como una lista numerada; el orden es una reconstrucción de su explicación sobre el origen de los conceptos y la subordinación de los signos.",
     nodos:[
      {t:"Cosas singulares", d:"Fuera de la mente solo existen individuos: este hombre, esta piedra, esta blancura. No hay naturalezas comunes repartidas en ellos."},
      {t:"Conocimiento intuitivo", d:"El primer contacto con lo singular: saber de manera evidente que esta cosa existe y cómo está, aquí y ahora."},
      {t:"Concepto: signo natural", d:"La mente forma naturalmente un concepto que está en lugar de muchos individuos parecidos. Es singular en sí mismo, universal por su función."},
      {t:"Palabra hablada", d:"Signo convencional subordinado al concepto: «hombre», homo o man significan lo mismo por acuerdo de cada comunidad."},
      {t:"Palabra escrita", d:"Signo convencional subordinado a la palabra hablada; como ella, significa las cosas, no los conceptos, pero según el orden de los conceptos."}]}
  ],
  maquiavelo: [
    {tipo:"ciclo", titulo:"El ciclo de los gobiernos", intro:"En los Discursos (I, 2), Maquiavelo retoma de Polibio la idea de que las formas de gobierno se suceden en círculo: cada forma buena degenera en su vicio, y el vicio provoca la forma siguiente. Ubicá cada etapa.", nota:"El esquema no es invención de Maquiavelo: lo toma de Polibio, y él mismo agrega que pocas repúblicas recorren el ciclo varias veces, porque antes caen bajo un vecino mejor ordenado. Su conclusión es que las tres formas simples son malas, por breves o por viciosas, y que conviene un gobierno mixto que participe de las tres.",
     nodos:[
      {t:"Principado", d:"Para defenderse, los hombres eligen al más fuerte y después al más prudente y justo, y lo siguen como jefe."},
      {t:"Tiranía", d:"Cuando el mando se vuelve hereditario, los herederos degeneran en lujos y excesos y se hacen odiar."},
      {t:"Aristocracia", d:"Los más poderosos, con el apoyo de la multitud, derriban al tirano y gobiernan según el bien común."},
      {t:"Oligarquía", d:"Sus hijos, que no conocieron la tiranía, gobiernan para su propia ambición y codicia."},
      {t:"Gobierno popular", d:"El pueblo derriba a los pocos y, para no volver a tener ni príncipe ni grandes, gobierna por sí mismo."},
      {t:"Licencia", d:"Muerta la generación que lo fundó, cada uno hace lo que quiere y se ofende sin freno, hasta que se vuelve a un príncipe."}]}
  ],
  pascalmontaigne: [
    {tipo:"polos", titulo:"Dos respuestas a la incertidumbre", intro:"Pascal leyó a Montaigne sin descanso y le respondió punto por punto. Ubicá cada postura en su polo.", polos:{"izq":"Montaigne","der":"Pascal"}, nota:"Las parejas son una comparación didáctica: Montaigne murió antes de que naciera Pascal, y es Pascal quien le responde a él.",
     nodos:[
      {a:"Suspender el juicio y vivir en paz", b:"No hay neutralidad: estamos embarcados", d:"Ante lo que no se puede saber, Montaigne se abstiene y sigue las leyes de su país; Pascal responde que no decidir ya es decidir."},
      {a:"Pintarse: el yo como materia del libro", b:"El yo es odioso", d:"Montaigne estudia la condición humana en sí mismo; Pascal le reprocha el proyecto de pintarse (B 62) y desconfía del amor propio (B 455, L 597)."},
      {a:"Las razones se oponen con igual fuerza", b:"El corazón conoce los primeros principios", d:"El escéptico ve que ningún argumento cierra la discusión; Pascal acepta que la razón no lo prueba todo, pero sostiene que el corazón conoce lo que ella no demuestra."},
      {a:"Desviar la pena es un buen remedio", b:"Divertirse es huir de la propia condición", d:"En «De la diversión» (III, 4) Montaigne cuenta cómo distraer a alguien de un duelo; para Pascal la diversión es el síntoma de un vacío."},
      {a:"Vivir a propósito es la gran obra", b:"Buscar a Dios aunque inquiete", d:"Montaigne cierra los Ensayos con el arte de vivir bien esta vida; Pascal pide no descansar mientras no se resuelva la pregunta por el fin."}]}
  ],
  bacon: [
    {tipo:"secuencia", titulo:"El método de las tablas", intro:"Cómo se investiga una naturaleza, como el calor, según el libro II del Novum Organum: de la recolección de casos a una primera hipótesis.", nota:"Bacon anunciaba más pasos después de la primera vendimia (las «instancias prerrogativas» y otros auxilios del entendimiento), pero el Novum Organum quedó inconcluso y solo trató el primero.",
     nodos:[
      {t:"Historia natural y experimental", d:"Reunir observaciones y experimentos sobre la naturaleza investigada, sin saltar todavía a conclusiones."},
      {t:"Tabla de presencia", d:"Casos muy distintos entre sí donde la naturaleza aparece: el sol, el fuego, el estiércol en fermentación."},
      {t:"Tabla de ausencia en lo próximo", d:"Casos parecidos a los anteriores donde la naturaleza falta: los rayos de la luna no calientan."},
      {t:"Tabla de grados", d:"Casos donde la naturaleza aumenta o disminuye, para ver qué cualidades varían con ella."},
      {t:"Exclusión", d:"Descartar toda cualidad que falte donde está la naturaleza, aparezca donde falta o no varíe con ella."},
      {t:"Primera vendimia", d:"Hipótesis provisoria sobre la forma: el calor sería un movimiento expansivo y contenido de las partes pequeñas."}]}
  ],
  descartes: [
    {tipo:"secuencia", titulo:"El orden de las Meditaciones", intro:"Las seis Meditaciones siguen un orden de razones: cada paso se apoya en el anterior y no puede adelantarse. Ubicá qué se gana en cada una.",
     nodos:[
      {t:"I. Se derriba todo lo dudoso", d:"Sentidos, sueño y genio maligno: se suspende la confianza en el mundo, en el propio cuerpo y hasta en la matemática."},
      {t:"II. Existo como cosa que piensa", d:"Si me engaña, existo; lo que soy es una cosa que piensa. La cera muestra que la mente se conoce mejor que cualquier cuerpo."},
      {t:"III. Dios existe y no engaña", d:"La idea de un ser infinito no puede venir de mí, que soy finito: su causa es Dios, que por ser perfecto no puede ser engañador."},
      {t:"IV. El error nace de la voluntad", d:"Me equivoco cuando la voluntad afirma más allá de lo que el entendimiento percibe con claridad; el remedio es abstenerme de juzgar."},
      {t:"V. La extensión y otra prueba de Dios", d:"Los cuerpos, en cuanto objeto de la geometría, son extensión; y la existencia está contenida en la esencia del ser perfecto."},
      {t:"VI. Existen los cuerpos; mente distinta", d:"Existen las cosas materiales y la mente es realmente distinta del cuerpo, aunque está estrechamente unida y como mezclada con él."}]}
  ],
  hobbeslocke: [
    {tipo:"polos", titulo:"Hobbes frente a Locke", intro:"Los dos usan las mismas piezas —estado de naturaleza, ley natural, pacto— y llegan a conclusiones opuestas. Cada fila enfrenta la respuesta de uno y otro a la misma pregunta.", polos:{"izq":"Hobbes","der":"Locke"}, nota:"Agrupar las tesis en estas cinco preguntas es una ayuda de estudio, no una división de los autores.",
     nodos:[
      {a:"Guerra de todos contra todos", b:"Libertad con incomodidades", d:"Cómo es el estado de naturaleza: para Hobbes, una disposición permanente a pelear; para Locke, libertad e igualdad bajo una ley, sin juez imparcial."},
      {a:"Sin ley común no hay injusticia", b:"La razón ya obliga antes del Estado", d:"Cuándo obliga la ley natural: para Hobbes, solo en conciencia mientras no haya poder común; para Locke, desde antes de todo gobierno."},
      {a:"El soberano no firma el pacto", b:"El gobierno recibe un poder en confianza", d:"Qué relación hay entre el que manda y los demás: para Hobbes, el soberano es el resultado del pacto entre súbditos; para Locke, un fiduciario del pueblo."},
      {a:"Poder absoluto e indivisible", b:"Legislativo y ejecutivo separados", d:"Cómo se organiza el poder: Hobbes ve en la división la causa de la guerra civil; Locke separa a quien hace las leyes de quien las aplica."},
      {a:"Solo se defiende la propia vida", b:"El pueblo puede resistir", d:"Qué se puede contra el que manda: Hobbes admite la defensa individual de la vida; Locke, que el pueblo resista a un gobierno que traiciona su confianza."}]}
  ],
  spinoza: [
    {tipo:"secuencia", titulo:"El recorrido de la Ética", intro:"Las cinco partes de la Ética siguen un orden demostrativo: cada una se apoya en las anteriores, y el libro va de Dios a la libertad humana. Ubicá qué trata cada parte.",
     nodos:[
      {t:"I. De Dios", d:"Una sola sustancia, infinita y necesaria: todo lo que es, es en Dios, y en la naturaleza no hay nada contingente."},
      {t:"II. Naturaleza y origen de la mente", d:"La mente es la idea del cuerpo; se distinguen la imaginación, la razón y la ciencia intuitiva."},
      {t:"III. Origen y naturaleza de los afectos", d:"El esfuerzo por perseverar en el ser y los tres afectos primarios: deseo, alegría y tristeza."},
      {t:"IV. La servidumbre humana", d:"La impotencia para moderar los afectos, y lo que la razón muestra como verdaderamente útil."},
      {t:"V. Potencia del entendimiento o libertad", d:"El poder de entender sobre las pasiones, el amor intelectual de Dios y la beatitud."}]}
  ],
  leibniz: [
    {tipo:"polos", titulo:"Dos clases de verdades", intro:"Monadología, §§31-36: los dos grandes principios del razonamiento y las verdades que gobierna cada uno.", polos:{"izq":"Verdades de razón","der":"Verdades de hecho"}, nota:"La distinción entre análisis finito e infinito no está en la Monadología: aparece en escritos breves de Leibniz sobre la libertad y la contingencia, de la década de 1680.",
     nodos:[
      {a:"Necesarias", b:"Contingentes", d:"El opuesto de una verdad de razón es imposible; el de una verdad de hecho es posible, aunque no ocurra."},
      {a:"Principio de contradicción", b:"Principio de razón suficiente", d:"Unas se apoyan en que lo contradictorio es falso; las otras, en que nada ocurre sin una razón para que sea así y no de otro modo."},
      {a:"Análisis finito", b:"Análisis infinito", d:"En unas, el análisis llega a identidades en un número finito de pasos; en las otras no termina nunca, y solo Dios lo abarca."},
      {a:"El triángulo tiene tres ángulos", b:"César cruzó el Rubicón", d:"Un ejemplo de cada lado: una verdad de la geometría y un hecho de la historia."}]}
  ],
  hume: [
    {tipo:"secuencia", titulo:"De las bolas de billar a la necesidad", intro:"Investigación sobre el entendimiento humano, secciones IV, V y VII: cómo se forma, según Hume, la idea de que una causa obliga a su efecto.", nota:"Hume no enumera estos pasos: el orden es una reconstrucción de su análisis.",
     nodos:[
      {t:"Un caso: contigüidad y sucesión", d:"Una bola toca a la otra y la segunda se mueve. Se ve que un hecho sigue a otro, no la fuerza que los une."},
      {t:"Muchos casos: conjunción constante", d:"Hechos semejantes siguen siempre a hechos semejantes. La repetición no muestra nada nuevo en cada caso."},
      {t:"La costumbre forma un hábito", d:"La repetición sí cambia algo en quien observa: produce una inclinación a esperar el efecto, sin razonamiento de por medio."},
      {t:"La mente se siente determinada", d:"Ante la causa, la imaginación pasa sola al efecto. Esa transición sentida es una impresión interna."},
      {t:"Idea de conexión necesaria", d:"Copiada de esa impresión interna, y no de los objetos, es la necesidad que después atribuimos a las cosas."}]}
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
  schopenhauer: [
    {tipo:"polos", titulo:"Las dos caras del mundo", intro:"El mundo como voluntad y representación (1819): el mismo mundo visto desde fuera y desde dentro.", polos:{"izq":"representación","der":"voluntad"}, nota:"No son dos mundos, sino dos caras del mismo: lo que desde fuera es representación, desde dentro es voluntad.",
     nodos:[
      {a:"Objeto para un sujeto", b:"Lo que el mundo es en sí", d:"Como representación, todo existe para alguien que conoce; como voluntad, es lo que es independientemente de ser conocido: la cosa en sí."},
      {a:"Espacio, tiempo y causalidad", b:"Sin fundamento ni meta", d:"La representación está ordenada por el principio de razón suficiente; la voluntad está fuera de él: no tiene un porqué ni un para qué final."},
      {a:"Muchos individuos separados", b:"Una sola en todo", d:"El espacio y el tiempo multiplican los fenómenos; la voluntad es una e idéntica en la piedra, la planta, el animal y el ser humano."},
      {a:"El cuerpo visto desde fuera", b:"El cuerpo sentido desde dentro", d:"El propio cuerpo es la puerta entre las dos caras: el mismo movimiento es objeto que se ve y querer que se siente."}]},
    {tipo:"secuencia", titulo:"Del egoísmo a la negación de la voluntad", intro:"Libro IV: los grados en que el conocimiento atraviesa el velo de Maya.", nota:"El arte no está en esta línea: aquieta el querer solo mientras dura la contemplación. La secuencia es una presentación ordenada del libro IV, no una escalera que Schopenhauer numere.",
     nodos:[
      {t:"Egoísmo", d:"Preso del principio de individuación, el individuo se cree separado y trata a los demás como medios u obstáculos para su voluntad."},
      {t:"Justicia", d:"Primer grado de ver a través del velo: no afirmar la propia voluntad hasta negar la ajena; no dañar a nadie."},
      {t:"Compasión y caridad", d:"Sentir el dolor ajeno como propio y ayudar a todos cuanto se pueda: el único fundamento de las acciones con valor moral."},
      {t:"Ascesis", d:"Quien ve el sufrimiento de todos como suyo ya no afirma la vida: castidad, pobreza, aceptación del dolor."},
      {t:"Negación de la voluntad", d:"La voluntad se da vuelta y se apaga; para quien todavía quiere, lo que queda es nada, y para quien llegó, este mundo es nada."}]}
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
  husserl: [
    {tipo:"secuencia", titulo:"El camino del método fenomenológico", intro:"Cómo se pasa, según Ideas I y las Meditaciones cartesianas, de la vida ingenua a la descripción de esencias.", nota:"El orden en pasos es una simplificación didáctica: Husserl presentó varios caminos hacia la reducción y la reelaboró toda su vida.",
     nodos:[
      {t:"Actitud natural", d:"Vivimos creyendo, sin advertirlo, que el mundo está ahí y que somos parte de él. Es la condición de la vida práctica y de las ciencias."},
      {t:"Epojé: poner entre paréntesis", d:"Se deja de usar esa creencia como punto de partida, sin negarla ni dudar de ella, para mirar cómo se da el mundo."},
      {t:"Reducción a la conciencia", d:"La mirada se reconduce de las cosas a la conciencia en que aparecen: el campo de la subjetividad trascendental."},
      {t:"Descripción intencional", d:"Se describe cada vivencia en sus dos polos, el acto (nóesis) y lo mentado tal como es mentado (nóema)."},
      {t:"Variación eidética", d:"Variando libremente un ejemplo en la imaginación se busca lo invariable: la esencia de ese tipo de experiencia."}]},
    {tipo:"capas", titulo:"Lo que la ciencia olvidó", intro:"La crisis de las ciencias europeas: del mundo de la vida, en el centro, a las construcciones que se apoyan en él.", nota:"La disposición en capas interpreta la tesis de Husserl sobre Galileo (Crisis, §9); él no la presenta como esquema.",
     nodos:[
      {t:"Mundo de la vida", d:"El mundo vivido antes de cualquier teoría: cosas con colores y olores, otros, usos y proyectos. Es el suelo de todo sentido."},
      {t:"Idealización geométrica", d:"Las formas imprecisas de las cosas se reemplazan por figuras ideales, exactas, que la práctica de medir hizo posibles."},
      {t:"Física matemática", d:"Galileo extiende la idealización a toda la naturaleza: el mundo se vuelve un sistema de magnitudes medibles, un ropaje de ideas."},
      {t:"Ciencias de meros hechos", d:"La técnica funciona, pero toma el ropaje por la realidad y olvida de dónde recibe su sentido: esa es la crisis."}]}
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
  ortega: [
    {tipo:"polos", titulo:"Ideas y creencias", intro:"Ideas y creencias (1940): dos maneras de tener algo por verdadero.", polos:{"izq":"Ideas","der":"Creencias"},
     nodos:[
      {a:"Se tienen", b:"En ellas se está", d:"Las ideas las sostenemos nosotros; las creencias nos sostienen a nosotros, como el suelo que pisamos."},
      {a:"Se nos ocurren y se formulan", b:"Están antes de todo pensar", d:"Una idea aparece en un momento y la expresamos; las creencias no las descubrimos razonando: razonamos desde ellas."},
      {a:"Se discuten y se abandonan", b:"Solo se notan cuando fallan", d:"Podemos cambiar de idea en una discusión; una creencia se hace visible cuando se resquebraja."},
      {a:"Se fabrican en la crisis", b:"Se hunden en la crisis", d:"Cuando las creencias de una época fallan, la gente queda sin suelo y tiene que fabricarse ideas a toda prisa."}]},
    {tipo:"partes", titulo:"La vida como realidad radical", intro:"Lo que Ortega encuentra cuando busca, como Descartes, una realidad que no se pueda poner en duda.", centro:"Mi vida", nota:"Reunir así estos rasgos es una síntesis de Ágora: Ortega los desarrolla en textos distintos, de Meditaciones del Quijote (1914) a Historia como sistema (1941).",
     nodos:[
      {t:"Yo", d:"No una conciencia aislada, sino alguien que se encuentra ocupado en un mundo."},
      {t:"Circunstancia", d:"Lo que está alrededor sin haberlo elegido: paisaje, lengua, época, cuerpo y personas. El yo no puede separarse de ella."},
      {t:"Quehacer", d:"La vida no nos es dada hecha: hay que hacerla, eligiendo entre posibilidades en cada momento."},
      {t:"Perspectiva", d:"Cada vida es un punto de vista insustituible sobre el universo, parcial pero real."},
      {t:"Historia", d:"Lo humano no tiene naturaleza fija: es lo que ha llegado a ser, y se entiende contándolo."}]}
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
  frankfurt: [
    {tipo:"ciclo", titulo:"La dialéctica de la Ilustración", intro:"Dialéctica de la Ilustración (1947): cómo la razón que libera del mito termina recayendo en él.", nota:"El esquema en pasos es una reconstrucción didáctica; Horkheimer y Adorno escriben en fragmentos y rechazan presentar la historia como un mecanismo necesario.",
     nodos:[
      {t:"El mito ya quiere explicar", d:"Los mitos ya narran, nombran y quieren controlar el mundo: en ellos empieza la ilustración."},
      {t:"Liberarse del miedo", d:"La Ilustración, en sentido amplio, quiere quitar el miedo a los seres humanos y hacerlos señores de la naturaleza por el conocimiento."},
      {t:"Todo se vuelve calculable", d:"Para dominar la naturaleza, el pensamiento la reduce a lo medible e intercambiable; lo que no entra en el cálculo deja de contar."},
      {t:"Dominio sobre las personas", d:"El dominio sobre la naturaleza exterior se vuelve dominio sobre la naturaleza interior y sobre otros seres humanos, administrados como cosas."},
      {t:"Recaída en mitología", d:"Lo dado se acepta como destino y la razón sirve a cualquier fin, también a la barbarie. Solo una Ilustración que reflexiona sobre sí misma rompe el ciclo."}]},
    {tipo:"polos", titulo:"Dos maneras de coordinar la acción", intro:"Habermas, Teoría de la acción comunicativa (1981): la razón no se reduce al cálculo de medios.", polos:{"izq":"acción estratégica","der":"acción comunicativa"}, nota:"En la vida real las dos se mezclan; la distinción es un criterio para analizar, no una clasificación de personas.",
     nodos:[
      {a:"Busca el propio éxito", b:"Busca entenderse con el otro", d:"En la acción estratégica el otro es un medio para mis fines; en la comunicativa es alguien con quien busco un acuerdo."},
      {a:"Influye con amenazas o incentivos", b:"Convence con razones criticables", d:"La estratégica actúa sobre el otro; la comunicativa eleva pretensiones de verdad, corrección y sinceridad que el otro puede rechazar."},
      {a:"Coordina por dinero y poder", b:"Reproduce el mundo de la vida", d:"Los sistemas coordinan sin entenderse, y eso es eficaz; la patología es que colonicen la educación, la familia o la opinión pública."}]}
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
  levinas: [
    {tipo:"polos", titulo:"Totalidad e infinito", intro:"Los dos polos de Totalidad e infinito (1961): la lógica que reduce lo Otro a lo Mismo y la relación que la desborda.", polos:{"izq":"totalidad","der":"infinito"}, nota:"La imagen de Ulises y Abraham es del ensayo «La huella del otro» (1963); los demás pares resumen el libro.",
     nodos:[
      {a:"Lo Mismo que comprende", b:"Lo Otro que desborda", d:"Comprender es volver propio lo extraño; el otro ser humano excede toda idea que tengo de él, como la idea de lo infinito en Descartes."},
      {a:"Necesidad que se satisface", b:"Deseo que se ahonda", d:"La necesidad busca lo que le falta y se calma; el deseo metafísico se dirige a lo absolutamente otro y crece en lugar de saciarse."},
      {a:"Ulises vuelve a su isla", b:"Abraham parte sin volver", d:"La filosofía de lo Mismo regresa siempre a sí misma; la relación con el otro es una salida sin retorno hacia lo desconocido."},
      {a:"La ontología va primero", b:"La ética va primero", d:"Para la tradición, primero hay que comprender el ser; para Levinas, antes de comprender ya estoy llamado a responder al otro."},
      {a:"La guerra suspende la moral", b:"El rostro dice «no matarás»", d:"En la totalidad cada individuo es una fuerza al servicio del conjunto; el rostro interrumpe esa lógica con una prohibición."}]},
    {tipo:"secuencia", titulo:"Del hay a la justicia", intro:"Un recorrido por la obra de Levinas, desde la existencia anónima hasta las instituciones.", nota:"El orden es una reconstrucción didáctica de De la existencia al existente y Totalidad e infinito, no una secuencia temporal que Levinas proponga así.",
     nodos:[
      {t:"El hay: existir sin nadie", d:"Un existir anónimo e impersonal, sin sujeto, que se siente en el insomnio y en el horror de la noche."},
      {t:"Hipóstasis: surge el existente", d:"Alguien toma posición y se arranca del murmullo del ser: nace un sujeto que existe por su cuenta."},
      {t:"Gozo y morada: el yo separado", d:"El sujeto vive de las cosas, las disfruta y habita una casa: es un yo separado, todavía encerrado en lo Mismo."},
      {t:"El rostro: el otro me interpela", d:"El otro irrumpe desnudo y sin defensa, desborda mi mundo y me dice «no matarás»: soy responsable de él."},
      {t:"El tercero: hay que comparar", d:"El otro nunca está solo; hay un tercero, y la responsabilidad obliga a juzgar entre los incomparables."},
      {t:"Justicia e instituciones", d:"Nacen la ley y el Estado, que vienen de la responsabilidad y tienen que dejarse corregir por los rostros."}]}
  ],
  foucault: [
    {tipo:"polos", titulo:"Poder soberano y poder disciplinario", intro:"Vigilar y castigar (1975): dos formas de poder que se ven en el paso del suplicio a la prisión.", polos:{"izq":"soberanía","der":"disciplina"}, nota:"Foucault insiste en que las formas se superponen: la soberanía no desaparece cuando aparece la disciplina.",
     nodos:[
      {a:"Castigo espectacular", b:"Corrección discreta", d:"El suplicio de Damiens (1757) se hace en una plaza ante la multitud; la prisión corrige en secreto, con horarios y reglamentos."},
      {a:"Golpea de vez en cuando", b:"Vigila siempre", d:"El soberano se manifiesta en momentos excepcionales; la disciplina es continua y minuciosa, y no deja tiempos muertos."},
      {a:"El poder se hace visible", b:"Los sometidos se hacen visibles", d:"En la soberanía brilla el rey y su venganza; en la disciplina el poder se oculta y son los individuos los que quedan expuestos a la mirada."},
      {a:"Destruye el cuerpo", b:"Fabrica cuerpos dóciles", d:"El suplicio marca y destruye; la disciplina ejercita los cuerpos para hacerlos más útiles y más obedientes a la vez."}]},
    {tipo:"secuencia", titulo:"Las epistemes de Las palabras y las cosas", intro:"Las palabras y las cosas (1966): los suelos de saber que Foucault distingue en la cultura europea desde el siglo XVI.", nota:"Foucault presenta los cambios como discontinuidades, no como progreso; las fechas son aproximadas y el esquema fue criticado por rígido. Él mismo dejó de usar el concepto.",
     nodos:[
      {t:"Renacimiento: la semejanza", d:"Hasta fines del siglo XVI, conocer es descifrar parecidos y firmas entre las cosas: el mundo es un texto que hay que leer."},
      {t:"Época clásica: la representación", d:"Siglos XVII y XVIII: conocer es ordenar y clasificar en tablas. Historia natural, gramática general y análisis de las riquezas."},
      {t:"Modernidad: vida, trabajo y lenguaje", d:"Desde fines del siglo XVIII, biología, economía política y filología estudian lo que tiene historia y profundidad."},
      {t:"Aparece el hombre", d:"Con la episteme moderna surge el hombre como objeto de las ciencias humanas y sujeto que funda el conocimiento."},
      {t:"¿Un rostro de arena?", d:"Foucault sugiere que, si esa disposición cambiara, el hombre podría borrarse como un rostro dibujado en la arena a la orilla del mar."}]}
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
  gandhi: [
    {tipo:"polos", titulo:"Fuerza bruta y fuerza del alma", intro:"Hind Swaraj, capítulos XVI y XVII: las dos fuerzas con que se puede respaldar una demanda.", polos:{"izq":"Fuerza bruta","der":"Fuerza del alma"}, nota:"Las tres primeras filas resumen Hind Swaraj; la idea de convertir al adversario está sobre todo en escritos posteriores sobre el satyagraha.",
     nodos:[
      {a:"Amenaza con hacer daño al otro", b:"Acepta sufrir uno mismo", d:"La fuerza de las armas dice «te haré daño si no me lo das»; la del alma asegura derechos por medio del sufrimiento propio."},
      {a:"Lo obtenido dura lo que dura el miedo", b:"Solo podés gobernarnos si te obedecemos", d:"Lo que se gana por el miedo hay que sostenerlo por el miedo; la fuerza del alma retira la cooperación de la que depende todo gobierno."},
      {a:"Fuerza al gobierno a derogar la ley", b:"Desobedece en público y acepta la pena", d:"Ante una ley injusta, la fuerza bruta obliga al gobierno con violencia a derogarla; la del alma la desobedece a la vista de todos y acepta el castigo."},
      {a:"Busca vencer al adversario", b:"Busca convertir al adversario", d:"La meta del satyagraha no es destruir al otro sino llevarlo a reconocer la injusticia; por eso excluye el odio."}]},
    {tipo:"secuencia", titulo:"La marcha de la sal (1930–1931)", intro:"Cómo una campaña contra el impuesto a la sal se volvió el símbolo de la lucha por la independencia.",
     nodos:[
      {t:"Carta al virrey (2 de marzo)", d:"Gandhi le escribe a Lord Irwin, enumera los males del dominio británico y le anuncia que, si no hay respuesta, desobedecerá las leyes de la sal."},
      {t:"Salida de Sabarmati (12 de marzo)", d:"Parte de su áshram con 78 seguidores elegidos, de distintas regiones y religiones."},
      {t:"Veinticuatro días a pie hasta Dandi", d:"Unos 385 kilómetros, hablando en cada aldea; la prensa nacional e internacional sigue la marcha."},
      {t:"Un puñado de sal (6 de abril)", d:"En la playa de Dandi recoge sal natural y viola así el monopolio británico; miles lo imitan en toda la costa."},
      {t:"Desobediencia masiva y cárcel", d:"Decenas de miles de detenidos, Gandhi entre ellos; en Dharasana, la policía golpea a manifestantes que no se defienden."},
      {t:"Pacto Gandhi-Irwin (marzo de 1931)", d:"El gobierno libera a los presos y negocia con Gandhi, que viaja a Londres; la independencia todavía tardará dieciséis años."}]}
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
  fanon: [
    {tipo:"secuencia", titulo:"Las tres fases del intelectual colonizado", intro:"Los momentos que Fanon distingue en «Sobre la cultura nacional», en Los condenados de la tierra, para la relación del intelectual colonizado con su cultura.", nota:"Fanon presenta las fases como un esquema para orientarse, no como una ley: un mismo escritor puede mezclarlas o quedarse en una.",
     nodos:[
      {t:"Asimilación", d:"El intelectual demuestra que ha asimilado la cultura del colonizador: escribe como los autores de la metrópoli y busca su aprobación."},
      {t:"Rememoración", d:"Inquieto, decide recordar quién es: vuelve a las leyendas, al folclor y a un pasado idealizado, a menudo mirándolos con ojos de extranjero."},
      {t:"Combate", d:"Se une a la lucha de su pueblo y produce una literatura de combate, nacional y revolucionaria, que despierta al pueblo en vez de exhibirlo."}]},
    {tipo:"polos", titulo:"Hegel y la situación colonial", intro:"Piel negra, máscaras blancas, capítulo 7: por qué la dialéctica del señor y el siervo no se cumple tal cual entre el amo colonial y el colonizado.", polos:{"izq":"Hegel: señor y siervo","der":"Fanon: amo colonial y colonizado"}, nota:"La comparación la hace Fanon en el texto y en una nota al pie; la disposición en pares es de Ágora.",
     nodos:[
      {a:"El señor busca reconocimiento", b:"El amo busca el trabajo del esclavo", d:"En Hegel la lucha es por ser reconocido; Fanon dice que el amo colonial se ríe de la conciencia del esclavo y solo quiere su trabajo."},
      {a:"Reciprocidad que puede invertirse", b:"Relación sin reciprocidad", d:"La dialéctica hegeliana avanza porque el reconocimiento tiene que ser mutuo; en la colonia esa exigencia no rige para el amo."},
      {a:"El siervo se vuelca hacia el objeto", b:"El esclavo se vuelve hacia el amo", d:"El siervo hegeliano se forma trabajando la cosa; según Fanon, el esclavo antillano abandona el objeto y quiere ser como el amo."},
      {a:"Libertad conquistada en la lucha", b:"Libertad otorgada por decreto", d:"En las Antillas la abolición llegó desde París en 1848: según Fanon, el negro fue actuado y esa libertad le resultó ajena."}]}
  ],
  kusch: [
    {tipo:"polos", titulo:"El ser y el estar", intro:"Las dos actitudes ante la vida que Kusch contrapone en América profunda.", polos:{"izq":"Ser","der":"Estar"}, nota:"Kusch no los presenta como bandos: su fórmula final, el estar siendo, los une. Ordenarlos en pares es una síntesis de Ágora.",
     nodos:[
      {a:"Ser alguien", b:"Estar aquí, nomás", d:"El ciudadano necesita afirmarse y llegar a ser alguien; el estar se sabe situado en un lugar, sin esa urgencia."},
      {a:"Pulcritud", b:"Hedor", d:"La limpieza de objetos e ideas protege al ciudadano; lo que queda fuera de ella lo percibe como hedor."},
      {a:"Dominar objetos", b:"Buscar amparo", d:"El ser se defiende de lo imprevisible dominándolo; el estar busca un equilibrio con fuerzas que no domina."},
      {a:"Pensar causal", b:"Pensar seminal", d:"Uno busca causas para intervenir; el otro se pregunta cómo hacer que la vida germine y dé fruto."},
      {a:"La ciudad", b:"El altiplano y el pueblo", d:"Los lugares donde Kusch encuentra cada actitud, aunque sostiene que las dos están en toda vida humana."}]},
    {tipo:"secuencia", titulo:"El recorrido de América profunda", intro:"De la incomodidad del viajero a la tesis sobre el sentido de América.", nota:"El orden reconstruye la marcha del argumento del libro; es una lectura de Ágora, no una división del autor.",
     nodos:[
      {t:"El viajero siente hedor", d:"El porteño llega al altiplano y percibe ese mundo como sucio y amenazante."},
      {t:"El hedor delata un miedo", d:"La reacción habla del ciudadano: teme quedar a la intemperie, reducido al mero estar."},
      {t:"Dos respuestas al miedo", d:"El ciudadano lo tapa con pulcritud y objetos; el mundo andino lo enfrenta con el rito y el equilibrio."},
      {t:"Ser y estar", d:"De ese contraste salen las dos actitudes ante la vida que organizan el libro."},
      {t:"La fagocitación", d:"Por debajo del progreso, el estar absorbe al ser importado y lo vive a su manera."}]}
  ],
  salazarbondy: [
    {tipo:"secuencia", titulo:"De la dominación a la autenticidad posible", intro:"El razonamiento de ¿Existe una filosofía de nuestra América? (1968), del hecho histórico a la salida que propone.", nota:"La división en pasos es una reconstrucción de Ágora. El paso más discutido es el que va de la dominación social a la conciencia engañada.",
     nodos:[
      {t:"Una filosofía de importación", d:"Cada corriente llega de Europa, se adopta con retraso, se comenta y se abandona cuando llega la siguiente, sin formar tradición propia."},
      {t:"Una sociedad dependiente", d:"La economía, la política y la cultura de la región se organizan en función de centros de poder externos."},
      {t:"Una conciencia engañada", d:"Una cultura de la dominación piensa con las categorías del dominador y mira lo propio como atraso: la imitación es un síntoma, no un vicio individual."},
      {t:"Pensar la propia dominación", d:"La filosofía puede ser auténtica ya si toma la dominación como su problema y desmonta las ideas que la presentan como natural."},
      {t:"Contribuir a superarla", d:"La autenticidad plena va junto con un cambio histórico: por eso el diagnóstico desemboca en un programa de liberación."}]},
    {tipo:"polos", titulo:"La polémica de 1968-1969", intro:"Dónde se separan Salazar Bondy y Zea, que comparten el diagnóstico de la dependencia del pensamiento latinoamericano.", polos:{"izq":"Salazar Bondy","der":"Zea"},
     nodos:[
      {a:"Todavía no hay filosofía auténtica", b:"La pregunta está mal planteada", d:"Salazar Bondy responde que no a la pregunta por una filosofía propia; Zea sostiene que la pregunta misma presupone un tribunal que no hay que aceptar."},
      {a:"Las condiciones deforman la conciencia", b:"Toda filosofía parte de una circunstancia", d:"Para Salazar Bondy, pensar desde una circunstancia dominada no garantiza nada; para Zea, pensar con rigor la propia circunstancia es lo que hizo cualquier filosofía."},
      {a:"Autenticidad junto con la liberación", b:"Autenticidad por el trabajo riguroso", d:"Salazar Bondy liga la autenticidad a superar la dependencia; Zea la pone en algo que se puede hacer ahora: filosofar sin pedir permiso."}]}
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
  rawls: [
    {tipo:"secuencia", titulo:"La secuencia de cuatro etapas", intro:"Teoría de la justicia, § 31: cómo se aplican los principios elegidos en la posición original, levantando el velo poco a poco.", nota:"Rawls presenta la secuencia como un recurso para ordenar el razonamiento, no como una descripción de cómo se hacen de hecho las constituciones y las leyes.",
     nodos:[
      {t:"Posición original", d:"Con el velo completo, las partes eligen los dos principios de la justicia sin saber nada de sí mismas ni de su sociedad particular."},
      {t:"Convención constituyente", d:"El velo se levanta en parte: se conocen los hechos generales de la propia sociedad, y se diseña una constitución que asegure las libertades básicas iguales."},
      {t:"Etapa legislativa", d:"Se hacen las leyes y las políticas económicas y sociales, guiadas por la igualdad equitativa de oportunidades y el principio de diferencia."},
      {t:"Aplicación por jueces y funcionarios", d:"El velo desaparece: se conocen todos los hechos, y las reglas se aplican a casos particulares."}]},
    {tipo:"polos", titulo:"Utilitarismo y justicia como equidad", intro:"Las diferencias que Rawls subraya entre su teoría y la del adversario que eligió en 1971.", polos:{"izq":"utilitarismo","der":"justicia como equidad"}, nota:"Es la presentación de Rawls; muchos utilitaristas, como Mill, defendieron las libertades con sus propios argumentos.",
     nodos:[
      {a:"Maximizar la suma de bienestar", b:"Proteger al menos aventajado", d:"El utilitarismo juzga las instituciones por el bienestar total o promedio; el principio de diferencia, por cómo quedan los que peor están."},
      {a:"La sociedad como una sola persona", b:"La distinción entre personas", d:"Sumar satisfacciones de todos trata a la sociedad como un individuo que compensa pérdidas con ganancias; Rawls responde que cada uno tiene una sola vida."},
      {a:"Libertades según el cálculo", b:"Libertades con prioridad", d:"Para el utilitarista, las libertades valen mientras produzcan más bienestar; para Rawls, no se negocian a cambio de ventajas económicas."},
      {a:"Primero el bien, luego lo correcto", b:"Lo justo antes que lo bueno", d:"El utilitarismo define el bien y manda maximizarlo; Rawls pone límites a las concepciones del bien que se pueden perseguir."}]}
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
  wiredu: [
    {tipo:"polos", titulo:"Mayoría y consenso", intro:"Dos maneras de decidir en democracia, según «Democracy and Consensus» de Wiredu.", polos:{"izq":"Democracia mayoritaria","der":"Democracia por consenso"},
     nodos:[
      {a:"La mayoría decide por todos", b:"Se delibera hasta acordar qué hacer", d:"En un sistema se cuenta quién es más; en el otro se discute hasta encontrar una decisión que todos puedan aceptar."},
      {a:"La minoría espera la próxima elección", b:"La minoría es escuchada e influye", d:"Wiredu distingue estar representado formalmente de estar representado en las decisiones."},
      {a:"Partidos que compiten por el poder", b:"Representantes elegidos, sin partidos", d:"La propuesta de Wiredu no es un partido único: suprime la competencia de partidos para que todos participen, no para que decida uno."},
      {a:"El ganador se lleva todo", b:"Suspensión voluntaria del desacuerdo", d:"La minoría acepta lo que se hará sin tener que admitir que estaba equivocada."}]},
    {tipo:"partes", titulo:"La persona en el pensamiento akan", intro:"Los componentes con que la tradición akan describe a la persona (onipa).", centro:"Onipa (la persona)", nota:"La interpretación es discutida: Wiredu leyó el okra y el sunsum como no inmateriales en sentido cartesiano; Kwame Gyekye, como espirituales. Las traducciones al español son aproximadas.",
     nodos:[
      {t:"Okra", d:"Principio de vida que viene de Dios (Onyame); lleva el destino de cada uno y se va con la muerte."},
      {t:"Sunsum", d:"Se asocia con la personalidad y el carácter de cada uno."},
      {t:"Honam (el cuerpo)", d:"El cuerpo, que en la descripción akan no se opone a una mente pura como en Descartes."},
      {t:"Mogya (sangre de la madre)", d:"Ubica a la persona en su linaje matrilineal (abusua), del que dependen la herencia y la pertenencia."},
      {t:"Ntoro (lo que viene del padre)", d:"Elemento transmitido por el padre, asociado con el carácter."}]}
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
