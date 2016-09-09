System.register(["aurelia-framework", "interact"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, interact;
    var InteractresizableCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (interact_1) {
                interact = interact_1;
            }],
        execute: function() {
            InteractresizableCustomAttribute = (function () {
                function InteractresizableCustomAttribute(element) {
                    this.element = element;
                }
                InteractresizableCustomAttribute.prototype.attached = function () {
                    var _this = this;
                    interact(this.element)
                        .dropzone(Object.assign({}, this.options || {}))
                        .on("resizestart", function (event) { return _this.dispatch("interact-resizestart", event); })
                        .on("resizemove", function (event) { return _this.dispatch("interact-dragenter", event); })
                        .on("resizeinertiastart", function (event) { return _this.dispatch("interact-resizeinertiastart", event); })
                        .on("resizeend", function (event) { return _this.dispatch("interact-resizeend", event); });
                };
                InteractresizableCustomAttribute.prototype.dispatch = function (name, data) {
                    this.element.dispatchEvent(new CustomEvent(name, {
                        bubbles: true,
                        detail: data
                    }));
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
                    __metadata('design:type', Object)
                ], InteractresizableCustomAttribute.prototype, "options", void 0);
                InteractresizableCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element), 
                    __metadata('design:paramtypes', [HTMLElement])
                ], InteractresizableCustomAttribute);
                return InteractresizableCustomAttribute;
            }());
            exports_1("InteractresizableCustomAttribute", InteractresizableCustomAttribute);
        }
    }
});

//# sourceMappingURL=interact-resizable.js.map
