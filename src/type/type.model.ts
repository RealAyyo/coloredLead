import { Column, DataType, Model, Table, HasMany} from "sequelize-typescript";

import {ApiProperty} from "@nestjs/swagger";
import {TermModel} from "../term/term.model";
import {IType} from "./type.interface";



@Table({tableName: 'types'})
export class TypeModel extends Model<TypeModel, IType> {

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    fieldId: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    pipeline: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    status: number;

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    isFill: boolean;

    @Column({type: DataType.STRING})
    type: string;

    @HasMany(() => TermModel)
    term: TermModel[];
}