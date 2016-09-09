# aurelia-interactjs

Aurelia plugin to use the [interact.js](http://interactjs.io/) library.

# Installation

## JSPM
Install the package:
```
jspm i npm:aurelia-interactjs
```

Add the following line to main.js or main.ts
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
npm i aurelia-interactjs interact.js --save
```

Open up the file ```aurelia_project/aurelia.json``` and add the following in the bundles, vender-bundle.js dependencies section:
```diff
"aurelia-templating-binding",
+ {
+   "name": "interact.js",
+   "path": "../node_modules/interact.js/dist",
+   "main": "interact"
+ },
+ {
+   "name": "aurelia-interactjs",
+   "path": "../node_modules/aurelia-interactjs/dist/amd",
+   "main": "index"
+ },          
{
  "name": "text",
  "path": "../scripts/text"
},
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
| ------------------------- | ----------------- |
| interact-dragstart        | dragstart         |
| interact-dragmove         | dragmove          |
| interact-draginertiastart | draginertiastart  |
| interact-dragend          | dragend           |

## interact-dropzone

| Attribute                 | Interact.js event |
| ------------------------- | ----------------- |
| interact-dropactivate     | dropactivate      |
| interact-dragenter        | dragenter         |
| interact-dragleave        | dragleave         |
| interact-drop             | drop              |
| interact-dropdeactivate   | dropdeactivate    |

## interact-gesturable

| Attribute                 | Interact.js event |
| ------------------------- | ----------------- |
| interact-gesturestart     | gesturestart      |
| interact-gesturemove      | gesturemove       |
| interact-gestureend       | gestureend        |

## interact-resizable

| Attribute                   | Interact.js event  |
| --------------------------- | ------------------ |
| interact-resizestart        | resizestart        |
| interact-dragenter          | resizemove         |
| interact-resizeinertiastart | resizeinertiastart |
| interact-resizeend          | resizeend          |
