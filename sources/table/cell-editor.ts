import * as ko from "knockout";
import { Base } from "../core/base";
import { ITableCell } from ".";

import "./cell-editor.scss";
import { property } from "../core/property";

var searchTemplate = require("./cell-editor.html").default;

export class InplaceEditor extends Base {
    constructor(private cell: ITableCell) {
        super();
        this.value = this.cell.text();
    }
    @property() value: any;
    complete(commit: boolean) {
        if(commit) {
            this.cell.text(this.value);
        }
        this.cell.inplaceEditForm(undefined);
    }
}

ko.components.register("abris-cell-editor", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var model = ko.unwrap(params.model);
            const process = event => {
                if(event.keyCode === 13 || event.keyCode === 27) model.complete(event.keyCode === 13);
            };
            componentInfo.element.addEventListener('keyup', process);
            setTimeout(() => {
                const input = componentInfo.element.querySelectorAll("input")[0];
                input.focus();
                input.select();
            }, 0);
            return model;
        }
    },
    template: searchTemplate
});
