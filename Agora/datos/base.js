/* Ágora · datos base: tradiciones y contenedores que llenan los archivos de datos/modulos/. */

const LEVELS = {
  europea:  {label:"Europea",  tag:"Europea",  desc:"De los presocráticos a la fenomenología del siglo XX.", clr:"eu"},
  asiatica: {label:"Asiática", tag:"Asiática", desc:"Confucianismo, taoísmo, budismo y la Escuela de Kioto.", clr:"asia"},
  americana:{label:"Americana",tag:"Americana",desc:"Pragmatismo, filosofía latinoamericana y pensamiento afroamericano.", clr:"am"},
  metodo:   {label:"Método",   tag:"Pensamiento crítico", desc:"Herramientas transversales: falacias y estructura del argumento.", clr:"me"}
};

/* Cada archivo de datos/modulos/ hace MODULES.push({...}) y LECTURAS.<id> = {...}. */
const MODULES = [];
const LECTURAS = {};
