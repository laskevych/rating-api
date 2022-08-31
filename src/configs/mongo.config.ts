import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';


export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
    return {
        uri: getMongoString(configService),

        //...getMongoOptions()
    };
};

const getMongoString = (configService: ConfigService): string =>
    'mongodb://' + 
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTH_DATABASE');

const getMongoOptions = () => ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useInifiedTopology: true
});