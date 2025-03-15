//* Definición de programación funcional.
// La programación funcional es un paradigma de programación que trata la computación
//como la evaluación de funciones matemáticas y evita el cambio de estado y los datos mutables.

//* Comparación con la programación imperativa y declarativa.
//?En la programación imperativa, el enfoque está en cómo se realizan las tareas, mediante el uso de declaraciones que cambian el estado del programa.
//?En la programación declarativa, el enfoque está en qué se debe hacer, mediante la descripción de las relaciones y restricciones entre las variables.

//* Principios clave: inmutabilidad, funciones puras, composición, etc.

//* Ejemplo básico de una función en estilo funcional vs. imperativo.

const arregloNumeros = [1, 2, 3, 4, 5];
const multiplicarPorDos = (numero: number): number => numero * 2;

// Estilo imperativo
let doblesImperativos: number[] = [];
for (let i = 0; i < arregloNumeros.length; i++)
  doblesImperativos.push(multiplicarPorDos(arregloNumeros[i]));

console.log(doblesImperativos); // [2, 4, 6, 8, 10]

// Estilo declarativo

let doblesDeclarativos = arregloNumeros.map(multiplicarPorDos);
console.log(arregloNumeros); // [1, 2, 3, 4, 5]
console.log(doblesDeclarativos); // [2, 4, 6, 8, 10]
