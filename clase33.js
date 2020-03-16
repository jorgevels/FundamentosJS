// ---------- PROMESAS ENCADENADAS -------------

// Encadenar promesas como lo haciamos antes con Callback
// pero esta vez con un codigo mas legible
// si en cualquiera de las promesas ocurre algun error el-
// .catch es el mismo para todos las promesas

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

obtenerPersonaje(1)
  // En el .then definos una arrow function
  .then(personaje1 => {
    // y por console presentamos el personaje que nos trae
    console.log(`El personaje 1 es ${personaje1.name}`);
    // al resolver esta promesa al obtener el valor del personaje-
    // vamos a retornar otra promesa, para obtener el personaje 2-
    // y de la misma forma hasta el personaje que querramos-

    // para obtener una nueva promesa  hacemos el return-
    // obtener el personaje llamado con el id 2
    return obtenerPersonaje(2);
  })
  // De esta forma seguimos encadenando y con el metodo .then-
  // la siguente promesa
  // podemos seguir encadenando muchas promesas
  .then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`);
    return obtenerPersonaje(3);
  })
  .then(personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`);
    return obtenerPersonaje(4);
  })
  .then(personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`);
    return obtenerPersonaje(5);
  })
  .then(personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`);
    return obtenerPersonaje(6);
  })
  .then(personaje6 => {
    console.log(`El personaje 6 es ${personaje6.name}`);
    return obtenerPersonaje(7);
  })
  .then(personaje7 => {
    console.log(`El personaje 7 es ${personaje7.name}`);
  })
  .catch(onError);

// Estos requests se estan haciando en serie-
// no se estan haciendo en paralelo
