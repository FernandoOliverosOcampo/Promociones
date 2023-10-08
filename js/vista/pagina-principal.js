import Controlador from "../controlador/controlador-pagina-principal.js";
const Vista = {
  //CONTENIDO DE LA PAGINA
  inicioSesionModal: function () {
   
    const modalinicio = document.getElementById("modalinicio");
    const inicioContent = modalinicio.querySelector(".modal-contenido-inicio");

    if(localStorage.getItem("access_token")){
        inicioContent.innerHTML = `
        <div class="modal-cabecera">
            <div class="nombre">
                <p>Sesión activa</p>
            </div
            <div class="cerrar">
                 <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
            </div
        </div>
        <div class="modal-cuerpo">
            <div class="titulo-inicio">
                <h2>BIENVENIDO</h2>
                <p>Ahora puedes acceder y disfrutar de los beneficios de tu cuenta.</p>
            </div>
            <div class="inicio-modal">
                <div class="boton-cerrar-sesion">
                    <a href="#"><button id="cerrarSesion">Cerrar sesión</button></a>
            </div>
        </div>    
        `;
        return inicioContent;
    }else{
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
    }

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
  destacados: function (data) {
    data.forEach(element =>{
        const contenedor = document.getElementById('multimedia')
        const logo = element.imagen;
        const multimedia = document.createElement("div");
        const multimediaContent = document.createElement("div");
  
        multimedia.classList = "multimedia";
        multimediaContent.classList = ".descatados-multimedia";
        multimediaContent.innerHTML = `
        <a href="#"><img src="${logo}" alt="imagen multimedia" ></a>
        `;
        multimedia.append(multimediaContent)
        contenedor.append(multimedia)
    })
  },
  comercios: function (data) {
    data.forEach((element) => {
  
      const logo = element.imagen;
      const lenguaje = element.nombre;

      const comercio = document.createElement("div");
      const comercioContent = document.createElement("div");

      comercio.classList = "comercios-multimedia";
      comercioContent.classList = "contenedor-comercio-multimedia";

      const contenedor = document.querySelector('.comercio-multimedia');

      comercioContent.innerHTML = `
      <div class="comercio-contenido" id="contenido-comercio">
      <div class="comercio-imagenes">
          <a href=""><img src="${logo}" alt="logo comercio"></a>
      </div>
      <div class="comercio-titulo">
          <p>${lenguaje}</p>
      </div>
      </div>
      </div>
      `;  
      comercio.append(comercioContent) 
      contenedor.append(comercio)
    });
   
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
               <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button class="boton">20%</button></a>
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

            <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button class="boton" >20%</button></a>
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

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button class="boton">20%</button></a>
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

        <a href="./pages/paginas-beneficios-tickest.html" target="_blank"> <button class="boton" >20%</button></a>
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

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button class="boton" >20%</button></a>
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

        <a href="./pages/paginas-beneficios-whatsapp.html" target="_blank"> <button class="boton" >20%</button></a>
    </div>
</div>
</div>
    
    `;
    return ticketsContent;
  },
  llenarModal: function (data) {
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
                <div class="destacados-modal" id="imagenesModal"></div>
                </div>
            `;

            const imagenesContainer = modalContent.querySelector(`#imagenesModal`);
            this.agregarImagenesModal(data,imagenesContainer)

        return modalContent;

  },

  agregarImagenesModal: function (data,imagenesContainer) {
    // Agrega las imágenes al contenedor del slider
    data.forEach(element => {
        const logosImagenes = element.imagen;
        const imagen = document.createElement('img');
        imagen.src = logosImagenes;
        imagen.className = "destacados-modal-imagenes";
        imagenesContainer.appendChild(imagen);
    });
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
  llenarMapa: function () {
    const modalmapa = document.getElementById("modalmapa");
    const mapaContent = modalmapa.querySelector(".modal-contenido");

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

   `;
    return mapaContent;
  },
  cerrarSesion: function(){
    const cerrarBtn = document.getElementById('cerrarSesion');

    cerrarBtn.addEventListener('click', ()=>{
        localStorage.removeItem("access_token")
        console.log("TOKEN REMOVIDO, SESION CERRADA")
        location.reload();
        localStorage.removeItem("access_token")

    })
     
  },
  //MOSTRAR LOS ELEMENTOS DE LA PAGINA
  motrarElmentosPagina: function () {
    this.inicioSesionModal();
    this.itemServicios();
    this.tickets();
    this.llenarModal2();
    this.llenarMapa();
  },
};
export default Vista;
//ELEMENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function () {
Vista.motrarElmentosPagina();
if(localStorage.getItem("access_token")){
    console.log("TIENES TOKEN DE ACCESO")
    const ul = document.getElementById("menuLista");
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i')
    li.classList.add('menu__item');
    a.setAttribute("id", "inicioSesion")
    i.classList.add('fa-regular', 'fa-user', 'fa-2x')
    li.appendChild(a)
    a.appendChild(i)
    ul.appendChild(li);
   
    var button = document.querySelectorAll('.boton')
    button.forEach(function(boton) {
        boton.disabled = false;
    });
    Vista.cerrarSesion()
}else{
    console.log("No tienes access token")
        const ul = document.getElementById("menuLista");
        const li = document.createElement('li');
        const a = document.createElement('a');
        const i = document.createElement('i')
        li.classList.add('menu__item');
        a.setAttribute("id", "inicioSesion")
        i.classList.add('fa-regular', 'fa-user', 'fa-2x')
        li.appendChild(a)
        a.appendChild(i)
        ul.appendChild(li);
        var button = document.querySelectorAll('.boton')
        button.forEach(function(boton) {
            boton.disabled = true;
          });
    }

  Controlador.mostrarContenido();
  Controlador.mostrarContenidoDestacados()
  Controlador.mostrarContenidoModalDestacados();
  Controlador.mapaCercaDeMi();
  Controlador.controlarLosModales(); 
});

