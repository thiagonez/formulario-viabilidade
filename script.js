$(document).ready(function() {
    // Rolagem suave para as seções ao clicar nos links do menu
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000); // Tempo de rolagem de 1 segundo
    });

    // Alterar o fundo do menu ao rolar a página
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').css('background', 'rgba(0, 115, 230, 0.8)');
        } else {
            $('#navbar').css('background', 'rgba(0, 115, 230, 0.9)');
        }
    });
});
