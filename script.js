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
// ===============================
// Luna + Música + Transición
// ===============================

const intro = document.getElementById("intro");
const hero = document.querySelector(".hero");
const luna = document.querySelector(".luna");
const musica = document.getElementById("musica");

let inicio = false;

luna.style.cursor = "pointer";

luna.addEventListener("click", () => {

    if (inicio) return;

    inicio = true;

    // Música
    musica.volume = 0;
    musica.play().catch(() => {});

    // Subir volumen poco a poco
    let volumen = 0;

    const efecto = setInterval(() => {

        volumen += 0.02;

        musica.volume = volumen;

        if (volumen >= 0.35) {
            clearInterval(efecto);
        }

    },150);

    // Brillo de la luna
    luna.classList.add("luna-activa");

    // Desaparece la intro
    setTimeout(()=>{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            hero.classList.remove("oculto");
            hero.classList.add("mostrar");

        },1200);

    },1800);

});
