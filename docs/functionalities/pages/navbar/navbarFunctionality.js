sectionContainer[1].scrollIntoView({
    behavior: 'smooth',
});

let iconClicksVar = 0;
console.log('iconClicksVar:', iconClicksVar);

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

        /*         if (index != 1 && 0) {
                    iconClicksVar++;
                    console.log('iconClicksVar:', iconClicksVar)
                }

                function checkScroll() {


                    let isClickedBefore = () => {
                        if (iconClicksVar != 0) {
                            return true;
                        }
                        return false;
                    };

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