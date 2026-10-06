function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log("0 °C son", celsiusAFahrenheit(0), "°F");
console.log("100 °C son", celsiusAFahrenheit(100), "°F");

document.querySelector("#convertir").addEventListener("click", () => {
  const valor = document.querySelector("#celsius").value;
  const salida = document.querySelector("#salida");

  if (valor.trim() === "" || !Number.isFinite(Number(valor))) {
    salida.textContent = "Introduce una temperatura válida.";
    return;
  }

  const celsius = Number(valor);
  salida.textContent = `${celsius} °C equivalen a ${celsiusAFahrenheit(celsius)} °F.`;
});