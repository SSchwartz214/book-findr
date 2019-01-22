import React, { Component } from "react";
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";

class Books extends Component {
  state = {
    books: [],
    searchField: ""
  };

  searchBook = e => {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: this.state.searchField
        }
      })
      .then(res => {
        const cleanData = this.cleanData(res);
        this.setState({ books: cleanData });
      })
      .catch(error => {
        return error;
      });
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
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
