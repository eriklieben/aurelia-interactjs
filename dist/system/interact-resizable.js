System.register(['aurelia-framework', 'interact', './interact-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, interact, interact_base_1;
    var InteractResizableCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (interact_1) {
                interact = interact_1;
            },
            function (interact_base_1_1) {
                interact_base_1 = interact_base_1_1;
            }],
        execute: function() {
            InteractResizableCustomAttribute = (function (_super) {
                __extends(InteractResizableCustomAttribute, _super);
                function InteractResizableCustomAttribute() {
                    _super.apply(this, arguments);
                }
                InteractResizableCustomAttribute.prototype.bind = function () {
                    var _this = this;
                    this.unsetInteractJs();
                    this.interactable = interact(this.element)
                        .resizable(Object.assign({}, this.value || {}))
                        .on('resizestart', function (event) { return _this.dispatch('interact-resizestart', event); })
                        .on('resizemove', function (event) { return _this.dispatch('interact-resizemove', event); })
                        .on('resizeinertiastart', function (event) { return _this.dispatch('interact-resizeinertiastart', event); })
                        .on('resizeend', function (event) { return _this.dispatch('interact-resizeend', event); });
                };
                InteractResizableCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element), 
                    __metadata('design:paramtypes', [])
                ], InteractResizableCustomAttribute);
                return InteractResizableCustomAttribute;
            }(interact_base_1.default));
            exports_1("InteractResizableCustomAttribute", InteractResizableCustomAttribute);
        }
    }
});

//# sourceMappingURL=interact-resizable.js.map
