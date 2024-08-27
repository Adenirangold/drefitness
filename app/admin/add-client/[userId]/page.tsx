import ClientForm from "@/components/Form/ClientForm";
import UserDetailsCard from "@/components/UserDetailsCard";
import { users } from "@/constants";
import Image from "next/image";
import React from "react";

function page({ params }: { params: any }) {
  const user = users.find((user) => user.regNumber === params.userId);
  // console.log(user);

  return (
    <div className="flex h-screen max-h-screen  ">
      <section className="remove-scrollbar container  ">
        <div className="sub-container max-w-[860px] flex-1 flex-col  py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <ClientForm user={user}></ClientForm>
          <p className="copyright py-12">© 2024 Drefitness</p>
        </div>
      </section>
      <Image
        src="/assets/images/gym.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[800px]  "
      />
    </div>
  );
}

export default page;
