import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";
import { subscriptionTypes } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function hashed(data: any) {
  const salt = await bcrypt.genSalt(10);
  const hashedData = await bcrypt.hash(data, salt);
  return hashedData;
}
export async function compare(data: any, hashedData: any) {
  const match = await bcrypt.compare(data, hashedData);
  return match;
}

export const numberOfDays = (subscriptionTypes: any, memberData: any) => {
  const currentDate = new Date();
  if (!memberData) {
    return null;
  }
  const subscriptionType = subscriptionTypes.find(
    (type: any) => type.name === memberData.typeOfSubscription
  );
  const subscriptionDuration = subscriptionType?.duration;
  const subscriptionStartingDate = new Date(
    memberData.subscriptionStartingDate
  );
  const expiryDate = new Date(subscriptionStartingDate);
  expiryDate.setDate(
    subscriptionStartingDate.getDate() + subscriptionDuration!
  );

  const numberOfDaysRemaining = Math.max(
    0,
    Math.ceil((+expiryDate - +currentDate) / (1000 * 60 * 60 * 24))
  );

  return numberOfDaysRemaining;
};

export function capitalizeWords(str: string) {
  if (!str) return str;

  const words = str.trim().split(/\s+/);

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export const calculateSubscriptionEndDate = (
  typeOfSubscription: string,
  subscriptionStartingDate: Date
): Date => {
  const subscription = subscriptionTypes.find(
    (sub) => sub.name === typeOfSubscription
  );

  if (!subscription) {
    throw new Error("Invalid subscription type.");
  }

  const { duration } = subscription;

  const subscriptionEndingDate = new Date(
    subscriptionStartingDate.getTime() + duration * 24 * 60 * 60 * 1000
  );

  return subscriptionEndingDate;
};

export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
