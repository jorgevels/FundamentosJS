//---- FUNCIONES RECURSIVAS EN JAVASCRIPT-----

// El concepto de recursividad es muy importante en-
// cualquie lenguaje de programacion

// Vamos a realizar la cuenta de la division entera-
// entre dos numeros

// dividimos 13 entre 4
// 13 dividendo
// 4 divisor

/*
        13  |_4___

        13 - 4 = 9      1
        9 - 4 = 5       1
        5 - 4 = 1       1
        1 - 4 = -3      0 // CASO BASE
      */

// Definimos una funcion y por parametros le pasamos-
// dividendo y divisor

// Para realizar recursividad necesitamos dos cosas
// un caso base y otro es un caso recursivo

// El caso base es cuando el dividendo es menor que el divisor
//

function divisionEntera(dividendo, divisor) {
  // Con un condicional le preguntamos si el dividendo-
  // es menor que el divisor para saber si estamos en el-
  // caso base
  if (dividendo < divisor) {
    // si es menor retormanos el valor de cero
    return 0;
  }
  // si no es menor deberiamos retornar uno mas y la-
  // division entera y por parametro le pasamos el dividendo-
  // menos el divisor y el segundo parametro va hacer el
  // divisor

  // Esta recursividad se sigue ejecutando hasta que entremos-
  // al caso base

  return 1 + divisionEntera(dividendo - divisor, divisor);
}
