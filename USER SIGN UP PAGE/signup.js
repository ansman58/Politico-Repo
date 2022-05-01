const signupBtn = document.querySelector('.signup__button');
const password = document.querySelector([type = "password"]).value.trim()
const confirmPassword = document.querySelector([type = "confirm_password"]).value.trim()
const phoneNumber = document.querySelector('#pNumber').value.trim();
const selectRole = document.querySelector('.roles').value.trim();

signupBtn.addEventListener('click', () {
   return password === '' ? `Password cannot be empty` : password
});

