import Vista from "../vista/vista-login.js";
import Modelo from "../modelo/modelo-login.js";
const Controlador ={
    async iniciarSesion(){
        const {email, password} = Vista.datoInicioSesion();
        try {
            const res = await Modelo.inicioSesion(email, password);

            console.log(res)
            console.log(res.data)
            if (res.data.access_token.length > 1) {
                const access_token = res.data.access_token;
                localStorage.setItem("access_token", access_token);
                Vista.mostrarMensajeSatisfactorio()
                Vista.redirigirAIndex()
              } else {
                Vista.mostrarMensajeError("Usuario no encontrado")
               
              }
        } catch (error) {
            Vista.mostrarMensajeError('Error al iniciar sesión');
            console.error(error);
      
            
        }
    },

}
export default Controlador;


