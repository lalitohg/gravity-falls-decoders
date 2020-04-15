import { defaultAlphabet, getRotateNTokenAtIndex } from '../common';

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
        return '';
    }

    public decryptString(message: string): string {
        return '';
    }
}
