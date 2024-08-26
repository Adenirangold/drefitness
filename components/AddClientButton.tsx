"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function AddClientButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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
      Add New Client
    </button>
  );
}

export default AddClientButton;
