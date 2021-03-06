// TELA DE CARREGAMENTO
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

// fade in scroll
$(window).on("load", function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round((1 / animation_height) * 10000) / 25000;

        $('.fade').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).html;
                    $(this).css({
                        transition: 'opacity 0.9s linear',
                        opacity: 1
                    });

                } else {
                    $(this).html;
                    $(this).css({
                        transition: 'opacity 0.s ease-in-out',
                        opacity: (windowBottom - objectTop) * ratio
                    });
                }
            } else {
                $(this).html;
                $(this).css('opacity', 0);
            }
        });
    }
    $('.fade').css('opacity', 0);
    fade();
    $(window).scroll(function() { fade(); });
});