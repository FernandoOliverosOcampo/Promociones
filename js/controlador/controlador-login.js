import Vista from "../vista/vista-login.js";
import Modelo from "../modelo/modelo-login.js";
const Controlador ={
    async iniciarSesion(){
        const identificacion = Vista.datoInicioSesion();
        try {
            const res = await Modelo.inicioSesion(identificacion);
            if (res.data.acceso == "AUTORIZADO") {
                const access_token = res.data.access_token;
                localStorage.setItem("access_token", access_token);
                Vista.mostrarMensajeSatisfactorio("Inicio de sesión exitoso");
                Vista.redirigirAIndex();
              } else {
                Vista.mostrarMensajeError("Usuario no encontrado")
                Vista.limpiarCampos();
              }
        } catch (error) {
            Vista.mostrarMensajeError('Error al iniciar sesión');
            console.error(err);
            Vista.limpiarCampos();
        }
    }
}
export default Controlador;


