import { Injectable } from '@nestjs/common';
//import the Book schema class
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import the CreateBookDto class for data transfer

import { CreateBookDto } from './create-book.dto';

//use Injectable decorator to mark this class as a provider
@Injectable()
export class BookService {
  // inject the Book model into the constructor
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }
  //test method to ensure the route is working
  test(): string {
    return 'book route testing';
  }
  // method: find and return all books in the database
  async findAll(): Promise<Book[]> {
    //use the book model to find all books and execute the query
    return await this.bookModel.find().exec();
  }
  //method: find and return a single book by its ID
  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }
  //method: create a new book in the database
  async create(createBookDto: CreateBookDto) {
    return await this.bookModel.create(createBookDto);
  }
  //method: to update an existing book by its ID with new data
  async update(id: string, createBookDto: CreateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, createBookDto).exec();
  }
  //method: to delete a book by its ID
  async delete(id: string) {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
    return deletedBook;
  }
}