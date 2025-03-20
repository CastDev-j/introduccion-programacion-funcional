//* Definición de función pura.

//* Una función pura es una función que, dada la misma entrada, siempre produce la misma salida y no tiene efectos secundarios.

//? Ejemplo de función pura.
const sumarPura = (a: number, b: number): number => a + b;

//const sumarPura = (a: number, b: number): number => {
//  return a + b
//};


console.log(sumar(2, 3)); // 5

//? Ejemplo de función impura.
let resultado = 0;

const sumarImpuro = (a: number, b: number): number => {
  resultado = a + b;
  return resultado;
};

console.log(sumarImpuro(2, 3)); // 5
console.log(resultado); // 5

//* Regla: Mismo input, mismo output, sin efectos secundarios.

//* Beneficios:
//* - Facilidad de prueba
//* - Reutilización
//* - Mantenimiento


// Ejercicio, Generar una función que reciba un numero y devuelva su cuadrado

const cuadrado = null;
console.log();

