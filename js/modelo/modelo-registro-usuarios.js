import config from "../supabase/config.js";

const Modelo = {
    async registroUsuarios(numeroCedula, tipoDocumento, nombre, segundoNombre, apellido, segundoApellido, correo, contrasena, telefono, sexo, fechaNacimiento, tipoCliente, empresa){
       const datos_insertar = {
            numero_documento: numeroCedula,
            tipo_documento: tipoDocumento,
            nombre: nombre,
            segundo_nombre: segundoNombre,
            apellido: apellido,
            segundo_apellido: segundoApellido,
            correo: correo,
            telefono: telefono,
            sexo: sexo,
            fecha_nacimiento: fechaNacimiento,
            tipo_cliente: tipoCliente,
            empresa: empresa,
            contraseña: contrasena

        }
        const rest = await axios({
            method: 'POST',
            url: 'https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/formulario',
            data: datos_insertar,
            headers: config.headers
        });

        return rest;
    }
};

export default Modelo