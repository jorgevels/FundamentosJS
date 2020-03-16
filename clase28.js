// -----------CALLBACKS-------------

// Que son los Callbacks
// Es una funcion que se va a ejecutar en-
// algun futuro y no sabemos cuando se va ejecutar-

// Como utilizarlos
// vamos aponer en practica todo lo de asincronismo
// vamos a utiliza una libreria de JQuery
// la vamos a utilizar para realizar reques-
// para obtener datos de una API externa

// copiamos en cdn de la libreria y la agregamos-
//al archivo html antes de importar la clase

// Realizar un reques para obtener datos

// Declaramos una constante API_URL y la-
// igualamos a la url de la API

const API_URL = "https://swapi.co/api/";

// Declaramos una segunda constante PEOPLE_URL
//para traer los datos de las persona y la igualamos a la url de la API
const PEOPLE_URL = "people/:id";

// Para hacer un reques con jquery utilizamos-
// debemos de llamar el signo de pesos $.get -
//este metodo nos permite hacer un reques y-
// acepta varios parametros
//utilizando los templates literales agregamos la constante  que declaramos para para la API-
// y pegado agregamos la constante que defininos para la url de PEOPLE
// Debemos de replazar los dos puntos por un id valido-
// llamamos al metodo que tienen todos los string .replace -
// y por parametros de decimos que valor queremos cambiar y por cual valor-
// le podemos poner un numero pero JS entiende que es un numero y lo transdorma a un string

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;

//Le indicamos a jquery que este requests lo vamos haecer a ora pagina
// que no es el archivo actual lo separamos con una-
//coma y llamamos un objeto y lo igualamos a true
//
const opts = { crossDomain: true };

//A esta funcion le pasamos como parametro persona
// Es una funcion que vamos a pasar por parametro
// y que se va a ejecutar una ves que termine la respuesta
const onPeopleResponse = function(persona) {
  // Y por console con le template literales
  // pasamos la persona.nombre
  // esta funcion se va a ejecutar si el reques-
  // es exitoso
  console.log(`Hola yo soy, ${persona.name}`);
};

// Callbacks
// y aqui le mandamos las opciones
// este pesos get es el encargado de llamar el callbacks
// cuando? en un futuro cuando se complere el reques
// tambien puede ocurrir que nunca se complete y la funcion nunca se llame
// Para organizar el codigo igualamos la funcion a una constante-
// y esta la agregamos como parametro
// de la funcion
$.get(lukeUrl, opts, onPeopleResponse);
