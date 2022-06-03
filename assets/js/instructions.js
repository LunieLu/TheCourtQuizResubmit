function body() {
document.body.style.backgroundImage = "url('assets/images/jeremy-perkins-stars.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
}
document.addEventListener("DOMContentLoaded", body());

function on() {
    document.getElementById("instructions").style.display = "block";
}

function off() {
    document.getElementById("instructions").style.display = "none";
}

function start(obj) {
    obj.style.backgroundColor = "white";
    obj.style.color = "black";
    obj.style.border = "1px black";
}

function nostart(obj) {
    obj.style = "none";
}