document.querySelector("#ordenar").addEventListener("click", () => {
  const valor = document.querySelector("#numeros").value.trim();
  const numeros = valor.split(",").map((numero) => Number(numero.trim()));
  const salida = document.querySelector("#salida");

  if (valor === "" || numeros.some((numero) => isNaN(numero))) {
    salida.textContent = "Introduce números válidos separados por comas.";
    return;
  }

  const original = numeros.join(", ");
  numeros.sort((a, b) => a - b);
  salida.textContent = `Original: ${original}\nOrdenados: ${numeros.join(", ")}`;
});