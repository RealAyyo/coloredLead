import { Injectable } from '@nestjs/common';
import {UserModel} from "./user.model";

@Injectable()
export class UserService {

    async userInfo(id) {
        id = parseInt(id)
        const user = await UserModel.findOne({where: id})
        if (user) {
            return await UserModel.findOne({
                where: id,
                include: {all: true}
            })
        }
        await UserModel.create({id})
        return await UserModel.findOne({
            where: id,
            include: {all: true}
        })
    }
}
