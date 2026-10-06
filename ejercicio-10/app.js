function maximo(array) {
  return Math.max(...array);
}

document.querySelector("#calcular").addEventListener("click", () => {
  const valor = document.querySelector("#numeros").value.trim();
  const numeros = valor.split(",").map((numero) => Number(numero.trim()));
  const salida = document.querySelector("#salida");

  if (valor === "" || numeros.some((numero) => isNaN(numero))) {
    salida.textContent = "Introduce números válidos separados por comas.";
    return;
  }

  salida.textContent = `El número máximo es ${maximo(numeros)}.`;
});