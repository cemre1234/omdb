import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination({ page, films, setPage }) {
  const [pageCount, setPageCount] = useState(1);
  const hrefs = [];

  useEffect(() => {
    if (films && films["totalResults"]) {
      setPageCount(Math.ceil(films["totalResults"] / 10));
      return;
    }
    setPageCount(0);
  }, [films]);

  for (let i = 0; i < pageCount; i++) {
    hrefs.push(
      <button
        onClick={() => {
          setPage(i + 1);
        }}
        className={`${page === i + 1 ? `pagination-active`: 'pagination-passive'}`}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="pagination">
      {films && (
        <>
          {hrefs}
        </>
      )}
    </div>
  );
}

export default Pagination;
