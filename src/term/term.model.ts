import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {TypeModel} from "../type/type.model";

interface ITerm {
    typeId: number;
    selectFieldId: number;
    name: string;
    value: string;
    color: string;
}

@Table({tableName: 'terms'})
export class TermModel extends Model<TermModel, ITerm> {


    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => TypeModel)
    @Column({type: DataType.INTEGER})
    typeId: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    selectFieldId: number;

    @Column({type: DataType.STRING, allowNull: true})
    name: string;

    @Column({type: DataType.JSONB, allowNull: true})
    value: string;

    @Column({type: DataType.STRING, allowNull: false})
    color: string;

    @BelongsTo(() => TypeModel)
    type: TypeModel

}