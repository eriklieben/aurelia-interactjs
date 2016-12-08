import { inject } from 'aurelia-framework';
import * as Interact from 'interact';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class InteractResizableCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .resizable(this.getActionOptions())
      .on('resizestart', (event) => this.dispatch('interact-resizestart', event))
      .on('resizemove', (event) => this.dispatch('interact-resizemove', event))
      .on('resizeinertiastart', (event) => this.dispatch('interact-resizeinertiastart', event))
      .on('resizeend', (event) => this.dispatch('interact-resizeend', event));
  }
}
