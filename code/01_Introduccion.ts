// Temas a cubrir:

// Definición de programación funcional.
/**
 * La programación funcional es un paradigma de programación que trata la computación 
 * como la evaluación de funciones matemáticas y evita el cambio de estado y los datos mutables.
 */

// Comparación con la programación imperativa y orientada a objetos.
/**
 * En la programación imperativa, el enfoque está en cómo se realizan las tareas, mediante el uso de declaraciones que cambian el estado del programa.
 * La programación orientada a objetos organiza el código en objetos que contienen tanto datos como métodos.
 * La programación funcional se centra en qué se debe calcular, utilizando funciones puras y evitando efectos secundarios.
 */

// Principios clave: inmutabilidad, funciones puras, composición, etc.
/**
 * Inmutabilidad: Los datos no cambian después de ser creados. Esto evita efectos secundarios y facilita el razonamiento sobre el código.
 * Funciones puras: Una función pura siempre produce el mismo resultado dado el mismo conjunto de argumentos y no tiene efectos secundarios.
 * Composición: La capacidad de combinar funciones simples para construir funciones más complejas, promoviendo la reutilización del código.
 */

// Ejemplo básico de una función en estilo funcional vs. imperativo.

// Estilo imperativo
let numerosImperativos = [1, 2, 3, 4, 5];
let doblesImperativos: number[] = [];
for (let i = 0; i < numerosImperativos.length; i++) {
  doblesImperativos.push(numerosImperativos[i] * 2);
}
console.log(doblesImperativos); 

// Estilo funcional
const numerosFuncionales = [1, 2, 3, 4, 5];
const doblesFuncionales = numerosFuncionales.map((n) => n * 2);
console.log(doblesFuncionales);
