import React, { useState } from "react";
import BookContext from "./BookContext";
import BookListing from "./BookListing";
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  const [books, setBooks] = useState([
    {
      _id: Math.floor(Math.random() * 100000),
      title: "The Lord of the Rings",
      author: "J.R.R Tolkien"
    },
    {
      _id: Math.floor(Math.random() * 100000),
      title: "A Game of Thrones",
      author: "G.R.R Martin"
    },
    {
      _id: Math.floor(Math.random() * 100000),
      title: "Chronicles of Narina",
      author: "C.S. Lewis"
    }
  ]);

  const context = {
    getBooks: () => {
      return books;
    }
  };

  return (
    <div className="App">
      <h1>Books</h1>
      <BookContext.Provider value={context}>
        <BookListing/>
      </BookContext.Provider>
    </div>
  );
}
