"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { clientFormValidation } from "@/lib/validation";

function ReactivateForm() {
  const form = useForm<z.infer<typeof clientFormValidation>>({
    resolver: zodResolver(clientFormValidation),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof clientFormValidation>) {
    console.log(values);
    const { email } = values;
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ReactivateForm;
