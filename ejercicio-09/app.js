function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

if (globalThis.document) {
  document.querySelector("#invertir").addEventListener("click", () => {
    const texto = document.querySelector("#texto").value;
    document.querySelector("#salida").textContent =
      `Original: ${texto}\nInvertida: ${invertirCadena(texto)}`;
  });
} else {
  const texto = "JavaScript";
  console.log(`Original: ${texto}`);
  console.log(`Invertida: ${invertirCadena(texto)}`);
}