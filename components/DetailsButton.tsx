"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import SpinnerMini from "./SpinnerMini";

function DetailsButton({ client }: { client: AdminTable }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        setLoading(true);
        router.push(`/admin/add-client/${client.regNumber}`);
      }}
      variant="ghost"
      className="capitalize border-2 border-blue-600  shadow-lg text-light-200"
    >
      {loading ? <SpinnerMini></SpinnerMini> : "VIEW DETAILS"}
    </Button>
  );
}

export default DetailsButton;
