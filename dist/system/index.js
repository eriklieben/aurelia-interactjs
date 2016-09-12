System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config, options) {
        var attributes = [
            "./interact-draggable",
            "./interact-dropzone",
            "./interact-gesturable",
            "./interact-resizable",
        ];
        if (options && options.enableDragDropAttributes === true) {
            attributes.push("./draggable");
            attributes.push("./dropzone");
        }
        config.globalResources(attributes);
    }
    exports_1("configure", configure);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=index.js.map
