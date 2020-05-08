import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import { Document } from '../src/index';

describe('HTML string', () => {
    it('should equal', () => {
        const dom = new Document();
        strictEqual(dom.html.toString(), '<html><head></head><body></body></html>');
    });

});

describe('Create and append element', () => {
    it('should equal', () => {
        const dom = new Document();
        const div = dom.createElement('div');
        dom.body.appendChild(div);
        strictEqual(dom.html.toString(), '<html><head></head><body><div></div></body></html>');
    });
});

describe('Remove element', () => {
    it('should equal', () => {
        const dom = new Document();
        dom.html.removeChild(dom.body);
        strictEqual(dom.html.toString(), '<html><head></head></html>');
    });
});

describe('Create and insert before element', () => {
    it('should equal', () => {
        const dom = new Document();
        const div = dom.createElement('div');
        dom.html.insertBefore(div, dom.body);
        strictEqual(dom.html.toString(), '<html><head></head><div></div><body></body></html>');
    });
});

describe('Create and insert before null element', () => {
    it('should equal', () => {
        const dom = new Document();
        const div = dom.createElement('div');
        dom.html.insertBefore(div);
        strictEqual(dom.html.toString(), '<html><head></head><body></body><div></div></html>');
    });
});

describe('Set attribute to element', () => {
    it('should equal', () => {
        const dom = new Document();
        dom.html.setAttribute('lang', 'en');
        strictEqual(dom.html.toString(), '<html lang="en"><head></head><body></body></html>');
    });
});