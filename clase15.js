//-----ESTRUTURA REPETITICA DO-WHILE-----
//Se diferencia un poco del while ya que ejecuta-
// almenos una vez el codigo

//Declaramos la variable contador y la inicializamos en cero

var contador = 0;
// Vamos dedinir una funcion que me dice si esta-
// lloviendo o no

// Definimos la funcion llueve y nos regresa el modulo de-
//math.random con un 25% de probabilida que llueve
const llueve = () => Math.random() < 0.25;

//--------CICLO do-WHILE---------
// vamos hacer algo almenos una vez hasta que se-
//cumpla una condicion.

// Para definir este ciclo escribimos la palabra do-
// luego abrimos llaves y dentro de estas le pasamos-
// el contador despues de estas colocamos la palabra-
// while que es donde vamos a llamar la condicion

do {
  // incementamos el contador
  // esto se repite mientas no llueva
  contador++;
} while (
  !llueve()
  // En esta parte llamamos la condicion
  // si la condicion se cumple el codigo del do-
  // se vulve a ejecutar
);

// Con este condicional igualamos el contador a 1-
// con el fin que si el contador es 1 muestre un-
// mensaje en singular "una vez"
if (contador === 1) {
  // Le pasamos por console un mensaje al usuario
  // diciendole las veces que fue haber su llovia
  console.log(`Fui a ver si llovía ${contador} vez`);
} else {
  // Si la primera condicion no se cumple imprime-
  // por console el mensaje en plurar
  // Le pasamos por console un mensaje al usuario
  // diciendole las veces que fue haber su llovia
  console.log(`Fui a ver si llovía ${contador} veces`);
}
