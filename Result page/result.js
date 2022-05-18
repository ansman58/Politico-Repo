const parentDiv = document.querySelector(".result-section");

const getToken = localStorage.getItem("token");

let votes = [];

const fetchVotes = async (obj) => {
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

  parentDiv.append(div);

  try {
    const fetchVotes = await fetch(`http://localhost:4000/vote/get/${obj.id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });
    const voteResult = await fetchVotes.json();
    votes = [...voteResult.data];
    console.log(votes);
    voteel => getVotes(el);
  } catch (error) {
    console.error(error);
  }

}

// const getVotes = (obj) => {


// };


// const getVoteInfo = async () => {
 
// }

// let voted = (obj) => {
//   const div = document.createElement("div");
//   const voterId = document.createElement("p");
//   const cand = document.createElement("p");
//   const office = document.createElement("p");

//   div.setAttribute("class", "result-container");

//   voterId.textContent = obj.id;
//   cand.textContent = `${obj.firstname} ${obj.lastname}`;
//   office.textContent = obj.name;

//   div.append(voterId);
//   div.append(cand);
//   div.append(office);

//   parentDiv.append(div);
// };
