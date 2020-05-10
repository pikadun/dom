import * as Interface from '../abstraction/interface';
import Node from './Node';
import Element from './Element';
import util from '../common/util';

class Document extends Node implements Interface.Document {

    #privateHead: Interface.Element | null;
    #privateBody: Interface.Element | null;

    get head(): Interface.Element | null {
        return this.#privateHead;
    }
    get body(): Interface.Element | null {
        return this.#privateBody;
    }

    constructor() {
        super();
        this.#privateHead = null;
        this.#privateBody = null;
    }

    createElement(tagName: string): Interface.Element {
        return new Element(tagName);
    }

    getElementsByTagName(qualifiedName: string): Interface.Element[] {
        let result: Interface.Element[] = [];
        this.childNodes.forEach(childNode => {
            const node = childNode as Interface.Element;
            result = result.concat(
                util.domWalk(
                    node,
                    (e: Interface.Element) => e.tagName.toLowerCase() === qualifiedName.toLowerCase()
                )
            );
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