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
var DraggableCustomAttribute = (function () {
    function DraggableCustomAttribute(element) {
        this.element = element;
    }
    DraggableCustomAttribute.prototype.attached = function () {
        this.element.classList.add('draggable');
        interact(this.element)
            .draggable(Object.assign({}, this.value || {}))
            .on('dragmove', function (event) {
            var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            target.classList.add('getting--dragged');
        })
            .on('dragend', function (event) {
            event.target.style.transform = 'none';
            event.target.removeAttribute('data-x');
            event.target.removeAttribute('data-y');
            event.target.classList.remove('getting--dragged');
        });
    };
    DraggableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], DraggableCustomAttribute);
    return DraggableCustomAttribute;
}());
exports.DraggableCustomAttribute = DraggableCustomAttribute;

//# sourceMappingURL=draggable.js.map
