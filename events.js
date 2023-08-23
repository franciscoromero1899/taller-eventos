document.addEventListener("DOMContentLoaded", function() {
  const botonDiv = document.querySelector(".boton");

  botonDiv.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
          alert("Hola! Has presionado el botón de saludar.");
      } else {
          alert("Hola! Soy el div");
      }
  });
});