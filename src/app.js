let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerVisible = document.querySelector('.hidden');
let menuHide = document.querySelector('.hide')

const toggleHamburger = () => {
    hamburgerVisible.classList.toggle('flex');
    hamburgerVisible.classList.remove('hidden');
};
const hideMenu = () => {
    hamburgerVisible.classList.add('hidden')
    hamburgerVisible.classList.remove('flex')
};

hamburgerMenu.addEventListener('click', toggleHamburger);
menuHide.addEventListener('click',hideMenu)