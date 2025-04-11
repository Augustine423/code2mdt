
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import companyImage from "../../../../../assets/informationdata/sajo logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCompany, fetchCompanies } from "../../../../../stores/informationData/companySlice";
import { Link } from "react-router-dom";
import { usePopup } from "../../../../../hooks/usePopup";
import PaginationAPI from "../../../../../components/PaginationAPI";


const CompanyInformationGrid = () => {
  const dispatch = useDispatch();
  const { companies, loading, error, totalPages } = useSelector((state) => state.companies);
  // console.log("companies", companies);

  const popup = usePopup();
 // Initialize page to 0 (first page)
 const [page, setPage] = useState(0);

 const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  useEffect(() => {
    dispatch(fetchCompanies({  page:currentPage - 1, size: 12 }));
  }, [dispatch ,currentPage]);// Fetch on page change

  // const handlePageChange = (newPage) => {
  //   // API expects 0-based index, but UI shows 1-based
  //   setPage(newPage - 1);
  // };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDeleteBtn = async (companyId) => {
    if (!companyId) return;
    try {
      await dispatch(deleteCompany(companyId)).unwrap();
      dispatch(fetchCompanies({ page, size: 12}));
    } catch (error) {
      console.error("Error while deleting company:", error);
    }
  };

  return (
    <>
   <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
      <div id="printArea" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {
        companies && companies.length > 0 ? (
        companies.map((company) => (
          <div key={company.id} className="rounded-xl overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 flex items-center justify-between">
              <h3 className=" font-semibold text-gray-800 text-base ">{company?.name || "Unknown Name"}</h3>
              <div className="relative">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => popup.open(company.id)}
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
                {popup.isOpen && popup.popupData === company.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDeleteBtn(company.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Trash className="size-5" />
                        <span className=" text-md">Delete</span>
                      </div>
                    </button>
                    <Link
                      to={`/dashboard/company-edit/${company.id}`}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={popup.close}
                    >
                      <div className="flex items-center gap-3">
                        <Edit className="size-5" />
                        <span className=" text-md">Edit</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {popup.isOpen && popup.popupData === company.id && <div className="fixed inset-0 z-0" onClick={popup.close} />}
            </div>

            <div className="aspect-[3/2] w-full h-[166px] p-4 flex items-center">
              {/* <img src={company.coLogo} alt={company.coName} className="w-full h-full object-contain bg-[#EEEEEE] rounded-lg" /> */}
                <img src={companyImage} alt={company.coName} className="w-full h-full object-contain bg-[#EEEEEE] rounded-lg" />
              
            </div>

            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Business No:</span>
                <span className="text-sm font-medium text-gray-800">{company.businessNo}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Country:</span>
                <span className="text-sm font-medium text-gray-800">{company.country}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Representative:</span>
                <span className="text-sm font-medium text-gray-800">{company.representative}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Phone No:</span>
                <span className="text-sm font-medium text-gray-800">{company.phoneNo}</span>
              </div>
            </div>

            <div className="p-4 pt-0  flex justify-center mt-auto">
              <Link to={`/dashboard/company-detail/${company.id}`} className="block w-full py-2 text-center text-blue-600 bg-blue-50 rounded-lg hover:text-white transition-colors duration-200 font-medium hover:bg-blue-700">
                Detail
              </Link>
            </div>
          </div>
        ))
        ): (
          <p>No companies found.</p>
      
      )}
      </div>
      <div className="mt-8">
        <PaginationAPI currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage} />
      </div>
      </div>

      
    </>
  );
};

export default CompanyInformationGrid;

