//Cuando el usuario haga clic en el botón, la función toggleNavbar() primero verificará si la búsqueda y 
//los enlaces de la barra de navegación están actualmente visibles. Si lo están, los ocultará. De lo contrario, los mostrará.
function toggleNavbar() {
    // Obtiene los elementos de búsqueda y los enlaces de la barra de navegación
    const searchInput = document.querySelector("#search input");
    const navbarLinks = document.querySelectorAll("#navbar a");
  
    // Agrega la clase "show" a los elementos para que se muestren
    if (searchInput.classList.contains("show")) {
      // Oculta la búsqueda y los enlaces de la barra de navegación
      searchInput.classList.remove("show");
      navbarLinks.forEach((link) => {
        link.classList.remove("show");
      });
  
      // Agrega una pequeña animación a los elementos para que se oculten
      searchInput.style.animation = "fadeOut 0.5s ease-in-out";
      navbarLinks.forEach((link) => {
        link.style.animation = "fadeOut 0.5s ease-in-out forwards";
      });
    } else {
      // Muestra la búsqueda y los enlaces de la barra de navegación
      searchInput.classList.add("show");
      navbarLinks.forEach((link) => {
        link.classList.add("show");
      });
  
      // Agrega una pequeña animación a los elementos para que se muestren
      searchInput.style.animation = "fadeIn 0.5s ease-in-out";
      navbarLinks.forEach((link) => {
        link.style.animation = "fadeIn 0.5s ease-in-out forwards";
      });
    }
  }
  // Función para detener el audio
  function stopAudio() {
    var audio = document.getElementById("audio");
    audio.pause();
}
// JavaScript para agregar/quitar la clase según el tamaño de la pantalla
window.addEventListener('resize', function() {
  var ofertasElement = document.querySelector('.ofertas');

  if (window.innerWidth <= 768) {
      // Si el ancho de la pantalla es menor o igual a 768px, quitar la clase de animación
      ofertasElement.classList.remove('glitch-animation');
  } else {
      // Si el ancho de la pantalla es mayor a 768px, agregar la clase de animación
      ofertasElement.classList.add('glitch-animation');
  }
});

// Disparar el evento resize al cargar la página para inicializar el estado
window.dispatchEvent(new Event('resize'));

/**** Audio */
function botonAudio(){
  var audio = document.getElementById("audio");
  // Cambia la propiedad 'muted' para activar/desactivar el audio
  audio.muted = !audio.muted;
   // Cambia la visibilidad de la etiqueta audio
   audio.style.display = audio.style.display === "none" ? "block" : "none";

}