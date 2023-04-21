import { IFieldType } from "../../shared/domain";
import { NumberField } from "../../shared/field-types/number";
import { Property } from "../property";


Property.registerPropertyType(new NumberField());