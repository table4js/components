import { IFieldType } from "../../core/domain";
import { DateTimeField } from "../../core/field-types/datetime";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new DateTimeField());