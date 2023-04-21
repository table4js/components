import { IFieldType } from "../../shared/domain";
import { CurrencyField } from "../../shared/field-types/currency";
import { TableCell } from "../cell";


TableCell.registerCellType(new CurrencyField());