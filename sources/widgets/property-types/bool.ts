import { IFieldType } from "../../core/domain";
import { BoolField } from "../../core/field-types/bool";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new BoolField());