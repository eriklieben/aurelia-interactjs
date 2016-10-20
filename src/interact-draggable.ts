import { inject } from "aurelia-framework";
import * as interact from "interact";

@inject(Element)
export class InteractDraggableCustomAttribute {

  /**
   * interact.js options
   */
  value: {[key: string]: any};

  constructor(private element: HTMLElement) { }

  public attached() {
    interact(this.element)
      .draggable(Object.assign({}, this.value || {}))
      .on("dragstart", (event) => this.dispatch("interact-dragstart", event))
      .on("dragmove", (event) => this.dispatch("interact-dragmove", event))
      .on("draginertiastart", (event) => this.dispatch("interact-draginertiastart", event))
      .on("dragend", (event) => this.dispatch("interact-dragend", event));
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
