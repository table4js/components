import { IFieldType } from "../../shared/domain";
import { ReferenceField } from "../../shared/field-types/reference";
import { Property } from "../property";


Property.registerPropertyType(new ReferenceField());