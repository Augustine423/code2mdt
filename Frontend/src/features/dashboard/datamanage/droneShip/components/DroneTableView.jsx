import { useSelector } from "react-redux"
import NotFound from "../../../../../components/NotFound"
import PageLoading from "../../../../../components/PageLoading"
import Pagination from "../../../../../components/Pagination"
import DroneRowView from "./DroneRowView"


const DroneTableView = () => {
  const { drones, loading, error } = useSelector(
    (state) => state.drones|| {}
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
    <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
      <div
        id="printArea"
        className="overflow-x-auto bg-white  rounded-md"
      >
        <table className="w-full">
          <thead className="bg-gray-50 m-4">
            <tr className=" bg-gray-200 p-6 mx-4">
            
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
               Serial No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
             Control No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Drone ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                FC Version Info.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                D/L color ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody className=" ">
            {loading ? (
              <PageLoading />
            ) :  drones?.length === 0 ? (
              <NotFound />
            ) : (
              drones.map((drone) => (
                <DroneRowView  drone={drone} key={ drone.id} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  </>
  )
}

export default DroneTableView