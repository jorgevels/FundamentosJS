var persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 38,
  peso: 70
};

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(persona);
  } else if (random < 0.5) {
    adelgazar(persona);
  }
}

console.log(
  `Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)}kg`
);
