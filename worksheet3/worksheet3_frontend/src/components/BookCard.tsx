import React from "react";
import { Book } from "./Books"; //import Book type we created
import { useRouter } from "next/navigation";
// define interface for props component
interface IProp {
  book?: Book; // book prop is optional and it's book type
}
// define BookCard functional component
const BookCard = ({ book }: IProp) => {
  // initialize useRouter hook for navigation
  const router = useRouter();

  // return null(do not render anything if Book prop is undefined)
  if (book == undefined) {
    return null;
  }

  // define onClick function to direct to the book details page
  const onClick = () => {
    router.push(`/show-book/${book._id}`);
  };
  // return the JSX for BookCard component
  return (
    <div className="card-container" onClick={onClick}>
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height={200}
      />
      <div className="desc">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};
// export BookCard component as the default export
export default BookCard;

// this component accepts book information as input. If there is no book information, no card is created.When creating a card, display the book information on the card. When clicking a card, jump to the book details page.
