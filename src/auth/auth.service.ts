import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserDocument, UserModel } from './user.model';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { USER_NOT_FOUND, USER_WRONG_PASSWORD } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(UserModel.name) private readonly userModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ) {}

    async createUser(dto: AuthDto): Promise<UserDocument> | null {
        const salt = genSaltSync(10);
        const newUser = new this.userModel({
            email: dto.login,
            passwordHash: hashSync(dto.password, salt)
        });

        return newUser.save();
    }

    async getUser(email: string): Promise<UserDocument> | null {
        return this.userModel.findOne({ email }).exec();
    }

    async validateUser(email: string, password: string): Promise<Pick<UserDocument, 'email'>> {
        const user = await this.getUser(email);
        if (!user) {
            throw new UnauthorizedException(USER_NOT_FOUND);
        }
        const isCorrectPassword = compareSync(password, user.passwordHash);
        if (!isCorrectPassword) {
            throw new UnauthorizedException(USER_WRONG_PASSWORD);
        }

        return { email: user.email };
    }

    async login(email: string) {
        const payload = { email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
