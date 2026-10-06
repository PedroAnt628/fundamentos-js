document.querySelector("#comprobar").addEventListener("click", () => {
  const valor = document.querySelector("#numero").value;
  const salida = document.querySelector("#salida");

  if (valor.trim() === "") {
    salida.textContent = "Introduce un número.";
    return;
  }

  const numero = Number(valor);
  if (isNaN(numero)) {
    salida.textContent = "Introduce un número válido.";
    return;
  }

  salida.textContent = `${numero} es ${numero % 2 === 0 ? "par" : "impar"}.`;
});