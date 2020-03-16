//---------OBJETOS EN JAVASCRIPT-------

// Cuando hablamos de objetos en JS estamos
// hablando de prototipos y no tanto de clases
// si bien en las nuevas versiones de JS Existen-
// las clases no clases como las manejan otros lengujes
// no existe la herencia

///----------------------///------------------------///----------------------

// Para definir un prototipo lo unico que debemos-
// hacer es definir una funcion en este caso con-
// el nombre persona abrimos parentesis y llaves-
// en los parentesis le pasamos como parametros-
// que va requerir o inicializar una nueva persona
// Dentro de las llaves Esta el codigo que es el que-
// se va inicializar cuando creemos una nueva persona
// Lo que se conoce en otros lenguajes como constructor

function Persona(nombre, apellido, altura, edad) {
  // Al prototipo o construtor le pasamos como parametros -
  // las key de los atributos que serian nombre, apellido-
  // y para guardarlo dentro de este objeto que se esta-
  // construllendo en la memoria, podemos hacer referencia-
  // a este objeto dentro de esta funcion con this-
  // this va hacer referencia al objeto que se acaba-
  // construir this.nombre = nombre, le asignamos nombre-
  // son dos variables distintas que reciben el nombre-
  // como parametro este mismo this lo repetimos para-
  // los demas parametros del prototipo
  // implicitamente JS retorna this cuando llamamos-
  // a esta funcion con la palabra new, sino utilizamos-
  // la palabra new hay otras formas mas engorrosas-
  // de hacerlo y con new es mas prolifico 🤣🤣🤣
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  this.edad = edad;
}

///----------------------///------------------------///----------------------

// --- FUNCION PARA QUE UNA PERSONA SALUDE ---
// Para que todas las personas que crermos puedan-
// utilizar esta funcion lo que debemos hacer es-
// decirle al prototipo de persona que exista esa-
// funcion saludar

// llamamos la persona.prototype.saludar aqui le-
// estamos diciendo que dentro del prototype de persona-
// va a existir un atributo saludar que va hacer una-
// funcion sin parametros y que lo unico que va hacer-
// es ejecutar un concole con el saludo
Persona.prototype.saludar = function() {
  // Por console con los templates literales con el nombre-
  // y apellido de la persona haciendo referencia-
  // de nuevo a this que es ese objeto en cuestion-
  // que representa cada una de las personas
  // dentro del string interpolamos ${this.nombre}
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} ${this.altura}`);
};

///----------------------///------------------------///----------------------
// Declaramos las constantes ALTURA y MAYOR_DE_EDAD
// se declaran constantes porque es un valor que va-
// estar quemado en el codigo y por buenas practicas_
// es recomendable en las funciones llamar solo el-
// el nombre de la variable
const ALTURA = 1.8;
const MAYOR_DE_EDAD = 18;

///----------------------///------------------------///----------------------

//-- FUNCION PARA SABER SI LA PERSONA ES ALTA --
Persona.prototype.soyAlto = function() {
  // En este condicional hacemos referencia al atributo-
  // altura con la palabra this.altura y lo validamos-
  // con el operador mayor igual >= con el nombre-
  // de la constante ALTURA antes definida
  if (this.altura >= ALTURA) {
    // con este console si la validacion se cumple es true-
    // le pasamos el mensaje de que la persona es alta.
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido}
       mi estatura es ${this.altura} y soy alto`
    );
  } else {
    // Si la condicion anterior no se cumplio
    // le pasamos el mensaje de que la persona es baja.
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido}
       mi estatura es ${this.altura} y soy bajo`
    );
  }
};

///----------------------///------------------------///----------------------

//FUNCION PARA SABER SI LA PERSONA ES MAYOR DE EDAD
Persona.prototype.personaEdad = function() {
  // En este condicional hacemos referencia al atributo-
  // altura con la palabra this.edad y lo validamos-
  // con el operador mayor igual >= con el nombre-
  // de la constante MAYOR_DE_EDAD antes definida
  if (this.edad > MAYOR_DE_EDAD) {
    // con este console si la validacion se cumple es true-
    // le pasamos el mensaje de que la persona es mayor de edad.
    console.log(`${this.nombre} es mayor de edad`);
  } else {
    // Si la condicion anterior no se cumplio
    // le pasamos el mensaje de que la persona es menor de edad.
    console.log(`${this.nombre} es menor de edad`);
  }
};

///----------------------///------------------------///----------------------

// ESTAS SON LAS PERSONAS QUE CONSUMEN EL CONSTRUTOR-
// Cada ves que se crea una nueva persona ejecua el-
// codigo de la funcion
// Estamos utilizando new para crer una instancia-
// new es una palabra reservada del lenguaje y solo-
// se utiliza para crear nuevos objetos dado un prototipo-
// en este caso el prototipo de persona
// si no ponemos la palabra new nos va lanzar un undefine-
// el prototipo de persona o el construtor va retornar-
// de manera implicia los valores requeridos para el-
// nuevo objeto
// A esta nueva instancia le pasamos como parametros-
// los atributos de la persona separados por coma,-
// en este caso 'matias', 'velasques' y y al-
// prototipo o construtor le pasamos como parametros -
// las key de los atributos que serian nombre, apellido-
// y para guardarlo dentro de este objeto que se esta-
// construllendo en la memoria, podemos hacer referencia-
// a este objeto dentro de esta funcion con this-
// this va hacer referencia al objeto que se acaba-
// construir this.nombre = nombre, le asignamos nombre-
// son dos variables distintas que reciben el nombre-
// como parametro este mismo this lo repetimos para-
// los demas parametros del prototipo
// implicitamente JS retorna this cuando llamamos-
// a esta funcion con la palabra new, sino utilizamos-
// la palabra new hay otras formas mas engorrosas-
// de hacerlo y con new es mas prolifico 🤣🤣🤣
//
var matias = new Persona("Matias", "Velasquez", 1.62, 1);
var erika = new Persona("Erika", "Luna", 1.8, 15);
var lorena = new Persona("Lorena", "Velasquez", 1.85, 16);

///----------------------///------------------------///----------------------

// Invocamos cada una de las funciones con el nombre-
// de las variables de las nuevas personas creadas
matias.saludar();
lorena.saludar();
matias.soyAlto();
lorena.soyAlto();
erika.soyAlto();
erika.personaEdad();
lorena.personaEdad();
matias.personaEdad();
