import React, { Component } from "react";
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";

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
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: this.state.searchField
        }
      })
      .then(res => {
        if (res.data.items) {
          const cleanData = this.cleanData(res);
          this.setState({
            books: cleanData,
            loading: false
          });
        } else {
          this.setState({ error: "No results", loading: false });
        }
      })
      .catch(error => {
        console.log(error);
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
        <div className="error-msg">
          {this.state.error && <h4>{this.state.error}</h4>}
        </div>
        {!this.state.error && <BookList books={this.state.books} />}
      </div>
    );
  }
}

export default Books;
