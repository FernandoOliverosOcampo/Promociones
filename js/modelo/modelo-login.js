const Modelo = {
    async inicioSesion(identificacion){
        const datosIngresar = {
          numero_documento: identificacion
        };
        try {
            const res = await axios({
                method: 'POST',
                url: `https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/formulario?select=numero_documento`,
                data: datosIngresar
            });
            return res;
        } catch (error) {
            throw error;
        }     
    }
}
export default Modelo;

