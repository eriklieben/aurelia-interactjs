import { inject } from "aurelia-framework";
import * as interact from "interact";

@inject(Element)
export class DropzoneCustomAttribute {

  constructor(private element) { }

  public attached() {

    interact(this.element)
      .dropzone({
        accept: ".draggable",
        overlap: .5,
      })
      .on("dropactivate", event => event.target.classList.add("can--drop"))
      .on("dragenter", event => {

        let draggableElement = event.relatedTarget,
            dropzoneElement  = event.target;

        dropzoneElement.classList.add("can--catch");
        draggableElement.classList.add("drop--me");

      })
      .on("dragleave", event => {
        event.target.classList.remove("can--catch", "caught--it");
        event.relatedTarget.classList.remove("drop--me");
      })
      .on("drop", event => {
          if (typeof(event.relatedTarget.au.draggable.viewModel) === "object" &&
          typeof(event.relatedTarget.au.draggable.viewModel.value) === "object") {

            this.element.dispatchEvent(
              new CustomEvent("drop", {
                bubbles: true,
                detail: event.relatedTarget.au.draggable.viewModel.value,
              })
            );
          }
        event.target.classList.add("caught--it");
      })
      .on("dropdeactivate", event => {
        event.target.classList.remove("can--drop");
        event.target.classList.remove("can--catch");
      });
  }
}
