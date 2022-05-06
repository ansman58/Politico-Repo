// // Create a political party
const createParty = document.querySelector('#create__party')
const modal = document.querySelector('.create__party__dialog')

// createParty.addEventListener('click', () => {
//     modal.showModal()
// })

const modalSubmitBtn = document.querySelector('#create__party__btn')
// const partyNameInput = document.querySelector('#"party__name')

// modalSubmitBtn.addEventListener('click', () => {
//     alert(partyNameInput)
//     // if(partyNameInput)
  
// })

// const partyBtn = document.querySelector('#create__party__btn')
// // const partyNameInput = document.querySelector('#party__name')
// const partyHqAddress = document.querySelector('#hq__address')

// partyBtn.addEventListener('click', () => {
       
// })


// working with createOffice buton

// const officeBtn = document.querySelector('#create__office')


// officeBtn.addEventListener('click', createOffice)

// function createOffice() {
//     const officeModal = document.querySelector('.create__office__dialog').showModal()
// }

// end of working with createOffice buton


// // working with delete icons
//     const iconsContainer = document.querySelector('#pdp__delete__icon')

//     const toBeDel = document.querySelectorAll('.to__be__deleted')
//     const toBeDelArr = Array.from(toBeDel)

//     const delElements = document.querySelectorAll('.icon-container')
//     const change = Array.from(delElements)
//     const deleteIcon = document.querySelectorAll('.delete-icon')
//     const delIconArray = Array.from(deleteIcon)
    // let a =  element.classList.contains('del') 
    
        // change.forEach()
        //     let it = filtered.children
                    
        //     console.log(change)


// end of working on delete icons

// *** DATA LIST BEGINS**** //


const office = [
    {
      id: 1,
      type: "federal",
      name: "President",
    },
    {
      id: 2,
      type: "legislative",
      name: "Senate",
    },
    {
      id: 3,
      type: "state",
      name: "Governor",
    },
    {
      id: 4,
      type: "local government",
      name: "Chairman",
    },
    {
      id: 5,
      type: "federal",
      name: "Vice President",
    },
    {
      id: 6,
      type: "state",
      name: "Deputy Governor",
    },
  ];
  
  const party = [
    {
      id: 1,
      name: "PDP",
      hqAddress: "Abuja",
      logoURL:
        "https://www.inecnigeria.org/wp-content/uploads/2019/02/PDP-Constitution.pdf",
    },
  
    {
      id: 2,
      name: "APC",
      hqAddress: "Osun",
      logoURL:
        "https://www.inecnigeria.org/wp-content/uploads/2019/02/APC-Constitution.pdf",
    },
  
    {
      id: 3,
      name: "SPC",
      hqAddress: "Delta",
      logoURL:
        "https://www.inecnigeria.org/wp-content/uploads/2019/02/APC-Constitution.pdf",
    },
  
    {
      id: 4,
      name: "APGA",
      hqAddress: "SDP",
      logoURL:
        "https://www.inecnigeria.org/wp-content/uploads/2019/02/SDP-Constitution.pdf",
    },
  ];
  
  const user = [
    {
      id: 1,
      firstname: "Anslem",
      lastname: "Nnakwe",
      othername: "",
      email: "emaukjhhd",
      phoneNumber: "868576576",
      passportUrl: "../images/politician1.jpg",
      isAdmin: true,
      role: "user",
    },
    {
      id: 2,
      firstname: "Anslem",
      lastname: "Nnakwe",
      othername: "",
      email: "emaukjhhd",
      phoneNumber: "868576576",
      passportUrl: "../images/politician1.jpg",
      isAdmin: false,
      role: "politician",
    },
    {
      id: 4,
      firstname: "Anslem",
      lastname: "Nnakwe",
      othername: "",
      email: "emaukjhhd",
      phoneNumber: "868576576",
      passportUrl: "../images/politician1.jpg",
      isAdmin: false,
      role: "politician",
    },
    {
      id: 3,
      firstname: "Anslem",
      lastname: "Nnakwe",
      othername: "",
      email: "emaukjhhd",
      phoneNumber: "868576576",
      passportUrl: "../images/politician1.jpg",
      isAdmin: false,
      role: "user",
    },
  ];
  
  const candidate = [
    {
      id: 1,
      office: 1,
      party: 4,
      candidate: 2,
    },
    {
      id: 1,
      office: 4,
      party: 4,
      candidate: 2,
    },
    {
      id: 2,
      office: 2,
      party: 2,
      candidate: 4,
    },
    {
      id: 2,
      office: 3,
      party: 2,
      candidate: 4,
    },
  ];
  
  const vote = [
    {
      id: 1,
      createdOn: new Date("2022/04/01"),
      createdBy: 1,
      office: 1,
      candidate: 2,
    },
  ];

// *** DATA LIST ENDS ****//

const createNewParty = () => {
    createParty.addEventListener('click', () => {
        modal.showModal()
    })


    const partyList = party.filter(el => el.name)
    console.log(partyList)
}
createNewParty()

