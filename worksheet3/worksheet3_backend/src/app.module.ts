// import necessary modules from Nest.js
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { ConfigModule } from '@nestjs/config';

console.log('Database URI:', process.env.DB_URI); // This will log the URI to confirm it is being read correctly

@Module({
  // Register MongooseModule with DB_URI to connect to MongoDB
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
  ],
  // Register application controllers
  controllers: [AppController],
  // Register application services
  providers: [AppService],
})
export class AppModule { }