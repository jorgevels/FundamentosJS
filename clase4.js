// Las funciones son trosos de codigo-
//reutilizables

// Declaramos las variables
var nombre = "Jorge",
  edad = 38;

// Para definir una funcion utilizamos-
//la palabra reservada function
// es una palabra reservada del lenguaje
// le pasamos el nombre de la funcion
// entre parentisis van los parametros
// para delimitar el cuerpo de la funcion utilizamos las llaves {}
// para que la funcion tenga cobre mayor valor
// le pasamos dos parametros para que reciba
//
function imprimirEdad(n, e) {
  // este es el cuerpo de la funcion
  // este es el codigo reutilizable
  // pasamos por consola los nombre de las variables
  /* console.log(`${nombre} tiene ${edad} años`); */
  // le pasamos los valores de los parametros
  console.log(`${n} tiene ${e} años`);
}

// llamamos la funcion y le pasamos los nombre de las variabless
// De esta manera estamos reutilizando el codigo de la funcion
imprimirEdad(nombre, edad);

imprimirEdad("Vicky", 28);
imprimirEdad("Eric", 24);
imprimirEdad("Darío", 27);

// Para JS es indistinto si le cambiamos el orden de como llamamos las variables
imprimirEdad(25, "Carlos");
// Si no le pasamos una variable
// imprime el codigo y muestra un resultado como undefine
imprimirEdad("Juan");
