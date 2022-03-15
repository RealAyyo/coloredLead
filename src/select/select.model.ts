import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "../user/user.model";
import {ApiProperty} from "@nestjs/swagger";

interface ISelect {
    fieldId: number;
    enum: string;
    userId: number;
}

@Table({tableName: 'selectType'})
export class SelectModel extends Model<SelectModel, ISelect> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '521148', description: 'Идентификатор поля'})
    @Column({type: DataType.INTEGER, allowNull: false})
    fieldId: number;

    @ApiProperty({example: '[{id: 123, color: #ffffff}]', description: 'Массив enum'})
    @Column({type: DataType.JSONB, allowNull: true})
    enum: string;

    @ApiProperty({example: '1', description: 'Идентифекатор создателя'})
    @ForeignKey(() => UserModel)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel
}