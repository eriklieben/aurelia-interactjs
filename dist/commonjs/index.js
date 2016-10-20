"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./draggable'));
__export(require('./dropzone'));
__export(require('./interact-draggable'));
__export(require('./interact-dropzone'));
__export(require('./interact-gesturable'));
__export(require('./interact-resizable'));
__export(require('./resizable'));
function configure(config, options) {
    var attributes = [
        "./interact-draggable",
        "./interact-dropzone",
        "./interact-gesturable",
        "./interact-resizable",
        "./resizable"
    ];
    if (options && options.enableDragDropAttributes === true) {
        attributes.push("./draggable");
        attributes.push("./dropzone");
    }
    config.globalResources(attributes);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
