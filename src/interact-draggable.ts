import { inject } from 'aurelia-framework';
import * as Interact from 'interact';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class InteractDraggableCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .draggable(this.getActionOptions())
      .on('dragstart', (event) => this.dispatch('interact-dragstart', event))
      .on('dragmove', (event) => this.dispatch('interact-dragmove', event))
      .on('draginertiastart', (event) => this.dispatch('interact-draginertiastart', event))
      .on('dragend', (event) => this.dispatch('interact-dragend', event));
  }
}
