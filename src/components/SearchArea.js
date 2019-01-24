import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
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
