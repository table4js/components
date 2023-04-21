import { IFieldType } from "../../shared/domain";
import { DateField } from "../../shared/field-types/date";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new DateField());