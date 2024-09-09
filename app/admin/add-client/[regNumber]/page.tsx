import ClientForm from "@/components/Form/ClientForm";
import Spinner from "@/components/Spinner";
import { getMember } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

async function page({ params }: { params: any }) {
  const { data } = await getMember(params.regNumber);
  if (!data) {
    return;
  }
  const {
    regNumber,
    name,
    age,
    email,
    gender,
    marital,
    address,
    phoneNumber,
    medicalClearance,
    currentHealthIssue,
    nextOfKin,
    nextOfKinPhoneNumber,
    currentWeight,
    currentHeight,
    typeOfSubscription,
    dateOfRegistration,
    subscriptionStartingDate,
    paymentConfirmed,
  } = data;
  const user = {
    regNumber,
    name,
    age,
    email,
    gender,
    marital,
    address,
    phoneNumber,
    medicalClearance,
    currentHealthIssue,
    nextOfKin,
    nextOfKinPhoneNumber,
    currentWeight,
    currentHeight,
    typeOfSubscription,
    dateOfRegistration,
    subscriptionStartingDate,
    paymentConfirmed,
  };

  return (
    <div className="flex h-screen max-h-screen  ">
      <section className="remove-scrollbar container  ">
        <div className="sub-container max-w-[860px] flex-1 flex-col  py-10">
          <Link href="/admin" className="cursor-pointer">
            <Image
              src="/assets/images/fitness-logo.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-12 w-fit"
            />
          </Link>
          <Suspense fallback={<Spinner></Spinner>}>
            <ClientForm user={user}></ClientForm>
          </Suspense>
          <p className="copyright py-12">© 2024 Drefitness</p>
        </div>
      </section>
      <Image
        src="/assets/images/gym.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[40vw]"
      />
    </div>
  );
}

export default page;
