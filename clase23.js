//---- QUIEN ES THIS EN LAS FUNCIONES-----
// En la clase anterior dejamos un error, nos-
// pasaba que la unica persona que creamos que-
// era alta nos decia que no era alta

// Lo unico que habiamos cambiado era una-
// funcion  por una arrow function

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

// --- FUNCION PARA QUE UNA PERSONA SALUDE ---
Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

//-- FUNCION PARA SABER SI LA PERSONA ES ALTA --

// en el prototipo de persona vamos a colocar-
// de nuevo las llaves y en el return vamos-
// a retornar this.altura
// Regresamos la palabra function como lo teniamos antes

Persona.prototype.soyAlto = function() {
  // Agregando un DEBUGGER en esta parte se-
  // detendra la ejecucion y si en la consola-
  // nos paramos sobre this nos muestra que-
  // this es window y window es el objeto global-
  // dentro del navegador y this.altura es undefine-
  // y undefine nunca va hacer mayor que 1.8-
  // por eso todas las personas nos decia que no son altas
  // la condicion nunca se va dar

  // this es uno de los errores mas comunes en JS-

  // Con las arrow es que asigna esta funcion-
  // pero cambia el this dentro de la funcion-
  // lo que hace es que this va a puntar al this-
  // que este afuera de la funcion y el this que-
  // esta por fuera  en el espacio globales-
  // igual a window
  return this.altura > 1.8;
};

var jorge = new Persona("Jorge", "Velasquez", 1.81);
var matias = new Persona("Matias", "Velasquez", 1.12);
var arturo = new Persona("Arturo", "Martinez", 1.65);
