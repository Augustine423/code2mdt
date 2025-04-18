import { useDispatch, useSelector } from "react-redux";
import { deleteVessel, fetchVessels } from "../../../../../stores/informationData/vesselSlice";
import { useEffect, useState } from "react";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import VesselEmptyStage from "./VesselEmptyStage";
import { usePopup } from "../../../../../hooks/usePopup";
import PaginationAPI from "../../../../../components/PaginationAPI";
import vesselImage from "../../../../../assets/vesselPhoto/shipimage.jpg"
// import image from "../../../../../assets/vesselPhoto/shipimage.jpg"


const VesselsGridView = () => {
  const dispatch = useDispatch();

  const { vessels, loading, error,totalPages, currentPage } = useSelector(
    (state) => state.vessels|| {}
  );
   const popup = usePopup();
   const [page, setPage] = useState(currentPage);
  

  useEffect(() => {
    dispatch(fetchVessels({ page, size: 12 }));
  }, [dispatch, page]);

  console.log("vessels value is", vessels)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if(!vessels) return <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
  <p className="text-white"><VesselEmptyStage/></p>
</div>



    const handleDeleteBtn = async (vesselId) => {
      if (!vesselId) return;
      try {
        await dispatch(deleteVessel(vesselId)).unwrap();
        dispatch(fetchVessels({ page, size: 12 }));
      } catch (error) {
        console.error("Error while deleting vessel:", error);
      }
    };

  return (
    
    <>
    
   
      {/* Grid Content */}
      <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        <div id="printArea" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vessels.map((vessel, i) => (
            <div
              key={i}
            className="rounded-xl overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-[#111111] text-base ">{vessel.name}</h3>
                <div className="relative">
                <button className="p-1 rounded-full hover:bg-gray-100"   onClick={() => popup.open(vessel.id)}>
                  <MoreHorizontal className="w-5 h-5" />
                </button>
                {popup.isOpen && popup.popupData === vessel.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDeleteBtn(vessel.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Trash className="size-5" />
                        <span className=" text-md">Delete</span>
                      </div>
                    </button>
                    <Link
                      to={`/dashboard/vessel-edit/${vessel.id}`}
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
                {popup.isOpen && popup.popupData === vessel.id && <div className="fixed inset-0 z-0" onClick={popup.close} />}

              </div>

              <div className="aspect-[3/2] w-full h-[166px] p-4 flex items-center ">
                <img
                  // src={vessel.shipLogo}
                src={vesselImage}
                  
                  alt={vessel.name}
                  className="w-full h-full  object-cover bg-[#EEEEEE] rounded-lg"
                />
              </div>
           
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Flag:</span>
                  <span className="text-black">
                    {vessel.flag}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">IMO:</span>
                  <span className="text-black">{vessel.imo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">MMSI:</span>
                  <span className="text-black">{vessel.mmsi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Call Sign:</span>
                  <span className="text-black">{vessel.callSign}</span>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  // eslint-disable-next-line no-undef
                  to={`/dashboard/vessel-detail/${vessel.id}`}
                  className="block w-full py-2 text-center text-blue-600 bg-blue-50 rounded-lg hover:text-white transition-colors hover:bg-blue-700"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
    

        <PaginationAPI currentPage={page}
          totalPages={totalPages}
          setPage={setPage} />
      </div>
    
    
    </>
  )
}

export default VesselsGridView











