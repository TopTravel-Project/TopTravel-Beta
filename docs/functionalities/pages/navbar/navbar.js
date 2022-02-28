let navIcons = document.querySelectorAll('.nav-icons-container>div');
let navLinks = document.querySelectorAll('.nav-text-container>span');

let navLinksContainer = document.querySelector('.nav-text-container');
let navIconsContainer = document.querySelector('.nav-icons-container');

let menuIcon = navIcons[0];

navIcons.forEach((item, index, arr) => {
    item.addEventListener('mouseover', (e) => {
        item.classList.add('hovered');
        navLinks[index].classList.add('hovered');
    });
    item.addEventListener('mouseout', (e) => {
        item.classList.remove('hovered');
        navLinks[index].classList.remove('hovered');
    });
});

navLinks.forEach((item, index, arr) => {
    item.addEventListener('mouseover', (e) => {
        item.classList.add('hovered');
        navIcons[index].classList.add('hovered');
    });
    item.addEventListener('mouseout', (e) => {
        item.classList.remove('hovered');
        navIcons[index].classList.remove('hovered');
    });
});

menuIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('closeNav');

    if (navLinksContainer.classList.contains('closeNav')) {
        menuIcon.querySelector("i").style.transform = 'scale(0.8) rotate(0)';
    } else {
        menuIcon.querySelector("i").style.transform = 'scale(1) rotate(15deg)';
    }
});