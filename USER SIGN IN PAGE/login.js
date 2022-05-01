const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__ul');
const loginButton = document.querySelector('.login__submit__button')


 hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

loginButton.addEventListener('click', (event) => {
    event.preventDefault;
    
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();

    const error = [];

    if (userEmail === '') {
        error.push('Email cannot be empty')
        console.log(error)
    }

    if(userPassword === '') {
        error.push(`Password cannot be empty`)
        console.log(error)
    }

    if(userPassword !== '' && userPassword.length <= 6) {
        error.push(`Password cannot be less than six characters`)
        console.log(error)
    }

    if(error.length > 0) {
        for(let i = 0; i < error.length; i++) {
            Toastify ({
                text: error[i],
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "red"
                }
            }).showToast();
        }
    }
    else {
        Toastify ({
            text: "Success",
            duration: 3000,
            gravity: "bottom",
            position: screenLeft,
            style: {
                background: "green"
            }
        }).showToast();
    }
})
