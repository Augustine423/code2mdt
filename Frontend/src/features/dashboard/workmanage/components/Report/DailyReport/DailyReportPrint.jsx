import React from "react";
import logo from "../../../../../../assets/MarineDroneTechLogo.png";
const DailyReportPrint = ({ report }) => {
  const today = new Date();
  const formattedDate = `(${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getFullYear()).slice(2)})`;

  const totalFlightRange = report?.operation?.reduce(
    (sum, row) => sum + row.flightRange,
    0
  );
  const totalFlightTime = report?.operation?.reduce(
    (sum, row) => sum + row.flightTime,
    0
  );
  const totalFlightDistance = report?.operation?.reduce(
    (sum, row) => sum + row.flightDistance,
    0
  );
  const totalCoordinates =
    report?.operation?.filter((row) => row.coordinates)?.length || 0;
  const totalPadBuoy = report?.operation.reduce(
    (sum, row) => sum + row.padBuoy,
    0
  );
  const totalCatchQuantity = report?.operation.reduce(
    (sum, row) => sum + row.catchQuantity,
    0
  );
  const totalContributionToCatch = report?.operation.reduce(
    (sum, row) => sum + row.contributionToCatch,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <div className="flex justify-between items-center ">
        <div className="h-24 w-28 ml-0">
          <img src={logo} alt="aiocean logo" className="w-full" />
        </div>
        <div className="flex gap-2">
          <h2 className="font-semibold text-lg">{report.type}</h2>
          <h2 className="font-semibold text-lg">{formattedDate}</h2>
        </div>
        <div className="">
          <h3 className="font-semibold text-base">Document No:</h3>
          <h3 className="font-semibold text-base">{report.reportNo}</h3>
        </div>
      </div>
      <div className="w-full max-w-full overflow-x-auto">
        {/* Basic Info */}
        <div className="py-5 w-full">
          <span className="text-sm font-semibold">1. Basic Information</span>
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full border border-gray-600 border-t-4 border-double border-collapse">
              <tbody>
                <tr>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-1 py-1">
                    Vessel Name
                  </th>
                  <td className="text-blue-500 text-[10px]  px-1 py-1">
                    {report.vessel}
                  </td>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-1 py-1">
                    Location
                  </th>
                  <td className="text-blue-500 text-[10px]  px-1 py-1">
                    <div className="flex gap-3">
                      <div>{report.latitude}</div>
                      <div>{report.longitude}</div>
                    </div>
                  </td>
                  <th className="bg-gray-200 text-[10px] px-1 py-1">
                    Boat Count
                  </th>
                  <td className="text-blue-500 text-[10px]  px-1 py-1">
                    {report.boatCount}
                  </td>
                  <th className="bg-gray-200 text-[10px] px-1 py-1">Author</th>
                  <td className="text-blue-500 text-[10px]">
                    <div className="flex justify-between bg-yellow-300 items-center">
                      <div>{report.author}</div>
                      <div>...</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-200 text-[10px] border-t border-r border-gray-600 px-1 py-1">
                    Fish Hold Status
                  </th>
                  <td className="text-blue-500 text-[10px] border-t border-gray-600  px-1 py-1">
                    {report.fishHoldStatus}
                  </td>
                  <th className="bg-gray-200 text-[10px] border-t border-r border-gray-600 px-1 py-1">
                    Pilot1
                  </th>
                  <td className="text-blue-500 text-[10px] border-t border-gray-600   px-1 py-1">
                    {report.pilot1}
                  </td>
                  <th className="bg-gray-200 text-[10px] border-t border-gray-600  px-1 py-1">
                    Pilot2
                  </th>
                  <td className="text-blue-500 text-[10px] border-t border-gray-600  px-1 py-1">
                    {report.pilot2}
                  </td>
                  <th className="bg-gray-200 text-[10px] px-1 py-1 border-t border-gray-600 ">
                    Checker
                  </th>
                  <td className="text-blue-500 text-[10px] border-t border-gray-600 ">
                    <div className="flex justify-between bg-yellow-300 items-center">
                      <div>{report.checker}</div>
                      <div>...</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Drone Info */}
        <div className="w-full">
          <div className="flex justify-between">
            <span className="text-sm font-semibold">2. Drone Info</span>
            <span className="text-sm font-semibold">{report.date}</span>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full border border-gray-600 border-t-4 border-double border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-1 py-1">
                    Drone No
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-1 py-1">
                    Flight Count(No)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-1 py-1">
                    Flight Time(m)
                  </th>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-1 py-1">
                    Flight Distance(km)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-2 py-1">
                    Safety Notes
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-1 py-1">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {report?.droneInfo?.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.droneNo}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.flightCount}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.flightTime}
                    </td>
                    <td className="border-t border-gray-600 px-1 border-r py-1 text-[10px] text-center">
                      {row.flightDistance}
                    </td>
                    <td className="border-t border-gray-600 px-2 py-1 text-[10px] text-center">
                      {row.safetyNotes}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Operation and Flight Results */}
        <div className="py-5 w-full">
          <span className="text-sm font-semibold">
            3. Operation and Flight Results
          </span>
          <div className="">
            <table className=" min-w-full table-fixed border border-gray-600 border-t-4 border-double border-collapse ">
              <thead>
                <tr>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-0.5 py-1">
                    Operation Drone
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Flight Distance(km)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Flight Range(km)
                  </th>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-0.5 py-1">
                    Flight Time(m)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Coordinates
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Pad Buoy(No)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Catch Quantity(t)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Contribution to Catch(t)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Battery
                  </th>
                  <th className="bg-gray-200 text-[10px] border-r border-gray-600 px-0.5 py-1">
                    Cruising Altitude(m)
                  </th>
                  <th className="bg-gray-200 text-[10px]  px-0.5 py-1">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {report?.operation?.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.operatingDrone}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.flightDistance}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.flightRange}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center border-r">
                      {row.flightTime}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.coordinates}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                      {row.padBuoy}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center ">
                      {row.catchQuantity}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center ">
                      {row.contributionToCatch}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center ">
                      {row.battery}
                    </td>
                    <td className="border-t border-gray-600 px-1 py-1 text-[10px] text-center ">
                      {row.cruisingAltitude}
                    </td>
                    <td className="border border-gray-600 px-1 py-1 text-[10px] text-center ">
                      {row.notes}
                    </td>
                  </tr>
                ))}
                <tr className=" bg-gray-200">
                  <td className="border-t border-gray-600 px-1 py-1 text-[10px] border-r text-center">
                    Total
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalFlightDistance}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalFlightRange}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] border-r text-center">
                    {totalFlightTime}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalCoordinates}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalPadBuoy}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalCatchQuantity}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    {totalContributionToCatch}
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    -
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] border-r text-center">
                    -
                  </td>
                  <td className=" border-t border-gray-600 px-1 py-1 text-[10px] text-center">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Failure and Defects */}
        <div className="w-full">
          <div className="flex items-center border-b border-gray-600">
            <span className="text-sm font-semibold">
              4. Failure and Defects
            </span>
          </div>
          <div className="py-3 border border-gray-600">
            <ul className="list-disc pl-5">
              <li className="text-sm">{report.failuresAndDefects}</li>
            </ul>
          </div>
        </div>
        {/* Issues */}
        <div className="py-5 w-full">
          <div className="flex items-center border-b border-gray-600">
            <span className="text-sm font-semibold">5. Issues</span>
          </div>
          <div className="py-3 border border-gray-600">
            <ul className="list-disc pl-5">
              {report?.issue?.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Reference file Section */}
        <div className="py-5 w-full">
          <div className="flex items-center border-b border-gray-600">
            <span className="text-sm font-semibold">6. References</span>
          </div>
          <div className="py-3 border border-gray-600">
            <ul className="list-decimal pl-5">
              {report?.referenceFiles?.map((item, index) => {
                const fileName = item
                  .split("/")
                  .pop()
                  .split(".")
                  .slice(0, -1)
                  .join(".");
                return <li key={index}>{fileName}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReportPrint;
