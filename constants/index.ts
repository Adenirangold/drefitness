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
  currentHealthIssue: "",
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
  {
    name: "Individual-daily",
    cost: 3000,
  },
  {
    name: "Individual-weekly",
    cost: 10000,
  },
  {
    name: "Individual-biweekly",
    cost: 20000,
  },
  {
    name: "Individual-monthly",
    cost: 20000,
  },
  {
    name: "Individual-bimonthly",
    cost: 35000,
  },
  {
    name: "Individual-quarterly",
    cost: 50000,
  },
  {
    name: "Individual-semiannual",
    cost: 80000,
  },
  {
    name: "Individual-annual",
    cost: 140000,
  },
  {
    name: "Couple-monthly",
    cost: 35000,
  },
  {
    name: "Couple-bimonthly",
    cost: 60000,
  },
  {
    name: "Couple-quarterly",
    cost: 80000,
  },
  {
    name: "Couple-semiannual",
    cost: 130000,
  },
  {
    name: "Couple-annual",
    cost: 240000,
  },
  {
    name: "Family4-monthly",
    cost: 60000,
  },
  {
    name: "Family4-bimonthly",
    cost: 100000,
  },
  {
    name: "Family4-quarterly",
    cost: 140000,
  },
  {
    name: "Family4-semiannual",
    cost: 200000,
  },
  {
    name: "Family4-annual",
    cost: 380000,
  },
];

