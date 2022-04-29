const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__ul');



 hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active')
});

