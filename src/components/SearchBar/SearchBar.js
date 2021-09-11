import React, { useContext } from "react";
import { AppContext } from "../../util/AppContext";
import "./SearchBar.css";

function SearchBar() {
  const { term, setTerm } = useContext(AppContext);

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
