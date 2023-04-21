export interface IFieldDescription {
    name: string;
    title: string;
    type: string;
    visible: boolean;
}

export interface IFieldType {
    name: string;
    css?: string;
    component?: string;
    getText?: (val: any) => string;
}