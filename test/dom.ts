import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import { Document } from '../src/index';


const template = (): Document => {
    const document = new Document();
    const html = document.html;
    const head = document.createElement('head');
    const body = document.createElement('body');
    html.appendChild(body);
    html.insertBefore(head, body);
    return document;
};

describe('HTML string', () => {
    it('should equal', () => {
        const document = template();
        const html = document.html;
        strictEqual(html.toString(), '<html><head></head><body></body></html>');
    });
});

describe('Document.setAttribute', () => {
    it('should equal', () => {
        const document = template();
        const html = document.html;
        html.setAttribute('lang', 'en');
        strictEqual(html.toString(), '<html lang="en"><head></head><body></body></html>');
    });
});

describe('Document.appendChild', () => {
    it('should equal', () => {
        const document = template();
        const html = document.html;
        const div = document.createElement('div');
        html.appendChild(div);
        strictEqual(html.toString(), '<html><head></head><body></body><div></div></html>');
    });
});

describe('Document.getElementsByTagName', () => {
    it('should equal', () => {
        const document = template();
        const body = document.getElementsByTagName('body');
        strictEqual(body[0].toString(), '<body></body>');
    });
});

describe('Document.removeChild', () => {
    it('should equal', () => {
        const document = template();
        const html = document.html;
        const bodys = document.getElementsByTagName('body');
        html.removeChild(bodys[0]);
        strictEqual(html.toString(), '<html><head></head></html>');
    });
});

describe('Document.insertBefore', () => {
    it('should equal', () => {
        const document = template();
        const html = document.html;
        const div = document.createElement('div');
        html.insertBefore(div);
        strictEqual(html.toString(), '<html><head></head><body></body><div></div></html>');
    });
});
