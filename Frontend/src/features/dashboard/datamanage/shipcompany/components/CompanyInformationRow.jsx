

import { Ellipsis, Trash2, Edit, Info } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCompany, fetchCompanies } from "../../../../../stores/informationData/companySlice";
import companyImage from "../../../../../assets/informationdata/sajo logo.png";
import { usePopup } from "../../../../../hooks/usePopup";
import { useRef, useState } from "react";
import { usePopupPosition } from "../../../../../hooks/usePopupPosition";


const CompanyInformationRow = ({ company:{id,name,logo,businessNo,country,representative,phoneNo} }) => {
  const dispatch = useDispatch();
  const popup = usePopup();
  const rowRef = useRef(null);
  
  // Use the custom hook for popup positioning
  const { popupRef, popupStyle } = usePopupPosition(
    popup.isOpen && popup.popupData === id,
    rowRef
  );
 const [page, setPage] = useState(0);

  const handleDeleteBtn = async (companyId) => {
    if (!companyId) return;
    try {
      await dispatch(deleteCompany(companyId)).unwrap();
      dispatch(fetchCompanies({ page, size: 10}));
    } catch (error) {
      console.error("Error while deleting company:", error);
    } finally {
      popup.close();
    }
  };

  return (
    <tr className="hover:bg-gray-100 relative group border-b" ref={rowRef}>
      {/* Logo */}
      <td className="px-4 py-3">
        <div className="h-10 bg-gray-50 rounded flex items-center justify-center">
          <img 
            // src={company.coLogo} 
              src="/src/assets/informationdata/sajo logo.png"
            src={ companyImage}
            alt={name} 
            className="w-[69px] h-auto object-contain" 
          />
        </div>
      </td>

      {/* Company Information */}
      <td className="px-4 py-3 text-sm">{name}</td>
      <td className="px-4 py-3 text-sm">{businessNo}</td>
      <td className="px-4 py-3 text-sm">{country}</td>
      <td className="px-4 py-3 text-sm">{representative}</td>
      <td className="px-4 py-3 text-sm">{phoneNo}</td>
      
      {/* More Options Button */}
      <td className="px-4 py-3 text-sm relative">
        <button
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
          onClick={() => popup.open(id)}
          aria-label="More options"
        >
          <Ellipsis />
        </button>

        {popup.isOpen && popup.popupData === id && (
          <>
            {/* Overlay that captures clicks outside the popup */}
            <div 
              className="fixed inset-0 z-40 bg-transparent" 
              onClick={popup.close} 
            />
            
            {/* Popup menu */}
            <div 
              ref={popupRef}
              className="fixed w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50"
              style={{
                top: popupStyle.top,
                right: popupStyle.right
              }}
            >
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={() => handleDeleteBtn(id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
              <Link
                to={`/dashboard/company-edit/${id}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Link>
              <Link
                to={`/dashboard/company-detail/${id}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Info className="w-4 h-4 mr-2" /> Details
              </Link>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

export default CompanyInformationRow;
