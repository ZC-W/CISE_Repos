"use client";
// import component responsible for display the form to create a new book
import CreateBookComponent from "../../src/components/CreateBook";
// define a new function component named CreateBook
export default function CreateBook() {
  // Render the <main> element
  return (
    <main>
      <CreateBookComponent />
    </main>
  );
}
// define a client-side component 'CreateBook', to render another component 'CreateBookComponent' to handle the creation of a new book.  'CreateBookComponent' is rendered inside a main HTML element, and making it the main content of the CreateBook page.This allows the application to display a for or interface to create a new book
