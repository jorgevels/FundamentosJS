//--- MANEJO DE FECHAS EN JAVASCRIPT-----

// Vamos a calcular cuantos dias pasaron desde-
// mi nacimiento hasta el dia de hoy

// Definimos una funcion llamada diasEntreFechas-
// y por parametros le pasamos fecha1 y fecha2
function diasEntreFechas(fecha1, fecha2) {
  // con esta constante calculamos cuantos milisegundos-
  // hay en un dia y unDia lo igualamos milisegundos-
  // segundos, minutos y horas
  const unDia = 1000 * 60 * 60 * 24;
  // Declaramos en una constante la variable difenrencia
  // y la igualamos a la resta de la fecha1 y la fecha2
  // le pasamos el metodo Math.abs, con esto obtenemos
  // el numero absoluto de esta operacion
  // si es negativo lo transforma positivo y si es positivo lo deja como esta
  // y nos va dar un dato en milisegundos que es la diferencia-
  // que existe entre ambas fechas
  const diferencia = Math.abs(fecha1 - fecha2);

  // en esta parte retornamos la diferencia que hay entre-
  // las fechas dividido en la constante unDia
  // de esta manera obtenemos la cantidad de milisegundos-
  // que hay entre una fecha y otra
  // le pasamos el metodo Match.floor para redondendear los datos

  return Math.floor(diferencia / unDia);
}

// Declaramos una constante que va tener un new date
// new date va tener la fecha actual por defecto
const hoy = new Date();

// Declaramos otra constante con la fecha de nacimiento
// y ahota el constructor de new data le pasamos el-
// año el mes y el dia de nacimiento
// en JS los meses inician en cero
const nacimiento = new Date(1981, 5, 5);
// llamamos la funccion diasEntreFechas y por parametros-
// le pasamos las constantes hoy y nacimiento
fecha = diasEntreFechas(hoy, nacimiento);

console.log(hoy);
console.log(nacimiento);
console.log(`Sus dias vividos son:${fecha}`);
