import React, { Component } from "react";
import SearchArea from "./SearchArea";
import axios from "axios";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }

  searchBook = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.SearchField
        }`
      )
      .then(res => {
        console.log(res.data);
      });
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default Books;
