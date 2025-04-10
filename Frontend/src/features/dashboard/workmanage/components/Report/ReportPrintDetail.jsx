import React from 'react'
import {useLocation } from "react-router-dom";
import DailyReportPrint from "./DailyReport/DailyReportPrint"
import IncidentReportPrint from "./IncidentReport/IncidentReportPrint"
import MaintenanceReportPrint from "./MaintenanceReport/MaintenanceReportPrint";
import ItemRequestReportPrint from "./ItemRequestReport/ItemRequestReportPrint";
import HandoverReportPrint from "./HandoverReport/HandoverReportPrint";
import TakeoverReportPrint from "./TakeoverReport/TakeoverReportPrint";
const ReportPrintDetail = () => {
  const location = useLocation();
  const report = location.state?.report;
  console.log("report location:",location.state);
  if (!report) {
    return <p className="text-red-500">No report data found.</p>;
  }
  const renderReportPrint = () => {
    switch (report.type) {
      case "Daily Report":
        return <DailyReportPrint report={report}  />;
      case "Incident Report":
        return <IncidentReportPrint report={report} />;
      case "Maintenance Report":
        return <MaintenanceReportPrint report={report} />;
      case "Item Request Report":
        return <ItemRequestReportPrint report={report} />;
      case "Handover Report":
        return <HandoverReportPrint report={report} />;
      case "Takeover Report":
        return <TakeoverReportPrint report={report} />;
      default:
        <p className="text-gray-700">No report available.</p>;
    }
  };
  return (
    <div className=" hidden print:block">
    <div className="max-w-[1000px] mx-auto ">
      {renderReportPrint()}
    </div>
  </div>
  )
}

export default ReportPrintDetail