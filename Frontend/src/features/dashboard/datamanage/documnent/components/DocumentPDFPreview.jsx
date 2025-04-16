



import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';

// Version 5.1.91 အတွက် Worker Setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.1.91/pdf.worker.min.js`;

const DocumentPDFPreview = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.1.91/cmaps/`,
          cMapPacked: true,
        }}
      >
        <Page pageNumber={pageNumber} width={800} />
      </Document>
      
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default DocumentPDFPreview;