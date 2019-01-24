import React from "react";

const Header = () => {
  return (
    <header onClick={() => window.open("/", "_self")}>
      <i className="fas fa-book-reader fa-2x" />
      <h1>BookFindr</h1>
    </header>
  );
};

export default Header;
