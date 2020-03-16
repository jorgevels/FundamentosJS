//------ESTRUCTURAS DE DATOS INMUTABLES-----

// Estas van a permitirnos desacernos del
// efecto de lado y el objeto de lado con lleva-
// un monton de bugs cuando estamos desarrollando

// Utilizar estas estruturas se sugiere mucho a la hora-
// de desarrollar con JS ya que nos va a permitir
// garantizar la persistencia de los datos
// programar mas seguros de que al llamar una-
// funcion no estamos contamando mas nada no estamos-
// tocando objetos de otros lados

// Declaramos un objeto persona con sus atributos
//
const Persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28
};

// const cumpleanos = persona => persona.edad++

// Definimos una funcion para el cumpleaños que-
// recibe una persona y nos va retornar un objeto-
// de JS

const cumpleanosInmutable = persona => ({
  //  nos va retornar un objeto de JS
  // en el cual vamos a desglosar a la persona-
  // al desclozar cogemos casa uno de sus atributos-
  // y ponerlos en este nuevo objeto con el valor que corresponda
  //
  ...persona,
  // Pisamos su edad
  // y la edad va hacer persona.edad + 1
  edad: persona.edad + 1
  // De esta manera estamos retornando un nuevo objeto
  // estamos creando un nuevo objeto en memoria
  // y no estamos modificando el objeto anterior
});

// La desventaja es que tndremos que tener una-
// nueva variable para referirnos a Persona que va ser-
// una persona con mas edad

// presentamos por console el objeto Persona
console.log(Persona);
