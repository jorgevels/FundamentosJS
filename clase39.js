// ----- MEMOIZACION AHORRANDO COMPUTO -----

// Este es un tema mas avanzado de JS
// Este concepto nos permite ahorrar procesamiento
// ahorrar computo guardando ciertos resultados-
// de algunas cuentas

// Vamos hacer otro ejemplo de recursivida-
// con el numero factorial

// El factorial trata de Example
// factorial de 6 es lo mismo que hacer-
// !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
// podriamos decir que nuestro caso base es el 1
// porque ahi termina la recursividad
// simpre es hasta llegar al numero 1

/*
        !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
        !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
      */
// Lo que vamos haber en esta clase es como guardarnos-
// los resultados para cuando hagamos otras cuentas-
// podamos utilizar las anteriores

//------------//----------------//-----------

// ------EXAMPLE FACTORIAL BASICO------

// Definimos una funcion como parametro le pasamos un numero n
function factorial(n) {
  // Validamos nuestro caso base-
  // preguntando si el numero es igual a uno
  if (n === 1) {
    // si es igual a uno retornamos 1
    return 1;
  }
  // si no es 1  retormanos el numero por el factorial-
  // de (n-1) es decir si empieza en 6 entraria a la-
  // validacion 6 === 1 y pasaria al no, entonces vamos a retornar-
  // 6 por el factorial de (n-1) = (6-1) 5 el 5 llamarias-
  // de nuevo la funcion y contiuaria la misma operacion-
  // hasta llegar a 1
  // Para calcular el factorial de 6 seria este 6 = 6 * 5 * 4 * 3 * 2 * 1
  return n * factorial(n - 1);
}

//------------//----------------//--------

// ---EXAMPLE FACTORIAL GUARDANDO EN CACHE---
// Guardamos en chache los resultado que vamos obteniendo

// Definimos una funcion como parametro le pasamos un numero n
function factorialCache(n) {
  // Validamos si existe una cache cad funcion puede tener atributos internos
  // preguntamos si la cache esta definida
  if (!this.cache) {
    // si no esta definidad creamos un objeto nuevo vacio-
    // este objeto se va ejecutar la primera vez que se llame esta funcion
    this.cache = {};
  }
  // preguntamos si this.cache[n] existe
  debugger;
  if (this.cache[n]) {
    // si ya fue calculado lo retornamos
    return this.cache[n];
  }

  if (n === 1) {
    // si es igual a uno retornamos 1
    return 1;
  }

  // Donde estabamos calculando el factorial lo-
  // vamos a guardar en la cache this.cahe
  // como es un objeto podemos agregarle atributos
  // por medio de corchetes y le pasamos el numero n-
  // decimos que el factorial de 6 seria n * factorial(n - 1)-

  this.cache[n] = n * factorial(n - 1);
  // Utilizamos un debugger para ver el comportamiento-
  // de esta funcion
  debugger;
  // Finalmente retornamos this.cache[n]
  // esto es si todavia no existe el calculo ya calculado
  // la primera vez que calculemos un factorial se-
  // va a ejecutar esta parte this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

// CON LA MEMOIZACION PODEMOS CACHAR RESULTADOS
// DE OPERACIONES COSTOSAS Y DE ESTA FORMA-
// AHORRAR COMPUTO
