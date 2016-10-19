import { inject, bindable, bindingMode } from "aurelia-framework";
import * as interact from "interact";

@inject(Element)
export class InteractResizableCustomAttribute {

  constructor(private element: HTMLElement) { }
  
  value: any;

  public attached() {
    interact(this.element)
      .resizable(Object.assign({}, this.value || {}))
        .on("resizestart", (event) => this.dispatch("interact-resizestart", event))
        .on("resizemove", (event) => this.dispatch("interact-resizemove", event))
        .on("resizeinertiastart", (event) => this.dispatch("interact-resizeinertiastart", event))
        .on("resizeend", (event) => this.dispatch("interact-resizeend", event));
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
