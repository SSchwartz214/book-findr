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

  const renderHTML = rawHTML =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML }
    });

  return (
    <div
      className="card-container"
      onClick={() => window.open(props.link, "_blank")}
    >
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{cleanAuthors}</h3>
        <div>Publisher: {renderHTML(props.publisher)}</div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BookCard;
