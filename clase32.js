// -----------PROMESAS------------

// Con los callback el codigo se vuelve ilegible
// para solucionar este problema surgen las PROMESAS
// ahora la mayoria de los browser soportan las promesas
// para asegurar que las promesas se corren sin-
// problema podemos uns un polyfie que detecta si el-
// navegador no soporta las promesas

// QUE SON LAS PROMESAS?
// Son valores que aun no conocemos, la promesa-
// de que ahi va haber un valor que se va resolver-
// con una accion asincrona

// LAS PROMESAS TIENEN TRES ESTADOS
// ✔ una promesa inicia en un estado de pending
// si la promesa se resuelve va pasar al estado-
// de fulfilled
// ✔si la promesa tiene un error pasa al estado-
// de reject

// ✔Las promesas funcionan de manera asincrona-
// pero tambien se pueden resolcer sincronas

// Para obtener el valor de la respuesta de la promesa-
// podemos llamar a la funcion .then y ahi-
// le vamos a pasar como parametro otra funcion
// que recibe la respuesta que estabamos esperando

// asi creamos una promesa  new Promise como cualquier-
// otro objeto de JS
// si la promesa tiene un error entra a un .catch-
// y ahi le pasamos otra funcion que recive como-
// parametro el error que sucedio

// Las promesas reciben una funcion que esta a su vez-
// recibe dos parametros resolve y reject-
// estas dos las devemos de llamar en caso de-
// la promesa se resuelva o presente error

//  Las promesas podemos seguir encadenandolas en-
// acciones asincronas y cada una de ellas puede-
// ser rechazada o resuelta en una nueva promesa

///-------------------//---------------------//------

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

//Funcion que retorna una nueva promesa
// como parametro le pasamos el id del personaje

function obtenerPersonaje(id) {
  // Y esta funcion retorna una promesa
  // en el constructor de la promesa le pasamos como-
  // parametros resolve y reject

  return new Promise((resolve, reject) => {
    // Dentro de esta arrow function hacemos el llamado-
    // asincrono
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    // Seguimos utilizando jquery
    // pero esta vez ya no le pasamos el callback-
    // y le pasamos una function y por parametro le pasamos-
    // la data que nos llegue
    $.get(url, opts, function(data) {
      // Con la data que nos llegue resolvemos la promesa-
      // y cuando  esta funcion se ejecute llamamos-
      // el resolve pasandole la data, es decir el personaje

      // Esta funcion resolve no se va llamar hasta que-
      // la funcion que esta dentro del get se ejecute-
      // es decir hasta que el get sea exitoso
      resolve(data);

      // luego le pasamos el fail para manejar el error-
      // y lo unico que hacemos es rechazar la promesa-
      // pasandole el id que hibamos a obtener el id del personaje
    }).fail(() => reject(id));
  });
}

// Funcion para controlar el error del .catch-
// por parametro le pasamos el id del personaje

function onError(id) {
  // Por consolamos pasamos el mensaje del error
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// Llamamos la funcion obetenerPersonaje pasandole el id que nos intereza-
// no hay un segundo parametro
obtenerPersonaje(50)
  // la forma de obtener el valor que esperamos de una promesa-
  // es llamando al .then
  // de esta manera al .then le pasamos una funcion que-
  // se va a ejecutar cuando la promesa se resulva exitosamente-
  // y a esta funcion por parametro le pasamos el personaje

  .then(function(personaje, id) {
    // Y con el personaje lo presentamos con un console-
    // utilizando los templates literales
    console.log(`El personaje 50 es ${personaje.name}`);
  })
  // Si sucede algun error utilizamos la funcion .catch-
  // que le tenemos que pasar otra funcion que definamos-
  //con anterioridad
  .catch(onError);
