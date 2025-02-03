// Animation de défilement fluide
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Animation des barres de compétences au scroll
    $(window).scroll(function() {
        $('.skill-progress').each(function(){
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            if(position < $(window).scrollTop() + windowHeight - 100) {
                $(this).css('width', $(this).attr('data-width'));
            }
        });
    });

    // Ouvrir une nouvelle page au clic sur un bouton
    $('.btn-primary').on('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut
        var targetUrl = $(this).attr('href'); // Récupère l'URL de la section
        window.location.href = targetUrl; // Ouvre la nouvelle page
    });
});