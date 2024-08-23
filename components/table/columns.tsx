"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";

export const columns: ColumnDef<AdminTable>[] = [
  {
    header: "No",
    cell: ({ row }) => {
      return <p>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "regNumber",
    header: "Reg Number",
    cell: ({ row }) => {
      return <p>{row.original.regNumber}</p>;
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: ({ row }) => {
      return <p>{row.original.firstName}</p>;
    },
  },
  {
    accessorKey: "secondName",
    header: "Last Name",
    cell: ({ row }) => {
      return <p>{row.original.secondName}</p>;
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      return <p>{row.original.phoneNumber}</p>;
    },
  },
  {
    accessorKey: "typeOfSubscription",
    header: "Gym Subscription",
    cell: ({ row }) => {
      return <p>{row.original.typeOfSubscription}</p>;
    },
  },
  {
    accessorKey: "subscriptionActive",
    header: "Subscription Active",
    cell: ({ row }) => {
      return <p> {row.original.subscriptionActive ? "✅" : "❌"}</p>;
    },
  },
  {
    accessorKey: "numberOfDaysRemaining",
    header: "Days Left",
    cell: ({ row }) => {
      return <p>{row.original.numberOfDaysRemaining}</p>;
    },
  },
  {
    accessorKey: "dateOfRegistration",
    header: "Reg Date",
    cell: ({ row }) => {
      const regDate = new Date(row.original.dateOfRegistration);
      const formattedDate = format(regDate, "dd/MM/yyyy");
      return <p>{formattedDate}</p>;
    },
  },
  {
    accessorKey: "subscriptionStartingDate",
    header: "Subscription Date",
    cell: ({ row }) => {
      const regDate = new Date(row.original.subscriptionStartingDate);
      const formattedDate = format(regDate, "dd/MM/yyyy");
      return <p>{formattedDate}</p>;
    },
  },
  {
    accessorKey: "paymentConfirmed",
    header: "Payment Confirmed",
    cell: ({ row }) => {
      return <p> {row.original.paymentConfirmed ? "✅" : "❌"}</p>;
    },
  },

  {
    accessorKey: "Action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const admin = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(admin.regNumber)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
