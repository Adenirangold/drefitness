import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import React from "react";

function AdminPage() {
  const data = [
    {
      regNumber: "10001",
      name: "Alice Johnson",
      phoneNumber: "+1234567891",
      typeOfSubscription: "Basic",
      subscriptionActive: true,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-02-01"),
      numberOfDaysRemaining: 25,
      subscriptionStartingDate: new Date("2024-03-01"),
    },
    {
      regNumber: "10002",
      name: "Bob Smith",
      phoneNumber: "+1234567892",
      typeOfSubscription: "Premium",
      subscriptionActive: true,
      paymentConfirmed: false,
      dateOfRegistration: new Date("2024-02-10"),
      numberOfDaysRemaining: 40,
      subscriptionStartingDate: new Date("2024-03-05"),
    },
    {
      regNumber: "10003",
      name: "Charlie Brown",
      phoneNumber: "+1234567893",
      typeOfSubscription: "Standard",
      subscriptionActive: false,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-01-20"),
      numberOfDaysRemaining: 0,
      subscriptionStartingDate: new Date("2024-02-15"),
    },
    {
      regNumber: "10004",
      name: "Diana Prince",
      phoneNumber: "+1234567894",
      typeOfSubscription: "Premium",
      subscriptionActive: true,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-03-01"),
      numberOfDaysRemaining: 60,
      subscriptionStartingDate: new Date("2024-03-15"),
    },
    {
      regNumber: "10005",
      name: "Edward King",
      phoneNumber: "+1234567895",
      typeOfSubscription: "Basic",
      subscriptionActive: false,
      paymentConfirmed: false,
      dateOfRegistration: new Date("2024-01-15"),
      numberOfDaysRemaining: 0,
      subscriptionStartingDate: new Date("2024-01-20"),
    },
    {
      regNumber: "10006",
      name: "Fiona Amith",
      phoneNumber: "+1234567896",
      typeOfSubscription: "Standard",
      subscriptionActive: true,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-02-18"),
      numberOfDaysRemaining: 45,
      subscriptionStartingDate: new Date("2024-02-28"),
    },
    {
      regNumber: "10007",
      name: "Goerge Miller",
      phoneNumber: "+1234567897",
      typeOfSubscription: "Premium",
      subscriptionActive: false,
      paymentConfirmed: false,
      dateOfRegistration: new Date("2024-01-10"),
      numberOfDaysRemaining: 0,
      subscriptionStartingDate: new Date("2024-01-30"),
    },
    {
      regNumber: "10008",
      name: "Hannah Clark",
      phoneNumber: "+1234567898",
      typeOfSubscription: "Basic",
      subscriptionActive: true,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-02-22"),
      numberOfDaysRemaining: 20,
      subscriptionStartingDate: new Date("2024-03-10"),
    },
    {
      regNumber: "10009",
      name: "Ian Scott",
      phoneNumber: "+1234567899",
      typeOfSubscription: "Standard",
      subscriptionActive: true,
      paymentConfirmed: false,
      dateOfRegistration: new Date("2024-01-25"),
      numberOfDaysRemaining: 15,
      subscriptionStartingDate: new Date("2024-02-05"),
    },
    {
      regNumber: "10010",
      name: "Jane Doe",
      phoneNumber: "+1234567800",
      typeOfSubscription: "Premium",
      subscriptionActive: true,
      paymentConfirmed: true,
      dateOfRegistration: new Date("2024-03-05"),
      numberOfDaysRemaining: 90,
      subscriptionStartingDate: new Date("2024-03-20"),
    },
  ];
  return (
    <div className="mx-auto flex max-w-8xl flex-col space-y-14">
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
        <DataTable data={data} columns={columns}></DataTable>
      </main>
    </div>
  );
}

export default AdminPage;
