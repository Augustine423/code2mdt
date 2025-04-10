import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";
const ReportOverviewPopup = ({ onClose, report }) => {
  const popupRef = useRef(null);
  const closePopup = () => {
    onClose();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup(); // Use your custom close function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={popupRef}
      className="px-1 py-1 bg-white w-32 rounded-md shadow-md overflow-auto z-50 absolute "
    >
       <Link
        to={`/dashboard/report-delete/${report.id}`}
        state={{ report }}
        className=" text-black rounded-md "
      >
      <div className="flex items-center text-gray-500 hover:bg-gray-200 px-2 py-1 rounded-md">
        <BsFillTrash3Fill className="size-4" />
        <span className="text-base ml-3">Delete</span>
      </div>
      </Link>
      <Link
        to={`/dashboard/report-edit/${report.id}`}
        state={{ report }}
        className=" text-black rounded-md "
      >
      <div className="flex items-center text-gray-500 hover:bg-gray-200 px-2 py-1 rounded-md">
        <FaEdit className="size-4" />
        <span className="text-base ml-3">Edit</span>
      </div>
      </Link>
      <Link
        to={`/dashboard/report-detail/${report.id}`}
        state={{ report }}
        className=" text-black rounded-md "
      >
        <div className="flex items-center text-gray-500 hover:bg-gray-200 px-2 rounded-md py-1">
          <TbListDetails className="size-4" />
          <span className="text-base ml-3">Detail</span>
        </div>
      </Link>
    </div>
  );
};

export default ReportOverviewPopup;
