//---LA VERDAD OCULTA SOBRE LAS CLASES EN JS---

// Si conoces de otros lenguajes que soporten la-
// herencia entre clases te estaras preguntando-
// como hacer que un prototipo herede de otro
// Como tal JS no soporta la herencia porque no-
// soporta las clases
// NO HAY CLASES EN JS HAY PROTOTIPOS que son-
// objetos que les vamos agregando metodos que reciben-
// funciones, estas saben quien es this y saben-
// como ejecutarlas
// PERO no existe un sistema que como tal diga-
// este prototipo va heredar de otro, lo que si-
// existe es la herencia prototipal

// Los prototipos tienen una estructura en cadena-
// si uno no resulve x cosa se lo pasa al siguiente
// si ninguno lo llega a resolver a llegar hasta object-
// y object va tratar de ejecutar este metodo-
// si no puede resolverlo lanza un ERROR.

//------HERENCIA PROTOTIPAL DE ANTES-------
// Debiamos escribir una funcion propia nuestra-
// y por parametros recibia un prototipoHijo, y un-
// prototipo padre.
// Recuerde que los prototipos simpre son objetos
//

function heredaDe(prototipoHijo, prototipoPadre) {
  // Debemos decirle al protoripo hijo quien va hacer-
  // su prototipo padre, le vamos asignar un prototipo-
  // al protoripo hijo
  // Definimos una funcion vacia o anomima
  // se le suele asignar a una variable fn
  // a esta funcion le asignamos a su prototypo-
  // el prototipoPadre.prototype
  // todo lo que hemos definido hasta el momento-
  // son funciones y las funciones tienen el atributo-
  // prototype

  var fn = function() {};
  // Al prototipohijo le decimos que su prototype va-
  // hacer un nuevo objeto de la funcion vacia que -
  // acabamos de crear
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  // Le asignamos la funcion contrucota del -
  // prototipo hijo
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8;
};

// Creamos un prototipo Desarrollador
// esta es la funcion que se va a ejecutar-
// cuando creemos nuevos desarrolladores

// Por parametros le pasamos nombre y apellido
// y dentro de las llaves con la palabra this-
// igualamos al valor del parametro
function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// Llamos la funcion heredaDe y como parametros-
// le pasamos el prototipo hijo que es desarrollador-
//  y el prototipo padre que es persona y de esta forma-
// vamos a definir la funcion eredaDe
// Nota: este mecanismo de herencia lo debemos-
// invocar despues de la funcion para que no presente error
heredaDe(Desarrollador, Persona);

// Desarollador.prototype.saludar va hacer otra funcion-
// que va pizar la funcion saludar que tenia la persona-
// el saludo de los desarrolladores va hacer distinto

// Para hacer que este prototipo tenga la herencia-
// prototipal y herede del prototipo persona en-
// JS hace algunos años no habia otra forma de hacerlo-
// como lo vamos hacer en este video

Desarrollador.prototype.saludar = function() {
  // por console le pasamos el mensaque que soy desarrollador
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
  );
};

// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.89)

// los Prototypes son atributos que tienen todas las funciones
// y son un objeto que nos dicen que metodos entienden
// y tambien tiene un atributo __proto que apunta-
// al protoripo object que es el prototype padre-
// y ahi ternima la cadena de herencia de prototipos
