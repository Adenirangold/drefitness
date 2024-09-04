"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

function AddClientButton() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  return (
    <Button
      className="flex items-center border-2 border-blue-500 text-light-200 px-4 py-2 rounded-lg"
      onClick={() => {
        setIsloading(true);

        router.push("/admin/add-client");
      }}
    >
      {!isLoading ? (
        <div className="flex items-center">
          <Image
            width={50}
            alt="plus"
            height={20}
            src="/assets/icons/add-plus.svg"
            className="w-6 h-6 mr-2"
          />
          ADD NEW CLIENT
        </div>
      ) : (
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
      )}
    </Button>
  );
}

export default AddClientButton;
