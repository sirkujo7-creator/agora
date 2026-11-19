# Fronteras históricas de la sección «Mapas»

Cada archivo `<año>.js` trae la división política del mundo hacia ese año (años negativos: a. C.).
Se cargan solos, cuando el mapa llega a esa época (`mapaCargarFronteras` en `app/mapas.js`), también
desde `file://`, porque son scripts clásicos que llaman a `mapaFronterasCargadas(año, lista)`.

Cada entidad es `[nombre en inglés, x, y de la etiqueta, área, precisión del borde (1 aproximada, 2 media,
3 precisa), trazado SVG]`, ya proyectada como el mapa base (x = longitud · 0.88, y = −latitud) y simplificada.
Los nombres en español y si es un Estado («e») o un pueblo sin Estado («p») están en `nombres.js`.

**Fuente y licencia.** Los datos vienen de *historical-basemaps*, de André Ourednik y colaboradores
(https://github.com/aourednik/historical-basemaps), bajo licencia **GPL-3.0**. Por usarlos, Ágora también
se distribuye bajo GPL-3.0 (ver `LICENSE` en la raíz del repositorio), decisión de Juan en noviembre de 2026.
Las fronteras antiguas son aproximadas: el propio conjunto de datos marca la precisión de cada borde.

Para regenerarlos: descargar los `world_*.geojson` del repositorio original y correr
`herramientas/fronteras.js <carpeta de geojson> <carpeta de salida>`.
