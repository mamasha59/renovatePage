import './css/app.scss';
const burgerButton = document.querySelector('.header__burger-button');//--- кнопка бургера
const menuBurger = document.querySelector('.header__block-burger')//--- меню бургера
// const bodyHeader = document.querySelector('.header__body')
// const hoverType = document.querySelector('.header__hover-price')

burgerButton.addEventListener('click',()=>{
    menuBurger.classList.toggle('header__show-burger');
    burgerButton.classList.toggle('header__show-burger');
    document.body.classList.toggle('hidden')
})