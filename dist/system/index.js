System.register(['./draggable', './dropzone', './interact-draggable', './interact-dropzone', './interact-gesturable', './interact-resizable', './resizable', 'interact'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Interact;
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
    exports_1("configure", configure);
    var exportedNames_1 = {
        'configure': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (draggable_1_1) {
                exportStar_1(draggable_1_1);
            },
            function (dropzone_1_1) {
                exportStar_1(dropzone_1_1);
            },
            function (interact_draggable_1_1) {
                exportStar_1(interact_draggable_1_1);
            },
            function (interact_dropzone_1_1) {
                exportStar_1(interact_dropzone_1_1);
            },
            function (interact_gesturable_1_1) {
                exportStar_1(interact_gesturable_1_1);
            },
            function (interact_resizable_1_1) {
                exportStar_1(interact_resizable_1_1);
            },
            function (resizable_1_1) {
                exportStar_1(resizable_1_1);
            },
            function (Interact_1) {
                Interact = Interact_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=index.js.map
