// ----------NUMEROS EN JAVASCRIPT------------

// Variables numericas
var edad = 27;

// edad = edad + 1
// incrementar en uno el valor de una variable
edad += 1;

// Declaramos la variable peso
var peso = 75;

// peso = peso - 2
// Le estamos  2 al valor peso
peso -= 2;

var sandwich = 1;
// Sumamos dos valores
peso += sandwich;

var jugarAlFutbol = 3;
// Restamos a la variable peso el valor de jugar al futbol
peso -= jugarAlFutbol;

// declaramos la varible precio
var precioDeVino = 200.3;

// Trabajando con decimales
// Aplicamos una regla de tres porque ya sabemos que tenemos un solo decimal
var total = (precioDeVino * 100 * 3) / 100;

// Accedemos a un modulo de JS  Math.round Para redondear el decimal
// sin importar la cantidad de decimales
var totalRedondeado = Math.round(precioDeVino * 100 * 3) / 100;

// Llmando la funciones toFixed le decimos cuantos decimales queremos traer
var totalStr = total.toFixed(3);

//Para pasarlo a numero decimal
// Llamamos a la funcion parceFlout
// Float se llama al punto flotante es decir a los decimales
// Parce significa transformar leer de un string a un decimal
var total2 = parseFloat(totalStr);

//Divisiones
var pizza = 8;
var personas = 2;

// a la variable cantidadDePorsonas
// la igualamos con el valor de pizza divido la cantidad de personas
var cantidadDePorcionesPorPersona = pizza / personas;
