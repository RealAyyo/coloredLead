import {BadGatewayException, Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TypeService} from "./type.service";
import {TypeModel} from "./type.model";
import {TypeDto} from "./dto/type.dto";

@Controller()
export class TypeController {
    constructor( private readonly typeService: TypeService) {
    }
    @Get(":userId")
    async getUserTypes(@Param() {userId}){
        try{
            return await this.typeService.getUserTypes(userId)
        } catch (e){
            throw new BadGatewayException()
        }

    }

    @Post()
    async createUpdate(@Body() typeDto: TypeDto){
        try{
            return await this.typeService.createUpdate(typeDto)
        } catch (e) {
            throw new BadGatewayException()
        }
    }

    @Delete()
    async deleteType(@Body() {userId, fieldId}){
        try{
            return await this.typeService.deleteType(userId, fieldId)
        } catch (e) {
            throw new BadGatewayException()
        }
    }
}
