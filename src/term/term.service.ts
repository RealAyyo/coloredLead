import { Injectable } from '@nestjs/common';
import {TermModel} from "./term.model";

@Injectable()
export class TermService {
    async updateTerms(payload, id, destroy){
        if(destroy){
            await TermModel.destroy({where:{typeId: id}})
            payload.map(async (term) => await TermModel.create({
                typeId: id,
                selectFieldId: term.selectFieldId,
                name: term.name,
                value: term.value,
                color: term.color
            }))

            return await TermModel.findAll({where:{typeId: id}})
        } else {
            payload.map(async (term) => await TermModel.create({
                typeId: id,
                selectFieldId: term.selectFieldId,
                name: term.name,
                value: term.value,
                color: term.color
            }))
            return await TermModel.findAll({where:{typeId: id}})

        }

    }
}
