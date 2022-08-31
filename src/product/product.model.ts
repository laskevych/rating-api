import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthDocument = ProductModel & Document;

@Schema({ timestamps: true })
export class ProductModel {
    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    oldPrice: number;

    @Prop()
    credit: number;

    @Prop()
    calculatedRating: number;

    @Prop()
    description: string;
    
    @Prop()
    advantages: string;

    @Prop()
    disAdvantages: string;

    @Prop([String])
    categories: string[];

    @Prop([String])
    tags: string[];

    @Prop([String])
    characteristics: string[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);