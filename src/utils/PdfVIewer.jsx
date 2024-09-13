// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { useParams } from 'react-router-dom';

// function PdfVIewer() {
//     const { pdfurl } = useParams();
//     console.log(pdfurl);


//     pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//     const [numPages, setNumPages] = useState(0);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({
//         numPages
//     }) {
//         setNumPages(numPages);
//     }

//     /*When document gets loaded successfully*/
//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//         setPageNumber(1);
//     }

//     function changePage(offset) {
//         setPageNumber(prevPageNumber => prevPageNumber + offset);
//     }

//     function previousPage() {
//         changePage(-1);
//     }

//     function nextPage() {
//         changePage(1);
//     }

//     return (
//         <>
//             <div className="main">
//                 <h1>{pdfurl}</h1>
//                 <Document
//                     file={pdfurl}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                 >
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//                 <div>
//                     <div className="pagec">
//                         Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//                     </div>
//                     <div className="buttonc">
//                         <button
//                             type="button"
//                             disabled={pageNumber <= 1}
//                             onClick={previousPage}
//                             className="Pre"

//                         >
//                             Previous
//                         </button>
//                         <button
//                             type="button"
//                             disabled={pageNumber >= numPages}
//                             onClick={nextPage}

//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default PdfVIewer;

import React from 'react'
import { useParams } from 'react-router-dom';
export default function PdfVIewer() {
    const { pdfurl } = useParams();
    console.log(pdfurl);
    return (
        <div>PdfVIewer</div>
    )
}
