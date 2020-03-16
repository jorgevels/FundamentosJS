//------LOS CLOSURES DE JAVASCRIPT--------

// Los cluseres son uno de los conceptos mas -
// importantes de JS Entenderlos va hacer que-
// domines el lenguaje de otra manera

// QUE ES UN CLUSERS?
// Es una funcion que recuerda el estado de las-
// cosas cuando fue invocada

// Definimos una funcion que va crear saludos
// por parametros le pasamos un finalDeFrase
// vamos a crear saludos para difentes paises
function crearSaludo(finalDeFrase) {
  // Retormanos otra funccion que por parametro-
  // recibe un nombre como parametro
  // podemos decir que la primera funcion va hacer-
  // una funcion como creadora o generadora de-
  // otras funciones
  // esta funcion es una funcion anonima
  return function(nombre) {
    // Completams la funcion interna
    // pasando un console con los templates literales
    // interpolamos el parametro nombre de la-
    // funcion anominal y el parametro finalDeFrase-
    // de la funcion crearSaludo
    console.log(`Hola ${nombre} ${finalDeFrase}`);
  };
}

// llamamos la funcion saludoArgentino la igualamos-
// a la funcion crearSaludo y el final de frase va hacer che
const saludoArgentino = crearSaludo("che");

// llamamos la funcion saludoMexicano la igualamos-
// a la funcion crearSaludo y el final de frase va hacer guey
const saludoMexicano = crearSaludo("güey");

// llamamos la funcion saludoColombiano la igualamos-
// a la funcion crearSaludo y el final de frase va hacer amigo
const saludoColombiano = crearSaludo("amigo");

// Para crear saludo le estamos enviando el final de la frase
// y cada una de estas funciones esta recordando-
// cual era la variable que se le envio cuando se-
// invoco la funcion crearSaludo

// Llamamos la constante saludo artentino
// pasandole el noombre sacha y este retornara Hola Jorge che

saludoArgentino("Jorge"); // Hola Jorge che
// Llamamos la constante saludo artentino
// pasandole el noombre sacha y este retornara Hola Jorge guey
saludoMexicano("Jorge"); // Hola Jorge güey
// Llamamos la constante saludo mexicano
// pasandole el noombre sacha y este retornara Hola Jorge amigo
saludoColombiano("Jorge"); // Hola Jorge amigo
