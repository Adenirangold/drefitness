import ClientForm from "@/components/Form/ClientForm";
import React from "react";

function page() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <ClientForm></ClientForm>
        </div>
      </section>
    </div>
  );
}

export default page;
