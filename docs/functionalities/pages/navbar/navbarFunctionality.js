navIcons.forEach((item, index, arr) => {
    item.addEventListener('click', (e) => {
        // scroll to the section with same index as the clicked icon
        if (index != 0) {
            sectionContainer[index].scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

navLinks.forEach((item, index, arr) => {
    item.addEventListener('click', (e) => {

    });
});