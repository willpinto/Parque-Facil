jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

    $('#activar-administrador').click(function() {
        $('.pages').removeClass('activo');
        $('#administrador').addClass('activo');
    });
    $('#activar-vigilante').click(function() {
        $('.pages').removeClass('activo');
        $('#vigilante').addClass('activo');
    });  
    $('#activar-consultar').click(function() {
        $('.pages').removeClass('activo');
        $('#consultar').addClass('activo');
    });  
    $('#activar-reportes').click(function() {
        $('.pages').removeClass('activo');
        $('#reportes').addClass('activo');
    });  
});