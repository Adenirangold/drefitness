"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

function DetailsButton({ client }: { client: AdminTable }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(`/admin/add-client/${client.regNumber}`);
      }}
      variant="ghost"
      className="capitalize border-2 border-green-600 shadow-lg text-light-200"
    >
      VIEW DETAILS
    </Button>
  );
}

export default DetailsButton;
