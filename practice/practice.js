const menuUl = document.querySelector('.menu__ul');
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    menuUl.classList.toggle('active')
    // menuUl.style.display = "block";
})