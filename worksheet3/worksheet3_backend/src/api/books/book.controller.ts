// import necessary decorators and exceptions from NEST.JS
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
//import BookService, DTO to create a book, error object
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';
import { error } from 'console';
//define controller for api/books route
@Controller('api/books')
export class BookController {
  //inject BookService into the controller
  constructor(private readonly bookService: BookService) { }
  //define a test endpoint to verify the route is working
  @Get('/test')
  test() {
    return this.bookService.test();
  }
  // Get all books
  @Get('/')
  async findAll() {
    try {
      return this.bookService.findAll();
    } catch {
      //throw HTTP exception if no books are found
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Books found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
  // Get one book via id
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.bookService.findOne(id);
    } catch {
      //throw http exception if the book is not found
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Book found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
  // Create/add a book
  @Post('/')
  async addBook(@Body() createBookDto: CreateBookDto) {
    try {
      // call create method in BookService to add a new book
      await this.bookService.create(createBookDto);
      return { message: 'Book added successfully' };//return the success message
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this book',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
  // Update a book
  @Put('/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() createBookDto: CreateBookDto,
  ) {
    try {
      await this.bookService.update(id, createBookDto);
      return { message: 'Book updated successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this book',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
  // Delete a book via id
  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    try {
      return await await this.bookService.delete(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such a book',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
}
