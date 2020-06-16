interface Node {
    value: any;
    next: Node | null;
}

export class CircularList {
    static fromString(str: string): CircularList {
        return CircularList.fromArray(str.split(''));
    }
    static fromArray(arr: any[]): CircularList {
        if (arr.length < 1) {
            return new CircularList();
        }
        const list = new CircularList();
        arr.forEach(element => list.add(element));
        list.resetHeader();
        return list;
    }

    private _elements: any[] = [];
    private _header: number = -1;

    constructor() {
    }

    private isEmpty(): boolean {
        return this._elements.length === 0;
    }

    private resetHeader() {
        if (!this.isEmpty()) {
            this._header = 0;
        }
    }

    get first(): any {
        return this.isEmpty() ? undefined : this._elements[0];
    }

    get last(): any {
        return this.isEmpty() ? undefined : this._elements[this._elements.length - 1];
    }

    get value(): any {
        return this.isEmpty() ? undefined : this.elements[this._header];
    }

    get next(): any {
        if (this.isEmpty()) {
            return undefined;
        } else if (this._header === this._elements.length - 1) {
            this.resetHeader();
            return this.first;
        } else {
            return this._elements[++this._header];
        }
    }

    get elements(): any[] {
        return [...this._elements];
    }

    public add(element: any) {
        this._elements.push(element);
        this._header = this._elements.length - 1;
    }
}