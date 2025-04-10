import React from "react";
import { FiDownload } from "react-icons/fi";
const MaintenanceReportDetail = ({ report }) => {
  const fileName = report.attachment
    .split("/")
    .pop()
    .split(".")
    .slice(0, -1)
    .join(".");
  return (
    <div>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">
                Report No.
              </div>
              <div className="text-gray-800">{report.reportNo}</div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-1/4 font-semibold text-slate-900">Date</div>
              <div className="text-gray-800">{report.date}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">Vessel</div>
              <div className="text-gray-800">{report.vessel}</div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-1/4 font-semibold text-slate-900">Author</div>
              <div className="text-gray-800">{report.date}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">
                Drone Info.
              </div>
              <div className="text-gray-800">{report.droneInfo}</div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-1/4 font-semibold text-slate-900">
                Maintenance date
              </div>
              <div className="text-gray-800 flex">
                {report?.maintenanceDate && (
                  <span>
                    <span className="mr-1">Start date</span>
                    {report.maintenanceDate.startDate} ~{" "}
                    <span className="mr-1">End date</span>
                    {report.maintenanceDate.endDate}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center ">
              <div className="w-1/4 font-semibold text-slate-900">
                Lead mechanic
              </div>
              <div className="text-gray-800 flex">{report.leadMechanic}</div>
            </div>
            <div className="flex items-center pt-5">
              <div className="w-1/4 font-semibold text-slate-900">
                Date of Occurrence
              </div>
              <div className="text-gray-800 flex">
                {report.dateOfOccurrence}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Maintenance and Repair Items */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="font-semibold text-lg text-gray-800">
            Maintenance and Repair Items
          </h2>
        </div>

        <div className="border-b">
          <div className="mx-10">
            <div className="overflow-x-auto ">
              <table className="min-w-full items-center">
                <thead className="border-b">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium  text-gray-500 w-1/4">
                      Part
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-1/3">
                      Inspection results
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-1/2">
                      Details/Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report?.parts?.map((item, index) => (
                    <tr key={index} className="items-center">
                      <td className="px-4 py-2 text-gray-800">{item.name}</td>
                      <td className="px-4 py-2 text-gray-800">{item.result}</td>
                      <td className="px-4 py-2 text-gray-800">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Used Parts/Materials */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Used Parts/Materials
        </h2>

        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">Model</div>
              <div className="text-gray-800">{report.model}</div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-1/4 font-semibold text-slate-900">
                Stock Quantity
              </div>
              <div className="text-gray-800">{report.stockQuantity}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">
                Serial No.
              </div>
              <div className="text-gray-800">{report.serialNo}</div>
            </div>
            <div className="flex items-center pt-5">
              <div className="w-1/4 font-semibold text-slate-900">Remarks</div>
              <div className="text-gray-800">{report.remarks}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Test results */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Test results</h2>

        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">
                Operation Test
              </div>
              <div className="text-gray-800">{report.operationTest}</div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-1/4 font-semibold text-slate-900">
                Flight Test
              </div>
              <div className="text-gray-800">{report.flightTest}</div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[25%] font-semibold text-slate-900">
                Detail Info.
              </div>
              <div className=" text-gray-800">{report.detailInfo}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Planned taskned tasks */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Planned taskned tasks
        </h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex items-center">
              <div className="w-1/4 font-semibold text-slate-900">
                Operation Test
              </div>
              <div className="text-gray-800">{report.necessaryTasks}</div>
            </div>
            <div className="flex items-center pt-5">
              <div className="min-w-[25%] font-semibold text-slate-900">
                Detail Info.
              </div>
              <div className="text-gray-800">{report.planDetailInfo}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Remark */}
      <div className="mb-8 py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Remark</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex items-center">
              <div className="min-w-[25%] font-semibold text-slate-900">
                Detail Info.
              </div>
              <div className="text-gray-800">{report.remarkDetailInfo}</div>
            </div>
            <div className="flex items-center pt-5">
              <div className="min-w-[25%] font-semibold text-slate-900">
                Attachment
              </div>
              <div className="text-gray-800 ">
                <a href={fileName} download>
                  {fileName}
                  <FiDownload className="inline-block ml-2 text-blue-500 hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Complete Sign */}
      <div className="mb-8 border-b pb-5">
        <div className="border-b pb-5 mb-4">
          <h2 className="font-semibold text-lg text-gray-800 ">Complete Sign</h2>
        </div>
        <div className="mx-10">
          <div className=" flex  items-center ">
            <label htmlFor="" className="min-w-[25%]">Sign</label>
            <div className="flex gap-3">
              <span className="bg-gray-200 px-1 rounded-full inline-block items-center text-center">
                Necessity
              </span>
              <span className=" text-gray-500">Approved Person</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceReportDetail;
