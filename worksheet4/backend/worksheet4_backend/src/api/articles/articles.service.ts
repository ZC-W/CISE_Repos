import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.schema';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) { }

  // create new article
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  // find and return all articles
  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  // find and return one article by id
  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  // update an existing article by id
  async update(id: string, createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(id, createArticleDto, { new: true }).exec();
  }

  // delete article by id
  async delete(id: string): Promise<any> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}
