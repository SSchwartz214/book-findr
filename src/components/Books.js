import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import { getBooks } from "../utils/apiCalls";

class Books extends Component {
  state = {
    books: [],
    searchField: "",
    loading: false,
    error: null
  };

  searchBook = e => {
    this.setState({ loading: true });
    e.preventDefault();
    getBooks(this.state.searchField);
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  cleanData = res => {
    const cleanedData = res.data.items.map(book => {
      if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail: "https://screenshotlayer.com/images/assets/placeholder.png"
        };
      }
      return book;
    });
    return cleanedData;
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-image">
          <i className="fa fa-spinner fa-spin fa-6x" />
        </div>
      );
    }

    return (
      <div className="search-container">
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <div className="error-msg">
          {this.state.error && <h4>{this.state.error}</h4>}
        </div>
        {!this.state.error && <BookList books={this.state.books} />}
      </div>
    );
  }
}

export default Books;
