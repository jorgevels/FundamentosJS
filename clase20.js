// ------- REDUCIR UN ARRAY A UN VALOR -------

// Reducir tiene la funcion de reducir un array-
// a un valor unico.
// Para el ejemplo se le agregaron la cantidad de libros-
// que tiene una persona

// Declaramos varios objetos con sus atributos
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182
};

const esAlta = ({ altura }) => altura > 1.8;

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

// persona.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

// ---FORMA DE RESOLVER CON UN CICLO FOR---
// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

//---SOLUCION CON EL REDUCER---

//Definimos la funcion reducer que recibe dos-
// parametros, en primer lugar recibe el acumulador-
// y en segundo va ir recibiendo cada uno de los-
// elementos en este cado la cantidad de libros-
// lo escribimos como arrow function y retornamos-
// el valor de acum que va ir siendo incrementado-
// por cada vez que se llame el reducer

// Como solo retornamos un valor no hace falta las-
// llaves y el return
// Desestruturamos la persona y solo llamamos el-
// valor que necesiamos en este caso la cantidaDeLibros
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

// Declaramos una variable y la igualamos a-
// personas.reduce y como parametros le pasamos-
// una el nombre de una funcion en este caso-
// reducer y el valor inicial del acumulador
var totalDeLibros = personas.reduce(reducer, 0);

// Por console le mostramos al usuario la cantidad-
// todal de libros.
console.log(`En total todos tienen ${totalDeLibros} libros`);
