// const officeSubmitBtn = document.querySelector('.submit_for_office');
// const createOffice = document.querySelector('.create__political__office');


// const party = {
//     "id": 1,
//     "name": "APC",
//     "hqAddress": "Abuja",
//     "logoUrl": "igggb"
// }

// function createParty(id, name, hqAddress,logoUrl){
//     for(let keys in party) {
//         console.log("heyy")
//     }
//     officeSubmitBtn.addEventListener('click', () => {
        
//     })
// }

// creatyParty();
const cardContainer = document.querySelector('.cards-container')
const myIcons = document.querySelectorAll('icon-container')
const editIcon = document.querySelector('.edit-icon')
const deleteIcon = document.querySelector('.delete-icon')
const deleteIt = document.querySelectorAll('to__be__deleted')

// console.log(cardContainer.length)

// myIcons.addEventListener('click', (event) => {
//     const a = event.target
//     console.log(a.length)
//     if(a.classList.contains('icon-container')) {
        
//     }
// })

// Create a political party
const createParty = document.querySelector('.create__party') 
const createPartyModal = document.querySelector('.create__party__dailog')
const createOffice = document.querySelector('.create__office__dialog')
const createOfficeModal = document.querySelector('.create__office__dialog')
const creaeOfficeBtn = document.querySelector('#create__party__btn')

createParty.addEventListener('click', () => {
   let openModal = createPartyModal.showModal();

   if(creaeOfficeBtn) {
        
   }
})

createOffice.addEventListener('click', () => {
    createOfficeModal.showModal();
})



