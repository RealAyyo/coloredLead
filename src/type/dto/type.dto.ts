import {ApiProperty} from "@nestjs/swagger";

export class TypeDto {

    @ApiProperty({example:'205', description: 'Уникальный идентификатор пользователя'})
    readonly userId: number;

    @ApiProperty({example:'2515', description: 'Уникальный идентификатор поля'})
    readonly fieldId: number;

    @ApiProperty({example:'true', description: 'Заливка/Обводка'})
    readonly isFill: boolean;

    @ApiProperty({example:'2', description: 'Статус'})
    readonly status: number;

    @ApiProperty({example:'2', description: 'Воронка'})
    readonly pipeline: number;

    @ApiProperty({example:'text', description: 'Тип поля'})
    readonly type: string;

    @ApiProperty({example:'[{...}, {...}]', description: 'terms/enum'})
    readonly payload: any;
}