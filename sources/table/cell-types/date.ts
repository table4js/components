import { IFieldType } from "../../core/domain";
import { DateField } from "../../core/field-types/date";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new DateField());