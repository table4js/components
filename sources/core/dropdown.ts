export class Dropdown {
    constructor($element: JQuery, isOpen: ko.Observable = undefined ) {
        var $applicationRoot = $(document).find(".abris-application");
        var hide = (event) => {
            if ($(event.target).closest($element).length === 0
                || ($(event.target).closest(".btn-default").length !== 0)) {
                $applicationRoot.off("click.abris-dropdown", hide);
                $element.removeClass("open");
                _isOpen = false;
            }
        }
        var _isOpen = false;
        this.toggle = (model, event: JQueryMouseEventObject) => {
            if (!_isOpen) {
                $element.addClass("open");
                setTimeout(() => $applicationRoot.on("click.abris-dropdown", hide), 1);
            }
            else {
                $element.removeClass("open");
                $applicationRoot.off("click.abris-dropdown", hide);
            }
            _isOpen = !_isOpen;
            if (isOpen) isOpen(_isOpen);
        }
    }
    toggle: (model, event: JQueryMouseEventObject) => void;
}