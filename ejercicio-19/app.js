function promedio(array) {
  return array.reduce((suma, numero) => suma + numero, 0) / array.length;
}

document.querySelector("#calcular").addEventListener("click", () => {
  const valor = document.querySelector("#numeros").value.trim();
  const numeros = valor === "" ? [] : valor.split(",").map((numero) => Number(numero.trim()));
  const salida = document.querySelector("#salida");

  if (numeros.some((numero) => isNaN(numero))) {
    salida.textContent = "Introduce números válidos separados por comas.";
    return;
  }

  if (numeros.length === 0) {
    salida.textContent = "No se puede calcular el promedio de un array vacío.";
    return;
  }

  salida.textContent = `El promedio es ${promedio(numeros)}.`;
});