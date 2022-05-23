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

export class Localization {
    static getString(stringId: string) {
        return stringId;
    } 
}

export var operationsMap: { [index: string]: IFindOperation[] } = {};
export function operationsMapReload () {
    var defaultOperationsMap = {
    caption: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    string: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    text: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    plain: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    date: [
        {id: "EQ", text: Localization.getString("filterdateequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filterdatenotequal"), op: "!="},
        {id: "G", text: Localization.getString("filterdategreater"), op: ">"},
        {id: "L", text: Localization.getString("filterdateless"), op: "<"},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    datetime: [
        {id: "G", text: Localization.getString("filterdategreater"), op: ">"},
        {id: "L", text: Localization.getString("filterdateless"), op: "<"},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    parent_id: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    integer: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "G", text: Localization.getString("filtergreater"), op: ">"},
        {id: "L", text: Localization.getString("filterless"), op: "<"},
        {id: "GEQ", text: Localization.getString("filtergreaterequal"), op: ">="},
        {id: "LEQ", text: Localization.getString("filterlessequal"), op: "<="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    numeric: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "G", text: Localization.getString("filtergreater"), op: ">"},
        {id: "L", text: Localization.getString("filterless"), op: "<"},
        {id: "GEQ", text: Localization.getString("filtergreaterequal"), op: ">="},
        {id: "LEQ", text: Localization.getString("filterlessequal"), op: "<="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    ref_link: [
        {id: "C", text: Localization.getString("filtercontains"), op: "CONTAINS"},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    ref_tree: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "TEQ", text: "Поддерево", op: "TEQ"},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    bool: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="}
    ],
    money: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "G", text: Localization.getString("filtergreater"), op: ">"},
        {id: "L", text: Localization.getString("filterless"), op: "<"},
        {id: "GEQ", text: Localization.getString("filtergreaterequal"), op: ">="},
        {id: "LEQ", text: Localization.getString("filterlessequal"), op: "<="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
    radiobutton: [
        {id: "EQ", text: Localization.getString("filterequal"), op: "="},
        {id: "NEQ", text: Localization.getString("filternotequal"), op: "!="},
        {id: "ISN", text: Localization.getString("filterisnull"), op: "IS NULL"},
        {id: "ISNN", text: Localization.getString("filterisnotnull"), op: "IS NOT NULL"},
    ],
}
    $.each(defaultOperationsMap, (k, v) => {operationsMap[k] = v});
};
operationsMapReload ();