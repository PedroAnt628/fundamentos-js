function contarVocales(palabra) {
  const vocales = "aeiouáéíóúü";
  palabra = palabra.toLowerCase();
  let total = 0;

  for (let indice = 0; indice < palabra.length; indice += 1) {
    if (vocales.includes(palabra[indice])) {
      total += 1;
    }
  }

  return total;
}

document.querySelector("#contar").addEventListener("click", () => {
  const palabra = document.querySelector("#palabra").value;
  document.querySelector("#salida").textContent =
    `La palabra contiene ${contarVocales(palabra)} vocales.`;
});