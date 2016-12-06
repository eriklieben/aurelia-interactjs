System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InteractBase;
    return {
        setters:[],
        execute: function() {
            InteractBase = (function () {
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
            exports_1("default", InteractBase);
        }
    }
});

//# sourceMappingURL=interact-base.js.map
