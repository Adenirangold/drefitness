"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "./ui/button";
import SubmitButton from "./SubmitButton";

function PasscodeModal() {
  const [passkey, setPasskey] = useState("");
  console.log(passkey);

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

        <SubmitButton>Verify</SubmitButton>
      </div>
    </div>
  );
}

export default PasscodeModal;
