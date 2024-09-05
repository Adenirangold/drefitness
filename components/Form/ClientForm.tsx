"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
import SubmitButton from "../SubmitButton";
import { StatusBadge } from "../StatusBadge";
import { registerMemberAction, updateMemberAction } from "@/lib/action";
import { useRouter } from "next/navigation";
import { numberOfDays } from "@/lib/utils";
import { revalidatePath } from "next/cache";

const ClientForm = ({ user }: { user?: UserSchemaTypes }) => {
  const router = useRouter();
  const { toast } = useToast();

  const numberOfDaysRemaining = numberOfDays(subscriptionTypes, user);

  const specificDefaultValue = {
    regNumber: user?.regNumber,
    name: user?.name,
    age: user?.age,
    email: user?.email,
    gender: user?.gender,
    marital: user?.marital,
    address: user?.address,
    phoneNumber: user?.phoneNumber,
    medicalClearance: user?.medicalClearance,
    currentHealthIssue: user?.currentHealthIssue,
    nextOfKin: user?.nextOfKin,
    nextOfKinPhoneNumber: user?.nextOfKinPhoneNumber,
    currentWeight: user?.currentWeight,
    currentHeight: user?.currentHeight,
    dateOfRegistration: user?.dateOfRegistration,
    subscriptionStartingDate: user?.subscriptionStartingDate,
    typeOfSubscription: user?.typeOfSubscription,
    paymentConfirmed: user?.paymentConfirmed,
  };

  const normalDefaultValue = user ? specificDefaultValue : clientDefaultValue;
  const form = useForm<z.infer<typeof clientFormValidation>>({
    resolver: zodResolver(clientFormValidation),
    defaultValues: {
      ...normalDefaultValue,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof clientFormValidation>) => {
    const input = {
      regNumber: values.regNumber,
      name: values.name,
      age: values.age,
      email: values.email,
      gender: values.gender,
      marital: values.marital,
      address: values.address,
      phoneNumber: values.phoneNumber,
      medicalClearance: values.medicalClearance,
      currentHealthIssue: values.currentHealthIssue,
      nextOfKin: values.nextOfKin,
      nextOfKinPhoneNumber: values.nextOfKinPhoneNumber,
      currentWeight: values.currentWeight,
      currentHeight: values.currentHeight,
      typeOfSubscription: values.typeOfSubscription,
      dateOfRegistration: values.dateOfRegistration,
      subscriptionStartingDate: values.subscriptionStartingDate,
      paymentConfirmed: values.paymentConfirmed,
    };
    try {
      if (user) {
        const { error } = await updateMemberAction({ ...input });

        if (error) {
          toast({
            title: "Error Occured",
            description: error,
            className: " toast-container toast-error",
          });
        }
        toast({
          title: "Success",
          description: "Updated Member Details Sucessfully",
          className: " toast-container toast-sucess",
        });

        return;
      }
      const { redirect, error } = await registerMemberAction({
        ...input,
      });
      if (error) {
        toast({
          title: "Error Occured",
          description: error,
          className: " toast-container toast-error",
        });
        throw new Error(error);
      }
      toast({
        title: "Success",
        description: "Member created sucessfully",
        className: " toast-container toast-sucess",
      });
      router.push(redirect!);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12 "
      >
        <section className="space-y-4">
          <div className=" items-center  sm:flex ">
            <div>
              <h1 className="header">Welcome Admin👋</h1>
              <p className="text-dark-700">
                Have a blast registering new clients.
              </p>
            </div>
            {user && (
              <div className="ml-auto mt-7 sm:mt-0">
                <StatusBadge
                  status={numberOfDaysRemaining! > 0 ? "true" : "false"}
                  text={numberOfDaysRemaining! > 0 ? "Active" : "Inactive"}
                ></StatusBadge>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="regNumber"
            placeholder="001"
            disabled={user ? true : false}
            label="Registration Number*"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Name*"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="phoneNumber"
              label="Phone number*"
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

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender*"
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
              label="Marital status*"
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
              placeholder="Lekki Phase 1, Victoria Island, Lagos, Nigeria.

"
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Emergency Contact Information</h2>
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
              label="Medical clearance*"
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
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="currentWeight"
              label="Weight"
              placeholder="Weight in kg"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="currentHeight"
              label="Height"
              placeholder="Height in cm"
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
            <h2 className="sub-header">Membership Details</h2>
          </div>

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="typeOfSubscription"
            label="Type of subscription*"
            disabled={user ? true : false}
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
              label="Registration date*"
              disabled={user ? true : false}
              placeholder="mm/dd/yyyy"
            />
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="subscriptionStartingDate"
              label="Subscribtion date*"
              disabled={user ? true : false}
              placeholder="mm/dd/yyyy"
            />
          </div>
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="paymentConfirmed"
            label="Payment confirmed*"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  disabled={user ? true : false}
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

        <SubmitButton isLoading={isSubmitting}>
          {user ? "EDIT CLIENT DETAILS" : "REGISTER CLIENT"}
        </SubmitButton>
      </form>
    </Form>
  );
};

export default ClientForm;
