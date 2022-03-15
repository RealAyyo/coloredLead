import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {HttpModule} from "@nestjs/axios";
import {TypeModel} from "./type/type.model";
import {TermModel} from "./term/term.model";
import { TypeController } from './type/type.controller';
import { TypeService } from './type/type.service';
import { TermService } from './term/term.service';

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
            models: [TypeModel, TermModel],
            autoLoadModels: true
        }),
    ],
    controllers: [TypeController],
    providers: [TypeService, TermService],
})
export class AppModule {
}
