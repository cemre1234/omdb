import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { OmdbDetail } from "../../util/OmdbDetail";
import "./FilmDetail.css";

function FilmDetail() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [filmDetail, setFilmDetail] = useState(undefined);
  useEffect(() => {
    const title = id.toLowerCase();
    OmdbDetail.searchTerm(title).then((items) => {
      setFilmDetail(items);
    });
  }, [id]);

  if (filmDetail === undefined)
    return <div className="filmdetail">Yükleniyor...</div>;

  return (
    <div className="filmdetail">
      <figure>
        <img
          src={
            filmDetail.poster !== "N/A"
              ? filmDetail.poster
              : "https://via.placeholder.com/300x425"
          }
          alt={filmDetail.title}
        />
      </figure>
      <div className="filmdetail-letter">
        <h1>{filmDetail.title}</h1>
        <h3>{filmDetail.year}</h3>
        <h4>{filmDetail.runtime}</h4>
        <p>{filmDetail.director}</p>
        <p>{filmDetail.actors}</p>
      </div>
    </div>
  );
}

export default FilmDetail;
