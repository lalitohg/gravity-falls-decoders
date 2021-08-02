import { defaultAlphabet, getRotateNTokenAtIndex, CircularList } from '../common';

interface Maps {
    encryptMap: any;
    decryptMap: any;
}

function viginereTableReducer(reducer: Maps, token: string, index: number, alphabet: string[]): Maps {
    reducer.encryptMap[token] = {};
    reducer.decryptMap[token] = {};
    alphabet.forEach((letter, letterIndex) => {
        reducer.encryptMap[token][letter] = getRotateNTokenAtIndex(letterIndex, alphabet, index);
        reducer.decryptMap[token][getRotateNTokenAtIndex(letterIndex, alphabet, index)] = letter;
    });
    return reducer;
}

export class Viginere {
    private _encryptMap: any;
    private _decryptMap: any;
    private _alphabet: string[];

    constructor(alphabet: string[] = defaultAlphabet) {
        this._alphabet = alphabet ? alphabet.map(token => token.toLowerCase()) : defaultAlphabet;
        this._generateMaps();
    }

    private _generateMaps(): any {
        const maps: Maps =  this._alphabet.reduce(
            viginereTableReducer,
            { encryptMap: {}, decryptMap: {} }
        );
        this._encryptMap = maps.encryptMap;
        this._decryptMap = maps.decryptMap;
    }

    private inputsAreValid(message: string, key: string): boolean {
        if (!message || !key) {
            return false;
        }
        if (message === '' || key === '') {
            return false;
        }
        return true;
    }

    private cleanMessage(message: string): string {
        return message.toLocaleLowerCase();
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

    public encryptString(message: string, key: string): string {
        if (!this.inputsAreValid(message, key)) {
            return '';
        }
        message = this.cleanMessage(message);
        const keyList = CircularList.fromString(key.toLocaleLowerCase());
        const encrypted = message.split('').map((token) => {
            if (this.alphabet.includes(token)) {
                let keyValue = keyList.value;
                keyList.next;
                return this.encryptMap[keyValue][token];
            }
            return token;
        });
        return encrypted.join('');
    }

    public decryptString(message: string, key: string): string {
        if (!this.inputsAreValid(message, key)) {
            return '';
        }
        message = this.cleanMessage(message);
        const keyList = CircularList.fromString(key.toLocaleLowerCase());
        const decrypted = message.split('').map((token) => {
            if (this.alphabet.includes(token)) {
                let keyValue = keyList.value;
                keyList.next;
                return this.decryptMap[keyValue][token];
            }
            return token;
        });
        return decrypted.join('');
    }
}
