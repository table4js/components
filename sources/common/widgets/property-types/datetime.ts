import { IFieldType } from "../../shared/domain";
import { DateTimeField } from "../../shared/field-types/datetime";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new DateTimeField());