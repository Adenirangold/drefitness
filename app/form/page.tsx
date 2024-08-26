import ClientForm from "@/components/Form/ClientForm";
import ReactivateForm from "@/components/Form/ReactivateForm";
import React from "react";

function page() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          {/* <ClientForm></ClientForm> */}
          <ReactivateForm></ReactivateForm>
        </div>
      </section>
    </div>
  );
}

export default page;