export const data = [
  {
    regNumber: "10001",
    name: "Alice Johnson",
    phoneNumber: "+1234567891",
    typeOfSubscription: "Individual-semiannual",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-02-01"),
    numberOfDaysRemaining: 25,
    subscriptionStartingDate: new Date("2024-03-01"),
  },
  {
    regNumber: "10002",
    name: "Bob Smith",
    phoneNumber: "+1234567892",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: false,
    dateOfRegistration: new Date("2024-02-10"),
    numberOfDaysRemaining: 40,
    subscriptionStartingDate: new Date("2024-03-05"),
  },
  {
    regNumber: "10003",
    name: "Charlie Brown",
    phoneNumber: "+1234567893",
    typeOfSubscription: "Standard",
    paymentConfirmed: true,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-01-20"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-02-15"),
  },
  {
    regNumber: "10004",
    name: "Diana Prince",
    phoneNumber: "+1234567894",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-03-01"),
    numberOfDaysRemaining: 60,
    subscriptionStartingDate: new Date("2024-03-15"),
  },
  {
    regNumber: "10005",
    name: "Edward King",
    phoneNumber: "+1234567895",
    typeOfSubscription: "Basic",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-01-15"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-01-20"),
  },
  {
    regNumber: "10006",
    name: "Fiona Amith",
    phoneNumber: "+1234567896",
    typeOfSubscription: "Standard",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-02-18"),
    numberOfDaysRemaining: 45,
    subscriptionStartingDate: new Date("2024-02-28"),
  },
  {
    regNumber: "10007",
    name: "Goerge Miller",
    phoneNumber: "+1234567897",
    typeOfSubscription: "Premium",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-01-10"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-01-30"),
  },
  {
    regNumber: "10008",
    name: "Hannah Clark",
    phoneNumber: "+1234567898",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-02-22"),
    numberOfDaysRemaining: 20,
    subscriptionStartingDate: new Date("2024-03-10"),
  },
  {
    regNumber: "10009",
    name: "Ian Scott",
    phoneNumber: "+1234567899",
    typeOfSubscription: "Standard",
    subscriptionActive: false,
    paymentConfirmed: false,
    dateOfRegistration: new Date("2024-01-25"),
    numberOfDaysRemaining: 15,
    subscriptionStartingDate: new Date("2024-02-05"),
  },
  {
    regNumber: "10010",
    name: "Jane Doe",
    phoneNumber: "+1234567800",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-03-05"),
    numberOfDaysRemaining: 90,
    subscriptionStartingDate: new Date("2024-03-20"),
  },
  {
    regNumber: "10006",
    name: "Alice Johnson",
    phoneNumber: "+1234567896",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-02-10"),
    numberOfDaysRemaining: 30,
    subscriptionStartingDate: new Date("2024-02-15"),
  },
  {
    regNumber: "10007",
    name: "John Doe",
    phoneNumber: "+1234567897",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: true,
    dateOfRegistration: new Date("2024-03-05"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-03-10"),
  },
  {
    regNumber: "10008",
    name: "Mary Smith",
    phoneNumber: "+1234567898",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-04-01"),
    numberOfDaysRemaining: 15,
    subscriptionStartingDate: new Date("2024-04-05"),
  },
  {
    regNumber: "10009",
    name: "James Williams",
    phoneNumber: "+1234567899",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-05-20"),
    numberOfDaysRemaining: 25,
    subscriptionStartingDate: new Date("2024-05-25"),
  },
  {
    regNumber: "10010",
    name: "Patricia Brown",
    phoneNumber: "+1234567800",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-06-15"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-06-20"),
  },
  {
    regNumber: "10011",
    name: "Robert Jones",
    phoneNumber: "+1234567801",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-07-10"),
    numberOfDaysRemaining: 10,
    subscriptionStartingDate: new Date("2024-07-15"),
  },
  {
    regNumber: "10012",
    name: "Linda Garcia",
    phoneNumber: "+1234567802",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-08-05"),
    numberOfDaysRemaining: 20,
    subscriptionStartingDate: new Date("2024-08-10"),
  },
  {
    regNumber: "10013",
    name: "Michael Martinez",
    phoneNumber: "+1234567803",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-09-01"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-09-05"),
  },
  {
    regNumber: "10014",
    name: "Barbara Rodriguez",
    phoneNumber: "+1234567804",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-10-15"),
    numberOfDaysRemaining: 5,
    subscriptionStartingDate: new Date("2024-10-20"),
  },
  {
    regNumber: "10015",
    name: "William Clark",
    phoneNumber: "+1234567805",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-11-01"),
    numberOfDaysRemaining: 30,
    subscriptionStartingDate: new Date("2024-11-05"),
  },
  {
    regNumber: "10016",
    name: "Elizabeth Lewis",
    phoneNumber: "+1234567806",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-12-15"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-12-20"),
  },
  {
    regNumber: "10017",
    name: "David Walker",
    phoneNumber: "+1234567807",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-01-10"),
    numberOfDaysRemaining: 7,
    subscriptionStartingDate: new Date("2024-01-15"),
  },
  {
    regNumber: "10018",
    name: "Jennifer Hall",
    phoneNumber: "+1234567808",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-02-20"),
    numberOfDaysRemaining: 10,
    subscriptionStartingDate: new Date("2024-02-25"),
  },
  {
    regNumber: "10019",
    name: "Richard Allen",
    phoneNumber: "+1234567809",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-03-15"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-03-20"),
  },
  {
    regNumber: "10020",
    name: "Susan Young",
    phoneNumber: "+1234567810",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-04-05"),
    numberOfDaysRemaining: 15,
    subscriptionStartingDate: new Date("2024-04-10"),
  },
  {
    regNumber: "10021",
    name: "Joseph Hernandez",
    phoneNumber: "+1234567811",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-05-01"),
    numberOfDaysRemaining: 25,
    subscriptionStartingDate: new Date("2024-05-05"),
  },
  {
    regNumber: "10022",
    name: "Karen King",
    phoneNumber: "+1234567812",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-06-20"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-06-25"),
  },
  {
    regNumber: "10023",
    name: "Charles Wright",
    phoneNumber: "+1234567813",
    typeOfSubscription: "Basic",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-07-15"),
    numberOfDaysRemaining: 10,
    subscriptionStartingDate: new Date("2024-07-20"),
  },
  {
    regNumber: "10024",
    name: "Lisa Scott",
    phoneNumber: "+1234567814",
    typeOfSubscription: "Premium",
    subscriptionActive: true,
    paymentConfirmed: true,
    dateOfRegistration: new Date("2024-08-01"),
    numberOfDaysRemaining: 20,
    subscriptionStartingDate: new Date("2024-08-05"),
  },
  {
    regNumber: "10025",
    name: "Thomas Adams",
    phoneNumber: "+1234567815",
    typeOfSubscription: "Standard",
    paymentConfirmed: false,
    subscriptionActive: false,
    dateOfRegistration: new Date("2024-09-10"),
    numberOfDaysRemaining: 0,
    subscriptionStartingDate: new Date("2024-09-15"),
  },
];

