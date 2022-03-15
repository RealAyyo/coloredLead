import {ApiProperty} from "@nestjs/swagger";

export class TermDto {

    @ApiProperty({example:'205', description: 'Уникальный идентификатор пользователя'})
    typeId: number;

    @ApiProperty({example:'1', description: 'Уникальный идентификатор поля'})
    selectFieldId: number;

    @ApiProperty({example:'equal', description: 'Название'})
    name: string;

    @ApiProperty({example:'15', description: 'Значение'})
    value: string;

    @ApiProperty({example:'#ffffff', description: 'цвет'})
    color: string;
}