"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../StatusBadge";
import ClientModal from "../ClientModal";
import DetailsButton from "../DetailsButton";

export const columns: ColumnDef<AdminTable>[] = [
  {
    header: "No",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "regNumber",
    header: "Registration Number",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.original.regNumber}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Full Name",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.original.name}</p>;
    },
  },

  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.original.phoneNumber}</p>;
    },
  },
  {
    accessorKey: "typeOfSubscription",
    header: "Gym Subscription",
    cell: ({ row }) => {
      return (
        <p className="text-14-medium ">{row.original.typeOfSubscription}</p>
      );
    },
  },
  {
    accessorKey: "subscriptionActive",

    header: "Subscription Active",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="min-w-[115px]">
          <StatusBadge
            text={`${user.subscriptionActive ? "Active" : "Inactive"}`}
            status={user.subscriptionActive ? "true" : "false"}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "numberOfDaysRemaining",
    header: "Days Left",
    cell: ({ row }) => {
      return (
        <p className="text-14-medium ">{row.original.numberOfDaysRemaining}</p>
      );
    },
  },

  {
    accessorKey: "subscriptionStartingDate",
    header: " Sub-Start Date",
    cell: ({ row }) => {
      const regDate = new Date(row.original.subscriptionStartingDate);
      const formattedDate = regDate.toLocaleString("default", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      return <p className="text-14-medium">{formattedDate}</p>;
    },
  },
  {
    accessorKey: "paymentConfirmed",
    header: "Payment Confirmed",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="min-w-[115px]">
          <StatusBadge
            text={`${
              user.paymentConfirmed === "true" ? "Confirmed" : "Unconfirmed"
            }`}
            status={user.paymentConfirmed}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "dateOfRegistration",
    header: " Registration Date",
    cell: ({ row }) => {
      const regDate = new Date(row.original.dateOfRegistration);
      const formattedDate = regDate.toLocaleString("default", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      return <p className="text-14-medium">{formattedDate}</p>;
    },
  },

  {
    accessorKey: "Action",
    header: "Actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex gap-4">
          <ClientModal client={client}></ClientModal>
          <DetailsButton client={client}></DetailsButton>
        </div>
      );
    },
  },
];
