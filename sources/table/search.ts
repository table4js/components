import { Base } from "../core/base";
import { property } from "../core/property";

import "./search.scss";

export class SearchModel extends Base {
    search = (text: string) => {
        this.prevSearchValue = this.searchValue;
        this.searchValue = text;
    }
    @property() prevSearchValue: string;
    @property() searchValue: string;
}
