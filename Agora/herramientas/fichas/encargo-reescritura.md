# Encargo: reescribir una ficha existente (criterios de Juan, octubre de 2026)

Ágora (/home/user/agora/Agora) es una app de estudio de filosofía que Juan, docente en Ibagué, usa para un
estudio LINEAL, autor por autor. Este encargo se basta solo: **no leas CLAUDE.md** ni otros archivos fuera
de los que se nombran acá. Escribí SOLO lo nuevo; un script lo une a la ficha vieja.

## Qué leer (nada más)
1. La ficha actual: `datos/modulos/<trad>/<id>.js` (solo la parte de MODULES.push; LECTURAS no hace falta,
   salvo que necesites ver de qué tratan las lecturas para no repetirlas: basta con los títulos).
2. Como modelo de tono y nivel: en `datos/modulos/europea/tales.js`, los campos `obras`, `conceptos`,
   `dialogos` y `cuestionario` (líneas 10-61), y la entrada `tales` de `datos/repaso.js` (las primeras 2-3).

## Criterios de contenido (obligatorios)
- Voseo rioplatense al hablarle al estudiante. Precisión: no inventes citas, posiciones ni números de pasaje;
  si no estás seguro de una referencia, describí el pasaje en vez de inventarla.
- No atribuyas al autor rótulos o tesis que no usó sin decir que son posteriores.
- Controversias (políticas, morales) con sobriedad: ni limpiarlas ni regodearse.
- Opción múltiple: los distractores tienen que ser plausibles pero inequívocamente incorrectos para quien
  estudió la ficha; ninguna opción menciona a otros autores; la explicación nombra las opciones por su
  contenido, nunca por su posición («la primera…»).

## Qué escribir
- **Conceptos** (6-9): cada uno un CONCEPTO (p. ej. «Arché», «Physis»), título de 1-4 palabras, explicación
  `d` de 70-130 palabras. NO títulos-frase, NO obras ni características disfrazadas de concepto. Sin repetir
  lo que ya cuenta Vida y contexto (biografía).
- **Obras** (3-5): títulos REALES: las más importantes escritas por el autor; si no escribió o no se conserva
  nada, las fuentes que lo mencionan (p. ej. «Aristóteles, Metafísica I 3»). `{t, d, frag, fuente}`: `d`
  (60-110 palabras) dice de qué trata y por qué importa; `frag` es UN postulado o fragmento de impacto (literal
  y breve si es de dominio público o una cita muy conocida de la que estés seguro; si no, una formulación del
  postulado, sin comillas); `fuente`, su referencia.
- **Diagrama**: UNO, con sentido como ejercicio «Completá» (se tapan las etiquetas y hay que ubicarlas): orden
  real (secuencia, ciclo, niveles, capas), polos con contraste real, o partes (en partes, cada hueco muestra la
  explicación como pista: que sean distinguibles). Forma: `{tipo, titulo, intro, nodos, centro?, eje?, polos?, ejes?, nota?}`.
  Tipos y piezas: ciclo/partes/niveles/secuencia 3-6 nodos `{t, d}`; partes lleva `centro`; niveles de arriba
  abajo, `eje` opcional; polos 2-5 nodos `{a, b, d}` y `polos:{izq, der}`; cuadrantes 4 nodos y `ejes:{x:[izq,der], y:[abajo,arriba]}`;
  capas 2-4 del centro hacia afuera. Etiquetas ≤ 44 caracteres y distintas. Si el orden es interpretación, va en `nota`.
- **Segundo diálogo** (8-12 líneas, `{titulo, lineas:[{quien, texto, nota?}]}`): aplicación a la vida real
  (Colombia, estudiantes de 16-20 años), objeciones fuertes. El autor solo dice lo que sostuvo (con `nota`
  de dónde sale cuando ayude); lo abierto lo plantea el estudiante.
- **Preguntas** (`cuestionario`, 4-5, `{q, p}`): cada respuesta modelo se centra en 1-2 ideas relevantes
  (90-160 palabras), sin listas de todo lo posible ni obviedades. `claves`: 2-3 ideas por pregunta.
- **Repaso** (8, opción múltiple SOLO sobre este autor, complejas: aplicar a un caso, distinguir su postura de
  una lectura errónea, interpretar un fragmento, reconocer un supuesto): `{situacion?, pregunta, opciones:[4], correcta:0-3, explicacion}`.
  Enunciados limpios, sin huecos; reparte la correcta entre posiciones.
- **Términos** (uno por concepto, mismo orden): `{k, tapar}` si el término `k` aparece tal cual en la `d`
  del concepto (`tapar`: otras expresiones de la `d` que delatarían la respuesta, incluidas las palabras que
  contienen `k` sin tildes: «virtù» → tapar «virtud»), o `{q:"¿…?"}` si no.
- **Correcciones del diálogo existente** (obligatorias si hacen falta): si en el `dialogo` viejo el autor dice
  algo que no sostuvo (adagio posterior, rótulo que no usó, tesis de intérpretes modernos) o comenta a alguien
  posterior como si lo hubiera conocido, corregí SOLO esa frase. También errores evidentes en tesis/conexion.
  El resto de la ficha (tesis, conexion, dialogo, reconstruccion, dilemas, LECTURAS) no se toca.

## Qué entregar: UN archivo JSON
`<scratchpad>/rees/nueva-<id>.json` con esta forma:
```
{ "monograma": "<el actual>", "epoca": <el actual>,
  "ficha": { "obras":[…], "conceptos":[…], "dialogos":[{…}], "cuestionario":[…] },
  "correcciones": [ {"buscar":"<texto exacto de la ficha vieja, una sola aparición>", "poner":"<nuevo>"} ],
  "terminos":[…], "claves":[…], "diagramas":[{…}], "repaso":[…], "examen":{} }
```
(`monograma` y `epoca` están en `app/agora.js` → `MONOGRAMA` y `datos/transversal.js` → `EPOCA`: buscalos con grep.)

Comprobá desde `/home/user/agora/Agora`:
```
node herramientas/fichas/unir-rees.js <id> <scratchpad>/rees/nueva-<id>.json <scratchpad>/rees/<id>.js
node herramientas/fichas/checkficha.js <id> <scratchpad>/rees/<id>.js <scratchpad>/rees/nueva-<id>.json rees
```
Tiene que decir OK. No toques archivos del repo. Respondé breve (máx. 120 palabras): "ok", lo principal,
correcciones hechas al diálogo y dudas.
