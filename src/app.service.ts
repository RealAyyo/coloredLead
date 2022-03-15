import {BadRequestException, Injectable} from '@nestjs/common';
import {UserModel} from "./user/user.model";
import {TextModel} from "./text/text.model";
import {NumberModel} from "./number/number.model";
import {SelectModel} from "./select/select.model";
import {TagModel} from "./tag/tag.model";
import {SelectService} from "./select/select.service";
import {NumberService} from "./number/number.service";
import {TagService} from "./tag/tag.service";
import {TextService} from "./text/text.service";

@Injectable()
export class AppService {

    constructor(private selectService: SelectService,
                private numberService: NumberService,
                private tagService: TagService,
                private textService: TextService
                ){}



    async fieldById(userId, type, fieldId) {
        let typeModel = this.typeCheck(type)
        if (!fieldId || !userId) {
            throw new BadRequestException('Укажите все поля')
        }
        const check = await UserModel.findOne({
            where: {id: userId},
            include: [{
                model: typeModel,
                where: {fieldId}
            }
            ]
        })

        return check
    }

    async saveField(userId, fieldId, type, term, value, color, eNum) {
        switch (type) {
            case 'select':
                return await this.selectService.select(userId, fieldId, eNum)
            case 'text':
                return await this.textService.text(userId, fieldId, term, value, color)
            case 'number':
                return await this.numberService.number(userId, fieldId, term, value, color)
            case 'tag':
                return await this.tagService.tag(userId, fieldId, term, value, color)
            default:
                return 'Укажите корректный поля'
        }
    }


    typeCheck(type){
        switch (type) {
            case 'select':
                return SelectModel
                break
            case 'text':
                return TextModel
                break
            case 'number':
                return NumberModel
                break
            case 'tag':
                return TagModel
                break
            default:
                // throw new BadRequestException('Укажите тип')
                return null
        }
    }

    async deleteField(data){
        switch (data.type) {
            case 'select':
                return await this.selectService.deleteSelect(data.userId, data.fieldId)
            case 'text':
                return await this.textService.deleteText(data.userId, data.fieldId)
            case 'number':
                return await this.numberService.deleteNumber(data.userId, data.fieldId)
            case 'tag':
                return await this.tagService.deleteTag(data.userId, data.fieldId)
            default:
                return 'Укажите корректный поля'
        }
    }





}
