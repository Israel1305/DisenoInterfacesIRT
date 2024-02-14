// script.js

function simulateRace() {
    var raceTrack = document.getElementById("raceTrack");
    var vallProgress = document.getElementById("vallProgress");
    var runner = document.getElementById("runner");
    var startButton = document.getElementById("startButton");

    var width = 0;
    var interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            raceTrack.style.opacity = "0"; // Agregado el efecto de desvanecimiento
            setTimeout(function () {
                startButton.style.display = "block";
            }, 500);
        } else {
            width++;
            runner.style.left = (width / 100 * 300) + "px";
            vallProgress.style.width = width + "%";
        }
    }, 100);
    var bloque = document.getElementById("bloque");
    bloque.style.display = "none";

    // Luego, cuando desees mostrar el bloque (por ejemplo, después de un tiempo)
    setTimeout(function () {
        bloque.style.display = "block";
    }, 3000);
}

simulateRace();


/** Modo oscuro **/
// Función para cambiar entre el modo claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Si el modo oscuro está activado, cambia el texto del botón
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Turn On 🌞';
    } else {
        darkModeToggle.textContent = 'Turn Off 🌚';
    }
}

// Evento click para el botón de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
/***************** */
/** Transicion pagina **/
function transicion(pagina) {
    $('.pagina').hide();
    $('.button-title').hide(); // Oculta todas las páginas
    $('#' + pagina).fadeIn();
    $('.button-title').fadeIn(); // Muestra la página especificada
}
/********************* */

/*********** SLIDER **** */
let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slider .option');
    const pNames = document.querySelectorAll('.slider .p-name');

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    slides.forEach((slide, index) => {
        slide.style.display = 'none';

        // Oculta los nombres de todos los personajes
        pNames[index].style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';

    // Muestra el nombre del personaje actual
    pNames[currentSlide].style.display = 'block';
}

// Inicializar el slider
showSlide(currentSlide);

/******************** */
function selectCharacter() {
    // Obtener la URL de la imagen del personaje seleccionado
    const characters = document.querySelectorAll('.slider .option img');
    const selectedCharacterUrl = characters[currentSlide].src;

    // Mostrar la imagen del personaje en el div #personaje
    const personajeDiv = document.getElementById('personaje');
    personajeDiv.style.backgroundImage = `url('${selectedCharacterUrl}')`;

    // Puedes almacenar la URL del personaje seleccionado en una variable global o en localStorage para usarla en el juego
    // Ejemplo de almacenamiento en localStorage:
    localStorage.setItem('selectedCharacter', selectedCharacterUrl);
    console.log('selectedCharacter', selectedCharacterUrl);

}