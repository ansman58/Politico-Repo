const deleteParty = document.querySelector('.fa-trash-can');
const openModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close__button');
const infoContainer = document.querySelectorAll('to__be__deleted')

infoContainer.forEach(element => {
        element.addEventListener('click', (event) => {
                const eventTarget = event.target;
                if(eventTarget.classList.contains('icon'))
        })
})


