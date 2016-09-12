export function configure(config, options) {

  let attributes = [
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
