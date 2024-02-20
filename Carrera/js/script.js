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
var block = document.querySelector('#hit-box')
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
    },500);
}

function checkCollision() {
    const personajeRect = personajeImg.getBoundingClientRect();
    const bloqueRect = block.getBoundingClientRect();

    const personajeTop = personajeRect.top;
    const personajeBottom = personajeRect.bottom;
    const personajeLeft = personajeRect.left;
    const personajeRight = personajeRect.right;

    const bloqueTop = bloqueRect.top;
    const bloqueBottom = bloqueRect.bottom;
    const bloqueLeft = bloqueRect.left;
    const bloqueRight = bloqueRect.right;

    const allowPassingTime = 400; // tiempo que le permite para pasar

    if (
      personajeBottom > bloqueTop &&
      personajeTop < bloqueBottom &&
      personajeRight > bloqueLeft &&
      personajeLeft < bloqueRight
    ) // Si el personaje está en el aire, permitir que pase durante el tiempo permitido
    if (isJumping) {
        setTimeout(() => {
            if (isJumping) {
                // Si todavía está en el aire después del tiempo permitido, termina el juego
                endGame();
            }
        }, allowPassingTime);
    } else {
        // Si no está en el aire, termina el juego inmediatamente
        endGame();
    }
  }

  function endGame() {
    // Obtener todas las imágenes en la página
    const imagenes = document.querySelectorAll('img');
    const hideScore = document.querySelector('.score');


    // Iterar sobre cada imagen y detener la animación
    imagenes.forEach((imagen) => {
        imagen.style.opacity = 0;
    });
    hideScore.style.display= 'none';
    // Ocultar la sección actual de juego y mostrar la sección de la otra página

    const otraPaginaSection = document.querySelector('#pagina7');
    const btnGame = document.querySelector('#opt-game');

    btnGame.style.display = 'none';
    otraPaginaSection.style.display = 'block';
  }

  setInterval(checkCollision, 100); // Verifica la colisión cada 100 milisegundos 
/******************************************* */