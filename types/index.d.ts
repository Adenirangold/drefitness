interface UserSchemaTypes {
  regNumber: string;
  firstName: string;
  secondName: string;
  age: number;
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
  firstName: string;
  secondName: string;
  phoneNumber: string;
  typeOfSubscription: string;
  subscriptionActive: boolean;
  paymentConfirmed: boolean;
  dateOfRegistration: Date;
  numberOfDaysRemaining: number;
  subscriptionStartingDate: Date;
}
