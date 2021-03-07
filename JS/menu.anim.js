/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("callmenu").style.top = "0";
        document.getElementById("menu").style.top = "0";
        document.getElementById("menu").style.backgroundColor = "#ffffff8c";
    } else {
        document.getElementById("callmenu").style.top = "-50px";
        document.getElementById("menu").style.backgroundColor = "#ffffff";
        document.getElementById("menu").style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
}