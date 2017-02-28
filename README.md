# aurelia-interactjs

Aurelia plugin to use the [interact.js](http://interactjs.io/) library.

Inspired by a blog post from Matthew James Davis [Drag-and-drop in Aurelia](http://davismj.me/blog/aurelia-drag-and-drop/).

# Installation

## JSPM
Install the package:
```
jspm i aurelia-interactjs
```

Add the following line to ```src/main.js``` or ```src/main.ts```:
```diff
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+    .plugin("aurelia-interactjs");
```
## Aurelia-CLI
Install the package:
```
npm i aurelia-interactjs --save
```
And perform the following command to add the configuration for aurelia-interactjs to the aurelia.json config:
```
au interact
```
Add the following line to ```src/main.js``` or ```src/main.ts```:
```diff
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
+    .plugin('aurelia-interactjs');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
```

# Generic attributes
Each attribute can be supplied with custom options that will be pased to interactjs, and are split into 2 types.
These are Interactable options and Action options.

See the [interactjs documentation]( http://interactjs.io/docs/#action-options) for the Action options.

Interactable options are described in the code. See the default values [here](https://github.com/taye/interact.js/blob/master/src/defaultOptions.js).

Prior to v2.0.7 only, action options were supported by the wrapper, for example:

## Usage:

### Action options only (pre and post 2.0.7)
```html
<div interact-draggable.bind="actionOptions" />
```
```js
let actionOptions = {
  overlap: 0.1
} 
```

### Action and Intreactable options usage:
In v2.0.7 and above both types are supported, for example:

```html
<div interact-draggable.bind="options" />
```

```js
let options = {
  action: { overlap: 0.1 }, 
  interactable: { preventDefault: 'never' }
} 
```
NOTE: If you use more than one custom attribute on a HTML element (e.g. draggable and dropzone on the same DIV) you should 
duplicate the interactable options on both as the fist one that is evaluated creates the interactable which is subsequently cached. 

Each event can be used in the following way:

```html
<div interact-draggable interact-dragmove.delegate="func($event)" />
```

```javascript
export class Home {
  public func(customEvent: CustomEvent) {
    let event = customEvent.detail;
    console.log("event", event);
  }
}
```

## interact-draggable
The following attributes can be set to catch events

| Attribute                 | Interact.js event |
| --------------------------|-------------------|
| interact-dragstart        | dragstart         |
| interact-dragmove         | dragmove          |
| interact-draginertiastart | draginertiastart  |
| interact-dragend          | dragend           |

## interact-dropzone

| Attribute                 | Interact.js event |
|---------------------------|-------------------|
| interact-dropactivate     | dropactivate      |
| interact-dragenter        | dragenter         |
| interact-dragleave        | dragleave         |
| interact-drop             | drop              |
| interact-dropdeactivate   | dropdeactivate    |

## interact-gesturable

| Attribute                 | Interact.js event |
|---------------------------|-------------------|
| interact-gesturestart     | gesturestart      |
| interact-gesturemove      | gesturemove       |
| interact-gestureend       | gestureend        |

## interact-resizable

| Attribute                   | Interact.js event  |
|-----------------------------|--------------------|
| interact-resizestart        | resizestart        |
| interact-resizemove         | resizemove         |
| interact-resizeinertiastart | resizeinertiastart |
| interact-resizeend          | resizeend          |


# Custom attributes draggable and dropzone

By default the attributes ```draggable``` and ```dropzone``` are not loaded (because the use global names).

You can load them by providing the option ```enableDragDropAttributes``` in ```src\main.js``` or ```src\main.ts``` :
```diff
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+    .plugin("aurelia-interactjs", { enableDragDropAttributes: true });
```

```html
<div draggable.bind="item" style="width: 25px; height: 25px; background-color:${color}; border: 5px solid yellow">drag me</div>

<div dropzone drop.trigger="itemDropped($event.detail, 'green')" style="width:300px; height: 300px; background-color: green"></div>
<div dropzone drop.trigger="itemDropped($event.detail, 'red')" style="width:300px; height: 300px; background-color: red"></div>
```

```javascript
export class App {
  item = { name: "some", color: "yellow"};

  updateColor(item, color) {
    item.color = color;
  }

}
```

By default it will add the following css classes to the element in the following states:

# draggable

| class             | state                                                |
|-------------------|------------------------------------------------------|
| getting--dragged  | draggable is getting dragged                         |
| drop--me          | draggable entered a dropzone and can be dropped here |

# dropzone

| class        | state                                               |
|--------------|-----------------------------------------------------|
| can--drop    | draggable target can be dropped in the dropzone     |
| can-catch    | draggable entered this zone and can be dropped here |
| caught--it   | draggable element is dropped in this zone           |

