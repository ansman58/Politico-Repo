const voteMe = document.querySelectorAll('button');
const modal = document.querySelector('.modal');


let voted;
let showModal;

// const display = voteMe.textContent
voteMe.forEach(element => {
    element.addEventListener('click', (event) => {
        // modal.showModal();
        // element.textContent = `Hellooooooo`
        element.querySelector('.modal').showModal()
 
      })
});







