class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    var { nombre, apellido } = this;

    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this;

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}
class Masoterapeuta extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido, altura } = this;
    console.log(
      `Hola me llamo ${nombre} ${apellido} mi altura es ${altura} y soy masoterapeuta`
    );
    if (fn) {
      fn(nombre, apellido, altura, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev, esMaso) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`);
  }
}

function responderSaludos(nombre, apellido, esDev, esMaso) {
  console.log(`Buen día ${nombre} ${apellido}`);

  if (esMaso) {
    console.log(`Ah mira no sabia que eras Masoterapeuta`);
  }
}

var sacha = new Persona("Sacha", "Lifszyc", 1.72);
var erika = new Persona("Erika", "Luna", 1.65);
var arturo = new Desarrollador("Arturo", "Martinez", 1.89);
var lizeth = new Masoterapeuta("Lizeth", "Correa", 159);

sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
lizeth.saludar(responderSaludos);
