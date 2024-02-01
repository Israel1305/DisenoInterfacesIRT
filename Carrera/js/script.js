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
}

simulateRace();

function typingAnimation() {
    let timings = {
        easing: 'steps(7, end)',
        delay: 2000,
        duration: 2000,
        fill: 'forwards'
    }
    let cursorTimings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }
    document.querySelector(".text_cursor").animate([
        { opacity: 0 },
        { opacity: 0, offset: 0.7 },
        { opacity: 1 }
    ], cursorTimings);

    document.querySelector(".text_cursor").animate([
        { left: '0%' },
        { left: '100%' }
    ], timings);
}

typingAnimation();

/** Modo oscuro **/
// Función para cambiar entre el modo claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Si el modo oscuro está activado, cambia el texto del botón
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞';
    } else {
        darkModeToggle.textContent = '🌚';
    }
}

// Evento click para el botón de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
/***************** */

/** Transicion pagina **/
function transicion(pagina) {
    $('.pagina').hide(); // Oculta todas las páginas
    $('#' + pagina).fadeIn(); // Muestra la página especificada
}


/********************* */