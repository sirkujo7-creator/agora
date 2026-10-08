# Ágora

Fichas, lecturas, juegos y exámenes de filosofía de tres tradiciones (europea, asiática y americana) más un taller de falacias.

## Cómo abrirla

Doble clic en `index.html`. Funciona sin internet (solo las tipografías necesitan conexión; sin ella se usan las del sistema). El progreso se guarda en el navegador con el que la abras.

## Cómo está organizada

- `index.html`: la página.
- `estilos/agora.css`: el diseño.
- `datos/modulos/`: una carpeta por tradición y un archivo por filósofo. Todo lo de una ficha (conceptos, obras, diálogo, ejercicios y lecturas) está en su archivo.
- `datos/transversal.js`: lo que cruza fichas (Constelaciones, términos que cambian de sentido).
- `app/agora.js`: el funcionamiento de la app.
- `herramientas/`: revisar los datos (`verificar.js`) y armar la versión de un solo archivo (`empaquetar.js`). Las dos se corren con Node.

## Trabajar con Claude Code

Abrí esta carpeta en Claude Code. El archivo `CLAUDE.md` le explica el proyecto, las reglas y lo que falta, así que podés pedir directamente cosas como "agregá los ejercicios avanzados de Nagarjuna" sin repetir el contexto.

Conviene inicializar git en la carpeta (Claude Code puede hacerlo) para tener historial de versiones.
