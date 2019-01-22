import React, { Component } from "react";
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";

class Books extends Component {
  state = {
    books: [],
    searchField: "",
    loading: false
  };

  searchBook = e => {
    this.setState({ loading: true });
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: this.state.searchField
        }
      })
      .then(res => {
        const cleanData = this.cleanData(res);
        this.setState({
          books: cleanData,
          loading: false
        });
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
    if (this.state.loading) {
      return (
        <div className="loading-image">
          <i className="fa fa-spinner fa-spin fa-4x" />
        </div>
      );
    }
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
