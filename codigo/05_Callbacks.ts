//* Definición de callback.
// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa la operación.

//* Cómo los callbacks permiten la ejecución diferida.
// Los callbacks se utilizan para manejar operaciones asincrónicas, como la lectura de archivos, solicitudes de red, etc.
// Permiten que una función se ejecute después de que se complete una operación asincrónica, evitando el bloqueo del hilo principal.

type Callback = (error: Error | null, result?: any) => void;

//* Ejemplo práctico de un callback.

const fetchData = (callback: Callback): void => {
  setTimeout(() => {
    const data = "Data fetched";
    callback(new Error("Failed to fetch data"));
  }, 3000);
};

console.clear();

fetchData((error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Success:", result);
  }
});
