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
            <h1 className="text-2xl mb-3 font-extrabold">
              REG NO: {user.regNumber}
            </h1>
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

      <div className="flex justify-between mb-12 flex-col gap-6 xl:flex-row">
        <section className="space-y-6 font-medium">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-500" />
            <span>{user.name}</span>
          </div>
          <div className="flex font-medium items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>{user.phoneNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-gray-500" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-500" />
            <span>
              {user.gender}, {user.age || "N/A"} years old
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-gray-500" />
            <span>{user.marital}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span>{user.address}</span>
          </div>
        </section>
        <section className="space-y-6 font-medium">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Next Of Kin Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-500" />
            <span>{user.nextOfKin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>{user.nextOfKinPhoneNumber}</span>
          </div>
        </section>
      </div>

      <div className="flex mb-12 justify-between flex-col gap-6 xl:flex-row">
        <section className=" font-medium space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Health Information</h2>
          </div>
          <div className="flex items-center space-x-2">
            <SquareActivity className="w-5 h-5 text-gray-500" />
            <span>
              Medical Clearance:{" "}
              {user.medicalClearance === "true" ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <HeartPulse className="w-5 h-5 text-gray-500" />
            <span>
              Current Health Issue: {user.currentHealthIssue || "None"}
            </span>
          </div>

          <div className="flex items-center">
            <Weight className="w-5 h-5 text-gray-500 mr-1" />
            <span>{user.currentWeight} kg</span>
          </div>
          <div className="flex items-center">
            <Ruler className="w-5 h-5 text-gray-500 mr-1" />
            <span>{user.currentHeight} cm</span>
          </div>
        </section>
        <section className="font-medium space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header"> Subscription Information</h2>
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
              Current Subscription Date:{" "}
              {formatDate(user.subscriptionStartingDate)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-4 h-4 text-gray-500" />
            <span className=" font-medium">
              Subcription: {user.typeOfSubscription}
            </span>
          </div>
        </section>
      </div>
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header">Subscription History</h2>
        </div>
        <div className="space-y-2">
          {user.subscriptionHistory?.map((sub: any, index: any) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
