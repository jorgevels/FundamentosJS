//------- MULTIPLES PROMESAS EN PARALELO----------

// Las promesas nos simplifican para escribir codigo-
// asincrono aunque todabia estamos llamando los requests-
// en serie en vez de paralelo, lo cual podriamos mejorar-
// haciendo que la performance de nuestro programa mejore mucho-

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

// Guardamos em un Array los id de los personajes que queremos-
var ids = [1, 2, 3, 4, 5, 6, 7];

// vamos a generar un nuevo array con multiples promesas-
// donde cada elemento del array sea una promesa
// la promesa de obtenerPersonaje con cierto id

// con el metodo .MAP de los arrays vamos a recorer el-
// array que declaramos y por cada uno de sus elementos-
// vamos a retormar un elemento nuevo que va ser una promesa-

// Estas promesas vamos aguardarlas en otra variable-
// de nombre promesas y la vamos a obtener desde ids.map-
// y al metodo map debemos pasarle una funcion que recibe-
// cada uno de los elementos del array en este caso un id-
// y tenemos que retornar un nuevo elemento para ese elemento

// Por cada elemento retornemos una promesa

// ------UTILIZANDO UNA FUNCTION-------
// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id)
// })

///--------------//------------------//------

// UTILIZANDO LAS ARRAOW FUNCTION
// 1. Lo primero es sacar la palabra function y agregar la flecha-
// 2. luego si tenemos un solo parametro los parentesis son-
//    opcionales
// 3. si la funcion lo unico que hace es un return podemos-
//    sacar las llaves y pasarlo a una misma linea

var promesas = ids.map(id => obtenerPersonaje(id));
// Para obtener el valor de estas promesas cuando se resuelvan-
// llamamos al metodo que tienen las promesas Promise.all-
// a este le tenemos que pasar un array de promesas justo-
// el que declaramos antes como promesas y este metodo-
// lo podemos encadenar devuelta con un .then

Promise.all(promesas)
  //En este .then vamos a tener un array con los valores-
  // que esperamos de cada una de las promesas y esperamos personajes-
  // y estos personajes los presentamos con un console

  .then(personajes => console.log(personajes))
  // si sucede algun error llamamos el .catch y pasarle-
  // la uncion que queremos que se ejecute en ete caso el onError
  // esta  se ejecuta si cualquiera de las promesas falla

  .catch(onError);

// Las PROMESAS tienen un gran potencial por sobre de-
// los callbacks, podemos encadenarlas en paralelo
