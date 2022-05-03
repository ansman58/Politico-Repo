const voteMe = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const candidateProfile = document.querySelectorAll(".candidate__profile");

let voted;
let showModal;


candidateProfile.forEach((element) => {
  element.addEventListener("click", (event) => {
    const target = event.target;
    if(target.classList.contains('btns')) {
      element.querySelector('.modal').showModal()
    }

  });
});
