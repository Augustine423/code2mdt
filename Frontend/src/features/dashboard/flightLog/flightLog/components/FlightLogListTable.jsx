
import { Download, Ellipsis, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Pagination from "../../../../../components/Pagination";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import FlightLogListRow from "./FlightLogListRow";
import { useEffect } from "react";
import { fetchFlightLogs } from "../../../../../stores/informationData/flightLogInfoSlice";
const FlightLogListTable = () => {
  const { flightlogs, loading, error } = useSelector(
    (state) => state.flightlogs || {}
  );

  const dispatch=useDispatch();

  useEffect(()=>{dispatch(fetchFlightLogs())},[dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  
console.log(flightlogs);
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
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 pl-7">
                  Occurrence time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  File Name
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
              {loading ? (
                <PageLoading />
              ) : flightlogs?.length === 0 ? (
                <NotFound />
              ) : (
                flightlogs.map((flightlog) => (
                  <FlightLogListRow flightlog={flightlog} key={flightlog.id} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default FlightLogListTable;
