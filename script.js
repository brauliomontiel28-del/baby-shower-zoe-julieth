// ===============================
// Baby Shower Zoe Julieth
// Script principal
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Elementos principales
    const intro = document.getElementById("intro");
    const hero = document.querySelector(".hero");

    // ===============================
    // Intro automática
    // ===============================

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            hero.classList.remove("oculto");
            hero.classList.add("mostrar");

        }, 1200);

    }, 3500);

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

});
const botonMusica = document.getElementById("botonMusica");
const musica = document.getElementById("musica");

botonMusica.addEventListener("click", async () => {

    try {

        musica.volume = 0.35;

        await musica.play();

        botonMusica.style.opacity = "0";

        setTimeout(() => {

            botonMusica.style.display = "none";

        }, 500);

    } catch (e) {

        console.log(e);

    }

});
