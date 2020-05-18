export interface Document extends Node {
    createElement(tagName: string): Element;
}

export interface Element extends Node {
    readonly attributes: { [x: string]: string };
    id: string;
    readonly tagName: string;

    setAttribute(qualifiedName: string, value: string): void;
}

export interface Node {
    readonly childNodes: Node[];
    ParentNode: Node | null;
    textContent: string | null;

    appendChild<T extends Node>(newChild: T): T;
    getElementsByTagName(qualifiedName: string): Element[];
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    removeChild<T extends Node>(oldChild: T): T;
    toString(): string;
}