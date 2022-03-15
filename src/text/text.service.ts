import {BadRequestException, Injectable} from '@nestjs/common';
import {TextModel} from "./text.model";

@Injectable()
export class TextService {
    async text(userId, fieldId, term, value, color) {
        if (!userId || !fieldId || !term || !color) {
            throw new BadRequestException('Указаны не все поля')
        }
        const check = await TextModel.findOne({where: {userId, fieldId}})
        if (check) {
            check.term = term
            check.value = value
            check.color = color
            await check.save()
            return check
        }
        return await TextModel.create({userId, fieldId, term, value, color})
    }

    async deleteText(userId, fieldId) {
        if (!userId || !fieldId) {
            throw new BadRequestException('Указаны не все поля')
        }
        await TextModel.destroy({where: {userId, fieldId}})
    }
}
