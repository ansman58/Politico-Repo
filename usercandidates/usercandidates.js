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
      element.querySelector('.modal2').textContent = `Are you sure you wnat to ?`
      if(document.querySelector('.yes-btn')) {
        return `You have successfully voted this candidate`
      }
    }

  });
});
