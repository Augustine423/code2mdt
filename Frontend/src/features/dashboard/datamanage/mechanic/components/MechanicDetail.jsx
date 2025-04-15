


import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../components/Pagination";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { fetchVesselsByCompanyId } from "../../../../../stores/informationData/vesselSlice";
import MaintenanceRecordMechanicTable from "./MaintenanceRecordMechanicTable";
import { fetchMechanicInfoById } from "../../../../../stores/informationData/mechanicInfoSlice";


const MechanicDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Fetch company details when the component mounts
  useEffect(() => {
    dispatch(fetchMechanicInfoById(id));
  }, [dispatch, id]);

  // Access the fetched company details from the Redux store
  const currentMechanic = useSelector((state) => state.mechanics?.currentMechanic);
  console.log(currentMechanic);

  const loading = useSelector((state) => state.mechanics?.loading);
  const error = useSelector((state) => state.mechanics?.error);

  // Display loading or error states
  if (loading) {
    return <p>Loading mechanic details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Prevent rendering if currentMechanic is undefined
  if (!currentMechanic) {
    return <p className="text-red-500">Mechanic not found.</p>;
  }

  console.log("Mechanic ID:", currentMechanic); //localhost:8080/aioceaneye/mechanics/10

  return (
    <>
      {/* Company Details Card */}
      <div id="printArea" className="bg-white rounded-md shadow-md p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Mechanics name</h2>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
  {/* Mechanic Image */}
  <div className="col-span-1 flex items-center justify-center">
  <div className="w-[280px] h-[150px] rounded-xl overflow-hidden shadow-lg duration-300 hover:scale-105 hover:shadow-xl bg-white flex items-center justify-center">
    <img
      src={currentMechanic.image}
      alt={currentMechanic.name}
      className="object-cover"
    />
  </div>
</div>



  {/* Mechanic Details */}
  <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-300">
    
    {/* Mechanic Name & Employee No in One Row */}
    <div className="col-span-2 flex justify-between items-center border-y border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Mechanic</span>
          <span className="text-sm text-gray-600">{currentMechanic.name}</span>
        </div>
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Employee No</span>
          <span className="text-sm text-gray-600">{currentMechanic.employee_no}</span>
        </div>
      </div>
    </div>

 {/* Position */} {/* Email */}
    <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Position</span>
          <span className="text-sm text-gray-600">{currentMechanic.position}</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">E-mail</span>
        <span className="text-sm text-gray-600">{currentMechanic.email}</span>
        </div>
      </div>
    </div>

 {/* Phone No */}{/* Signature */}
    <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Phone No</span>
        <span className="text-sm text-gray-600">{currentMechanic.ph_number}</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Sign</span>
      {/* <span className="text-sm text-gray-600">{currentMechanic.sign}</span> */}
      <div className=" rounded-xl overflow-hidden  duration-300 hover:scale-105 hover:shadow-xl bg-white flex items-center justify-center">
    <img
      src={currentMechanic.sign}
      alt={currentMechanic.name}
      className="object-content text-base w-20"
    />
  </div>
        </div>
      </div>
    </div>

  </div>
</div>

        {/* Vessels List */}
        <div className="pt-12">
          <h2 className="text-lg font-bold mb-4">Maintenance Record</h2>

          <MaintenanceRecordMechanicTable  />
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default MechanicDetail;
