import {Injectable} from '@nestjs/common';
import {TypeModel} from "./type.model";
import {TermService} from "../term/term.service";
import {TermModel} from "../term/term.model";

@Injectable()
export class TypeService {
    constructor(private termService: TermService) {}

    async getUserTypes(userId) {
        const types = await TypeModel.findAll({
            where: {userId},
            include: {all: true}
        })
        return types
    }

    async createUpdate(typeDto) {
        const check = await TypeModel.findOne({where: {userId: typeDto.userId, fieldId: typeDto.fieldId}})
            if (!check) {
                const types = await TypeModel.create({userId: typeDto.userId, isFill: typeDto.isFill, pipeline: typeDto.pipeline, status: typeDto.status, fieldId: typeDto.fieldId, type: typeDto.type})
                await this.termService.updateTerms(typeDto.payload, types.id, false)
                const data = await TypeModel.findOne({where: {id: types.id}, include: {all: true}})
                return {userId: data.userId, fieldId: data.fieldId, isFill: data.isFill, status: data.status, pipeline:data.pipeline, type:data.type, term: data.term}
            }
            const terms = await this.termService.updateTerms(typeDto.payload, check.id, true)
            const data =  await TypeModel.findOne({where: {id: check.id}, include: {model: TermModel}})
            data.isFill = typeDto.isFill;
            data.pipeline = typeDto.pipeline;
            data.status = typeDto.status;
            data.type = typeDto.type;
            await data.save()
            return {userId: data.userId, fieldId: data.fieldId, isFill: data.isFill, status: data.status, pipeline:data.pipeline, type:data.type, term: data.term}
        }

        async deleteType(userId, fieldId) {
            const type = await TypeModel.findOne({where: {userId, fieldId}})
            await TypeModel.destroy({where: {userId, fieldId}})
            await TermModel.destroy({where: {typeId: type.id}})
            return 'success'
        }

}
