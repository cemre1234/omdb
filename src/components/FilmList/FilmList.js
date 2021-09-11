import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../util/AppContext";
import Film from "../Film/Film";
import "./FilmList.css";
import debounce from "lodash.debounce";
import { Omdb } from "../../util/Omdb";

const searchOmdb = async (term, page, cb) => {
  const result = await Omdb.searchTerm(term, page);
  cb(result);
};

const debouncedChangeHandler = debounce(
  (term, page, cb) => searchOmdb(term, page, cb),
  500
);

function FilmList() {
  const { setPage, setFilms, films, term, page } = useContext(AppContext);

  const oldPageNumber = useRef(1);
  const oldTerm = useRef(term);

  useEffect(() => {
    if(oldTerm.current !== term){
      setPage(1);
    }
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
    <div className="FilmList">
      {films && films.result
        ? films.result.map((film) => (
            <Film key={film.imdbID ? film.imdbID : film.title} film={film} />
          ))
        : ""}
    </div>
  );
}

export default FilmList;
