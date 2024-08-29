const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  regNumber: {
    type: String,
    required: [true, "Registration number is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  phoneNumber: {
    type: String,
    match: [/^\d{10,15}$/, "Mobile number must be between 10 and 15 digits"],
    required: [true, "Phone number is required"],
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Invalid email address"],
    sparse: true,
  },
  age: {
    type: String,
    sparse: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  marital: {
    type: String,
    enum: ["Single", "Married", "Divorced", "Widowed"],
    required: true,
  },
  address: {
    type: String,
    sparse: true,
  },
  nextOfKin: {
    type: String,
    // required: [true, "Next of kin is required"],
    sparse: true,
  },
  nextOfKinPhoneNumber: {
    type: String,
    match: [/^\d{10,15}$/, "Mobile number must be between 10 and 15 digits"],

    sparse: true,
  },
  medicalClearance: {
    type: String,
    enum: ["true", "false"],
    required: true,
  },
  currentHealthIssue: {
    type: String,
    default: "none",
  },
  currentWeight: {
    type: String,
    // required: [true, "Weight is required"],
    sparse: true,
  },
  currentHeight: {
    type: String,
    // required: [true, "Height is required"],
    sparse: true,
  },
  typeOfSubscription: {
    type: String,
    required: [true, "Subscription type is required"],
  },
  dateOfRegistration: {
    type: Date,
    required: true,
  },
  subscriptionStartingDate: {
    type: Date,
    required: true,
  },
  paymentConfirmed: {
    type: String,
    enum: ["true", "false"],
    sparse: true,
  },
});

const Member = mongoose.models || mongoose.model("Member", memberSchema);

module.exports = Member;
