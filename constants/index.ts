export const StatusIcon = {
  true: "/assets/icons/check.svg",
  false: "/assets/icons/cancelled.svg",
};

export const clientDefaultValue = {
  regNumber: "",
  name: "",
  age: "",
  email: "",
  gender: "Male" as "Male" | "Female",
  marital: "Single" as "Single" | "Married" | "Divorced" | "Widowed",
  address: "",
  phoneNumber: "",
  medicalClearance: "true" as "true" | "false",
  // currentHealthIssue: "None",
  nextOfKin: "",
  nextOfKinPhoneNumber: "",
  currentWeight: "",
  currentHeight: "",
  dateOfRegistration: new Date(),
  subscriptionStartingDate: new Date(),
  typeOfSubscription: "",
  paymentConfirmed: "true" as "true" | "false",
};
export const RegisterDefaultValue = {
  regNumber: "",
  name: "",
  subscriptionStartingDate: new Date(),
  typeOfSubscription: "",
  paymentConfirmed: "false" as "true" | "false",
};

export const genderOptions = ["Male", "Female"];
export const maritalStatus = ["Single", "Married", "Divorced", "Widowed"];

export const medicalClearance = [true, false];

export const subscriptionTypes = [
  { name: "Individual-daily", duration: 1 },
  { name: "Individual-weekly", duration: 7 },
  { name: "Individual-biweekly", duration: 14 },
  { name: "Individual-monthly", duration: 30 },
  { name: "Individual-bimonthly", duration: 60 },
  { name: "Individual-quarterly", duration: 90 },
  { name: "Individual-semiannual", duration: 180 },
  { name: "Individual-annual", duration: 365 },
  { name: "Couple-monthly", duration: 30 },
  { name: "Couple-bimonthly", duration: 60 },
  { name: "Couple-quarterly", duration: 90 },
  { name: "Couple-semiannual", duration: 180 },
  { name: "Couple-annual", duration: 365 },
  { name: "Family4-monthly", duration: 30 },
  { name: "Family4-bimonthly", duration: 60 },
  { name: "Family4-quarterly", duration: 90 },
  { name: "Family4-semiannual", duration: 180 },
  { name: "Family4-annual", duration: 365 },
];

export const Fakeuser = {
  regNumber: "288",
  name: "Adeniran Gold",
  phoneNumber: "08129959272",
  email: "adeniranbayogold@gmail.com",
  age: "",
  gender: "Male",
  marital: "Single",
  address: "Taoheed road",
  nextOfKin: "Mrs Oyebanji",
  nextOfKinPhoneNumber: "08129959272",
  medicalClearance: "true",
  currentHealthIssue: "Nil",
  currentWeight: "95",
  currentHeight: "187",
  typeOfSubscription: "Individual-semiannual",
  dateOfRegistration: new Date("2024-09-10T10:47:24.458Z"),
  subscriptionStartingDate: new Date("2024-09-28T19:13:15.837Z"),
  paymentConfirmed: "true",
  subscriptionHistory: [
    {
      subscriptionStartingDate: new Date("2024-09-28T19:13:15.837Z"),
      subscriptionEndingDate: new Date("2024-11-27T19:13:15.837Z"),
      type: "Couple-bimonthly",
    },
    {
      subscriptionStartingDate: new Date("2024-09-28T19:19:42.523Z"),
      subscriptionEndingDate: new Date("2024-11-27T19:19:42.523Z"),
      type: "Couple-bimonthly",
    },
    {
      subscriptionStartingDate: new Date("2024-09-28T19:13:15.837Z"),
      subscriptionEndingDate: new Date("2025-03-27T19:13:15.837Z"),
      type: "Individual-semiannual",
    },
  ],
};
