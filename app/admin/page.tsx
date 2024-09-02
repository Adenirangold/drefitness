import AddClientButton from "@/components/AddClientButton";
import SubmitButton from "@/components/SubmitButton";
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import { subscriptionTypes } from "@/constants";
import { getMembers } from "@/lib/action";
import { numberOfDays } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function AdminPage() {
  const currentDate = new Date();
  let data: any[] = [];

  try {
    const members = await getMembers();
    if (members.error) {
      console.error("Error fetching members:", members.error);
      return (
        <div className="mx-auto flex max-w-8xl flex-col space-y-14">
          <p>Error loading members.</p>
        </div>
      );
    }

    if (members.data) {
      data = members.data
        .map((member) => {
          const subscriptionType = subscriptionTypes.find(
            (type) => type.name === member.typeOfSubscription
          );

          const numberOfDaysRemaining = numberOfDays(subscriptionTypes, member);

          return {
            regNumber: member.regNumber,
            name: member.name,
            phoneNumber: member.phoneNumber,
            typeOfSubscription: member.typeOfSubscription,
            subscriptionActive: numberOfDaysRemaining! > 0,
            paymentConfirmed: member.paymentConfirmed,
            dateOfRegistration: new Date(member.dateOfRegistration),
            numberOfDaysRemaining,
            subscriptionStartingDate: new Date(member.subscriptionStartingDate),
          };
        })
        .filter((item) => item !== null);
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }

  return (
    <div className="mx-auto flex max-w-8xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/admin" className="cursor-pointer">
          <Image
            src="/assets/images/fitness-logo.png"
            height={32}
            width={32}
            alt="logo"
            className="h-12 w-fit"
          />
        </Link>
      </header>
      <main className="admin-main">
        <section className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="space-y-4 sm:mr-auto">
              <h1 className="header">Welcome Admin 👋</h1>
              <p className="text-dark-700">
                Start the day with managing clients information
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <AddClientButton />
            </div>
          </div>
        </section>
        <DataTable data={data} columns={columns} />
      </main>
    </div>
  );
}

export default AdminPage;
