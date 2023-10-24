const Modelo = {

  async inicioSesion(email, password) {

    const datosIngresar = {
      correo: email,
      contraseña: password,
    };
    
    try {
      const res = await axios({
        method: "POST",
        url: `http://foliveros.pythonanywhere.com/formulario`,
        data: datosIngresar,
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
 
};

export default Modelo;
