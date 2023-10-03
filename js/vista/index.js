import Controlador from "../controlador/controlador-pagina-principal.js";
const Vista = {
  //CONTENIDO DE LA PAGINA
  inicioSesionModal: function () {
    const modalinicio = document.getElementById("modalinicio");
    const inicioContent = modalinicio.querySelector(".modal-contenido-inicio");
    inicioContent.innerHTML = `
    <div class="modal-cabecera">
    <div class="nombre">
        <p>Inicio de sesión y registro</p>
    </div
  
    <div class="cerrar">
        <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
    </div
</div>

<div class="modal-cuerpo">
<div class="titulo-inicio">
    <h2>Inicio de sesión</h2>
    <p>Registrate e inicia sesión para acceder a los beneficios de tu cuenta.</p>
</div>
<div class="inicio-modal">
<div class="boton-inicio-sesion">
<a href="./pages/login.html"><button>Iniciar sesión</button></a>
</div>
<div class="boton-registrarte">
<a href="./pages/form.html"><button>Registrarte</button></a>
</div>
</div>
    
<div class="modal-pie2">

</div>

    `;
    return inicioContent;
  },
  itemServicios: function () {
    const slider = document.getElementById("slider");
    const sliderContent = slider.querySelector(".contenido-slider");

    sliderContent.innerHTML = `
    <div class = "item">
      <div class = "item-contenido">
            <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
      </div>
    </div>
    <div class = "item">
    <div class = "item-contenido">
          <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
    </div>
    </div>
    <div class = "item">
    <div class = "item-contenido">
          <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
    </div>
  </div>
  <div class = "item">
  <div class = "item-contenido">
        <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
  </div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
</div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
</div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
</div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button><i class="fa-solid fa-hand-holding-medical"></i>   Servicios</button>
</div>
</div>
    `;
    return sliderContent;
  },
  destacados: function () {
    const multimedia = document.getElementById("multimedia");
    const multimediaContent = multimedia.querySelector(
      ".descatados-multimedia"
    );
    multimediaContent.innerHTML = `
    <a href="#"><img src="./img/2.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/7.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/3.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/6.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/7.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/3.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/6.webp" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/2.webp" alt="imagen multimedia" ></a>
    `;
    return multimediaContent;
  },
  comercios: function () {
    const comercio = document.getElementById("comercios-multimedia");
    const comercioContent = comercio.querySelector(
      ".contenedor-comercio-multimedia"
    );

    comercioContent.innerHTML = `
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/7.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/6.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/3.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/6.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/3.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/7.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/6.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/7.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/3.webp" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    `;
    return comercioContent;
  },
  tickets: function () {
    const ticket = document.getElementById("tickets");
    const ticketsContent = ticket.querySelector(".contenedor-boletos");

    ticketsContent.innerHTML = `
    <div class="contenido-tickets">
        <div class="imagen-tickets">
              <img src="./img/2.webp" alt="logo comercio">
        </div>
        <div class="tickets-contenido">
            <div class="texto-ticket">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
               <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button>20%</button></a>
            </div>
        </div>
    </div>
    <div class="contenido-tickets">
    <div class="imagen-tickets">
          <img src="./img/2.webp" alt="logo comercio">
    </div>
    <div class="tickets-contenido">
        <div class="texto-ticket">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

            <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button>20%</button></a>
        </div>
    </div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.webp" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button>20%</button></a>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.webp" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button>20%</button></a>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.webp" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button>20%</button></a>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.webp" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button>20%</button></a>
    </div>
</div>
</div>
    
    `;
    return ticketsContent;
  },
  llenarModal: function () {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-contenido");

    modalContent.innerHTML = `
            <div class="modal-cabecera">
                <div class="nombre">
                    <p>Destacados</p>
                </div
              
                <div class="cerrar">
                    <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
                </div
            </div>
        
            <div class="modal-cuerpo">
            <div class="titulo-destacados">
                <h2>Destacados</h2>
            </div>
            <div class="destacados-modal">
            <a href="#"><img src="./img/2.webp" alt="logo comercio" ></a>
            <a href="#"><img src="./img/3.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/6.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/7.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/3.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/7.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/6.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/2.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/7.webp" alt="logo comercio"></a>
            <a href="#"><img src="./img/6.webp" alt="logo comercio"></a>
        </div>
            </div>
        `;
    return modalContent;
  },
  llenarModal2: function () {
    const modal2 = document.getElementById("modal2");
    const modalContent2 = modal2.querySelector(".modal-contenido2");

    modalContent2.innerHTML = `
            <div class="modal-cabecera2">
                <div class="nombre">
                    <p>Comercios</p>
                </div
              
                <div class="cerrar">
                    <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
                </div
            </div>
        
            <div class="modal-cuerpo2">
            <div class="titulo-comercios">
                <h2>Comercios</h2>
            </div>
            <div class="comercios-modal">
            <div class="comercios-tarjetas-contenedor">
                   <div class="contenido-comercios-tarjetas">
                        <div class="imagen-tarjetas">
                            <img src="./img/2.webp" alt="logo comercio">
                        </div>
                        <div class="tarjetas-contenido">
                            <div class="texto-tarjeta">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Sit sequi unde beatae animi nostrum atque.</p>

                                <button><a href="./pages/paginas-beneficios.html">20%</a></button>
                            </div>
                        </div>
  
                    </div>
                            
       
            </div>
            </div>
                
            <div class="modal-pie2">
          
            </div>
        `;
    return modalContent2;
  },
  llenarMapa: function(){
    const modalmapa = document.getElementById('modalmapa');
    const mapaContent = modalmapa.querySelector('.modal-contenido');

   
    mapaContent.innerHTML = `
    <div class="modal-cabecera">
    <div class="nombre">
        <p>Mapa</p>
    </div
  
    <div class="cerrar">
        <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
    </div
</div>

<div class="modal-cuerpo">
<div id="mapa">

</div>
</div>

   `
    return mapaContent;

  },
  //MOSTRAR LOS ELEMENTOS DE LA PAGINA
  motrarElmentosPagina: function(){
    this.inicioSesionModal();
    this.itemServicios();
    this.destacados();
    this.comercios();
    this.tickets();
    this.llenarModal();
    this.llenarModal2();
    this.llenarMapa();
  }
  
};

//ELEMENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function () {
  Vista.motrarElmentosPagina();
  Controlador.mapaCercaDeMi();
  Controlador.controlarLosModales();
});
