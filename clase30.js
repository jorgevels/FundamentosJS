//---MANEJANDO EL ORDEN Y EL ASINCRONISMO---

// En la clase anterior no sabiamos el orden-
// en que recibiamos los requests

// La unica forma de ricibir estas respustas-
// en orden es mantener el orden del codigo-
// a lo largo del programa

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

//Vamos hacer que esta funcion acepte un segundo-
// parametro que sea una funcion que vamos a-
// llamar calback tambien se le puede llamar cb o fn-
//
function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  // EL get termina ejecutando esta funcion-
  // que esta definida aqui
  $.get(url, opts, function(persona) {
    console.log(`Hola, yo soy ${persona.name}`);

    // Si nos envian un callback ejecutamos-
    // la funcion callback
    if (callback) {
      callback();
    }
  });
}
// pasamos un segundo parametro que es una funcion-
// anonima y lo que hace es que despues de obtener-
// el personaje uno, obtine el personaje dos-
// y continuar llamando mas personajes

// A esta practica se le conoce como callback Hell
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4, function() {
        obtenerPersonaje(5, function() {
          obtenerPersonaje(6, function() {
            obtenerPersonaje(7);
          });
        });
      });
    });
  });
});
