import React from "react";
import Film from "../Film/Film";
import "./FilmList.css";

function FilmList({ films }) {
  const randomid = Math.random();
  return (
    <div className="FilmList">
      {films
        ? films.map((film) => (
            <Film
              key={film.title !== undefined ? film.title+randomid : ""}
              film={film}
            />
          ))
        : ""}
    </div>
  );
}

export default FilmList;
