import { inject } from 'aurelia-framework';
import * as Interact from 'interact';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class InteractGesturableCustomAttribute extends InteractBase {

  public bind() {
    this.unsetInteractJs();
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .dropzone(this.getActionOptions())
      .on('gesturestart', (event) => this.dispatch('interact-gesturestart', event))
      .on('gesturemove', (event) => this.dispatch('interact-gesturemove', event))
      .on('gestureend', (event) => this.dispatch('interact-gestureend', event));
  }
}
