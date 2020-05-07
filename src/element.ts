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

    removeChild(oldChild: DOMElement): void {
        const index = this.child.indexOf(oldChild);
        this.child.splice(index, 1);
        oldChild.parent = Object.create(null);
    }

    insertBefore(newChild: DOMElement, refChild?: DOMElement): void {
        newChild.parent = this;

        if (!refChild) {
            this.child.push(newChild);
            return;
        } else {
            const index = this.child.indexOf(newChild);
            this.child.splice(index, 0, newChild);
        }
    }

    setAttribute(qualifiedName: string, value: string): void {
        this.attribute[qualifiedName] = value;
    }

    toString(): string {
        return Serialize.encode(this);
    }
}

export default DOMElement;