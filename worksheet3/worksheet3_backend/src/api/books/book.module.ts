// import all the necessary decorators and modules from nest.js
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.schema';

@Module({
  //import array specifies the modules required by this module
  imports: [
    // register the MongooseModule with the Book schema
    // mongooseModule.forFeature is used to define which models should be registered in the current scope
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  //controllers array specifies the controllers that belong to this module
  controllers: [BookController],
  //providers array specifies the services that belong to this module
  providers: [BookService],
})
//defines the Book module, which groups together the controller, service, and schema related to the Book entity
export class BookModule { }
