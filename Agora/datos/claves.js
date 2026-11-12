/* Ágora · ideas clave de las preguntas escritas (pestaña Preguntas).
   CLAVES.<id>[i] = las 3-4 ideas que una buena respuesta a cuestionario[i] debería contener,
   sacadas de la respuesta del modelo. Se usan como lista para marcar después de verla
   (y al revisar la respuesta de un compañero). Mismo orden que el cuestionario: al agregar
   una pregunta, agregar su lista al final. verificar.js controla que no falte ninguna. */
const CLAVES = {
  tales: [
    ["Se le reconoce la forma de la respuesta, no su acierto", "Un principio único y natural, con razones que otros pueden discutir y corregir", "El título de primer filósofo es retrospectivo: se lo da Aristóteles"],
    ["Un elemento ilimitado habría destruido a su contrario", "El principio de los contrarios tiene que ser distinto de todos: el ápeiron", "Costo: no explica cómo de lo indeterminado sale lo determinado"],
    ["Cambia el estatuto de la respuesta: impersonal, general y expuesta a la crítica", "Hay continuidad de contenidos con el mito, como el agua de Océano", "Lo divino no desaparece: todo está lleno de dioses"],
    ["Los contrarios se invaden y pagan la injusticia retrocediendo", "La naturaleza obedece a un orden necesario, como una ley que nadie decide", "Ese orden se piensa con el vocabulario de la justicia de la ciudad"],
    ["La tesis del agua es un informe de Aristóteles, no un fragmento de Tales", "Aristóteles lee a los milesios desde su teoría de las causas", "Hay que distinguir lo probable, la conjetura y la leyenda"]
  ],
  heraclito: [
    ["«Todo fluye» no está en los fragmentos: viene de la lectura de Platón", "En DK 12 el río es el mismo porque el agua cambia: la identidad se sostiene en el cambio"],
    ["Los ejemplos indican un respecto: para quién, hacia dónde, cuándo", "La unidad de los contrarios es conexión, no identidad lógica", "Heráclito escribe con paradojas y no distingue respectos"],
    ["Lectura cosmológica: la tensión entre contrarios sostiene el orden, dentro de una medida", "Lectura literal: habla de guerra real, de esclavos y libres, y no se puede limpiar"],
    ["Común quiere decir disponible para todos, no opinión de la mayoría", "Objeción: si casi nadie lo ve, ¿quién certifica qué es lo común?"],
    ["El fuego es un proceso, no una sustancia estable", "Es un cambio medido: se intercambia por todo como el oro por las mercancías"]
  ],
  parmenides: [
    ["Pensar y decir son siempre pensar y decir algo que es: el camino del «no es» está vacío", "Punto débil: «no es» mezcla no existir, no ser algo y no ser verdad"],
    ["La diosa la expone para que ningún parecer de los mortales aventaje al joven", "Es la mejor versión de lo que aparece: coherente, pero montada sobre un primer error"],
    ["Todas las propiedades de lo que es se deducen de una sola premisa, sin observación", "Un argumento válido obliga: hay que mostrar dónde falla, no solo rechazar la conclusión"],
    ["Son reducciones al absurdo que defienden a Parménides devolviendo la burla", "La suma de una serie infinita calcula el resultado, pero no cierra para todos la pregunta"],
    ["Tuvieron que abandonar el supuesto de que «ser» tiene un solo sentido", "Platón: no ser como diferencia; Aristóteles: el cambio va de la privación a la forma en un sujeto que permanece"]
  ],
  socrates: [
    ["Las fuentes no coinciden, y Platón le atribuye con el tiempo doctrinas propias", "Base: diálogos tempranos más el dato de Aristóteles (definiciones universales no separadas)", "Es una reconstrucción: lo más seguro es lo que comparten todas las fuentes"],
    ["Niega un saber experto sobre la virtud, capaz de definirla y enseñarla", "Tiene convicciones que resistieron todos los exámenes", "Su ignorancia no es escepticismo: lo empuja a seguir buscando"],
    ["Protágoras: ser vencido por el placer es un error de medida", "Costo: reduce las pasiones a errores de cálculo; Platón dividirá el alma en partes"],
    ["Se niega a cometer injusticias que le ordenen, pero no evade el castigo", "Las Leyes piden persuadir u obedecer, y Sócrates intentó persuadir en el juicio"],
    ["El daño se mide por el alma, no por los bienes exteriores", "Quien comete injusticia se vuelve peor; al hombre bueno no se lo daña de verdad", "Obliga a preguntar qué entendemos por daño"]
  ],
  platon: [
    ["Lo sensible cambia y admite contrarios: de él solo hay opinión", "El saber necesita un objeto estable, como el de la matemática", "Las Formas explican por qué muchas cosas distintas reciben el mismo nombre"],
    ["Saber es poder dar razón: la opinión verdadera se ata con un razonamiento sobre la causa", "Sin fundamento, la opinión verdadera se pierde ante quien la contradice", "El jurado persuadido acierta sin saber"],
    ["No hay un cuarto juez: decide la parte que manda", "Debe gobernar la razón, la única que mira el bien del conjunto", "La justicia es un orden interior, no ante todo una conducta"],
    ["La legitimidad viene del saber del Bien, con educación larga y sin propiedad", "Gobierna mejor quien menos desea gobernar", "Objeción: no hay mecanismos para controlar o remover a los gobernantes"],
    ["Amor y filosofía nacen de una falta: se desea lo que no se tiene", "El amor quiere poseer el bien para siempre", "El deseo puede ascender por grados hasta la Belleza misma"]
  ],
  aristoteles: [
    ["La virtud es una héxis que se forma repitiendo actos, no un saber", "El placer o el dolor que acompaña al acto distingue al virtuoso del que solo se domina", "Por eso la educación de los hábitos desde joven es decisiva"],
    ["El medio es lo que corresponde en cada caso, relativo a nosotros, y lo determina la phrónesis", "No siempre está a igual distancia de los extremos", "Hay acciones que no admiten medio: son malas sin más"],
    ["Las Formas separadas duplican las cosas y no explican su ser ni su cambio", "Un bien separado no sirve para la acción", "La forma está en las cosas, unida a la materia: lo universal existe en los singulares"],
    ["Lo que algo es en potencia es una capacidad real, no la nada", "El cambio es el paso de la potencia al acto a partir de algo que ya existe", "El acto es anterior: solo lo que ya está en acto hace pasar a otro al acto"],
    ["La naturaleza obra por un fin sin deliberar: lo que ocurre siempre o casi siempre no es azar", "La causa final es la forma misma del ser vivo, no un diseñador", "La ciencia moderna la expulsó, pero el lenguaje de funciones en biología mantiene el debate"]
  ],
  epicuro: [
    ["El placer más alto es un estado de calma: no sufrir ni estar turbado", "El placer tiene un límite: suprimido el dolor, solo varía", "La sencillez sale de calcular bien el placer, no de sacrificarlo"],
    ["Todo bien y todo mal están en la sensación, y la muerte es privación de sensación", "Objeción: un daño no necesita ser sentido; la muerte priva de bienes futuros"],
    ["La física se estudia para quitar el miedo, no por curiosidad", "Causas naturales en lugar de castigos divinos; el alma se dispersa con la muerte", "Basta cualquier explicación natural: lo que importa es excluir a los dioses"],
    ["Lo que más ayuda es la confianza en la ayuda, no el favor concreto", "Un origen útil no impide que la amistad se vuelva deseable por sí misma"],
    ["La injusticia es mala por el miedo a ser descubierto, que destruye la tranquilidad", "Esa seguridad de no ser descubierto nunca existe", "Costo: la justicia queda atada al miedo y a la conveniencia"]
  ],
  estoicos: [
    ["Ningún estoico romano pidió abolir la esclavitud: la libertad quedó como asunto interior", "La distinción pide actuar en lo que depende de uno y aceptar solo el resultado", "Da fuerza para resistir, pero poco para transformar instituciones"],
    ["Salud y riqueza son indiferentes preferidos: tienen valor y es razonable buscarlos", "La virtud consiste en elegir bien entre ellos sin hacer depender la felicidad del resultado", "Lo que está en juego: si la vida buena depende en parte de la suerte"],
    ["Las pasiones son juicios equivocados; la apátheia no es insensibilidad", "Hay primeros movimientos involuntarios y emociones buenas", "Objeción: algunos juicios emocionales, como el duelo, son verdaderos"],
    ["El cilindro de Crisipo: el empujón lo pone en marcha, pero rueda por su propia forma", "El asentimiento sale del carácter: somos una de las causas, y la decisiva", "Crítica: sería una libertad muy pobre"],
    ["Entre lo que pasa y lo que sentimos media un juicio", "Si el juicio es nuestro, se puede revisar: ahí está la libertad", "No es subjetivismo: la perturbación depende de un asentimiento que podemos negar"]
  ],
  agustin: [
    ["El mal es real, pero como falta en algo bueno, no como sustancia", "La tesis elimina el segundo principio y devuelve el mal moral a la voluntad", "La objeción que queda: el dolor no se vive como una ausencia"],
    ["La forma es parecida: el engaño supone a alguien que existe", "La función es refutar al escéptico y subir hacia Dios, no fundar el saber desde cero"],
    ["Libre albedrío (elegir, nunca se pierde) frente a libertad (poder querer el bien, herida)", "La gracia sana la voluntad, no la reemplaza", "Queda la objeción de la injusticia si la gracia se da sin mérito"],
    ["Las ciudades son dos amores, entremezclados hasta el juicio final", "Ningún orden político es sagrado, aunque la paz terrena sea un bien", "La obra se leyó después para subordinar el poder político a la Iglesia"],
    ["Tres presentes en el alma: memoria, atención y espera", "Explica el tiempo vivido; queda abierto cómo se relaciona con el tiempo del mundo"]
  ],
  anselmo: [
    ["No es un decreto: hay un único concepto que no puede existir solo en el pensamiento sin contradecirse", "Todo depende de la premisa de que existir en la realidad es mayor"],
    ["La parodia es legítima solo si la forma del argumento es la misma", "Anselmo: su fórmula no es lo mejor de una clase, y cualquier otra cosa puede pensarse como no existente"],
    ["La fe es el punto de partida, no el techo: pide entender lo que cree", "Busca razones necesarias, que no citan la Escritura y valen para el que no cree"],
    ["La satisfacción es la alternativa al castigo, no un castigo sustituto", "El honor de Dios nombra el orden que el pecado altera, no su orgullo; el peso del marco feudal sigue en discusión"],
    ["Si la libertad fuera poder pecar, Dios no sería libre: el poder de pecar la disminuye", "Libertad: poder de conservar la rectitud por sí misma; objeción: deja afuera la elección propia y supone lo recto"]
  ],
  hildegarda: [
    ["Depende del sentido: no argumenta con razones que cualquiera deba aceptar", "Sí en el sentido antiguo: busca una sabiduría sobre el todo, pensada en imágenes", "La etiqueta es nuestra: ella se veía como profetisa"],
    ["El origen de una idea no decide su valor: sería la falacia genética", "Sí se debilita el fundamento de su autoridad: sus ideas hay que juzgarlas por sí mismas"],
    ["Lo desafió en los hechos: escribió, predicó y amonestó a las autoridades", "Lo confirmó en los principios: su voz es una excepción que usa la debilidad femenina como credencial"],
    ["El contenido es falso: los humores son historia de la ciencia, no medicina", "Queda una intuición discutible: el ser humano no se entiende separado de su entorno"],
    ["Parecido: una fuerza vital común y responsabilidad humana por el orden del mundo", "Diferencia: la viriditas es don de Dios en un cosmos jerárquico; llamarla ecologista es anacrónico"]
  ],
  tomas: [
    ["Prueban un primer principio, no la Trinidad ni la Encarnación", "La serie que se detiene es de dependencia presente, no una cadena en el tiempo"],
    ["Si una conclusión contradice la fe, el argumento tiene un error que se busca con razones", "Costo: la fe queda como juez último", "Tampoco acepta pruebas débiles a favor de la fe, como la del comienzo del mundo"],
    ["Una ley contraria a la ley natural es corrupción de ley y no obliga en conciencia", "Contra el bien humano puede cumplirse para evitar un mal mayor; contra la ley divina, nunca", "Dificultad: quién decide qué dice la ley natural en lo particular"],
    ["Entender no es acto de un órgano: el alma tiene un ser propio y subsiste", "El alma separada no es la persona: de ahí el papel de la resurrección"],
    ["No esconder: herejes reincidentes entregados a la muerte y la mujer como algo defectuoso", "Discutirlas como argumentos, empezando por la analogía con la moneda falsa"]
  ],
  ockham: [
    ["La palabra es convencional; el concepto es un signo natural que nadie decide", "El parecido entre individuos es real, pero no es una entidad añadida"],
    ["Es una regla sobre lo que estamos autorizados a afirmar, no sobre lo verdadero", "Solo autorizan a afirmar la evidencia, la experiencia o la fe", "No prueba que algo no exista"],
    ["La potencia absoluta es lo que Dios podría hacer sin contradicción, no un segundo modo de actuar", "Un mundo contingente se conoce por experiencia, no deduciendo esencias", "Queda la objeción de la estrella que ya no existe"],
    ["Un papa contradecía lo que otro había definido en materia de fe", "El poder del papa es ministerial y no puede quitar derechos naturales"],
    ["Una demostración estricta exige premisas evidentes, y las que llevan a un Dios único no lo son", "No es escepticismo: pone la fe a salvo de la filosofía y rompe la continuidad entre razón y fe"]
  ],
  maquiavelo: [
    ["Maquiavelo sigue llamando mal al mal y pide no apartarse del bien cuando se pueda", "El conflicto es entre la moral común y lo que exige conservar un orden en situaciones de necesidad", "Queda abierto quién decide cuándo la necesidad es real"],
    ["La virtù consiste en prever y adaptarse a los tiempos frente a la fortuna", "El obstáculo mayor es la propia naturaleza, que no cambia con los tiempos", "Una república se adapta mejor porque reúne temperamentos distintos"],
    ["Los dos humores: los grandes quieren dominar y el pueblo no ser dominado", "Los tumultos produjeron instituciones como los tribunos y leyes favorables a la libertad", "Solo vale el conflicto tramitado por leyes, no por la fuerza privada"],
    ["Depender de armas pagadas o prestadas es depender de la voluntad ajena", "Buenas leyes y buenas armas se sostienen mutuamente", "Las armas propias atan la defensa al orden que defienden"],
    ["Todo orden político se corrompe con el tiempo", "Se renueva volviendo a su origen, por un golpe externo o por prudencia interna", "Renovar es recuperar la fuerza de la fundación, no inventar algo nuevo"]
  ],
  pascalmontaigne: [
    ["Afirmar que nada puede saberse sería otro dogma; la pregunta no se contradice", "Los pirrónicos suspenden el juicio ante razones de igual fuerza", "La duda modera: desconfía de las certezas que justifican la violencia"],
    ["Cada uno llama barbarie a lo que no es de su costumbre: crítica del desprecio europeo", "Conserva un criterio, la razón y la naturaleza, para juzgar a todos", "«Relativismo cultural» es una etiqueta posterior, y el retrato idealiza"],
    ["Débil como una caña, pero piensa y sabe que muere", "La grandeza consiste en saberse miserable", "Pascal lo explica por una naturaleza creada y caída, explicación separable de la descripción"],
    ["El corazón conoce de modo inmediato los primeros principios", "La razón demuestra desde principios, pero no puede demostrarlos", "Es la respuesta al pirronismo y el lugar de la fe"],
    ["No demuestra que Dios existe: muestra que no hay neutralidad (estamos embarcados)", "Ganancia infinita con probabilidad no nula pesa más que cualquier pérdida finita", "No produce la fe; objeción: vale para cualquier dios que prometa lo infinito"]
  ],
  bacon: [
    ["Los ídolos son tendencias permanentes de la mente, que deforman antes de investigar y vuelven aunque se las conozca", "Señalarlos ayuda, pero el remedio de fondo es un método: formar las nociones por una inducción verdadera"],
    ["La enumeración de casos favorables es frágil: un solo caso contrario la derriba", "Las tablas preparan la exclusión: se descartan las cualidades que no acompañan a la naturaleza investigada"],
    ["Bacon no niega la validez del silogismo: lo critica por el material sobre el que trabaja", "Si las nociones están mal abstraídas de las cosas, la deducción correcta no las vuelve firmes"],
    ["Producir un efecto exige conocer su causa: lo que en la teoría es causa, en la práctica es regla", "El poder que defiende Bacon supone someterse al orden de la naturaleza, no imponerle anticipaciones"],
    ["Su programa sí propone ampliar el imperio humano sobre la naturaleza, y esa meta da base a la crítica", "Bacon pone límites: obediencia a las causas, condena de la codicia, gobierno de la recta razón y valor de la contemplación"]
  ],
  descartes: [
    ["Todo engaño supone a alguien que es engañado: dudar de que existo confirma que existo", "No es un silogismo sino una intuición, y solo garantiza que existo mientras pienso"],
    ["Mientras no se descarte un engañador, la evidencia misma podría ser sospechosa; un Dios perfecto no engaña", "El círculo: Dios se prueba con ideas claras y distintas; la respuesta distingue intuición presente de recuerdo"],
    ["Gana una naturaleza enteramente geométrica, sin cualidades ocultas ni fines, y el cuerpo como máquina", "Pierde lo cualitativo, que pasa a la mente, y una explicación de cómo interactúan mente y cuerpo"],
    ["El error nace cuando la voluntad, más amplia, afirma más allá de lo que el entendimiento percibe con claridad", "Es responsabilidad humana y se corrige absteniéndose de juzgar sin claridad"],
    ["Descartes rechaza la imagen del piloto en su nave: el dolor y el hambre muestran que estamos unidos y como mezclados con el cuerpo", "La unión es una noción primitiva que se conoce viviendo, pero el sistema no la explica a la altura del hecho"]
  ],
  hobbeslocke: [
    ["Para Hobbes la ley natural no obliga en los hechos sin un poder común; para Locke ya obliga antes del Estado", "Si la alternativa es la guerra, conviene un poder absoluto; si es una incomodidad, basta un gobierno limitado"],
    ["Nadie renuncia al derecho a defender su vida, y la obediencia dura lo que dura la protección", "No hay derecho del pueblo a derrocar al soberano por injusto, porque los súbditos son autores de sus actos"],
    ["La propiedad nace de mezclar el propio trabajo con lo común, con los límites de suficiencia y de no desperdicio", "Según qué cuente como trabajo, el argumento protege al que cultiva o declara baldía la tierra indígena"],
    ["Establecer los hechos sin suavizarlos: Carolina, la Royal African Company y la autoría discutida", "Su propia teoría de la esclavitud no cubre la trata, y sus principios sirven para juzgar su conducta"],
    ["La fe es persuasión interior y la fuerza no puede producirla; el Estado solo cuida bienes civiles", "Excluye a ateos y católicos por razones de orden civil (promesas, lealtad), no por su doctrina"]
  ],
  spinoza: [
    ["La sustancia es lo que es en sí y se concibe por sí: si hubiera otra, compartiría algún atributo con Dios, que los tiene todos", "Las cosas singulares son modos: maneras de ser de la única sustancia, que dependen de ella y de otras causas finitas"],
    ["Mente y cuerpo son una misma cosa expresada en dos atributos, y ninguno determina al otro", "Desaparece el problema de cómo una mente inmaterial mueve un cuerpo", "La aptitud de la mente acompaña la del cuerpo"],
    ["Lo libre no se opone a lo necesario sino a lo coaccionado: obrar por la necesidad de la propia naturaleza", "El ser humano es libre en grado, en la medida en que actúa desde ideas adecuadas y no desde pasiones"],
    ["La tristeza es siempre paso a una potencia menor; la alegría es directamente buena, aunque puede ser excesiva", "Humildad, arrepentimiento y conmiseración no son virtudes porque nacen de la tristeza, aunque sirvan a quien no vive según la razón"],
    ["La facultad de juzgar no se puede transferir: reprimir las opiniones es violento e inútil", "Se puede decir lo que se piensa y criticar una ley con razones, sin actuar contra ella por la propia autoridad"]
  ],
  leibniz: [
    ["Todo lo extenso es divisible, al menos en el pensamiento, y por eso no es un verdadero simple", "Las unidades últimas tienen que ser inextensas y activas, según el modelo del alma"],
    ["Sin ventanas, las mónadas no actúan unas sobre otras: hay que explicar la correspondencia entre alma y cuerpo", "Dios creó cada sustancia para que concuerde con las demás siguiendo su propia ley, como dos relojes", "El costo es una coordinación de antemano que no se puede comprobar"],
    ["Lo cierto no es lo necesario: el opuesto de una verdad de hecho sigue siendo posible", "Las razones inclinan sin necesitar; la libertad es espontaneidad con inteligencia"],
    ["Habla del conjunto, no de cada parte: el mejor mundo puede contener males", "Se sostiene por un razonamiento sobre Dios y la razón suficiente, no por observación", "No autoriza la resignación ni pretende conocer la razón de cada mal"],
    ["En un espacio absoluto y uniforme, Dios no tendría razón para una ubicación u otra", "El espacio es el orden de lo que coexiste; el tiempo, el de lo que se sucede"]
  ],
  hume: [
    ["En cada caso solo se observan contigüidad, sucesión y, con la repetición, conjunción constante", "La idea de necesidad viene de la mente, que la costumbre lleva a esperar el efecto", "No niega las regularidades ni dice que todo sea azar"],
    ["Ninguna inferencia sobre lo no observado está demostrada", "La creencia se proporciona a la evidencia, que tiene grados", "La ciencia pasa a ser una creencia bien ordenada y revisable"],
    ["La razón informa sobre hechos y medios, pero no mueve a actuar", "Un deseo solo es irracional si se apoya en una creencia falsa o elige malos medios", "Las pasiones tranquilas pueden imponerse a las violentas: eso solemos llamar razón"],
    ["La máxima compara la fiabilidad del testimonio con la experiencia que respalda la ley natural", "Objeción de circularidad: la experiencia uniforme ya descarta los testimonios discutidos", "Hume no dice que los milagros sean lógicamente imposibles"],
    ["La nota existe: no hay que omitirla ni reducir a Hume a ella", "La nota contradice su propio método de proporcionar la creencia a la evidencia"]
  ],
  rousseau: [
    ["Los vicios que se atribuían a la naturaleza (orgullo, codicia, dominio) solo nacen en sociedad", "El estado de naturaleza es una hipótesis que sirve de medida, no un hecho histórico"],
    ["Los ricos, inseguros de bienes sostenidos por la fuerza, proponen leyes comunes que fijan la desigualdad", "Un pacto aceptado por todos puede ser ilegítimo: corrieron a sus cadenas creyendo asegurar su libertad"],
    ["La voluntad general es lo que cada uno quiere como ciudadano, no la suma de intereses privados", "Una voluntad no se transfiere: los diputados solo pueden ser comisionados"],
    ["La libertad moral es obedecer a la ley que uno se ha prescrito; forzar su cumplimiento preserva la igualdad del pacto", "La defensa depende de que la ley sea realmente general; si no, disfraza la coacción de libertad"],
    ["Medirse por la estima ajena separa ser y parecer: se vive en la opinión de los demás", "No se suprime el amor propio: se lo extiende a los demás para convertirlo en virtud"]
  ],
  kant: [
    ["Invierte el supuesto: los objetos, en cuanto conocidos, se rigen por las condiciones que pone el sujeto", "Gana la necesidad de la geometría y de la causalidad", "Solo conocemos fenómenos: la metafísica más allá de la experiencia queda cerrada"],
    ["Conforme al deber: hacer lo debido por cualquier motivo; por deber: por respeto a la ley", "El valor moral está en la máxima, no en el resultado visible", "La inclinación no vuelve mala la acción, pero no le da su valor"],
    ["Examina si la máxima universalizada es posible sin contradicción", "Dos fallas: no poder pensarla (promesa falsa) o no poder quererla (no ayudar)", "Detecta las excepciones que uno se concede a sí mismo"],
    ["Lo que tiene precio admite equivalente; la dignidad, no", "Lo prohibido es tratar a alguien solo como medio, de un modo en que no podría consentir"],
    ["Como fenómeno la acción está determinada; la causalidad no vale para la cosa en sí", "La libertad se piensa sin contradicción y se sabe por la ley moral (hecho de la razón)", "Cuesta conectar una libertad fuera del tiempo con una decisión concreta"]
  ],
  hegel: [
    ["Ninguna tesis aislada contiene toda la verdad: cada una es un momento de un desarrollo", "Lo verdadero es resultado, y el resultado separado del camino no basta"],
    ["El reconocimiento del señor es vacío porque viene de alguien a quien él no reconoce", "El miedo a la muerte y el trabajo forman al siervo, que se ve a sí mismo en lo que produce"],
    ["Un deber puramente formal no da contenido (formalismo)", "La libertad se realiza en vínculos e instituciones concretas que uno reconoce como propias"],
    ["Hegel distingue la mera existencia de la efectividad (Wirklichkeit)", "Así leída, la frase mide lo existente por su concepto, aunque se prestó a una lectura conservadora"],
    ["La historia avanza en la conciencia de la libertad: uno, algunos, todos", "El esquema mide con la vara europea y excluye a África: un eurocentrismo ligado a la estructura del relato"]
  ],
  schopenhauer: [
    ["El acceso a la cosa en sí es el propio cuerpo, conocido por fuera como objeto y por dentro como voluntad", "El paso por analogía del cuerpo a toda la naturaleza es el punto débil", "La voluntad se conoce todavía en la forma del tiempo, no del todo desnuda"],
    ["Todo querer nace de una carencia, que es dolor; la satisfacción es solo su cese", "Satisfecho un deseo, viene otro o el aburrimiento: el péndulo", "Hay placeres que no parecen cese de una carencia, y la tesis es difícil de refutar"],
    ["Las demás artes copian Ideas; la música copia la voluntad misma", "Expresa la alegría o el dolor en sí, sin sus motivos", "Es consuelo y no salida: no niega la voluntad y termina"],
    ["La ética de Kant es para él una moral teológica disfrazada, un deber sin motivo real", "De los tres motivos, solo la compasión da valor moral", "La compasión es un misterio que explica con la voluntad única, y puede faltar"],
    ["El suicida afirma la voluntad: rechaza sus condiciones, no el querer", "La negación apaga el querer por conocimiento del sufrimiento de todos", "Destruir un fenómeno deja intacta la voluntad como cosa en sí"]
  ],
  kierkegaard: [
    ["Entre los estadios hay una elección o salto, no una deducción necesaria", "Entender los argumentos no basta: el esteta puede comprenderlos y no comprometerse", "Por eso O lo uno o lo otro no concluye y deja al lector frente a la alternativa"],
    ["El miedo tiene un objeto determinado; la angustia se refiere a lo posible", "La angustia es el vértigo de la libertad ante su propia posibilidad", "Bien vivida, deshace las seguridades finitas y educa para la fe"],
    ["Distingue el qué de la verdad del cómo de la relación con ella", "La tesis vale para las cuestiones de la existencia, no para la matemática o la historia", "Niega que haya pruebas que eximan de decidir, no que haya verdad"],
    ["La desesperación es un desajuste del yo, no un estado de ánimo", "La forma más extendida es ignorar que se tiene un yo, y no se siente", "Su intensidad crece con la conciencia, hasta el desafío"],
    ["Los seudónimos son comunicación indirecta: obligan al lector a apropiarse y decidir", "Cada seudónimo habla desde una manera de vivir", "Hay que preguntar quién habla antes de atribuirle una tesis a Kierkegaard"]
  ],
  marx: [
    ["La explotación está en la producción, no en el intercambio: el salario paga el valor de la fuerza de trabajo", "La fuerza de trabajo produce más valor del que cuesta: el trabajo excedente no pagado es la plusvalía", "La desigualdad previa está en la propiedad de los medios de producción"],
    ["Las formas de conciencia se levantan sobre las relaciones de producción y no se explican por sí mismas", "Engels: la economía determina solo en última instancia y la superestructura actúa sobre la base"],
    ["El fetichismo surge de la producción para el mercado, donde las personas se relacionan a través de sus productos", "Explicarlo no lo disuelve: es la forma real en que aparece la relación social, y solo cambiaría con otra organización de la producción"],
    ["Critica la actitud contemplativa, no la teoría: Marx mismo interpretó toda su vida", "El conocimiento es práctica y la verdad de un pensamiento se decide en la práctica"],
    ["Los crímenes de esos regímenes son un hecho y se cometieron invocando a Marx", "Marx no describió un partido único; la pregunta es si su silencio sobre las garantías facilitó ese uso"]
  ],
  mill: [
    ["Responde a la objeción de la moral para cerdos: los placeres difieren en calidad", "El criterio es la preferencia de quienes conocen bien ambos placeres", "Si la calidad no es placer, Mill parece abandonar el hedonismo"],
    ["Solo el daño a otros justifica obligar; el bien propio permite aconsejar, no forzar", "Cada adulto conoce mejor su bien y la sociedad suele equivocarse al intervenir", "Elegir ejercita las facultades que hacen valiosa una vida"],
    ["Silenciar supone infalibilidad, y estar seguro no es ser infalible", "Sin discusión, la verdad se sostiene como prejuicio y se vuelve dogma muerto"],
    ["La democracia no garantiza la libertad: manda la parte más numerosa", "La presión social castiga sin leyes y penetra en los detalles de la vida", "Moldea el carácter: la gente deja de elegir"],
    ["El principio excluye a los niños y a las sociedades que juzgaba «atrasadas»", "La excepción choca con su propio argumento de la infalibilidad", "Su criterio era de desarrollo, pero lo aplicaba el colonizador"]
  ],
  nietzsche: [
    ["Es un diagnóstico cultural: la fe dejó de fundar la ciencia, la moral y el derecho, aunque sigan por inercia", "Si cae el garante caen los valores que se apoyaban en él: de ahí el nihilismo como tarea"],
    ["La moral noble empieza afirmándose; la de esclavos empieza por un no a lo otro", "El resentimiento de quien no puede actuar crea primero al malvado y deriva de él un bueno"],
    ["Es una prueba práctica de cómo se recibe la propia vida, no una tesis física", "La respuesta esperada es el amor fati: querer la vida entera, no resignarse"],
    ["En los textos es superación de sí y creación de valores leales a la tierra, frente al último hombre", "Su rechazo de la igualdad y la vaguedad de la figura facilitaron usos que la deformaron"],
    ["Nietzsche presenta su tesis como interpretación que compite con otras, no como verdad sin perspectiva", "Perspectivismo no es relativismo: más ojos sobre una cosa dan más objetividad"]
  ],
  husserl: [
    ["El acto de pensar es un hecho psíquico; lo pensado es ideal e idéntico para muchos", "Las leyes lógicas son exactas; las psicológicas, inductivas y probables", "El psicologismo lleva a un relativismo que se refuta a sí mismo"],
    ["La epojé deja de usar la creencia en el mundo como premisa, sin negarla ni dudar de ella", "Su fin es describir cómo el mundo aparece y cobra el sentido de ser real"],
    ["El presente vivido tiene espesor: impresión, retención y protención", "La retención no es un recuerdo: es lo recién sido todavía presente en la percepción"],
    ["Las ciencias tomaron por realidad un ropaje de ideas y olvidaron el mundo de la vida", "La crisis es de sentido, no de eficacia: la ciencia de hechos calla sobre la razón y la libertad"],
    ["El otro se da por empatía: un cuerpo vivido que presenta indirectamente una vida ajena", "La objetividad del mundo se constituye en comunidad", "La crítica posterior de Levinas: el otro pensado como alter ego"]
  ],
  heidegger: [
    ["La tradición respondió nombrando un ente supremo y dio por obvio qué significa ser", "Ya comprendemos el «es» de modo vago, sin poder decir qué entendemos", "El Dasein comprende el ser y le va su propio ser: por eso es el punto de partida"],
    ["El útil se retira en el uso y remite a una red de para qué", "Cuando falla aparece como objeto con propiedades: la mirada teórica es derivada"],
    ["El miedo tiene un objeto en el mundo; la angustia, ante el ser-en-el-mundo mismo", "En la angustia nada es obvio, el «uno» calla y el Dasein queda singularizado"],
    ["La definición instrumental es correcta pero no muestra cómo aparecen las cosas", "La técnica moderna emplaza y vuelve todo existencia disponible (Gestell)", "El peligro es que ese modo desplace a otros y el ser humano se vuelva recurso"],
    ["Lo propio se define por quién asume la posibilidad, no por cuál", "Sin contenido, se puede ser resueltamente cualquier cosa", "1933 muestra lo que el análisis no ofrece: un criterio para elegir"]
  ],
  wittgenstein: [
    ["La proposición es figura de un estado de cosas posible", "El sentido se entiende antes de saber si es verdadera", "La forma lógica que permite figurar no puede decirse"],
    ["La palabra funciona como una orden dentro de una actividad", "Nombrar es un juego entre muchos, no la esencia del lenguaje"],
    ["Sin criterio público no hay diferencia entre acertar y creer que se acierta", "No niega las sensaciones, sino que el significado descanse en un objeto interior", "Las palabras de sensación se injertan en conductas naturales"],
    ["Los problemas filosóficos son confusiones sobre el uso del lenguaje, no preguntas empíricas", "La filosofía describe usos para disolver el problema, como una terapia"],
    ["Abandona la forma lógica única y la búsqueda de una esencia del lenguaje", "Conserva que los problemas nacen de malentender el lenguaje y que la filosofía es aclaración"]
  ],
  ortega: [
    ["La circunstancia es el material y el límite con que hay que hacer la vida, no su causa", "Salvar la circunstancia es una tarea: buscarle su sentido", "Leída como determinismo, la frase se vuelve excusa; en el texto es exigencia"],
    ["Rechaza tanto las cosas sin sujeto del realismo como la conciencia encerrada del idealismo", "Lo primario es la vida: yo con mi mundo, polos inseparables", "Radical significa raíz donde todo aparece, no lo único que existe"],
    ["La perspectiva no deforma la realidad: es uno de sus componentes", "Cada perspectiva capta algo real; lo falso es creerse la única", "Queda sin resolver cómo integrar perspectivas sin una mirada desde ninguna parte"],
    ["Lo humano no tiene una esencia fija: es lo que ha ido haciendo de sí", "La razón histórica explica contando cómo algo llegó a ser lo que es"],
    ["Critica un tipo humano, no una clase social ni el bienestar de las mayorías", "El hombre-masa no se exige nada e impone su opinión sin razones", "El criterio de minoría selecta es vago y abre la puerta al desprecio"]
  ],
  zambrano: [
    ["La razón poética amplía la razón: no renuncia a pensar, escucha lo que todavía no tiene concepto", "La confesión, palabra expuesta ante otro, como respuesta a la objeción de arbitrariedad"],
    ["Lo sagrado es una dimensión de la experiencia anterior a los dioses, no una creencia que se abandona", "Negado, reaparece degradado en ídolos como el Estado, la historia o el líder, que piden víctimas"],
    ["La democracia como sociedad que exige ser persona, frente a la historia sacrificial", "El procedimiento cuenta individuos intercambiables; la persona es alguien concreto"]
  ],
  arendt: [
    ["La tiranía busca obediencia; el totalitarismo, una dominación total que elimina la espontaneidad", "Terror contra lo que alguien es, unido a una ideología que explica toda la historia", "Los campos muestran la meta: volver superfluos a los seres humanos"],
    ["En Eichmann vio incapacidad de pensar desde el lugar de otro, no odio profundo", "Pensar es el diálogo consigo mismo: preguntarse si se puede vivir con lo que uno hace", "Quien no piensa queda disponible para cualquier cosa"],
    ["Paradoja: quienes eran solo humanos se quedaron sin ningún derecho", "Lo perdido es un lugar en el mundo donde las acciones y opiniones cuentan", "El derecho básico es pertenecer a una comunidad política"],
    ["La lógica de la labor (producir y consumir) se volvió la medida de todo", "La política se reduce a administrar necesidades y se pierde la acción"],
    ["El poder es actuar juntos y depende del número; la violencia es instrumental", "Con violencia se obtiene obediencia, no poder: aparece donde el poder está en peligro"]
  ],
  sartre: [
    ["En el ser humano no hay un concepto ni una naturaleza previa: primero existe y se define por lo que hace", "No niega la condición ni la situación: niega que decidan de antemano quiénes somos"],
    ["La mala fe es identificarse con un papel como si fuera una esencia: tratarse como cosa", "Objeción: la actuación puede venir de la presión económica y no de una evasión"],
    ["En El ser y la nada la libertad es total: cada uno decide el sentido de su situación", "Beauvoir y Merleau-Ponty objetaron el peso de la opresión, el cuerpo y la historia", "Saint Genet: lo que hacemos con lo que han hecho de nosotros"],
    ["Cada elección propone una imagen de lo que el ser humano debe ser", "El paso de lo bueno para mí a lo bueno para todos no está justificado sin valores previos"],
    ["La praxis en la escasez produce lo práctico-inerte, que limita a todos", "De la serie al grupo en fusión: la libertad se recupera en la acción colectiva"]
  ],
  frankfurt: [
    ["Las preguntas y categorías de la ciencia dependen de una sociedad determinada", "La teoría crítica agrega la pregunta de para qué y para quién sirve el conocimiento", "Toda teoría toma partido; la crítica lo hace a la vista"],
    ["El mito ya buscaba explicar y dominar el mundo", "La razón reducida a cálculo convierte lo dado en destino y vuelve el dominio contra los seres humanos", "No es un rechazo de la razón sino una exigencia de que reflexione sobre sí misma"],
    ["Contradicción performativa: la crítica total usa la razón que niega", "Habermas busca el criterio en los presupuestos de la argumentación", "La modernidad también abrió una racionalidad comunicativa"],
    ["La crítica apunta a la forma de producción, no a la calidad de cada obra", "Las plataformas hacen visible la lógica de prever y fabricar deseos", "El público no es pasivo: reinterpreta y se apropia de lo que consume"],
    ["El aura es el aquí y ahora irrepetible de la obra, ligado al culto", "Su pérdida permite un arte fundado en la política y un público que examina", "El riesgo es la estetización de la política"]
  ],
  beauvoir: [
    ["Reconoce las diferencias biológicas, pero niega que expliquen el lugar social de las mujeres", "El cuerpo es una situación, no un destino", "Lo que se llega a ser es una figura social, no un cuerpo"],
    ["Entre los sexos, la oposición entre sujeto y Otro no es recíproca", "Las mujeres viven dispersas entre los hombres, sin pasado ni territorio común", "Es una situación histórica, no natural, y puede transformarse"],
    ["Distingue culpa de responsabilidad", "La dependencia ofrece ventajas, y aceptarlas para no elegir es mala fe", "Objeción: no toda dependencia es una ventaja elegida"],
    ["Un proyecto solo cobra sentido si otros, libres, lo retoman", "Criterio: es condenable reducir a otros a cosas, aunque sea en nombre de un ideal"],
    ["Los hechos documentados, sin ocultarlos", "Su propia filosofía (situación, no reducir a otro a objeto) sirve para juzgar su conducta", "Ni descartar la obra ni ocultar los hechos"]
  ],
  levinas: [
    ["La imposibilidad de matar es ética y no real: el rostro no impide, manda y acusa", "El otro es el único ser al que puedo querer matar, porque escapa a mi poder"],
    ["La relación con el otro precede al conocimiento y al lenguaje: la ética va antes que la ontología", "Levinas describe el sentido de la ética, no un código de normas"],
    ["El tercero obliga a comparar a los incomparables: de ahí la justicia, la ley y el Estado", "La justicia tiene que dejarse corregir por los rostros", "Riesgo: sin criterios, el tercero puede servir para dejar de ver a alguien (la entrevista de 1982)"],
    ["Subordinar el otro a la comprensión del ser convierte la relación en apropiación y poder", "La objeción valdría aunque Heidegger no hubiera sido nazi, y es discutible"],
    ["La asimetría vale en primera persona: no se le puede exigir a otro, menos a una víctima", "El tercero limita la responsabilidad y me incluye en la justicia"]
  ],
  foucault: [
    ["No hay saber puro separado del poder, ni poder que no produzca saber", "No significa que todo saber sea falso", "Preguntar en qué prácticas se produce un saber y qué permite hacer con las personas"],
    ["Cambia el blanco del castigo: del cuerpo como espectáculo a la conducta corregida en forma continua", "La misma técnica disciplinaria se extiende a escuela, cuartel y fábrica", "La prisión fracasa y sobrevive porque produce la delincuencia"],
    ["El hombre como figura del saber moderno, objeto y sujeto a la vez", "Depende de la episteme de fines del siglo XVIII y podría borrarse", "Antihumanismo teórico no es indiferencia moral"],
    ["Hacer morir o dejar vivir frente a hacer vivir y dejar morir", "El biopoder disciplina cuerpos y regula poblaciones", "El racismo de Estado separa quién debe vivir y quién puede morir"],
    ["El poder es una relación que supone que el otro puede actuar de otro modo", "Donde hay poder hay resistencia; relaciones de poder frente a estados de dominación", "La libertad como práctica y trabajo sobre uno mismo"]
  ],
  avicena: [
    ["Muestra que saber que existo no depende de percibir el cuerpo", "Pensarme sin el cuerpo no prueba que pueda existir sin él", "Avicena lo presenta como aviso y defiende la inmaterialidad con otros argumentos"],
    ["La esencia de una criatura no incluye su existencia", "Lo que existe sin que su esencia lo exija lo recibe de otro, mientras existe", "Solo en el Ser necesario esencia y existencia coinciden"],
    ["Considera el conjunto de los posibles, finito o infinito, y no la cadena eslabón por eslabón", "El conjunto de los posibles es posible y su causa tiene que estar fuera de él", "Lo discutido es si el conjunto necesita una causa además de las de sus miembros"],
    ["Una causa completa e inmutable produce su efecto siempre: depender no es haber empezado", "Dios es anterior al mundo en el ser, no en el tiempo", "El costo: parece que Dios no elige crear"],
    ["Los sentidos y la imaginación preparan; la forma inteligible se recibe del intelecto agente", "La profecía es el grado más alto de la intuición, no una excepción a la teoría"]
  ],
  ghazali: [
    ["Puede haber un juez superior a la razón, como la vigilia respecto del sueño", "Toda prueba supone los primeros principios que estaban en duda", "La salida es una luz que devuelve la confianza en ellos, no un argumento"],
    ["Taqlid es creer por autoridad, sin conocer los fundamentos", "El origen de una creencia no decide si es verdadera", "Abandonar la fe por la fama de otros también es taqlid"],
    ["El criterio es negar lo que la revelación afirma con claridad", "Las otras diecisiete son errores, no incredulidad", "La calificación era grave, y él mismo le puso límites"],
    ["La observación muestra que los hechos van juntos, no que uno produzca al otro", "La costumbre de Dios es estable, aunque no necesaria", "Aun concediendo naturalezas, Dios podría impedir que actúen"],
    ["Saborear es conocer por experiencia, no por definición", "El camino sufí exige transformar la vida, no solo estudiarla", "Por eso dejó la cátedra al ver que enseñaba por fama"]
  ],
  averroes: [
    ["El Corán manda reflexionar (i'tibar), y Averroes lo lee como razonar", "La forma más perfecta de razonar es la demostración, que exige lógica y aprovechar a los antiguos", "La obligación es solo para los aptos y depende de cómo se lea esa palabra"],
    ["La etiqueta nace en París después de su muerte, por sus lectores latinos", "Para Averroes la verdad no se opone a la verdad: si chocan, se corrige la interpretación del texto", "Hay una sola verdad con varios modos de expresión, no dos verdades contrarias"],
    ["Las cosas tienen naturalezas que se conocen por sus acciones propias: sin ellas no hay esencia ni definición", "Negar las causas deja sin objeto al intelecto", "No muestra que la necesidad del vínculo se perciba"],
    ["El intelecto material es separado y único porque recibe lo universal", "Cuesta explicar por qué es este individuo el que piensa", "Lo personal muere con el cuerpo, y la responsabilidad en la vida futura se vuelve difícil"],
    ["La división parece fija y justifica no divulgar las interpretaciones", "Quien asiente por imágenes tiene la misma verdad, y la teoría defiende a los aptos", "Queda abierto si las clases son naturaleza o efecto de la educación"]
  ],
  maimonides: [
    ["La razón y la Ley vienen del mismo Dios: el conflicto nace de leer mal (términos homónimos, la Torá habla en el lenguaje de los hombres)", "Solo se interpreta un versículo cuando su sentido literal choca con algo demostrado: por eso sí los del cuerpo de Dios y no el comienzo del mundo"],
    ["Un atributo positivo introduce composición en Dios y lo mide con perfecciones nuestras; la negación no le añade nada", "Cada negación demostrada excluye algo y acerca: quien niega con prueba más cosas sabe más; el límite final es el silencio"],
    ["De cómo funciona algo completo no se infiere cómo llegó a ser (el niño de la isla): ni la eternidad ni la creación se demuestran", "Prefiere la creación por probabilidad y porque un mundo necesario no deja lugar a la voluntad divina, los milagros ni la Ley"],
    ["El kalam ajusta la realidad a la doctrina con una física a medida, y confunde imaginación con intelecto", "Prueba a Dios aun suponiendo un mundo eterno, para que la prueba valga en cualquier caso y no dependa de una tesis disputada"],
    ["Las razones de los mandamientos se buscan en la historia: los sacrificios como concesión a un pueblo habituado a esos cultos, dirigida al único Dios", "La Ley educa por etapas, como la naturaleza, y queda abierta la pregunta por las normas cuando la época cambia"]
  ],
  ibnjaldun: [
    ["Juzgar por los transmisores no basta: un hecho imposible lo sigue siendo aunque lo cuenten personas honestas", "Primero se pregunta si el hecho es posible, y para eso hay que conocer la naturaleza de la vida social (ʿumrān)"],
    ["La cohesión de la vida dura permite conquistar el poder", "El lujo y la concentración del mando, con mercenarios, disuelven la cohesión que lo hizo posible"],
    ["El ciclo es una tendencia natural, no un plazo fijo", "Los gobernantes pueden retrasar o acelerar la ruina con justicia o injusticia"],
    ["La religión apoyada en la cohesión multiplica la fuerza de un grupo; sin cohesión, una prédica fracasa", "Habla de la eficacia histórica de la religión, no de su verdad"],
    ["La riqueza viene del trabajo, que depende de conservar su fruto", "La injusticia y los impuestos excesivos quitan el incentivo, bajan la actividad y la recaudación"]
  ],
  confucio: [
    ["El rén es una disposición que se cultiva, no un contenido definible", "Cada respuesta apunta a lo que le falta a ese discípulo", "Inalcanzable como logro completo, disponible en cada acto"],
    ["La disposición interior se educa practicando la forma", "Un rito sin humanidad no es rito", "Los criterios del rito vacío son interiores y difíciles de ver desde afuera"],
    ["El castigo produce evitación sin vergüenza; la virtud y los ritos, vergüenza y autocorrección", "El ejemplo del gobernante es la fuerza principal (estrella polar, viento y hierba)", "Nada garantiza ni controla la virtud del gobernante"],
    ["Cada nombre de una función trae obligaciones", "La cadena va del lenguaje a los castigos y al desorden", "Quien fija el contenido de los nombres tiene poder: sirve para exigir arriba o para someter abajo"],
    ["El xiào exige reverencia y atención, no solo cumplimiento", "Hay que amonestar con suavidad a los padres que se equivocan", "El caso de la oveja pone el vínculo familiar en tensión con la justicia"]
  ],
  mozi: [
    ["Todos los males tienen la misma estructura: cuidar lo propio y dañar lo ajeno", "Responde con la reciprocidad: cuidar a los padres ajenos para que cuiden a los propios", "Justifica la piedad filial por sus efectos, y eso es lo que el confuciano rechaza"],
    ["Argumento de coherencia: el criterio que condena al ladrón condena con más razón la conquista", "No necesita premisas nuevas y se completa con la cuenta de costos", "Acepta la defensa y el castigo de un tirano: la autoridad no vuelve justo un despojo"],
    ["Mirada desde abajo: la costumbre no justifica un gasto que daña al pueblo", "Queda afuera lo que no entra en la cuenta, como la forma del duelo y la unión que da la música"],
    ["Juzga por los efectos en el beneficio de todos, contado imparcialmente", "El término es moderno y su bien son bienes concretos, no el placer", "También apela a la voluntad del Cielo"]
  ],
  laozi: [
    ["Lo que se descarta es forzar, no actuar: el Dao no hace nada y nada queda sin hacer", "Intervenir poco y temprano, sobre lo pequeño, antes del desorden", "El libro no da una regla para distinguirlo de la pasividad"],
    ["Lo que hay da el provecho; el hueco, el uso (rueda, vasija, casa)", "Lo que hay nace de lo que no hay: el vacío hace lugar", "Desconfiar de lo lleno, que pierde la capacidad de recibir"],
    ["La virtud que se busca para parecer bueno ya está dañada", "Las virtudes predicadas son síntoma de que el Dao se perdió", "Objeción: hay virtudes que quizá solo se adquieren practicándolas"],
    ["El libro circulaba en grupos de pasajes, sin los 81 capítulos: fue creciendo como antología", "El pasaje paralelo al capítulo 19 no ataca la benevolencia ni la rectitud", "Hay que preguntar de qué capa viene cada frase"],
    ["El Dao no decide, no premia ni castiga: perros de paja", "Ni el Dao sigue una norma exterior: su modelo es ziran", "Si el fondo del mundo no dicta reglas, la sabiduría no es aplicarlas"]
  ],
  mencioxunzi: [
    ["Xunzi llama naturaleza solo a lo que no se aprende; Mencio, a lo propio que tiende a crecer", "Queda un desacuerdo real: si hay un impulso espontáneo hacia el bien o solo deseo", "De ahí dos pedagogías: cuidar lo que ya está o enderezar lo que falta"],
    ["El sobresalto llega antes de todo cálculo de provecho o fama", "Es un brote, no una virtud: puede secarse y necesita cultivo", "No decide cuál impulso manda, el compasivo o el deseo de provecho"],
    ["El alfarero: los ritos salen del trabajo reflexivo de los sabios, no de su naturaleza", "El origen del rito solo supone capacidad de aprender y prever el daño del desorden"],
    ["El que destruye la benevolencia ya no es soberano sino un simple individuo (1B8)", "El Cielo ve como ve el pueblo: el mandato se mide por el pueblo", "Es una doctrina de la legitimidad, no un derecho general a la rebelión popular"],
    ["El rito no hace llover: vale como forma (wén), no como magia", "Tomarlo como cosa de espíritus lleva a esperar del Cielo lo que depende del gobierno", "Los ritos valen por cómo encauzan las emociones y ordenan la vida en común"]
  ],
  zhuangzi: [
    ["El pasaje termina afirmando que entre Zhou y la mariposa hay alguna distinción", "La imagen habla de la transformación de las cosas, no de la existencia del mundo exterior", "Se conecta con la muerte como otra transformación"],
    ["Shi y fei dependen del hablante y en un debate entre escuelas no hay árbitro neutral", "La salida es una actitud (el eje del Dao), no una tesis rival", "El escepticismo apunta contra cerrar la disputa desde un lugar privilegiado, no contra todo saber"],
    ["Un saber práctico que sigue la estructura de la cosa y no se reduce a reglas", "Atención a cada caso, no automatismo", "Se ajusta a la materia en vez de imponerle distinciones fijas"],
    ["La buena intención que impone a otro la propia medida", "Hundun es lo indiferenciado que muere al ser recortado en distinciones", "Alcanza a los que quieren mejorar a los demás según un modelo"],
    ["No es indiferencia: reconoce el dolor y lo atraviesa", "Aplica la transformación de las cosas a la muerte, como el paso de las estaciones", "El pasaje es de un capítulo Exterior y su consuelo es discutible"]
  ],
  buda: [
    ["Dukkha incluye la insatisfacción de lo agradable que pasa, no solo el dolor", "La tercera verdad afirma que dukkha puede cesar: diagnóstico seguido de cura"],
    ["El karma es la intención y da frutos dentro del mismo proceso causal", "Ni el mismo ni otro: se rechazan el alma fija y el aniquilacionismo"],
    ["Rechaza el supuesto que comparten los dos extremos, no se queda a mitad", "Kaccānagotta: ni «todo existe» ni «nada existe», sino origen dependiente"],
    ["Parábola de la flecha: esas preguntas no conducen a la liberación", "Objeción: afirma otras tesis no comprobables, como el renacimiento"],
    ["Transmisión oral de siglos antes de la escritura", "Comparar colecciones paralelas para hallar la capa más antigua"]
  ],
  nagarjuna: [
    ["Lo que falta es la naturaleza propia, no la existencia", "Vacuidad y originación dependiente son la misma tesis", "El nihilismo es uno de los dos extremos que rechaza"],
    ["Ataca el supuesto de que solo lo que tiene naturaleza propia puede refutar", "Lo vacío puede ser eficaz: el hombre mágico que detiene a otro", "No tiene tesis propia, y la salida tiene un costo discutido"],
    ["Sin apoyarse en lo convencional no se enseña lo último", "Lo convencional es donde algo se dice y se hace, no un engaño", "La Guirnalda preciosa muestra que la ética sigue vigente"],
    ["Rechaza las cuatro maneras de surgir: de sí, de otro, de ambos, sin causa", "La pregunta suponía cosas con naturaleza propia", "Lo que queda es la originación dependiente, no la negación de lo que aparece"],
    ["Ninguno de los dos tiene naturaleza propia", "Lo que cambia es el aferramiento, no el mundo"]
  ],
  shankara: [
    ["El error produce efectos reales aunque la serpiente nunca haya existido", "La cuerda no es afectada: la liberación cambia la lectura, no la realidad"],
    ["Lo producido por una acción es efecto y termina", "Uno ya es Brahman: se trata de quitar un error", "El rito y la devoción preparan pero no liberan"],
    ["El mundo vale en el punto de vista práctico y no es un sueño privado", "El criterio es la cancelación por un conocimiento posterior"],
    ["Atman es Brahman en sentido de identidad", "Descartar todo lo que es objeto deja la conciencia testigo, que no se puede negar"],
    ["El dilema: en Brahman, en el yo individual o en un tercero", "La ignorancia no tiene comienzo y no se explica sino que se termina", "La escuela posterior se dividió sobre dónde reside"]
  ],
  dogen: [
    ["Lo que ya se es no se manifiesta sin práctica", "La práctica no es un medio, pero tampoco es prescindible"],
    ["Tenerla supone una semilla oculta que desarrollar", "Serla hace de la práctica expresión y no extracción", "La impermanencia misma es naturaleza de Buda"],
    ["Dōgen no niega la sucesión", "La leña ocupa plenamente su posición de leña", "El tiempo no es un recipiente: cada ser es su tiempo"],
    ["Se empieza examinando la propia experiencia, no negando el yo", "Llevado al final, el examen no encuentra un yo separado", "Las cosas confirman a uno, y no al revés"],
    ["No es dejar la mente en blanco ni suprimir pensamientos", "Advertir el pensamiento y dejarlo ir sin perseguirlo", "Ni pensar en algo ni esforzarse por no pensar"]
  ],
  gandhi: [
    ["La resistencia pasiva es el arma del débil: no golpea porque no puede y conserva el odio", "El satyagraha es activo: desobedece en público, no daña y acepta el castigo", "Busca convertir al adversario, no doblegarlo"],
    ["El medio decide qué es lo obtenido: con los medios de los ingleses se obtiene un poder sostenido por el miedo", "El ejemplo del reloj: robado, comprado o regalado según el medio", "Punto débil: la historia no muestra una conexión necesaria entre medios y resultados"],
    ["Los indios entregaron la India al desear la civilización de los ingleses", "Sin dominio de uno mismo se tendría el dominio inglés sin los ingleses", "La aldea y la rueca fueron discutidas por Nehru y por Ambedkar"],
    ["Son hechos documentados: ni callarlos ni volverlos lo único", "Obligan a preguntar a quién incluía su idea de liberación", "Muestran los límites de la no violencia frente a un adversario sin conciencia"]
  ],
  nishida: [
    ["El yo es un resultado de la experiencia, no su punto de partida", "La reflexión separa después sujeto y objeto de una unidad previa", "Preguntar cómo un sujeto encerrado llega al mundo plantea mal el problema"],
    ["Describir la experiencia pura ya es reflexionar, y su vocabulario parecía psicológico", "El intento con la autoconciencia no lo resolvió", "Cambia la pregunta: no qué es la experiencia sino dónde ocurre (basho)"],
    ["La nada relativa es falta de algo y se opone al ser", "La nada absoluta es el lugar en que ser y no ser aparecen, como el campo visual", "No niega el valor: dice que el fundamento no es un ente"],
    ["Los opuestos se determinan y se niegan a la vez, sin un tercero que los absorba", "La tensión es la forma de lo real, no una etapa superada", "El mundo histórico se rehace en cada acción, sin final que lo cierre"],
    ["Su lógica permitía criticar que una nación se pusiera como absoluta", "También usó lo universal en lo particular para hablar de la casa imperial y de Asia oriental", "La pregunta es dónde sus conceptos ofrecieron poca resistencia"]
  ],
  wangyangming: [
    ["Un saber que no se actúa todavía no es saber", "Ver un color hermoso ya es amarlo y oler un hedor ya es rechazarlo", "El deseo egoísta corta la unidad de saber y hacer"],
    ["Si el principio de la piedad filial estuviera en los padres, desaparecería al morir ellos", "La mente es el principio: lo que se debe hacer no se busca afuera"],
    ["Géwù pasa a significar rectificar los asuntos hacia los que se dirige la intención", "El trabajo moral se hace en cada asunto y en la intención, no en un estudio infinito previo"],
    ["La sustancia de la mente no tiene bien ni mal; el bien y el mal aparecen en la intención", "El liángzhī conoce el bien y el mal, y rectificar los asuntos es hacer el bien y quitar el mal", "La primera frase parecía chocar con la bondad de la naturaleza humana"],
    ["Las reacciones espontáneas ante el niño, el animal, la planta y la piedra muestran una continuidad real", "De sentir compasión no se sigue cómo priorizar entre los seres"]
  ],
  lascasas: [
    ["Las cifras de muertos no son un recuento y las epidemias pesaron mucho", "Las epidemias golpearon a pueblos ya sometidos a guerra y trabajo forzado", "Muchas matanzas narradas están confirmadas por otras fuentes", "El uso propagandístico no vuelve falsa la denuncia ni justifica condenar a un pueblo"],
    ["Recomendó en 1516-1518 llevar esclavos africanos para liberar a los indios", "No inventó la trata, pero su consejo contribuyó a expandirla", "Se arrepintió tarde, en privado y sin consecuencias", "Muestra el punto ciego de un humanismo que no se aplicó a todos"],
    ["Ambos afirmaban el dominio legítimo de los indios aunque fueran infieles", "Vitoria admitía títulos como el derecho de comunicación y la protección de inocentes", "Las Casas negó que los sacrificios justificaran la guerra y exigió restitución", "Vitoria pensó desde la cátedra; Las Casas, como testigo y litigante"],
    ["No hubo veredicto, pero Sepúlveda no pudo imprimir su libro", "Las ordenanzas de 1573 cambiaron conquista por pacificación", "Un imperio suspendió sus conquistas para discutir si su guerra era justa", "Los indios no hablaron en un debate sobre ellos"],
    ["Desmontó el mito que justifica la violencia como misión civilizatoria", "Pensó desde el sufrimiento de las víctimas y exigió restitución", "Nunca dudó de la evangelización ni de la soberanía del rey", "Habló por los indios y los idealizó, y su compasión no alcanzó a los africanos"]
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
  marti: [
    ["La incapacidad no está en los pueblos sino en los gobernantes que importan leyes ajenas", "El buen gobernante conoce los elementos de su país y crea instituciones nacidas de él", "El injerto: las ideas de afuera sirven si el tronco es propio", "Queda abierto quién define los elementos del país"],
    ["Negaba el fundamento científico del racismo cuando dominaba la ciencia racial", "Respondía al miedo a la guerra de razas usado por España contra la independencia", "El mismo ensayo conserva vocabulario racial y cierto paternalismo", "La fórmula pudo usarse después para negar el racismo, como en Cuba en 1912"],
    ["El peligro es el desdén de un vecino que no conoce a nuestra América", "Niega una maldad ingénita del pueblo del norte", "Nace de quince años de crónicas en Nueva York y de las conferencias de 1889-1891", "Se leyó como profecía tras la intervención de 1898"],
    ["Ser culto es el único modo de ser libre: la educación es base de la república", "Educación científica, práctica y adecuada a cada región, con maestros ambulantes", "Con Freire comparte partir de la realidad y no copiar modelos", "Pero todavía piensa el saber como depósito que se lleva al que no sabe"],
    ["Pensar es servir: no separó escritura y acción política", "Modernismo sin torre de marfil: imágenes para mover a lectores no especialistas", "Fundó el Partido Revolucionario Cubano para que la guerra no dejara una república de caudillos", "Su muerte en Dos Ríos lo volvió símbolo apropiado por bandos opuestos"]
  ],
  vasconcelos: [
    ["Escribe contra la tesis de la degeneración por mestizaje y el blanqueamiento", "El libro conserva vocabulario eugenésico y la raza como sujeto histórico", "Lectura más honesta: el texto hace ambas cosas a la vez", "La ideología del mestizaje sirvió para negar un racismo persistente"],
    ["El contraste es mayormente un estereotipo refutable con los textos", "Dewey en El arte como experiencia integra lo estético en la experiencia ordinaria", "Un espíritu latino común es una generalización como las que denuncia", "Queda legítima la pregunta de para qué se quiere ser eficiente"],
    ["Gestión y obra teórica son dos preguntas distintas que no deben mezclarse", "Creó la SEP, bibliotecas, alfabetización, misiones culturales y apoyó el muralismo", "El modelo era misionero, vertical y de canon europeo", "La integración dejó a las culturas indígenas como pasado, no como presente"],
    ["Valoró lo indígena cuando la opinión ilustrada lo veía como lastre", "Su pensamiento subordina lo indígena a una síntesis mestiza por diseño", "Los movimientos indígenas actuales reclaman reconocimiento como pueblos, no integración", "Celebró lo indígena mientras deseaba su disolución en el conjunto"],
    ["Tras 1929 giró hacia un hispanismo católico y conservador", "En 1940 dirigió Timón, financiada por Alemania y favorable al nazismo", "Su idea de raza con misión ofrece poca resistencia al nacionalismo racial", "Posición mayoritaria: señalar dónde el marco resistió y dónde no"]
  ],
  mariategui: [
    ["La miseria indígena es consecuencia del latifundio y la servidumbre, no de la naturaleza ni de la cultura", "El gamonalismo neutraliza leyes, escuelas y prédicas humanitarias", "La explicación racial repite ideas imperialistas, desmentidas por los pueblos asiáticos", "Objeción: el racismo tiene vida propia y no desaparece solo con la reforma agraria"],
    ["Rechaza la idea de que el socialismo es una ideología extranjera", "Rechaza copiar el esquema europeo de etapas", "El marxismo como método aplicado a una realidad de campesinos indígenas y comunidades", "La Komintern lo miró con sospecha; tensión entre crear y seguir siendo marxista"],
    ["Llamó comunismo inkaico a un Estado jerárquico y tributario, y pasó por alto desigualdades de la comunidad", "Distinguió el comunismo moderno del incaico: no se trata de restaurar el pasado", "La comunidad como punto de apoyo práctico que el liberalismo quiso destruir", "La reforma agraria de 1969 como caso para discutirlo"],
    ["Haya: el imperialismo es la primera etapa del capitalismo y la fuerza decisiva son las clases medias", "Mariátegui: las burguesías son socias del imperialismo y el antiimperialismo solo no es programa", "En juego: frente policlasista nacional o movimiento de clase socialista", "El APRA ganó la organización; Mariátegui, la influencia intelectual"],
    ["Ambos: ninguna educación es neutral", "Mariátegui: la escuela no funciona dentro del latifundio; primero la tierra", "Freire: la educación misma puede ser parte de la lucha", "Corrección mutua: concientización sin tierra frustra; tierra sin lectura crítica cae en nuevos patrones"]
  ],
  zea: [
    ["Declarar imaginario el tribunal no cambia la asimetría institucional", "La maniobra parece terapéutica más que estructural", "Ninguna filosofía surge fuera de una circunstancia: la universalidad europea es falsa", "La legitimidad se obtiene produciendo obra, no discutiéndola"],
    ["Zea filosofa desde un nosotros americano; Dussel desde la víctima", "Zea ve a América Latina dentro de Occidente; Dussel propone exterioridad", "La moderación de Zea evita el esencialismo y la idealización de la víctima", "Ambos rechazan el universalismo abstracto y parten de la situación histórica"],
    ["Versión débil: origen situado, pero argumentos evaluables por cualquiera", "Versión fuerte: la circunstancia fija la validez y cae en el relativismo", "Reconocer la propia circunstancia es condición del diálogo entre iguales", "Paralelo con la objetividad fuerte de Harding y Haraway"],
    ["Conserva de Hegel la historia como proceso de la conciencia por contradicciones", "Invierte quién ocupa el lugar de la lucidez: el margen, no Europa", "La verdad de un proceso se ve donde se pagan sus costos", "Situar la verdad en el margen elimina la jerarquía del sistema hegeliano"],
    ["Dirigió instituciones y colecciones y recibió honores, a diferencia de Dussel", "Lectura sospechosa: su culturalismo era compatible con casi cualquier gobierno", "Institucionalizar permite que una tradición sobreviva a su fundador", "Quedó fuera la pregunta por quiénes dentro del nosotros no tienen voz"]
  ],
  fanon: [
    ["La inferioridad resulta de un proceso económico y luego de su interiorización en la piel", "Sociogenia: sufrimientos psíquicos de origen social, junto a ontogenia y filogenia", "Contra Mannoni: es el racismo el que crea al inferiorizado", "La desalienación exige transformar estructuras, no solo tratar al individuo"],
    ["El mundo colonial está fundado en la violencia y la descolonización es siempre violenta", "A nivel individual la violencia «desintoxica», pero el odio no basta y hace falta educación política", "El último capítulo documenta el daño psíquico de la guerra en todos", "La frase sobre matar al europeo es de Sartre; falta en Fanon una ética clara entre combatientes y civiles"],
    ["En Hegel el reconocimiento es recíproco y se conquista en la lucha", "El amo colonial no quiere reconocimiento sino trabajo", "La abolición de 1848 fue otorgada: el negro «fue actuado»", "El reconocimiento auténtico se gana en una acción propia"],
    ["La burguesía nacional es intermediaria, sin base productiva", "Ocupa el lugar del colono y mantiene los lazos con la metrópoli", "Partido único, culto del líder y chovinismo", "La conciencia nacional debe volverse conciencia política y social; la alternativa queda poco desarrollada"],
    ["Fanon toma de Sartre la mirada y la idea de que el racista crea al inferiorizado", "La mirada racial no es recíproca: está armada por la historia", "Crítica a «Orfeo negro»: la negritud no es solo una etapa explicada desde afuera", "El prefacio de Sartre es más exaltado que el libro de Fanon"]
  ],
  kusch: [
    ["El ser es la actitud del sujeto occidental y del ciudadano: ser alguien, afirmarse, dominar objetos", "El estar es estar aquí, expuesto a un mundo que no se domina, buscando amparo antes que control", "No es gramática: la lengua da la pista para nombrar dos maneras de existir", "El estar no es atraso sino una dimensión humana reprimida; de ahí el estar siendo"],
    ["El hedor es cómo el ciudadano percibe el mundo indígena y popular, no una propiedad de ese mundo", "La pulcritud es una defensa contra el miedo de quedar a la intemperie, reducido al mero estar", "El indígena enfrenta ese miedo con el rito; el ciudadano lo niega acumulando objetos", "Riesgo: la imagen puede reforzar el prejuicio y convertir pobreza y abandono en modos de existir"],
    ["Fagocitar: absorber, como una célula a otra", "Invierte el relato de la modernización: el estar absorbe al ser importado y lo vive a su manera", "Mérito: los colonizados no son receptores pasivos", "Objeciones: difícil de comprobar, minimiza la violencia de la conquista y supone bloques fijos"],
    ["Esencialismo: opone Occidente y América, ciudad e indio, como bloques con esencia fija", "Idealización: el indígena y el pueblo como sabios, sin conflictos ni deseos de modernidad", "Método: interpreta con libertad y generaliza del altiplano a toda América; Cerutti lo ubicó en una vertiente populista", "Defensa: el estar es una dimensión humana, no étnica, y el estar siendo es proceso, no esencia"]
  ],
  salazarbondy: [
    ["La inautenticidad se explica por una causa histórica, no por una incapacidad", "La dependencia y la dominación organizan toda la cultura", "La situación puede cambiar: no es un rasgo permanente", "La filosofía puede volverse auténtica ya, pensando la dominación"],
    ["Ambos parten de la dependencia y rechazan imitar o rechazar lo europeo en bloque", "Zea: toda filosofía nace de una circunstancia; basta pensarla con rigor", "Salazar Bondy: pensar desde una circunstancia dominada no garantiza autenticidad", "Zea acierta en el criterio, Salazar Bondy en el diagnóstico de las condiciones"],
    ["La filosofía analítica viene de los centros y se presentaba como neutral", "Los instrumentos (claridad, análisis, argumentación) no tienen patria", "La imitación criticada está en adoptar una agenda ajena de problemas", "Queda abierto si los instrumentos son tan neutrales como parecen"],
    ["Velasco llegó por un golpe, limitó libertades e hizo reformas profundas", "A favor: su tesis exigía cambiar las condiciones, no solo las ideas", "En contra: una liberación impuesta desde un Estado no elegido se contradice", "El dilema de fondo: manos limpias sin cambios o cambios con instrumentos imperfectos"]
  ],
  freire: [
    ["Lo bancario es la relación, no el hecho de exponer", "Una exposición puede ser problematizadora y un trabajo en grupo bancario", "La forma bancaria enseña adaptación por debajo de los contenidos", "Las condiciones escolares empujan hacia lo bancario"],
    ["Berger: la concientización supone una jerarquía de conciencias y es paternalista", "Ninguna educación es neutral", "El educador declara su lectura pero no la impone", "Tensión: Freire cree en una lectura más verdadera de la opresión"],
    ["La opresión se incorpora: autodesvalorización, fatalismo, miedo a la libertad", "Liberarse no es invertir los lugares", "Solo los oprimidos pueden liberarse, con educadores que trabajan con ellos", "Crítica feminista al binarismo y al lenguaje masculino"],
    ["Investigación del universo vocabular y palabras generadoras", "Codificación en imágenes y discusión en círculos de cultura", "Angicos, 1963: unos trescientos trabajadores y un programa nacional cortado por el golpe", "Pocas evaluaciones independientes de los resultados"],
    ["Ambos critican la transmisión de saber terminado y valoran la experiencia reflexionada", "Freire leyó a Dewey a través de Anísio Teixeira", "Dewey parte de la cooperación y el crecimiento; Freire, de la opresión y el conflicto", "Para Freire la educación nunca es neutral"]
  ],
  rawls: [
    ["El ejemplo de Wilt Chamberlain: mantener un patrón exige intervenir en intercambios libres", "Los principios rigen la estructura básica, no cada transacción", "La propiedad y el mercado son instituciones que hay que justificar, no derechos previos", "Tener talentos no implica merecer todo lo que el mercado paga por ellos"],
    ["Sandel: el velo supone un yo desvinculado, anterior a sus fines y comunidades", "MacIntyre: la justicia solo tiene sentido dentro de una comunidad con una idea del bien", "Rawls: la posición original es un recurso de representación, no una teoría de la persona", "La concepción de la persona es política, ligada a una cultura democrática"],
    ["Sen: los bienes primarios miden medios, no libertades reales", "Con los mismos recursos, una persona con discapacidad puede hacer mucho menos", "Nussbaum: el contrato deja fuera a discapacitados graves, extranjeros y animales", "Rawls: los bienes primarios son públicos y no obligan a juzgar qué vida es buena"],
    ["Okin: las partes como jefes de familia y la división sexual del trabajo sin examinar", "Mills: el contrato real fue racial y la teoría ideal no ve esa dominación", "La crítica usa los propios principios de Rawls, por eso es en parte interna", "Rawls aceptó en 1997 que la familia es parte de la estructura básica"],
    ["La razón pública rige cuestiones constitucionales y obliga sobre todo a quienes ejercen el poder", "Es un deber moral de civilidad, no una prohibición legal", "Se admiten razones religiosas si a su tiempo se dan también razones públicas", "Objeción: la exigencia pesaría más sobre los creyentes"]
  ],
  dussel: [
    ["La vida humana digna no es mera supervivencia biológica", "El principio formal deja el contenido a la comunidad de afectados", "Si lo formal decide todo, depende más de Apel y Habermas de lo admitido", "La negatividad se constata: hambre y muerte prematura son hechos verificables"],
    ["El concepto se define sobre todo por negación", "Sus valores concretos ya los defiende la tradición moderna crítica", "Dussel: la diferencia está en quién formula los valores y desde qué tradición", "Es fértil como programa, pero más horizonte que categoría filosófica"],
    ["Cerutti Guldberg criticó en 1983 el populismo filosófico del pueblo en singular", "Víctimas del mismo sistema pueden tener intereses incompatibles", "El criterio es la negatividad concreta, no la identidad del sujeto", "En conflictos entre víctimas cede el turno a la ética del discurso"],
    ["La Aufhebung hegeliana también conserva lo negado", "En Hegel no hay afuera; en la analéctica irrumpe una palabra no deducible", "Comprender al Otro ya es reducirlo a las propias categorías", "Vale como disciplina de método, no como diferencia lógica tajante"],
    ["El primer Dussel escribe desde la periferia latinoamericana y la dependencia", "El Dussel tardío propone un diálogo entre grandes tradiciones civilizatorias", "América Latina es una periferia interior a Occidente, no un exterior", "Coherencia: la salida es una pluralidad de centros, no otro centro"]
  ],
  falsborda: [
    ["La diferencia está en la relación entre investigador y comunidad, no en los instrumentos", "La comunidad participa en todas las fases: preguntas, datos, interpretación y uso", "Paso de la relación sujeto-objeto a la relación sujeto-sujeto", "Devolución sistemática y ciclo de investigar, actuar y reflexionar"],
    ["La neutralidad de la ciencia social tradicional es en buena medida una ilusión", "El compromiso exige más rigor, porque una comunidad que actúa con información falsa fracasa", "La validez se prueba también en la práctica", "Riesgos que siguen en pie: sesgo de confirmación e idealización del pueblo"],
    ["El colonialismo intelectual importa teorías, problemas y criterios del norte", "La ciencia propia define sus preguntas y conceptos desde la realidad latinoamericana", "No rechaza lo extranjero: pide usar esas herramientas con independencia", "Riesgo de esencialismo: lo propio se construye desde regiones y comunidades concretas"],
    ["Canal A narrativo para los habitantes; canal B teórico para los académicos", "La forma del libro es la devolución sistemática", "Diálogo entre saber académico y saber popular sin que uno absorba al otro", "Objeción: el canal teórico podría conservar la última palabra"],
    ["El libro de 1962 ya rompía con una ciencia social que no toma partido", "Trató la Violencia como fenómeno social con causas y responsables", "La reacción furiosa mostró que el conocimiento social es políticamente explosivo", "Las comunidades pasaron de fuente de testimonios a coautoras"]
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
  wiredu: [
    ["Examinar los conceptos heredados de la lengua, la religión y las instituciones coloniales en vez de asimilarlos sin examen", "El instrumento es la traducción a la propia lengua: el ejemplo del cogito en akan", "No rechaza lo occidental: hay universales (lógica, ciencia, imparcialidad compasiva)", "Tampoco defiende la tradición: también hay que criticarla"],
    ["En la democracia mayoritaria la minoría queda fuera de las decisiones y puede quedar excluida siempre si los partidos son étnicos", "Distinción entre representación formal y representación en las decisiones; propuesta sin partidos, no de partido único", "Consenso es acordar qué hacer, no pensar lo mismo: la minoría suspende su desacuerdo sin abandonarlo (frente a Locke y Rousseau)", "Objeción de Eze: el consenso puede esconder presión y el modelo asante era jerárquico"],
    ["Etnofilosofía: reconstruir la filosofía implícita de un pueblo entero, desde Tempels (1945)", "Hountondji: critica el unanimismo y la confusión entre visión del mundo colectiva y filosofía explícita y argumentada", "Wiredu comparte la crítica pero defiende analizar con rigor los conceptos tradicionales", "Oruka: la filosofía de los sabios como otra salida"],
    ["Una persona es persona a través de otras personas: proverbio tradicional, no frase de autor", "Ramose lo trata como ontología; Metz como teoría ética de la identidad y la solidaridad", "Inspiró la Comisión de la Verdad de Tutu y la abolición de la pena de muerte en Sudáfrica", "Críticas: vaguedad, presión del grupo, generalización indebida y uso político para pedir perdón a las víctimas"]
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
