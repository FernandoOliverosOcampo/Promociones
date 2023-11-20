import Vista from "../vista/vista-login.js";
import Modelo from "../modelo/modelo-login.js";
const Controlador = {
    async iniciarSesion() {
        const { email, password } = Vista.datoInicioSesion();
        try {
            const res = await Modelo.inicioSesion(email, password);
            if (res.data.access_token) {
                const access_token = res.data.access_token;

                // Decodificar el token JWT para obtener el nombre del usuario
                const nombreUsuario = obtenerNombreUsuarioDesdeToken(access_token);

                if (nombreUsuario) {
                    localStorage.setItem("access_token", access_token);
                    Vista.mostrarMensajeSatisfactorio();
                    Vista.redirigirAIndex();
                } else {
                    Vista.mostrarMensajeError("Nombre de usuario no encontrado en el token");
                }
            } else {
                Vista.mostrarMensajeError("Usuario no encontrado");
            }
        } catch (error) {
            Vista.mostrarMensajeError('Error al iniciar sesión');
            console.error(error);
        }
    },
};

// Función para decodificar un token JWT
function obtenerNombreUsuarioDesdeToken(token) {
    try {
        const tokenParts = token.split('.');
        const tokenPayload = tokenParts[1];
        const tokenPayloadDecoded = atob(tokenPayload);
        const tokenPayloadData = JSON.parse(tokenPayloadDecoded);
        const nombreUsuario = tokenPayloadData.nombre; // Asegúrate de que coincida con la clave utilizada en el servidor
        return nombreUsuario;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default Controlador;