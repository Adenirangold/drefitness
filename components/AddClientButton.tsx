"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

function AddClientButton() {
  const router = useRouter();
  return (
    <Button
      className="flex items-center border border-green-500 text-light-200 px-4 py-2 rounded-lg"
      onClick={() => {
        router.push("/admin/add-client");
      }}
    >
      <Image
        width={50}
        alt="plus"
        height={20}
        src="/assets/icons/add-plus.svg"
        className="w-6 h-6 mr-2"
      />
      ADD NEW CLIENT
    </Button>
  );
}

export default AddClientButton;
