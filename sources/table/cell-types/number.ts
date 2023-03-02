import { IFieldType } from "../../core/domain";
import { NumberField } from "../../core/field-types/number";
import { TableCell } from "../cell";


TableCell.registerCellType(new NumberField());