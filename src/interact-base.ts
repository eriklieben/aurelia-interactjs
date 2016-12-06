import * as interact from 'interact';

export default class InteractBase {

  /**
   * interact.js options
   */
  public value: {[key: string]: any};
  protected interactable;

  constructor(protected element: HTMLElement) { }

  public unbind() {
    this.unsetInteractJs();
  }

  protected unsetInteractJs() {
    if (this.interactable) {
      this.interactable.unset();
    }
  }

  protected dispatch(name, data) {
    this.element.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        detail: data,
      })
    );
  }
}
