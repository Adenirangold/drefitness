"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteClientAction } from "@/lib/action";
import { Button } from "./ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { error } from "console";

function DeleteClientButton({ regNumber }: { regNumber: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error, message } = await deleteClientAction(regNumber);
      if (error) {
        toast({
          title: "Error Occured",
          description: error,
          className: " toast-container toast-error",
        });
        return;
      }
      toast({
        title: "Sucess",
        description: message,
        className: " toast-container toast-sucess",
      });
      router.push("/admin");
    } catch (err) {
      console.error("Error deleting client:", err);
      toast({
        title: "Error Occured",
        description: "Internal Server Error",
        className: " toast-container toast-error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="bg-red-700 text-light-200"
      onClick={handleSubmit}
      disabled={isLoading}
    >
      {!isLoading ? (
        <div className="flex items-center">DELETE CLIENT</div>
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

export default DeleteClientButton;
