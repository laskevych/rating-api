import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEmail } from './../decorators/user-email.decorator';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {

    constructor(private reviewService: ReviewService) {}

    // @Get(':id')
    // async get(@Param('id') id: string) {
    //     return this.reviewService.
    // }
    
    @UsePipes(new ValidationPipe)
    @Post('create')
    async create(@Body() dto: CreateReviewDto) {
        return this.reviewService.create(dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const deletedDoc = await this.reviewService.delete(id);
        if (!deletedDoc) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('byProduct/:productId')
    async find(@Param('productId') productId: string, @UserEmail() userEmail: string) {
        console.log(userEmail);
        return this.reviewService.findByProductId(productId);
    }
}
