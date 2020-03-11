var persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28,
  peso: 75
};

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = persona.peso - 3;
var dias = 0;

while (persona.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(persona);
  }
  if (realizaDeporte()) {
    adelgazar(persona);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazó 3kg`);
