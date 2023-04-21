import { IFieldType } from "../../shared/domain";
import { BoolField } from "../../shared/field-types/bool";
import { Localization } from "../../localization";
import { Property } from "../property";


Property.registerPropertyType(new BoolField());