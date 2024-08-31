"use server";
import Member from "@/model/member";

import { connectToDb } from "@/utils/database";

export const registerMemberAction = async ({
  regNumber,
  name,
  age,
  email,
  gender,
  marital,
  address,
  phoneNumber,
  medicalClearance,
  currentHealthIssue,
  nextOfKin,
  nextOfKinPhoneNumber,
  currentWeight,
  currentHeight,
  typeOfSubscription,
  dateOfRegistration,
  subscriptionStartingDate,
  paymentConfirmed,
}: UserSchemaTypes) => {
  try {
    connectToDb();
    const memberData = await Member.create({
      regNumber,
      name,
      age,
      email,
      gender,
      marital,
      address,
      phoneNumber,
      medicalClearance,
      currentHealthIssue,
      nextOfKin,
      nextOfKinPhoneNumber,
      currentWeight,
      currentHeight,
      typeOfSubscription,
      dateOfRegistration,
      subscriptionStartingDate,
      paymentConfirmed,
    });
    console.log(memberData);
    return { redirect: "/admin" };
  } catch (err) {
    console.log("error in Creating Member");
    return { error: "An error occurred while creating the Member." };
  }
};
