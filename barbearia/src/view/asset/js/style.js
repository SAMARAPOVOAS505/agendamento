// Detecta quando a página é rolada
window.addEventListener("scroll", function () {
    // Verifica se as fotos estão visíveis na janela
    var fotos = document.querySelectorAll(".foto, .foto2");
    var windowHeight = window.innerHeight;

    fotos.forEach(function (foto) {
        var fotoPosicao = foto.getBoundingClientRect().top;

        if (fotoPosicao < windowHeight / 2) {
            foto.classList.add("aparecer"); // Adiciona a classe .aparecer às fotos quando estão na metade da janela
        } else {
            foto.classList.remove("aparecer"); // Remove a classe .aparecer das fotos quando não estão visíveis
        }
    });
});


