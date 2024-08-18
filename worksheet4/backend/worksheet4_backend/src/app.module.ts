import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import the articlemodule we created
import { ArticlesModule } from './api/articles/articles.module';

console.log('Database URI:', process.env.DB_URI); // This will log the URI to confirm it is being read correctly

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot(process.env.DB_URI), ArticlesModule, // Connect to MongoDB using the DB_URI from your environment variables
    //ArticleModule, // Register the ArticleModule
  ],
  controllers: [AppController], // Register application controllers
  providers: [AppService], // Register application services
})
export class AppModule { }
