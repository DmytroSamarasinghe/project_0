
$(function () {
    function openOffcanvas() {
        document.getElementById("myOffcanvas").style.width = "175px";
        document.getElementById("myOffcanvas").style.position = "fixed";
    }
    function openNav3() {
        document.getElementById("myCanvasNav").style.width = "100%";
        document.getElementById("myCanvasNav").style.opacity = "0.8";
    }
    function closeOffcanvas() {
        document.getElementById("myOffcanvas").style.width = "0%";
        document.body.style.backgroundColor = "white";
        document.getElementById("myCanvasNav").style.width = "0%";
        document.getElementById("myCanvasNav").style.opacity = "0";
    }
});