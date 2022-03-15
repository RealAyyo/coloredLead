import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "../user/user.model";
import {ApiProperty} from "@nestjs/swagger";

interface ITag {
    userId: number;
    fieldId: number;
    term: string;
    value: string;
    color: string;
}

@Table({tableName: 'tagType'})
export class TagModel extends Model<TagModel, ITag> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '521148', description: 'Идентификатор поля'})
    @Column({type: DataType.INTEGER, allowNull: false})
    fieldId: number;

    @ApiProperty({example: 'notEqual', description: 'Условие'})
    @Column({type: DataType.STRING, allowNull: false})
    term: string;

    @ApiProperty({example: 'Николай', description: 'Значение'})
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