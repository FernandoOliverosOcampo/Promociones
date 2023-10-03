import Controlador from "../controlador/controlador-pagina-tickets.js";
const Vista ={
    mostrarContenido: function(){
        const container = document.getElementById('contenidocontainer');
        const containerContent = container.querySelector('.container-beneficios')
        containerContent.innerHTML = `
        <div class="tarjeta-beneficios">
        <div class="contenido-tickets">
            <div class="imagen-tickets">
                  <img src="../img/2.webp" alt="logo comercio">
            </div>
            <div class="tickets-contenido">
                <div class="texto-ticket">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
                    <button><a href="./pages/paginas-beneficios.html" target="_blank">20%</a></button>
                </div>
            </div>
        </div>
    </div>
    <div class="container-redimir">
        <div class="descatado-multimedia">
            <a href="#"><img src="../img/2.webp" alt="imagen multimedia" ></a>
        </div>
        <div class="boton-redimir">
            <button id="btnCodigo"><i class="fa-solid fa-ticket"></i>  Mostrar códigos beneficios</button>
        </div>
        <div id="modal" class="modal">
            <div class="modal-contenido">
                    <!-- Aquí puedes agregar el contenido específico del modal -->
            </div>
        </div>
    </div>
    <div class="container-terminos">
        <div class="texto-detalles">
            <h2>Detalles</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae repellat odit iste laudantium ab! Ea aliquam necessitatibus repellendus animi. Asperiores veniam a repellendus modi adipisci consequatur distinctio assumenda laborum.</p>
        </div>
        <div class="texto-terminos">
            <h2>Terminos y condiciones</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae repellat odit iste laudantium ab! Ea aliquam necessitatibus repellendus animi. Asperiores veniam a repellendus modi adipisci consequatur distinctio assumenda laborum.</p>
        </div>
        <div class="texto-uso">
            <h2>¿Cómo usar este cupón?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae repellat odit iste laudantium ab! Ea aliquam necessitatibus repellendus animi. Asperiores veniam a repellendus modi adipisci consequatur distinctio assumenda laborum.</p>
        </div>
        

    </div>
        `
        return containerContent;
    },
    llenarModal: function () {
        const modal = document.getElementById("modal");
        const modalContent = modal.querySelector(".modal-contenido");
    
        modalContent.innerHTML = `
                <div class="modal-cabecera">
                    <div class="nombre">
                        <p>Código</p>
                    </div
                  
                    <div class="cerrar">
                        <span class="btn-cerrar-modal cerrar-modal-informacion" id="cerrarModal">&times;</span>
                    </div
                </div>
            
                <div class="modal-cuerpo">
                <div class="codigo">
                <h2>CODIGOPRUEBA</h2>
                <a href="#"><button>Redimir</button></a>
                </div>
                </div>

            `;
        return modalContent;
      },
}
document.addEventListener('DOMContentLoaded', function(){
    Vista.mostrarContenido();
    Controlador.mostrarModal();
    Vista.llenarModal();
    

})