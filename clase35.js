// -------------ASYNC-AWAIT------------

// ------Lo ultimo de asincronismo-----

// Esta es forma de realizar tareas asincronas-
// en JS y es la menera mas sencilla y clara

// Esta forma incluye algunas palbras claves del lenguaje

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

// Creamos una function que se llame obtenerPersonajes-
// que dentro de las llaves va a realizar todo el codigo-
// que vimos en la clase anterior y la incocamos en la parte inferior

// Agregamos la palabra async antes de function
async function obtenerPersonajes() {
  // Guardamos em un Array los id de los personajes que queremos-
  var ids = [1, 2, 3, 4, 5, 6, 7];

  // vamos a generar un nuevo array con multiples promesas-
  // donde cada elemento del array sea una promesa
  // la promesa de obtenerPersonaje con cierto id
  var promesas = ids.map(id => obtenerPersonaje(id));

  try {
    // En la varible personajes le vamos asignar-
    // el valor de una tarea asincrona y al metodo-
    // Promise.all le pasamos como parametos el nuevo-
    // array promesas.
    // cuando todas la promesas se resulvan guardame los-
    // en la variable personajes
    // para hacerlo debemos utilizar la palabra await-
    // con el await detenemos la ejecucion de nuestro codigo en esta parte-
    // hasta que toda las demas promesas sean resueltas
    // y las guarda en la variable personajes
    // para poder utilizar await la funcion debemos marcarla-
    // como asincrona antes del function

    // Toda la parde asincrona debemos ponerla dentro de-
    // un bloque try, y dentro de las llaves del .chatch llamamos-
    // la funcion onError con el parametro id
    var personajes = await Promise.all(promesas);
    // Por console presentamos los personajes
    console.log(personajes);
    // En el catch en vez del error agregamos el id
  } catch (id) {
    onError(id);
  }
}

// EN esta parte invocamos la funcion
obtenerPersonajes();

// El async await nos clarifica mucho mas el codigo
// mucho mas ordenado
// Algunos navegadores no lo soportan y en estos caso debemos utilizar un polifey
