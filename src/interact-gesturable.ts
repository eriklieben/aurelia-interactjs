import { inject, bindable, bindingMode } from "aurelia-framework";
import * as interact from "interact.js";

@inject(Element)
export class InteractgesturableCustomAttribute {

  @bindable({ defaultBindingMode: bindingMode.oneTime }) options;
  
  constructor(private element: HTMLElement) { }
  
  attached() {
    interact(this.element)
      .dropzone(Object.assign({}, this.options || {}))
        .on("gesturestart", (event) => this.dispatch("interact-gesturestart", event))
        .on("gesturemove", (event) => this.dispatch("interact-gesturemove", event))
        .on("gestureend", (event) => this.dispatch("interact-gestureend", event));
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