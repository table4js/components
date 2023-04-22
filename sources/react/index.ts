import { Base, HashTableStorage } from "../common/shared/base";

export * from "./abris-component";
export * from "./table";
export * from "./table/cell";
export * from "./table/cell-types/default";
export * from "./table/cell-types/indicator";
export * from "./table/cell-types/progress";
export * from "./table/row";
export * from "./table/summary";
export * from "./table/search";
export * from "./table/filter";
export * from "./table/column-filter";
export * from "./table/filter-select";
export * from "./shared/action";
export * from "./shared/actions";
export * from "./shared/dropdown-actions";
export * from "./shared/elements-container";

export * from "./table/cell-editor";
export * from "./table/row-editor";

export * from "./widgets/default";
export * from "./widgets/checkbox";
export * from "./widgets/property";
export * from "./widgets/form";

export * from "../common";

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
