import React from "react";

const BookCard = props => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author(s): {props.author}</h3>
        <p>Publisher: {props.publisher}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BookCard;
