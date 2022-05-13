const logOutBtn = document.querySelector('.log-out')

let candidates = [];
let party = [];
let users = [];
let offices = [];

logOutBtn.addEventListener('click', () => {
    const removeToken = localStorage.removeItem('token')
    location.href = '../USER SIGN IN PAGE/login.html'
}) 


const getToken =  localStorage.getItem('token')
const partyUl = document.querySelector('#party-list')

const createParty = (obj, parent) => {
    const partyName = document.createElement('li')
    partyName.textContent = `${obj.name}`

    parent.append(partyName)
}

const generateCandidateCard = (offieObj, partyObj, userObj) => {
    const header = document.querySelector('#candidate__profile')

    const candProfDiv = document.createElement("div");
    const candProfImg = document.createElement("img");
    const candProfHeader = document.createElement("h3");
    const officeName = document.createElement("p");
  
    candProfDiv.setAttribute("class", "candidate__profile");
    candProfImg.setAttribute("class", "image");
    candProfHeader.setAttribute("data-type", "candidate");

    officeName.setAttribute("class", "office");
    candProfImg.setAttribute("src", userObj.passportUrl);


    candProfHeader.textContent = `${userObj.lastname} ${userObj.firstname}`;
    officeName.textContent = officeObj.name;
    

    header.append(candProfDiv)
    header.append(candProfImg)
    header.append(candProfHeader)
    header.append(officeName)

}

const generateCandidateHtml = (obj) => {
    const candidateList = candidates.filter(el => el.office === obj.id)

    const parent = document.createElement("div");
    
    const title = document.createElement("div");
    const list = document.createElement("div");

    parent.setAttribute("class", "candidate__profile");
    title.setAttribute("class", "title");
    title.textContent = obj.name;
    list.setAttribute("class", `list-cand ${obj.name}`);
      // parent.appendChild(list);
    // section.appendChild(parent);
  
    if (candidateList) {
      candidateList.forEach((element) => {
        const partyData = party.find((el) => el.id === element.party);
        const userData = users.find((el) => el.id === element.candidate);
        generateCandidateCard(obj, partyData, userData);
      });
    }


}


// fetch candidate info
const fetchData = async () => {
    const response = await fetch (`http://localhost:4000/candidate/`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getToken}`
        }
    })
    const result = await response.json();
    candidates = [...result.data]
    // console.log(candidates)

    const partyResponse = await fetch (`http://localhost:4000/party/`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getToken}`
        }
    })

    const partyResult = await partyResponse.json()
    party = [...partyResult.data]
    // console.log(party)

    const usersResponse = await fetch (`http://localhost:4000/users/`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getToken}`
        }
    })

    const usersResult = await usersResponse.json()
    users = [...usersResult.data]
    // console.log(`users: ${users}`)
    console.log(users)

    const officesResponse = await fetch (`http://localhost:4000/office/`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getToken}`
        }
    })

    const officesResult = await officesResponse.json()
    offices = [...officesResult.data]
    console.log(offices)

    party.forEach((element) => {
        createParty(element, partyUl)
    })

   offices.forEach(el => generateCandidateHtml(el) ) 
}

fetchData()