export const users = [
  {
    regNumber: "10001",
    name: "John Doe",
    age: "30",
    email: "john.doe@example.com",
    gender: "Male",
    marital: "Single",
    address: "456 Elm St, Springfield",
    phoneNumber: "+1234567890",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "Jane Doe",
    nextOfKinPhoneNumber: "+1987654320",
    currentWeight: "80",
    currentHeight: "175",
    dateOfRegistration: new Date("2024-01-01"),
    subscriptionStartingDate: new Date("2024-01-15"),
    typeOfSubscription: "Standard",
    paymentConfirmed: "true",
  },
  {
    regNumber: "10002",
    name: "Jane Smith",
    age: "28",
    email: "jane.smith@example.com",
    gender: "Female",
    marital: "Married",
    address: "789 Oak St, Springfield",
    phoneNumber: "+1234567891",
    medicalClearance: "true",
    currentHealthIssue: "Asthma",
    nextOfKin: "John Smith",
    nextOfKinPhoneNumber: "+1987654321",
    currentWeight: "65",
    currentHeight: "165",
    dateOfRegistration: new Date("2024-01-02"),
    subscriptionStartingDate: new Date("2024-01-16"),
    typeOfSubscription: "Premium",
    paymentConfirmed: "true",
  },
  {
    regNumber: "10003",
    name: "Michael Johnson",
    age: "35",
    email: "michael.johnson@example.com",
    gender: "Male",
    marital: "Single",
    address: "101 Pine St, Springfield",
    phoneNumber: "+1234567892",
    medicalClearance: "true",
    currentHealthIssue: "Diabetes",
    nextOfKin: "Sarah Johnson",
    nextOfKinPhoneNumber: "+1987654322",
    currentWeight: "95",
    currentHeight: "185",
    dateOfRegistration: new Date("2024-01-03"),
    subscriptionStartingDate: new Date("2024-01-17"),
    typeOfSubscription: "Standard",

    paymentConfirmed: "true",
  },
  {
    regNumber: "10004",
    name: "Emily Davis",
    age: "40",
    email: "emily.davis@example.com",
    gender: "Female",
    marital: "Divorced",
    address: "102 Maple St, Springfield",
    phoneNumber: "+1234567893",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "Mark Davis",
    nextOfKinPhoneNumber: "+1987654323",
    currentWeight: "70",
    currentHeight: "170",
    dateOfRegistration: new Date("2024-01-04"),
    subscriptionStartingDate: new Date("2024-01-18"),
    typeOfSubscription: "Basic",

    paymentConfirmed: "true",
  },
  {
    regNumber: "10005",
    name: "David Wilson",
    age: "50",
    email: "david.wilson@example.com",
    gender: "Male",
    marital: "Married",
    address: "103 Cedar St, Springfield",
    phoneNumber: "+1234567894",
    medicalClearance: "true",
    currentHealthIssue: "Hypertension",
    nextOfKin: "Laura Wilson",
    nextOfKinPhoneNumber: "+1987654324",
    currentWeight: "85",
    currentHeight: "180",
    dateOfRegistration: new Date("2024-01-05"),
    subscriptionStartingDate: new Date("2024-01-19"),
    typeOfSubscription: "Standard",

    paymentConfirmed: "true",
  },
  {
    regNumber: "10006",
    name: "Sarah Lee",
    age: "32",
    email: "sarah.lee@example.com",
    gender: "Female",
    marital: "Single",
    address: "104 Birch St, Springfield",
    phoneNumber: "+1234567895",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "James Lee",
    nextOfKinPhoneNumber: "+1987654325",
    currentWeight: "60",
    currentHeight: "160",
    dateOfRegistration: new Date("2024-01-06"),
    subscriptionStartingDate: new Date("2024-01-20"),
    typeOfSubscription: "Premium",

    paymentConfirmed: "true",
  },
  {
    regNumber: "10007",
    name: "George Miller",
    age: "45",
    email: "george.miller@example.com",
    gender: "Male",
    marital: "Married",
    address: "123 Main St, Springfield",
    phoneNumber: "+1234567897",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "Jane Miller",
    nextOfKinPhoneNumber: "+1987654321",
    currentWeight: "90",
    currentHeight: "180",
    dateOfRegistration: new Date("2024-01-10"),
    subscriptionStartingDate: new Date("2024-01-30"),
    typeOfSubscription: "Premium",

    paymentConfirmed: "true",
  },
  {
    regNumber: "10008",
    name: "Nancy Brown",
    age: "38",
    email: "nancy.brown@example.com",
    gender: "Female",
    marital: "Married",
    address: "105 Walnut St, Springfield",
    phoneNumber: "+1234567898",
    medicalClearance: "true",
    currentHealthIssue: "Arthritis",
    nextOfKin: "Robert Brown",
    nextOfKinPhoneNumber: "+1987654326",
    currentWeight: "68",
    currentHeight: "168",
    dateOfRegistration: new Date("2024-01-11"),
    subscriptionStartingDate: new Date("2024-01-31"),
    typeOfSubscription: "Standard",
    paymentConfirmed: "true",
  },
  {
    regNumber: "10009",
    name: "William White",
    age: "55",
    email: "william.white@example.com",
    gender: "Male",
    marital: "Married",
    address: "106 Chestnut St, Springfield",
    phoneNumber: "+1234567899",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "Mary White",
    nextOfKinPhoneNumber: "+1987654327",
    currentWeight: "88",
    currentHeight: "175",
    dateOfRegistration: new Date("2024-01-12"),
    subscriptionStartingDate: new Date("2024-02-01"),
    typeOfSubscription: "Premium",
    paymentConfirmed: "true",
  },
  {
    regNumber: "10010",
    name: "Patricia Green",
    age: "29",
    email: "patricia.green@example.com",
    gender: "Female",
    marital: "Single",
    address: "107 Spruce St, Springfield",
    phoneNumber: "+1234567800",
    medicalClearance: "true",
    currentHealthIssue: "None",
    nextOfKin: "Daniel Green",
    nextOfKinPhoneNumber: "+1987654328",
    currentWeight: "58",
    currentHeight: "162",
    dateOfRegistration: new Date("2024-01-13"),
    subscriptionStartingDate: new Date("2024-02-02"),
    typeOfSubscription: "Basic",
    paymentConfirmed: "true",
  },
];
