import { Base } from "../core/base";
import { property } from "../core/property";

import "./search.scss";

export class SearchModel extends Base {
    search = (text: string) => {
        this.prevSearchValue = this.searchValue;
        this.searchValue = text;
        this.updater && this.updater();
    }
    updater: () => void;
    @property() prevSearchValue: string;
    @property() searchValue: string;
}
