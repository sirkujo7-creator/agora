# Encargo: reescribir una ficha existente con los criterios de Juan (octubre de 2026)

Ágora (/home/user/agora/Agora) es una app de estudio de filosofía; la usa Juan, docente en Ibagué, para un
estudio LINEAL, autor por autor. Leé /home/user/agora/Agora/CLAUDE.md («Criterios de contenido»). Voseo
rioplatense al hablarle al estudiante. No inventes citas ni posiciones; si un dato es incierto, no lo pongas.

## Qué pidió Juan (respetalo al pie de la letra)
- **Conceptos**: cada uno tiene que ser un CONCEPTO (p. ej. «Arché», «Physis», «Ápeiron»), con título breve
  (1-4 palabras) y una explicación clara de 70-130 palabras. NO títulos-frase largos, NO obras ni
  características disfrazadas de concepto («La justicia del cosmos: ¿qué dice el último fragmento…?»).
  Entre 6 y 9 conceptos, los indispensables. Nada de repetir lo que ya está en Vida y contexto.
- **Obras**: títulos de obras REALES: las más importantes escritas por el autor (p. ej. Así habló Zaratustra);
  si el autor no escribió o no se conserva nada (Tales), las fuentes que lo mencionan y le dan vida
  (p. ej. «Aristóteles, Metafísica I 3»). Nada de títulos inventados tipo «Lo que escribieron y lo que no».
  Cada obra: `{t, d, frag, fuente}` — `d` (60-110 palabras) dice de qué trata y por qué importa; `frag` es UN
  postulado o fragmento de impacto (literal y breve si es de dominio público o una cita muy conocida de la
  que estés seguro; si no, una formulación del postulado central, sin comillas de cita) y `fuente` su
  referencia (p. ej. «Metafísica I 3, 983b»). 3-5 obras. No repitas lo que dicen Lecturas ni Vida.
- **Diagrama**: UNO solo, que tenga sentido como ejercicio («Completá»): orden real (secuencia, ciclo,
  niveles, capas), polos con contraste real, o partes (en partes, cada hueco muestra la explicación como
  pista: que las explicaciones sean distinguibles).
- **Diálogo**: el existente se deja TAL CUAL. Escribí un SEGUNDO diálogo (8-12 líneas) con aplicación a la
  vida real (contexto colombiano/estudiantes de 16-20 años), con objeciones fuertes; el autor solo dice lo
  que sostuvo (lo abierto lo plantea el estudiante). Va en `dialogos:[{titulo, lineas:[{quien, texto, nota?}]}]`.
- **Preguntas** (`cuestionario`): 4-5 preguntas; cada respuesta modelo (`p`) se centra en 1-2 ideas
  relevantes (90-160 palabras), sin listas de todo lo posible ni obviedades. `claves`: 2-3 ideas por
  pregunta, solo las relevantes.
- **Repaso** (`repaso`, nuevo): 8 preguntas de opción múltiple SOLO sobre este autor, complejas (aplicar a un
  caso, distinguir su postura de una lectura errónea, interpretar un fragmento, reconocer un supuesto).
  Forma: `{situacion?, pregunta, opciones:[4], correcta:<0-3>, explicacion}`. Enunciados limpios, sin
  huecos; distractores plausibles pero inequívocamente incorrectos para quien estudió la ficha; ninguna
  opción menciona a otros autores. La explicación nombra las opciones por su contenido, nunca por posición.
- Se eliminan de la ficha: `cadena` y `actividades` (no los incluyas). Se mantienen tal cual: tesis,
  conexion, dialogo, reconstruccion, dilemas y LECTURAS (podés corregir errores evidentes, nada más).
  Excepción obligatoria en el diálogo existente: si el autor dice algo que no sostuvo (un adagio posterior,
  un rótulo que no usó, una tesis de intérpretes modernos) o comenta a alguien posterior como si lo hubiera
  conocido, corregí SOLO esa frase para que diga lo que él sostuvo, y avisalo en tus dudas.
- Agregá `rev: 2` al objeto de la ficha (borra el progreso viejo de esa ficha, porque cambian los índices).

## Qué entregar
1. La ficha completa reescrita (mismo formato de archivo: `MODULES.push({...}); LECTURAS.<id> = {...};`) en la
   ruta indicada.
2. Un JSON con: `terminos` (uno por concepto nuevo, `{k, tapar}` o `{q}`), `claves`, `diagramas` (arreglo con
   UN diagrama), `repaso` (las 8), y `examen: {}` (vacío). No incluyas `vida` ni `textos` (se conservan).
3. Comprobá: `cd /home/user/agora/Agora && node herramientas/fichas/checkficha.js <id> <ficha> <json> rees`
   (modo de reescritura) — tiene que decir OK, salvo el
   aviso de vida/examen si lo diera: decímelo.
No toques archivos del repo. Respondé "ok", qué cambiaste y tus dudas.
