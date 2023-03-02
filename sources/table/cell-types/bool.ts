import { IFieldType } from "../../core/domain";
import { BoolField } from "../../core/field-types/bool";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new BoolField());