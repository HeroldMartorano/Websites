// Botões header start
const navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = ()=> {
    navbar.classList.toggle('active')
    search.classList.remove('active')
    cartItems.classList.remove('active')
}

const search = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = ()=>{
    search.classList.toggle('active')
    navbar.classList.remove('active')
    cartItems.classList.remove('active')
}

const cartItems = document.querySelector('.cart-items-container')
document.querySelector('#cart-btn').onclick = ()=>{
    cartItems.classList.toggle('active')
    navbar.classList.remove('active')
    search.classList.remove('active')
}
// Botões header ends

