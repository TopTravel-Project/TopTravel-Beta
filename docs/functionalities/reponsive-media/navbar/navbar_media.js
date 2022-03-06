function getNavHeight() {
    if (window.innerWidth <= 500) {
        let navHeight = nav.offsetHeight;
        main.style.setProperty('--nav-height', navHeight + 'px');
        console.log("hello world");
    }
}

window.addEventListener('resize', () => {
    getNavHeight();
});

getNavHeight();