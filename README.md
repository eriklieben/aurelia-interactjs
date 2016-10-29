# aurelia-interactjs

Aurelia plugin to use the [interact.js](http://interactjs.io/) library.

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
Each attribute can be supplied with custom options that will be pased to interactjs, see the interactjs documentation for the options http://interactjs.io/docs/#action-options

## Usage:
```html
<div interact-draggable.bind="options" />
```

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

