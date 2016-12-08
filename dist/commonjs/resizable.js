"use strict";
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
var aurelia_framework_1 = require('aurelia-framework');
var Interact = require('interact');
var interact_base_1 = require('./interact-base');
var ResizableCustomAttribute = (function (_super) {
    __extends(ResizableCustomAttribute, _super);
    function ResizableCustomAttribute() {
        _super.apply(this, arguments);
        this.defaults = {
            edges: {
                bottom: true,
                left: true,
                right: true,
                top: true,
            },
        };
    }
    ResizableCustomAttribute.prototype.bind = function () {
        this.unsetInteractJs();
        this.element.classList.add('resizable');
        this.interactable = this.interact(this.element, this.getInteractableOptions())
            .resizable(this.getActionOptions(this.defaults))
            .on('resizemove', function (event) {
            var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0), y = (parseFloat(target.getAttribute('data-y')) || 0);
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            x += event.deltaRect.left;
            y += event.deltaRect.top;
            target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            target.classList.add('getting--resized');
        })
            .on('resizeend', function (event) {
            event.target.classList.remove('getting--resized');
        });
    };
    ResizableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, Interact), 
        __metadata('design:paramtypes', [])
    ], ResizableCustomAttribute);
    return ResizableCustomAttribute;
}(interact_base_1.default));
exports.ResizableCustomAttribute = ResizableCustomAttribute;

//# sourceMappingURL=resizable.js.map
