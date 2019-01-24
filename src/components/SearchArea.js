import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
      <h3>
        <span className="brand">bookfindr</span> is a free, fast and efficient
        search-engine for books
      </h3>
      <form onSubmit={props.searchBook} action="">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Enter title, author, or subject..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchArea;
