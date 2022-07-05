import { Base } from "./base";
import { ComputedUpdater } from "./dependencies";

export interface IPropertyDecoratorOptions {
    defaultValue?: any;
    defaultSource?: string;
    onSet?: (val: any, target: any) => void;
}

export function property(options?: IPropertyDecoratorOptions) {
    return function (target: any, key: string) {
        let processComputedUpdater = (obj: any, val: any) => {
            if (!!val && typeof val === "object" && val.type === ComputedUpdater.ComputedUpdaterType) {
                return ComputedUpdater.CollectDependencies(obj, val, key);
            }
            return val;
        };
        Object.defineProperty(target, key, {
            get: function () {
                const value = this.getPropertyValue(key);
                if (value !== undefined) {
                    return value;
                }
                if (!!options) {
                    if (options.defaultValue !== undefined) {
                        return options.defaultValue;
                    }
                    if (options.defaultSource !== undefined) {
                        return this[options.defaultSource];
                    }
                }
                return undefined;
            },
            set: function (val: any) {
                const newValue = processComputedUpdater(this, val);
                this.setPropertyValue(key, newValue);
                if (!!options && options.onSet) {
                    options.onSet(newValue, this);
                }
            },
        });
    }
}
