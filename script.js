// ===============================
// Baby Shower Zoe Julieth
// Script principal
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const hero = document.querySelector(".hero");

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            hero.classList.remove("oculto");
hero.classList.add("mostrar");

// Iniciar música
const musica = document.getElementById("musica");

musica.volume = 0.4;

window.addEventListener("load", () => {
    musica.play().catch(error => {
        console.log("No se pudo reproducir:", error);
    });
});

// Efecto de volumen gradual
let volumen = 0;

const subirVolumen = setInterval(() => {

    if (volumen < 0.35) {

        volumen += 0.02;
        musica.volume = volumen;

    } else {

        clearInterval(subirVolumen);

    }

}, 250);

        }, 1200);

    }, 3500);

});
// ===============================
// Cuenta regresiva
// ===============================

const fechaEvento = new Date("2026-08-15T15:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) return;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();
setInterval(actualizarContador, 1000);
const musica = document.getElementById("musica");

function iniciarMusica() {
    musica.volume = 0.35;

    musica.play().then(() => {
        console.log("Música iniciada");
    }).catch(() => {
        console.log("Esperando interacción...");
    });
}

window.addEventListener("load", iniciarMusica);

document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });
