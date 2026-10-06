function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("#generar").addEventListener("click", () => {
  const min = Number(document.querySelector("#minimo").value);
  const max = Number(document.querySelector("#maximo").value);
  const salida = document.querySelector("#salida");

  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
    salida.textContent = "Introduce dos enteros válidos y asegúrate de que el mínimo no supere el máximo.";
    return;
  }

  const resultados = [];
  for (let i = 0; i < 5; i += 1) {
    resultados.push(azar(min, max));
  }
  salida.textContent = `Cinco números entre ${min} y ${max}, incluidos: ${resultados.join(", ")}`;
});