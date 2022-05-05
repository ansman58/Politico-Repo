const voteMe = document.querySelectorAll("button");
const modal = document.querySelector(".modal");

const section = document.querySelector(".view__section");

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

let voted;
let showModal;

const generateCandidateCard = (officeObj, partyObj, userObj) => {
  const parent = document.querySelector(`.${officeObj.name}`)

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
  candProfForm.setAttribute("method", "dialog");
  modalBtn1.setAttribute("class", "yes-btn");
  modalBtn2.setAttribute("class", "no-btn");
  modalBtn1.setAttribute("type", "submit");
  modalBtn2.setAttribute("type", "submit");
  partyName.setAttribute("class", "office")
  officeName.setAttribute("class", "office")
  subBtn.setAttribute("class", "btns")
  subBtn.setAttribute("type", "submit");

  candProfImg.setAttribute("src", userObj.passportUrl);
  candProfHeader.textContent = `${userObj.lastname} ${userObj.firstname}`;
  modalP.textContent = `You are about to vote ${userObj.lastname} ${userObj.firstname} as ${officeObj.name}`
  modalBtn1.textContent = `Yes`;
  modalBtn2.textContent = `No`;
  partyName.textContent = partyObj.name;
  officeName.textContent = officeObj.name;
  subBtn.textContent = `Vote ${userObj.lastname}`


  candProfForm.appendChild(modalBtn1)
  candProfForm.appendChild(modalBtn2)
  candProfDialog.appendChild(modalP)
  candProfDialog.appendChild(candProfForm)
  candProfDiv.appendChild(candProfImg)
  candProfDiv.appendChild(candProfHeader)
  candProfDiv.appendChild(candProfDialog)
  candProfDiv.appendChild(partyName)
  candProfDiv.appendChild(officeName)
  candProfDiv.appendChild(subBtn)
  parent.appendChild(candProfDiv)

  modalBtn1.onclick = (e) => {
    e.preventDefault()
  candProfDialog.close()
    
    alert(`You have voted for ${userObj.lastname} ${userObj.firstname}`)
  }

};

const generateOfficeHtml = (obj) => {
  const candidateList = candidate.filter((el) => el.office === obj.id);
  

  // const candProfDiv = document.createElement("div");
  // const candProfImg = document.createElement("img");
  // const candProfHeader = document.createElement("h3");
  // const candProfDialog = document.createElement("dialog");
  // const candProfP = document.createElement("p");
  // const candProfForm = document.createElement("form");
  // const candProfBtn1 = document.createElement("button");

  // candProfDiv.setAttribute("class", "candidate__profile");
  // candProfImg.setAttribute("class", "image");
  // candProfHeader.setAttribute("data-type", "candidate");
  // candProfDialog.setAttribute("class", "modal");
  // candProfP.setAttribute("class", "office");
  // candProfForm.setAttribute("method", "modal");
  // candProfBtn1.setAttribute("class", "yes-btn");

  // candProfDiv.appendChild(candProfImg);
  // candProfDiv.appendChild(candProfHeader);
  // candProfDiv.appendChild(candProfDialog)

  // candProfDialog.appendChild()

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

  

  console.log (obj.name, candidateList)

  if (candidateList) {
    
    candidateList.forEach((element) => {
    
      const partyData = party.find((el) =>el.id === element.party
      );
      const userData = user.find((el) => el.id === element.candidate);
      generateCandidateCard(obj, partyData, userData)
    });
  }

  
};

office.forEach((el) => generateOfficeHtml(el));

const candidateProfile = document.querySelectorAll(".candidate__profile");


candidateProfile.forEach((element) => {

  element.addEventListener("click", (event) => {
    const target = event.target;
    
    if (target.classList.contains("btns")) {
      element.querySelector(".modal").showModal();
      element.querySelector(
        ".modal2"
      )

    }
  });
});
