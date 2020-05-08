import DOMElement from './element';
import util from './util';

class Document {
    readonly html: DOMElement;
    constructor() {
        this.html = this.createElement('html');
    }

    createElement(tagName: string): DOMElement {
        return new DOMElement(tagName);
    }

    getElementsByTagName(qualifiedName: string): DOMElement[] {
        return util.domWalk(
            this.html,
            (e: DOMElement) => e.tagName.toLowerCase() === qualifiedName.toLowerCase()
        );
    }
}

export { DOMElement, Document };