import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReviewDocument = ReviewModel & Document;

@Schema({ timestamps: true })
export class ReviewModel {
    
    @Prop()
    userName: string;

    @Prop()
    title: string;

    @Prop()
    rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);