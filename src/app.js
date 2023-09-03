
// Variables
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerVisible = document.querySelector('.menu-navi')
const menuHide = document.querySelector('.close-menu')
const shoppingCart = document.querySelector('.shopping-cart-menu')
const shopCart = document.querySelector('.shop-cart')
const cartHide = document.querySelector('.close-cart')
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const qtyInput = document.getElementById('qtyInput');


// Declarate functions
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


// Calling functions
hamburgerMenu.addEventListener('click', toggleHamburger);
menuHide.addEventListener('click',hideMenu)
shopCart.addEventListener('click',shopCartOpen)
cartHide.addEventListener('click', shopCartClose)
minusBtn.addEventListener('click', downValue)
plusBtn.addEventListener('click', upValue)