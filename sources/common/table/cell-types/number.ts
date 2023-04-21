import { IFieldType } from "../../shared/domain";
import { NumberField } from "../../shared/field-types/number";
import { TableCell } from "../cell";


TableCell.registerCellType(new NumberField());