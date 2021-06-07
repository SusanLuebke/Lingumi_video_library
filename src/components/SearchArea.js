import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchVideo} action="">
        <input type="text" onChange={props.handleSearch} />
        <button type="submit">Search</button>
        <select className="sort" defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Top 20" >Top 20</option>
        </select>
        <button onClick={() => window.location.reload(false)}>Refresh Search</button>
      </form>
    </div>
  );
};

export default SearchArea;
