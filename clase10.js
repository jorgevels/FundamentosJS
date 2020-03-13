// ---------- CONDICIONALES EN JAVASCRIPT -----------

// Estructuras de control
// Condicionales
// Declaramos un objeto personas con algunos-
// atributos de la vida real
var personas = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28,
  // utilizamos un valot booleano para definir-
  // si es false o true
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false
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

//Solucion Challenge
// Definimos la funcion y por parametro le pasamos persona
function imprimirSiEsMayorDeEdad(persona) {
  // declaramos un condicional que evalue-
  // si una persona es mayor o menor de edad
  if (persona.edad >= 18) {
    // Si la condicion se cumple imprime este console
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    // si la condicion no se comple imprime este
    console.log(`${persona.nombre} es menor de edad`);
  }
}

// Invocamos la funcion y le pasamos como-
// parametros el nombre del objeto
imprimirSiEsMayorDeEdad(personas);
