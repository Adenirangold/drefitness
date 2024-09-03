"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../StatusBadge";
import ClientModal from "../ClientModal";
import DetailsButton from "../DetailsButton";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const columns: ColumnDef<AdminTable>[] = [
  {
    header: "No",
    cell: ({ row }) => {
      return <p className="text-14-regular">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "regNumber",
    header: "Reg",
    cell: ({ row }) => {
      return <p className="text-14-regular">{row.original.regNumber}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <p className="text-14-regular mr-10">{row.original.name}</p>;
    },
  },

  {
    accessorKey: "phoneNumber",
    header: "Phone",
    cell: ({ row }) => {
      return <p className="text-14-regular ">{row.original.phoneNumber}</p>;
    },
  },
  {
    accessorKey: "typeOfSubscription",
    header: "Gym-Sub",
    cell: ({ row }) => {
      return (
        <p className="text-14-regular">{row.original.typeOfSubscription}</p>
      );
    },
  },
  {
    accessorKey: "subscriptionActive",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4 text-blue-500" />
        </Button>
      );
    },
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
    header: "Days",
    cell: ({ row }) => {
      return (
        <p className="text-14-regular">{row.original.numberOfDaysRemaining}</p>
      );
    },
  },

  {
    accessorKey: "subscriptionStartingDate",
    header: " Start-Date",
    cell: ({ row }) => {
      const regDate = new Date(row.original.subscriptionStartingDate);
      const formattedDate = regDate.toLocaleString("default", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
      return <p className="text-14-regular">{formattedDate}</p>;
    },
  },
  {
    accessorKey: "paymentConfirmed",
    header: "Payment",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="min-w-[115px]">
          <StatusBadge
            text={`${user.paymentConfirmed === "true" ? "Paid" : "Unpaid"}`}
            status={user.paymentConfirmed}
          />
        </div>
      );
    },
  },
  // {
  //   accessorKey: "dateOfRegistration",
  //   header: " Registration Date",
  //   cell: ({ row }) => {
  //     const regDate = new Date(row.original.dateOfRegistration);
  //     const formattedDate = regDate.toLocaleString("default", {
  //       month: "long",
  //       day: "2-digit",
  //       year: "numeric",
  //     });
  //     return <p className="text-14-regular">{formattedDate}</p>;
  //   },
  // },

  {
    accessorKey: "Action",
    header: "Actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex gap-3">
          <ClientModal client={client}></ClientModal>
          <DetailsButton client={client}></DetailsButton>
        </div>
      );
    },
  },
];
