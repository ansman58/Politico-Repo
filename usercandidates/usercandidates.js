const voteMe = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const sss = document.querySelectorAll(".candidate__profile");

let voted;
let showModal;


sss.forEach((element) => {
  element.addEventListener("click", (event) => {
    const target = event.target;
    if(target.classList.contains('btns')) {
      element.querySelector('.modal').showModal()
    }

  });
});
