import React from "react";

const UserDetailsCard = ({ user }: { user: UserSchemaTypes }) => {
  return (
    <div className="stat-card shadow-lg">
      <div className="flex-between">
        <div className="text-24-bold">User Details</div>
        <div
          className={`status-badge ${
            user.subscriptionActive
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {user.subscriptionActive ? "Active" : "Inactive"}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-16-semibold">
          Reg Number: <span className="text-16-regular">{user.regNumber}</span>
        </div>
        <div className="text-16-semibold">
          Name: <span className="text-16-regular">{user.name}</span>
        </div>
        <div className="text-16-semibold">
          Age: <span className="text-16-regular">{user.age}</span>
        </div>
        <div className="text-16-semibold">
          Email: <span className="text-16-regular">{user.email}</span>
        </div>
        <div className="text-16-semibold">
          Gender: <span className="text-16-regular">{user.gender}</span>
        </div>
        <div className="text-16-semibold">
          Marital Status:{" "}
          <span className="text-16-regular">{user.marital}</span>
        </div>
        <div className="text-16-semibold">
          Address: <span className="text-16-regular">{user.address}</span>
        </div>
        <div className="text-16-semibold">
          Phone: <span className="text-16-regular">{user.phoneNumber}</span>
        </div>
        <div className="text-16-semibold">
          Medical Clearance:{" "}
          <span className="text-16-regular">
            {user.medicalClearance ? "Yes" : "No"}
          </span>
        </div>
        <div className="text-16-semibold">
          Health Issue:{" "}
          <span className="text-16-regular">{user.currentHealthIssue}</span>
        </div>
        <div className="text-16-semibold">
          Next of Kin: <span className="text-16-regular">{user.nextOfKin}</span>
        </div>
        <div className="text-16-semibold">
          Next of Kin Phone:{" "}
          <span className="text-16-regular">{user.nextOfKinPhoneNumber}</span>
        </div>
        <div className="text-16-semibold">
          Weight:{" "}
          <span className="text-16-regular">{user.currentWeight} kg</span>
        </div>
        <div className="text-16-semibold">
          Height:{" "}
          <span className="text-16-regular">{user.currentHeight} cm</span>
        </div>
        <div className="text-16-semibold">
          BMI: <span className="text-16-regular">{user.bmi ?? "N/A"}</span>
        </div>
        <div className="text-16-semibold">
          Cost:{" "}
          <span className="text-16-regular">${user.subscriptionCost}</span>
        </div>
        <div className="text-16-semibold">
          Days Remaining:{" "}
          <span className="text-16-regular">{user.numberOfDaysRemaining}</span>
        </div>
        <div className="text-16-semibold">
          Registered On:{" "}
          <span className="text-16-regular">
            {user.dateOfRegistration.toLocaleDateString()}
          </span>
        </div>
        <div className="text-16-semibold">
          Start Date:{" "}
          <span className="text-16-regular">
            {user.subscriptionStartingDate.toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="shad-primary-btn text-16-semibold py-2 px-4 rounded-lg">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default UserDetailsCard;
