function esPrimo(num) {
  if (num < 2) {
    return false;
  }

  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

function primosHasta(limite) {
  const primos = [];

  for (let numero = 2; numero <= limite; numero += 1) {
    if (esPrimo(numero)) {
      primos.push(numero);
    }
  }

  return primos;
}

document.querySelector("#generar").addEventListener("click", () => {
  const limite = Number(document.querySelector("#limite").value);
  const salida = document.querySelector("#salida");

  if (!Number.isInteger(limite) || limite < 1) {
    salida.textContent = "Introduce un entero mayor o igual que 1.";
    return;
  }

  salida.textContent = `Números primos hasta ${limite}: ${primosHasta(limite).join(", ") || "ninguno"}`;
});