//* Definición de función pura.

//* Una función pura es una función que, dada la misma entrada, siempre produce la misma salida y no tiene efectos secundarios.

//? Ejemplo de función pura.
const sumar = (a: number, b: number): number => a + b;

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









//* Extra: Comparación con funciones impuras.

//? Función pura.

const doblar = (numero: number): number => numero * 2;

console.log(doblar(2)); // 4

//? Función impura.

let resultadoImpuro = 0;

const doblarImpuro = (numero: number): number => {
  resultadoImpuro = numero * 2;
  return resultadoImpuro;
};

console.log(doblarImpuro(2)); // 4
console.log(resultadoImpuro); // 4
