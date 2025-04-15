

// // const DocumentDetail = () => {
// //   return (
// //     <div>DocumentDetail</div>
// //   )
// // }

// // export default DocumentDetail

// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { Document, Page, pdfjs } from 'react-pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// const DocumentDetail = () => {
//   const { id } = useParams()
//   const document = useSelector(state =>
//     state.documents.data.find(doc => doc.id === parseInt(id))
//   )

//   if (!document) return <div className="p-4">Document not found</div>

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-2">Document title: {document.name}</h2>
//       <p><strong>Author:</strong> {document.author}</p>
//       <p><strong>Date:</strong> {document.date}</p>
//       <div className="mt-4 border shadow">
//         <Document file={document.fileUrl}>
//           <Page pageNumber={1} />
//         </Document>
//       </div>
//     </div>
//   )
// }

// export default DocumentDetail



const DocumentDetail = () => {
  return (
    <div>DocumentDetail</div>
  )
}

export default DocumentDetail