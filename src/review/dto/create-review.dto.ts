import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {

    @IsString()
    userName: string;

    @IsString()
    title: string;

    @Max(5)
    @Min(1)
    @IsNumber()
    rating: number;

    @IsString()
    productId: string;
}