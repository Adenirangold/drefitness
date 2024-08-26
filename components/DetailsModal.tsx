"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import "react-datepicker/dist/react-datepicker.css";
import ReactivateForm from "./Form/ReactivateForm";
import UserDetailsCard from "./UserDetailsCard";
import { user } from "@/constants";

const DetailsModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="capitalize border border-blue-600 shadow-lg text-light-200"
        >
          VIEW DETAILS
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="sub-header">Client Details</DialogTitle>
          <DialogDescription>
            All informations regarding this client
          </DialogDescription>
        </DialogHeader>

        <UserDetailsCard user={user}></UserDetailsCard>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
