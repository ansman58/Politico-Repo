const voteList = document.querySelector(".vote-list");
let vote = [];
let candidates = [];
let users = [];
let offices = [];
let party = [];
const getToken = localStorage.getItem("token");

const getVotes = async () => {
  try {
    const fetchVotes = await fetch(`http://localhost:4000/vote`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const fetchResult = await fetchVotes.json();
    vote = [...fetchResult.data];
  } catch (error) {
    console.error(error);
  }
  //   vote.forEach((el) => voted(el));
  console.log(vote);

  try {
    const fetchUsers = await fetch(`http://localhost:4000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const fetchUsersRes = await fetchUsers.json();
    users = [...fetchUsersRes.data];
    users.forEach((el) => voted(el));
  } catch (error) {
    console.error(error);
  }
  console.log(users);

  try {
    const fetchParty = await fetch(`http://localhost:4000/party`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const fetchPartyRes = await fetchParty.json();
    party = [...fetchPartyRes.data];
  } catch (error) {
    console.error(error);
  }
  console.log(party);

  try {
    const fetchOffice = await fetch(`http://localhost:4000/office`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const fetchOfficeRes = await fetchOffice.json();
    offices = [...fetchOfficeRes.data];
    offices.forEach((el) => {
       const candOff = vote.filter(element =>element.createdBy === voted(el.id)) 
    });
  } catch (error) {
    console.error(error);
  }
  console.log(offices);

  try {
    const fetchCands = await fetch(`http://localhost:4000/candidate`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const fetchCandRes = await fetchCands.json();
    candidates = [...fetchCandRes.data];
  } catch (error) {
    console.error(error);
  }
  console.log(candidates);
};

getVotes();

const parentDiv = document.querySelector(".result-section");
let voted = (obj) => {
//   const candList = vote.filter(cand =>cand.createdBy === )
  const div = document.createElement("div");
  const voterId = document.createElement("p");
  const cand = document.createElement("p");
  const office = document.createElement("p");

  div.setAttribute("class", "result-container");

  voterId.textContent = obj.id;
  cand.textContent = `${obj.firstname} ${obj.lastname}`;
  office.textContent = obj.name;

  div.append(voterId);
  div.append(cand);
  div.append(office);

    parentDiv.append(div)

};

const voter = (obj) => {
    const voteList = vote.filter(el => el.createdBy === obj.id)

    if(voteList){
        vote.forEach(element => {
            const officeData = offices.filter(el => el.id===element.createdBy)
            const partyData = party.filter(el => el.id === element.createdBy)
        })
    }

}

