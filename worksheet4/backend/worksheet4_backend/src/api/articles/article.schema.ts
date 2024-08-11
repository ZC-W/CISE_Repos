import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string;

  @Prop()
  source: string;

  @Prop()
  pubyear: string;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop()
  evidence: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);