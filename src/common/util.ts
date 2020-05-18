import * as Interface from '../abstraction/interface';

class Util {
    serialize(element: Interface.Element): string {
        const strs: string[] = [];
        const attrs = [];

        for (const attr in element.attributes) {
            attrs.push(` ${attr}="${element.attributes[attr]}"`);
        }

        strs.push(`<${element.tagName}${attrs.join('')}>`);

        if (element.textContent) {
            strs.push(element.textContent);
        }

        if (element.childNodes.length > 0) {
            element.childNodes.forEach(elem => {
                strs.push(this.serialize(elem as Interface.Element));
            });
        }

        strs.push(`</${element.tagName}>`);

        return strs.join('');
    }

    domWalk(element: Interface.Element, fn: Function): Interface.Element[] {
        const elems: Interface.Element[] = [];
        let queue: Interface.Element[] = [element];

        while (queue.length > 0) {
            const elem = queue[0];
            queue.shift();

            if (fn(elem)) {
                elems.push(elem);
            }

            queue = queue.concat(elem.childNodes as Interface.Element[]);
        }

        return elems;
    }
}

export default new Util();