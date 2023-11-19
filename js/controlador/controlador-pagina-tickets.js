import Modelo from "../modelo/modelo-informacion-ticket.js";
import Vista from '../vista/tickets-pagina-redimir.js'
const Controlador ={
  //FUNCIONES DE LOS MODALES
  async informacionTickets(){
      const comercio = localStorage.getItem('comercio')
      const res = await Modelo.mostrarInfo(comercio)
      Vista.mostrarContenido(res)
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
    const botonAbrirModal = document.getElementById("btnCodigo");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal();
    });
  },
}
export default Controlador;