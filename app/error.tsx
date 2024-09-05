"use client";

import React from "react";

interface ErrorProps {
  reset: () => void;
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ reset, error }) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">An Error Occurred!</p>
      <p>{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-blue-500 text-light-200 px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
};

export default Error;
