"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import SubmitButton from "./SubmitButton";
import { compare, hashed } from "@/lib/utils";
import { useRouter } from "next/navigation";

function PasscodeModal() {
  const [passkey, setPasskey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handlePasskey = async () => {
    const secret = process.env.NEXT_PUBLIC_PASSWORD;

    try {
      setIsLoading(true);

      const hashedPasscode = await hashed(secret);

      const verify = await compare(passkey, hashedPasscode);

      if (!verify) {
        throw new Error("Passcode verification failed");
      }
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000);
      document.cookie = `admin=${hashedPasscode}; path=/; secure; expires=${expirationTime.toUTCString()};  samesite=strict;`;

      setIsLoading(false);

      router.push("/admin");
    } catch (err) {
      setError(true);
      setIsLoading(false);
      console.log("Error in passcode verification:", err);
    }
  };

  return (
    <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md p-6 translate-x-[-50%] translate-y-[-50%] border  border-dark-500 bg-dark-400 shadow-lg rounded-lg flex flex-col items-center">
      <div className="w-full max-w-md mx-4 sm:mx-auto space-y-6 flex flex-col items-center">
        <div className="flex flex-col space-y-2 text-center sm:text-left ">
          <h2 className="sub-header">Admin Access Verification</h2>
          <p className="text-light-200">
            Enter your admin passcode to get access to admin panel
          </p>
        </div>

        <InputOTP
          onChange={(value) => {
            setPasskey(value);
          }}
          className="shad-otp"
          maxLength={6}
        >
          <InputOTPGroup className="flex justify-center space-x-2 sm:space-x-2">
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot
                key={index}
                className="shad-otp-slot"
                index={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {error && (
          <p className="shad-error text-center sm:text-left">
            The passcode you entered is incorrect. Please try again with the
            correct passcode
          </p>
        )}

        <SubmitButton isLoading={isLoading} onClick={handlePasskey}>
          VERIFY
        </SubmitButton>
      </div>
    </div>
  );
}

export default PasscodeModal;
