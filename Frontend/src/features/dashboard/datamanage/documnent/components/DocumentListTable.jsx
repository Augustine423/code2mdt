

import { useEffect } from "react";
import PaginationMechanic from "../../../../../components/PaginationMechanic";
import DocumentListRow from "./DocumentListRow";
// import PageLoading from "../../../../../components/PageLoading";
// import NotFound from "../../../../../components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../../../../../stores/informationData/documentSlice";



const DocumentListTable = () => {
  const dispatch=useDispatch();
  
  const {documents} = useSelector(
    (state) => state.documents || {}
  );
  console.log("this is documents",documents)
  
  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);
  
    
    
  



  return (
    <>
     <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        <div id="printArea" className="overflow-x-auto bg-white  rounded-md">
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  No
                </th>
                <th  className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Documents Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Author
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Date
                </th>
                
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {/* {loading ? (
                <PageLoading />
              ) : documentData?.length === 0 ? (
                <NotFound />
              ) : ( */}
              {
                documents.map((document) => (
                  <DocumentListRow document={document} key={document.id} />
                ))
              }
            
            </tbody>
          </table>
        </div>

      {/* Pagination Section */}
      <div className="mb-8">
          <PaginationMechanic />
        </div>
      </div>
    </>
  );
};

export default DocumentListTable;
