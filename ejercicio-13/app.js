function contarPalabras(frase) {
  frase = frase.trim();
  return frase === "" ? 0 : frase.split(/\s+/).length;
}

document.querySelector("#contar").addEventListener("click", () => {
  const frase = document.querySelector("#frase").value;
  document.querySelector("#salida").textContent =
    `La frase contiene ${contarPalabras(frase)} palabras.`;
});