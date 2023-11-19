import Modelo from "../modelo/modelo-pagina-ver-mas.js"
const Controlador ={
    async informacionTickets(){
        const comercio = localStorage.getItem('comercio')
        const res = await Modelo.mostrarInfo(comercio)
        Vista.mostrarContenido(res)
        // return comercio;
    },
}
export default Controlador