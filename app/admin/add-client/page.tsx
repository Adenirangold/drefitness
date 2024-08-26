import ClientForm from "@/components/Form/ClientForm";
import ReactivateForm from "@/components/Form/ReactivateForm";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <ClientForm></ClientForm>
          <p className="copyright py-12">© 2024 Drefitness</p>
        </div>
      </section>
      <Image
        src="/assets/images/gym1.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[800px] "
      />
    </div>
  );
}

export default page;
