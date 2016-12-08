define(["require", "exports", './draggable', './dropzone', './interact-draggable', './interact-dropzone', './interact-gesturable', './interact-resizable', './resizable', 'interact'], function (require, exports, draggable_1, dropzone_1, interact_draggable_1, interact_dropzone_1, interact_gesturable_1, interact_resizable_1, resizable_1, Interact) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(draggable_1);
    __export(dropzone_1);
    __export(interact_draggable_1);
    __export(interact_dropzone_1);
    __export(interact_gesturable_1);
    __export(interact_resizable_1);
    __export(resizable_1);
    function configure(aurelia, options) {
        aurelia.container.registerInstance(Interact, Interact);
        var attributes = [
            './interact-draggable',
            './interact-dropzone',
            './interact-gesturable',
            './interact-resizable',
            './resizable',
        ];
        if (options && options.enableDragDropAttributes === true) {
            attributes.push('./draggable');
            attributes.push('./dropzone');
        }
        aurelia.globalResources(attributes);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
