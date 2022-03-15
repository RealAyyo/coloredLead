import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {HttpModule} from "@nestjs/axios";
import {UserModel} from "./user/user.model";
import {NumberModel} from "./number/number.model";
import {TextModel} from "./text/text.model";
import {SelectModel} from "./select/select.model";
import {TagModel} from "./tag/tag.model";
import { TextService } from './text/text.service';
import { TagService } from './tag/tag.service';
import { SelectService } from './select/select.service';
import { NumberService } from './number/number.service';
import { UserService } from './user/user.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: "postgres",
            password: "159753",
            database: "NestTest",
            models: [UserModel, TextModel, TagModel, NumberModel, SelectModel],
            autoLoadModels: true
        }),
    ],
    controllers: [AppController],
    providers: [AppService, TextService, TagService, SelectService, NumberService, UserService],
})
export class AppModule {
}
