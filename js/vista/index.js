const Vista = {
  llenarModal: function () {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-contenido");

    modalContent.innerHTML = `
            <div class="modal-cabecera">
                <div class="nombre">
                    <p>Destacados</p>
                </div
              
                <div class="cerrar">
                    <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
                </div
            </div>
        
            <div class="modal-cuerpo">
            <div class="titulo-destacados">
                <h2>Destacados</h2>
            </div>
            <div class="destacados-modal">
            <a href="#"><img src="./img/3.jpg" alt="" ></a>
            <a href="#"><img src="./img/2.jpg" alt=""></a>
            <a href="#"><img src="./img/3.jpg" alt=""></a>
            <a href="#"><img src="./img/6.jpg" alt=""></a>
            <a href="#"><img src="./img/7.jpg" alt=""></a>
            <a href="#"><img src="./img/2.jpg" alt=""></a>
            <a href="#"><img src="./img/7.jpg" alt=""></a>
            <a href="#"><img src="./img/2.jpg" alt=""></a>
            <a href="#"><img src="./img/3.jpg" alt=""></a>
            <a href="#"><img src="./img/6.jpg" alt=""></a>
        </div>
            </div>
                
            <div class="modal-pie">
          
            </div>
        `;
    return modalContent;
  },
  abrirModal: function () {
    modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },

  cerrarModal: function () {
    const botonCerrarModal = modal.querySelector("#cerrarModal");
    botonCerrarModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  },
  mostrarModal: function () {
    const botonAbrirModal = document.getElementById("ver-mas");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal();
    });
  },
};
document.addEventListener('DOMContentLoaded', function () {
    Vista.llenarModal()
    Vista.mostrarModal()
  })
  