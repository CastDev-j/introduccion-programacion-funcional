//* Ejercicio 3: Calcular estadísticas

const valores = [10, 20, 30, 40, 50];

// Función que calcula la suma y el promedio de los números
const calcularEstadisticas = (
  valores: number[]
): { suma: number; promedio: number } => {
  // Implementa aquí la solución usando reduce
  const suma = valores.reduce((prev: number, curr: number) => prev + curr, 0);
  const promedio = suma / valores.length;
  return { suma, promedio };
};

console.log(calcularEstadisticas(valores));
// Salida esperada: { suma: 150, promedio: 30 }