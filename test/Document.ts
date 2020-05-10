import { strictEqual } from 'assert';
import { describe, it } from 'mocha';
import { Document } from '../src/index';


const template = (): Document => {
    const document = new Document();
    const head = document.createElement('head');
    const body = document.createElement('body');
    document.insertBefore(head, null);
    document.appendChild(body);
    return document;
};

describe('HTML string', () => {
    it('should equal', () => {
        const document = template();
        const body = document.getElementsByTagName('body');
        body[0].appendChild(document.createElement('div'));
        strictEqual(document.toString(), '<head></head><body><div></div></body>');
    });
});

describe('Document.getElementsByTagName', () => {
    it('should equal', () => {
        const document = template();
        const body = document.getElementsByTagName('body');
        strictEqual(body[0].toString(), '<body></body>');
    });
});

describe('Document.appendChild', () => {
    it('should equal', () => {
        const document = template();
        const div = document.createElement('div');
        document.appendChild(div);
        strictEqual(document.toString(), '<head></head><body></body><div></div>');
    });
});

describe('Document.removeChild', () => {
    it('should equal', () => {
        const document = template();
        const bodys = document.getElementsByTagName('body');
        document.removeChild(bodys[0]);
        strictEqual(document.toString(), '<head></head>');
    });
});

describe('Document.insertBefore', () => {
    it('should equal', () => {
        const document = template();
        const div = document.createElement('div');
        document.insertBefore(div, null);
        strictEqual(document.toString(), '<head></head><body></body><div></div>');
    });
});

describe('Document.insertBefore', () => {
    it('should equal', () => {
        const document = template();
        const div = document.createElement('div');
        const body = document.getElementsByTagName('body');
        document.insertBefore(div, body[0]);
        strictEqual(document.toString(), '<head></head><div></div><body></body>');
    });
});

describe('Document.head', () => {
    it('should equal', () => {
        const document = template();
        strictEqual(document.head, null);
    });
});

describe('Document.body', () => {
    it('should equal', () => {
        const document = template();
        strictEqual(document.body, null);
    });
});