const Persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 28
};

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
});

console.log(Persona);
