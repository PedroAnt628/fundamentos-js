document.querySelector("#sumar").addEventListener("click", () => {
  const primerValor = prompt("Introduce el primer número:");
  const salida = document.querySelector("#salida");

  if (primerValor === null) {
    salida.textContent = "Operación cancelada.";
    return;
  }

  const segundoValor = prompt("Introduce el segundo número:");
  if (segundoValor === null) {
    salida.textContent = "Operación cancelada.";
    return;
  }

  const primero = Number(primerValor);
  const segundo = Number(segundoValor);

  if (primerValor.trim() === "" || segundoValor.trim() === "" ||
      isNaN(primero) || isNaN(segundo)) {
    salida.textContent = "Introduce dos valores numéricos válidos.";
    return;
  }

  const suma = primero + segundo;
  salida.textContent = `La suma es: ${suma}`;
  console.log(`La suma de ${primero} y ${segundo} es ${suma}`);
});