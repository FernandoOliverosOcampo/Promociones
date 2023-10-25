import Controlador from "../controlador/controlador-pagina-principal.js";
const Vista = {
  //CONTENIDO DE LA PAGINA
  
  inicioSesionModal: function () {
    const modalinicio = document.getElementById("modalinicio");
        const inicioContent = modalinicio.querySelector(".modal-contenido-inicio");
        const date = new Date();

        function mostrarHora() {
            var fechaHoraActual = new Date();
            var hora = fechaHoraActual.getHours();
            var minutos = fechaHoraActual.getMinutes();
            var segundos = fechaHoraActual.getSeconds();

            // Asegurarse de que los valores tengan dos dígitos
            hora = hora < 10 ? "0" + hora : hora;
            minutos = minutos < 10 ? "0" + minutos : minutos;
            segundos = segundos < 10 ? "0" + segundos : segundos;

            var horaCompleta = hora + ":" + minutos + ":" + segundos;
            document.getElementById("reloj").textContent = horaCompleta;
        }
        // Verifica si hay un token JWT almacenado en el localStorage
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            // Decodifica el token JWT para obtener el nombre del usuario
            const nombreUsuario = obtenerNombreUsuarioDesdeToken(access_token);
            // Actualiza la hora cada segundo (1000 milisegundos)
            setInterval(mostrarHora, 1000);
          
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
                <h2 id='nombre-usuario'>Bienvenido(a) ${nombreUsuario}</h2>
                <p>Ahora puedes acceder y disfrutar de los beneficios de tu cuenta.</p>
                <p id="fecha">${date.toLocaleDateString()}</p>
                <p id="reloj"></p>
            </div>
            <div class="inicio-modal">
                <div class="boton-cerrar-sesion">
                    <a href="#"><button id="cerrarSesion">Cerrar sesión</button></a>
            </div>
        </div>    
        `;
        const cerrarBtn = document.getElementById("cerrarSesion");
        cerrarBtn.addEventListener("click", () => {
          localStorage.removeItem("access_token");
          location.href = ('../pages/login.html')
        //   location.reload();
          
        });
      return inicioContent;
    } else {
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
            <button id="btnentretenimiento" ><i class="fa-solid fa-film"></i>  Entretenimiento</button>
      </div>
    </div>
    <div class = "item">
    <div class = "item-contenido">
          <button id="btneducacion" ><i class="fa-solid fa-user-graduate" style="--fa-primary-color: #323d4e; --fa-secondary-color: #fbf789;"></i>  Educación</button>
    </div>
    </div>
    <div class = "item">
    <div class = "item-contenido">
          <button id="btnturismo" ><i class="fa-solid fa-plane-departure"></i>  Turismo</button>
    </div>
  </div>
  <div class = "item">
  <div class = "item-contenido">
        <button id="btnsalud" ><i class="fa-solid fa-hand-holding-medical"></i>   Salud</button>
  </div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button id="btnspa" ><i class="fa-solid fa-spa"></i> Spa y belleza</button>
</div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button id="btncomercios"><i class="fa-regular fa-building"></i></i>  Comercios</button>
</div>
</div>
<div class = "item">
<div class = "item-contenido">
      <button id="btnseguros"><i class="fa-solid fa-shield-heart"></i></i> Seguros</button>
</div>
</div>
    `;
    slider.append(sliderContent);
  },
  destacados: function (data) {
    for (let i = 0; i < 12 && data.length; i++) {
      const element = data[i];
      const contenedor = document.getElementById("multimedia");
      const logo = element.imagen;
      const multimedia = document.createElement("div");
      const multimediaContent = document.createElement("div");

      multimedia.classList = "multimedia";
      multimediaContent.classList = ".descatados-multimedia";
      multimediaContent.innerHTML = `
        <a href="#"><img src="${logo}" alt="imagen multimedia" ></a>
        `;
      multimedia.append(multimediaContent);
      contenedor.append(multimedia);
    }
  },
  comercios: function (data) {
    for (let i = 0; i < 12 && data.length; i++) {
      const element = data[i];
      const logo = element.imagen;
      const lenguaje = element.nombre;

      const comercio = document.createElement("div");
      const comercioContent = document.createElement("div");

      comercio.classList = "comercios-multimedia";
      comercioContent.classList = "contenedor-comercio-multimedia";

      const contenedor = document.querySelector(".comercio-multimedia");

      comercioContent.innerHTML = `
        <div class="comercio-contenido" id="contenido-comercio">
            <div class="comercio-imagenes">
                <a href=""><img src="${logo}" alt="logo comercio"></a>
            </div>
        <div class="comercio-titulo">
            <p>${lenguaje}</p>
        </div>
        `;
      comercio.append(comercioContent);
      contenedor.append(comercio);
    }
  },
  tickets: function (data) {
    const ticket = document.getElementById("tickets");
    const ticketsContent = ticket.querySelector(".contenedor-boletos");

    ticketsContent.innerHTML = `
    <div id="contenedor-boletos">
       
    </div>
    `;
    const beneficiosContainer = ticketsContent.querySelector('#contenedor-boletos')
    this.agregarBeneficios(data, beneficiosContainer)
    return ticketsContent;
  },
  agregarBeneficios: function (data, beneficiosContainer) {
    for (let i = 0; i < 6 && data.length; i++) {
      const element = data[i];
      const logo = element.imagen;
      const lenguaje = element.nombre;
      const contenedor = document.createElement("div");
      contenedor.classList = "contenido-tickets";
      contenedor.innerHTML = `
        <div class="imagen-tickets">
          <img src="${logo}" alt="logo comercio">
        </div>
        <div class="tickets-contenido">
          <div class="texto-ticket">
            <h3>${lenguaje}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
            <button class="boton" >20%</button>
          </div>
        </div>   
            `;
      beneficiosContainer.appendChild(contenedor);
    };
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
    this.agregarImagenesModal(data, imagenesContainer);

    return modalContent;
  },

  agregarImagenesModal: function (data, imagenesContainer) {
    // Agrega las imágenes al contenedor del slider
    data.forEach((element) => {
      const logosImagenes = element.imagen;
      const imagen = document.createElement("img");
      imagen.src = logosImagenes;
      imagen.className = "destacados-modal-imagenes";
      imagenesContainer.appendChild(imagen);
    });
  },

  llenarModal2: function (data) {
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
            <div class="comercios-modal" id="modalComercios">
            
            </div>
        `;
    const comerciosContainer = modalContent2.querySelector("#modalComercios");
    modal2.append(modalContent2);
    this.agregarComerciosModal(data, comerciosContainer);
    return modalContent2;
  },
  agregarComerciosModal: function (data, comerciosContainer) {
    data.forEach((element) => {
      const logo = element.imagen;
      const lenguaje = element.nombre;
      const contenedor = document.createElement("div");
      contenedor.classList = "comercios-tarjetas-contenedor";
      contenedor.innerHTML = `
                   <div class="contenido-comercios-tarjetas">
                        <div class="imagen-tarjetas">
                            <img src="${logo}" alt="logo comercio">
                        </div>
                        <div class="tarjetas-contenido">
                            <div class="texto-tarjeta">
                                <h3>${lenguaje}</h3> 
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
                            </div>
                        </div>
                    </div>      
            `;
      comerciosContainer.appendChild(contenedor);
    });
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

  //MOSTRAR LOS ELEMENTOS DE LA PAGINA
  ticketsBotones() {
    var button = document.querySelectorAll(".boton");
    button.forEach(function (boton) {
      boton.addEventListener("click", function () {
        if (localStorage.getItem("access_token")) {
          location.href = "./pages/paginas-beneficios-tickest.html";
        } else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Primero debes iniciar sesión",
          });
          // boton.disabled = true;
        }
      });
    });
  },
  motrarElmentosPagina: function () {
    this.itemServicios();
    this.llenarMapa();
  },
};
// Función para decodificar un token JWT
function obtenerNombreUsuarioDesdeToken(token) {
  try {
      const tokenParts = token.split('.');
      const tokenPayload = tokenParts[1];
      const tokenPayloadDecoded = atob(tokenPayload);
      const tokenPayloadData = JSON.parse(tokenPayloadDecoded);
      const nombreUsuario = tokenPayloadData.nombre; // Asegúrate de que coincida con la clave utilizada en el servidor
      return nombreUsuario;
  } catch (error) {
      console.error(error);
      return null;
  }
}
export default Vista;
//ELEMENTOS DEL DOM
document.addEventListener("DOMContentLoaded", function () {
  Vista.motrarElmentosPagina();
  if (localStorage.getItem("access_token")) {
    const nombreUsuario = obtenerNombreUsuarioDesdeToken(localStorage.getItem("access_token"));
    console.log("TIENES TOKEN DE ACCESO");
    const ul = document.getElementById("menuLista");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");
    const p = document.createElement('p');
    p.textContent = `${nombreUsuario}`
    p.classList.add("nombre_usuario")
    li.classList.add("menu__item");
    a.setAttribute("id", "inicioSesion");
    i.classList.add("fa-regular", "fa-user", "fa-2x");
    i.appendChild(p)
    li.appendChild(a);
    a.appendChild(i);
    ul.appendChild(li);

  } else {
    console.log("No tienes access token");
    const ul = document.getElementById("menuLista");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");
    li.classList.add("menu__item");
    
    a.setAttribute("id", "inicioSesion");
    i.classList.add("fa-regular", "fa-user", "fa-2x");
    li.appendChild(a);
    a.appendChild(i);
    ul.appendChild(li);
  }
  Controlador.mostrarModalSesion()
  Controlador.mostrarContenido();
  Controlador.mostrarContenidoDestacados();
  Controlador.mostrarContenidoModalDestacados();
  Controlador.mostrarComerciosModal();
  Controlador.mapaCercaDeMi();
  Controlador.controlarLosModales();
  Controlador.modalInicioSesion();
  Controlador.mostrarTickets();
});