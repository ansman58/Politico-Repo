export const office = [
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

export const party = [
  {
    id: 0,
    name: "PDP",
    hqAddress: "Abuja",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/PDP-Constitution.pdf",
  },

  {
    id: 1,
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

export const user = [
  {
    id: 1,
    firstname: "Anslem",
    lastname: "Nnakwe",
    othername: "",
    email: "emaukjhhd",
    phoneNumber: "868576576",
    passportUrl: "./images/politician1.jpg",
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
    passportUrl: "./images/politician1.jpg",
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
    passportUrl: "./images/politician1.jpg",
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
    passportUrl: "./images/politician1.jpg",
    isAdmin: false,
    role: "user",
  },
];

export const candidate = [
  {
    id: 1,
    office: 1,
    party: 4,
    candidate: 2,
  },
  {
    id: 2,
    office: 2,
    party: 2,
    candidate: 4,
  },
];

export const vote = [
  {
    id: 1,
    createdOn: new Date("2022/04/01"),
    createdBy: 1,
    office: 1,
    candidate: 2,
  },
];
