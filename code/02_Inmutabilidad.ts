//* ¿Qué es la inmutabilidad?
// La inmutabilidad consiste en que una vez que un objeto ha sido creado, no puede ser modificado.
// En programación funcional, la inmutabilidad es un concepto clave porque evita efectos secundarios
// y hace que el código sea más predecible y fácil de depurar.

//* Problemas de los datos mutables.
// Los datos mutables pueden causar problemas en el código, como efectos secundarios inesperados.

//* Uso de const en TypeScript.
// En TypeScript, la palabra clave `const` se utiliza para declarar constantes, que son inmutables.

//* Ejemplo de no inmutabilidad

const arregloBaseNoInmutabilidad = [1, 2, 3, 4, 5];
arregloBaseNoInmutabilidad[5] = 100;

console.log(arregloBaseNoInmutabilidad); // [1, 2, 3, 4, 5, 100]

//* Ejemplo de inmutabilidad

const arregloBaseInmutabilidad = [1, 2, 3, 4, 5];
const arregloModificadoInmutabilidad = [...arregloBaseInmutabilidad, 100]; // el spread operator hace algo así [1, 2, 3, 4, 5, 100]

console.log(arregloBaseInmutabilidad); // [1, 2, 3, 4, 5]
console.log(arregloModificadoInmutabilidad); // [1, 2, 3, 4, 5, 100]

// Como puedes ver, al usar el operador de propagación (`...`), creamos una copia del arreglo original.
// Así, cualquier modificación en la copia no afecta al arreglo original, manteniéndolo inmutable.

//! Algunos métodos inmutables en arrays y objetos (map, filter, reduce).
//? map recorre un array y devuelve un nuevo array con los resultados de aplicar una función a cada elemento.
//? filter recorre un array y devuelve un nuevo array con los elementos que cumplen una condición.
//? reduce recorre un array y devuelve un único valor a partir de los elementos del array.
