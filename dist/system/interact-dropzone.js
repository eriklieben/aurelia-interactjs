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
    var aurelia_framework_1, Interact, interact_base_1;
    var InteractDropzoneCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Interact_1) {
                Interact = Interact_1;
            },
            function (interact_base_1_1) {
                interact_base_1 = interact_base_1_1;
            }],
        execute: function() {
            InteractDropzoneCustomAttribute = (function (_super) {
                __extends(InteractDropzoneCustomAttribute, _super);
                function InteractDropzoneCustomAttribute() {
                    _super.apply(this, arguments);
                }
                InteractDropzoneCustomAttribute.prototype.bind = function () {
                    var _this = this;
                    this.unsetInteractJs();
                    this.interactable = this.interact(this.element, this.getInteractableOptions())
                        .dropzone(this.getActionOptions())
                        .on('dropactivate', function (event) { return _this.dispatch('interact-dropactivate', event); })
                        .on('dragenter', function (event) { return _this.dispatch('interact-dragenter', event); })
                        .on('dragleave', function (event) { return _this.dispatch('interact-dragleave', event); })
                        .on('drop', function (event) { return _this.dispatch('interact-drop', event); })
                        .on('dropdeactivate', function (event) { return _this.dispatch('interact-dropdeactivate', event); });
                };
                InteractDropzoneCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element, Interact), 
                    __metadata('design:paramtypes', [])
                ], InteractDropzoneCustomAttribute);
                return InteractDropzoneCustomAttribute;
            }(interact_base_1.default));
            exports_1("InteractDropzoneCustomAttribute", InteractDropzoneCustomAttribute);
        }
    }
});

//# sourceMappingURL=interact-dropzone.js.map
