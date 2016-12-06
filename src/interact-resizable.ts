import { inject } from 'aurelia-framework';
import * as interact from 'interact';
import InteractBase from './interact-base';

@inject(Element)
export class InteractResizableCustomAttribute extends InteractBase {
  
  public bind() {
    this.unsetInteractJs();
    this.interactable = interact(this.element)
      .resizable(Object.assign({}, this.value || {}))
      .on('resizestart', (event) => this.dispatch('interact-resizestart', event))
      .on('resizemove', (event) => this.dispatch('interact-resizemove', event))
      .on('resizeinertiastart', (event) => this.dispatch('interact-resizeinertiastart', event))
      .on('resizeend', (event) => this.dispatch('interact-resizeend', event));
  }
}
