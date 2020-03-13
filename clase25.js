// ------ CLASES EN JAVASCRIPT------
// Apartir del año 2015 JS se fue actualizando-
// año tras año desde halli podemos encontrar-
// distintas versiones con los nombres ECMASCRIPT-
// ECMASCRIPT 2015, 2016, 2017 y muy pronto 2018
// ECMASCRIPT es el estandar en el cual se basa JS
// para conformarce como lenguaje, quiere decir-
// que son todas la funcionalidades que trae el lenguaje
// y esta nueva actualizacion del lenguaje trae-
// una funcionalidad para crear lo mismo de la clase anterior-
// pero de una manera mas sencilla, lo que no podemos-
// olvidarnos es que por de bajo siguen siendo todos prototipos
// por mas que ya vamos a utilizar la palabra class por debajo estan los prototypes

// Escribimos esta funcion con la palabra class
// de esta manera estamos diciendo que existe una-
// clase persona y va tener un metodo constructor-
// que es el que se va a ejecutar cuando creemos objetos
// de esta clase
class Persona {
  // creamos un constructor y le pasamos como-
  // parametros nombre apellido altuta
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  // le agremamos la funcion saludar sin la palabra-
  // funcion y sin parametros y entre llaves le pasamos-
  // el console con el mensaje de saludar
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  // le agremamos la funcion soyAlto sin la palabra-
  // funcion y sin parametros y entre llaves agregamos-
  // el return que nos regresa al altura
  soyAlto() {
    return this.altura > 1.8;
  }
}

// Para lograr que una clase herede de otra
//Creamos la clase Desarrollador y para indicarle-
// que esta clase heresa de otra utilizamos la-
// palabra extends y seguido el nombre de la clase que queremos heredar

class Desarrollador extends Persona {
  // Creamos un construtor con los mismos parametros-
  // de la clase persona
  // No podemos utilizar this dentro del constructor-
  // hasta que no hallamos llamado el construtor-
  // de la clase padre en este caso persona

  constructor(nombre, apellido, altura) {
    // Para llamar al constructor de la clase padre-
    // tenemos que utilizar la palabra super y le pasamos sus parametros
    // y asi no necesiamos la palabra this
    super(nombre, apellido, altura);
  }
  // Invocamos el metodo saludar dentro de la clase-
  // con el console para saludar los desarrolladores
  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}

// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.89)
