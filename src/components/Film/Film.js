import React from "react";
import "./Film.css";
import { Link } from "react-router-dom";

function Film({ film }) {
  return (
    <div className="Film">
      <div className="film-item-container">
        <Link to={`/page/${film.title}`}>
          <div className="image-container">
            <img
              src={
                film.poster !== "N/A"
                  ? film.poster
                  : "https://via.placeholder.com/300x425"
              }
              alt={film.title}
            />
          </div>

          <h2>{film.title}</h2>

          <div className="Film-information">
            <p>{film.year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Film;
