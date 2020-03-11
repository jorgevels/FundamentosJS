function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2);

  return Math.floor(diferencia / unDia);
}

const hoy = new Date();
const nacimiento = new Date(1981, 7, 5);

fecha = diasEntreFechas(hoy, nacimiento);

console.log(hoy);
console.log(nacimiento);
console.log(`Sus dias vividos son:${fecha}`);
