const office = [
  {
    id: 1,
    type: "federal",
    name: "President",
  },
  {
    id: 2,
    type: "legislative",
    name: "Senator",
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
    office: 2,
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


const hamburger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu__ul');
const loginButton = document.querySelector('.login__submit__button')


 hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

loginButton.addEventListener('click', (event) => {
    event.preventDefault;
    
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();

    const error = [];

    if (userEmail === '') {
        error.push('Email cannot be empty')
        console.log(error)
    }

    if(userPassword === '') {
        error.push(`Password cannot be empty`)
        console.log(error)
    }

    if(userPassword !== '' && userPassword.length <= 6) {
        error.push(`Password cannot be less than six characters`)
        console.log(error)
    }

    if(error.length > 0) {
        for(let i = 0; i < error.length; i++) {
            Toastify ({
                text: error[i],
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "red"
                }
            }).showToast();
        }
    }
    else {
        Toastify ({
            text: "Success",
            duration: 3000,
            gravity: "bottom",
            position: screenLeft,
            style: {
                background: "green"
            }
        }).showToast();
    }
})



//sign up
if (userEmail === '') {
  error.push('Email cannot be empty')
  console.log(error)
}

if(userPassword === '') {
  error.push(`Password cannot be empty`)
  console.log(error)
}

if(userPassword !== confirmPassword) {
  error.push(`Input the same password`)
}

if(userPassword !== '' && userPassword.length <= 6) {
  error.push(`Password cannot be less than six characters`)
  console.log(error)
}

if(error.length > 0) {
  for(let i = 0; i < error.length; i++) {
      Toastify ({
          text: error[i],
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
              background: "red"
          }
      }).showToast();
  }
}
else {
  Toastify ({
      text: "Success",
      duration: 3000,
      gravity: "bottom",
      position: screenLeft,
      style: {
          background: "green"
      }
  }).showToast();
}
})




// dynamically generated select options 
const selectOffice = (obj, parent) => {
  if(parent === selOfficeType) {
    const options = document.createElement('option')
    options.setAttribute('value', obj.id)
    options.textContent = obj.type;
  
    parent.append(options)
  }
}


// Create office select dropdown for office name
const officeNameOptions = (obj, parent) => {
  const options = document.createElement('option')
  options.setAttribute('value', obj.id)
  options.textContent = obj.name;

  parent.append(options)
}



const generateData = (item) => {
  item.forEach(el =>{
    selectOffice(el,selOfficeType )
  })

  item.forEach (el => {
    officeNameOptions(el, selOfficeName)
  })
}



// getOffice to populate select options from getAllOffice endpoint
const generateOffice = async () => {

  const getOffice = await fetch(`http://localhost:4000/office/`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${getToken}`
    }
  })

  const getOfficeResult = await getOffice.json()
  offices = [...getOfficeResult.data]
  console.log(offices)
  generateData(offices);
}

generateOffice()



// get Party to populate select options from getAllParty API
const generateParty = async () => {
  const getParty = await fetch (`http://localhost:4000/party/`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${getToken}`
    }
  })

  const getPartyResult = await getParty.json()
  party = [...getPartyResult.data]
  console.log(party)
    party.forEach (el => {
      officeNameOptions(el, partySelect)
    })
}

generateParty()