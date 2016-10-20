import { inject } from 'aurelia-framework';
import * as interact from 'interact';

@inject(Element)
export class InteractDropzoneCustomAttribute {

  /**
   * interact.js options
   */
  public value: {[key: string]: any};

  constructor(private element: HTMLElement) { }

  public attached() {
    interact(this.element)
      .dropzone(Object.assign({}, this.value || {}))
        .on('dropactivate', (event) => this.dispatch('interact-dropactivate', event))
        .on('dragenter', (event) => this.dispatch('interact-dragenter', event))
        .on('dragleave', (event) => this.dispatch('interact-dragleave', event))
        .on('drop', (event) => this.dispatch('interact-drop', event))
        .on('dropdeactivate', (event) => this.dispatch('interact-dropdeactivate', event));
  }

  private dispatch(name, data) {
    this.element.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        detail: data,
      })
    );
  }
}
