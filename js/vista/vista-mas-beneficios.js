import Controlador from "../controlador/controlador-mas-beneficios.js";
const Vista = {
  tickets: function (data) {
    const ticket = document.getElementById("tickets");
    const ticketsContent = ticket.querySelector(".contenedor-boletos");

    ticketsContent.innerHTML = `
    <div id="contenedor-boletos">
       
    </div>
    `;
    const beneficiosContainer = ticketsContent.querySelector(
      "#contenedor-boletos"
    );
    this.agregarBeneficios(data, beneficiosContainer);
    return ticketsContent;
  },
  agregarBeneficios: function (data, beneficiosContainer) {
    data.forEach(element =>  {
      const logo = element.imagen;
      const lenguaje = element.nombre;
      const contenedor = document.createElement("div");
      contenedor.classList = "contenido-tickets";
      contenedor.innerHTML = `
        <div class="imagen-tickets">
          <img src="${logo}" alt="logo comercio">
        </div>
        <div class="tickets-contenido">
          <div class="texto-ticket">
            <h3 class="nombreComercio">${lenguaje}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
            <button class="boton">20%</button>
          </div>
        </div>`;
        
      beneficiosContainer.appendChild(contenedor);
    })
  
    // Agrega el evento clic a cada botón
    const botones = document.querySelectorAll(".boton");
    botones.forEach(function(boton){
      boton.onclick = function() {
        if (localStorage.getItem("access_token")) {
          
          const nombre = boton.closest(".contenido-tickets").querySelector(".nombreComercio").textContent;
          localStorage.setItem('comercio', nombre)
          location.href ="paginas-beneficios-tickest.html"
          console.log(nombre);
          // Realiza otras acciones con el nombre obtenido
        } else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Primero debes iniciar sesión",
          });
        }
      }
    });
  },
}
export default Vista;
document.addEventListener('DOMContentLoaded', function(){
Controlador.mostrarTickets()
})