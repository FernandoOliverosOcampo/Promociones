import Controlador from '../controlador/controlador-login.js'
const Vista ={
    inicioSesion(){
        const btnIngresar = document.getElementById('btnIngresar');
        btnIngresar.onclick = function () {
            Controlador.iniciarSesion()
          }
    },
    datoInicioSesion(){
        const email = document.getElementById('correo').value;
        const password = document.getElementById('contrasena').value;
        
        return {email, password};
        
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
        email.value = "";
        password.value ="";
    },
    redirigirAIndex() {
        location.href = ("../index.html");
    }
}

document.addEventListener('DOMContentLoaded', function(){
    Vista.inicioSesion()
})
export default Vista;

