function Persona(nombre, apellido, altura, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} ${this.altura}`);
};

const ALTURA = 1.8;
const MAYOR_DE_EDAD = 18;

Persona.prototype.soyAlto = function() {
  if (this.altura > ALTURA) {
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido}
       mi estatura es ${this.altura} y soy alto`
    );
  } else {
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido}
       mi estatura es ${this.altura} y soy bajo`
    );
  }
};

Persona.prototype.personaEdad = function() {
  if (this.edad > MAYOR_DE_EDAD) {
    console.log(`${this.nombre} es mayor de edad`);
  } else {
    console.log(`${this.nombre} es menor de edad`);
  }
};

var jorge = new Persona("Jorge", "Velasquez", 1.78, 38);
var erika = new Persona("Erika", "Luna", 1.65, 15);
var lorena = new Persona("Lorena", "Velasquez", 1.85, 16);
jorge.saludar();
lorena.saludar();
jorge.soyAlto();
lorena.soyAlto();
lorena.personaEdad();
