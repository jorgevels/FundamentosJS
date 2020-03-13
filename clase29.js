//------HACIENDO MULTIPLES REQUESTS------

// Realizar un reques para obtener datos

// Declaramos una constante API_URL y la-
// igualamos a la url de la API
const API_URL = "https://swapi.co/api/";

// Declaramos una segunda constante PEOPLE_URL
//para traer los datos de las persona y la igualamos a la url de la API
const PEOPLE_URL = "people/:id";

//Le indicamos a jquery que este requests lo vamos haecer a ora pagina
// que no es el archivo actual lo separamos con una-
//coma y llamamos un objeto y lo igualamos a true
const opts = { crossDomain: true };

//A esta funcion le pasamos como parametro persona
// Es una funcion que vamos a pasar por parametro
// y que se va a ejecutar una ves que termine la respuesta
const onPeopleResponse = function(persona) {
  console.log(`Hola, yo soy ${persona.name}`);
};

// Creamos una funcion obtener persona apartir-
// de un id, y le pasamos el id por parametro
function obtenerPersonaje(id) {
  // definimos una url en base a la que teniamos antes
  // remplazamos el numero del id por el id que-
  // nos viene por parametro
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  // Hacemos el requests a la url que acabamos de crear
  // y cuando termine vamos a ejecutar este callback
  $.get(url, opts, onPeopleResponse);
}

// para llamar la funcion
// nombramos la funcion y como parametro-
// agregamos cualquie numero y funciona para-
// cualquier id

// Los personaje que estamos llamando con su id-
// no llegan en ese orden por el asincronismo que maneja JS
// Nunca sabemos que orden nos van llegar las respuestas
// Esto depende del servidor y de cuanto tarde en-
// reponder cada uno de los requests

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(30);

// Declaramos un ciclo for
// donde i sera menor que 50
for (var i = 0; i < 50; i++) {
  // al llamar en el cuerpo del ciclo for-
  // la funcion obtenerPersonaje y como parametro-
  // le pasamos el valor de i, este ciclo-
  // se va repetir 50 veces y llamara 50 personajes
  obtenerPersonaje(i);
}
