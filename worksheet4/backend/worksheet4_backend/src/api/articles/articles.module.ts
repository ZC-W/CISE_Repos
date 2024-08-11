import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesController } from './articles.controller';
import { ArticleService } from './articles.service';
import { Article, ArticleSchema } from './article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
  providers: [ArticleService],
  controllers: [ArticlesController],
})
export class ArticlesModule { }
