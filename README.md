# Dom

A DOM tree implement with Typescript!

## Feature

+ Provide the same API like the browser.
+ Small and lightweight.

## Example

```typescript
import { Document } from '@pikadun/dom';
const document = new Document();
const div = document.createElement('div');
div.setAttribute('class','test');
document.appendChild(div);

// <div class="test"></div>
document.toString();
```

## Installation

``` shell
npm install @pikadun/dom
```

## Document

More document can be found on [https://github.com/pikadun/dom/wiki](https://github.com/pikadun/dom/wiki)
