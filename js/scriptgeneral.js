$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#login').click(function() {
        $('#login-modal').modal('show');
    });

    $('#ConfirmarIngresar').click(function() {
        if($('#user').val() != "12345" || $('#pass').val() != "12345") {
            alert("Documento y/o contraseña incorrectas");
        } else {
            $('#login-modal').modal('hide');
            $('#temp-modal').modal('show');
        }
    });

    $('#registrar-propietario').click(function() {
        $('#tc-modal').modal('show');
    });

    $('#aceptar-tc').change(function() {
        $('#ConfirmarRegistroProp ').toggleClass('disabled');
    });

    $('#chkBici').change(function() {
        $('#chasis').toggleClass('disabled');
        $('#motor').toggleClass('disabled');
        $('#cilindraje').toggleClass('disabled');
        $('#carroceria').toggleClass('disabled');
    });
});