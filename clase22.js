// ------MODIFICANDO UN PROTOTIPO------

// Los prototipos en JS y la diferencia con el-
// sistema de herencias de otros lenguajes

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

// Debemos ENTENDER que el prototipo es un-
// objeto mas de JS
// Si lo modificamos en cierta altura del codigo-
// y apartir de ahi va quedar modificado

//----------------------///------------------------///----------------------

// --- FUNCION PARA QUE UNA PERSONA SALUDE ---
Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

//-- FUNCION PARA SABER SI LA PERSONA ES ALTA --

// llamamos la persona.prototype.soyAlto aqui le-
// estamos diciendo que dentro del prototype de persona-
// va a existir un atributo soyAlto que va hacer una-
// funcion sin parametros
// y nos va retornar this.altura > 1.8

// En esta parte es donde estamos modificando-
// el prototypo. Si esta funcion la definimos-
// al final del codigo nos genera un ERROR-
// cuando tenemos un error en JS no se sigue-
// ejecutando el codigo

// Es muy imporante donde definimos las funciones-
// que va tener el prototipo
// deben ir juntas en la parte superior despues del constructor

//Si esta funcion la pasamos con un Arrow function-
// por consola nos va retornar el mismo valor-
// con las difenrenes personas
Persona.prototype.soyAlto = () => this.altura > 1.8;

///----------------------///------------------------///----------------------

// Agregamos la altura como parametros a las-
// nuevas personas
var jorge = new Persona("Jorge", "Velasquez", 1.72);
var matias = new Persona("Matias", "Velasquez", 1.65);
var arturo = new Persona("Arturo", "Martinez", 1.89);

///----------------------///------------------------///----------------------

// Por cada una de las personas invocamos-
// la funcion soy alto
jorge.soyAlto();
matias.soyAlto();
arturo.soyAlto();
