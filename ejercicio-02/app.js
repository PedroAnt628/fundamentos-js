function generarNumeros() {
  const numeros = [];

  for (let i = 0; i < 100; i += 1) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
  }

  const filtrados = numeros.filter((numero) => numero >= 20 && numero <= 50);

  console.table(numeros);
  document.querySelector("#salida").textContent =
    `Array filtrado (20 a 50, incluidos): ${filtrados.join(", ")}`;
}

document.querySelector("#generar").addEventListener("click", generarNumeros);
generarNumeros();