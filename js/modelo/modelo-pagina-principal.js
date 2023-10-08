import config from '../supabase/config.js'
const Modelo = {
    async datosMostrar() {
        const rest = await axios({
            method: 'GET',
            url: 'https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/comercios?select=*',
            headers: config.headers
        });
        return rest;
    },
    // async datosMostrarUsuarios() {
    //     const rest = await axios({
    //         method: 'GET',
    //         url: 'https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/formulario?select=*',
    //         headers: config.headers
    //     });
    //     return rest;
    // },
}
export default Modelo;