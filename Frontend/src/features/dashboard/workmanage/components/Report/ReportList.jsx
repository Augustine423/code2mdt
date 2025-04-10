import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Pagination from "../../../../../components/Pagination";
import { Ellipsis } from "lucide-react";
import { Search, Printer } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../../../../stores/reportData/reportSlice";

import ReportOverviewPopup from "./ReportOverviewPopup";
import ReportPopup from "../../../../../hooks/ReportPopup";


const ReportList = () => {
 


  const dispatch=useDispatch();
  const {reports,loading,error}= useSelector(
    (state)=>state.reports || {}
  );
  useEffect(()=>{
    dispatch(fetchReports());
  },[dispatch])
  console.log("Report Data",reports);

  const combinedReports = reports.flatMap((report, i) => [
    ...(report.dailyReport || []).map(sub => ({ ...sub, type: "Daily Report" })),
    ...(report.incidentReport || []).map(sub => ({ ...sub, type: "Incident Report" })),
    ...(report.maintenanceReport || []).map(sub =>({...sub,type:"Maintenance Report"})),
    ...(report.itemRequestReport || []).map(sub =>({...sub, type:"Item Request Report"})),
    ...(report.handoverReport || []).map(sub =>({...sub, type:"Handover Report"})),
    ...(report.takeoverReport || []).map(sub =>({...sub,type:"Takeover Report"}))
  ]);
  console.log("Combine Report id:",combinedReports)

  const popup = ReportPopup(); // hook instance
  

  if(loading)return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if(!reports) return <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
  <p className="text-white">Not Found</p>
</div>

  return (
    <div className="max-w-1xl mx-auto p-5 mb-5" >
      <div className="bg-white rounded-md p-10 shadow-md overflow-x-auto">
        <table className="border rounded-md w-full">
          <thead className="bg-gray-100 font-semibold text-sm">
            <tr>
              <th className="p-3 text-center">No</th>
              <th className="p-3 text-center">Report No</th>
              <th className="p-3 text-center">Classification</th>
              <th className="p-3 text-center">Author</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center "></th>
            </tr>
          </thead>

          <tbody>
            {combinedReports.map((report,i) => (
              <tr
                key={i}
                className=" border-t text-sm cursor-pointer hover:bg-gray-50"
              >
                <td className="p-3 text-center">{i+1}</td>
                <td className="p-3 text-center">{report.reportNo}</td>
                <td className="p-3 text-center">{report.classification}</td>
                <td className="p-3 text-center">{report.author}</td>
                <td className="p-3 text-center">{report.date}</td>
                <td className="p-3 text-center relative">
                  <button onClick={() => popup.open(report.id)}><Ellipsis /></button>
                  {popup.isOpen(report.id) && <ReportOverviewPopup onClose={popup.close} report={report}/>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default ReportList;
