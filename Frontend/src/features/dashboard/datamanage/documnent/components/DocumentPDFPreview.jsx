
// import { Document, Page} from "react-pdf";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import { pdfjs } from 'react-pdf';

// import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?url';

// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// const DocumentPDFPreview = ({ fileUrl }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//   }

//   return (
  
//     <div className="rounded-lg overflow-hidden w-[1000px] mx-auto pdf-div px-[50px] pt-[50px] ">
//   {/* PDF Display Area */}
//   <div className="flex justify-center  ">
//     <Document
//       file={fileUrl}
//       onLoadSuccess={onDocumentLoadSuccess}
//       loading={
//         <div className="text-gray-600 flex items-center justify-center h-80">Loading PDF...</div>
//       }
//       error={
//         <div className="text-red-500 flex items-center justify-center h-80">Failed to load PDF</div>
//       }
//       useWorker={true}

     
//     >
//       <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} className="shadow-md" scale={0.5} />
//     </Document>
//   </div>

//   {/* Navigation Controls */}
//   {numPages && (
//     <div className="flex items-center justify-between gap-4 p-4 ">
//       <button
//         onClick={() => changePage(-1)}
//         disabled={pageNumber <= 1}
//         className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300 disabled:opacity-50"
//       >
//         <ChevronLeft className="w-4 h-4" />
//         Previous
//       </button>

//       <span className="text-sm font-medium text-gray-700">
//         Page {pageNumber} of {numPages}
//       </span>

//       <button
//         onClick={() => changePage(1)}
//         disabled={pageNumber >= numPages}
//         className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300 disabled:opacity-50"
//       >
//         Next
//         <ChevronRight className="w-4 h-4" />
//       </button>
//     </div>
//   )}
// </div>

//   );
// };

// export default DocumentPDFPreview;


// import { Document, Page } from "react-pdf";
// import { useRef, useState } from "react";
// import { pdfjs } from "react-pdf";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";
// import { ChevronLeft, ChevronRight,  Printer, Search, ZoomIn, ZoomOut } from "lucide-react"
// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// const DocumentPDFPreview = ({ fileUrl }) => {


//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1)
//   const [zoomLevel, setZoomLevel] = useState(100)
//   const [isLoading, setIsLoading] = useState(true)
//   const containerRef = useRef(null)

//   const handleZoomIn = () => {
//     setZoomLevel((prev) => Math.min(prev + 10, 200))
//   }

//   const handleZoomOut = () => {
//     setZoomLevel((prev) => Math.max(prev - 10, 50))
//   }

//   const handleNextPage = () => {
//     if (numPages && pageNumber < numPages) {
//       setPageNumber(pageNumber + 1)
//     }
//   }

//   const handlePrevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1)
//     }
//   }

//   return (
//     // <div className="max-w-5xl mx-auto px-6 py-8 ">
    

//     //   <div className="h-[80vh] overflow-y-auto space-y-8 px-4">
//     //     <Document
//     //       file={fileUrl}
//     //       onLoadSuccess={onDocumentLoadSuccess}
//     //       loading={<div className="text-center py-20 text-gray-500">Loading PDF...</div>}
//     //       error={<div className="text-center py-20 text-red-500">Failed to load PDF</div>}
//     //     >
//     //       {Array.from(new Array(numPages), (_, index) => (
//     //         <Page
//     //           key={`page_${index + 1}`}
//     //           pageNumber={index + 1}
//     //           renderAnnotationLayer={false}
//     //           renderTextLayer={false}
//     //           scale={0.5}
//     //           className="shadow-md mx-auto"
//     //         />
//     //       ))}
//     //     </Document>
//     //   </div>
//     // </div>
//     <>
    
//     <div className="bg-gray-100 p-2 flex items-center justify-between border-b">
//         <div className="flex items-center space-x-2">
//           <button
//             className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             onClick={handlePrevPage}
//             disabled={pageNumber <= 1}
//           >
//             <ChevronLeft size={18} />
//           </button>
//           <button
//             className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             onClick={handleNextPage}
//             disabled={numPages !== null && pageNumber >= numPages}
//           >
//             <ChevronRight size={18} />
//           </button>
//           <span className="text-sm text-gray-600">
//             {pageNumber} / {numPages || "-"}
//           </span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="p-1.5 rounded hover:bg-gray-200" onClick={handleZoomOut} disabled={zoomLevel <= 50}>
//             <ZoomOut size={18} />
//           </button>
//           <span className="text-sm text-gray-600">{zoomLevel}%</span>
//           <button className="p-1.5 rounded hover:bg-gray-200" onClick={handleZoomIn} disabled={zoomLevel >= 200}>
//             <ZoomIn size={18} />
//           </button>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="p-1.5 rounded hover:bg-gray-200">
//             <Search size={18} />
//           </button>
//           <button className="p-1.5 rounded hover:bg-gray-200">
//             <Printer size={18} />
//           </button>
//         </div>
//       </div>

//       {/* PDF Content */}
//       <div ref={containerRef} className="bg-gray-200 p-4 flex justify-center min-h-[500px] overflow-auto">
//         {isLoading && (
//           <div className="flex items-center justify-center w-full h-full">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//           </div>
//         )}

//         <Document
//           file={fileUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={
//             <div className="flex items-center justify-center w-full h-full">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//             </div>
//           }
//         >
//           <Page
//             pageNumber={pageNumber}
//             scale={zoomLevel / 100}
//             renderTextLayer={false}
//             renderAnnotationLayer={false}
//             className="shadow-md"
//           />
//         </Document>
//       </div>
//     </>
//   );
// };

// export default DocumentPDFPreview;

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const DocumentPDFPreview = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(1.5);
        },
        onExitFullScreen: (zoom) => {
          zoom(1);
        },
      },
    },
  });

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 ">
     
      <div className="h-[80vh] bg-white rounded-lg shadow-inner overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            theme="dark"
            renderError={(error) => (
              <div className="flex flex-col items-center justify-center h-full p-4 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p>PDF 문서를 불러오는데 실패했습니다</p>
                <p className="text-sm mt-2">{error.message}</p>
              </div>
            )}
            renderLoader={() => (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p>PDF 문서를 불러오는 중...</p>
              </div>
            )}
          />
        </Worker>
      </div>

     
    </div>
  );
};

export default DocumentPDFPreview;