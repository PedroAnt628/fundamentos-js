function esPar(numero) {
  return numero % 2 === 0;
}

const salida = document.querySelector("#salida");

document.querySelector("#comprobar").addEventListener("click", () => {
  const valor = prompt("Introduce un número entero:");

  if (valor === null || valor.trim() === "") {
    salida.textContent = "Operación cancelada o falta introducir un número.";
    return;
  }

  const numero = Number(valor);
  if (isNaN(numero) || !Number.isInteger(numero)) {
    salida.textContent = "Introduce un número entero válido.";
    return;
  }

  const resultado = `${numero} es ${esPar(numero) ? "par" : "impar"}.`;
  salida.textContent = resultado;
  console.log(resultado);
});