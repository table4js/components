import { IFieldType } from "../../shared/domain";
import { DateField } from "../../shared/field-types/date";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new DateField());