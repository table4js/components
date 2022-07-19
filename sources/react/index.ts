import { Base, HashTableStorage } from "../core/base";

export * from "./table";
// export * from "./table/cell-editor";
export * from "./table/cell";
export * from "./table/row";
export * from "./table/summary";
export * from "./table/search";
// export * from "./table/filter-default";
// export * from "./table/filter-item";
// export * from "./table/filter-select";
export * from "./widgets/action";
export * from "./widgets/actions";
export * from "./widgets/dropdown-actions";
// export * from "./widgets/icon";

export * from "..";

export class ReactHashTableStorage extends HashTableStorage {

    public setValue(name: string, val: any) {
        super.setValue(name, val);
        if(typeof this.owner.__triggerUpdate === "function") {
            this.owner.__triggerUpdate();
        }
    }
}

Base.createPropertiesStorage = () => new ReactHashTableStorage();
