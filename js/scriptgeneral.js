$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#login').click(function() {
        $('#login-modal').modal('show');
    });

    $('#ConfirmarIngresar').click(function() {
        $('#login-modal').modal('hide');
        $('#temp-modal').modal('show');
    });

    $('#registrar-propietario').click(function() {
        $('#tc-modal').modal('show');
    });
});