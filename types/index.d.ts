interface SubscriptionHistory {
  subscriptionStartingDate: Date;
  subscriptionEndingDate: Date;
  type: string;
}

interface UserSchemaTypes {
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
  subscriptionHistory?: SubscriptionHistory[];
}

interface RegisterSchemaTypes {
  regNumber: string;
  name: string;
  typeOfSubscription: string;
  subscriptionStartingDate: Date;
  paymentConfirmed: "true" | "false";
}

interface AdminTable {
  regNumber: string;
  name: string;
  phoneNumber: string;
  typeOfSubscription: string;
  subscriptionActive: boolean;
  paymentConfirmed: "true" | "false";
  numberOfDaysRemaining: number;
  subscriptionStartingDate: Date;
  dateOfRegistration: Date;
}

declare type Status = "true" | "false";
