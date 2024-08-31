interface UserSchemaTypes {
  // regNumber: string;
  // name: string;
  // age: sting;
  // email: string;
  // gender: string;
  // marital: string;
  // address: string;
  // phoneNumber: string;
  // medicalClearance: string;
  // currentHealthIssue: string;
  // nextOfKin: string;
  // nextOfKinPhoneNumber: string;
  // currentWeight: string;
  // currentHeight: string;
  // dateOfRegistration: Date;
  // subscriptionStartingDate: Date;
  // typeOfSubscription: string;
  // paymentConfirmed: string;
  regNumber: string;
  name: string;
  age?: string;
  email?: string;
  gender: "Male" | "Female";
  marital: "Single" | "Married" | "Divorced" | "Widowed";
  address?: string;
  phoneNumber: string;
  medicalClearance: "true" | "false";
  currentHealthIssue?: string;
  nextOfKin?: string;
  nextOfKinPhoneNumber?: string;
  currentWeight?: string;
  currentHeight?: string;
  typeOfSubscription: string;
  dateOfRegistration: Date;
  subscriptionStartingDate: Date;
  paymentConfirmed: "true" | "false";
}

interface AdminTable {
  regNumber: string;
  name: string;
  phoneNumber: string;
  typeOfSubscription: string;
  subscriptionActive: boolean;
  paymentConfirmed: boolean;
  numberOfDaysRemaining: number;
  subscriptionStartingDate: Date;
  dateOfRegistration: Date;
}

declare type Status = boolean;
