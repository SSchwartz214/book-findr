import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={`book-${i}`}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            link={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  );
};

export default BookList;
