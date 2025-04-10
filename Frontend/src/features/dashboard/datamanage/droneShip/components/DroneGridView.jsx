import { MoreHorizontal } from "lucide-react"
import Pagination from "../../../../../components/Pagination"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchDroneInfos } from "../../../../../stores/informationData/droneSlice";
import { useEffect } from "react";
import { usePopup } from "../../../../../hooks/usePopup";

const DroneGridView = () => {

//   const dispatch = useDispatch();

   const dispatch = useDispatch();
  
      const popup = usePopup();
  
    const { drones, loading, error } = useSelector((state) => state.drones || {});
    
  
    useEffect(() => {
      dispatch(fetchDroneInfos());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!drones)
      return (
        <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
          <p className="text-white">
            Drone Empty.
          </p>
        </div>
      );
  
  

//   useEffect(() => {
//     dispatch(fetchDrones());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if(!drones) return <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
//   <p className="text-white">Drone Empty</p>
// </div>

//   console.log(drones);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        {/* Grid Content */}
        <div
          id="printArea"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
           {drones.map((drone) => (
      <div className="rounded-xl overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-shadow duration-300" key={drone.id}>
        {/* Header Section */}
        <div className="p-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{drone.serial_no}</h3>
          <button className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Image Section */}
        <div className="aspect-[3/2] w-full h-[166px] p-4 flex items-center">
          <img
            src={drone.image}  // Replace with actual drone image URL
            alt="series"
            className="object-cover bg-[#EEEEEE] rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Control No:</span>
            <span className="text-sm font-medium text-gray-800">{drone.control_no}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Drone ID:</span>
            <span className="text-sm font-medium text-gray-800">{drone.drone_id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">FC Version Info:</span>
            <span className="text-sm font-medium text-gray-800">{drone.id_fc_version_info}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">D/L color ID:</span>
            <span className="text-sm font-medium text-gray-800">{drone.color_id}</span>
          </div>
        </div>

        {/* Detail Button Section */}
        <div className="p-4 pt-0">
          <Link
            to={`/dashboard/drone-detail/${drone.id}`}
            className="block w-full py-2 text-center text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium"
          >
            Detail
          </Link>
        </div>
      </div>
    ))}
 
        
        </div>

        {/* Pagination Section */}
        <div className="mt-8">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default DroneGridView