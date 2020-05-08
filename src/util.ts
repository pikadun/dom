import DOMElement from './element';

class Util {
    serialize(element: DOMElement): string {
        const strs: string[] = [];
        const attrs = [];

        for (const attr in element.attribute) {
            attrs.push(` ${attr}="${element.attribute[attr]}"`);
        }

        strs.push(`<${element.tagName}${attrs.join('')}>`);

        if (element.child.length > 0) {
            element.child.forEach(elem => {
                strs.push(this.serialize(elem));
            });
        }

        strs.push(`</${element.tagName}>`);

        return strs.join('');
    }

    domWalk(element: DOMElement, fn: Function): DOMElement[] {
        const elems: DOMElement[] = [];
        let queue: DOMElement[] = [element];

        while (queue.length > 0) {
            const elem = queue.shift();
            
            if (fn(elem)) {
                elems.push((elem as DOMElement));
            }

            queue = queue.concat((elem as DOMElement).child);
        }

        return elems;
    }
}

export default new Util();