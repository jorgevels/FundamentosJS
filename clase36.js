//----- COMPLEMENTOS DEL CURSO-----

// --------VAR, LET y CONST-------

/// VAR
// Cuando declaramos variables con  var es lo mismo-
// como si declararamos un hoistind

/// LET
// las variables con var es conveniente declararlas-
// en la parte superior

/// CONST
// Se comporta parecido a let ecepto que no podemos-
// volver a asignar la variable
// si declaramos un array con una constante no podemos-
// reasignar un array pero si podemos modificar pero no-
// podemos reasignar la variable a otro valor

// Si utilizamos let el alcance de la varible se va a-
// reducir al bloque donde esa variable es utilizada y declarada
//

// Declaramos un objeto con sus atributos
var Persona = {
  nombre: "Jorge",
  apellido: "Velasquez",
  edad: 8
};

// Definimos una funcion y por parametros le pasamos persona
function esMayorDeEdad(persona) {
  // Declaramos una varible para el mensaje
  let mensaje;
  // Declaramos una constante con la edad
  const MAYORIA_DE_EDAD = 18;
  // preguntamos si la persona es mayor de edad-
  // con este condicional
  if (persona.edad >= MAYORIA_DE_EDAD) {
    // invocamos la variable mensaje
    mensaje = "Es mayor de edad";
  } else {
    mensaje = "Es menor de edad";
  }
  // Con este console nos imprime el mensaje de la edad
  console.log(mensaje);
}

esMayorDeEdad(Persona);

// ciclo FOR
// Cuando declaramos un ciclo for

for (let i = 0; i < 10; i++) {
  // mostramos por console el valor de i
  console.log(i);
}

// si queremos acceder al valor de i con un console fuera-
// del ciclo for con var lo podemos hacer pero con-
// let no es acesible ya que reduce el alcance de la variable
console.log(`Terminó el for, el valor de i es ${i}`);

// NO UTILIZAR VAR
// SIMPRE UTILIZAR LET
// Y LAS CONSTANTES CON CONST
