import { IFieldType } from "../../core/domain";
import { CurrencyField } from "../../core/field-types/currency";
import { Property } from "../property";


Property.registerPropertyType(new CurrencyField());