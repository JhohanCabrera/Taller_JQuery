$(function () {
    $("#contenedor1").draggable();
});

$(function () {
    $("#selectable").selectable();
});

$(function () {
    $("#resizable").resizable();
});

$(function () {
    $("#menu").menu();
});

$(function () {
    $(".controlgroup").controlgroup()
    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });
});