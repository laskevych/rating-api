import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserDocument, UserModel } from './user.model';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel.name) private readonly userModel: Model<UserDocument>) {}

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
}
