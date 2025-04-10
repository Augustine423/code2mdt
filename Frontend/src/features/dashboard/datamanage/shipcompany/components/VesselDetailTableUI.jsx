


import { useDispatch, useSelector } from "react-redux";
import VesselDetailRowUI from "./VesselDetailRowUI";
import { useEffect, useState } from "react";
import { fetchVesselsByCompanyId } from "../../../../../stores/informationData/vesselSlice";
import Pagination from "../../shipcompany/components/pagination";

// eslint-disable-next-line react/prop-types
const VesselDetailTableUI = ({ companyId}) => {
  // console.log("Company ID:", companyId);
  const [page, setPage] = useState(0); 
  const dispatch = useDispatch();
  const { vessels , loading, error,totalPages,currentPage } = useSelector((state) => state.vessels);

  const handlePageChange = (newPage) => {
    if (companyId) {
      dispatch(fetchVesselsByCompanyId({ companyId, page: newPage }));
    }
  };


  useEffect(() => {
    if (companyId) {
      dispatch(fetchVesselsByCompanyId({ companyId, page:0 })); // Fetch vessels for the company
    }
  }, [dispatch, companyId]);

 
  
  
  if (loading) {
    return <p>Loading vessels...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-medium text-gray-600">
              <th className="px-4 py-3 rounded-tl-lg">Image</th>
              <th className="px-4 py-3">Vessels</th>
              <th className="px-4 py-3">Flag</th>
              <th className="px-4 py-3">IMO</th>
              <th className="px-4 py-3">MMSI</th>
              <th className="px-4 py-3 rounded-tr-lg">Call Sign</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-y-2">
          {vessels?.length > 0 ? (
              vessels.map((vessel) => (
                <VesselDetailRowUI key={vessel.shipId} vessel={vessel} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No vessels found
                </td>
              </tr>
            )}
          </tbody>
            
        </table>
      {/* Pagination */}
    
          <div className="flex justify-center mt-4 border-red-500">
          <Pagination 
        currentPage={currentPage || 1} 
        totalPages={totalPages || 0}
        onPageChange={handlePageChange}
      />
          </div>
       

      </div>
         
    </div>
  );
};

export default VesselDetailTableUI;