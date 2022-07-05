import { Base } from "./base";

export class Dependencies {
    private static DependenciesCount = 0;
    constructor(public currentDependency: () => void, public target: Base, public property: string) {
    }
    dependencies: Array<{ obj: Base, prop: string, id: string }> = [];
    id: string = "" + (++Dependencies.DependenciesCount);
    addDependency(target: Base, property: string): void {
      if (this.target === target && this.property === property)
        return;
      if (this.dependencies.some(dependency => dependency.obj === target && dependency.prop === property))
        return;
  
      this.dependencies.push({
        obj: target,
        prop: property,
        id: this.id
      });
      target.registerPropertyValueListner(property, this.currentDependency, this.id);
  
    }
    dispose(): void {
      this.dependencies.forEach(dependency => {
        dependency.obj.unRegisterPropertyValueListner(dependency.prop, dependency.id);
      });
    }
  }
  
  export class ComputedUpdater<T = any> {
    public static readonly ComputedUpdaterType = "__dependency_computed";
    public static CollectDependencies<U = any>(obj: Base, computedUpdater: ComputedUpdater<U>, propertyName: string): U {
      Base.startCollectDependencies(() => obj[propertyName] = computedUpdater.updater(), obj, propertyName);
      const result = computedUpdater.updater();
      const dependencies = Base.finishCollectDependencies();
      computedUpdater.setDependencies(dependencies);
      return result;
    }
    private dependencies: Dependencies = undefined;
    constructor(private _updater: () => T) {
    }
    readonly type = ComputedUpdater.ComputedUpdaterType;
    public get updater(): () => T {
      return this._updater;
    }
    public setDependencies(dependencies: Dependencies): void {
      this.clearDependencies();
      this.dependencies = dependencies;
    }
    protected getDependencies(): Dependencies {
      return this.dependencies;
    }
    public observe(target: Base, propertyName: string) {
      ComputedUpdater.CollectDependencies(target, this, propertyName);
    }
    private clearDependencies() {
      if (this.dependencies) {
        this.dependencies.dispose();
        this.dependencies = undefined;
      }
    }
    dispose(): any {
      this.clearDependencies();
    }
  }
  