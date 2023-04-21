import { IFieldType } from "../../shared/domain";
import { CurrencyField } from "../../shared/field-types/currency";
import { Property } from "../property";


Property.registerPropertyType(new CurrencyField());