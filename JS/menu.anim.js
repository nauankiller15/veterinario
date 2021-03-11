/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("callmenu").style.top = "0";
        document.getElementById("menu").style.top = "0";
        document.getElementById("menu").style.backgroundColor = "#ffffffd3";
        document.getElementById("menu").style.height = "169px";


    } else {
        document.getElementById("callmenu").style.top = "-80px";
        document.getElementById("menu").style.top = "-70px";
        document.getElementById("menu").style.backgroundColor = "#ffffff";
        document.getElementById("menu").style.height = "167px";


    }
    prevScrollpos = currentScrollPos;
}