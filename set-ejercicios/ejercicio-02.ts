//* Ejercicio 2: Composición de funciones

const nombres = ["andres", "maria", "pedro", "laura"];

// Función que capitaliza la primera letra
const capitalizar = (nombre: string): string => {
  // Implementa la función
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
};

// Función que agrega un emoji al final del nombre 😊
const agregarEmoji = (nombre: string): string => {
  // Implementa la función

  return nombre + " 😊";
};

// Función que combina las dos funciones anteriores
const capitalizarYAgregarEmoji = (nombre: string): string => {
  // Implementa la función
  return agregarEmoji(capitalizar(nombre));
};

// Mapea los nombres con la función compuesta
const nombresFormateados = nombres.map(capitalizarYAgregarEmoji);

console.log(nombresFormateados); // Salida esperada: ["Andres 😊", "Maria 😊", "Pedro 😊", "Laura 😊"]








// Solucion curiosa de una sola linea
const nombresFormateados2 = nombres.map(
  (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1) + " 😊"
);
