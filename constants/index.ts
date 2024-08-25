export const StatusIcon = {
  true: "/assets/icons/check.svg",
  false: "/assets/icons/cancelled.svg",
};

export const clientDefaultValue = {
  regNumber: "",
  name: "",
  age: "",
  email: "",
  gender: "Male",
  marital: "Single",
  address: "",
  phoneNumber: "",
  medicalClearance: "false",
  currentHealthIssue: "",
  nextOfKin: "",
  nextOfKinPhoneNumber: "",
  currentWeight: "",
  currentHeight: "",
  dateOfRegistration: new Date(),
  subscriptionStartingDate: new Date(),
  typeOfSubscription: "",
  subscriptionCost: 0,
  paymentConfirmed: "false",
};

export const genderOptions = ["Male", "Female"];
export const maritalStatus = ["Single", "Married", "Divorced", "Widowed"];

export const medicalClearance = [true, false];

export const subscriptionTypes = [
  {
    name: "individual-daily",
    cost: 3000,
  },
  {
    name: "individual-weekly",
    cost: 10000,
  },
  {
    name: "individual-biweekly",
    cost: 20000,
  },
  {
    name: "individual-monthly",
    cost: 20000,
  },
  {
    name: "individual-bimonthly",
    cost: 35000,
  },
  {
    name: "individual-quarterly",
    cost: 50000,
  },
  {
    name: "individual-semiannual",
    cost: 80000,
  },
  {
    name: "individual-annual",
    cost: 140000,
  },
  {
    name: "couple-monthly",
    cost: 35000,
  },
  {
    name: "couple-bimonthly",
    cost: 60000,
  },
  {
    name: "couple-quarterly",
    cost: 80000,
  },
  {
    name: "couple-semiannual",
    cost: 130000,
  },
  {
    name: "couple-annual",
    cost: 240000,
  },
  {
    name: "family4-monthly",
    cost: 60000,
  },
  {
    name: "family4-bimonthly",
    cost: 100000,
  },
  {
    name: "family4-quarterly",
    cost: 140000,
  },
  {
    name: "family4-semiannual",
    cost: 200000,
  },
  {
    name: "family4-annual",
    cost: 380000,
  },
];
