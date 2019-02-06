const cleanData = res => {
  const cleanedData = res.items.map(book => {
    if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
      book.volumeInfo["imageLinks"] = {
        thumbnail: "https://screenshotlayer.com/images/assets/placeholder.png"
      };
    }
    return book;
  });
  return cleanedData;
};

export default cleanData;
