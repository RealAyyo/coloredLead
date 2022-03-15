import {BadRequestException, Injectable} from '@nestjs/common';
import {TagModel} from "./tag.model";

@Injectable()
export class TagService {
    async tag(userId, fieldId, term, value, color) {
        if (!userId || !fieldId || !term || !color) {
            throw new BadRequestException('Указаны не все поля')
        }
        const check = await TagModel.findOne({where: {userId, fieldId}})
        if (check) {
            check.term = term
            check.value = value
            check.color = color
            await check.save()
            return check
        }
        return await TagModel.create({userId, fieldId, term, value, color})
    }

}