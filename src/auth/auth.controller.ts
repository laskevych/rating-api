import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { USER_EXIST } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe)
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const currentUser = await this.authService.getUser(dto.login);
        if (currentUser) {
            throw new BadRequestException(USER_EXIST);
        }

        return await this.authService.createUser(dto);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        
    }
}
