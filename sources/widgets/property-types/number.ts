import { IFieldType } from "../../core/domain";
import { NumberField } from "../../core/field-types/number";
import { Property } from "../property";


Property.registerPropertyType(new NumberField());