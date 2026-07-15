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
