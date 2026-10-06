function filtrarPares(array) {
  return array.filter((numero) => numero % 2 === 0);
}

document.querySelector("#filtrar").addEventListener("click", () => {
  const valor = document.querySelector("#numeros").value.trim();
  const numeros = valor.split(",").map((numero) => Number(numero.trim()));
  const salida = document.querySelector("#salida");

  if (valor === "" || numeros.some((numero) => isNaN(numero))) {
    salida.textContent = "Introduce números válidos separados por comas.";
    return;
  }

  salida.textContent =
    `Original: ${numeros.join(", ")}\nPares: ${filtrarPares(numeros).join(", ")}`;
});