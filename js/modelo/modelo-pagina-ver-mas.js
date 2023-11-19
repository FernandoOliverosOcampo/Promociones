import config from "../supabase/config.js";
const Modelo ={
    async mostrarInfo(comercio){
        const rest = await axios({
            method: 'GET',
            url: `https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/comercios?nombre=eq.${comercio}`,
            headers: config.headers
        });
        return rest;
    }
}
export default Modelo;