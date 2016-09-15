var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "interact.js"], function (require, exports, aurelia_framework_1, interact) {
    "use strict";
    var InteractgesturableCustomAttribute = (function () {
        function InteractgesturableCustomAttribute(element) {
            this.element = element;
        }
        InteractgesturableCustomAttribute.prototype.attached = function () {
            var _this = this;
            interact(this.element)
                .dropzone(Object.assign({}, this.options || {}))
                .on("gesturestart", function (event) { return _this.dispatch("interact-gesturestart", event); })
                .on("gesturemove", function (event) { return _this.dispatch("interact-gesturemove", event); })
                .on("gestureend", function (event) { return _this.dispatch("interact-gestureend", event); });
        };
        InteractgesturableCustomAttribute.prototype.dispatch = function (name, data) {
            this.element.dispatchEvent(new CustomEvent(name, {
                bubbles: true,
                detail: data,
            }));
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
            __metadata('design:type', Object)
        ], InteractgesturableCustomAttribute.prototype, "options", void 0);
        InteractgesturableCustomAttribute = __decorate([
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [HTMLElement])
        ], InteractgesturableCustomAttribute);
        return InteractgesturableCustomAttribute;
    }());
    exports.InteractgesturableCustomAttribute = InteractgesturableCustomAttribute;
});

//# sourceMappingURL=interact-gesturable.js.map
