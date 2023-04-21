import { ComputedUpdater } from "./dependencies";

export interface IPropertyDecoratorOptions {
    defaultValue?: any;
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
        const getDefaultValue = () => {
            let defaultValue = undefined;
            if (!!options) {
                if (options.defaultValue !== undefined) {
                    defaultValue = options.defaultValue;
                    defaultValue = Array.isArray(defaultValue) ? [].concat(defaultValue) : defaultValue;
                }
            }
            return defaultValue;
        }
        Object.defineProperty(target, key, {
            get: function () {
                return this.getPropertyValue(key, getDefaultValue());
            },
            set: function (val: any) {
                const newValue = processComputedUpdater(this, val);
                this.setPropertyValue(key, newValue, getDefaultValue());
                if (!!options && options.onSet) {
                    options.onSet(newValue, this);
                }
            },
        });
    }
}
