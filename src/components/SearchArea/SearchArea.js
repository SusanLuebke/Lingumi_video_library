import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchForTutorials} action=" ">
        <input type="text" id="topRated"  onChange={props.getTopRatedTutorialsForTags} />
        <button type="submit">Search</button>
        <select
          className="sort"
          defaultValue="Sort"
          onChange={props.handleSort}
        >
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Top 20">Top 20</option>
        </select>
        <button onClick={() => window.location.reload(false)}>
          Refresh Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
