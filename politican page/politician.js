const subBtn = document.querySelector("#submit"); 

const selectParty = document.querySelector("#party__name");
const selectOffice = document.querySelector("#political__office");

const token = localStorage.getItem("token");

if (!token) {
  location.href = "../USER SIGN IN PAGE/login.html";
}

subBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const myOffice = parseInt(selectOffice.value);
  const myParty = parseInt(selectParty.value);

  const urlencoded = new URLSearchParams();
  urlencoded.append("party", myParty);
  urlencoded.append("office", myOffice);

  const response = await fetch(`https://ancient-ridge-06187.herokuapp.com/candidate/add`, {
    method: "POST",
    body: urlencoded,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  console.log([...urlencoded]);
  console.log(result);

 if(result.status === 200) {
  if ((result.data.type > 0)  && (result.data.name > 0)) {
    Toastify ({
      text: 'You have sucessfully applied for this office',
      duration: 3000,
      gravity: "top",
      position: screenLeft,
      style: {
          background: "green"
      }
  }).showToast();
  }
 }
});

// To generate my office and party data from the backend
const options = (obj, parent) => {
  const option = document.createElement("option");
  option.setAttribute("value", obj.id);
  option.textContent = obj.name;

  parent.appendChild(option);
};

const generateData = () => {
  officeList.forEach((office) => {
    options(office, selectOffice);
  });

  partyList.forEach((party) => {
    options(party, selectParty);
  });
};

let officeList = [];
let partyList = [];
const fetchData = async () => {
  const response = await fetch(`https://ancient-ridge-06187.herokuapp.com/office/`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const offItems = result.data;
  officeList = [...offItems];

  const resParty = await fetch(`https://ancient-ridge-06187.herokuapp.com/party/`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const partyResult = await resParty.json();
  partyList = [...partyResult.data];

  generateData();

  localStorage.setItem('offices', options)

  console.log(offItems);
};
fetchData();
