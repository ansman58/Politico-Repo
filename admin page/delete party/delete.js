const deleteParty = document.querySelector('.fa-trash-can');
const openModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close__button');
const infoContainer = document.querySelectorAll('to__be__deleted')

deleteParty.addEventListener('click', (event) => {
        infoContainer.forEach(el => {
                if( el === openModal) {
                        openModal.showModal();
                } 
          })
       
})



closeModal.addEventListener('click', () => {

                let response = openModal.close();
})
