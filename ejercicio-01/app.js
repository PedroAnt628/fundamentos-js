const texto = "Hola, JavaScript";
const numero = 42;
const activo = true;
const vacio = null;
let sinValor;
const lista = [1, 2, 3];
const persona = { nombre: "Ana" };

const salida = document.querySelector("#salida");

function mostrarDatos() {
  console.log(texto, typeof texto);
  console.info(numero, typeof numero);
  console.debug(activo, typeof activo);
  console.error(vacio, typeof vacio);
  console.log(sinValor, typeof sinValor);
  console.log(lista, typeof lista);
  console.log(persona, typeof persona);

  salida.textContent =
    `Texto: ${texto} (${typeof texto})\n` +
    `Número: ${numero} (${typeof numero})\n` +
    `Booleano: ${activo} (${typeof activo})\n` +
    `Nulo: ${vacio} (${typeof vacio})\n` +
    `No definido: ${sinValor} (${typeof sinValor})\n` +
    `Array: ${lista} (${typeof lista})\n` +
    `Objeto: ${JSON.stringify(persona)} (${typeof persona})`;
}

document.querySelector("#mostrar").addEventListener("click", mostrarDatos);
mostrarDatos();