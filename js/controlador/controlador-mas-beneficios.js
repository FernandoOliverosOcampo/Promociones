import Modelo from "../modelo/modelo-pagina-principal.js";
import Vista from "../vista/vista-mas-beneficios.js";
const Controlador = {
    async mostrarTickets(){
      try {
        const res = await Modelo.datosMostrar();
        Vista.tickets(res.data)
    } catch (err) {
        console.error(err)
    }
  
    },
}
export default Controlador;