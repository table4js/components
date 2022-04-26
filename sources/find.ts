type  TOperation = "EQ" | "NEQ" | "G" | "L" | "GEQ" | "LEQ" | "ISN" | "ISNN" | "C";
export interface IFindOperation {
    id: string;
    text: string;
    op: string;
    func?: string;
}

export interface IFindCompare {
    field: string;
    op: TOperation;
    value: string;
}

export interface IFindOperand {
    levelup: boolean;
    operand: {
        field: string,
        op: TOperation,
        value: string | Number,
        path?: string[],
        search_in_key?: boolean,
        m_order?: boolean,
        func?: string,
    },
}

export interface IAggregate {
    func: string,
    field: string,
}
  
export interface IFindLogic {
    strict: boolean;
    operands: IFindOperand[];
    aggregate?: IAggregate[];
}

export interface IFindProperty {
    operation: KnockoutObservable<string>;
    val1: KnockoutObservable<any>;
    val2: KnockoutObservable<any>;
}
