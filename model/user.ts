const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  regNumber: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  medicalClearance: { type: Boolean, required: true },
  currentHealthIssue: { type: String, default: "" },
  nextOfKin: { type: String, required: true },
  nextOfKinPhoneNumber: { type: String, required: true },
  currentWeight: { type: Number, required: true },
  currentHeight: { type: Number, required: true },
  bmi: { type: Number },
  dateOfRegistration: { type: Date, default: Date.now },
  subscriptionStartingDate: { type: Date, required: true },
  typeOfSubscription: {
    type: String,
    required: true,
  },
  subscriptionActive: { type: Boolean, default: true },
  paymentConfirmed: { type: Boolean, default: false },
});

const User = mongoose.models || mongoose.model("User", userSchema);

module.exports = User;

interface UserTypes {
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
