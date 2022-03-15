import {BadRequestException, Injectable} from '@nestjs/common';
import {NumberModel} from "./number.model";

@Injectable()
export class NumberService {
    async number(userId, fieldId, term, value, color) {
        if (!userId || !fieldId || !term || !color) {
            throw new BadRequestException('Указаны не все поля')
        }
        const check = await NumberModel.findOne({where: {userId, fieldId}})
        if (check) {
            check.term = term
            check.value = value
            check.color = color
            await check.save()
            return check
        }

        return await NumberModel.create({userId, fieldId, term, value, color})
    }

    async deleteNumber(userId, fieldId) {
        if (!userId || !fieldId) {
            throw new BadRequestException('Указаны не все поля')
        }
        await NumberModel.destroy({where: {userId, fieldId}})
    }

}
