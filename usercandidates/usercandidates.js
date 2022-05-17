const voteMe = document.querySelectorAll("button");

const modal = document.querySelector(".modal");

const section = document.querySelector(".view__section");

let offices = [];

let party = [];

let users = [];

let candidates = [];
  
// let vote = [];
const token = localStorage.getItem('token')


const obtainData = async () => {
  const officeRes = await fetch(`https://ancient-ridge-06187.herokuapp.com/office/`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const officeResult = await officeRes.json()
  offices = [...officeResult.data]
  console.log(officeResult)

const partyRes = await fetch(`https://ancient-ridge-06187.herokuapp.com/party/`,{
  method: 'GET',
  headers: {
    authorization: `Bearer ${token}`
  }
})
const partyResult = await partyRes.json()
party = [...partyResult.data]
console.log(partyResult)


const userRes = await fetch(`https://ancient-ridge-06187.herokuapp.com/users/`,{
  method: 'GET',
  headers: {
    authorization: `Bearer ${token}`
  }
})
const userResult = await userRes.json()
users = [...userResult.data]
console.log(userResult)

const candResponse = await fetch(`https://ancient-ridge-06187.herokuapp.com/candidate/`,{
  method: 'GET',
  headers: { 
    authorization: `Bearer ${token}`
  }
})
const candResult = await candResponse.json()
candidates = [...candResult.data]
console.log(candidates)


offices.forEach((el) => generateOfficeHtml(el));
}
obtainData()

// let modalBtn1;

const generateCandidateCard = (officeObj, partyObj, userObj) => {
  const parent = document.querySelector(`.${officeObj.name}`);

  const candProfDiv = document.createElement("div");
  const candProfImg = document.createElement("img");
  const candProfHeader = document.createElement("h3");
  const candProfDialog = document.createElement("dialog");
  const modalP = document.createElement("p");
  const candProfForm = document.createElement("form");
  const modalBtn1 = document.createElement("button");
  const modalBtn2 = document.createElement("button");
  const partyName = document.createElement("p");
  const officeName = document.createElement("p");
  const subBtn = document.createElement("button");

  candProfDiv.setAttribute("class", "candidate__profile");
  candProfImg.setAttribute("class", "image");
  candProfHeader.setAttribute("data-type", "candidate");
  candProfDialog.setAttribute("class", "modal");
  modalP.setAttribute("class", "office");
  // candProfForm.setAttribute("method", "dialog");
  modalBtn1.setAttribute("class", "yes-btn");
  modalBtn2.setAttribute("class", "no-btn");
  modalBtn1.setAttribute("type", "submit");
  modalBtn1.setAttribute("data-candId", userObj.id);
  modalBtn1.setAttribute("data-candOffice", officeObj.id);
  modalBtn1.setAttribute("data-candParty", partyObj.id);
  modalBtn2.setAttribute("type", "submit");
  partyName.setAttribute("class", "office");
  officeName.setAttribute("class", "office");
  subBtn.setAttribute("class", "btns");
  subBtn.setAttribute("type", "submit");

  candProfImg.setAttribute("src", userObj.passportUrl);
  candProfHeader.textContent = `${userObj.lastname} ${userObj.firstname}`;
  modalP.textContent = `You are about to vote ${userObj.lastname} ${userObj.firstname} as ${officeObj.name}`;
  modalBtn1.textContent = `Yes`;
  modalBtn2.textContent = `No`;
  partyName.textContent = partyObj.name;
  officeName.textContent = officeObj.name;
  subBtn.textContent = `Vote ${userObj.lastname}`;

  candProfForm.appendChild(modalBtn1);
  candProfForm.appendChild(modalBtn2);
  candProfDialog.appendChild(modalP);
  candProfDialog.appendChild(candProfForm);
  candProfDiv.appendChild(candProfImg);
  candProfDiv.appendChild(candProfHeader);
  candProfDiv.appendChild(candProfDialog);
  candProfDiv.appendChild(partyName);
  candProfDiv.appendChild(officeName);
  candProfDiv.appendChild(subBtn);
  parent.appendChild(candProfDiv);


  const createdByAttribute = modalBtn1.getAttribute("data-candId")
  const voteOffice = modalBtn1.getAttribute("data-candOffice")
  const voteCand = modalBtn1.getAttribute("data-candParty")

    subBtn.onclick = (e) => {
      e.preventDefault()
      candProfDialog.showModal()

      modalBtn1.onclick = async (e) => {
        e.preventDefault();
        // candProfDialog.close();
        alert(voteOffice)
        
        console.log('Looking for candidates', candidates)

        const urlencoded = new URLSearchParams();
        
        // urlencoded.append('createdOn', new Date("2022/04/01"))
        urlencoded.append('createdBy', createdByAttribute)
        urlencoded.append('office', voteOffice)
        urlencoded.append('candidate', voteCand)
    
    
        try {
          const fetchVote = await fetch(`https://ancient-ridge-06187.herokuapp.com/vote/add`, {
            method: 'POST',
            body: urlencoded,
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          const voteRes = await fetchVote.json()
          console.log(voteRes)

        } catch (error) {
          console.log(error)
        }
    
      //   Toastify ({
      //     text: `You have voted for ${userObj.lastname} ${userObj.firstname}`,
      //     duration: 3000,
      //     gravity: "top",
      //     position: screenLeft,
      //     style: {
      //         background: "green"
      //     }
      // }).showToast();
      };
    }

  modalBtn2.onclick = (e) => {
    // alert('hiiiii')
    e.preventDefault();

    candProfDialog.close();
  };
};

const generateOfficeHtml = (obj) => {
  const candidateList = candidates.filter((el) => el.office === obj.id);

  const parent = document.createElement("div");
  const title = document.createElement("div");
  const list = document.createElement("div");
  parent.setAttribute("class", "office-cand");
  title.setAttribute("class", "title");
  title.textContent = obj.name;
  list.setAttribute("class", `list-cand ${obj.name}`);

  parent.appendChild(title);
  parent.appendChild(list);
  section.appendChild(parent);

  if (candidateList) {
    candidateList.forEach((element) => {
      const partyData = party.find((el) => el.id === element.party);
      const userData = users.find((el) => el.id === element.candidate);
      generateCandidateCard(obj, partyData, userData);
    });
  }
};

 //put this inside the generateData function

const candidateProfile = document.querySelectorAll(".candidate__profile");

candidateProfile.forEach((element) => {
  element.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("btns")) {
      element.querySelector(".modal").showModal();
      // element.querySelector(".modal2");
    }
  });
});
