// enable client-side rendering
"use client";

// import ShowBookDetails component
import ShowBookDetails from "@../../../src/components/ShowBookDetails";

// define and export the default function component named ShowBook
export default function ShowBook() {
  // return JSX for the ShowBook component
  return (
    // Render ShowBookDetails component
    <ShowBookDetails />
  );
}
// sets up the dynamic page for showing the details of an existing book based on the id. ShowBookDetails component will handle displaying the book details
