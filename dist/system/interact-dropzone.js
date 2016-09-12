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
    var InteractDropzoneCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (interact_1) {
                interact = interact_1;
            }],
        execute: function() {
            InteractDropzoneCustomAttribute = (function () {
                function InteractDropzoneCustomAttribute(element) {
                    this.element = element;
                }
                InteractDropzoneCustomAttribute.prototype.attached = function () {
                    var _this = this;
                    interact(this.element)
                        .dropzone(Object.assign({}, this.options || {}))
                        .on("dropactivate", function (event) { return _this.dispatch("interact-dropactivate", event); })
                        .on("dragenter", function (event) { return _this.dispatch("interact-dragenter", event); })
                        .on("dragleave", function (event) { return _this.dispatch("interact-dragleave", event); })
                        .on("drop", function (event) { return _this.dispatch("interact-drop", event); })
                        .on("dropdeactivate", function (event) { return _this.dispatch("interact-dropdeactivate", event); });
                };
                InteractDropzoneCustomAttribute.prototype.dispatch = function (name, data) {
                    this.element.dispatchEvent(new CustomEvent(name, {
                        bubbles: true,
                        detail: data,
                    }));
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
                    __metadata('design:type', Object)
                ], InteractDropzoneCustomAttribute.prototype, "options", void 0);
                InteractDropzoneCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element), 
                    __metadata('design:paramtypes', [HTMLElement])
                ], InteractDropzoneCustomAttribute);
                return InteractDropzoneCustomAttribute;
            }());
            exports_1("InteractDropzoneCustomAttribute", InteractDropzoneCustomAttribute);
        }
    }
});

//# sourceMappingURL=interact-dropzone.js.map
