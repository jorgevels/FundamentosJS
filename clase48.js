const Persona = {
  nombre: "Jorge",
  apellido: "Velasquez"
};

const Persona2 = {
  nombre: "Yesika",
  apellido: "Cortés"
};

function saludar(saludo = "Hola") {
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// const saludarASacha = saludar.bind(sacha)
// const saludarAYesika = saludar.bind(yesika)
//
// setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

// saludar.call(sacha, 'Hola che')

saludar.apply(Persona, ["Hola che"]);
saludar.apply(Persona2, ["Hola linda"]);
