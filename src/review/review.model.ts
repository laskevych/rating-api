import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type ReviewDocument = ReviewModel & Document;

@Schema({ timestamps: true })
export class ReviewModel {
    
    @Prop()
    userName: string;

    @Prop()
    title: string;

    @Prop()
    rating: number;

    @Prop()
    productId: Types.ObjectId
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);