//--- CUANDO HACE PALTA EL PUNTO Y COMA ;----

// El punto y como en muchos casos es opcional en JS

// Si quiesieramos separar dos sentencias
// una sentencia es cuando declaramos una variable
// cuando le asignamos un valor, cuando hacemos-
// una operacion matematica, cuando llamamos una funcion-
// en todos estos casos son 100% opcionales

//------ PUNTO Y COMAS OPCIONALES------

// Cuando lanzamoun alert
alert("El ; es opcional");

// Cuando declaramos una variable Es opcional el ;
var nombre = "Jorge";

//------PUNTO Y COMA INNECESARIOS--------

// esto es una asignacion y una declaracion y no hace falta poner un punto y coma
const saludarAJorge = function() {};

// Despues de las llaves que indican un codigo-
// es innecesario totalmeent el ;

for (var i = 0; i < 10; i++) {} // Este ; es 100% innecesario

//------PUNTO Y COMA OBLIGATORIOS--------

// Hay ciertos casos que son obligatorios
// son dos casos obligatorios

// En este caso es obligatorio
// Este codigo nos genera un error por consola

/* console.log("Hola mi nombre es jorge")
[1, 2, 3].forEach(n => console.log(n * 2)) */

// Para corregir el error agregamos ; al final del console
console.log("Hola mi nombre es jorge");
[1, 2, 3].forEach(n => console.log(n * 2));

// Si declaramos un console y no colocamos ; y en la siguiente-
// linea iniciamos un templates string
// tambien genera un error
console.log("Hola mi nombre es Jorge");
`${nombre} es desarrollador`;

// Un caso mas especial con los ; y los enter para saltos de linea
// example
// Declaramos la funcion calcularDoble
// por parametros pasamos un numero

function calcularDoble(numero) {
  // Retormamos un objeto
  // si damos un enter despues del return
  // nos dara un error Unexpected token
  // JS despues de un return si encuentra un enter-
  // es como si tuviera ;
  return {
    original: numero,
    doble: numero * 2
  };
}

// Es opcional la utilizacion de los puntos y comas
// para mayor facilidad de controlarlos
// podemos configurar el archivo linter y desde este-
// definimos si los vamos a utilizar

// Estas politicas de uso, mas que gusto personal las-
// define el lider del equipo de desarrollo
