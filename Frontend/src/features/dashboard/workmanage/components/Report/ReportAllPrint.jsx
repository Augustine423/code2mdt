import React from 'react'
import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import ReportDetailHeader from './ReportDetailHeader';
import ReportPrintDetail from './ReportPrintDetail';
const ReportAllPrint = () => {
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
    <ReportDetailHeader onPrint={handlePrint} />
    <div ref={printRef} className="printable-content">
    <ReportPrintDetail />
  </div>
</div>
  )
}

export default ReportAllPrint