$(document).ready(function(){
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    // Example of additional interactivity
    $('.btn-secondary').hover(function() {
        $(this).css('background-color', '#f47c3c');
    }, function() {
        $(this).css('background-color', '#0056b3');
    });
});
