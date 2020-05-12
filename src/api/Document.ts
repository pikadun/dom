import * as Interface from '../abstraction/interface';
import Node from './Node';
import Element from './Element';
import util from '../common/util';

class Document extends Node implements Interface.Document {
    get textContent(): null {
        return null;
    }

    constructor() {
        super();
    }

    createElement(tagName: string): Interface.Element {
        return new Element(tagName);
    }

    getElementsByTagName(qualifiedName: string): Interface.Node[] {
        let result: Interface.Node[] = [];
        this.childNodes.forEach(childNode => {
            const node = childNode as Interface.Element;
            result = result.concat(node.getElementsByTagName(qualifiedName));
        });

        return result;
    }

    toString(): string {
        const result: string[] = [];

        this.childNodes.forEach(childNode => {
            const node = childNode as Interface.Element;
            result.push(util.serialize(node));
        });

        return result.join('');
    }
}

export default Document;