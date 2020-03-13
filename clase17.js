//----- INTRODUCCION A LOS ARRAYS-----

// Tambien conosidos como arreglos, estas-
// estructuras de datos nos van a permitir-
// agrupar sierto tipo de datos numeros, letras, string o funciones-
// dentro de una coleccion y luego vamos a poder-
// realizar ciertas operaciones con esta coleccion

// En esta clase vamos ha aprender a crear una coleccion-
// y a iterar con cada uno de los elementos que existan en la misma

// Tenemos varios objetos con sus atributos
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

// Si quisieramos agrupar a todas estas personas-
// en una misma coleccion podriamos guardarlas-
// dentro de una variable llamada personas.
// Para indicar que esto es un array vamos a utilizar-
// el simbolo de corchetes [] y dentro de estos-
// vamos a ir agregando cada una las variables-
// que queremos que contenga el array

// En un array se pueden mezclar variables, objetos de funciones
// Para acceder a cada unos de los atributos de los elementos-
// dentro de un array podemos llamar el nombre del array-
// example personas[1].altuta or personas.[1]['altura]-
// estas dos formas son equivalentes y nos regresan la altura de la persona en la posicion 1

//Pero cuando estamos hablando de colecciones si-
// vamos a referenciar al subindice para acceser-
// a cada unos de los elementos

var personas = [sacha, alan, martin, dario, vicky, paula];

// Para recorrer un array utilizamos el ciclo for
// inicializamos nuestro contador en cero
// que valla hasta la cantidad de personas que hallan-
// con personas.length y cada ciclo vamos a incrementar la varible i

for (var i = 0; i < personas.length; i++) {
  // declaramos una variable persona y la-
  // igualamos a personas[i]
  var persona = personas[i];
  // queremos que nos diga la altura de una persona
  // con un console llamamos a personas y accedemos-
  // al indice [i] y le decimos persona.nombre persona.altua-
  // o el valor que querramos traer

  // De esta manera aprendimos a crear array y a iterarlos
  // pasar por cada uno de sus elementos

  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

// Utilizamos varias cosas de las que hemos visto-
// utilizamos .length los array tienen esta propiedad-
// como los string que nos indica cuantos elementos tiene el array
// luego los fuimos guardando por cada vez que lo ejecutamos-
// cada una de las personas utilizando el indice[i]-
// que estamos utilizando en el for para acceder a cada una de las personas

// De esta forma le preguntamos a el array-
// personas cuantos elementos tiene
console.log(`Este arreglo tiene ${personas.length} objetos`);
