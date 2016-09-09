"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var interact = require("interact");
var InteractDraggableCustomAttribute = (function () {
    function InteractDraggableCustomAttribute(element) {
        this.element = element;
    }
    InteractDraggableCustomAttribute.prototype.attached = function () {
        var _this = this;
        interact(this.element)
            .draggable(Object.assign({}, this.options || {}))
            .on("dragstart", function (event) { return _this.dispatch("interact-dragstart", event); })
            .on("dragmove", function (event) { return _this.dispatch("interact-dragmove", event); })
            .on("draginertiastart", function (event) { return _this.dispatch("interact-draginertiastart", event); })
            .on("dragend", function (event) { return _this.dispatch("interact-dragend", event); });
    };
    InteractDraggableCustomAttribute.prototype.dispatch = function (name, data) {
        this.element.dispatchEvent(new CustomEvent(name, {
            bubbles: true,
            detail: data
        }));
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
        __metadata('design:type', Object)
    ], InteractDraggableCustomAttribute.prototype, "options", void 0);
    InteractDraggableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], InteractDraggableCustomAttribute);
    return InteractDraggableCustomAttribute;
}());
exports.InteractDraggableCustomAttribute = InteractDraggableCustomAttribute;

//# sourceMappingURL=interact-draggable.js.map
