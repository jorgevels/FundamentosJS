// ----- PARAMETROS POR VALOR DE REFERENCIA EN JAVASCRIPT -----

// Declamos un objeto
var Jorge = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28
};

// Declaramos un segundo objeto
var Matias = {
  nombre: "Matias",
  apellido: "Velasquez",
  edad: 1
};

// Definimos la funcion y le pasamos como-
// parametro persona
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;

  // pasamos por consola el nombre
  // y lo pasa a mayusculas
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(Jorge);
imprimirNombreEnMayusculas(Matias);

// Dedinimos la funcion cumpleaños
// le pasamos como parametro persona
// recibe una persona y le incrementa su edad
// JS se comporta distinto con los objetos
// los objetos que pasamos por parametros
// se pasan por referencia
// si los modificamos dentro del cuerpo de una-
// funcion su valor de va haber modificado-
// fuera de esa funcion
function cumpleanos(persona) {
  // Retormanos de esta funcion un objeto nuevo-
  // copiando todo lo que tenia el objeto anterior
  return {
    // Desglosamos a la persona dentro de este nuevo objeto
    // pero podemos pisar algunos de sus atributos
    // o podemos incorporar nuevos si quisieramos

    ...persona,

    // para modificar la edad y sumarle un año
    // lo que hace esta funcion es devolvernos
    // un nuevo objeto con una persona mas vieja
    // que va tener un año mas que la anterior
    edad: persona.edad + 1
  };
}
// debemos tener encuenta como se comporta
//JS al pasarle un objeto como parametros
