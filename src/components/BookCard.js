import React from "react";

const BookCard = props => {
  const cleanAuthors = props.authors.map((author, i, array) => {
    return i === array.length - 1 ? (
      <span key={`authors-${i}`}>{author}</span>
    ) : (
      <span key={`authors-${i}`}>{author}, </span>
    );
  });

  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author(s): {cleanAuthors}</h3>
        <p>Publisher: {props.publisher}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BookCard;
