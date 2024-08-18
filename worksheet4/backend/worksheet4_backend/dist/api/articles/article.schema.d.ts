import { Document } from 'mongoose';
export type ArticleDocument = Article & Document;
export declare class Article {
    authors: string[];
    title: string;
    source: string;
    pubyear: number;
    doi: string;
    summary: string;
    linked_discussion: string;
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, Document<unknown, any, Article> & Article & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & {
    _id: import("mongoose").Types.ObjectId;
}>;
