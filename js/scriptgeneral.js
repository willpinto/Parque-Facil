$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#login').click(function() {
        $('#login-modal').modal('show');
    });

    $('#registrar-propietario').click(function() {
        $('#tc-modal').modal('show');
    });
});