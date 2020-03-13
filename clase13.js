//--- ESTRUCTURAS REPETITIVAS <FOR> -------
// El for nos va permitir realizar cierta tarea de-
// de manera repetitiva, vamos a poder realizarla-
// cierta cantidad de veces

// Declaramos el objeto persona con sus atributos
var persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28,
  peso: 70
};

// Mostramos por console su peso original-
// al inicio del año
// lo pasamos con teplates literales
console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

// Estructura similar a los ARROW FUNCTION
/* function aumentarDePeso (persona) {
   return persona.peso += 200
 } */

// ---SIMULAMOS EL AUMENTO DE PESO----

// Definimos una constante para el incremento
const INCREMENTO_PESO = 0.2;
// Definimos una constante con los dias del año
const DIAS_DEL_ANO = 365;

// Definimos una funcion para el aumento de peso
// le pasamos los parametros entre parentesis que va-
// a recibir una persona y un incremento
// persona.peso += lo que le pasemos de incremento
// como solo esta haciendo una cosa podemos omitir las llaves
const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);

// Definimos una funcion para el bajo de peso
// le pasamos los parametros entre parentesis que va-
// a recibir una persona y una disminucion de peso
// persona.peso += lo que le pasemos de incremento
// como solo esta haciendo una cosa podemos omitir las llaves
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

// Para definir un for
// escribimos la palabra for y abrimos parentesis ()-
// luego abrimos llaves {}
// entre las llaves va ir el codigo que queremos-
// que se repita cada vez cada dia.
// El for dentro de los parentesis() va tener tres-
// partes.
// 1º parte inicial: var i = 1
// 2º parte de la condicion: i <= DIAS_DEL_AÑO
// 3º parde del incremento: i++
// esta condicion se va ejecutar 365 veces
// para llevar la cuenta de las veces que se va ejecutando
// vamos a utilizar un contador.
// ese contador dentro de un ciclo for se llama i-
// y lo inicializamos en 1 (var i = 1) de esta manera-
// le estamos indicando que inicie en 1
// seguido de un punto y coma; aqui si es obligatori ponerlo
// luego sigue la condicion; si esta condicion se cumple-
// el codigo que va estar dentro de las llaves se va ejecutar
// condicion ; i <= 365 porque cada vez que se-
// ejecute este codigo se va estar incrementando el contador
// luego que el contador llegue a 365 y pase a 366 ya va hacer-
// falsa la condicion y no se vuelve a ejecutar-
// y se sale del ciclo y continua ejecutando el resto de codigo
// Para incrmentar el contador al final de la condicion-
// ponemos ; i++

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  // para simular que la persona esta subiendo de peso
  // vamos a poner un numero random y llamamos-
  // al modulo Math de matematicas y le pedimos-
  // que nos de un numero random
  // este NUMERO random va estar entre 0... y 1
  // example 0.055266, 0.235588, 0.566366
  // este numero lo vamos a utilizar para saber-
  // si la persona adelgaza o baja de peso
  var random = Math.random();
  // condicion preguntando si es menor que el 25 de las veces
  if (random < 0.25) {
    // si se cumple esta condicion aumenta peso
    // llamamos la funcion para aumentar de peso
    aumentarDePeso(persona);
    // condicion que se cumple si la primera no se cumplio
  } else if (random < 0.5) {
    // si se cumple esta condicion baja peso
    // llamamos la condicion para disminuir de peso
    adelgazar(persona);
  }

  // RECORDEMOS que como persona en la parte superior-
  // es un objeto, si dentro de una funcion modificamos-
  // ese objeto ese objeto de va haber modificado-
  // fuera de la funcion. Si no queremos que eso-
  // ocurra tendremos que crear un nuevo objeto desglosando-
  // el objeto  original
}
// Mostramos por console el peso al final del año
// para evitar que el valor del peso se muestre con muchos-
// decimales utilizamos la toFixed(1) y le decimos-
// que solo tome un lugar despues de la coma
console.log(
  `Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)}kg`
);
