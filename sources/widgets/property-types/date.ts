import { IFieldType } from "../../core/domain";
import { DateField } from "../../core/field-types/date";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new DateField());