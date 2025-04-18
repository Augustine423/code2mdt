

import { Edit, Printer } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import VesselDetailUI from "./VesselDetailUI.jsx";
import { deleteVessel, fetchVessels } from "../../../../../stores/informationData/vesselSlice.js";

const VesselDetailHeader = () => {
  const { id } = useParams();

  const selectedItem = useSelector((state) => state.selectedItem); //global state

  const [activeButton, setActiveButton] = useState("overview");
  const [activeButton2, setActiveButton2] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const handleGridClick = (button) => {
    setActiveButton2(button);
  };
  const handleDeleteBtn = async () => {
    if (!id) return; // Ensure ID exists before proceeding

    try {
      setIsDeleting(true); // Optionally show a loading state
      await dispatch(deleteVessel(id)).unwrap(); // Dispatch delete action
      dispatch(fetchVessels()); // Refresh the list of companies
      navigate("/dashboard/vessel-overview"); // Redirect after deletion
    } catch (error) {
      console.error("Error while deleting company:", error);
    } finally {
      setIsDeleting(false);
    }
  };


  const handlePrint = () => {
    const printElement = document.getElementById("printArea");

    if (!printElement) {
        console.error("Error: printArea element not found!");
        return;
    }

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printElement.outerHTML;

    window.print();
    document.body.innerHTML = originalContent; // Restore the original content
};

  return (
    <>
      <div className="flex gap-8 pt-6 px-8 border-b border-gray-200 pb-4">
        <Link
          to={`/dashboard/vessel-overview`}
          onClick={() => handleClick("overview")}
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          Link
          to="/dashboard/vessel-register"
          onClick={() => handleClick("register")}
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "register"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Register
        </Link>
      </div>
      {/* Header */}

      <header className="flex items-center justify-between py-4 lg:gap-4 pl-10">
        <h1 className="text-3xl font-bold">
          {selectedItem.selectedItem}{" "}
          {activeButton === "register" ? "Register" : "Detail Info"}
        </h1>
        {activeButton !== "register" && (
          <div className="flex items-center space-x-4">
            {/* View Toggle (Grid vs Table) */}
            <div className="flex items-center space-x-2 pr-10">
            <button
                className=" flex justify-center items-center gap-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                onClick={handlePrint}
              >
                <Printer className="text-gray-400" /> <p>Print</p>
              </button>
              <button
                onClick={handleDeleteBtn}
                className={`p-2 ${
                  activeButton2 === "transh" ? "text-primary" : ""
                }`}
              >
                <HiOutlineTrash className="w-5 h-5" />
              </button>
              <Link
                to={`/dashboard/vessel-edit/${id}`}
                onClick={() => handleGridClick("edit")}
                className={`p-2 ${
                  activeButton2 === "edit" ? "text-primary" : ""
                }`}
              >
                <Edit className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="p-6 ">
        <VesselDetailUI/>
      </main>
    </>
  );
};

export default VesselDetailHeader;
