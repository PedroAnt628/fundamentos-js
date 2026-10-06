function palabraMasLarga(texto) {
  const palabras = texto.trim().split(/\s+/);
  let masLarga = "";

  for (const palabra of palabras) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }

  return masLarga;
}

document.querySelector("#buscar").addEventListener("click", () => {
  const texto = document.querySelector("#texto").value;
  const palabra = palabraMasLarga(texto);
  document.querySelector("#salida").textContent =
    palabra === ""
      ? "Introduce un texto."
      : `La palabra más larga es "${palabra}" (${palabra.length} letras). Si hay empate, se muestra la primera.`;
});