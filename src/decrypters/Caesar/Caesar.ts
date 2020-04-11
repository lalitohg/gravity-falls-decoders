import { defaultAlphabet } from '../common';
import { getRotateNTokenFromAlphabet } from '../common';

const chooseToken = (index: number, alphabet: string[]): string => getRotateNTokenFromAlphabet(index, alphabet, 3);

const encryptMapReducer: any = (reducer: any, token: string, index: number, alphabet: string[]) => ({
    ...reducer,
    [token]: chooseToken(index, alphabet)
});

const decryptMapReducer: any = (reducer: any, token: string, index: number, alphabet: string[]) => ({
    ...reducer,
    [chooseToken(index, alphabet)]: token
});

export class Caesar {
    private _encryptMap: any;
    private _decryptMap: any;
    private _alphabet: string[];

    constructor(alphabet: string[] = defaultAlphabet) {
        this._alphabet = alphabet.length > 3 ? alphabet.map(token => token.toLowerCase()) : defaultAlphabet;
        this._encryptMap = this._alphabet.reduce(encryptMapReducer, {});
        this._decryptMap = this._alphabet.reduce(decryptMapReducer, {});
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
