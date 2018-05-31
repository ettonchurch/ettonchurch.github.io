$('.hamburger').click (function(){
    $(this).toggleClass('open');
});

var trigger = 0;

function openNav() {
    document.getElementById("mySidenav").style.height = "8vh";
    document.getElementById("imageContainer").style.marginTop = "8vh";
    trigger = 1;
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("imageContainer").style.marginTop= "0";
    trigger = 0;
}
function openClose() {
    if (trigger == 0) {
        openNav()
    }
    else if (trigger == 1) {
        closeNav()
    }
}
