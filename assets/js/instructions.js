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