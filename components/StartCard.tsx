import { filteredMembers } from "@/lib/action";
import React from "react";

async function StartCard() {
  const { inactive, active } = await filteredMembers();
  const numberActive = active.length;
  const numberInactive = inactive.length;
  const allMembers = numberActive + numberInactive;

  return (
    <div className="stat-card flex-row">
      <div className="flex gap-4 items-center">
        <h2 className="text-25-bold  text-blue-500">{allMembers}</h2>
        <p className="text-14-regular">Registered Member</p>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-25-bold text-green-700">{numberActive}</h2>
        <p className="text-14-regular">Active Members</p>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-25-bold text-red-700">{numberInactive}</h2>
        <p className="text-14-regular">Inactive Members</p>
      </div>
    </div>
  );
}

export default StartCard;
