import { IFieldType } from "../../core/domain";
import { DateTimeField } from "../../core/field-types/datetime";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new DateTimeField());