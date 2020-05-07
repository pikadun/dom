# Dom

A minimal DOM implement with Typescript

## Example

```typescript
import Document from '@pikadun/dom';
const document = new Document();
const div = document.createElement('div');
div.setAttribute('class','test');
document.body.appendChild(div);

document.toString(); // <html><head></head><body><div></div><div class="test"></div></body></html>
```

## Installation

``` shell
npm install @pikadun/dom
```

## More APIs are coming soon

...
