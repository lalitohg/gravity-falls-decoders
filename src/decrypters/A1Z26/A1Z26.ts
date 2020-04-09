import { defaultAlphabet } from '../common';

const encryptMapReducer = (reducer: any, token: string, index: number, alphabet: string[]) => ({
    ...reducer,
    [token]: `${index + 1}`
});

const decryptMapReducer = (reducer: any, token: string, index: number, alphabet: string[]) => ({
    ...reducer,
    [`${index + 1}`]: token
});

export class A1Z26 {
    private _encryptMap: any;
    private _decryptMap: any;
    private _alphabet: string[];
    private _tokenSpacer = '-';

    constructor(alphabet: string[] = defaultAlphabet) {
        this._alphabet = alphabet.map(token => token.toLowerCase());
        this._encryptMap = this._alphabet.reduce(encryptMapReducer, {});
        this._decryptMap = this._alphabet.reduce(decryptMapReducer, {});
    }

    private _encryptStringReducer = (reducer: string, token: string, index: number, alphabet: string[]) => {
        const encryptedToken = this.encryptMap[token];
        if (encryptedToken) {
            const spacer = index > 0 && this.encryptMap[alphabet[index - 1]] ? this._tokenSpacer : '';
            return `${reducer}${spacer}${encryptedToken}`;
        } else {
            return `${reducer}${token}`;
        }
    }

    private _decryptStringReducer = (reducer: string, token: string) => {
        const decryptedToken = this.decryptMap[token];
        if (decryptedToken) {
            return `${reducer}${decryptedToken}`;
        } else {
            return `${reducer}${token !== this._tokenSpacer ? token : ''}`;
        }
    };

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
        return message.toLowerCase().split('').reduce(this._encryptStringReducer, '');
    }

    public decryptString(message: string): string {
        return message.toLowerCase().split('').reduce(this._decryptStringReducer, '');
    }
}