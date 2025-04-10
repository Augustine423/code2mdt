import React, { useRef } from 'react'
import ReportOverviewHeader from "../Report/ReportOverviewHeader";
import ReportList from "../Report/ReportList";
import { useReactToPrint } from "react-to-print";
const ReportOverviewPrint = () => {
    
  const printRef= useRef();
  const handlePrint= useReactToPrint({
    content:()=> printRef.current,
    documentTitle:`Report Overview`,
    onPrintError:()=>alert('Error occurred while printing'),
    onBeforeGetContent: () => {
        return new Promise((resolve) => {
          setTimeout(resolve, 500)
        })
    }
  });
    
  return (
    <div>
        <ReportOverviewHeader onPrint={handlePrint} />
        <div ref={printRef} className="printable-content">
        <ReportList />
      </div>
    </div>
  )
}

export default ReportOverviewPrint