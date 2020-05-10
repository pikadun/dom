import * as Interface from '../abstraction/interface';
import Node from './Node';
import util from '../common/util';

class Element extends Node implements Interface.Element {
    readonly attributes: { [x: string]: string };
    id: string;

    constructor(readonly tagName: string) {
        super();
        this.attributes = {};
        this.id = '';
    }

    getElementsByTagName(qualifiedName: string): Interface.Element[] {
        return util.domWalk(
            this,
            (e: Interface.Element) => e.tagName.toLowerCase() === qualifiedName.toLowerCase()
        );
    }

    setAttribute(qualifiedName: string, value: string): void {
        this.attributes[qualifiedName] = value;
    }

    toString(): string {
        return util.serialize(this);
    }

}

export default Element;