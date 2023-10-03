const Vista ={
    mostrarDatos: function(){
        const container = document.getElementById('contenidocontainer');
        const containerContent = container.querySelector('.container-beneficios');

        containerContent.innerHTML = `
        <div class="tarjeta-beneficios">
                            <div class="contenido-tickets">
                                <div class="imagen-tickets">
                                      <img src="../img/2.webp" alt="logo comercio">
                                </div>
                                <div class="tickets-contenido">
                                    <div class="texto-ticket">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
                                        <button><a href="../pages/paginas-beneficios.html" target="_blank">20%</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-redimir">
                            <div class="descatado-multimedia">
                                <a href="#"><img src="../img/2.webp" alt="imagen multimedia" ></a>
                            </div>
                            <div class="boton-redimir">
                                <a href="#"><button class="whatsapp"><i class="fa-brands fa-whatsapp"></i>  Contacta a WhatsApp</button></a>
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
    

}
document.addEventListener('DOMContentLoaded', function(){
    Vista.mostrarDatos();

})