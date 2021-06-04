import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchVideo} action="">
        <input type="text" onChange={props.handleSearch} />
        <button type="submit">Search</button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Top 20">Top 20</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
