const hamburgerMenu = document.querySelector(".hamburger__menu");
const headerWrapper = document.querySelector(".header__wrapper");
const body = document.querySelector("body");

document.body.onresize = detectWindow;

    function detectWindow() {
        if (window.screen.width > 768 && headerWrapper.classList.contains("hide__mob__nav")) {
            headerWrapper.classList.remove("hide__mob__nav");
        }
    }


hamburgerMenu.addEventListener("click", openHamburger)

function openHamburger() {
    hamburgerMenu.classList.toggle("open__hambuger");
    if (hamburgerMenu.classList.contains("open__hambuger")) {
        body.classList.add("noscroll");
        headerWrapper.classList.remove("hide__mob__nav");
        headerWrapper.classList.add("display__mob__nav");
    }
    else {
        body.classList.remove("noscroll");
        headerWrapper.classList.remove("display__mob__nav");
        headerWrapper.classList.add("hide__mob__nav");
        
    }
}