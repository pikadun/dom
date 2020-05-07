import Serialize from './serialize';

class DOMElement {
    parent: DOMElement;
    child: DOMElement[];
    attribute: { [x: string]: string };
    style: { [x: string]: string };
    constructor(public name: string) {
        this.parent = Object.create(null);
        this.child = [];
        this.style = {};
        this.attribute = {};
    }

    appendChild(newChild: DOMElement): void {
        newChild.parent = this;
        this.child.push(newChild);
    }

    removeChild(element: DOMElement): void {
        const index = this.child.indexOf(element);
        this.child.splice(index, 1);
        element = Object.create(null);
    }

    setAttribute(qualifiedName: string, value: string): void {
        this.attribute[qualifiedName] = value;
    }

    toString(): string {
        return Serialize.encode(this);
    }
}

export default DOMElement;