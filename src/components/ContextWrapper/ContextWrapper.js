import React, { useState } from "react";

import { AppContext } from "../../util/AppContext";

export const ContextWrapper = ({ children }) => {
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [films, setLocalFilms] = useState([]);

  const setContextFilm = (data) => {
    setLocalFilms(
      data && data.result
        ? { result: [...data.result], totalResults: data.totalResults }
        : {}
    );
  };

  return (
    <AppContext.Provider
      value={{ term, page, films, setTerm, setPage, setFilms: setContextFilm }}
    >
      {children}
    </AppContext.Provider>
  );
};
