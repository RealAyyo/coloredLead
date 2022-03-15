import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "../user/user.model";
import {ApiProperty} from "@nestjs/swagger";

export interface INumber {
    userId: number;
    fieldId: number;
    term: string;
    value: string;
    color: string;
}

@Table({tableName: 'numberType'})
export class NumberModel extends Model<NumberModel, INumber> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '521148', description: 'Идентификатор поля'})
    @Column({type: DataType.INTEGER, allowNull: false})
    fieldId: number;

    @ApiProperty({example: 'equal', description: 'Условие'})
    @Column({type: DataType.STRING, allowNull: false})
    term: string;

    @ApiProperty({example: '10', description: 'Значение'})
    @Column({type: DataType.JSONB, allowNull: true})
    value: string;

    @ApiProperty({example: '#ffffff', description: 'Цвет'})
    @Column({type: DataType.STRING, allowNull: false})
    color: string;

    @ApiProperty({example: '1', description: 'Идентифекатор создателя'})
    @ForeignKey(() => UserModel)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel
}