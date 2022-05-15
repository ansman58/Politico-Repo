const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__ul");
const signupButton = document.querySelector(".signup__button");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm__password");

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lName");
const file = document.querySelector(".profile__image");
const userRole = document.querySelector(".roles");
const phoneNumber = document.querySelector("#pNumber");

// alert(userRole[2].value);

signupButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("firstname", firstName.value);
  formData.append("lastname", lastName.value);
  formData.append("file", file.files[0]);
  formData.append("phoneNumber", phoneNumber.value);
  formData.append("role", userRole.value);
  formData.append("password", userPassword.value);
  formData.append("email", userEmail.value);

  // confirmPassword === userPassword ?

  const response = await fetch(`http://localhost:4000/users/signup`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  console.log(result);

  if (result.status === 400) {
    if (result.error.firstname) {
      Toastify({
        text: result.error.firstname,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (result.error.lastname) {
      Toastify({
        text: result.error.lastname,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (result.error.email) {
      Toastify({
        text: result.error.email,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (result.error.password) {
      Toastify({
        text: result.error.password,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (userPassword.value !== confirmPassword.value) {
      Toastify({
        text: "Password must be equal to confirm password",
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (result.error.file) {
      Toastify({
        text: result.error.file,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }
    if (result.error.role) {
      Toastify({
        text: result.error.role,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }
  }
  console.log("show Result", result);
  if (result.status === 200) {
    location.href = "../USER SIGN IN PAGE/login.html";
  }
});
