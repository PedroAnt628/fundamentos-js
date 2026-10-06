document.querySelector("#convertir").addEventListener("click", () => {
  const texto = document.querySelector("#texto").value;
  document.querySelector("#salida").textContent =
    `Original: ${texto}\nMayúsculas: ${texto.toUpperCase()}\nMinúsculas: ${texto.toLowerCase()}`;
});