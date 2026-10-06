function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  return palabra === palabra.split("").reverse().join("");
}

document.querySelector("#comprobar").addEventListener("click", () => {
  const palabra = document.querySelector("#palabra").value.trim();
  const salida = document.querySelector("#salida");

  if (palabra === "") {
    salida.textContent = "Introduce una palabra.";
    return;
  }

  salida.textContent = esPalindromo(palabra)
    ? `"${palabra}" es un palíndromo.`
    : `"${palabra}" no es un palíndromo.`;
});

console.log("reconocer es palíndromo:", esPalindromo("reconocer"));
console.log("JavaScript es palíndromo:", esPalindromo("JavaScript"));