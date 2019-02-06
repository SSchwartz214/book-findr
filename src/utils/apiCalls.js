import cleanBookData from "./cleaners";

const getBooks = async searchField => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchField}`
  );
  if (response.status === 400) {
    return { error: "Please enter a valid term", loading: false };
  } else {
    const result = await response.json();
    if (result.items) {
      return cleanBookData(result);
    } else {
      return { error: "No results", loading: false };
    }
  }
};

export default getBooks;
