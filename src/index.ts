import DOMElement from './element';

class Document {
    html: DOMElement;
    head: DOMElement;
    body: DOMElement;

    constructor() {
        this.head = this.createElement('head');
        this.body = this.createElement('body');
        this.html = this.createElement('html');
        this.html.appendChild(this.head);
        this.html.appendChild(this.body);
    }

    createElement(name: string): DOMElement {
        return new DOMElement(name);
    }
}

export { DOMElement, Document };