let navbarIconContainer = document.querySelector('.nav-icons-container');
let navbarTextContainer = document.querySelector('.nav-text-container');

let main = document.querySelector('main');

let navWidth;

setDefaultPosition();

// menuIcon
document.querySelectorAll('.nav-icons-container>div')[0].addEventListener('click', () => {

    // here was a small bug, if is happen another time, put the if code in else, and else code in if... and try to fix it.
    if (navLinksContainer.classList.contains('closeNav')) {
        navWidth = navbarIconContainer.offsetWidth + navbarTextContainer.offsetWidth;
        main.style.marginLeft = `${navWidth}px`;
    } else {
        navWidth = navbarIconContainer.offsetWidth;
        main.style.marginLeft = `${navWidth}px`;
    }
});

function setDefaultPosition() {
    navWidth = navbarIconContainer.offsetWidth;
    main.style.marginLeft = `${navWidth}px`;
}