
import { Edit, Ellipsis, Info, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePopup } from "../../../../../hooks/usePopup";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { usePopupPosition } from "../../../../../hooks/usePopupPosition";
// import {
//   deletePilot,
//   fetchPilots,
// } from "../../../../../stores/informationData/pilotSlice";

const DroneRowView = ({ drone }) => {
  const dispatch = useDispatch();
  const popup = usePopup();
  const rowRef = useRef(null);

  // Use the custom hook for popup positioning
  const { popupRef, popupStyle } = usePopupPosition(
    popup.isOpen && popup.popupData === drone.id,
    rowRef
  );

  const handleDeleteBtn = async (dronesId) => {
    // if (!dronesId) return;
    // try {
    //   await dispatch(deletedrone(dronesId)).unwrap();
    //   dispatch(fetchdrones());
    // } catch (error) {
    //   console.error("Error while deleting drone:", error);
    // } finally {
    //   popup.close();
    // }
  };

  return (
    <tr id="printArea" className="hover:bg-gray-100 border-b" ref={rowRef}>
      <td className="px-4 py-3">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={drone.image}
            className=" object-cover rounded-full"
          />
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{drone.serial_no}</td>
      <td className="px-4 py-3 text-sm">{drone.control_no}</td>
      <td className="px-4 py-3 text-sm">{drone.drone_id}</td>
      <td className="px-4 py-3 text-sm">{drone.id_fc_version_info}</td>
      <td className="px-4 py-3 text-sm">{drone.color_id}</td>

      {/* <td className="px-4 py-3 text-sm">
          <Link
            to={`/dashboard/drone-detail/${drone.id}`}
            className="text-gray-400 hover:text-gray-600"
          >
            <Ellipsis />
          </Link>
        </td> */}
      <td className="px-4 py-3 text-sm relative">
        <button
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
          onClick={() => popup.open(drone.id)}
          aria-label="More options"
        >
          <Ellipsis />
        </button>

        {popup.isOpen && popup.popupData === drone.id && (
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
                right: popupStyle.right,
              }}
            >
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                // onClick={() => handleDeleteBtn(pilot.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
              <Link
                to={`/dashboard/pilot-edit/${pilot.id}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Link>
              <Link
                to={`/dashboard/pilot-detail/${pilot.id}`}
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

export default DroneRowView;
