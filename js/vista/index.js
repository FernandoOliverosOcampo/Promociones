const Vista = {
  itemServicios: function (){
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
    `
    return sliderContent
  },
  destacados: function (){
    const multimedia = document.getElementById('multimedia');
    const multimediaContent = multimedia.querySelector('.descatados-multimedia')
    multimediaContent.innerHTML = `
    <a href="#"><img src="./img/2.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/3.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/6.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/7.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/6.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/3.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/2.jpg" alt="imagen multimedia" ></a>
    <a href="#"><img src="./img/7.jpg" alt="imagen multimedia" ></a>
    `
    return multimediaContent;
  },
  comercios: function(){
    const comercio = document.getElementById('comercios-multimedia');
    const comercioContent = comercio.querySelector('.contenedor-comercio-multimedia');

    comercioContent.innerHTML = `
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/3.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/6.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/7.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/3.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/6.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/7.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    <div class="comercio-contenido" id="contenido-comercio">
    <div class="comercio-imagenes">
        <a href=""><img src="./img/2.jpg" alt="logo comercio"></a>
    </div>
    <div class="comercio-titulo">
        <p>Redbull</p>
    </div>
    </div>
    </div>
    `
    return comercioContent
  },
  tickets: function(){
    const ticket = document.getElementById('tickets');
    const ticketsContent = ticket.querySelector('.contenedor-boletos')

    ticketsContent.innerHTML = `
    <div class="contenido-tickets">
        <div class="imagen-tickets">
              <img src="./img/2.jpg" alt="logo comercio">
        </div>
        <div class="tickets-contenido">
            <div class="texto-ticket">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

                <button><a href="#">20%</a></button>
            </div>
        </div>
    </div>
    <div class="contenido-tickets">
    <div class="imagen-tickets">
          <img src="./img/2.jpg" alt="logo comercio">
    </div>
    <div class="tickets-contenido">
        <div class="texto-ticket">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

            <button><a href="#">20%</a></button>
        </div>
    </div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.jpg" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <button><a href="#">20%</a></button>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.jpg" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <button><a href="#">20%</a></button>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.jpg" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <button><a href="#">20%</a></button>
    </div>
</div>
</div>
<div class="contenido-tickets">
<div class="imagen-tickets">
      <img src="./img/2.jpg" alt="logo comercio">
</div>
<div class="tickets-contenido">
    <div class="texto-ticket">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>

        <button><a href="#">20%</a></button>
    </div>
</div>
</div>
    
    `
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
            <a href="#"><img src="./img/3.jpg" alt="logo comercio" ></a>
            <a href="#"><img src="./img/2.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/3.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/6.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/7.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/2.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/7.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/2.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/3.jpg" alt="logo comercio"></a>
            <a href="#"><img src="./img/6.jpg" alt="logo comercio"></a>
        </div>
            </div>
                
            <div class="modal-pie">
          
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
                            <img src="./img/2.jpg" alt="logo comercio">
                        </div>
                        <div class="tarjetas-contenido">
                            <div class="texto-tarjeta">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Sit sequi unde beatae animi nostrum atque.</p>

                                <button><a href="#">20%</a></button>
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
  abrirModal: function () {
    modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },

  cerrarModal: function () {
    const botonCerrarModal = modal.querySelector("#cerrarModal");
    botonCerrarModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  },
  abrirModal2: function () {
    modal2.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    };
  },

  cerrarModal2: function () {
    const botonCerrarModal = modal2.querySelector("#cerrarModal");
    botonCerrarModal.addEventListener("click", () => {
      modal2.style.display = "none";
    });
  },
  mostrarModal: function () {
    const botonAbrirModal = document.getElementById("ver-mas");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal();
    });
  },
  mostrarModal2: function () {
    const botonAbrirModal = document.getElementById("comercio");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal2();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal2();
    });
  },
};
document.addEventListener("DOMContentLoaded", function () {
  Vista.itemServicios();
  Vista.destacados();
  Vista.comercios();
  Vista.tickets();
  Vista.llenarModal();
  Vista.mostrarModal();
  Vista.llenarModal2();
  Vista.mostrarModal2();
});
