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
console.log(candidates)
    // contestingCandidates()
//    offices.forEach(el => generateCandidateHtml(el) ) 
    const filOffice = offices.filter(el=> generateCands(el))
}
console.log(offices)
fetchData()
const generateCandidateHtml = (obj) => {
    // candidateList = candidates.filter(el => el.office === officeObj.id)
    // const parent = document.querySelector(`.${officeObj.name}`);

    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "candidate__profile");

    const candImg = document.createElement('img')
    const candName = document.createElement("h3");
    const candOffice = document.createElement("p");

    candImg.setAttribute("class", "image");
    candImg.setAttribute('src', obj.passportUrl)
    candName.setAttribute('data-type', 'candidate')

    candName.textContent = `${obj.firstname} ${obj.lastname}`
    candOffice.textContent = officeObj.name

}

const generateCands = (obj) => {
    const candidateList = candidates.filter((el) => el.office === obj.id);

    console.log('hiiii im caandlist', candidateList)

    if(candidateList){
        candidates.forEach(element => {
            const officeData = offices.find(el => el.id === element.party)
            const userData = users.find(el => el.id === element.candidate)
            generateCandidateHtml(userData, partyData,candidateList)
    })
}
}