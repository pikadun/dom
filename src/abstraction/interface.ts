export interface Document extends Node {
    readonly body: Element | null;
    readonly head: Element | null;

    createElement(tagName: string): Element;
    getElementsByTagName(qualifiedName: string): Element[];
    toString(): string;
}

export interface Element extends Node {
    readonly attributes: { [x: string]: string };
    id: string;
    readonly tagName: string;

    getElementsByTagName(qualifiedName: string): Element[];
    setAttribute(qualifiedName: string, value: string): void;
    toString(): string;
}

export interface Node {
    readonly childNodes: Node[];
    ParentNode: Node | null;
    appendChild<T extends Node>(newChild: T): T;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    removeChild<T extends Node>(oldChild: T): T;
}