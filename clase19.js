//----------TRANSFORMAR UN ARRAY---------

// Vamos a profundizar acerca de la funcion map
// La funcion map a diferencia de filter lo que-
// hace es devolvernos un nuevo array en el cual-
// va a modificar cada uno de los elementos que-
// le vallamos pasando del array original.

// En esta clase vamos a transformar la altura-
// las personas y vamos a pasarla de metros a centimetros
// hacer ese cambio es tan sencillo como multiplicar-
// su altura por 100: example 1.76 * 100 = 176cm

//Declaramos varios objetos con sus atributos
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

// -----VAMOS A FILTRAL A LAS PERSONAS ALTAS-----

// Para filtar simpre necesitamos dos cosas
// un array y una condicion y esa condicion-
// va hacer una funcionbundleRenderer.renderToStream

// Funcion esAlta para sacar la condicion de la altura-
//de una persona
//Esta condicion va ir recibiendo cada uno de los-
// elementos del array. FilTer va iterar por nosotros-
// el array y nos va ir pasando cada unos de los elementos

// Como solo tenemos un parametro no hacen falta-
// los parentesis.
// Como solo estamos retornando un solo valor no-
// hacen falta las llaves

// Desglosamos la persona y le indicamos el-
// valor al cual queremos acceder en este caso la altuta
const esAlta = ({ altura }) => altura > 1.8;

// Agrupamos los objetos en una array de personas

var personas = [sacha, alan, martin, dario, vicky, paula];

// En esta variable vamos a poner a las personas altas
// Sobre el array original vamos a ejecutar la funcion-
// filter example personas.filter()
// esta funcion filter como parametros lleva-
// una condicion, en este caso esAlta-
// y esta condicion tiene que ser una funcion
// esta funcion la llamamos mas arriba

// Tener encuenta que filter nos regresa un nuevo-
// array

var personasAltas = personas.filter(esAlta);

// ESTA seria otra forma de filtrar el array
// Por buenas practicas es mejor tener la condicion-
// por separado en ves de tener una funcion anonima

/* var personasAltas = personas.filter(function (persona) {
   return persona.altura > 1.8
 }) */

//----TRANSFORMAR UN ARRAY----

// persona.altura = persona.altura * 100
// Definimos la funcion de pasarAlturaACms
// esta funcion recibe la persona y como recibe-
// solo un parametro no hacen falta los parentesis

const pasarAlturaACms = persona => ({
  // Devolvemos la persona modificada
  // persona.altura = persona.altura * 100
  // map lo que hace es ejecutar esta funcion por-
  // cada persona y retornar un nuevo valor
  // y genera un nuevo arrar con estas personas con-
  // su altura modificada afectando los valores-
  // del array original

  // Para que no afecte el array original vamos a-
  // retornar un nuevo objeto con la persona desglosada-
  // pero vamos a pisar el atributo altura y le-
  // pasamos la operacion
  // este es un nuevo objeto independiente del-
  // array original
  ...persona,
  altura: persona.altura * 100
});

// Declaramos una nueva variable y la igualamos-
// a personas.map y como parametros devemos pasarle-
// una funcion que transforma la altura cada unos-
// de los elementos de mts a cms en este caso cada-
// una de las personas
var personasCms = personas.map(pasarAlturaACms);
// En este console llamamos a la personasAltas
// y se las mostramos al usuario por consola
console.log(personasAltas);
console.log("Nuevo array con la altura en centimetros");
console.log(personasCms);

// Pasamos por consola un mensaje con las personas-
// altas utilizando templates literales
console.log(`Son ${personasAltas.length} Las personas altas`);
