import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { ArticleService } from './articles.service';
import { Article } from './article.schema';
import { CreateArticleDto } from './create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    try {
      return await this.articleService.create(createArticleDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to create this article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  @Get()
  async findAll(): Promise<Article[]> {
    try {
      return await this.articleService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No articles found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    try {
      return await this.articleService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No article found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    try {
      return await this.articleService.update(id, createArticleDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.articleService.delete(id);
      return { message: 'Article deleted successfully' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such article found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
}
