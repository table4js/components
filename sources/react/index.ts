import { Base, HashTableStorage } from "../core/base";

export * from "./abris-component";
export * from "./table";
export * from "./table/cell";
export * from "./table/cell-editor";
export * from "./table/cell-viewer";
export * from "./table/row";
export * from "./table/summary";
export * from "./table/search";
// export * from "./table/filter-default";
export * from "./table/column-filter";
export * from "./table/filter-select";
export * from "./widgets/action";
export * from "./widgets/actions";
export * from "./widgets/dropdown-actions";
// export * from "./widgets/icon";

export * from "./table/bool-cell-editor";
export * from "./table/bool-cell-viewer";

export * from "..";

export class ReactHashTableStorage extends HashTableStorage {
  private linkArrayToObservable(array: Array<any>) {
    const result = [].concat(array);
    const self = this;
    ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(
      (funcName) => {
        result[funcName] = function () {
          const funcRes = Array.prototype[funcName].apply(result, arguments);
          Array.prototype[funcName].apply(array, arguments);
          if (typeof self.owner.__triggerUpdate === "function") {
            self.owner.__triggerUpdate();
          }
          return funcRes;
        };
      }
    );
    return result;
  }
  public getValue(name: string, defaultValue?: any) {
    const value = super.getValue(name, defaultValue);
    if (value === defaultValue) {
      this.hash[name] = value;
    }
    if (Array.isArray(value)) {
      return this.linkArrayToObservable(value);
    }
    return value;
  }
  public setValue(name: string, val: any) {
    super.setValue(name, val);
    if (typeof this.owner.__triggerUpdate === "function") {
      this.owner.__triggerUpdate();
    }
  }
}

Base.createPropertiesStorage = () => new ReactHashTableStorage();
