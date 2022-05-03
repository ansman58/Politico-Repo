const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__ul');
const loginButton = document.querySelector('.login__submit__button')


 hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

