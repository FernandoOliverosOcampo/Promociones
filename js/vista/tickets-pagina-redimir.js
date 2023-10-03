import Controlador from "../controlador/controlador-pagina-tickets.js";
const Vista ={
    llenarModal: function () {
        const modal = document.getElementById("modal");
        const modalContent = modal.querySelector(".modal-contenido");
    
        modalContent.innerHTML = `
                <div class="modal-cabecera">
                    <div class="nombre">
                        <p>Código</p>
                    </div
                  
                    <div class="cerrar">
                        <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
                    </div
                </div>
            
                <div class="modal-cuerpo">
                <div class="codigo">
                <h2>CODIGOPRUEBA</h2>
                <a href="#"><button>Redimir</button></a>
                </div>
                </div>

            `;
        return modalContent;
      },
}
document.addEventListener('DOMContentLoaded', function(){
    Controlador.mostrarModal();
    Vista.llenarModal();

})