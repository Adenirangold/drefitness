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

const ClientModal = ({ client }: { client: AdminTable }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="capitalize  border-2 border-blue-600 shadow-lg text-light-200"
        >
          REACTIVATE
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="sub-header">
            Reactivate Gym Subscription
          </DialogTitle>
          <DialogDescription>
            Please fill in the following details to reactivate client
            subscription
          </DialogDescription>
        </DialogHeader>

        <ReactivateForm setOpen={setOpen} client={client}></ReactivateForm>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
