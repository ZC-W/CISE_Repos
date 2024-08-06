// importing Required Modules
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

//defines a TypeScript type alias BookDocument that represents a hydrated document of the Book class. The hydrated document is a Mongoose document that has been instantiated and contains all the methods and properties defined by Mongoose
export type BookDocument = HydratedDocument<Book>;

//The @Schema() decorator marks the Book class as a Mongoose schema.This tells Nest.js and Mongoose that this class will be used to define the structure of the documents in the books collection
@Schema()
//defining Schema Properties with @Prop(), the @Prop() decorator is used to define a property in the schema
export class Book {
  @Prop({ required: true })//required string property
  title: string;
  @Prop({ required: true })//required string property
  isbn: string;
  @Prop({ required: true })//required string property
  author: string;
  @Prop()
  description: string;
  @Prop({ type: Date })
  published_date: Date;
  @Prop()
  publisher: string;
  //updated_date property is of type Date and has a default value of the current date and time (using Date.now).
  @Prop({ type: Date, default: Date.now })
  updated_date: Date;
}
//generates a Mongoose schema from the Book class and assigns it to BookSchema
export const BookSchema = SchemaFactory.createForClass(Book);
