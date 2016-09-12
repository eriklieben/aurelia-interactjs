define(["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
