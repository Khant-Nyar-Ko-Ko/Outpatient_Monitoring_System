/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";

const DashboardTreatmentStatus = ({
  latestTreatedStatus,
}: {
  latestTreatedStatus: string;
}) => {
  const patientStatus = latestTreatedStatus || "PENDING";
  const [status, setStatus] = useState<string>(patientStatus);

  useEffect(() => {
    setStatus(patientStatus);
  }, [patientStatus]);

  const generateStatus = (status: string) => {
    switch (status) {
      case "TREATED":
        return {
          buttonClass: "border-green-100",
          buttonIcon: <BsCheck color="green" size="20px" />,
          buttonText: "text-green-600",
        };
      case "UNTREATED":
        return {
          buttonClass: "border-red-100",
          buttonIcon: <BsX color="red" size="20px" />,
          buttonText: "text-red-600",
        };
      case "PENDING":
      default:
        return {
          buttonClass: "border-orange-100",
          buttonIcon: <CgSandClock color="orange" size="16px" />,
          buttonText: "text-orange-600",
        };
    }
  };

  return (
    <div className="relative w-[120px]">
      <button
        className={`flex items-center justify-between w-full px-5 py-2 rounded-lg border ${
          generateStatus(status).buttonClass
        }`}
      >
        <span>{generateStatus(status).buttonIcon}</span>
        <span
          className={`text-sm font-medium ${generateStatus(status).buttonText}`}
        >
          {status.toLowerCase()}
        </span>
      </button>
    </div>
  );
};

export default DashboardTreatmentStatus;
