let offices = [];
let party = [];
const signoutBtn = document.querySelector("#sign-out");
console.log(signoutBtn);
signoutBtn.addEventListener("click", (e) => {
  removeToken = localStorage.removeItem("token");
});

const getToken = localStorage.getItem("token");

const createOffice = document.querySelector("#create__office");
const createParty = document.querySelector("#createParty");

let hqAdd = document.querySelector(".hqAddress-label");
let partyLogo = document.querySelector("#file");
let party_Name = document.querySelector(".partyy-name");

// Create office select dropdown for office type

const container = document.querySelector(".create__party");
const hqAddText = document.querySelector("#hqAddress-input");
console.log(hqAddText);
createParty.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log("loading");

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
  console.log("data-fetched");
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
    Toastify({
      text: "Party Successfully created!",
      duration: 3000,
      gravity: "top",
      position: screenLeft,
      style: {
        background: "green",
      },
    });
  }
});

createOffice.addEventListener("click", async (e) => {
  e.preventDefault();

  const item = e.target;

  const officeType = document.querySelector("#officeTypeId");
  const officeName = document.querySelector("#office-name");

  const urlencoded = new URLSearchParams();
  urlencoded.append("type", officeType.value);
  urlencoded.append("name", officeName.value);

  const addOffice = await fetch(`http://localhost:4000/office/add`, {
    method: "POST",
    body: urlencoded,
    headers: {
      authorization: `Bearer ${getToken}`,
    },
  });

  const addOfficeResult = await addOffice.json();
  console.log(addOfficeResult);

  if (addOfficeResult.status === 400) {
    if (addOfficeResult.error.message) {
      Toastify({
        text: addOfficeResult.error.message,
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }

    if (officeName.value === "") {
      Toastify({
        text: "Please include an office name",
        duration: 3000,
        gravity: "top",
        position: screenLeft,
        style: {
          background: "red",
        },
      }).showToast();
    }
  }

  if (addOfficeResult.status === 200) {
    Toastify({
      text: "Office created successfully",
      duration: 3000,
      gravity: "top",
      position: screenLeft,
      style: {
        background: "red",
      },
    }).showToast();
  }
});

const getAllParties = async () => {
  try {
    const fetchParties = await fetch(`http://localhost:4000/party/`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    });

    const partyResult = await fetchParties.json();
    party = [...partyResult.data];

    party.forEach((el) => {
      generatePartyHtml(el);
    });
  } catch (error) {
    console.log(error);
  }
};
getAllParties();

// Party Action Buttons

let editIcon;
let deleteIcon;
let iconsContainer;

const generatePartyHtml = (obj) => {
  const div = document.createElement("div");
  const imgTag = document.createElement("img");
  const partyName = document.createElement("p");
  const hqAddress = document.createElement("p");
  iconsContainer = document.createElement("div");
  editIcon = document.createElement("button");
  deleteIcon = document.createElement("button");

  div.setAttribute("class", "to__be__deleted party-delete");
  imgTag.setAttribute("class", "logo");
  imgTag.setAttribute("src", obj.file);
  imgTag.setAttribute("alt", "party logo");
  iconsContainer.setAttribute("class", "icon-container");
  iconsContainer.setAttribute("id", "pdp__delete__icon");
  editIcon.setAttribute("class", "edit-button");
  deleteIcon.setAttribute("class", " delete-button");

  editIcon.textContent = "Edit";
  deleteIcon.textContent = "Delete";
  hqAddress.textContent = obj.hqAddress;
  partyName.textContent = obj.name;

  iconsContainer.append(editIcon);
  iconsContainer.append(deleteIcon);
  div.append(imgTag);
  div.append(partyName);
  div.append(hqAddress);
  div.append(iconsContainer);
  container.append(div);

  const welcomeAdmin = document.querySelector("#welcome");

  const partyEditModal = document.querySelector(".party-modal");
  const logoParty = document.querySelector("#party-logo-input");
  const nameParty = document.querySelector("#party-name-input");
  const partyHqAddress = document.querySelector("#party-hqAddress-input");

  editIcon.addEventListener("click", (e) => {
    e.preventDefault();

    const doneBtn = document.querySelector("#done-btn");
    const cancelBtn = document.querySelector("#cancel-btn");

    logoParty.files[0] = obj.logoURL;
    nameParty.value = obj.name;
    partyHqAddress.value = obj.hqAddress;

    partyEditModal.showModal();

    doneBtn.addEventListener("click", async (e) => {
      const urlencoded = new URLSearchParams();

      urlencoded.append("name", nameParty.value);
      urlencoded.append("hqAddress", partyHqAddress.value);
      urlencoded.append("file", logoParty.files[0]);

      const editParty = await fetch(
        `http://localhost:4000/party/update/${obj.id}`,
        {
          method: "PUT",
          body: urlencoded,
          headers: {
            authorization: `Bearer ${getToken}`,
          },
        }
      );
      const editPartyRes = await editParty.json();
      console.log(editPartyRes.data);

      partyEditModal.close();
    });

    cancelBtn.onclick = (e) => {
      e.preventDefault();

      partyEditModal.close();
    };
  });
  const deletePartyModal = document.querySelector(".delete-modal");

  deleteIcon.addEventListener("click", (e) => {
    const modalDelBtn = document.querySelector("#deleteBtn");
    const cancelDelBtn = document.querySelector("#cancelDelBtn");
    deletePartyModal.showModal();

    const urlencoded = new URLSearchParams();

    urlencoded.append("name", nameParty.value);
    urlencoded.append("hqAddress", partyHqAddress.value);
    urlencoded.append("file", logoParty.files[0]);

    modalDelBtn.addEventListener("click", async () => {
      // alert('Hiii,')
      const fetchData = await fetch(
        `http://localhost:4000/party/delete/${obj.id}`,
        {
          method: "DELETE",
          body: urlencoded,
          headers: {
            authorization: `Bearer ${getToken}`,
          },
        }
      );

      const fetchedresult = await fetchData.json();
    });

    cancelDelBtn.onclick = (e) => {
      e.preventDefault();
      deletePartyModal.close();
    };
  });
};

const fetchAllOffices = async () => {
  const fetchOffices = await fetch(`http://localhost:4000/office/`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${getToken}`,
    },
  });
  const officesRes = await fetchOffices.json();
  offices = [...officesRes.data];

  offices.forEach((el) => generateOfficesHtml(el));
  console.log(offices);
};

fetchAllOffices();

// Office action buttons
let editBtn;
let deleteBtn;
let btnContainer;
let div;

const generateOfficesHtml = (obj) => {
  const container = document.querySelector("#createOfficeContainer");

  div = document.createElement("div");
  const officeName = document.createElement("p");
  const officeType = document.createElement("p");
  btnContainer = document.createElement("div");
  editBtn = document.createElement("button");
  deleteBtn = document.createElement("button");

  div.setAttribute("class", "to__be__deleted offices-div-container");
  editBtn.classList.add("editBtn");
  deleteBtn.classList.add("deleteBtn");
  btnContainer.classList.add("btnContainer");

  officeName.textContent = obj.name;
  officeType.textContent = obj.type;
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  btnContainer.append(editBtn);
  btnContainer.append(deleteBtn);
  div.append(officeName);
  div.append(officeType);
  div.append(btnContainer);
  container.append(div);

  const officeModal = document.querySelector(".office-modal");

  editBtn.addEventListener("click", (e) => {
    // officeModal.style.display = 'flex'
    officeModal.showModal();

    const officeNameInput = document.querySelector("#office-name-input");
    const officeTypeInput = document.querySelector("#office-type-input");

    officeNameInput.value = obj.name;
    officeTypeInput.value = obj.type;

    const updateBtn = document.querySelector("#office-upate-btn");
    const cancelOffDelBtn = document.querySelector("#office-cancel-btn");
    updateBtn.addEventListener("click", async (e) => {
      // alert('Hiiiiii')
      const urlencoded = new URLSearchParams();

      urlencoded.append("type", officeTypeInput.value);
      urlencoded.append("name", officeNameInput.value);

      const fetchOffices = await fetch(
        `http://localhost:4000/office/update/${obj.id}`,
        {
          method: "PUT",
          body: urlencoded,
          headers: {
            authorization: `Bearer ${getToken}`,
          },
        }
      );
      const fetchedOfficesRes = await fetchOffices.json();
    });
    cancelOffDelBtn.onclick = (e) => {
      e.preventDefault();
      // alert('hiiii')
      // officeModal.style.display = 'none'
      officeModal.close();
    };
  });
  const delOfficeModal = document.querySelector(".office-delete-modal");
  deleteBtn.addEventListener("click", (e) => {
    // e.preventDefault()

    delOfficeModal.showModal();
    const deleteOff = document.querySelector("#officeDeleteBtn");
    const cancelDel = document.querySelector("#officeCancelDelBtn");

    deleteOff.addEventListener("click", async (e) => {
      // alert('hiii')
      try {
        const fetchOffices = fetch(
          `http://localhost:4000/office/delete/${obj.id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${getToken}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    });

    cancelDel.onclick = (e) => {
      delOfficeModal.close();
    };
  });
};
