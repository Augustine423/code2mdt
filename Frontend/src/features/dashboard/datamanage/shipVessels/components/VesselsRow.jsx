


import { Edit, Ellipsis, Info, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usePopup } from "../../../../../hooks/usePopup";
import { useRef } from "react";
import { usePopupPosition } from "../../../../../hooks/usePopupPosition";
import { deleteVessel, fetchVessels } from "../../../../../stores/informationData/vesselSlice";
import vesselImage from "../../../../../assets/vesselPhoto/shipimage.jpg"
// eslint-disable-next-line react/prop-types
const VesselsRow = ({ vessel:{id,logo,name,flag,imo,mmsi,callSign} }) => {

 

  const dispatch = useDispatch();
  const popup = usePopup();
  const rowRef = useRef(null);
  
  // Use the custom hook for popup positioning
  const { popupRef, popupStyle } = usePopupPosition(
    popup.isOpen && popup.popupData === id,
    rowRef
  );

  const handleDeleteBtn = async (vesselId) => {
    if (!vesselId) return;
    try {
      await dispatch(deleteVessel(vesselId)).unwrap();
      dispatch(fetchVessels());
    } catch (error) {
      console.error("Error while deleting vessel:", error);
    } finally {
      popup.close();
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-100 relative group border-b" ref={rowRef}>
        {/* <td className="px-4 py-3">
          <div className=" h-10 bg-gray-50 rounded flex items-center justify-center">
            <img
                // eslint-disable-next-line react/prop-types
                // src={vessel.shipLogo}
                 src="/src/assets/vesselPhoto/shipimage.jpg"
              alt={vessel.shipName}
              className="w-[69px] h-auto object-contain"
            />
          </div>
        </td> */}
     <td className="px-4 py-3">
 
    <img 
      // src={company.coLogo} 
      src={vesselImage}
      alt={name}
      className="w-[90px] h-[40px] object-cover  border border-gray-300 shadow-sm"
    />

      </td>
        <td className="px-4 py-3 text-sm">{name}</td>
        <td className="px-4 py-3 text-sm">{flag}</td>
        <td className="px-4 py-3 text-sm">{imo}</td>
        <td className="px-4 py-3 text-sm">{mmsi}</td>
        <td className="px-4 py-3 text-sm">{callSign}</td>

        <td className="px-4 py-3 text-sm">
          <button
           onClick={() => popup.open(id)}
            // to={`/dashboard/vessel-detail/${id}`}
            className="text-gray-400 hover:text-gray-600"
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
                to={`/dashboard/vessel-edit/${id}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Link>
              <Link
                to={`/dashboard/vessel-detail/${id}`}
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
    </>
  );
};

export default VesselsRow;
