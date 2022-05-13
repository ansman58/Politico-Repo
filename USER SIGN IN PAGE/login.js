const btn = document.querySelector('.login__submit__button')

const userPassword = document.querySelector('#password')
const userEmail = document.querySelector('#email')

  btn.addEventListener ('click', async (event)  => {
    event.preventDefault();

    const formData = new FormData()
    formData.append('password', userPassword.value)
    formData.append('email', userEmail.value)

    const response = await fetch (`http://localhost:4000/users/login`, {
        method: 'POST',
        body: formData,
        
    })

    const result = await response.json()


console.log(result)

    if(result.status === 400) {
      if(result.error.email) {
        Toastify ({
          text: result.error.email,
          duration: 3000,
          gravity: "top",
          position: screenLeft,
          style: {
              background: "red"
          }
      }).showToast();
      }

      if(result.error.password) {
        Toastify ({
          text: result.error.password,
          duration: 3000,
          gravity: "top",
          position: screenLeft,
          style: {
              background: "red"
          }
      }).showToast();
      }
    }

    if (result.status === 200) {
      const token = result.data.token

      localStorage.setItem('token', token)

      location.href = '../usercandidates/usercandidates.html';

    }
       
}
)