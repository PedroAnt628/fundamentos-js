function generarFrecuencias() {
  const frecuencias = {};

  for (let i = 0; i < 100; i += 1) {
    const numero = Math.floor(Math.random() * 20) + 1;
    if (frecuencias[numero] === undefined) {
      frecuencias[numero] = 0;
    }
    frecuencias[numero]++;
  }

  console.table(frecuencias);
  document.querySelector("#salida").textContent =
    JSON.stringify(frecuencias, null, 2);
}

document.querySelector("#generar").addEventListener("click", generarFrecuencias);
generarFrecuencias();