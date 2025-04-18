import { LayoutGrid, Menu, Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CompanyRegisterPage from "../shipcompany/pages/CompanyRegisterPage";
import CompanyInformationGrid from "../shipcompany/components/CompanyInformationGrid";
import CompanyInformationTable from "../shipcompany/components/CompanyInformationTable";
import { Printer } from "lucide-react";
import printJS from "print-js";
const CompanyDashboardList = () => {
  const selectedItem = useSelector((state) => state.selectedItem); // Global state

  const [activeButton] = useState("overview");
  const [activeButton2, setActiveButton2] = useState("grid");

  const handleGridClick = (button) => {
    setActiveButton2(button);
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

    // Timeout သုံးပြီး Original Content ကို Restore ပြန်လုပ်
    setTimeout(() => {
      document.body.innerHTML = originalContent;
      window.location.reload(); // မလိုရင် ဒီလို Refresh လုပ်ပါ
  }, 100);
};
// const handlePrint = () => {
//   printJS({
//       printable: "printArea",
//       type: "html",
//       css: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
//       scanStyles: false,
//       style: `
//           body { font-family: Arial, sans-serif; padding: 20px; }
//           @media print {
//               body * { visibility: hidden; }
//               #printArea, #printArea * { visibility: visible; }
//               #printArea { position: absolute; left: 0; top: 0; }
//           }
//       `,
//   });
// };


  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex gap-8 pt-6 pb-4 pl-7 border-b border-gray-200">
        <Link
          to="/dashboard/company-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/company-register"
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
      <header className="flex flex-col gap-6 lg:flex-row items-center justify-between pt-8 px-6 lg:px-12 ">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-gray-900">
          {selectedItem.selectedItem}{" "}
          {activeButton === "register" ? "Register" : "List"}
        </h1>

        {/* Search & View Toggle Section */}
        {activeButton !== "register" && (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder={`Search ${selectedItem.selectedItem}...`}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

            {/* View Toggle Buttons */}
            <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-inner">
              <button
                onClick={() => handleGridClick("table")}
                className={`p-2.5 rounded-md transition-all ${
                  activeButton2 === "table"
                    ? "text-primary bg-white shadow-md"
                    : "text-gray-500 hover:bg-white hover:text-gray-700"
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleGridClick("grid")}
                className={`p-2.5 rounded-md transition-all ${
                  activeButton2 === "grid"
                    ? "text-primary bg-white shadow-md"
                    : "text-gray-500 hover:bg-white hover:text-gray-700"
                }`}
              >
                <LayoutGrid className="w-6 h-6" />
              </button>
            </div>
            <div>
              <button
                className=" flex justify-center items-center gap-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                onClick={handlePrint}
              >
                <Printer className="text-gray-400" /> <p>Print</p>
              </button>
            </div>
          </div>
        )}
      </header>
      {/* Content Section */}
      <main id="printArea" className="p-10">
        {selectedItem.selectedItem === "Companies" ? (
          activeButton === "register" ? (
            <CompanyRegisterPage />
          ) : activeButton2 === "table" ? (
            <CompanyInformationTable />
          ) : (
            <CompanyInformationGrid />
          )
        ) : (
          <div className="text-center text-gray-600">
            Please choose a valid item
          </div>
        )}
      </main>
    </>
  );
};

export default CompanyDashboardList;
