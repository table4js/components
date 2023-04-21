export class Localization {
    static englishStrings = {
        filtercontains: "Contains",
        filterequal: "Equal",
        filterisnull: "Empty",
        filterisnotnull: "Not empty",
        filtergreater: "Greater",
        filterless: "Less",
        filtergreaterequal: "Greater or equal",
        filterlessequal: "Less or equal",
        filterdatenotequal: "Not equal",
        filterdateequal: "Equal",
        filterdategreater: "From",
        filterdateless: "To",
        noData: "No Data",
        true: "True",
        false: "False",
        saveRow: "Save",
        deleteRow: "Delete",
        addRow: "Add",
        saveEdit: "Save",
        cancelEdit: "Cancel",
        summary: "Summary",
        mergeCells: "Merge cells"
    };
    static getString = (stringId: string) => {
        return this.englishStrings[stringId];
    } 
}