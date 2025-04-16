
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { fetchDocumentById } from "../../../../../stores/informationData/documentSlice";
import { FiDownload } from "react-icons/fi";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF.js worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocumentDetail = () => {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocumentById(id));
  }, [dispatch, id]);

  const currentDocument = useSelector(
    (state) => state.documents.currentDocument
  );
  const loading = useSelector((state) => state.documents.loading);
  const error = useSelector((state) => state.documents.error);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prev) => prev + offset);
  }

  // Return full file path for both local/public and remote URLs
  const getDocumentUrl = (url) => {
    if (url.startsWith("http")) return encodeURI(url);
    return encodeURI(url); // Already starts with /documentData/...
  };

  const handleDownload = () => {
    const fileUrl = getDocumentUrl(currentDocument.url);

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", currentDocument.name + ".pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p>Loading document...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!currentDocument)
    return <p className="text-red-500">Document not found</p>;

  return (
    <div className="pb-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
        Document title: {currentDocument.name}
      </h1>

      <div className="mt-6 space-y-4 text-sm text-gray-600">
        {/* Date */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
          <span className="text-sm font-medium text-black">Date</span>
          <p className="text-gray-700">{currentDocument.date}</p>
        </div>

        {/* Author */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
          <span className="text-sm font-medium text-black">Author</span>
          <p className="text-gray-700">{currentDocument.author}</p>
        </div>

        {/* Insert File */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
          <span className="text-sm font-medium text-black">Insert File</span>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700">{currentDocument.name}</p>
            <button
              onClick={handleDownload}
              className="hover:text-blue-700 transition-colors"
            >
              <FiDownload className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border shadow">
        <div className="flex justify-center p-4">
          <Document
            file={getDocumentUrl(currentDocument.url)} // "/documentData/pdf1.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div>Loading PDF...</div>}
            error={<div className="text-red-500">Failed to load PDF</div>}
          />



        </div>

        {numPages && (
          <div className="flex items-center justify-center gap-4 p-4 bg-gray-100">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => changePage(1)}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentDetail;
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Document, Page} from "react-pdf";
// import { useEffect, useState } from "react";
// import { fetchDocumentById } from "../../../../../stores/informationData/documentSlice";
// import { FiDownload } from "react-icons/fi";


// // import { pdfjs } from "react-pdf";



// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// // import "react-pdf/dist/esm/Page/TextLayer.css";

// // Update your worker import to use this syntax:
// // import worker from 'pdfjs-dist/build/pdf.worker.min.js?url';
// // pdfjs.GlobalWorkerOptions.workerSrc = worker;

// const DocumentDetail = () => {
//   const { id } = useParams();
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfLoading, setPdfLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchDocumentById(id));
//   }, [dispatch, id]);

//   const currentDocument = useSelector(
//     (state) => state.documents.currentDocument
//   );
//   const loading = useSelector((state) => state.documents.loading);
//   const error = useSelector((state) => state.documents.error);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPdfLoading(false);
//   }

//   function changePage(offset) {
//     setPageNumber((prev) => prev + offset);
//   }

//   const getDocumentUrl = (url) => {
//     if (!url) return '';
//     if (url.startsWith("http")) return encodeURI(url);
//     return `${import.meta.env.VITE_API_BASE_URL || ''}${url}`;
//   };

//   const handleDownload = () => {
//     const fileUrl = getDocumentUrl(currentDocument.url);

//     fetch(fileUrl)
//       .then(response => response.blob())
//       .then(blob => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", currentDocument.name + ".pdf");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       });
//   };

//   if (loading) return <p>Loading document...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;
//   if (!currentDocument) return <p className="text-red-500">Document not found</p>;

//   return (
//     <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
//       <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
//         Document title: {currentDocument.name}
//       </h1>

//       <div className="mt-6 space-y-4 text-sm text-gray-600">
//         {/* Date */}
//         <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
//           <span className="text-sm font-medium text-black">Date</span>
//           <p className="text-gray-700">{currentDocument.date}</p>
//         </div>

//         {/* Author */}
//         <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
//           <span className="text-sm font-medium text-black">Author</span>
//           <p className="text-gray-700">{currentDocument.author}</p>
//         </div>

//         {/* Insert File */}
//         <div className="grid grid-cols-[120px_1fr] items-start gap-4 pl-10">
//           <span className="text-sm font-medium text-black">Insert File</span>
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-700">{currentDocument.name}</p>
//             <button
//               onClick={handleDownload}
//               className="hover:text-blue-700 transition-colors"
//               disabled={pdfLoading}
//             >
//               <FiDownload className="w-5 h-5 text-blue-600" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* <div className="mt-4 border shadow">
//         <div className="flex justify-center p-4 bg-gray-50 min-h-[500px]">
//         <Document
//         file={getDocumentUrl(currentDocument.url)}
//         onLoadSuccess={onDocumentLoadSuccess}
//         loading={<div>Loading PDF...</div>}
//       >
//         <Page pageNumber={pageNumber} width={800} />
//       </Document>
//         </div>

//         {numPages && (
//           <div className="flex items-center justify-center gap-4 p-4 bg-gray-100">
//             <button
//               onClick={() => changePage(-1)}
//               disabled={pageNumber <= 1}
//               className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span>
//               Page {pageNumber} of {numPages}
//             </span>
//             <button
//               onClick={() => changePage(1)}
//               disabled={pageNumber >= numPages}
//               className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default DocumentDetail;