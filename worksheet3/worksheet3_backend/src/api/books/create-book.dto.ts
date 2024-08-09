// import the Date type from the mongoose package
import { Date } from 'mongoose';

// Define a Data Transfer Object (DTO) class named CreateBookDto
// DTOs are used to define the structure of data being transferred between client and server
export class CreateBookDto {
  //Property to hold the data, and their types
  title: string;
  isbn: string;
  author: string;
  description: string;
  published_date: Date;
  publisher: string;
  updated_date: Date;
}
