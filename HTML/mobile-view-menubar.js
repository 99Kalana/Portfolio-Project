function toggleMenu() {
    var nav = document.getElementById("headernav");
    var menuIcon = document.getElementById("menuIcon");
    var closeIcon = document.getElementById("closeMenu");


    nav.classList.toggle("show");


    if (nav.classList.contains("show")) {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}