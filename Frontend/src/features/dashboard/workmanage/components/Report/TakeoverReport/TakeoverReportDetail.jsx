import React from "react";

const TakeoverReportDetail = ({ report }) => {
  return (
    <>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Report No.
              </div>
              <div className="text-gray-800">{report.reportNo}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Date
              </div>
              <div className="text-gray-800">{report.date}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Author
              </div>
              <div className="text-gray-800">{report.author}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Vessel
              </div>
              <div className="text-gray-800">{report.vessel}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Takeover Date
              </div>
              <div className="text-gray-800 flex">
                {report?.takeover_date && (
                  <span>
                    <span className="mr-1">Start date</span>
                    {report.takeover_date.startDate} ~{" "}
                    <span className="mr-1">End date</span>
                    {report.takeover_date.endDate}
                  </span>
                )}
              </div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Team Name
              </div>
              <div className="text-gray-800">{report.team_name}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Transferor
              </div>
              <div className="text-gray-800">{report.transferor}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Transferee
              </div>
              <div className="text-gray-800">{report.transferee}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Manager
              </div>
              <div className="text-gray-800">{report.manager}</div>
            </div>
            <div className="flex pt-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Remarks
              </div>
              <div className="text-gray-800">{report.remarks}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Takeover Detail */}
      <div className="mb-8 py-5">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center ">
            <h2 className="font-semibold text-lg text-gray-800">
              Takeover Detail
            </h2>
          </div>
        </div>
        <div className="border-b pb-3">
          <table className="w-full">
            <tr className="border-b">
              <th className="text-gray-700 px-4 text-start text-base w-20">
                No
              </th>
              <th className="text-gray-700 px-4 text-start text-base w-44">
                Work detail
              </th>
              <th className="text-gray-700 px-4 text-start text-base w-3 px-5">
                Remarks
              </th>
            </tr>
            <tbody className="border-b">
              {report?.work_details?.map((row, i) => (
                <tr key={i}>
                  <td className="py-3 px-4 ">{row.no}</td>
                  <td className="py-3 px-4 ">{row.work_detail}</td>
                  <td className="py-3 px-4 ">{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex py-5 mx-5">
            <div className="font-semibold min-w-[23%] text-slate-900">
              Reference
            </div>
            <div className="text-gray-800">{report.takeoverReference}</div>
          </div>
        </div>
        <div className="border-b">
          <div className="mx-10">
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Takeover Sign
              </div>

              <div className="flex gap-5">
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Transfer items/assets */}
      <div className="mb-8 ">
        <div className="border-b py-5 ">
          <h2 className="font-semibold text-lg text-gray-800">
            Transfer items/assets
          </h2>
        </div>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex w-full ">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  No.
                </div>
                <div className="text-gray-800">{1}</div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Classification
                </div>
                <div className="text-gray-800">{report.classification}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Name
                </div>
                <div className="text-gray-800">{report.itemName}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Status
                </div>
                <div className="text-gray-800">{report.status}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Location
                </div>
                <div className="text-gray-800">{report.location}</div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Reference
                </div>
                <div className="text-gray-800">{report.itemReference}</div>
              </div>
            </div>
            <div className="flex w-full pt-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Required Actions
                </div>
                <div className="text-gray-800">{report.requiredActions}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="mx-10">
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Takeover Sign
              </div>

              <div className="flex gap-5">
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Unresolved tasks */}
       <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Unresolved tasks
        </h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                No.
              </div>
              <div className="text-gray-800">{1}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Unresolved tasks
              </div>
              <div className="text-gray-800">{report.unresolvedTasks}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Progress Status
              </div>
              <div className="text-gray-800">{report.progressStatus}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Planned tasks
              </div>
              <div className="text-gray-800">{report.plannedTasks}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Remarks
              </div>
              <div className="text-gray-800">{report.remarks}</div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="mx-10">
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Takeover Sign
              </div>

              <div className="flex gap-5">
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
                <div className="flex gap-3">
                  <div>
                    <span className="bg-blue-200 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">
                      Completion
                    </span>
                    <p className="px-3 pt-2">text</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Approved Person (2025.02.18 Completion)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Message */}
      <div className="mb-8 py-5">
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-lg font-semibold text-gray-800">Message</h2>
        </div>
        <div className="py-5 border-b ">
          <div className="mx-10">
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Message
              </div>
              <div className="text-gray-800">{report.message}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Sign */}
      <div className="mb-8 ">
        <div className="border-b py-5 ">
          <h2 className="text-lg font-semibold text-gray-800">Sign</h2>
        </div>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex w-full gap-5 items-center">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Handover Internal Pilot
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-200 text-gray-500 px-2 rounded-full inline-flex items-center justify-center">
                    SignNecessity
                  </span>
                  <span className="text-gray-500 text-base">
                    Approved Person
                  </span>
                </div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Handover External Pilot
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-200 px-2 text-gray-500 rounded-full inline-flex items-center justify-center">
                    SignNecessity
                  </span>
                  <span className="text-gray-500 text-base">
                    Approved Person
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-5 items-center py-10">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Takeover Internal Pilot
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-200 text-gray-500 px-2 rounded-full inline-flex items-center justify-center">
                    SignNecessity
                  </span>
                  <span className="text-gray-500 text-base">
                    Approved Person
                  </span>
                </div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Takeover External Pilot
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-200 px-2 text-gray-500 rounded-full inline-flex items-center justify-center">
                    SignNecessity
                  </span>
                  <span className="text-gray-500 text-base">
                    Approved Person
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-5 items-center">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Manager
                </div>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-200 text-gray-500 px-2 rounded-full inline-flex items-center justify-center">
                    SignNecessity
                  </span>
                  <span className="text-gray-500 text-base">
                    Approved Person
                  </span>
                </div>
              </div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TakeoverReportDetail;
