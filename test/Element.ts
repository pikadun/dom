import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import { Document } from '../src/index';


const template = (): Document => {
    const document = new Document();
    const head = document.createElement('head');
    const body = document.createElement('body');
    document.appendChild(head);
    document.appendChild(body);
    return document;
};

describe('Element.setAttribute', () => {
    it('should equal', () => {
        const document = template();
        const body = document.getElementsByTagName('body');
        body[0].setAttribute('class', 'test');
        strictEqual(document.toString(), '<head></head><body class="test"></body>');
    });
});

describe('Element.getElementsByTagName', () => {
    it('should equal', () => {
        const document = template();

        const div = document.createElement('div');
        const input = document.createElement('input');
        div.appendChild(input);

        strictEqual(div.getElementsByTagName('input')[0].toString(), '<input></input>');
    });
});