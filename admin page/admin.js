let offices = [];
let party = [];
const signoutBtn = document.querySelector('#sign-out')
console.log(signoutBtn)
signoutBtn.addEventListener('click', (e) => {
  removeToken = localStorage.removeItem('token')
})

const getToken = localStorage.getItem("token");

// const fetchData = async () => {

//   const deleteOffice = await fetch(`http://localhost:4000/office/delete`, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       authorization: `Bearer ${getToken}`
//     }
//   })
//   const deleteOfficeResult = await deleteOffice.json()
//   offices = [...deleteOfficeResult.data]
//   console.log(offices)

//   const updateOffice = await fetch(`http://localhost:4000/office/update`, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       authorization: `Bearer ${getToken}`
//     }
//   })
//   const updateOfficeResult = await updateOffice.json()
//   offices = [...updateOfficeResult.data]
//   console.log(offices)
// }

const createOffice = document.querySelector("#create__office");
const createParty = document.querySelector("#createParty");

let hqAdd = document.querySelector(".hqAddress-label");
let partyLogo = document.querySelector("#file");
let party_Name = document.querySelector(".partyy-name");


// Create office select dropdown for office type

const container = document.querySelector(".create__party");
const hqAddText = document.querySelector('#hqAddress-input')
console.log(hqAddText.value)
createParty.addEventListener("click", async (e) => {
  e.preventDefault();

 console.log('loading')

  const formData = new FormData();
  formData.append("name", party_Name.value);
  formData.append("hqAddress", hqAdd.value);
  formData.append("file", partyLogo.files[0]);

  const addParty = await fetch(`http://localhost:4000/party/add`, {
    method: "POST",
    body: formData,
    headers: {
      authorization: `Bearer ${getToken}`,
    },
  });

  const addPartyResult = await addParty.json();
  console.log('data-fetched')
  console.log(addPartyResult);

  if (addPartyResult.status === 400) {
    if (addPartyResult.error.file) {
      Toastify({
        text: addPartyResult.error.file,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (addPartyResult.error.name) {
      Toastify({
        text: addPartyResult.error.name,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }
  }

  if (addPartyResult.status === 200) {
    const div = document.createElement("div");
    const imgTag = document.createElement("img");
    const partyName = document.createElement("p");
    const hqAddress = document.createElement("p");
    const iconsContainer = document.createElement('div')
    const editIcon = document.createElement('button')
    const deleteIcon = document.createElement('button')

    div.setAttribute("class", "to__be__deleted");
    imgTag.setAttribute("class", "logo");
    imgTag.setAttribute('src', addPartyResult.data.file)
    imgTag.setAttribute("alt", "party logo");
    iconsContainer.setAttribute('class', 'icon-container')
    iconsContainer.setAttribute('id', 'pdp__delete__icon')
    editIcon.setAttribute('class', 'edit-button')
    deleteIcon.setAttribute('class', ' delete-button')

    partyName.textContent = party_Name.value
    editIcon.textContent = 'Edit'
    deleteIcon.textContent = 'Delete'
    hqAddress.textContent = hqAddText.value
    partyName.textContent = party_Name.value

    iconsContainer.append(editIcon)
    iconsContainer.append(deleteIcon)
    div.append(imgTag);
    div.append(partyName);
    div.append(hqAddress);
    div.append(iconsContainer)
    container.append(div);

    Toastify({
      text: "Party Successfully created!",
      duration: 3000,
      gravity: "top",
      position: screenLeft,
      style: {
        background: "green",
      },
    });

   localStorage.setItem('party', )
  }
});

createOffice.addEventListener('click', async (e) => {
  e.preventDefault()

  const officeType = document.querySelector('#officeTypeId')
  const officeName = document.querySelector('#office-name')


  var urlencoded = new URLSearchParams()
  urlencoded.append("type", officeType.value)
  urlencoded.append("name", officeName.value)

  const addOffice = await fetch(`http://localhost:4000/office/add`, {
    method: "POST",
    body: urlencoded,
    headers: {
      authorization: `Bearer ${getToken}`,
    },
  });

  const addOfficeResult = await addOffice.json();
  console.log(addOfficeResult);

  if(addOfficeResult.status === 400) {
    if(addOfficeResult.error.message) {
      Toastify ({
        text: addOfficeResult.error.message,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
            background: "red"
        }
    }).showToast();
    }

    if(officeName.value === '') {
      Toastify ({
        text: 'Please include an office name',
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
            background: "red"
        }
    }).showToast();
    }
  }

  if(addOfficeResult.status === 200) {
    const container = document.querySelector('.office-section')

    const div = document.createElement("div");
    const officeName = document.createElement("p");
    const officeType = document.createElement("p");
     const iconsContainer = document.createElement('div')
     const editIcon = document.createElement('i')
     const deleteIcon = document.createElement('i')

    div.setAttribute("class", "to__be__deleted");

    iconsContainer.append(editIcon)
    iconsContainer.append(deleteIcon)
    div.append(officeName);
    div.append(officeType);
    div.append(hqAddress);
    container.append(div);
  }
  }
)