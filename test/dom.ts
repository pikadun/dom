import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import Dom from '../src/index';

const dom = new Dom();

describe('Empty HTML string', () => {
    it('should equal', () => {
        strictEqual(dom.html.toString(), '<html><head></head><body></body></html>');
    });
});

describe('Create element and append to body', () => {
    it('should equal', () => {
        const div = dom.createElement('div');
        dom.body.appendChild(div);
        strictEqual(dom.html.toString(), '<html><head></head><body><div></div></body></html>');
    });
});

describe('Create element and append to body', () => {
    it('should equal', () => {
        const div = dom.createElement('div');
        div.setAttribute('class','test');
        dom.body.appendChild(div);
        strictEqual(dom.html.toString(), '<html><head></head><body><div></div><div class="test"></div></body></html>');
        div.setAttribute('class','test');
    });
});