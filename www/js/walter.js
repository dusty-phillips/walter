function play() {
    $.post("/play.html", update_status);
}
function next() {
    $.post("/next.html", update_status);
}
function prev() {
    $.post("/prev.html", update_status);
}
function get_status() {
    $.get("/status.html", update_status);
}
function update_status(text) {
    $("#status").html(text);
}

$(function() {
    $(".play").click(play);
    $(".next").click(next);
    $(".prev").click(prev);
    window.setInterval(get_status, js(3000));
});