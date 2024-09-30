"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function DetailsButton({ client }: { client: AdminTable }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        setLoading(true);
        // router.push(`/admin/add-client/${client.regNumber}`);
        router.push(`/admin/${client.regNumber}`);
      }}
      variant="ghost"
      className="capitalize border-2 border-blue-600  shadow-lg text-light-200"
    >
      {loading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        "VIEW DETAILS"
      )}
    </Button>
  );
}

export default DetailsButton;
