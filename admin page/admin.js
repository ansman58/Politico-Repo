// Create a political party
const createParty = document.querySelector('#create__party')
const modal = document.querySelector('.create__party__dialog')

createParty.addEventListener('click', () => {
    modal.showModal()
})

const modalSubmitBtn = document.querySelector('#create__party__btn')
// const partyNameInput = document.querySelector('#"party__name')

modalSubmitBtn.addEventListener('click', () => {
    alert(partyNameInput)
    // if(partyNameInput)
  
})

const partyBtn = document.querySelector('#create__party__btn')
// const partyNameInput = document.querySelector('#party__name')
const partyHqAddress = document.querySelector('#hq__address')

partyBtn.addEventListener('click', () => {
       
})


// working with createOffice buton

const officeBtn = document.querySelector('#create__office')


officeBtn.addEventListener('click', createOffice)

function createOffice() {
    const officeModal = document.querySelector('.create__office__dialog').showModal()
}

// end of working with createOffice buton


// working with delete icons
    const iconsContainer = document.querySelector('#pdp__delete__icon')

    const toBeDel = document.querySelectorAll('.to__be__deleted')
    const toBeDelArr = Array.from(toBeDel)

    const delElements = document.querySelectorAll('.icon-container')
    const change = Array.from(delElements)
    const deleteIcon = document.querySelectorAll('.delete-icon')
    const delIconArray = Array.from(deleteIcon)
    // let a =  element.classList.contains('del') 
    
        change.forEach()
            let it = filtered.children
                    
            console.log(change)


// end of working on delete icons