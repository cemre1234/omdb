import React from "react";

export const AppContext = React.createContext({
  term: "",
  page: 1,
  films: [],
  setTerm: () => {},
  setPage: () => {},
  setFilms: () => {},
});
