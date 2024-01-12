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
