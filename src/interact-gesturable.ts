import { inject } from 'aurelia-framework';
import * as interact from 'interact';
import InteractBase from './interact-base';

@inject(Element)
export class InteractGesturableCustomAttribute extends InteractBase {
  
  public bind() {
    this.unsetInteractJs();
    this.interactable = interact(this.element)
      .dropzone(Object.assign({}, this.value || {}))
      .on('gesturestart', (event) => this.dispatch('interact-gesturestart', event))
      .on('gesturemove', (event) => this.dispatch('interact-gesturemove', event))
      .on('gestureend', (event) => this.dispatch('interact-gestureend', event));
  }
}
