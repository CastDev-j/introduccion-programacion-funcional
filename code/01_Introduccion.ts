// Temas a cubrir:

// Definición de programación funcional.
/**
 * La programación funcional es un paradigma de programación que trata la computación
 * como la evaluación de funciones matemáticas y evita el cambio de estado y los datos mutables.
 */

// Comparación con la programación imperativa y declarativa.
/**
 * En la programación imperativa, el enfoque está en cómo se realizan las tareas, mediante el uso de declaraciones que cambian el estado del programa.
 * En la programación declarativa, el enfoque está en qué se debe hacer, mediante la descripción de las relaciones y restricciones entre las variables.
 */

// Principios clave: inmutabilidad, funciones puras, composición, etc.
// Se tocarán los principios de inmutabilidad, funciones puras, composición, en los ejemplos prácticos.

// Ejemplo básico de una función en estilo funcional vs. imperativo.

// Estilo imperativo
let numerosImperativos = [1, 2, 3, 4, 5];
let doblesImperativos: number[] = [];
for (let i = 0; i < numerosImperativos.length; i++) {
  doblesImperativos.push(numerosImperativos[i] * 2);
}
console.log(doblesImperativos);

// Estilo declarativo
let numerosDeclarativos = [1, 2, 3, 4, 5];
let doblesDeclarativos = numerosDeclarativos.map((numero) => numero * 2);
console.log(doblesDeclarativos);
