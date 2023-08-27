let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerVisible = document.querySelector('.menu-navi')
let menuHide = document.querySelector('.close-menu')

const toggleHamburger = () => {
    hamburgerVisible.classList.remove('hidden');
    hamburgerVisible.classList.add('flex')
};
const hideMenu = () => {
    hamburgerVisible.classList.remove('flex')
    hamburgerVisible.classList.add('hidden')
};

hamburgerMenu.addEventListener('click', toggleHamburger);
menuHide.addEventListener('click',hideMenu)