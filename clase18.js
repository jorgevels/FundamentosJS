//----------FILTRAR UN ARRAY---------

//Declaramos varios objetos con sus atributos
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

// -----VAMOS A FILTRAL A LAS PERSONAS ALTAS-----

// Para filtar simpre necesitamos dos cosas
// un array y una condicion y esa condicion-
// va hacer una funcionbundleRenderer.renderToStream

// Funcion esAlta para sacar la condicion de la altura-
//de una persona
//Esta condicion va ir recibiendo cada uno de los-
// elementos del array. FilTer va iterar por nosotros-
// el array y nos va ir pasando cada unos de los elementos

// Como solo tenemos un parametro no hacen falta-
// los parentesis.
// Como solo estamos retornando un solo valor no-
// hacen falta las llaves

// Desglosamos la persona y le indicamos el-
// valor al cual queremos acceder en este caso la altuta
const esAlta = ({ altura }) => altura > 1.8;

// Agrupamos los objetos en una array de personas

var personas = [sacha, alan, martin, dario, vicky, paula];

// En esta variable vamos a poner a las personas altas
// Sobre el array original vamos a ejecutar la funcion-
// filter example personas.filter()
// esta funcion filter como parametros lleva-
// una condicion, en este caso esAlta-
// y esta condicion tiene que ser una funcion
// esta funcion la llamamos mas arriba

// Tener encuenta que filter nos regresa un nuevo-
// array

var personasAltas = personas.filter(esAlta);

// ESTA seria otra forma de filtrar el array
// Por buenas practicas es mejor tener la condicion-
// por separado en ves de tener una funcion anonima

/* var personasAltas = personas.filter(function (persona) {
   return persona.altura > 1.8
 }) */

// En este console llamamos a la personasAltas
// y se las mostramos al usuario por consola
console.log(personasAltas);

// Pasamos por consola un mensaje con las personas-
// altas utilizando templates literales
console.log(`Son ${personasAltas.length} Las personas altas`);

//--------SOLUCION CHALLENGE---------

//Funcion esBaja para sacar la condicion de la altura-
//de una persona
//Esta condicion va ir recibiendo cada uno de los-
// elementos del array. FilTer va iterar por nosotros-
// el array y nos va ir pasando cada unos de los elementos

// Como solo tenemos un parametro no hacen falta-
// los parentesis.
// Como solo estamos retornando un solo valor no-
// hacen falta las llaves

// Desglosamos la persona y le indicamos el-
// valor al cual queremos acceder en este caso la altuta
const esBaja = ({ altura }) => altura < 1.8;

// Agrupamos los objetos en una array de personas
var personas = [sacha, alan, martin, dario, vicky, paula];

// En esta variable vamos a poner a las personas altas
// Sobre el array original vamos a ejecutar la funcion-
// filter example personas.filter()
// esta funcion filter como parametros lleva-
// una condicion, en este caso esAlta-
// y esta condicion tiene que ser una funcion
// esta funcion la llamamos mas arriba

// Tener encuenta que filter nos regresa un nuevo-
// array
var personasBajas = personas.filter(esBaja);

// En este console llamamos a la personasBajas
// y se las mostramos al usuario por consola
console.log(personasBajas);

// Pasamos por consola un mensaje con las personas-
// bajas utilizando templates literales
console.log(`Son ${personasBajas.length} las personas bajas`);
