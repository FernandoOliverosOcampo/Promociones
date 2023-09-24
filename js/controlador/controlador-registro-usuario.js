import Modelo from "../modelo/modelo-registro-usuarios.js";
import Vista from "../vista/vista-registro.js";

const Controlador ={
    async insertarDatos(numeroCedula, tipoDocumento, nombre, segundoNombre, apellido, segundoApellido, correo, telefono, sexo, fechaNacimiento, tipoCliente, empresa){
        try{
            const res = await Modelo.registroUsuarios(numeroCedula, tipoDocumento, nombre, segundoNombre, apellido, segundoApellido, correo, telefono, sexo, fechaNacimiento, tipoCliente, empresa)
            let mensaje = "Los datos fueron insertados correctamente"
            Vista.mostrarAlertaSatisfactorio(mensaje)
        }catch(error){
            console.log(error)
            
        }

    }

}
export default Controlador