import { inject } from 'aurelia-framework';
import * as Interact from 'interact';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class ResizableCustomAttribute extends InteractBase {

  /**
   * interact.js options
   */
  private defaults: {[key: string]: any} = {
    edges: {
      bottom: true,
      left: true,
      right: true,
      top: true,
    },
  };

  public bind() {
    this.unsetInteractJs();
    this.element.classList.add('resizable');
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .resizable(this.getActionOptions(this.defaults))
        .on('resizemove', event => {
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

          target.classList.add('getting--resized');
        })
        .on('resizeend', event => {
          event.target.classList.remove('getting--resized');
        });
  }
}

