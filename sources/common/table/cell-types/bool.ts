import { IFieldType } from "../../shared/domain";
import { BoolField } from "../../shared/field-types/bool";
import { Localization } from "../../localization";
import { TableCell } from "../cell";


TableCell.registerCellType(new BoolField());