import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  ChangeEventHandler,
} from "react";
import { useParams, useRouter } from "next/navigation";
import { Book, DefaultEmptyBook } from "./Books";
import Link from "next/link";
// define UpdateBookInfo functional component
function UpdateBookInfo() {
  // initialise state for the book with default empty book object
  const [book, setBook] = useState<Book>(DefaultEmptyBook);
  // retrieve the dynamic 'id' parameter from URL
  const id = useParams<{ id: string }>().id;
  // initialize useRouter hook for navigation
  const router = useRouter();
  // fetch book details from backend when component mounts or when 'id' changes
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/books/${id}`)
      .then((res) => {
        return res.json(); // parse the response as JSON
      })
      .then((json) => {
        setBook(json); // set book state with fetched data
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo: " + err);
      });
  }, [id]); // dependency array, trigger useEffect when id changes

  // handle input changes and update the book state
  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  // handle textarea changes and update the book state
  const textAreaOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  // handle form submission, send a PUT request to backend to update the book
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //to prevent refresh page straightway
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/books/${id}`, {
      //request to make change
      method: "PUT", //declare that it is an update but not create
      headers: { ContentType: "application/json" }, //declare that data is JSON format
      body: JSON.stringify(book), // content updated book details
    })
      .then((res) => {
        router.push(`/show-book/${id}`); // navigate to the book datails page once successful updated
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo: " + err);
      });
  };
  // return the JSX for UpdateBookInfo component
  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link href="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book&quot;s Info</p>
          </div>
        </div>
        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={book.title}
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={book.isbn}
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={book.author}
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Description of the Book"
                name="description"
                className="form-control"
                value={book.description}
                onChange={textAreaOnChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="text"
                placeholder="Published Date"
                name="published_date"
                className="form-control"
                value={book.published_date?.toString()}
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of the Book"
                name="publisher"
                className="form-control"
                value={book.publisher}
                onChange={inputOnChange}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export the UpdateBookInfo component as the default export
export default UpdateBookInfo;

// this component is use for update the information of an existing book. When it's rendered, it will fetche the current details of the book and use book ID from URL to display them in a form, user can edit the book details and submit the form rto update the book in database.
