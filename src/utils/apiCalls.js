import axios from "axios";
import cleanData from "./cleaners";

const getBooks = async searchField => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchField}`
  );
  if (res.status === 400) {
    return { error: "Please enter a valid term", loading: false };
  } else {
    const result = await res.json();
    if (result.items) {
      return cleanData(result);
    } else {
      return { error: "No results", loading: false };
    }
  }
};

export default getBooks;
