//* Set de ejercicios para afianzar los conocimientos

//* Ejercicio 1: Filtrar números pares y elevar al cuadrado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Escribe una función que filtre los números pares y los eleve al cuadrado
const transformarPares = (numeros: number[]): number[] => {
  // Implementa aquí la solución usando filter y map

  return [];
};

console.log(transformarPares(numeros));
// Salida esperada: [4, 16, 36, 64, 100]

//* Ejercicio 2: Composición de funciones

const nombres = ["andres", "maria", "pedro", "laura"];

// Función que capitaliza la primera letra
const capitalizar = (nombre: string): string => {
  // Implementa la función

  return "";
};

// Función que agrega un emoji al final del nombre 😊
const agregarEmoji = (nombre: string): string => {
  // Implementa la función

  return "";
};

// Función que combina ambas transformaciones
const transformarNombres = (nombres: string[]): string[] => {
  // Aplica composición de funciones

  return [];
};

console.log(transformarNombres(nombres));
// Salida esperada: ["Andres 😊", "Maria 😊", "Pedro 😊", "Laura 😊"]

//* Ejercicio 3: Calcular estadísticas

const valores = [10, 20, 30, 40, 50];

// Función que calcula la suma y el promedio de los números
const calcularEstadisticas = (
  valores: number[]
): { suma: number; promedio: number } => {
  // Implementa aquí la solución usando reduce

  return { suma: 0, promedio: 0 };
};

console.log(calcularEstadisticas(valores));
// Salida esperada: { suma: 150, promedio: 30 }
