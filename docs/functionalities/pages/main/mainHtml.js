let navbarIconContainer = document.querySelector('.nav-icons-container');
let navbarTextContainer = document.querySelector('.nav-text-container');

let main = document.querySelector('main');
let sectionContainer = document.querySelectorAll('main>section');

let navWidth;

/* setDefaultPosition(); */

// menuIcon
document.querySelectorAll('.nav-icons-container>div')[0].addEventListener('click', () => {
    console.log("menu icon is clicked");

    if (navLinksContainer.classList.contains('closeNav')) {
        navWidth = navbarIconContainer.offsetWidth + navbarTextContainer.offsetWidth;
        main.style.marginLeft = navWidth - navbarIconContainer.offsetWidth + "px";
    } else {
        navWidth = navbarIconContainer.offsetWidth;
        main.style.marginLeft = navWidth - navWidth + "px";
    }
});
/* 
function setDefaultPosition() {
    navWidth = navbarIconContainer.offsetWidth;
    main.style.marginLeft = `
                $ { navWidth }
                px `;
} */