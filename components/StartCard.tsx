import { filteredMembers } from "@/lib/action";
import React from "react";
import Chart from "./Chart";

async function StartCard() {
  const { inactive, active } = await filteredMembers();
  const numberActive = active?.length;
  const numberInactive = inactive?.length;
  const allMembers = numberActive + numberInactive;

  //   stat-card flex-row
  return (
    <div>
      {/* <div className="flex gap-4 items-center">
        <h2 className="text-25-bold  text-blue-500">{allMembers}</h2>
        <p className="capitalize text-14-regular">REGISTERED MEMBERS</p>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-25-bold text-green-700">{numberActive}</h2>
        <p className="text-14-regular">ACTIVE MEMBERS</p>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-25-bold text-red-700">{numberInactive}</h2>
        <p className="text-14-regular">INACTIVE MEMBERS</p>
      </div> */}
      <Chart active={numberActive} inactive={numberInactive}></Chart>
    </div>
  );
}

export default StartCard;
