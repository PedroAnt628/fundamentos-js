const persona = {
  nombre: "Ana García",
  edad: 28,
  activo: true,
  aficiones: ["leer", "senderismo", "música"],
  direccion: {
    calle: "Calle Mayor",
    ciudad: "Madrid"
  }
};

const salida = document.querySelector("#salida");
function mostrarPersona() {
  console.log(persona);
  console.table(persona);
  salida.textContent = JSON.stringify(persona, null, 2);
}

document.querySelector("#mostrar").addEventListener("click", mostrarPersona);
mostrarPersona();