sectionContainer[1].scrollIntoView({
    behavior: 'smooth',
});


navIcons.forEach((item, index, arr) => {
    let itemHeight = item.offsetHeight;

    item.addEventListener('click', (e) => {

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

            if (index != 0) {
                sectionContainer[index].scrollIntoView({
                    behavior: 'smooth',
                });

                navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');
            }
        });
    });
});