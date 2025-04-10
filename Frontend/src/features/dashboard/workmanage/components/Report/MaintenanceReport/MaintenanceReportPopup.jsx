import React from "react";

const MaintenanceReportPopup = ({ onClose }) => {
  const closePopup = () => {
    onClose();
  };
  console.log(closePopup);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-md py-5 px-10 fixed top-1/2 left-1/3 -translate-y-1/2 z-50">
        <h2 className="font-semibold text-lg text-start">
          Do you want to sign the completion of the maintenance/repair of the
          above report?
        </h2>
        <div className="flex flex-row justify-start py-7">
          <label
            htmlFor="admonition"
            className="text-gray-800 pr-5 font-semibold"
          >
            Admonition
          </label>
          <input
            type="text"
            id="admonition"
            placeholder="Please Enter"
            className="px-2 py-1 border rounded-md w-full"
          />
        </div>
        <div className="flex flex-row gap-5 items-center">
          <button
            className="border border-gray-400 px-16 py-2 rounded-md"
            onClick={closePopup}
          >
            Cancel
          </button>
          <button className="bg-blue-200 text-blue-500 px-20 py-2 mx-12 rounded-md">
            Sign
          </button>
          <button className="bg-orange-200 text-orange-500 px-16 py-2 rounded-md">
            Sign Refusal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceReportPopup;
