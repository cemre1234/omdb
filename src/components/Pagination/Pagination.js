import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../util/AppContext";

import "./Pagination.css";

function Pagination() {
  const { page, setPage, films } = useContext(AppContext);

  const [pageCount, setPageCount] = useState(1);
  const hrefs = [];

  useEffect(() => {
    if (films && films.totalResults) {
      setPageCount(Math.ceil(films.totalResults / 20));
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
        key={`${films.totalResults}${Math.random()}`}
        className={`${
          page === i + 1 ? `pagination-active` : "pagination-passive"
        }`}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="pagination">{films && <>{hrefs}</>}</div>;
}

export default Pagination;
