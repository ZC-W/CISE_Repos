//define a 'Book' type
export type Book = {
  _id?: string;
  title?: string;
  isbn?: string;
  author?: string;
  description?: string;
  published_date?: Date;
  publisher?: string;
  updated_date?: Date;
};

//define a constant 'DefaultEmptyBook' of 'Book' type with default values
export const DefaultEmptyBook: Book = {
  _id: undefined,
  title: "",
  isbn: "",
  author: "",
  description: "",
  published_date: undefined,
  publisher: "",
  updated_date: undefined,
};
// defines a Book type to use in the application, it provides a default empty book objefct 'DefaultEmptyBook'
