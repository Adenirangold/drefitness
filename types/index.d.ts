interface UserSchemaTypes {
  regNumber: string;
  name: string;
  age: sting;
  email: string;
  gender: string;
  marital: string;
  address: string;
  phoneNumber: string;
  medicalClearance?: boolean;
  currentHealthIssue: string;
  nextOfKin: string;
  nextOfKinPhoneNumber: string;
  currentWeight: number;
  currentHeight: number;
  bmi?: number;
  dateOfRegistration: Date;
  subscriptionStartingDate: Date;
  typeOfSubscription: string;
  subscriptionActive?: boolean;
  paymentConfirmed?: boolean;
}

interface AdminTable {
  regNumber: string;
  name: string;
  phoneNumber: string;
  typeOfSubscription: string;
  subscriptionActive: boolean;
  paymentConfirmed: boolean;
  dateOfRegistration: Date;
  numberOfDaysRemaining: number;
  subscriptionStartingDate: Date;
}

declare type Status = boolean;
