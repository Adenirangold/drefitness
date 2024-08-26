import AddClientButton from "@/components/AddClientButton";
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import { data } from "@/constants";
import Image from "next/image";
import React from "react";

function AdminPage() {
  return (
    <div className="mx-auto flex max-w-8xl flex-col space-y-14">
      <main className="admin-main">
        <section className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="space-y-4 sm:mr-auto">
              <h1 className="header">Welcome Admin 👋</h1>
              <p className="text-dark-700">
                Start the day with managing clients information
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <AddClientButton></AddClientButton>
            </div>
          </div>
        </section>
        <DataTable data={data} columns={columns}></DataTable>
      </main>
    </div>
  );
}

export default AdminPage;
