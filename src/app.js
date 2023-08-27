let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerVisible = document.querySelector('.menu-navi')
let menuHide = document.querySelector('.close-menu')
let shoppingCart = document.querySelector('.shopping-cart-menu')
let shopCart = document.querySelector('.shop-cart')
let cartHide = document.querySelector('.close-cart')
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const qtyInput = document.getElementById('qtyInput');

const toggleHamburger = () => {
    hamburgerVisible.classList.remove('hidden');
    hamburgerVisible.classList.add('flex')

};
const hideMenu = () => {
    hamburgerVisible.classList.remove('flex')
    hamburgerVisible.classList.add('hidden')
};

const shopCartOpen = () => {
    shoppingCart.classList.remove('hidden')
    shoppingCart.classList.add('flex')
}

const shopCartClose = () => {
    shoppingCart.classList.remove('flex')
    shoppingCart.classList.add('hidden')
}

const downValue = () => {
    if (qtyInput.value > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

const upValue = () => {
    qtyInput.value = parseInt(qtyInput.value) + 1
}

hamburgerMenu.addEventListener('click', toggleHamburger);
menuHide.addEventListener('click',hideMenu)
shopCart.addEventListener('click',shopCartOpen)
cartHide.addEventListener('click', shopCartClose)
minusBtn.addEventListener('click', downValue)
plusBtn.addEventListener('click', upValue)