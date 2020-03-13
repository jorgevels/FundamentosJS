// -----PROMESAS------

// Con los callback el codigo se vuelve ilegible
// para solucionar este problema surgen las promesas
// ahora la mayoria de los browser soportan las promesas
// para asegurar que las promesas se corren sin-
// problema podemos uns un polyfie que detecta si el-
// navegador no soporta las promesas

// QUE SON LAS PROMESAS
// Son valores que aun no conocemos, la promesa-
// de que ahi va haber un valor que se va resolver-
// con una accion asincrona

// LAS PROMESAS TIENEN TRES ESTADOS
// una promesa inicia en un estado de pending
// si la promesa se resuelve a pasar al estado-
// de fulfilled
// si la promesa tiene un error pasa al estado-
// de reject

// Las promesas funcionan de manera asincrona-
// pero tambien se pueden resolcer sincronas

// Para obtener el valor de respuesta de la promesa-
// podemos llamar a la funcion .then y ahi-
// le vamos a pasar como parametro otra funcion
// que recibe la respuesta que estabamos esperando

// si la promesa tiene un erro entra a un .catch-
// y ahi le pasamos otra funcion que recive como-
// parametro el error que sucedio

// Las promesas reciben una funcion que esta a su vez-
// recibe dos parametros resolve y reject-
// estas dos las devemos de llamar en caso de-
// la promesa se resuelva o presente error

//  Las promesas podemos seguir encadenandolas en-
// acciones asincronas y cada una de ellas puede-
// ser rechazada o resuelta en una nueva promesa

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

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then(function(personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
  })
  .catch(onError);
