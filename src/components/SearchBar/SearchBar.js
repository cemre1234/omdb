import React from "react";
import "./SearchBar.css";

function SearchBar({ setTerm , term}) {

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-fields">
        <input
          value={term}
          onChange={handleTermChange}
          placeholder="Search for films"
        />
      </div>
    </div>
  );
}

export default SearchBar;
