//--- ESTRUCTURAS REPETITIVAS <WHILE> -------

// en la clase anterios vimos la estructura for-
// es la mas basica, es la que va repetir cierta-
// cantidad de veces cierto codigobundleRenderer.renderToStream

// WHILE es un poco mas avanzada, nos va permitir-
// repetir cierto codigo hasta que se cumpla cierta-
// condision

// Declaramos el objeto persona con sus atributos
var persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28,
  peso: 75
};

// Mostramos por console su peso original-
// al inicio del año
// lo pasamos con teplates literales
console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

// Estructura similar a los ARROW FUNCTION
/* function aumentarDePeso (persona) {
   return persona.peso += 200
 } */

// ---SIMULAMOS EL AUMENTO DE PESO----

// Definimos una constante para el incremento
const INCREMENTO_PESO = 0.3;
// Definimos una constante con los dias del año
const DIAS_DEL_ANO = 365;

// Definimos una funcion para el aumento de peso
// le pasamos los parametros entre parentesis que va-
// a recibir una persona y un incremento
// persona.peso += lo que le pasemos de incremento
// como solo esta haciendo una cosa podemos omitir las llaves
const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);

// Definimos una funcion para el bajo de peso
// le pasamos los parametros entre parentesis que va-
// a recibir una persona y una disminucion de peso
// persona.peso += lo que le pasemos de incremento
// como solo esta haciendo una cosa podemos omitir las llaves
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

// Definimos una funcion come mucho
// no recibe parametros, solo nos devuelve-
// del modulo math math.random
// donde le decimos con un valor random que el
// 30% de los dias come mucho
// definimos la funcion .random y la invocamos()
// una funcion se invoca con doble parentesis
const comeMucho = () => Math.random() < 0.3;

// Definimos una funcion de realiza deporte
// esta no recibe parametros, solo nos devulve del-
// modulo math.random, donde le decimos con un valor-
// random que practica deporte el 40% del año
// definimos la funcion .random y la invocamos()
// una funcion se invoca con doble parentesis
const realizaDeporte = () => Math.random() < 0.4;

// Declaramos una constante META la cual indica-
// el objetivo de peso de esa persona al que tiene que llegar
// le pasamos el objeto persona seguido del peso-
// que debe bajar
const META = persona.peso - 3;

// Declaramos la variable dias para saber cuantos-
// dias pasaron y la inicializamos en cero
var dias = 0;

// Simulacion de PESO con ciclo WHILE

// agregamos la palabra while  seguido de parentesis y llaves
// como funciona while es que el codigo que hay entre-
// las llaves se va a repetir simpre que la condicion-
// que va dentro de los parentesis se cumpla
// mientras que la condicion sea verdadera el codigo entre llaves se va a repetir
// cuando la condicion sea falsa el programa continua-
// su ejecucion despues del bloque de codigo del while
// pasamos el objeto persona.peso > mayor que la meta
// Mientras que el peso de la persona este por ensima-
// de la meta se va a ejecutar el ciclo
while (persona.peso > META) {
  // Dentro del condicional preguntamos si come mucho
  // invocamos la funcion con parentesis sin parametros
  if (comeMucho()) {
    // Si come mucho llama a la funcion aumentarPeso-
    // y le pasamos el objeto persona
    aumentarDePeso(persona);
  }
  // Dentro del condicional preguntamos si practica deporte
  // invocamos la funcion con parentesis sin parametros
  // esta nos va retornar true o false
  if (realizaDeporte()) {
    // si realiza deporte llama a la funcion adelgazar
    // y le pasamos el objeto persona
    adelgazar(persona);
  }
  // cada ves que se ejecute el ciclo que hay dentro_
  // del while va aumentar la variable dias en 1
  dias += 1;
}

// Por console le decimos al usuario cuantos dias pasaron-
// pasando las variables por teplates literales
console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazó 3kg`);

debugger;
// para debuguear nuestro codigo
// utilizamos la palabra reservada debugguer
// la ejecucion del programa se detendra cuando-
// llegue al debugger y por sonsola podemos utilizar-
// las demas funcionalidades
// para correr, pasar a la siguinte linea
// y asi encontrar los posibles bug
