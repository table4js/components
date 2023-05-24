import { IFieldType } from "../../shared/domain";
import { ReferenceField } from "../../shared/field-types/reference";
import { TableCell } from "../cell";


TableCell.registerCellType(new ReferenceField());