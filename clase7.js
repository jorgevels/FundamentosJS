// ----------- DESTRUCTURANDO OBJETOS EN JAVASCRIPT --------
// Declaramos un objeto
var jorge = {
  nombre: "Jorge",
  apellido: "Lifszyc",
  edad: 28
};
// Declaramos un segundo objeto
var lizeth = {
  nombre: "Lizeth",
  apellido: "Susnisky",
  edad: 27
};
// Definimos la funcion y como parametros-
// le pasamos el valor de persona
function imprimirNombreEnMayusculas(persona) {
  /*  var nombre = persona.nombre */
  // Para no tener que tener duplicado el nombre
  // Es decir si queremos acceder al atributo-
  // nombre que tiene una persona y guardarlo-
  // en una variable . nombre
  // podemos encerrar entre llaves el nombre de-
  // la varible y es equivalente al anterior
  var { nombre } = persona;
  // pasamos por consola el parametro nombre-
  // y lo pasamos a mayusculas
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(jorge);
imprimirNombreEnMayusculas(lizeth);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

// Solucion Challenge
function imprimirNombreYEdad() {
  console.log(`Hola me llamo ${jorge.nombre} y tengo ${jorge.edad} años`);
  console.log(`Hola me llamo ${lizeth.nombre} y tengo ${lizeth.edad} años`);
}
imprimirNombreYEdad();
