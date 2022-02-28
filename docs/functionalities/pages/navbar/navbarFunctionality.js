navIcons.forEach((item, index, arr) => {
    let itemHeight = item.offsetHeight;

    sectionContainer[1].scrollIntoView({
        behavior: 'smooth',
    });

    item.addEventListener('click', (e) => {
        // scroll to the section with same index as the clicked icon
        if (index != 0) {
            sectionContainer[index].scrollIntoView({
                behavior: 'smooth',
            });

            navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');
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