const menuHamburger = document.querySelector('.menu-hamburger')
const navMenu = document.querySelector('.nav-menu')
const buttonCv = document.querySelector('#buttonHidden')

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    buttonCv.classList.toggle('active')
})
