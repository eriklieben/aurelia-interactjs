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
var InteractDropzoneCustomAttribute = (function () {
    function InteractDropzoneCustomAttribute(element) {
        this.element = element;
    }
    InteractDropzoneCustomAttribute.prototype.attached = function () {
        var _this = this;
        interact(this.element)
            .dropzone(Object.assign({}, this.value || {}))
            .on('dropactivate', function (event) { return _this.dispatch('interact-dropactivate', event); })
            .on('dragenter', function (event) { return _this.dispatch('interact-dragenter', event); })
            .on('dragleave', function (event) { return _this.dispatch('interact-dragleave', event); })
            .on('drop', function (event) { return _this.dispatch('interact-drop', event); })
            .on('dropdeactivate', function (event) { return _this.dispatch('interact-dropdeactivate', event); });
    };
    InteractDropzoneCustomAttribute.prototype.dispatch = function (name, data) {
        this.element.dispatchEvent(new CustomEvent(name, {
            bubbles: true,
            detail: data,
        }));
    };
    InteractDropzoneCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element), 
        __metadata('design:paramtypes', [HTMLElement])
    ], InteractDropzoneCustomAttribute);
    return InteractDropzoneCustomAttribute;
}());
exports.InteractDropzoneCustomAttribute = InteractDropzoneCustomAttribute;

//# sourceMappingURL=interact-dropzone.js.map
