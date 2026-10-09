/* Ágora · ideas clave de las preguntas escritas (pestaña Preguntas).
   CLAVES.<id>[i] = las 3-4 ideas que una buena respuesta a cuestionario[i] debería contener,
   sacadas de la respuesta del modelo. Se usan como lista para marcar después de verla
   (y al revisar la respuesta de un compañero). Mismo orden que el cuestionario: al agregar
   una pregunta, agregar su lista al final. verificar.js controla que no falte ninguna. */
const CLAVES = {
  platon: [
    ["Ninguna evidencia sensible basta para salir de las sombras", "Hace falta un giro del alma hacia el razonamiento dialéctico", "La evidencia decisiva es racional, no de los sentidos", "Riesgo de que la tesis resulte infalsable"],
    ["Nunca se ha visto un triángulo perfecto y aun así se entiende", "Ese conocimiento no proviene de los sentidos", "La intuición sostiene la Teoría de las Formas"],
    ["El alma tripartita está ordenada jerárquicamente", "La justicia interior consiste en que gobierne la razón", "Si gana el apetito, el alma queda desordenada", "No existe un cuarto juez por encima de las partes"],
    ["Educación obligatoria de décadas para los guardianes", "No se deja al candidato decidir libremente", "Se forma al gobernante y luego se lo obliga a volver a gobernar"],
    ["El regreso al infinito depende de la autopredicación de la Forma", "Negarla convierte a la Forma en aquello en virtud de lo cual algo es", "Se debilita la imagen de modelo y copia de la reminiscencia", "Aristóteles concluye que el universal no debe separarse de las cosas"]
  ],
  aristoteles: [
    ["Distinción entre episteme y phronesis", "La sabiduría práctica exige experiencia y carácter formado", "Se puede dominar teorías morales y deliberar mal", "Analogía con saber medicina sin saber curar a un paciente"],
    ["El medio lo fija la phronesis, no el deseo del agente", "Criterio del hombre prudente con juicio educado por la experiencia", "Objeción: la ética de la virtud podría depender de un consenso social"],
    ["La naturaleza obra por un fin inmanente", "El ojo es para ver sin que nadie lo haya diseñado", "La física moderna eliminó la causa final", "La biología sigue hablando de funciones, el debate sigue abierto"],
    ["Vivir fuera de la pólis no es una opción neutral", "Sin ciudad no se desarrolla la deliberación sobre lo justo", "Quien vive sin ciudad es una bestia o un dios", "Objeción moderna: confunde un hecho estadístico con una naturaleza"],
    ["Aristóteles no separa hecho y valor como Hume", "La forma de una cosa ya incluye su fin", "Describir plenamente al humano es describir su plenitud", "Ese supuesto es lo que discute la filosofía moderna"]
  ],
  descartes: [
    ["El cogito solo garantiza que hay pensamiento ahora", "La sustancia persistente proviene de la teoría de la sustancia, no del cogito", "Hume solo encuentra percepciones sueltas al buscar el yo", "Lichtenberg: lo legítimo sería decir «se piensa»"],
    ["Sin descartar al genio maligno, la evidencia podría ser el engaño", "El criterio sería psicológicamente irresistible pero metafísicamente vacío", "La prueba de Dios usa el mismo criterio: el círculo de Arnauld", "Respuesta cartesiana: distinguir intuición actual de recuerdo de la demostración"],
    ["Supone que lo concebible con claridad indica lo realmente posible", "Supone que la concepción de sí mismo es completa y no parcial", "Contraejemplo de Arnauld con el triángulo rectángulo y Pitágoras", "La inferencia sigue viva en los argumentos modales y los zombis de Chalmers"],
    ["Las sensaciones no se tienen como un piloto en su nave", "Se viven confusamente por estar unido y mezclado con el cuerpo", "La unión es una tercera noción primitiva irreductible", "Isabel de Bohemia: el sistema reconoce un hecho que no explica"],
    ["La acción no puede esperar a la certeza", "Imagen de no destruir la casa antes de tener otra", "Dewey: una duda sin situación real es artificial", "Cuestión de si una duda inoperante en la vida es realmente duda"]
  ],
  kant: [
    ["La universalización detecta contradicciones, no calcula resultados", "La promesa falsa universalizada anula la posibilidad de prometer", "Hegel: la forma sola es vacía y presupone instituciones", "La misma acción admite máximas que pasan y no pasan la prueba"],
    ["Kant mantiene el deber de no mentir contra Constant en 1797", "Argumento débil: no se pueden prever las consecuencias de mentir", "Argumento fuerte: mentir destruye la confianza que permite toda declaración", "Objeción: negarse a declarar no es mentir y el asesino rompió las condiciones"],
    ["Se gana necesidad y universalidad al precio de la metafísica tradicional", "Queda fundada la física newtoniana y cancelado el conocimiento de alma, mundo y Dios", "Objeción de Jacobi: la cosa en sí usa la causalidad fuera de la experiencia", "Alternativa: entender el noúmeno como concepto límite negativo"],
    ["El yo libre queda pensado, no conocido", "En el sentido interno el yo aparece determinado como fenómeno", "La libertad se afirma por el hecho de la razón: debo, luego puedo", "Problema: una libertad fuera del tiempo no explica esta acción concreta"],
    ["La objeción vale para unos ejemplos y no para otros", "La promesa falsa universalizada es genuinamente autodestructiva", "En talento descuidado y no ayudar, lo que falla es que no puede quererse", "La grieta entre deberes perfectos e imperfectos difumina deontología y consecuencialismo"]
  ],
  hegel: [
    ["Hegel afirma un punto de llegada: el saber absoluto", "El Espíritu se reconoce en lo que produce sin extrañamiento", "Objeción de Kierkegaard, Schelling y Adorno: un sistema cerrado traiciona su principio", "Lectura alternativa: no hay criterio externo al proceso mismo"],
    ["La Filosofía del derecho no admite derecho de resistencia", "La guerra recibe una función ética de renovación", "Popper usó citas de segunda mano y descontextualizadas", "El Estado hegeliano es una monarquía constitucional con división de poderes"],
    ["La contradicción es la determinación de lo real, no un error", "El método sigue el desarrollo inmanente del contenido", "Objeción: abandonar la no contradicción impide distinguir argumentos válidos", "La fórmula tesis-antítesis-síntesis no es de Hegel sino de Fichte"],
    ["La mediación funciona en el pensamiento pero no en la existencia", "Se vive en la elección singular, la angustia y el instante", "Réplica hegeliana: solo una época moderna puede formular esa crítica", "Duda de si el sufrimiento singular es momento del todo o resto"],
    ["Se conserva la estructura: contradicción, negación determinada y superación", "Cambia el sujeto: relaciones materiales de producción en lugar del Espíritu", "La contradicción es entre fuerzas productivas y relaciones sociales", "Objeción: Marx conserva la certeza de un desenlace necesario"]
  ],
  nietzsche: [
    ["La objeción de autorrefutación tiene fuerza", "El perspectivismo como práctica de lectura, no verdad sobre el mundo", "Multiplicar perspectivas en lugar de abolir el conocimiento", "Distinción entre perspectivismo global y restringido a los valores"],
    ["Afirmar que todo es voluntad de poder parece una tesis metafísica", "Heidegger: invertir el platonismo conserva el esquema y lo hace último metafísico", "En Más allá del bien y del mal aparece como hipótesis", "El libro La voluntad de poder lo compuso su hermana"],
    ["Nietzsche despreció el antisemitismo y el nacionalismo alemán", "La apropiación nazi usó una compilación manipulada por Elisabeth", "Hay textos reales sobre rango, esclavitud y dureza", "Una figura vacía de contenido no resiste un contenido brutal"],
    ["El origen de una creencia no refuta su contenido", "Nietzsche no busca refutar sino evaluar tipos de vida", "La pregunta es qué vale el valor y qué función cumple", "La legitimidad depende de si los valores pueden ser verdaderos o falsos"],
    ["Lectura que los descarta como escoria de época prescindible", "Lectura que los considera constitutivos de todo el sistema", "Usar la genealogía contra sus propios contenidos, como Irigaray o Butler", "Masculinidad y superioridad europea también tienen una historia"]
  ],
  heidegger: [
    ["Hechos: afiliación de 1933, rectorado y Cuadernos negros antisemitas", "Lectura de Farías y Faye: el nazismo estructura la obra", "Lectura de Arendt y Gadamer: separar al hombre de los conceptos", "Posición dominante: buscar dónde el sistema no ofreció resistencia"],
    ["El ser-con es una estructura originaria del Dasein", "La propiedad pasa por la angustia, la muerte y la voz de la conciencia", "La solicitud anticipante devuelve al otro su asunto", "Levinas: el otro no aparece como rostro que obliga"],
    ["Ser y tiempo no define el ser porque no es un ente", "El libro quedó inconcluso antes de la sección decisiva", "Carnap: «la Nada nadea» como enunciado sin sentido", "Defensa: buscar una transformación de la comprensión, no una definición"],
    ["Invertir esencia y existencia no sale del marco metafísico", "El lenguaje es la casa del ser y el hombre su pastor", "El Dasein está arrojado, frente a la libertad absoluta sartreana", "Réplica: la pasividad receptiva no da criterio para actuar"],
    ["La noción de existencia disponible describe la economía de la atención", "La técnica no es instrumento neutral sino modo de hacer aparecer el mundo", "Dreyfus usó su análisis contra la inteligencia artificial simbólica", "Objeción: la generalidad no distingue una vacuna de un arma"]
  ],
  wittgenstein: [
    ["Sus observaciones son recordatorios, no doctrinas", "El estatuto de sus afirmaciones es gramatical, no empírico", "«Todo está a la vista» no parece estar a la vista", "Críticos: es una teoría que se niega a pagar el costo de serlo"],
    ["Kripke: ningún hecho determina significar suma y no cuadición", "Solución escéptica con condiciones de asertabilidad comunitarias", "Lectura ortodoxa: hay un modo de captar la regla sin interpretarla", "Una comunidad entera también puede desviarse"],
    ["La demostración instituye una regla nueva, no descubre una verdad", "El matemático es inventor, no descubridor", "Objeción: no explicaría la eficacia de la matemática en la física", "Defensa: forma de vida y regularidad natural restringen las prácticas"],
    ["Wittgenstein reconoció graves errores en su primer libro", "Abandona la teoría figurativa y el atomismo lógico", "Continuidad: la filosofía es actividad que clarifica, no doctrina", "Lectores resolutos como Diamond y Conant ven un Tractatus terapéutico"],
    ["Acusación de quietismo de Marcuse y Gellner", "Comparar con juegos de lenguaje imaginarios muestra lo contingente", "Su método desarmó el dualismo cartesiano y el mentalismo", "No ofrece criterio para saber si un cambio conceptual mejora"]
  ],
  zambrano: [
    ["La razón poética amplía la razón, no la abandona", "La razón discursiva se volvió excluyente", "Escucha lo que todavía no tiene concepto", "La confesión como método, una palabra expuesta que puede contradecirse"],
    ["Para Ortega la vida es la realidad radical", "Ortega se quedó a mitad de camino según Zambrano", "La razón poética se deja transformar y escucha antes de comprender", "Diferencia de estilo: ensayo seguro frente a penumbra y confesión"],
    ["El exilio es una condición desde la que se piensa", "Salió de España en 1939 y vivió fuera cuarenta y cinco años", "El exiliado ve la fragilidad de toda pertenencia y la verdad de los vencidos", "Vínculo con el desplazamiento forzado como forma de conocer"],
    ["La democracia exige ser persona, no solo elegir gobernantes", "Contraste con la historia sacrificial y sus ídolos", "Cada uno tiene una intimidad que no se agota en su función", "Objeción: concepto más ético que político, sin diseño institucional"],
    ["Lo sagrado es una dimensión de la experiencia humana", "Negado, reaparece degradado como culto al Estado o al líder", "No es anticientífica: niega que la ciencia dé cuenta de todo", "Las ideologías del siglo XX como religiones sustitutas"]
  ],
  arendt: [
    ["Los crímenes no eran banales, su autor no era un monstruo", "Rechaza la teoría del engranaje y juzga a cada persona", "Eichmann merecía la horca según su epílogo", "Stangneth debilita el ejemplo pero no el concepto"],
    ["La distinción clasifica actividades, no personas", "La modernidad reduce todo a la lógica de la labor", "Crítica feminista y marxista: desprecia la labor de mujeres y esclavos", "Objeción: excluye de la política cuestiones sociales como la pobreza"],
    ["Ningún gobierno se sostiene solo con violencia", "Cuando el apoyo se retira, la violencia no alcanza", "Objeción de Weber: el monopolio de la violencia legítima define al Estado", "La palabra legítima ya supone reconocimiento de los otros"],
    ["El derecho de refugiados responde a lo que Arendt describió", "La protección depende de que algún Estado acepte cumplirla", "Arendt hablaba de pertenencia política, no solo protección física", "Su solución parece depender del Estado nacional en crisis"],
    ["En 1959 se opuso a imponer la integración escolar", "Distinguía esfera política de igualdad y esfera social", "Ellison le respondió desde la experiencia de los padres negros", "El caso muestra límites de separar lo social de lo político"]
  ],
  beauvoir: [
    ["Beauvoir no niega las diferencias biológicas", "Esas diferencias no explican el lugar social de las mujeres", "El cuerpo es una situación, no una cosa", "Butler: Beauvoir mantuvo la idea de un sexo natural"],
    ["La opresión tiene causas históricas y económicas", "La opresión ofrece ventajas y aceptarlas es mala fe", "Diferencia clave entre culpa y responsabilidad", "Crítica: a veces la dependencia es la única forma de sobrevivir"],
    ["Beauvoir insiste en que la libertad está situada", "Sartre describía una libertad absoluta incluso para el prisionero", "Su ética exige crear condiciones para que otros sean libres", "Varias ideas atribuidas a Sartre aparecen antes en sus escritos"],
    ["Suspensión de 1943, testimonio de Lamblin y petición de 1977", "Su propia ética condena reducir al otro a objeto", "Su teoría de la situación permite ver esas asimetrías", "No hace falta elegir entre descartar la obra y ocultar los hechos"],
    ["Escribió desde la posición de una mujer blanca, europea y burguesa", "Feminismo negro y decolonial señalan raza, clase y colonización", "Bell hooks: trabajar fuera de casa fue necesidad, no conquista", "El libro como punto de partida, no última palabra"]
  ],
  confucio: [
    ["Las Analectas plantean obligaciones recíprocas entre superior e inferior", "El gobernante que no gobierna pierde el nombre; Mencio admite derrocar al tirano", "La asimetría persiste: nada obliga al superior y las mujeres quedan excluidas", "La versión imperial de los tres vínculos endureció la jerarquía"],
    ["El hombre de la aldea que agrada a todos: ladrón de la virtud", "Criterios internos: contenido sobre forma, rectitud (yì) y armonía sin uniformidad", "Desde afuera el hipócrita competente y el virtuoso actúan igual", "La costumbre sin centro se rompe cuando cuesta algo; la virtud no"],
    ["Argumento del síntoma: predicar la benevolencia prueba que ya falta", "Cascada de degradación del Daodejing: del Tao perdido hasta el rito", "Respuesta confuciana: el rito surge de una pérdida, pero es el camino de vuelta", "También la espontaneidad es aprendida; no hay naturaleza pura frente a cultura"],
    ["Caso del súbdito que denunció a su padre por robar una oveja", "Sin lealtades particulares no se forma la capacidad moral", "Riesgo de nepotismo y corrupción, eje del debate Liu Qingping y Guo Qiyong", "Lo decisivo es qué debe ceder cuando vínculo y justicia se excluyen"],
    ["No es posible separarlos del todo", "Distorsión textual: Analectas compiladas en estratos y en versiones distintas", "Distorsión política: ortodoxia Han de Dong Zhongshu y examen imperial", "Leer con las capas a la vista, sin idealizar ni juzgar por los usos"]
  ],
  laozi: [
    ["Pasajes que piden mantener al pueblo simple alimentan la objeción", "Huang-Lao y Han Fei: dos usos políticos opuestos del wú wéi", "Wú wéi significa acción no forzada, no inacción", "La doctrina habla al que manda, no enseña al oprimido qué hacer"],
    ["El texto orienta hacia una experiencia, como el dedo que señala la luna", "La forma paradójica y poética es parte de la tesis", "En Guodian el capítulo 19 rechaza el artificio, no el conocimiento", "La dificultad persiste: el problema es deliberado, no un descuido"],
    ["Ambos aceptan que el rito surge de una carencia", "Para Confucio solo la práctica permite volver; el carácter se forma practicando", "Para Laozi el rito perpetúa la carencia al volverla obligación externa", "Distinguir dominios: oficios frente a sinceridad afectiva; convivencia histórica de ambos"],
    ["Tratarla como hipótesis que se examina con dureza", "Casos favorables: agua y roca, estructuras flexibles, artes marciales internas", "Sesgo de selección y problema de escala temporal", "Versión modesta: la persistencia flexible rinde más a largo plazo"],
    ["Para evaluar los argumentos la autoría importa poco o nada", "Las contradicciones no se explican por evolución de un autor", "Hay que datar las capas, como muestra Guodian", "El texto es un caudal y no un edificio, como Homero o las Analectas"]
  ],
  zhuangzi: [
    ["Admitir que el relativismo aplicado a sí mismo parece autorrefutarse", "Zhuangzi muestra, no afirma: escepticismo terapéutico como la nasa abandonada", "Lo negado es un criterio neutral para arbitrar entre criterios", "El saber del cocinero es no proposicional y escapa a la paradoja"],
    ["Distinguir entre dudar y titubear", "El cocinero Ding y el nadador actúan sin deliberar", "La duda apunta a criterios de discusión, no a la percepción entrenada", "En urgencias salva un protocolo y las decisiones vitales no se repiten"],
    ["Destinatario distinto: Laozi al gobernante, Zhuangzi al individuo y su oficio", "Forma distinta: aforismo que afirma frente a anécdota que muestra", "Zhuangzi radicaliza la duda y desconfía incluso del fondo del Dao", "La etiqueta taoísmo (daojia) es una construcción retrospectiva Han"],
    ["Juego de palabras: an significa cómo y también dónde", "Hui Shi presupone que el otro puede saber algo", "Reducción al absurdo del criterio escéptico del adversario", "No prueba que los peces sean felices; trata la frontera entre observar y suponer"],
    ["Los Capítulos Interiores 1 a 7 se atribuyen a un solo autor", "Exteriores y Misceláneos reúnen corrientes posteriores distintas", "Escenas famosas como la de los peces están en los Exteriores", "No resolver contradicciones por evolución del autor; leer como tradición"]
  ],
  nagarjuna: [
    ["Nagarjuna no se exceptúa a sí mismo de la vacuidad", "La objeción supone que refutar exige naturaleza propia: petición de principio", "Declara no tener tesis propia y usa la reducción al absurdo", "Imagen del ser mágico que detiene a otro ser mágico"],
    ["Capítulo 24: la vacuidad no destruye las cuatro nobles verdades", "Con naturaleza propia nada podría cambiar y el sufrimiento sería incesable", "Doctrina de las dos verdades: la ética opera en el nivel convencional", "La Guirnalda preciosa aconseja hospitales y liberar presos"],
    ["Vacío significa no autosuficiencia, ausencia de svabhava, no inexistencia", "Vacuidad y originación dependiente son lo mismo", "El nihilismo es uno de los dos extremos que su camino evita", "Residuo real: una obra hecha solo de negaciones se parece al nihilismo"],
    ["Ambos ven los problemas filosóficos como mal uso del lenguaje", "Imagen compartida: escalera que se tira y balsa que se deja", "Nagarjuna busca la liberación del sufrimiento y necesita las dos verdades", "Contraste con Sexto Empírico: Nagarjuna sí afirma saber algo"],
    ["La vacuidad no es entidad ni propiedad última", "Imagen del purgante que se expulsa con lo purgado", "No hay regreso infinito: es una operación que se agota", "Persisten objeciones: dilema convencional o último y cambio a justificar una práctica"]
  ],
  shankara: [
    ["Parecidos reales: dos verdades, método negativo, herencia de Gaudapada", "Nagarjuna niega todo sustrato; Shankara afirma una conciencia autoluminosa", "Refuta extensamente al budismo en el comentario a los Brahma Sutras", "Ninguno refuta al otro sin apelar a su propia premisa"],
    ["En el nivel vyavaharika el karma y las obligaciones son reales", "Maya no significa que nada importe", "La acción queda subordinada y el Advaita convivió con las castas", "Vivekananda derivó servicio social del mismo principio de identidad"],
    ["Dilema: avidya en Brahman, en el jiva o en un tercero", "Shankara la declara sin comienzo (anadi): la pregunta está mal planteada", "El Advaita posterior la llama indefinible (anirvacaniya)", "Problema análogo al origen del mal en otras metafísicas monistas"],
    ["Devoción y acción purifican y preparan, pero no liberan", "Moksha no es un efecto producido; lo producido perece", "Ishvara queda como saguna Brahman, verdad de rango inferior", "Ramanuja responde con la no dualidad cualificada y la bhakti como camino"],
    ["En el nivel vyavaharika el jiva es plenamente agente y responsable", "Invocar la irrealidad del yo para eximirse es contradictorio", "Queda poco claro qué obliga al liberado (jivanmukta)", "Una ética de la identidad deja poco lugar a la alteridad y al deber"]
  ],
  dogen: [
    ["Una iluminación producida por la práctica podría perderse", "Preguntar qué se gana es el hábito que zazen deshace", "Los budas ya despiertos siguieron sentándose", "Persiste la objeción: redescribe la motivación sin eliminarla"],
    ["La instrucción de no buscar nada tiene forma de búsqueda", "La paradoja se disuelve en el ejercicio, no en la descripción", "Bodaishin: orientarse sin perseguir un objeto futuro", "La paradoja es productiva, pero solo se verifica desde adentro"],
    ["Dōgen no niega la sucesión: la leña se vuelve ceniza", "Afirma la causalidad moral rigurosa con el koan del zorro salvaje", "Rechaza la subordinación de los momentos, no su encadenamiento", "Falta una teoría de la conexión y la memoria queda ambigua"],
    ["Los tres desarman las sustancias fijas; Dōgen hereda el Madhyamaka", "Nagarjuna argumenta y niega; Dōgen vuelve a lo concreto", "Zhuangzi quita las reglas; Dōgen usa la disciplina monástica minuciosa", "El uji afirma la identidad de ser y tiempo, un paso metafísico"],
    ["La transmisión fuera de las escrituras no es rechazo del lenguaje", "Las palabras expresan el despertar; el universo entero es escritura", "Fuerza la lengua para que el lector tropiece, no para informar", "Tensión entre universalidad de sentarse y la dificultad del Shōbōgenzō"]
  ],
  nishida: [
    ["Objeción del mito de lo dado de Sellars", "Dilema: sin estructura no funda juicios; con estructura ya no es pura", "Nishida propone una unidad activa con forma no conceptual", "Nishida abandonó luego el vocabulario psicológico de su primer libro"],
    ["Un principio indefinible parece una explicación vacía", "Su rendimiento se juzga caso por caso", "Pensar la conciencia como campo disuelve enigmas cartesianos", "El paso del campo visual a la nada absoluta se hace por analogía"],
    ["Contradicción en sentido estricto llevaría a la explosión lógica", "Lectura sólida: oposición entre polos que se determinan mutuamente", "Si es coherente es menos original; si es original, es incoherente", "Comparación con la Aufhebung de Hegel y con lógicas paraconsistentes"],
    ["Hechos: documento de 1943 para el Ejército y crítica al fanatismo", "Tres posiciones: nacionalismo estructural, separación de la obra o lectura de puntos precisos", "Paralelo con Heidegger y sus diferencias biográficas", "La diferencia personal no cancela la pregunta sobre los conceptos"],
    ["Parentesco buscado: ambos rechazan sustancias con naturaleza propia", "La śūnyatā es negativa y se aplica a sí misma", "La nada absoluta cumple un papel positivo como lugar último", "Un madhyamika vería en ella vacuidad convertida en fundamento"]
  ],
  wangyangming: [
    ["La tesis parece infalsable: ninguna conducta cuenta como contraejemplo", "Los ejemplos del hedor y el dolor son percepciones, no juicios morales", "Wang la presenta como remedio y se juzga por su rendimiento práctico", "La akrasia aristotélica explica lo mismo sin volverse infalsable"],
    ["La escuela de Taizhou mostró el riesgo de espontaneísmo", "El liángzhī suele ordenar lo incómodo, no lo conveniente", "Examinar la intención naciente y pulirse en los asuntos", "Un criterio externo tampoco garantiza nada; solo traslada el problema"],
    ["Ambos rechazan una autoridad moral externa", "Kant: ley universal y prueba de universalización; desconfía del sentimiento", "Wang: respuesta afectiva inmediata, situada y particular", "Kant gana un criterio público; Wang gana sensibilidad y motivación"],
    ["Zhu Xi era la base oficial de los exámenes imperiales desde 1313", "Discutir géwù era discutir quién accedía al poder", "Las Conclusiones definitivas se entienden como estrategia de legitimación", "Mostrar la función política no refuta la doctrina: falacia genética"],
    ["Sofocó la rebelión del príncipe de Ning en poco más de un mes", "Su doctrina designa la acción como terreno de prueba", "La eficacia no es criterio de verdad moral y un caso no prueba nada", "Sus campañas incluyeron represión sangrienta"]
  ],
  sorjuana: [
    ["Llamarla feminista sin matices es anacrónico: no pedía derechos políticos", "Sostiene que la capacidad de entender no depende del sexo", "Critica que la costumbre, y no la razón, limite a las mujeres", "Es una precursora que argumenta dentro de los marcos teológicos de su tiempo"],
    ["El poema narra dos intentos fallidos del alma: intuitivo y metódico", "El alma no logra comprender del todo ni una sola cosa", "No renuncia al conocimiento: celebra la audacia de intentarlo, como Faetón", "Termina con el despertar y la vuelta a lo cotidiano, sin triunfo"],
    ["Hechos: renovó votos, firmó penitencias y quizá se deshizo de su biblioteca", "Octavio Paz la lee como derrota por presión del arzobispo Aguiar y Seijas", "Otros estudiosos ven una conversión sincera en un contexto de crisis", "La cuestión sigue abierta y ambas lecturas pueden ser parcialmente ciertas"],
    ["La teología era la autoridad suprema y la Inquisición estaba activa", "No es solo estrategia: era creyente y el argumento es coherente con su fe", "Si Dios dio entendimiento a las mujeres, prohibir su uso contradice el orden divino", "Argumenta dentro de un marco disputando la interpretación de sus autoridades"],
    ["Figura fundadora del pensamiento americano antes de la independencia", "Muestra que en la Nueva España se pensaba de manera propia, no solo se importaba", "Para Zea encarna una conciencia criolla que se distingue de España", "Su obra desmiente que en América no hubo filosofía"]
  ],
  peirce: [
    ["La máxima tiene efectos: prescribe una conducta intelectual distinta", "Es una regla de método, evaluada por su rendimiento y no por su verdad", "Defenderla por rendimiento parece acercarla al criterio de éxito de James", "La salida es su realismo: leyes reales hacen verdaderos los condicionales"],
    ["Objeción contrafáctica: puede no existir nunca una comunidad final", "Objeción de orden: la convergencia sería síntoma de la verdad, no su definición", "La verdad es un condicional sobre la indagación prolongada, no una predicción histórica", "Lo que fuerza la convergencia es la resistencia de lo real"],
    ["Separar al Peirce de 1877 de su metafísica es cómodo y probablemente injusto", "El tiquismo resulta de aplicar el falibilismo a la física: leyes estadísticas", "El sinequismo es necesario para su realismo sobre los generales", "Sus especulaciones cosmológicas exceden sus propios estándares de contrastación"],
    ["Para Peirce el sujeto es una comunidad ilimitada; para James, una persona concreta", "Peirce ofrece un criterio de significado; James, una teoría de la verdad", "La voluntad de creer se limita a opciones vivas, forzosas y trascendentales", "James orienta decisiones presentes; la verdad final de Peirce no lo hace"],
    ["Su forma lógica es afirmar el consecuente y no pretende validez", "Solo autoriza a sospechar y proponer hipótesis candidatas a prueba", "La economía de la investigación ordena candidatas por costo, alcance y simplicidad", "Señala un momento real del razonamiento que ni deducción ni inducción describen"]
  ],
  james: [
    ["Clifford gana donde hay evidencia disponible y la creencia afecta a terceros", "La regla de Clifford aplicada literalmente es autodestructiva", "El escepticismo no es neutral: prioriza evitar el error sobre alcanzar la verdad", "Queda sin respuesta quién certifica que una cuestión es indecidible"],
    ["James no sostiene que algo sea verdadero porque conviene a alguien", "Verdadera es la idea que resiste la verificación en la experiencia", "Conveniente significa a la larga y coherente con creencias ya verificadas", "Persiste el problema de creencias falsas útiles y verdades que no sirven"],
    ["Peirce define la verdad por la convergencia de una comunidad investigadora", "La definición de Peirce carece de utilidad práctica para decidir hoy", "James arriesga acercar la verdad a la satisfacción del individuo", "El pragmatismo es una familia con teorías de la verdad incompatibles"],
    ["Cannon la atacó con objeciones y la creyó refutada durante décadas", "Schachter y Singer: la activación requiere interpretación cognitiva del contexto", "Damasio y la interocepción devolvieron al cuerpo un papel central", "James acertó en que el cuerpo es constitutivo, no en patrones viscerales específicos"],
    ["Ofrece casos revisables, como el sentimiento de pero o de si", "El empirismo clásico recortó la experiencia por un supuesto atomista", "Riesgo: confundir experimentar una relación con juzgarla rápido", "La Gestalt y Michotte apoyaron parcialmente la tesis como hipótesis contrastable"]
  ],
  dewey: [
    ["Dewey no propuso que la actividad reemplace al contenido", "En Experiencia y educación criticó a las escuelas progresivas del dejar hacer", "La evidencia cognitiva favorece la instrucción explícita para principiantes", "Un conocimiento nunca usado para resolver nada no es un saber"],
    ["Niebuhr: los grupos tienen un egoísmo colectivo que la educación no disuelve", "La injusticia es un problema de poder, no de ignorancia", "Dewey responde que la alternativa al método inteligente es la fuerza", "Niebuhr gana la descripción; Dewey conserva la pregunta por qué hacer"],
    ["Dewey sustituye la verdad por la aserción garantizada", "La aserción garantizada no es subjetiva: depende de resolver la situación problemática", "Útil significa eficaz para resolver el problema, no cómodo para alguien", "Objeción: verdadero no parece relativizarse a una indagación concreta"],
    ["Dewey anticipó la objeción del ladrón que crece como ladrón", "Crecer es aumentar la capacidad de seguir creciendo", "Un fin externo fijado de antemano detiene la revisión", "Peters: el criterio depende de una concepción sustantiva de la buena vida"],
    ["Ambos rechazan que saber el bien baste y forman el carácter por la práctica", "Lo confuciano mira al pasado; Dewey trata el pasado como material a reconstruir", "El li busca armonía; para Dewey el conflicto impulsa la indagación", "El hábito podría ser el terreno común entre ambos"]
  ],
  vasconcelos: [
    ["Escribe contra la tesis de la degeneración por mestizaje y el blanqueamiento", "El libro conserva vocabulario eugenésico y la raza como sujeto histórico", "Lectura más honesta: el texto hace ambas cosas a la vez", "La ideología del mestizaje sirvió para negar un racismo persistente"],
    ["El contraste es mayormente un estereotipo refutable con los textos", "Dewey en El arte como experiencia integra lo estético en la experiencia ordinaria", "Un espíritu latino común es una generalización como las que denuncia", "Queda legítima la pregunta de para qué se quiere ser eficiente"],
    ["Gestión y obra teórica son dos preguntas distintas que no deben mezclarse", "Creó la SEP, bibliotecas, alfabetización, misiones culturales y apoyó el muralismo", "El modelo era misionero, vertical y de canon europeo", "La integración dejó a las culturas indígenas como pasado, no como presente"],
    ["Valoró lo indígena cuando la opinión ilustrada lo veía como lastre", "Su pensamiento subordina lo indígena a una síntesis mestiza por diseño", "Los movimientos indígenas actuales reclaman reconocimiento como pueblos, no integración", "Celebró lo indígena mientras deseaba su disolución en el conjunto"],
    ["Tras 1929 giró hacia un hispanismo católico y conservador", "En 1940 dirigió Timón, financiada por Alemania y favorable al nazismo", "Su idea de raza con misión ofrece poca resistencia al nacionalismo racial", "Posición mayoritaria: señalar dónde el marco resistió y dónde no"]
  ],
  zea: [
    ["Declarar imaginario el tribunal no cambia la asimetría institucional", "La maniobra parece terapéutica más que estructural", "Ninguna filosofía surge fuera de una circunstancia: la universalidad europea es falsa", "La legitimidad se obtiene produciendo obra, no discutiéndola"],
    ["Zea filosofa desde un nosotros americano; Dussel desde la víctima", "Zea ve a América Latina dentro de Occidente; Dussel propone exterioridad", "La moderación de Zea evita el esencialismo y la idealización de la víctima", "Ambos rechazan el universalismo abstracto y parten de la situación histórica"],
    ["Versión débil: origen situado, pero argumentos evaluables por cualquiera", "Versión fuerte: la circunstancia fija la validez y cae en el relativismo", "Reconocer la propia circunstancia es condición del diálogo entre iguales", "Paralelo con la objetividad fuerte de Harding y Haraway"],
    ["Conserva de Hegel la historia como proceso de la conciencia por contradicciones", "Invierte quién ocupa el lugar de la lucidez: el margen, no Europa", "La verdad de un proceso se ve donde se pagan sus costos", "Situar la verdad en el margen elimina la jerarquía del sistema hegeliano"],
    ["Dirigió instituciones y colecciones y recibió honores, a diferencia de Dussel", "Lectura sospechosa: su culturalismo era compatible con casi cualquier gobierno", "Institucionalizar permite que una tradición sobreviva a su fundador", "Quedó fuera la pregunta por quiénes dentro del nosotros no tienen voz"]
  ],
  dussel: [
    ["La vida humana digna no es mera supervivencia biológica", "El principio formal deja el contenido a la comunidad de afectados", "Si lo formal decide todo, depende más de Apel y Habermas de lo admitido", "La negatividad se constata: hambre y muerte prematura son hechos verificables"],
    ["El concepto se define sobre todo por negación", "Sus valores concretos ya los defiende la tradición moderna crítica", "Dussel: la diferencia está en quién formula los valores y desde qué tradición", "Es fértil como programa, pero más horizonte que categoría filosófica"],
    ["Cerutti Guldberg criticó en 1983 el populismo filosófico del pueblo en singular", "Víctimas del mismo sistema pueden tener intereses incompatibles", "El criterio es la negatividad concreta, no la identidad del sujeto", "En conflictos entre víctimas cede el turno a la ética del discurso"],
    ["La Aufhebung hegeliana también conserva lo negado", "En Hegel no hay afuera; en la analéctica irrumpe una palabra no deducible", "Comprender al Otro ya es reducirlo a las propias categorías", "Vale como disciplina de método, no como diferencia lógica tajante"],
    ["El primer Dussel escribe desde la periferia latinoamericana y la dependencia", "El Dussel tardío propone un diálogo entre grandes tradiciones civilizatorias", "América Latina es una periferia interior a Occidente, no un exterior", "Coherencia: la salida es una pluralidad de centros, no otro centro"]
  ],
  zuleta: [
    ["Zuleta no elogia el sufrimiento ni pide aceptar la injusticia", "Critica el deseo de un mundo sin dificultades que busca culpables", "La dificultad de convivir con otros distintos es condición de la libertad", "Combatir la injusticia exige conflicto, negociación y no demonizar al adversario"],
    ["La frase no celebra la guerra: explica por qué es difícil terminarla", "La guerra une al grupo y simplifica el mundo en amigos y enemigos", "Suprime dudas y ambivalencias y da a cada persona un propósito", "Hace falta una sociedad capaz de vivir el conflicto sin enemigo absoluto"],
    ["Idealizar al propio grupo exige poner todo lo malo en un enemigo", "El pensamiento binario justifica la eliminación del otro", "Aplica a liberales y conservadores, guerrillas, paramilitares y polarización actual", "Criticó también a la izquierda; propone reconocer la ambivalencia"],
    ["La escuela enseña respuestas a preguntas que los estudiantes no se hicieron", "Mata la curiosidad y enseña a obedecer en lugar de pensar", "Propone partir de las preguntas, aceptar el conflicto y leer como trabajo", "Objeción: sistemas masivos y estandarizados dificultan ese modelo"],
    ["Se formó como autodidacta y pensó sobre todo en conversación", "Muchos textos son transcripciones editadas por otros, varias póstumas", "Su estilo oral es claro, directo y accesible", "Conviene verificar citas en recopilaciones reconocidas"]
  ],
  rorty: [
    ["Sin fundamento no equivale a arbitrario", "Su compromiso proviene de una historia específica: tradición liberal, Mill, Shklar", "La exigencia de fundamentación es un residuo teológico", "Se pierde la posibilidad de decir que otra comunidad entera se equivoca"],
    ["Nadie puede salir de su propia piel: toda justificación tiene audiencia concreta", "Su etnocentrismo sería el de una cultura que valora escuchar a extraños", "Dussel: ampliar el nosotros deja la iniciativa en quien amplía", "Desacuerdo de fondo: si hay hechos que obliguen moralmente por sí mismos"],
    ["Autocreación irónica en lo privado, solidaridad en lo público", "Crítica feminista: lo personal es político y la línea es una decisión política", "La autocreación irónica requiere tiempo y seguridad material: sesgo de clase", "Si la ironía debe ocultarse, se vuelve un secreto de élite"],
    ["El acierto muestra olfato sociológico, no valida su antifundacionalismo", "Tomarlo como validación supone la correspondencia que Rorty rechaza", "Otros lo anticiparon desde marcos incompatibles con el suyo", "Separar raza y clase es discutible, como señala Cornel West"],
    ["Ambos pragmatistas rechazan la verdad como copia de la realidad", "Peirce conserva una norma más allá de cualquier consenso actual", "Rorty ve el final ideal de la indagación como sustituto laico de Dios", "Rorty pierde la diferencia entre estar justificado y tener razón"]
  ],
  west: [
    ["Ambas tradiciones parten del sufrimiento y leen la historia como conflicto", "El marxismo aporta análisis; el cristianismo, antropología y motivación", "La crítica marxista ve la religión como consuelo que desactiva", "West rechaza unificarlas en un sistema por antifundacionalismo pragmatista"],
    ["Adolph Reed Jr.: desplaza el foco de las estructuras al alma de los oprimidos", "West presenta el nihilismo como consecuencia, no como causa", "Propone conversión además de políticas públicas, no en su lugar", "El daño anímico adquiere inercia propia, como una herida"],
    ["Sin criterio último, la denuncia profética parece un vocabulario entre otros", "Distingue fundamento universal de compromiso asumido y situado", "Objeción: un compromiso nunca revisado funciona igual que un fundamento", "El sufrimiento por opresión sería constatable, no preferencia cultural"],
    ["Exigir solo obra arbitrada excluiría a Sócrates y a la tradición afroamericana", "Alcance no equivale a calidad filosófica", "Su obra escrita, como Prophesy Deliverance!, se sostiene por sí sola", "Dyson señaló en 2015 que su obra escrita se detuvo"],
    ["Hechos: conflictos en Harvard, ruptura con Obama y candidatura de 2024", "Una posición evalúa solo los argumentos, sin biografía", "Su filosofía une pensamiento y compromiso, lo que autoriza juzgar su conducta", "Sus tesis escritas son discutibles por separado de su conducta posterior"]
  ],
  falacias: [
    ["Confundirlo es la falacia de la falacia (argumentum ad logicam)", "Una falacia solo muestra que esa razón no sostiene la tesis", "Una conclusión puede ser verdadera por razones que no se dieron", "Dejar una afirmación sin respaldo no equivale a refutarla"],
    ["Casi todo lo que se sabe depende del testimonio ajeno", "Condiciones: especialista en ese campo, consenso y sin interés decisivo", "Caso frecuente: el experto genuino hablando fuera de su terreno", "Indicadores accesibles: financiación, revisión por pares, quién disiente"],
    ["El catálogo funciona como lista de verificación útil", "Detectar falacias mejora más la crítica de lo ajeno que de lo propio", "Etiquetar un ad hominem suele cortar la conversación", "Aplicar el catálogo primero a textos propios y reconstruir con caridad"],
    ["Una heurística es un atajo que suele acertar en su entorno", "La diferencia está en el contexto y la exigencia, no en la estructura", "Se vuelve falacia al presentarse como concluyente cuando se podía averiguar", "La pragmadialéctica define la falacia como violación de reglas de discusión"],
    ["Ante razones verificables la biografía del autor es irrelevante", "Ante un testimonio corresponde evaluar la credibilidad de quien lo da", "Si se discute un cargo o modelo, la conducta es el tema", "El tu quoque no refuta, pero revela inconsistencia de quien acusa"],
    ["Hamblin mostró un catálogo copiado sin teoría unificadora", "Parecer válido es una propiedad psicológica y relativa", "Hoy las falacias se ven como maniobras evaluables por su función", "La lista sirve como vocabulario compartido, no como algoritmo"]
  ],
};
