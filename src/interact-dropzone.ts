import { inject } from 'aurelia-framework';
import * as Interact from 'interact';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class InteractDropzoneCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .dropzone(this.getActionOptions())
      .on('dropactivate', (event) => this.dispatch('interact-dropactivate', event))
      .on('dragenter', (event) => this.dispatch('interact-dragenter', event))
      .on('dragleave', (event) => this.dispatch('interact-dragleave', event))
      .on('drop', (event) => this.dispatch('interact-drop', event))
      .on('dropdeactivate', (event) => this.dispatch('interact-dropdeactivate', event));
  }
}
