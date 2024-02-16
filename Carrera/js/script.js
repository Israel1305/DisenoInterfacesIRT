// script.js

function simulateRace() {
    var raceTrack = document.getElementById("raceTrack");
    var vallProgress = document.getElementById("vallProgress");
    var runner = document.getElementById("runner");
    var startButton = document.getElementById("startButton");

    // Barra de carga
    var width = 0;
    var interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            raceTrack.style.opacity = "0";
            setTimeout(function () {
                startButton.style.display = "block";
            }, 500);
        } else {
            width++;
            runner.style.left = (width / 100 * 300) + "px";
            vallProgress.style.width = width + "%";
        }
    }, 100);
    ///////////////////////////////

    var bloque = document.getElementById("bloque");
    bloque.style.display = "none";
    console.log('Simulating Race...');

    // mostrar el bloque cada 3s
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
    const notificacion = document.querySelector(".tooltip");
    const start_button = document.getElementById('option-start');

    // Mostrar la imagen del personaje en la etiqueta <img> con el ID 'personaje-selected'
    const personajeImg = document.getElementById('personaje-selected');
    personajeImg.src = selectedCharacterUrl;

    localStorage.setItem('selectedCharacter', selectedCharacterUrl);
    console.log('selectedCharacter', selectedCharacterUrl);

    if (selectCharacter) {
        notificacion.style.display = "none";
        start_button.style.display= "block";
    }
}

//** Movimiento del personaje */

// Obtener el elemento del personaje y el contenedor del juego
const personajeImg = document.querySelector('#personaje img');
const gameContainer = document.querySelector('.game-container');
var block = document.querySelector('#bloque img')
var counter=0;

// Variable para verificar si el personaje está en el aire
let isJumping = false;

// Manejar eventos de teclado
document.addEventListener('keydown', function (event) {
    if (event.key === ' ' || event.key === 'ArrowUp') {
        // Verificar si el personaje no está en el aire
        if (!isJumping) {
            jump();
        }
    }
});
// Maneja eventos en el movil
const gameContainer1 = document.querySelector('.game-container');

gameContainer1.addEventListener('touchstart', function () {
    if (!isJumping) {
        jump();
    }
});

// Función para hacer que el personaje salte
function jump(){
    if(personajeImg.classList == "animate"){return}
    personajeImg.classList.add("animate");
    setTimeout(function(){
        personajeImg.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(personajeImg).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 80 && blockLeft > -80 && characterTop >= 90 && characterTop <= 150) {
        // Colisión detectada
        block.style.animation = "none";
        alert("Game Over. Score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    }
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
/******************************************* */