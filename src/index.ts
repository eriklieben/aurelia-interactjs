export * from './draggable';
export * from './dropzone';
export * from './interact-draggable';
export * from './interact-dropzone';
export * from './interact-gesturable';
export * from './interact-resizable';
export * from './resizable';
import * as Interact from 'interact';

export function configure(aurelia, options) {
  aurelia.container.registerInstance(Interact, Interact);
  let attributes = [
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
