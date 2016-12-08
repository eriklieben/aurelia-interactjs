define(["require", "exports"], function (require, exports) {
    "use strict";
    var InteractBase = (function () {
        function InteractBase(element) {
            this.element = element;
        }
        InteractBase.prototype.unbind = function () {
            this.unsetInteractJs();
        };
        InteractBase.prototype.unsetInteractJs = function () {
            if (this.interactable) {
                this.interactable.unset();
            }
        };
        InteractBase.prototype.dispatch = function (name, data) {
            this.element.dispatchEvent(new CustomEvent(name, {
                bubbles: true,
                detail: data,
            }));
        };
        return InteractBase;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = InteractBase;
});

//# sourceMappingURL=interact-base.js.map
