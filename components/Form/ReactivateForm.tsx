"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";

import "react-datepicker/dist/react-datepicker.css";
import { registerFormValidation } from "@/lib/validation";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import { RegisterDefaultValue, subscriptionTypes } from "@/constants";

import SubmitButton from "../SubmitButton";
import { updateMemberAction } from "@/lib/action";
import { toast } from "@/hooks/use-toast";

const ReactivateForm = ({
  client,
  setOpen,
}: {
  client: RegisterSchemaTypes;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof registerFormValidation>>({
    resolver: zodResolver(registerFormValidation),
    defaultValues: {
      ...RegisterDefaultValue,
      regNumber: client.regNumber,
      name: client.name,
    },
  });
  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof registerFormValidation>) => {
    const input = {
      regNumber: values.regNumber,
      name: values.name,
      subscriptionStartingDate: values.subscriptionStartingDate,
      typeOfSubscription: values.typeOfSubscription,
      paymentConfirmed: values.paymentConfirmed,
    };
    console.log(values);
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
      description: `Membership with registration number ${client.regNumber} has been reactivated.`,
      className: " toast-container toast-sucess",
    });
    setOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="capitalize">Subcription Details</h2>
          </div>

          {/*  */}

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="regNumber"
            placeholder="001"
            label="Registration Number"
            disabled
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            disabled
            label="Name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
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
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="subscriptionStartingDate"
            label="Subscribtion date"
            placeholder="mm/dd/yyyy"
          />
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

        <SubmitButton isLoading={isSubmitting}>RENEW SUBSCRIPTION</SubmitButton>
      </form>
    </Form>
  );
};

export default ReactivateForm;
