const Modelo = {

  async inicioSesion(email, password) {

    const datosIngresar = {
      correo: email,
      contraseña: password,
    };
    
    try {
      const res = await axios({
        method: "POST",
        url: ` http://127.0.0.1:5000/formulario`,
        data: datosIngresar,
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
 
};

export default Modelo;
