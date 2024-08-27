interface UserSchemaTypes {
  regNumber: string;
  name: string;
  age: sting;
  email: string;
  gender: string;
  marital: "Single" | "Married" | "Divorced" | "Widowed";
  address: string;
  phoneNumber: string;
  medicalClearance?: "true" | "false";
  currentHealthIssue: string;
  nextOfKin: string;
  nextOfKinPhoneNumber: string;
  currentWeight: number;
  currentHeight: number;
  dateOfRegistration: Date;
  subscriptionStartingDate: Date;
  typeOfSubscription: string;
  paymentConfirmed?: "true" | "false";
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
