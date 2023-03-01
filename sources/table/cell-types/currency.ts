import { IFieldType } from "../../core/domain";
import { CurrencyField } from "../../core/field-types/currency";
import { TableCell } from "../cell";


TableCell.registerCellType(new CurrencyField());