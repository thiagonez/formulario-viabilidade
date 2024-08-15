$(document).ready(function () {
    // Rolagem suave para as seções ao clicar nos links do menu
    $('nav a').on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
