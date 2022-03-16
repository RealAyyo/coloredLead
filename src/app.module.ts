import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {HttpModule} from "@nestjs/axios";
import {TypeModel} from "./type/type.model";
import {TermModel} from "./term/term.model";
import { TypeController } from './type/type.controller';
import { TypeService } from './type/type.service';
import { TermService } from './term/term.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.HOST_DB,
            port: 5432,
            username: process.env.USERNAME_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASENAME_DB,
            models: [TypeModel, TermModel],
            autoLoadModels: true
        }),

    ],
    controllers: [TypeController],
    providers: [TypeService, TermService],

})
export class AppModule {
}
