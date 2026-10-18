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
      {mod:"spinoza", rol:"Hereda la idea de que entender la necesidad libera de las pasiones tristes."}],
    otros:["Zenón de Citio","Cleantes","Crisipo","Panecio","Posidonio","Musonio Rufo"],
    conceptos:["logos","virtud","indiferentes","apatheia","dicotomía del control","cosmopolitismo","examen de conciencia"],
    noConfundir:"El estoico no es alguien frío que reprime lo que siente: busca no ser arrastrado por juicios falsos. Y no es resignación pasiva: Marco Aurelio gobernó un imperio y Séneca escribió contra la ira.",
    hoy:"La terapia cognitivo-conductual reconoce su deuda con Epicteto (Albert Ellis, Aaron Beck). Hay un «estoicismo moderno» popular, a veces reducido a autoayuda para el rendimiento.",
    de:["socratismo"], vecinas:[], rivales:["epicureismo"] },

  { id:"existencialismo", nombre:"Existencialismo", periodo:"s. XIX – s. XX", desde:1843, hasta:1980, trad:"europea",
    pregunta:"Si nada me dice de antemano quién soy, ¿qué hago con mi libertad?",
    lema:"La existencia precede a la esencia.",
    resumen:`El nombre se populariza en la Francia de la posguerra, en torno a Sartre y Beauvoir, pero sus raíces están un siglo antes en Kierkegaard: la verdad que importa no es la del sistema, sino la del individuo que tiene que elegir y hacerse cargo de su elección.

La idea central es que el ser humano no tiene una naturaleza fija que lo defina antes de vivir: primero existe y después se hace con lo que elige. De ahí la angustia (no hay excusa ni guion), la responsabilidad (al elegir, se elige también una imagen de lo humano) y la «mala fe», el intento de esconderse de la propia libertad detrás de un rol o una supuesta naturaleza.

No es una escuela homogénea: hay existencialismos cristianos (Kierkegaard, Gabriel Marcel) y ateos (Sartre, Beauvoir, Camus, aunque Camus rechazaba la etiqueta). Heidegger, de quien todos toman vocabulario, también la rechazó.`,
    tesis:[
      "No hay una naturaleza humana dada de antemano: cada persona se hace con lo que elige.",
      "La angustia no es una enfermedad sino la conciencia de que somos libres y no tenemos excusas.",
      "Hacerse pasar por una cosa determinada para no tener que elegir es engañarse a uno mismo.",
      "La verdad que importa es la que se vive en primera persona, no la que encaja en un sistema.",
      "Al elegir para mí, propongo también una imagen de lo que debe ser un ser humano."],
    autores:[
      {mod:"kierkegaard", rol:"Precursor: el individuo, la angustia y la elección frente al sistema hegeliano."},
      {mod:"nietzsche", rol:"Precursor: la muerte de Dios deja al ser humano sin valores dados."},
      {mod:"heidegger", rol:"Le da el vocabulario (existencia, angustia, autenticidad), aunque rechazó la etiqueta."},
      {mod:"sartre", rol:"La formulación clásica: existencia, libertad, mala fe y compromiso."},
      {mod:"beauvoir", rol:"La moral de la ambigüedad y la libertad situada: «no se nace mujer»."}],
    otros:["Albert Camus","Gabriel Marcel","Karl Jaspers","Miguel de Unamuno","Frantz Fanon"],
    conceptos:["existencia","angustia","libertad","mala fe","proyecto","situación","absurdo","compromiso"],
    noConfundir:"No es pesimismo ni gusto por la desesperación: Sartre lo presentó como «un humanismo». Y no es lo mismo que el nihilismo: parte de que no hay valores dados, pero sostiene que somos responsables de crearlos.",
    hoy:"Vive en la ética de la autenticidad, en la psicoterapia existencial (Viktor Frankl, Irvin Yalom) y en el feminismo y el pensamiento anticolonial que heredaron la idea de libertad situada.",
    de:["fenomenologia"], vecinas:["fenomenologia","nihilismo"], rivales:["marxismo"] }
];
