import { defaultAlphabet } from '../common'

export class Caesar {
    private _encryptMap: any;
    private _decryptMap: any;
    private _alphabet: string[];

    constructor(alphabet = defaultAlphabet) {
        this._alphabet = alphabet;
        this._generateMappings();
    }

    get alphabet():string[] {
        return [...this._alphabet];
    }
    get encryptMap() {
        return {...this._encryptMap};
    }
    get decryptMap() {
        return {...this._decryptMap};
    }

    private _generateMappings() {

    }
    
}
