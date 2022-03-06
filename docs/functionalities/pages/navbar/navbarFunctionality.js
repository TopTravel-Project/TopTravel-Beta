/* main.style.left = "64px";
main.style.marginLeft = "calc((-100vw * 1 + (64px * 1));"; */
let body = document.querySelector("body");

navIcons.forEach((item, index, arr) => {
    let itemHeight = item.offsetHeight;

    item.addEventListener('click', (e) => {

        if (index != 0) {
            body.style.setProperty('--indexPagina', index);
            main.style.setProperty('--navWidth', navbarIconContainer.offsetWidth + "px");

            navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');
        }
    });
});

navLinks.forEach((item, index, arr) => {
    item.addEventListener('click', (e) => {
        let itemHeight = item.offsetHeight;

        item.addEventListener('click', (e) => {

            if (index != 0) {
                body.style.setProperty('--indexPagina', index);
                main.style.setProperty('--navWidth', navbarIconContainer.offsetWidth + "px");

                navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');
            }
        });
    });
});