import {BadRequestException, Injectable} from '@nestjs/common';
import {SelectModel} from "./select.model";

@Injectable()
export class SelectService {
    async select(userId, fieldId, eNum) {
        if (!userId || !fieldId || !eNum) {
            throw new BadRequestException('Указаны не все поля')
        }
        const check = await SelectModel.findOne({where: {userId, fieldId}})
        if (check) {
            check.enum = eNum
            await check.save()
            return check
        }
        return await SelectModel.create({userId, fieldId, enum: eNum})
    }
}
