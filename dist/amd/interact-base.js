define(["require", "exports"], function (require, exports) {
    "use strict";
    var InteractBase = (function () {
        function InteractBase(element, interact) {
            this.element = element;
            this.interact = interact;
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
        InteractBase.prototype.getInteractableOptions = function () {
            return this.hasInteractableOptionsKey() ? this.value.interactable : undefined;
        };
        InteractBase.prototype.getActionOptions = function (defaults) {
            var valueIfNoInteractable = (!this.hasInteractableOptionsKey() ? this.value : undefined);
            var actionOptions = (this.value && this.hasActionOptionsKey()) ? this.value.action : valueIfNoInteractable;
            return Object.assign({}, actionOptions || (defaults || {}));
        };
        InteractBase.prototype.hasInteractableOptionsKey = function () {
            return this.value && !!this.value.interactable;
        };
        InteractBase.prototype.hasActionOptionsKey = function () {
            return this.value && !!this.value.action;
        };
        return InteractBase;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = InteractBase;
});

//# sourceMappingURL=interact-base.js.map
