//--------  OBJETOS EN JAVASCRIPT ---------------

// Declaramos  un objeto con los atributos de-
//una persona
var jorge = {
  // las llaves delimitan un objeto
  // Un objeto reune ciertas caracteristicas
  // para asignar varios valores los separamos con coma,
  // un objeto de compone de CLAVE (key) and VALOR (value)

  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 38
};

// otro objeto con sus key y values
var lizeth = {
  nombre: "Lizeth",
  apellido: "Correa",
  edad: 27,
  deporte: "Bolibol"
};

// Funcion que imprime un nombre en mayusculas
// para imprimir solo los valores que necesitemos-
// pasamos el key del valor en los parametros-
// de la funcion, solo el que querramos
// esta funcionalidad viene con las ultimas versiones de js

function imprimirNombreEnMayusculas({ nombre, edad }) {
  //por consola llamamos los valores que pasamos
  // por parametros para que la funcion los imprima
  console.log(`${nombre.toUpperCase()} ${edad}`);
}

//imprimimos los valores del objeto jorge
// como parametros le pasaamos el objeto entero
// y ya la funcion sabra a que atributos tiene que acceder

imprimirNombreEnMayusculas(jorge);

// impromimos los valores del objeto lizeth
// como parametros le pasamos el objeto entero
// y ya la funcion sabra a que atributos tiene que acceder
imprimirNombreEnMayusculas(lizeth);

// si llamamos la funcion y no queremos hacer referencia
// a los objetos que ya tenemos
// podemos crear un nuevo objeto y le definimos su valor
imprimirNombreEnMayusculas({ nombre: "Pepito" });

// si lo invocamos sin valor nos arroja error
// porque la funcion esta intendado de aceder
// No podemos desglosar un objeto si no estamos
// seguros de que siempre le vamos a pasar siertos parametros
imprimirNombreEnMayusculas();
