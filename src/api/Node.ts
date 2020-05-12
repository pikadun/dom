import * as Interface from '../abstraction/interface';


abstract class Node implements Interface.Node {
    childNodes: Interface.Node[];
    ParentNode: Interface.Node | null;
    abstract textContent: string | null;

    constructor() {
        this.childNodes = [];
        this.ParentNode = null;
    }

    appendChild<T extends Interface.Node>(newChild: T): T {
        newChild.ParentNode = this;
        this.childNodes.push(newChild);
        return newChild;
    }

    abstract getElementsByTagName(qualifiedName: string): Interface.Node[];

    insertBefore<T extends Interface.Node>(newChild: T, refChild: Interface.Node | null): T {
        newChild.ParentNode = this;

        if (!refChild) {
            this.childNodes.push(newChild);
        } else {
            const index = this.childNodes.indexOf(newChild);
            this.childNodes.splice(index, 0, newChild);
        }
        return newChild;
    }

    removeChild<T extends Interface.Node>(oldChild: T): T {
        const index = this.childNodes.indexOf(oldChild);
        this.childNodes.splice(index, 1);
        oldChild.ParentNode = null;
        return oldChild;
    }

    abstract toString(): string;
}

export default Node;