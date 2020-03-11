var personas = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 8,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: true
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.dj) {
    console.log("DJ");
  }

  if (persona.cantante) {
    console.log("Cantante");
  }

  if (persona.guitarrista) {
    console.log("Gutiarrista");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

imprimirProfesiones(personas);

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(personas);
