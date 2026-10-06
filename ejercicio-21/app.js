function mayoresQue(array, limite) {
  return array.filter((numero) => numero > limite);
}

document.querySelector("#filtrar").addEventListener("click", () => {
  const valor = document.querySelector("#numeros").value.trim();
  const limiteValor = document.querySelector("#limite").value;
  const numeros = valor.split(",").map((numero) => Number(numero.trim()));
  const salida = document.querySelector("#salida");

  if (valor === "" || limiteValor.trim() === "" ||
      numeros.some((numero) => isNaN(numero)) || isNaN(Number(limiteValor))) {
    salida.textContent = "Introduce una lista de números y un límite válidos.";
    return;
  }

  const limite = Number(limiteValor);
  salida.textContent =
    `Original: ${numeros.join(", ")}\nLímite: ${limite}\nMayores: ${mayoresQue(numeros, limite).join(", ")}`;
});