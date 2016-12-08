import { inject } from 'aurelia-framework';
import * as interact from 'interact';
import InteractBase from './interact-base';

@inject(Element)
export class InteractDropzoneCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = interact(this.element)
      .dropzone(Object.assign({}, this.value || {}))
      .on('dropactivate', (event) => this.dispatch('interact-dropactivate', event))
      .on('dragenter', (event) => this.dispatch('interact-dragenter', event))
      .on('dragleave', (event) => this.dispatch('interact-dragleave', event))
      .on('drop', (event) => this.dispatch('interact-drop', event))
      .on('dropdeactivate', (event) => this.dispatch('interact-dropdeactivate', event));
  }
}
