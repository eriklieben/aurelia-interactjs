import { inject, bindable, bindingMode } from "aurelia-framework";
import * as interact from "interact";

@inject(Element)
export class InteractDropzoneCustomAttribute {

  @bindable({ defaultBindingMode: bindingMode.oneTime }) options;
  
  constructor(private element: HTMLElement) { }
  
  attached() {
    interact(this.element)
      .dropzone(Object.assign({}, this.options || {}))
        .on("dropactivate", (event) => this.dispatch("interact-dropactivate", event))
        .on("dragenter", (event) => this.dispatch("interact-dragenter", event))
        .on("dragleave", (event) => this.dispatch("interact-dragleave", event))
        .on("drop", (event) => this.dispatch("interact-drop", event))
        .on("dropdeactivate", (event) => this.dispatch("interact-dropdeactivate", event));
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