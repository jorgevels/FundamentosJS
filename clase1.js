// Podemos agregar variables en una misma linea
// agregando una coma ,
// string se interpreta con comillas sinple o dobles
// por convencion se utilizan las comillas simples
// El punto y como es algo opcional
// Hay casos puntuales para el uso de punto y coma ;
// JS es un lenguaje debilmente tipado
// Podemos cambiarle el valor a una variable pisando su valor inicial
var nombre = "Jorge",
  apellido = "Velasquez";
var edad = 18;

edad = "38 años";

var peso = 70;
/* console.log("Hola " + nombre + " " + apellido);
console.log("Tengo " + edad + " y peso " + peso + " Kilos"); */

// Por medio de la consola ejecutamos nuestro codigo
// Por medio de la consola le presentamos informacion al usuario
// para concatenar texto utilizamos el signo de mas
// Con las comillas francesas tambien podemos llamar las variables con una sintaxis nueva

console.log("Hola " + `${nombre}` + ` ${apellido}`);
console.log("Tengo " + `${edad}` + " y peso " + `${peso}` + " Kilos");
