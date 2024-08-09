// enable client size rendering
"use client";
// import ShowBookList component that we created
import ShowBookList from "@/src/components/ShowBookList";
// define and export the default function component 'Home'
export default function Home() {
  // return the JSX for Home component
  return (
    <main>
      <ShowBookList />
    </main>
  );
}
// defines a React functional component called Home (Home Page)
// this allows the application to fetch and display a list of books from the backend API when the 'Home' page is accessed
