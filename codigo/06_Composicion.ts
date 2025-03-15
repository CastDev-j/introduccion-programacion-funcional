//* Métodos de Arrays en Programación Funcional

//* map
// El método `map` crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array que llama.

const numeros = [1, 2, 3, 4, 5];

// Usando map para multiplicar cada número por 2
const dobles = numeros.map((num) => num * 2);

console.log(dobles); // [2, 4, 6, 8, 10]

//* filter
// El método `filter` crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada.

const mayoresQueTres = numeros.filter((num) => num > 3);

console.log(mayoresQueTres); // [4, 5]

//* reduce
// El método `reduce` aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const suma = numeros.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);

console.log(suma); // 15

//* forEach
// El método `forEach` ejecuta la función proporcionada una vez por cada elemento del array.

numeros.forEach(console.log);
// 1
// 2
// 3
// 4
// 5

//* Encadenamiento de Métodos

//* Ejemplo 1: map y filter

const resultado1 = numeros.map((num) => num * 2).filter((num) => num > 5);

console.log(resultado1); // [6, 8, 10]

//* Ejemplo 2: map, filter y reduce

const resultado2 = numeros
  .map((num) => num * 2)
  .filter((num) => num > 5)
  .reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(resultado2); // 24 (6 + 8 + 10)

//* Ejemplo 3: map y forEach

const nombres = ["Ana", "Juan", "Pedro", "Maria"];

nombres
  .map((nombre) => nombre.toUpperCase())
  .forEach((nombre) => console.log(nombre));
// ANA
// JUAN
// PEDRO
// MARIA