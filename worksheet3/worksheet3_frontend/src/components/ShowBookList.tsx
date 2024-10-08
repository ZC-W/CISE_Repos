import React, { useState, useEffect } from "react";
import Link from "next/link";
import BookCard from "./BookCard"; //import the BookCard component we created
import { Book } from "./Books"; //import the Books component we created
// define ShowBookList functional component
function ShowBookList() {
  // initialize state for books with an empty array
  const [books, setBooks] = useState<[Book?]>([]);
  // useEffect hook to fetch the list of books from backend API when component mount
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/books/`) // send GET request to backend API
      .then((res) => {
        return res.json(); // parse the response as JSON
      })
      .then((books) => {
        setBooks(books); // updated the state with the list of books
      })
      .catch((err) => {
        console.log("Error from ShowBookList: " + err); //log any errors to the console
      });
  }, []); //reset dependency array to make sure this effect runs only once when the component mounts

  //render the list of books, otherwise display a message if there are no books
  const bookList =
    books.length === 0
      ? "there is no book record!"
      : books.map((book, k) => <BookCard book={book} key={k} />); //map over the books array and render a BookCard for each book

  // return the JSX for ShowBookList component
  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>
          <div className="col-md-11">
            <Link
              href="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

// export the ShowBookList component as default export
export default ShowBookList;

// this component fetches a list of books from backend and displays it using the 'BookCard' Component. It also provides a link to add a new book.
