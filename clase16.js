//----CONDICIONAL MULTIPLE SWITCH-----
// Es una estructua de control que nos permite_
// decidir que codigo ejecutar de acuerdo a-
// multiples condiciones
// con este example vamos a decirle el horoscopo al usuario

// Declaramos la variable signo y la igualamos a la-
// funcion prompt la cual nos permite mostrarle una-
// al usuario y pedirle datos
// llamamos la funcion y por parametros le pasamos-
// una pregunta ¿Cual es tu signo?
// esta funcion nos va a devolver un valor
var signo = prompt("¿Cuál es tu signo?");

// Para validar que signo digito el usuario-
// podriamos utilizar el condicional if pero se-
// repetiria muchas veces el mismo codigo

// Para solucionar esto vamos a utilizar SWITCH

// Escribimos la palabra switch y abrimos parentesis-
// dentro de los parentesis vamos a llamar la variavle-
// signo y luego abrimos llaves, dentro de las llaves-
// vamos a ir poniendo cada uno de los casos

// Escribimos la palabra case y entre comillas el-
// nombre del signo y terminamos con dos puntos:
// y luego por un console el mensaje que quiero-
// mostrar al usuario
// Despues del console agregamos la palabra breack;
// breack hace que se detenga la ejecucion.
// y no se siga preguntando por los demas casos
// lo mismo vamos hacer para cada uno de los signos

switch (signo) {
  case "acuario":
    console.log(
      "Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela."
    );
    // breack hace que se detenga la ejecucion.
    // y no se siga preguntando por los demas casos
    break;
  case "piscis":
    console.log(
      "Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados."
    );
    break;
  // Para controlar que el usuario escriba el signo-
  // con tilde o sin tilde agregamos los casos que-
  // sean necesarios
  case "cancer":
  case "cáncer":
    console.log(
      "Dentro su cabeza le surgirán ideas extraordinarias, sobre todo si se dedica a actividades creativas donde pueda ponerlas en práctica."
    );
    break;
  case "aries":
    console.log(
      "Deje de preocuparse más de lo necesario, ya que podría sufrir una crisis de estrés. Ese problema que lo tiene inquieto, se resolverá de la manera menos esperada."
    );
    break;
  case "tauro":
    console.log(
      "Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos."
    );
    break;
  // Para controlar que el usuario escriba el signo-
  // con tilde o sin tilde agregamos los casos que-
  // sean necesarios
  case "geminis":
  case "géminis":
    console.log(
      "Sepa que en pocos días recuperará su armonía mental. De esta forma, podrá llevar a cabo todos los proyectos que tiene en mente con claridad y constancia."
    );
    break;
  case "leo":
    console.log(
      "Intente hacer lo posible para superar los miedos que lo agobian cada vez que debe tomar una decisión importante en su vida. Relájese."
    );
    break;
  case "virgo":
    console.log(
      "Esté atento a los asuntos familiares que tiene pendientes hace días. Sepa que la Luna en su signo le permitirá lograr todo lo que se proponga en el día."
    );
    break;
  case "libra":
    console.log(
      "Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy."
    );
    break;
  case "escorpio":
    console.log(
      "Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas."
    );
    break;
  case "sagitario":
    console.log(
      "Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás."
    );
    break;
  case "capricornio":
    console.log(
      "Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario."
    );
    break;
  // Este caso se ejecuta si no se cumple ninguna de-
  // las anteriores y tambien retorna un mensaje
  default:
    console.log("No es un signo zodiacal válido");
    break;
}
