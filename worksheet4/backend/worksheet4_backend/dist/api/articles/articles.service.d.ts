import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.schema';
import { CreateArticleDto } from './create-article.dto';
export declare class ArticleService {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<Article>;
    delete(id: string): Promise<any>;
}
