import React, { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

import FilmList from "../FilmList/FilmList";
import SearchBar from "../SearchBar/SearchBar";
import { Omdb } from "../../util/Omdb";
import Pagination from "../Pagination/Pagination";

import "./Home.css";

const searchOmdb = async (term, page, cb) => {
  const result = await Omdb.searchTerm(term, page);
  cb(result);
};

const debouncedChangeHandler = debounce(
  (term, page, cb) => searchOmdb(term, page, cb),
  500
);

function Home() {
  const [films, setFilms] = useState([]);
  const [term, setTerm] = useState("par");
  const [page, setPage] = useState(1);
  const oldPageNumber = useRef(1);

  useEffect(() => {
    setPage(1);
    debouncedChangeHandler(term, page, (items) => setFilms(items));
    // eslint-disable-next-line
  }, [term]);

  useEffect(() => {
    if (oldPageNumber.current !== page) {
      oldPageNumber.current = page;
      searchOmdb(term, page, (items) => setFilms(items));
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="Home">
      <h1 className="films-title">Films</h1>
      <SearchBar term={term} setTerm={setTerm} />
      <FilmList films={films} />
      <Pagination page={page} setPage={setPage} films={films} />
    </div>
  );
}

export default Home;
