import { defaultAlphabet } from '../common';

const mapReducer = (reducer: any, token: string, index: number, alphabet: string[]) => ({
    ...reducer,
    [token]: alphabet[alphabet.length - 1 - index]
});

export class Atbash {
    private _encryptMap: any;
    private _decryptMap: any;
    private _alphabet: string[];

    constructor(alphabet: string[] = defaultAlphabet) {
        this._alphabet = alphabet.map(token => token.toLowerCase());
        this._encryptMap = this._alphabet.reduce(mapReducer, {});
        this._decryptMap = [...this._alphabet].reverse().reduce(mapReducer, {});
    }

    get alphabet(): string[] {
        return [...this._alphabet];
    }
    get encryptMap() {
        return { ...this._encryptMap };
    }
    get decryptMap() {
        return { ...this._decryptMap };
    }

    public encryptString(message: string): string {
        return message.toLowerCase().split('').reduce(
            (reducer: string, token: string) => this.encryptMap[token] ? reducer += this.encryptMap[token] : reducer += token,
            ''
        );
    }

    public decryptString(message: string): string {
        return message.toLowerCase().split('').reduce(
            (reducer: string, token: string) => this.decryptMap[token] ? reducer += this.decryptMap[token] : reducer += token,
            ''
        );
    }
}