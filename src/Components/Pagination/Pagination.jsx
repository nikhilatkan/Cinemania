import React from "react";
import "./Pagination.css"

const Pagination = ({ pageNumber, setPageNumber, NumberOfPages }) => {

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = Math.max(1, pageNumber - 2); i <= Math.min(NumberOfPages, pageNumber + 2); i++) {
            pageNumbers.push(
                <button key={i} onClick={() => setPageNumber(i)} disabled={pageNumber === i ? true : false} className={`${pageNumber === i ? 'active' : ''} pagination-values`}>
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    // const pageNumbers1 = [...Array(NumberOfPages + 1).keys()].slice(1);
    // console.log(pageNumbers1);

    return (
        <div className="pagination-container">
            <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>Previous</button>
            <span>{renderPageNumbers()}</span>
            <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === NumberOfPages}>Next</button>
        </div>
    )
}

export default Pagination;