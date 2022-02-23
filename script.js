// // ACTIVE POINTER EVENTS WHEN IPADPHONE

// function cursorOrNot() {
//     if (width > 1200) { //NOPHONEIPAD
//         document.querySelector('#cursor').classList.add = "cursor";
//     } else {
//         document.querySelector('#cursor').classList.remove = "cursor";
//     }
// }

// cursorOrNot()

// GET WIDTH FOR RESPONSIVE
var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    if (width > 1200) { //NOPHONEIPAD
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    } else {
    }
});


// CURSOR BUTTON OR SOCIAL
function bigCursor() {
    if (width > 1200) { //NOPHONEIPAD
        document.querySelector('.cursor').classList.add('cursorOnTarget');
    } else {
    }
}
function smallCursor() {
    if (width > 1200) { //NOPHONEIPAD
        document.querySelector('.cursor').classList.remove('cursorOnTarget');
    } else {
    }
}

// CURSOR ARROW
var waiting;

function rightArrowCursor() {
    if (width > 1200) { //NOPHONEIPAD
        // HIDE ARROW FIX
        document.querySelector('#flecheCarrouselRight').style.visibility = "hidden";
        // ARROW CURSOR
        document.querySelector('#cursor').classList.remove('cursor');
        document.querySelector('#cursor').classList.add('arrowRightCursor');
    } else {
    }
}
function noRightArrowCursor() {
    if (width > 1200) { //NOPHONEIPAD
        // SHOW ARROW FIX
        document.querySelector('#flecheCarrouselRight').style.visibility = "visible";
        // NORMAL CURSOR
        document.querySelector('#cursor').classList.remove('arrowRightCursor');
        document.querySelector('#cursor').classList.add('cursor');
    } else {
    }
}
function leftArrowCursor() {
    if (width > 1200) { //NOPHONEIPAD
        // HIDE ARROW FIX
        document.querySelector('#flecheCarrouselLeft').style.visibility = "hidden";
        // ARROW CURSOR
        document.querySelector('#cursor').classList.remove('cursor');
        document.querySelector('#cursor').classList.add('arrowLeftCursor');
    } else {
    }
}
function noLeftArrowCursor() {
    if (width > 1200) { //NOPHONEIPAD
        // SHOW ARROW FIX
        document.querySelector('#flecheCarrouselLeft').style.visibility = "visible";
        // NORMAL CURSOR
        document.querySelector('#cursor').classList.remove('arrowLeftCursor');
        document.querySelector('#cursor').classList.add('cursor');
    } else {
    }
}

// A PROPOS

// FADEIN

function adjustFadeResponsive() {
    if (width > 700) {

        // TEXTDROITE
        // FOCAL
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textfocal');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
                element.style.transform = "translateX(-100px)";
            }
        });
        // SEO
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textSeo');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
                element.style.transform = "translateX(-100px)";
            }
        });


        // TEXTGAUCHE
        // SLIDER
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textSlider');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
                element.style.transform = "translateX(100px)";
            }
        });
        // RESPONSIVE
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textresponsive');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
                element.style.transform = "translateX(100px)";
            }
        });
        // DEV
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textdev');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
                element.style.transform = "translateX(100px)";
            }
        });
    } else {
        // TEXTDROITE
        // FOCAL
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textfocal');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
            }
        });
        // SEO
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textSeo');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
            }
        });


        // TEXTGAUCHE
        // SLIDER
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textSlider');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
            }
        });
        // RESPONSIVE
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textresponsive');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
            }
        });
        // DEV
        window.addEventListener('scroll', function () {
            var element = document.getElementById('textdev');
            var position = element.getBoundingClientRect();

            if (position.bottom <= window.innerHeight) {
                element.style.transition = "1s ease-in-out"
                element.style.opacity = "1";
            }

            else {
                element.style.transition = "0.7s ease-in-out"
                element.style.opacity = "0";
            }
        });
    }
}

adjustFadeResponsive();

// PARALLAX
// function parallax() {
//     document.body.style.backgroundPositionY = "" + (window.pageYOffset*0.8) + "px";
// }
// window.addEventListener('scroll', parallax);
