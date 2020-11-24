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
});