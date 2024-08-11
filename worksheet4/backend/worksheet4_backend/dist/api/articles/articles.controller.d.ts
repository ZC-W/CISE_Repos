import { ArticleService } from './articles.service';
import { Article } from './article.schema';
import { CreateArticleDto } from './create-article.dto';
export declare class ArticlesController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<Article>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
