const Vista = {
    tickets: function () {
        const ticket = document.getElementById("tickets");
        const ticketsContent = ticket.querySelector(".contenedor-boletos");
    
        ticketsContent.innerHTML = `
        <div class="contenido-tickets">
            <div class="imagen-tickets">
                  <img src="../img/2.jpg" alt="logo comercio">
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
              <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
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
          <img src="../img/2.jpg" alt="logo comercio">
    </div>
    <div class="tickets-contenido">
        <div class="texto-ticket">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi unde beatae animi nostrum atque.</p>
    
            <button><a href="#">20%</a></button>
        </div>
    </div>
    </div>
        
        `;
        return ticketsContent;
      },
}

document.addEventListener('DOMContentLoaded', function(){
Vista.tickets();
})