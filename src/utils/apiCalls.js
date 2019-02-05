import axios from "axios";

export const getBooks = async searchField => {
  try {
    await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: searchField
      }
    });

    if (res.data.items) {
      return cleanData(res);
    } else {
      return { error: "No results", loading: false };
    }
  } catch (error) {
    return { error: "Please enter a valid term", loading: false };
  }
};
