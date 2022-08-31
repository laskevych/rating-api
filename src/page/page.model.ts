import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum PageLevelCategory {
    Courses = 1,
    Services = 2,
    Books = 3,
    Products = 4
}


export class HhData {
    @Prop()
    count: number;

    @Prop()
    juniorSalary: number;

    @Prop()
    middleSalary: number;

    @Prop()
    seniorSalary: number;
}

export class PageAdvantage {
    @Prop()
    title: string;

    @Prop()
    description: string
}

export type PageDocument = PageModel & Document;

@Schema({ timestamps: true })
export class PageModel {
    @Prop({ enum: PageLevelCategory })
    firstLevelCategory: PageLevelCategory;
    
    @Prop()
    secondLeveCategory: string;

    @Prop()
    title: string;

    @Prop({ type: PageAdvantage})
    hh?: HhData;

    @Prop([PageAdvantage])
    advantages: PageAdvantage[];

    @Prop()
    seoText: string;

    @Prop([String])
    tagsTitle: string[];

    @Prop([String])
    tags: string[];
}

export const PageSchema = SchemaFactory.createForClass(PageModel);