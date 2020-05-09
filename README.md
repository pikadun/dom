# Dom

A minimal DOM implement with Typescript

## Example

```typescript
import Document from '@pikadun/dom';
const document = new Document();
const div = document.createElement('div');
div.setAttribute('class','test');
document.html.appendChild(div);

// <html><div class="test"></div></html>
document.toString();
```

## Installation

``` shell
npm install @pikadun/dom
```

## Document

More document can be found on [https://github.com/pikadun/dom/wiki](https://github.com/pikadun/dom/wiki)
