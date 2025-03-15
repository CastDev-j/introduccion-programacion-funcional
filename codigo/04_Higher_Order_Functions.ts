//* Definición de funciones de orden superior.
// Una función de orden superior es una función que recibe una función como argumento o devuelve una función como resultado.

//* Ejemplos en TypeScript:
const sumar = (a: number, b: number): number => a + b;
const restar = (a: number, b: number): number => b - a;

//! Completa las siguientes funciones.
const multiplicar = null;
const dividir = null;

//? Funciones que reciben funciones como argumentos.
const operar = (
  a: number,
  b: number,
  operacion: (a: number, b: number) => number
): number => operacion(a, b);

console.log(operar(2, 3, sumar)); // 5
console.log(operar(4, 3, restar)); // -1
//! llama las funciones multiplicar y dividir.
console.log();
console.log();

//? Funciones que retornan funciones.
const sumarX = (x: number): ((y: number) => number) => {
  return (y: number): number => x + y;
};

//! Completa la función restarX.
const restarX = null;

const sumar2 = sumarX(2);
const sumar3 = sumarX(3);

console.log(sumar2(3)); // 5
console.log(sumar3(3)); // 6

//! Llama la función restarX y genera la salida esperada.
const restar5 = null;
const restar6 = null;

console.log();
console.log();
