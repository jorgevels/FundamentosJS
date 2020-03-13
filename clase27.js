//--COMO FUNCIONA EL TIEMPO EN JAVASCRIPT--

// Escribimos tres lineas con console  a b c
// para entender como JS ejecuta algo de manera asincrona
// debemos tener encuenta que operaciones realizamos de manera asincrona
// Si decidimos realizar una tarea en el futuro-
// se valla a ejecutar asincronamente
// si decidimos interactuar con el don modificando-
// algunos de los elementos que vemos en la pantalla
// modificar un titulo, un boton
// cambiarle alguna clase a un elemento
// todo eso tambien se va a ejecutar de manera asincrona
// si realizamos un pedido a una API externa-
// ya sea con fetch o vanilla JS

console.log("a");

// Escribimos esta funcion que recibe dos parametros-
// el primero es una funcion y el segundo es un delay
// el delay esta expresado en milisegundos
// y la funcion se ejecuta de acuerdo al tiempo que le indiquemos
// debemos pasarle una referencia a la funcion

// Si en la funcion le pasamos que se ejecute-
// en cero segundos tambien se ejecutara despues de las otras dos
// Al tener el setTimeout en cero JS lo que hace-
// es imprime el primer console y cuando entra-
// a la funcion la pasa a la cola de tareas y continua-
// ejecutando el programa y cuando termine el programa principal-
// inicia a sacar lo que tenga en la cola de tareas-
// y ejecuta la letra b

setTimeout(() => console.log("b"), 0);
console.log("c");

// Definimos otro setTimeou para imprimir-
// la letra d en dos segundos
setTimeout(() => console.log("d"), 2000);

// Declaramos un ciclo for que valla desde 0 hasta-
// un numero muy grande
// La letra d no se imprimira por consola hasta-
// que no ternime la tarea principal del progrma-
// que es el ciclo for
for (var i = 0; i < 1000000; i++) {}

// Entender como funciona el tiempo de ejecucion-
// es muy importante

// Nota: NO DEBO BLOQUEAR EL EventLopp
