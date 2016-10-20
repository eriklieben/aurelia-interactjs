import { inject } from "aurelia-framework";
import * as interact from "interact";

@inject(Element)
export class ResizableCustomAttribute {

  /**
   * interact.js options
   */
  defaults: {[key: string]: any} = {
    edges: {
      left: true,
      right: true,
      bottom: true,
      top: true
    }
  };

  value: {[key: string]: any};

  constructor(private element: HTMLElement) { }

  public attached() {

    this.element.classList.add("resizable");

    interact(this.element)
      .resizable(Object.assign({}, this.value || this.defaults))
        .on("resizemove", event => {
          let target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

          // update the element's style
          target.style.width  = event.rect.width + 'px';
          target.style.height = event.rect.height + 'px';

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);

          target.classList.add("getting--resized");
        })
        .on("resizeend", event => {
          event.target.classList.remove("getting--resized");
        });
  }
}

