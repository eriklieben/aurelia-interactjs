import { inject, bindable, bindingMode } from "aurelia-framework";
import * as interact from "interact.js";

@inject(Element)
export class InteractDraggableCustomAttribute {
  
  @bindable({ defaultBindingMode: bindingMode.oneTime }) 
  public options;
  
  constructor(private element: HTMLElement) { }
  
  attached() {
    interact(this.element)
      .draggable(Object.assign({}, this.options || {}))
      .on("dragstart", (event) => this.dispatch("interact-dragstart", event))
      .on("dragmove", (event) => this.dispatch("interact-dragmove", event))
      .on("draginertiastart", (event) => this.dispatch("interact-draginertiastart", event))
      .on("dragend", (event) => this.dispatch("interact-dragend", event));
  }
  
  dispatch(name, data) {
    this.element.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        detail: data
      })
    );
  }
}