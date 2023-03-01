import { Base } from "../core/base";
import { property } from "../core/property";
import { IFieldDescription } from "../knockout";

export class Form extends Base {
    constructor(private fields: Array<IFieldDescription>, private layout?: any) {
        super();
        
    }
    
    @property({
        onSet: (val, target: Form) => {

        }
    }) object: any;
}