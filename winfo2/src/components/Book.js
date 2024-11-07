import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Book = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div>
      <div className="book-border">
        <Document file="book.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={1.2} />
        </Document>
      </div>
      <p>
          Page {pageNumber} of {numPages}
        </p>
        <button className="turn-page" onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
    </div>
  );
};

export default Book;
