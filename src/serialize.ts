import DOMElement from './element';

class Serialize {
    encode(element: DOMElement): string {
        const strs: string[] = [];
        strs.push(`<${element.name}${this.attribute(element.attribute)}>`);
        if (element.child.length > 0) {
            element.child.forEach(elem => {
                strs.push(this.encode(elem));
            });
        }
        strs.push(`</${element.name}>`);
        return strs.join('');
    }

    attribute(attribute: { [x: string]: string }): string {
        const res: string[] = [];
        for (const attr in attribute) {
            res.push(` ${attr}="${attribute[attr]}"`);
        }
        return res.join('');
    }
}

export default new Serialize();