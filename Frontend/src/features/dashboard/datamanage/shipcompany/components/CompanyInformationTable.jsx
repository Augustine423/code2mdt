
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import CompanyInformationRow from "./CompanyInformationRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCompanies } from "../../../../../stores/informationData/companySlice";
import PaginationAPI from "../../../../../components/PaginationAPI";
const CompanyInformationTable = () => {
  const { companies, loading, error,totalPages } = useSelector(
    (state) => state.companies || {}
  );
const [currentPage, setCurrentPage] = useState(1); // Default to page 1

// const [page, setPage] = useState(0);

  const dispatch = useDispatch();
 useEffect(() => {
    dispatch(fetchCompanies({  page:currentPage - 1, size: 10 }));
  }, [dispatch ,currentPage]);// Fetch on page change

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
   <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        <div
          id="printArea"
          className="overflow-x-auto bg-white  rounded-lg "
        >
          <table className="w-full h-full">
            <thead className="bg-gray-50 m-4 ">
              <tr className=" bg-gray-200 p-6 mx-4 rounded-md">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Companies
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Business No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Counry
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Representative
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Phone No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {loading ? (
                <PageLoading />
              ) : companies?.length === 0 ? (
                <NotFound />
              ) : (
                companies.map((company) => (
                  <CompanyInformationRow company={company} key={company.id} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <PaginationAPI  currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage} />
      </div>
    </>
  );
};

export default CompanyInformationTable;
