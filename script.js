// --- CONTADOR REGRESIVO ---

// 1. Establece la fecha y hora de tu fiesta
// Formato: "Mes DD, YYYY HH:MM:SS" (Mes en inglés)
const targetDate = new Date("November 29, 2025 19:30:00").getTime();

// 2. Actualiza el contador cada segundo
const countdownFunction = setInterval(function() {

    // Obtiene la fecha y hora actual
    const now = new Date().getTime();

    // Encuentra la diferencia entre ahora y la fecha objetivo
    const distance = targetDate - now;

    // 3. Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. Muestra los resultados en los elementos HTML
    // Añade un '0' al principio si el número es menor de 10
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    // 5. Si el contador termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".timer-container").innerHTML = "<h3>¡Llegó el día!</h3>";
    }
}, 1000); // 1000 milisegundos = 1 segundo
// --- SLIDER DE FOTOS ---

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    
    // Mueve el slider
    document.querySelector(".slider").style.transform = `translateX(${-slideIndex * 100}%)`;
}