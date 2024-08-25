"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";

import "react-datepicker/dist/react-datepicker.css";
import { clientFormValidation } from "@/lib/validation";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import {
  clientDefaultValue,
  genderOptions,
  maritalStatus,
  subscriptionTypes,
} from "@/constants";
import { Button } from "../ui/button";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof clientFormValidation>>({
    resolver: zodResolver(clientFormValidation),
    defaultValues: {
      ...clientDefaultValue,
    },
  });

  const onSubmit = async (values: z.infer<typeof clientFormValidation>) => {
    console.log("jj");

    setIsLoading(true);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us have your details.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          {/*  */}

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="regNumber"
            placeholder="001"
            label="Registration Number"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="phone"
              label="Phone number"
              placeholder="0812995892"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email address"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />
          </div>
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="age"
              label="Age"
              placeholder="10"
            />
            {/* <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            /> */}

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {genderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="marital"
              label="Marital status"
              placeholder="Select relationship status"
            >
              {maritalStatus.map((type, i) => (
                <SelectItem key={i} value={type}>
                  {type}
                </SelectItem>
              ))}
            </CustomFormField>
          </div>

          {/* Address & Occupation */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="address"
              label="Address"
              placeholder="14 street, New york, NY - 5101"
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Next Of Kin Information</h2>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="nextOfKin"
              label="Next of kin name"
              placeholder="Next of kin name"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="nextOfKinPhoneNumber"
              label="Next of kin number"
              placeholder="0812345678"
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Medical Information</h2>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="medicalClearance"
              label="Medical clearance"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="radio-group">
                      <RadioGroupItem value="true" id="true" />
                      <Label htmlFor="true" className="cursor-pointer">
                        Yes
                      </Label>
                    </div>
                    <div className="radio-group">
                      <RadioGroupItem value="false" id="false" />
                      <Label htmlFor="false" className="cursor-pointer">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="currentHealthIssue"
            label=" Curent Health issue (if relevant)"
            placeholder="Asthma,HBP"
          />
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Gym Information</h2>
          </div>
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="currentWeight"
              label="Weight in Kg"
              placeholder="Weight in kg"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="currentHeight"
              label="Height in cm"
              placeholder="Height in cm"
            />
          </div>

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="typeOfSubscription"
            label="Type of subscription"
            placeholder="Choose Subscription"
          >
            {subscriptionTypes.map((type, i) => (
              <SelectItem key={i} value={type.name}>
                {type.name}
              </SelectItem>
            ))}
          </CustomFormField>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dateOfRegistration"
              label="Registration date"
              placeholder="mm/dd/yyyy"
            />
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="subscriptionStartingDate"
              label="Subscribtion date"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="paymentConfirmed"
            label="Payment confirmed"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <div className="radio-group">
                    <RadioGroupItem value="true" id="true" />
                    <Label htmlFor="true" className="cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="radio-group">
                    <RadioGroupItem value="false" id="false" />
                    <Label htmlFor="false" className="cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
            )}
          />
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
