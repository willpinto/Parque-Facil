$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#btnCheckIn').click(function() {
        $('#checkin-modal').modal('show');
    });

    $('#ConfirmarCheckIn').click(function() {
        $('#checkin-modal').modal('hide');
        $('#checkin-info-modal').modal('show');
    });

    $('#btnCheckOut').click(function() {
        $('#checkout-modal').modal('show');
    });

    $('#ConfirmarCheckOutManual').click(function() {
        $('#checkout-modal').modal('hide');
        $('#checkout-manual-modal').modal('show');
    });

    $('#ConfirmarCheckOut').click(function() {
        $('#checkout-manual-modal').modal('hide');
        $('#checkout-info-modal').modal('show');
    });

    $('#btnValidarPlaca').click(function() {
        if($('#placa').val() == "ABC-123") {
            alert("El vehículo con placa ABC-123 esta actualmente registrado en el sistema y esta activo");
            $('#novedad').removeAttr('disabled');
            $('#btnRegistrarNovedad').removeAttr('disabled');
        } else {
            alert("El vehículo con placa " + $('#placa').val() + " no se encuentra actualmente activo");
        }
    });

    $('#btnRegistrarNovedad').click(function() {
        if($('#novedad').val() != 99){
            alert("Se ha registrado la novedad al vehículo con placa ABC-123");
            location.href = "vigilanteindex.html";
        } else {
            alert("No se ha seleccionado ninguna novedad");
        }
    })
});