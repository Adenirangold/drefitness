"use server";
import Member from "@/model/member";

import { connectToDb } from "@/utils/database";
import { revalidatePath } from "next/cache";
import { calculateSubscriptionEndDate, numberOfDays } from "./utils";
import { subscriptionTypes } from "@/constants";
import { redirect } from "next/navigation";

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
  const subscriptionEndingDate = calculateSubscriptionEndDate(
    typeOfSubscription,
    subscriptionStartingDate
  );
  try {
    await connectToDb();
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
      subscriptionHistory: [
        {
          subscriptionStartingDate: subscriptionStartingDate,
          subscriptionEndingDate: subscriptionEndingDate,
          type: typeOfSubscription,
        },
      ],
    });
    Promise.resolve(revalidatePath("/admin")).catch((err) => {
      console.error("Revalidation failed: ", err);
    });

    return { redirect: "/admin" };
  } catch (err: any) {
    if (err.code === 11000) {
      return {
        error:
          "Registration number already exists. Please use a different number.",
      };
    }
    return {
      error:
        "Failed to create a new member. Please ensure all fields are filled correctly and try again.",
    };
  }
};

export const getMembers = async () => {
  try {
    await connectToDb();

    const members = await Member.find().sort({ dateOfRegistration: -1 });
    if (!members) {
      throw new Error();
    }

    return { data: members };
  } catch (err) {
    return { error: "Internal Service Error" };
  }
};

export const updateMemberAction = async ({
  regNumber,
  ...updateData
}: Partial<UserSchemaTypes> & { regNumber: string }) => {
  try {
    await connectToDb();

    const updatedMember = await Member.findOneAndUpdate(
      { regNumber },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedMember) {
      return {
        error:
          "Member not found. Please ensure the registration number is correct.",
      };
    }
    Promise.resolve(revalidatePath("/admin")).catch((err) => {
      console.error("Revalidation failed: ", err);
    });
    return { redirect: "/admin" };
  } catch (err) {
    return {
      error:
        "Failed to update the member. Please check the details and try again.",
    };
  }
};

// export const reactivateMemberAction = async ({
//   regNumber,
//   ...updateData
// }: Partial<UserSchemaTypes> & { regNumber: string }) => {
//   const subscriptionEndingDate = calculateSubscriptionEndDate(
//     updateData.typeOfSubscription!,
//     updateData.subscriptionStartingDate!
//   );
//   try {
//     await connectToDb();

//     const updatedMember = await Member.findOneAndUpdate(
//       { regNumber },
//       updateData,
//       { new: true, runValidators: true }
//     );

//     updatedMember.subscriptionHistory.push({
//       subscriptionStartingDate: updateData.subscriptionStartingDate,
//       subscriptionEndingDate,
//       type: updateData.typeOfSubscription,
//     });

//     if (!updatedMember) {
//       return {
//         error:
//           "Member not found. Please ensure the registration number is correct.",
//       };
//     }
//     Promise.resolve(revalidatePath("/admin")).catch((err) => {
//       console.error("Revalidation failed: ", err);
//     });
//     return { redirect: "/admin" };
//   } catch (err) {
//     return {
//       error:
//         "Failed to update the member. Please check the details and try again.",
//     };
//   }
// };

export const reactivateMemberAction = async ({
  regNumber,
  ...updateData
}: Partial<UserSchemaTypes> & { regNumber: string }) => {
  const subscriptionEndingDate = calculateSubscriptionEndDate(
    updateData.typeOfSubscription!,
    updateData.subscriptionStartingDate!
  );
  try {
    await connectToDb();

    const updatedMember = await Member.findOne({ regNumber });

    if (!updatedMember) {
      return {
        error:
          "Member not found. Please ensure the registration number is correct.",
      };
    }

    const newHistoryEntry = {
      subscriptionStartingDate: updateData.subscriptionStartingDate,
      subscriptionEndingDate,
      type: updateData.typeOfSubscription,
    };

    if (!updatedMember.subscriptionHistory) {
      updatedMember.subscriptionHistory = [];
    }

    updatedMember.subscriptionHistory.push(newHistoryEntry);

    updatedMember.typeOfSubscription = updateData.typeOfSubscription;
    updatedMember.subscriptionStartingDate =
      updateData.subscriptionStartingDate;
    updatedMember.paymentConfirmed = updateData.paymentConfirmed;

    await updatedMember.save();

    Promise.resolve(revalidatePath("/admin")).catch((err) => {
      console.error("Revalidation failed: ", err);
    });
    return { redirect: "/admin" };
  } catch (err) {
    return {
      error:
        "Failed to update the member. Please check the details and try again.",
    };
  }
};

export const getMember = async (regNumber: string) => {
  try {
    await connectToDb();
    const member = await Member.findOne({ regNumber: regNumber });
    if (!member) {
      return { error: "No member with this regNumber" };
    }

    return { data: member };
  } catch (err) {
    return { error: "Internal Service Error" };
  }
};

export const filteredMembers = async () => {
  try {
    await connectToDb();

    const members = await Member.find();
    if (!members) {
      throw new Error();
    }

    const activeMembers: any = [];
    const inactiveMembers: any = [];

    members.forEach((member) => {
      const daysLeft = numberOfDays(subscriptionTypes, member);
      if (daysLeft! > 0) {
        activeMembers.push(member);
      } else {
        inactiveMembers.push(member);
      }
    });

    return { active: activeMembers, inactive: inactiveMembers };
  } catch (err) {
    return { error: "Internal Service Error" };
  }
};

export const deleteClientAction = async (regNumber: string) => {
  try {
    await connectToDb();
    const deletedMember = await Member.findOneAndDelete({
      regNumber: regNumber,
    });
    if (!deletedMember) {
      return {
        error: `Member with registration number ${regNumber} not found.`,
      };
    }

    revalidatePath("/admin");
    return {
      message: `Member with registration number ${regNumber} has been deleted successfully.`,
    };
  } catch (err) {
    return {
      error: `Something went wrong while trying to delete the member. Please try again later`,
    };
  }
};
