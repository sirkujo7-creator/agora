/* Ágora · datos base: tradiciones y contenedores que llenan los archivos de datos/modulos/. */

const LEVELS = {
  europea:  {label:"Europea",  tag:"Europea",  desc:"De los presocráticos a la fenomenología del siglo XX.", clr:"eu"},
  islamica: {label:"Mundo islámico", tag:"Mundo islámico", desc:"Filosofía en tierras del islam: la herencia griega repensada entre Bagdad, Bujará, Córdoba y El Cairo, también por pensadores judíos que escribían en árabe.", clr:"isl"},
  asiatica: {label:"Asiática", tag:"Asiática", desc:"Confucianismo, taoísmo, budismo y la Escuela de Kioto.", clr:"asia"},
  americana:{label:"Americana",tag:"Americana",desc:"Pragmatismo, filosofía latinoamericana y pensamiento afroamericano.", clr:"am"},
  africana: {label:"Africana", tag:"Africana", desc:"Filosofía africana contemporánea: consenso, comunidad y descolonización del pensamiento.", clr:"afr"},
  metodo:   {label:"Método",   tag:"Pensamiento crítico", desc:"Herramientas transversales: falacias y estructura del argumento.", clr:"me"}
};

/* Cada archivo de datos/modulos/ hace MODULES.push({...}) y LECTURAS.<id> = {...}. */
const MODULES = [];
const LECTURAS = {};
