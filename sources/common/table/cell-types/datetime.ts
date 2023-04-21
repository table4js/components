import { IFieldType } from "../../shared/domain";
import { DateTimeField } from "../../shared/field-types/datetime";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new DateTimeField());