import { Dependencies } from "./dependencies";

export class HashTableStorage {
    protected hash = {};
    public getValue(name: string) {
        return this.hash[name];
    }
    public setValue(name: string, val: any) {
        this.hash[name] = val;
    }
}

export class Base {
    private propertyValueListners: {[propertyName: string]: {[key: string]: (oldValue: any, newValue: any) => void }} = {};

    private static currentDependencis: Dependencies = undefined;

    public static createPropertiesStorage = () => {
        return new HashTableStorage();
    }
    public static finishCollectDependencies(): Dependencies {
      const deps = Base.currentDependencis;
      Base.currentDependencis = undefined;
      return deps;
    }
    public static startCollectDependencies(updater: () => void, target: Base, property: string): void {
      if (Base.currentDependencis !== undefined) {
        throw new Error("Attempt to collect nested dependencies. Nested dependencies are not supported.");
      }
      Base.currentDependencis = new Dependencies(updater, target, property);
    }
    private static collectDependency(target: Base, property: string): void {
      if (Base.currentDependencis === undefined) return;
      Base.currentDependencis.addDependency(target, property);
    }
  
    constructor(private storage = Base.createPropertiesStorage()) {

    }

    protected onPropertyValueChanged(propertyName: string, oldValue: any, newValue: any) {
        let propertyListners = this.propertyValueListners[propertyName];
        if(!!propertyListners) {
            Object.keys(propertyListners).forEach(key => propertyListners[key](oldValue, newValue));
        }
    }

    protected getPropertyValueCore(propertyName: string, defaultValue?: any) {
        Base.collectDependency(this, propertyName);
        const value = this.storage.getValue(propertyName);
        if(value === undefined) {
            return defaultValue;
        }
        return value;
    }
    protected setPropertyValueCore(propertyName: string, newValue: any) {
        this.storage.setValue(propertyName, newValue);
    }

    public getPropertyValue(propertyName: string, defaultValue?: any) {
        return this.getPropertyValueCore(propertyName, defaultValue);
    }
    public setPropertyValue(propertyName: string, newValue: any) {
        const oldValue = this.getPropertyValue(propertyName);
        if(oldValue !== newValue) {
            this.setPropertyValueCore(propertyName, newValue);
            this.onPropertyValueChanged(propertyName, oldValue, newValue);
        }
    }

    public registerPropertyValueListner(propertyName: string, listner: (oldValue: any, newValue: any) => void, key: string = null) {
        let propertyListners = this.propertyValueListners[propertyName];
        if(!propertyListners) {
            propertyListners = {}
            this.propertyValueListners[propertyName] = propertyListners;
        }
        propertyListners[key] = listner;
    }
    public unRegisterPropertyValueListner(propertyName: string, key: string = null) {
        let propertyListners = this.propertyValueListners[propertyName];
        if(!!propertyListners) {
            delete propertyListners[key];
        }
    }

}