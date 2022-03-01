sectionContainer[1].scrollIntoView({
    behavior: 'smooth',
});

let isLastIconClicked = false;

navIcons.forEach((item, index, arr) => {
    let itemHeight = item.offsetHeight;

    item.addEventListener('click', (e) => {
        // scroll to the section with same index as the clicked icon
        if (index != 0) {
            sectionContainer[index].scrollIntoView({
                behavior: 'smooth',
            });
            navIconsContainer.style.setProperty("--indicatoreY", itemHeight * index + 'px');
        }

        /*         if (index == arr.length - 1) {
                    main.style.marginLeft = 0 + "px";
                    isLastIconClicked = true;
                }

                if (index != 4 && isLastIconClicked) {
                    main.style.marginLeft = 65 + "px";
                    isLastIconClicked = false;
                } */
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