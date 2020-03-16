// ---MANEJO DE ERRORES CON CALLBACKS

// Vamos a solucionar el error si a la mitad-
// de uno de los requests nos quedamos sin internet

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  // Refactorizando
  // llamamos al collback para que nos venga por parametro

  // Podemos encadenar al metodo fail para-
  // controlar cuando se presente un error
  $.get(url, opts, callback).fail(() => {
    // Por console le pasamos el mensaje de
    //error al obtener el personaje con el id
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
  });
}

// Agregamos los console a cada llamado del callback
// lo aplicamos para cada uno los demas callback

// Al obetener el persona 1 le pasamos como-
// parametro este collback
obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);

      obtenerPersonaje(4, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);

        obtenerPersonaje(5, function(personaje) {
          console.log(`Hola, yo soy ${personaje.name}`);

          obtenerPersonaje(6, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);

            obtenerPersonaje(7, function(personaje) {
              console.log(`Hola, yo soy ${personaje.name}`);
            });
          });
        });
      });
    });
  });
});
