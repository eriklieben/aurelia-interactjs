import { inject } from 'aurelia-framework';
import * as interact from 'interact';
import InteractBase from './interact-base';

@inject(Element)
export class InteractDraggableCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = interact(this.element)
      .draggable(Object.assign({}, this.value || {}))
      .on('dragstart', (event) => this.dispatch('interact-dragstart', event))
      .on('dragmove', (event) => this.dispatch('interact-dragmove', event))
      .on('draginertiastart', (event) => this.dispatch('interact-draginertiastart', event))
      .on('dragend', (event) => this.dispatch('interact-dragend', event));
  }
}
