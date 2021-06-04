import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area" >
      <form onSubmit={props.searchVideo} action="">
        <input type="text" onChange={props.handleSearch} /> 
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchArea;
