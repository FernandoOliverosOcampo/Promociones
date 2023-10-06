import Controlador from '../controlador/controlador-login.js'
const Vista ={
    inicioSesion(){
        const btnIngresar = document.getElementById('btnIngresar');

        btnIngresar.onclick = function () {
            Controlador.iniciarSesion()
          }
    },
    datoInicioSesion(){
        const identificacion = document.querySelector('#idnumero').value;
        return {identificacion};
    },
    mostrarMensajeError(mensaje) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: mensaje,
        })
    
    },
    mostrarMensajeSatisfactorio(mensaje) {
      console.log(mensaje);
    },
    limpiarCampos() {
        identificacion.value = "";
    },
    redirigirAIndex() {
        location.href = ("../index.html");
    }
}

document.addEventListener('DOMContentLoaded', function(){
    Vista.inicioSesion()
})
export default Vista;

