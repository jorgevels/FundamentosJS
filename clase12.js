// --------ARROW FUNCTION-------

// Arrow Function otra manera de escribir las funciones
// en JS podemos Asignar a una variable una funcion
// Declaramos un objeto personas con algunos-
// atributos de la vida real
var personas = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28,
  // utilizamos un valor booleano para definir-
  // si es false o true
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false
};

var persona2 = {
  nombre: "Matias",
  apellido: "Velasquez",
  edad: 1
};

// Definimos una funcion que imprima la-
// profesion de las personas y como parametro-
// y por parametros le pasamos el valor de persona
function imprimirProfesiones(persona) {
  // primeramente le pedimos que nos muestre
  // por consola el nombre de la persons
  // con template string que nos permie interpolar-
  // variables
  console.log(`${persona.nombre} es:`);
  // con esta condicional imprimimos las profesiones-
  // que cumplan la condicion de true
  if (persona.ingeniero) {
    // este console se imprime si la condicion es true

    console.log("Ingeniero");
  } else {
    // si no es true imprime este mensaje
    console.log("No es ingeniero");
  }
  // las variables si se declaran en minusculas-
  // asi mismo se deben llamar
  // example cocinero === Cosinero retorna false
  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.dj) {
    console.log("DJ");
  }

  if (persona.cantante) {
    console.log("Cantante");
  }

  if (persona.guitarrista) {
    console.log("Gutiarrista");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

// Invocamos la funcion y le pasamos commo-
// parametro el nombre del objeto
imprimirProfesiones(personas);

// Declaramos una constante en el scope global
// las constantes se declaran en Mayusculas-
// y separadas por guiones bajos _
const MAYORIA_DE_EDAD = 18;

//-----ESTRUCTURA SIMILAR a las Arrow function----
// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// --------ARROW FUNCTION-------
// Con las ARROW FUNCTION podemos asiganar-
// a una variable una function.
// Es buena practicar definirla en una const en logar der var
// cuando  tenemos un solo parametro en una funcion-
// podemos obviar los parentesis
// Si una funcion lo unico que hace es retorar algo-
// podemos omitir el return y borrar-
// las llaves que rodean al cuerpo de la funcion.
// implicitamente retorna el valor del codigo-
// que estemos validando, en este caso devulve-
// el valor de esta comparacion
// Como solo estamos validando la edad de la persona-
// podemos desestruturar el parametro-
// para hacerlo no podemos poner las llaves directamente-
// debemos colocarlos entre parentesis
// y despues del arrow function dejar solo el-
// valor que desestruturamos del objeto
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

/* const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;
 */

// Declaramos una function para control de acceso
// le pasamos persona como parametro
function permitirAcceso(persona) {
  // para definir SI NO es mayor de edad
  // con el signo de exclamacion que va a negar-
  // la condicion que siga
  if (!esMayorDeEdad(persona)) {
    // si la negacions es verdadera el acceso es denegado
    console.log(`${persona.nombre} ACCESO DENEGADO`);
  } else {
    // Si la negacions es falsa permitimos es acceso
    console.log(`${persona.nombre} ACCESO PERMITIDO`);
  }
}
