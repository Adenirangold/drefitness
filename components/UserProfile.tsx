"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Users,
  Weight,
  Ruler,
  Clock,
  Dumbbell,
  HeartPulse,
  SquareActivity,
} from "lucide-react";
import { formatDate, numberOfDays } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AddClientButton from "./AddClientButton";
import { StatusBadge } from "./StatusBadge";
import { subscriptionTypes } from "@/constants";

const UserProfile = ({ user }: { user: UserSchemaTypes }) => {
  const router = useRouter();
  const numberOfDaysRemaining = numberOfDays(subscriptionTypes, user);

  return (
    <div className="w-full max-w-[860px] mx-auto ">
      <section className="mb-12 space-y-4">
        <div className=" items-center  sm:flex ">
          <div>
            <div className="ml-auto mt-7 sm:mt-0">
              <StatusBadge
                status={numberOfDaysRemaining! > 0 ? "true" : "false"}
                text={numberOfDaysRemaining! > 0 ? "Active" : "Inactive"}
              ></StatusBadge>
            </div>
          </div>
          <div className="ml-auto mt-7 sm:mt-0">
            <AddClientButton
              route={`/admin/${user.regNumber}/edit-client`}
              text="EDIT CLIENT"
              imageSrc="/assets/icons/edit.svg"
            ></AddClientButton>
          </div>
        </div>
      </section>

      <div className="flex justify-between mb-12 flex-col gap-6 md:flex-row">
        <section className="space-y-6 text-14-regular">
          <div className="mb-3 space-y-1">
            <h2 className="text-18-bold">Personal Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <User className="lucide-icons" />
            <span>Reg No: {user.regNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="lucide-icons" />
            <span>Name: {user.name}</span>
          </div>
          <div className="flex  items-center space-x-2">
            <Phone className="lucide-icons" />
            <span>Phone: {user.phoneNumber || "Nill"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="lucide-icons" />
            <span>Email: {user.email || "Nill"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="lucide-icons" />
            <span>
              Gender/Age: {user.gender}, {user.age || "N/A"} years old
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="lucide-icons" />
            <span>Marital Status: {user.marital || "Nill"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="lucide-icons" />
            <span>Address: {user.address || "Nill"}</span>
          </div>
        </section>
        <section className="space-y-6 text-14-regular">
          <div className="mb-3 space-y-1">
            <h2 className="text-18-bold">Next Of Kin Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <User className="lucide-icons" />
            <span>Name Of Next Of Kin: {user.nextOfKin || "Nill"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="lucide-icons" />
            <span>
              Phone Of Next Of Kin: {user.nextOfKinPhoneNumber || "Nill"}
            </span>
          </div>
        </section>
      </div>

      <div className="flex mb-12 justify-between flex-col gap-6 md:flex-row">
        <section className=" text-14-regular space-y-6">
          <div className="mb-3 space-y-1">
            <h2 className="text-18-bold">Health Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <SquareActivity className="lucide-icons" />
            <span>
              Medical Clearance:{" "}
              {user.medicalClearance === "true" ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <HeartPulse className="lucide-icons" />
            <span>
              Current Health Issue: {user.currentHealthIssue || "None"}
            </span>
          </div>

          <div className="flex items-center">
            <Weight className="lucide-icons mr-1" />
            <span>Weight: {user.currentWeight || "N/A"} kg</span>
          </div>
          <div className="flex items-center">
            <Ruler className="lucide-icons mr-1" />
            <span>Height: {user.currentHeight || "N/A"} cm</span>
          </div>
        </section>
        <section className="text-14-regular space-y-6">
          <div className="mb-3 space-y-1">
            <h2 className="text-18-bold"> Subscription Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="">
              Registration Date: {formatDate(user.dateOfRegistration)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="">
              Current Subscription Start-Date:{" "}
              {formatDate(user.subscriptionStartingDate)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="">
              Current Subscription Active Days: {numberOfDaysRemaining} Days
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-4 h-4 text-gray-500" />
            <span className="">Subscription: {user.typeOfSubscription}</span>
          </div>
        </section>
      </div>
      <section className="text-14-regular space-y-6">
        <div className="mb-3 space-y-1">
          <h2 className="text-18-bold">Subscription History</h2>
        </div>
        <div className="space-y-2">
          {user.subscriptionHistory?.length! < 1 ? (
            <p>No Subscription history</p>
          ) : (
            user.subscriptionHistory
              ?.sort(
                (a: any, b: any) =>
                  new Date(b.startingDate).getTime() -
                  new Date(a.startingDate).getTime()
              )
              .slice(0, 4)
              .map((sub: any, index: any) => {
                const isRecent = index === 0;
                const isExpired = new Date() > new Date(sub.endingDate);
                return (
                  <div
                    key={index}
                    className="bg-dark-400 border border-dark-500 p-4 rounded-lg"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <p className="font-medium">{sub.type}</p>
                        <p className="text-sm text-gray-500">
                          {formatDate(sub.startingDate)} -{" "}
                          {formatDate(sub.endingDate)}
                        </p>
                        {isRecent ? (
                          <p className="text-xs text-green-500">
                            Recent Subscription
                          </p>
                        ) : (
                          <p className="text-xs text-red-500">
                            Expired Subscription
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
