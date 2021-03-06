const hamburgerMenu = document.querySelector(".hamburger__menu");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header_nav");
const body = document.querySelector("body");

document.body.onresize = detectWindow;

    function detectWindow() {
        if (window.screen.width > 768 && headerNav.classList.contains("hide__ham")) {
            headerNav.classList.remove("hide__ham");
        }
    }


hamburgerMenu.addEventListener("click", openHamburger)

function openHamburger() {
    hamburgerMenu.classList.toggle("open__hambuger");
    if (hamburgerMenu.classList.contains("open__hambuger")) {
        headerNav.classList.add("display__ham");
        headerNav.classList.remove("hide__ham");
        body.classList.add("noscroll");
    }
    else {
        headerNav.classList.remove("display__ham");
        headerNav.classList.add("hide__ham");
        body.classList.remove("noscroll");
    }
}