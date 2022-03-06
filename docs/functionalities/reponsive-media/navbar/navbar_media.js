function getNavHeight() {
    if (window.innerWidth <= 500) {
        let navHeight = nav.offsetHeight;
        main.style.setProperty('--nav-height', navHeight + 'px');
    }
}

window.addEventListener('resize', () => {
    getNavHeight();
});

getNavHeight();