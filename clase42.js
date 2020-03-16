//CAMBIANDO EL CONTEXTO AL LLAMAR UNA FUNCION

// Cuando hablamos del contexto en js nos referimos a-
// a quien es el objeto this cuando se ejecuta un codigo-

// El error mas comun es no se puede ejecutar las metodo-
// porque es undefine y sucede generalmene porque this-
// no es quien esperamos que sea
// vamos a prender tres metodos para cambiar el contexto-
// de una funcion

// Declaramos un objeto persona con dos atributos

const Persona = {
  nombre: "Jorge",
  apellido: "Velasquez"
};

const Persona2 = {
  nombre: "Yesika",
  apellido: "Cortés"
};

// Definimos una funcion saludar que lo que haga-
// sea un console con un mensaje para saludar

// tambien podemos pasarle el parametro saludo-
// y lo igualamos a Hola
function saludar(saludo = "Hola") {
  // Console que saluda
  // no colocamos hola y le pasamos el parametro
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// Si por console llamamos a la funcion saludar -
// nos arroja Hola mi nombre es undefined y es algo-
// debiamos esperar, cuando se ejecuta la funcion el this-
// hace referencia a window
// como la funcion saludar la tenemos definida en un-
// scope global,
// para cambiar el this en esta funcion hay un metodo-
// llamado bind que lo que hace es cambiar el contexto-
// cambiar el this de una funcion

// EXAMPLE
// Definimos otra funcion y la vamos a guardar en una variable-
// llamada saludarAJorge y le vamos asignar saludar.bind y al-
// bind por parametro le pasamos persona
// de esta manera bind nos retorna una nueva funcion-
// atando el parametro que le pasamos al bind al this dentro-
// de esa funcion

const saludarAJorge = saludar.bind(Persona);
// si lo ejecutamos por consola nos regresa el saludo correcto

// si definimos otra funcion de igual manera al-
// ejecutar por consola nos va a presentar el menaje saludar

// Esto sucede sin problema porque estamos ejecutando-
// dos funciones distintas en la cual cada una tiene el-
// this atado a dos objetos distintos
const saludarAYesika = saludar.bind(Persona2);

// Si ejecutamos un setTimeout este recibe una funcion y-
// un deley de tiempo y queremos que ejecute la -
// funcion saludar a Persona
// le podemos decir que ejecute la funcion saludar-
// pero con el parametro de this, es decir con el contexto de this-
// y le pasamos la Persona, como esta funcion van nos-
// regresa la referencia a una funcion lo podemos hacer de esta forma

// Pero si ejecutamos Persona nos va regresar undefined

// con esto estamos ejecutando una nueva funcion que tiene atado al this
// en el bind podemos cambiar le mensaje de saludo
// como parametro agregamos el nuevo saludo
setTimeout(saludar.bind(Persona, "Hola parse"), 1000);

// la funcion bind no ejecuta la funcion sino que -
// nos retorna una nueva funcion con ese contexto cambiado

// OTRAS FORMAS
// Estas ejecutan la funcion en ese momento

// definimos saludar.call y por parametro le pasamos-
// la persona y un saludo
// al call los parametros se los pasamos separados por coma,

saludar.call(Persona, "Hola parce");

// definimos saludar.apply es muy similar al call-
// el primer parametro es quien va hacer el this-
// y el segundo parametro y lo que cambia con respeto-
// al call es que es un array y el array contiene-
// los parametros de la funcion
saludar.apply(Persona, ["Hola amigo"]);
saludar.apply(Persona2, ["Hola linda"]);

// Manejar quin es el this dentro de una funcion-
// no lo podemos perder de vista en JS mas que todo-
// cuando estamos escribiendo codigo asincrono-
// porque siempre que ejecutemos una funcion asincrona-
// el this va cambiar y debemos estar seguro de que sea-
// lo que esperamos
