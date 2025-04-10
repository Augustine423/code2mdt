import React from "react";
import { useLocation } from "react-router-dom";
import DailyReportPopup from "./DailyReport/DailyReportPopup";
import MaintenanceReportPopup from "./MaintenanceReport/MaintenanceReportPopup";
import ItemRequestReportPopup from "./ItemRequestReport/ItemRequestReportPopup";
import HandoverReportPopup from "./HandoverReport/HandoverReportPopup";
import TakeoverReportPopup from "./TakeoverReport/TakeoverReportPopup";
const ReportPopupDetail = ({onClose}) => {
  const location = useLocation();
  const reportPopup = location.state?.report;
  console.log("report Popup location location:", location.state);
  const renderReportPopupDetail = () => {
    switch (reportPopup.type) {
      case "Daily Report":
        return <DailyReportPopup reportPopup={reportPopup} onClose={onClose} />;
      case "Incident Report":
        return null;
      case "Maintenance Report":
        return <MaintenanceReportPopup reportPopup={reportPopup} onClose={onClose}/>;
      case "Item Request Report":
        return <ItemRequestReportPopup reportPopup={reportPopup} onClose={onClose}/>;
      case "Handover Report":
        return <HandoverReportPopup reportPopup={reportPopup} onClose={onClose}/>;
      case "Takeover Report":
        return <TakeoverReportPopup reportPopup={reportPopup} onClose={onClose}/>;
      default:
        <p className="text-gray-700">No report available.</p>;
    }
  };
  return (
  <div>{renderReportPopupDetail()}</div>
  );
};

export default ReportPopupDetail;
