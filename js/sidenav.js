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

    function ocultarElementos() {
        $('.pages').addClass('ocultar');
        $('.ingresar').removeClass('ocultar');
        $('#modificar-eliminar').addClass('ocultar');
    }

    function habilitarModificarEliminar() {
        $('.consultas').addClass('ocultar');
        $('.ingresar').addClass('ocultar');
        $('#modificar-eliminar').removeClass('ocultar');
    }

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

    $('#activar-administrador').click(function() {
        ocultarElementos();
        $('#administrador').removeClass('ocultar');
    });
    $('#activar-vigilante').click(function() {
        ocultarElementos();
        $('#vigilante').removeClass('ocultar');
    });  
    $('#activar-consultar').click(function() {
        ocultarElementos();
        $('#consultar').removeClass('ocultar');
    });  
    $('#activar-reportes').click(function() {
        ocultarElementos();
        $('#reportes').removeClass('ocultar');
    });

    $('#btnConsultar').click(function() {
        switch ($('#tipo').val()) {
            case "administrador":
                habilitarModificarEliminar();
                $('#administrador').removeClass('ocultar');
                break;
            case "vigilante":
                habilitarModificarEliminar();
                $('#vigilante').removeClass('ocultar');
                break;
            default:
                habilitarModificarEliminar();
                $('#propietario').removeClass('ocultar');
                break;
        }
    });
});