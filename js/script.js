const boton = document.getElementById("botonCambiar");
const mensaje = document.getElementById("mensaje");
const input = document.getElementById("userName");

boton.addEventListener("click", () => {
const usuario = input.value.trim();

  // Mostrar imagen de transición
  transicionImg.style.display = "block";

  // Oculta la imagen después de 2.5 segundos y ejecuta el resto
  setTimeout(() => {
    transicionImg.style.display = "none";

    // Cambia el mensaje y los estilos:
    if (usuario && !mensaje.classList.contains("mensaje-rojo")) {
      mensaje.textContent = "Hola " + usuario + ", no deberías haber accedido aquí";
      mensaje.classList.add("mensaje-rojo"); // Aplica el gradiente rojo a las letras
      input.style.display = "none";
    } else {
      mensaje.textContent = "Bienvenido a mi página web";
      mensaje.classList.remove("mensaje-rojo"); // Vuelve al color original
      input.style.display = "inline-block";
    }
    // Alterna la clase 'red' en todas las columnas Matrix
    document.querySelectorAll(".matrix-column").forEach((col) => {
      col.classList.toggle("red");
    });
  }, 400); // 2.5 segundos (ajusta a 2000 o 3000 si quieres diferente duración)
});
// Selecciona todas las columnas
const columnas = document.querySelectorAll(".matrix-column");

// Calcula el ancho de la ventana y la cantidad de columnas
const screenWidth = window.innerWidth;
const totalCols = columnas.length;

// Calcula el ancho asignado a cada columna
const colWidth = screenWidth / totalCols;

// Distribuye cada columna a lo largo del ancho
columnas.forEach((col, i) => {
  col.style.left = `${i * colWidth}px`;
  col.style.width = `${colWidth}px`;
});
