import Modelo from "../modelo/modelo-pagina-principal.js";
import Vista from "../vista/pagina-principal.js"
const Controlador = {
  async modalInicioSesion(){
    try {
      const res = await Modelo.datosMostrarUsuarios();
      Vista.inicioSesionModal(res.data)
      Vista.cerrarSesion()
  } catch (err) {
      console.error(err)
  }
  },
  async mostrarComerciosModal(){
    try {
      const res = await Modelo.datosMostrar();
      Vista.llenarModal2(res.data)
  } catch (err) {
      console.error(err)
  }

  },
  async mostrarContenido(){
    try {
      const res = await Modelo.datosMostrar();
      Vista.comercios(res.data)
  } catch (err) {
      console.error(err)
  }

  },
  async mostrarContenidoModalDestacados(){
    try {
      const res = await Modelo.datosMostrar();
      Vista.llenarModal(res.data)
    } catch (error) {
      console.error(error)
    }

  },
  async mostrarContenidoDestacados(){
    try {
      const res = await Modelo.datosMostrar();
      Vista.destacados(res.data)
  } catch (err) {
      console.error(err)
  }

  },
    mapaCercaDeMi: function(){
    var mapa = document.getElementById("mapa");
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latUsuario = position.coords.latitude;
            var lonUsuario = position.coords.longitude;

            // Simular datos de locales cercanos (esto debería venir de una base de datos o servicio)
            // var locales = [
            //     { nombre: "Cine XYZ", latitud: 37.123, longitud: -122.456 },
            //     { nombre: "Deportes ABC", latitud: 37.456, longitud: -122.789 },
            //     // Agrega más locales aquí
            // ];

            // Mostrar mapa centrado en la ubicación del usuario (reemplaza con tu propia API Key)
            var mapaUrl = "https://maps.google.com/maps?q=" + latUsuario + "," + lonUsuario + "&output=embed";
               mapa.innerHTML = `<iframe width="100%" height="400" frameborder="0" src="${mapaUrl}"></iframe>`;

            // Calcular y mostrar locales cercanos
            // var localesCercanosHTML = "<h2>Locales Cercanos:</h2><ul>";
            // locales.forEach(function(local) {
            //     var distancia = calcularDistancia(latUsuario, lonUsuario, local.latitud, local.longitud);
            //     localesCercanosHTML += `<li>${local.nombre} (Distancia: ${distancia.toFixed(2)} km)</li>`;
            // });
            // localesCercanosHTML += "</ul>";
            // localesCercanos.innerHTML = localesCercanosHTML;
        });
    } else {
        alert("El navegador no admite geolocalización.");
    }
    function calcularDistancia(lat1, lon1, lat2, lon2) {
        // Radio de la Tierra en kilómetros (aproximado)
        var radioTierra = 6371; // El valor 6371 se usa para calcular la distancia en kilómetros.
      
        // Convertir grados a radianes
        var latitud1Rad = degToRad(lat1);
        var longitud1Rad = degToRad(lon1);
        var latitud2Rad = degToRad(lat2);
        var longitud2Rad = degToRad(lon2);
      
        // Diferencia de latitud y longitud
        var latitudDiferencia = latitud2Rad - latitud1Rad;
        var longitudDiferencia = longitud2Rad - longitud1Rad;
      
        // Cálculo de la distancia utilizando la fórmula de Haversine
        var a = Math.sin(latitudDiferencia / 2) * Math.sin(latitudDiferencia / 2) +
                Math.cos(latitud1Rad) * Math.cos(latitud2Rad) *
                Math.sin(longitudDiferencia / 2) * Math.sin(longitudDiferencia / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        // Distancia en kilómetros
        var distancia = radioTierra * c;
      
        return distancia;
    }
      
    function degToRad(grados) {
        return grados * (Math.PI / 180);
    }
    },
    //FUNCIONES DE LOS MODALES

  //CONTROLADOR MODAL DESTACADOS
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
  mostrarModal: function () {
    const botonAbrirModal = document.getElementById("ver-mas");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal();
    });
  },

  //CONTROLADOR MODAL COMERCIOS
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
  mostrarModal2: function () {
    const botonAbrirModal = document.getElementById("comercio");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModal2();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModal2();
    });
  },

  //CONTROLADOR MODAL INICIO SESION
  abrirModalSesion: function () {
    modalinicio.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modalinicio) {
        modalinicio.style.display = "none";
      }
    };
  },
  cerrarModalSesion: function () {
    const botonCerrarModal = modalinicio.querySelector("#cerrarModal");
    botonCerrarModal.addEventListener("click", () => {
      modalinicio.style.display = "none";
    });
  },  
  mostrarModalSesion: function () {
    const botonAbrirModal = document.getElementById("inicioSesion");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModalSesion();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModalSesion();
    });
  },

  //CONTROLADOR MODAL MAPA
  abrirModalMapa: function () {
    modalmapa.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modalmapa) {
        modalmapa.style.display = "none";
      }
    };
  },

  cerrarModalMapa: function () {
    const botonCerrarModal = modalmapa.querySelector("#cerrarModal");
    botonCerrarModal.addEventListener("click", () => {
      modalmapa.style.display = "none";
    });
  },
  mostrarModalMapa: function () {
    const botonAbrirModal = document.getElementById("ubicacionBtn");

    botonAbrirModal.addEventListener("click", () => {
      // Abre el modal
      this.abrirModalMapa();

      // Obtén el botón de cerrar modal y agrega el evento de clic
      this.cerrarModalMapa();
    });
  },
  //CONTROLADOR CERRAR SESION
  controlarLosModales:function(){
    this.mostrarModal();
    this.mostrarModal2();
    this.mostrarModalMapa()
  }

}
export default Controlador;