// Declaramos las variables
var nombre = "Jorge",
  apellido = "Velasquez";
//Pasar de minusculas a mayusculas

// al valor de nombre invocamos una funcion
var nombreEnMayusculas = nombre.toUpperCase();
// pasar apellido a minusculas
var apellidoEnMinusculas = apellido.toLowerCase();
// Saber el primer caracter de un String
var primeraLetraDelNombre = nombre.charAt(0);
// conocer cuantos caracteres tiene el nombre
// llamamos el atributo .length como es un atributo no lleva los parentecis
var cantidadDeLetrasDelNombre = nombre.length;
//Concatenar dos string de forma mas clara
// se llama interpolacion de textos con comillas invertidas
// llamamos codigo js
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
// Podemos acceder a un substring con esta funcion
// le decimos desde donde y cuantos caracteres queremos que tome
var str = apellido.substr(0, 5);

var ultimaletraNombre = nombre.charAt(4);
// Solcion desafio. ultima letra de mi nombre
var ultimaletraNombres = nombre.charAt(nombre.length - 1);
