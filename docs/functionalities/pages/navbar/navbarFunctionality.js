navIcons.forEach((item, index, arr) => {
    let itemHeight = item.offsetHeight;

    item.addEventListener('click', (e) => {
        // scroll to the section with same index as the clicked icon
        if (index != 0) {
            sectionContainer[index].scrollIntoView({
                behavior: 'smooth',
            });

            navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');

            item.forEach((icon) => {
                icon.style.tranform = 'translateX(0)';
            });
            item.querySelector("i").style.transform = 'translateX( 10px )';
        }
    });
});

navLinks.forEach((item, index, arr) => {
    item.addEventListener('click', (e) => {
        let itemHeight = item.offsetHeight;

        item.addEventListener('click', (e) => {
            // scroll to the section with same index as the clicked icon
            if (index != 0) {
                sectionContainer[index].scrollIntoView({
                    behavior: 'smooth',
                });

                navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');

                navFontAwesomeIcons[index].style.transform = 'translateX(var(var(--indicatore-width)))';
            }
        });
    });
});