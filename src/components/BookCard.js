import React from "react";

const BookCard = props => {
  let cleanAuthors;

  if (props.authors) {
    cleanAuthors = props.authors.map((author, i, array) => {
      return i === array.length - 1 ? (
        <span key={`authors-${i}`}>{author}</span>
      ) : (
        <span key={`authors-${i}`}>{author}, </span>
      );
    });
  } else {
    cleanAuthors = "Author not available";
  }

  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{cleanAuthors}</h3>
        <p>Publisher: {props.publisher}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BookCard;
