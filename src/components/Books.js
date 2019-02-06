import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import getBooks from "../utils/apiCalls";

class Books extends Component {
  state = {
    books: [],
    searchField: "",
    loading: false,
    error: null
  };

  searchBook = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const result = await getBooks(this.state.searchField);
    if (result.hasOwnProperty("error")) {
      const { error, loading } = result;
      this.setState({ error, loading });
    } else {
      this.setState({
        error: null,
        books: result,
        loading: false,
        searchField: ""
      });
    }
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
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
