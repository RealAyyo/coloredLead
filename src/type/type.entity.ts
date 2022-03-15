import {TermDto} from "../term/dto/term.dto";

export class TypeEntity {

    constructor(
        private readonly userId: number,
        private readonly fieldId: number,
        private readonly isFill: boolean,
        private readonly status: number,
        private readonly pipeline: number,
        private readonly type: string,
        private readonly term: TermDto[],
    ) {}

    get UserId(): number {
        return this.userId;
    }

    get FieldId(): number {
        return this.fieldId;
    }

    get IsFill(): boolean {
        return this.isFill;
    }

    get Status(): number {
        return this.status;
    }

    get Pipeline(): number {
        return this.pipeline;
    }

    get Type(): string {
        return this.type;
    }

    get Term(): TermDto[] {
        return this.term;
    }

}