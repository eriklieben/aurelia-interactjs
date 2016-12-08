export default class InteractBase {

  /**
   * interact.js options
   */
  public value: {
    [key: string]: any,
    action: {[key: string]: any},
    interactable: {[key: string]: any}
  };
  public interactable;

  constructor(protected element: HTMLElement, protected interact: any) { }

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

  protected getInteractableOptions() {
    return this.hasInteractableOptionsKey() ? this.value.interactable : undefined;
  }

  protected getActionOptions(defaults?: any) {
    // If the interactable options are defined but the action ones aren't don't use them by mistake! :-)
    let valueIfNoInteractable = (!this.hasInteractableOptionsKey() ? this.value : undefined);
    let actionOptions = (this.value && this.hasActionOptionsKey()) ? this.value.action : valueIfNoInteractable;
    return Object.assign({}, actionOptions || (defaults || {}));
  }

  private hasInteractableOptionsKey() {
    return this.value && !!this.value.interactable;
  }

  private hasActionOptionsKey() {
    return this.value && !!this.value.action;
  }
}
