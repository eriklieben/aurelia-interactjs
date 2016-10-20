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
var aurelia_framework_1 = require('aurelia-framework');
var interact = require('interact');
var ResizableCustomAttribute = (function () {
    function ResizableCustomAttribute(element) {
        this.element = element;
        this.defaults = {
            edges: {
                bottom: true,
                left: true,
                right: true,
                top: true,
            },
        };
    }
    ResizableCustomAttribute.prototype.attached = function () {
        this.element.classList.add('resizable');
        interact(this.element)
            .resizable(Object.assign({}, this.value || this.defaults))
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
        aurelia_framework_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], ResizableCustomAttribute);
    return ResizableCustomAttribute;
}());
exports.ResizableCustomAttribute = ResizableCustomAttribute;

//# sourceMappingURL=resizable.js.map
