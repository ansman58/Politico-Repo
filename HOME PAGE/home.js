const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__ul');
// const lineOne = document.querySelector('.line1');
// const lineTwo = document.querySelector('.line');
// const lineThree = document.querySelector('.line3');



 hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    // hamburger.classList.toggle('active')
    // lineTwo.classList.toggle('active')
    // lineThree.classList.toggle('active')
})