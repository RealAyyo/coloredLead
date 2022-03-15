import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {TagModel} from "../tag/tag.model";
import {TextModel} from "../text/text.model";
import {NumberModel} from "../number/number.model";
import {SelectModel} from "../select/select.model";
import {ApiProperty} from "@nestjs/swagger";

interface IUser {
    id: number;
    TagModel: TagModel[];
    TextModel: TextModel[];
    NumberModel: NumberModel[];
    SelectModel: SelectModel[];
}

@Table({tableName: 'user'})
export class UserModel extends Model<UserModel, IUser> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({
        example: '[{id: 1, fieldId: 2, term: equal, value:10, color:#ffffff, userId: 1}]',
        description: 'Модель тегов'
    })
    @HasMany(() => TagModel)
    TagModel: TagModel[];

    @ApiProperty({
        example: '[{id: 1, fieldId: 2, term: fill, value:Николай, color:#ffffff, userId: 1}]',
        description: 'Модель текста'
    })
    @HasMany(() => TextModel)
    TextModel: TextModel[];

    @ApiProperty({
        example: '[{id: 1, fieldId: 2, term: equal, value:10, color:#ffffff, userId: 1}]',
        description: 'Модель чисел'
    })
    @HasMany(() => NumberModel)
    NumberModel: NumberModel[];

    @ApiProperty({example: '[{id: 1, fieldId: 2, userId: 1, enum: [{...}] }]', description: 'Модель списка'})
    @HasMany(() => SelectModel)
    SelectModel: SelectModel[];

}