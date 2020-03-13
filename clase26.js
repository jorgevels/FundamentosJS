// ------ ASINCRONISMO EN JAVASCRIPT------
// JavaScript solo puede hacer una cosa a la vez-
// sin importar cuantos nucleos tenga su computadora-
// o tu server JS solo va poder ejecutar una tarea a la vez
// Aunque no es multitarea puede delegar la ejecucion de-
// ciertas funciones a otros procesos.
// Esle modelo de concurrencia de llama EventLoop-
// veamoslo como con este example compra y venta de Bitcoins-
// Tiene algo llamado cola de ejecuciones donde va-
// poniendo las llamadas a funciones segun el orden de-
// ejecucion de nuestro programa si una funcion-
// llama a otra entonces esta se agrega a la pila-
// cuando termina de ejecutar una funcion la saca de la pila-
// cuando el programa necsita saber el precio del Bitcoins-
// porque un usuario hiso una compra en pesos colombianos-
// diciendole que funcion tiene que ejecutar cuando-
// cuando esos datos esten listos, la tarea que recibe el-
// navegador es un callback una funcion que JS-
// ejecutara cuando regrese la respuesta del servidor-
// mientras tanto JS seguira ejecutando nuestro programa-
// y cuando llegue la respuesta la funcion a ejecutar-
// se apilara en otro lado en una cola de tareas-
// aqui las tareas se iran apilando segun el orden de llegada-
// Que TAREAS van a parar a esta cola: peticiones a servidores-
// las interaciones visuales los eventos que se realizan-
// cada cierto tiempo, hasta que el programa se quede sin funciones-
// en la pila de ejecucion va ir a buscar las funciones a la pila de tareas-
// por eso debemos tener cuidado en llenar el cuello de botella-
// si JS se queda ejecutando funciones muy pesadas-
// las funciones en la cola de tarea van a tardar mucho en ejecutarse-
// porque se bloquea el EventLoop.

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
