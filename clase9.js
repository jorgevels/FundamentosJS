//------ COMPARACIONES EN JAVASCRIPT ------

// Declaramos las variables x and y
// el  = igual sirve para asignar un valor
// a una variable

var x = 4,
  y = "4";

// Primera forma de comparar valores
// con  el operador "==" x==y true
// JS con el  operador == llevar dos valores a
// un mismo tipo de dato

// Para preguntar si x and y tienen el mismo valor
// y ademas tienen el mismo tipo de variable
// debemos utilizar el operador ===
// y === x false Nos arroja false porque-
// x es tipo numero and y es tipo string

// Comparacion de objetos
var Jorge = {
  nombre: "Jorge"
};

// Jorge == otrapersona nos arroja false
// lo que hace en este example es distinto al anterior
// donde estabamos comparando valores primitivos-
// numeros y letras.

// En este caso estamos comparando objetos
// cuando comparamos objetos en JS ya sea con == or ===
// estamos comparando es la referencia a la variable-ç
// que estamos utilizando
var otraPersona = {
  nombre: "Jorge"
};

// los valores de dos o mas objetos estan apuntando-
// a un diferente punto en memoria aunque-
// aunque sus valores sean iguales
