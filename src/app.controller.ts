import {BadGatewayException, Body, Controller, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {HttpService} from "@nestjs/axios";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TagModel} from "./tag/tag.model";
import {UserModel} from "./user/user.model";
import {SelectModel} from "./select/select.model";
import {UserService} from "./user/user.service";


@ApiTags('Работа с данными')
@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService,
        private httpService: HttpService
    ) {
    }

    @ApiOperation({summary: "Информация об одном поле"})
    @ApiResponse({status: 200, type: SelectModel})
    @Post()
    fieldById(@Body() {userId, type, fieldId}) {
        return this.appService.fieldById(userId, type, fieldId)
    }

    @ApiOperation({summary: "Получить данные о полях пользователя"})
    @ApiResponse({status: 200, type: UserModel})
    @Post('/user')
    userInfo(@Body() {userId}) {
        return this.userService.userInfo(userId)
    }

    @ApiOperation({summary: "Сохранить / изменить поля"})
    @ApiResponse({status: 200, type: TagModel})
    @Post('/save')
    saveField(@Body() {userId, fieldId, type, term, value, color, eNum}) {
        try {
            return this.appService.saveField(userId, fieldId, type, term, value, color, eNum)
        } catch (e) {
            throw new BadGatewayException()
        }
    }


}
