// =========================================
// Baby Shower Zoe Julieth
// Script principal
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // Animación de entrada
    document.body.classList.add("mostrar");

    // Botón de ubicación
    const botonMapa = document.querySelector(".boton");

    if (botonMapa) {

        botonMapa.addEventListener("click", function (e) {

            e.preventDefault();

            alert("💜 ¡Nos vemos pronto!");

            setTimeout(() => {

                window.open(
                    "https://maps.google.com/?q=19.7816784,-99.0202505",
                    "_blank"
                );

            }, 1200);

        });

    }

});
