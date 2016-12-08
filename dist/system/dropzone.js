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
    var DropzoneCustomAttribute;
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
            DropzoneCustomAttribute = (function (_super) {
                __extends(DropzoneCustomAttribute, _super);
                function DropzoneCustomAttribute() {
                    _super.apply(this, arguments);
                    this.defaults = {
                        accept: '.draggable',
                        overlap: .5,
                    };
                }
                DropzoneCustomAttribute.prototype.bind = function () {
                    var _this = this;
                    this.unsetInteractJs();
                    this.interactable = this.interact(this.element, this.getInteractableOptions())
                        .dropzone(this.getActionOptions(this.defaults))
                        .on('dropactivate', function (event) { return event.target.classList.add('can--drop'); })
                        .on('dragenter', function (event) {
                        var draggableElement = event.relatedTarget, dropzoneElement = event.target;
                        dropzoneElement.classList.add('can--catch');
                        draggableElement.classList.add('drop--me');
                    })
                        .on('dragleave', function (event) {
                        event.target.classList.remove('can--catch', 'caught--it');
                        event.relatedTarget.classList.remove('drop--me');
                    })
                        .on('drop', function (event) {
                        if (typeof (event.relatedTarget.au.draggable.viewModel) === 'object' &&
                            typeof (event.relatedTarget.au.draggable.viewModel.value) === 'object') {
                            _this.element.dispatchEvent(new CustomEvent('drop', {
                                bubbles: true,
                                detail: event.relatedTarget.au.draggable.viewModel.value,
                            }));
                        }
                        event.target.classList.add('caught--it');
                    })
                        .on('dropdeactivate', function (event) {
                        event.target.classList.remove('can--drop');
                        event.target.classList.remove('can--catch');
                    });
                };
                DropzoneCustomAttribute = __decorate([
                    aurelia_framework_1.inject(Element, Interact), 
                    __metadata('design:paramtypes', [])
                ], DropzoneCustomAttribute);
                return DropzoneCustomAttribute;
            }(interact_base_1.default));
            exports_1("DropzoneCustomAttribute", DropzoneCustomAttribute);
        }
    }
});

//# sourceMappingURL=dropzone.js.map
