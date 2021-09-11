import React from "react";
import FilmList from "../FilmList/FilmList";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1 className="films-title">Films</h1>
      <SearchBar />
      <FilmList />
      <Pagination />
    </div>
  );
}

export default Home;
