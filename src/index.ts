export * from './draggable';
export * from './dropzone';
export * from './interact-draggable';
export * from './interact-dropzone';
export * from './interact-gesturable';
export * from './interact-resizable';
export * from './resizable';

export function configure(config, options) {

  let attributes = [
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
