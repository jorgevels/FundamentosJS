//------- ALCANCE DE UNA FUNCION EN JAVASCRIPT --------

// Declaramos la varible
// Si una variable esta definida fuera de-
// una funcion su alcance es GLOBAL
// se puede acceder desde cualquier funcion
// de esta forma se le asigna al objeto global
// en el navegador el objeto global es window
var nombre = "Jorge";

// Definimos la funcion
function imprimirNombreEnMayusculas(nombre) {
  // a la variable nombre le agregamos una funcion
  // para pasar el valor de la variable-
  // a mayusculas
  // el string nuevo en mayusculas lo asignamos a nombre
  nombre = nombre.toUpperCase();

  // imprimimos por consola el valor del string de la variable nombre
  console.log(nombre);
}

// llamamos a la funcion para que se-
// ejecutte en el navegador
imprimirNombreEnMayusculas(nombre);

// Para evitar que la variable nombre se sobrescriba
// le debemos pasar por parametros el valor que-
// queremos pasar a mayusculas
// de esta forma limitamos el alcance de la variable.
// para evitar confuciones le podemos pasar como-
// parametro el mismo nombre de la variable.
